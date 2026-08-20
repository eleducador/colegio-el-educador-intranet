const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;
const DB_PATH = path.join(__dirname, 'db.json');

// Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Helper de lectura segura de base de datos
function readDatabase() {
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error al leer db.json:', err);
  }
  return {};
}

// Helper de escritura atÃ³mica segura de base de datos
let isWriting = false;
const writeQueue = [];

function safeWriteDatabase(data, callback) {
  writeQueue.push({ data, callback });
  processWriteQueue();
}

function processWriteQueue() {
  if (isWriting || writeQueue.length === 0) return;
  isWriting = true;
  const item = writeQueue.shift();

  try {
    const jsonStr = JSON.stringify(item.data, null, 2);
    fs.writeFileSync(DB_PATH, jsonStr, 'utf-8');
    if (item.callback) item.callback(null, true);
  } catch (err) {
    console.error('Error al escribir en db.json:', err);
    if (item.callback) item.callback(err, false);
  } finally {
    isWriting = false;
    if (writeQueue.length > 0) {
      setImmediate(processWriteQueue);
    }
  }
}

// =========================================================================
// RUTAS DE LA API REST (SINCRONIZACIÃ“N Y PERSISTENCIA)
// =========================================================================

// Health check para Render
app.get(['/health', '/api/health'], (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// InformaciÃ³n del servidor
app.get('/api/server-info', (req, res) => {
  res.json({
    status: 'online',
    platform: 'Render Cloud Web Service',
    environment: process.env.NODE_ENV || 'production',
    uptime: Math.floor(process.uptime()) + 's',
    timestamp: new Date().toISOString()
  });
});

// Obtener estado actual de la base de datos
app.get(['/api/state', '/api/db'], (req, res) => {
  const db = readDatabase();
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.json(db);
});

// Sincronizar estado completo desde cualquier dispositivo (Celular o PC)
app.post('/api/sync', (req, res) => {
  const incomingData = req.body;
  if (!incomingData || typeof incomingData !== 'object') {
    return res.status(400).json({ success: false, error: 'Cuerpo de datos invÃ¡lido' });
  }

  // Leer estado existente y fusionar de manera no destructiva
  const currentDb = readDatabase();
  const mergedDb = Object.assign({}, currentDb, incomingData);

  safeWriteDatabase(mergedDb, (err) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error al persistir en disco' });
    }
    res.json({ success: true, message: 'Estado sincronizado exitosamente en Render' });
  });
});

// Descargar backup de seguridad
app.get('/api/backup', (req, res) => {
  if (fs.existsSync(DB_PATH)) {
    res.download(DB_PATH, 'backup_colegio_educador.json');
  } else {
    res.status(404).json({ error: 'Base de datos no encontrada' });
  }
});

// Rutas de compatibilidad de imágenes del colegio (raíz y /assets)
app.get(['/logo.png', '/assets/logo.png'], (req, res) => {
  const p1 = path.join(__dirname, 'logo.png');
  const p2 = path.join(__dirname, 'assets', 'logo.png');
  if (fs.existsSync(p1)) return res.sendFile(p1);
  if (fs.existsSync(p2)) return res.sendFile(p2);
  res.status(404).send('Logo no encontrado');
});

app.get(['/login_bg_official.jpg', '/assets/login_bg_official.jpg'], (req, res) => {
  const p1 = path.join(__dirname, 'login_bg_official.jpg');
  const p2 = path.join(__dirname, 'assets', 'login_bg_official.jpg');
  if (fs.existsSync(p1)) return res.sendFile(p1);
  if (fs.existsSync(p2)) return res.sendFile(p2);
  res.status(404).send('Fondo no encontrado');
});

// Servir archivos estaticos del frontend (HTML, CSS, JS, Assets) con UTF-8 explicito
app.use(express.static(__dirname, {
  etag: true,
  maxAge: '1h',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
    }
  }
}));

// Fallback SPA: Cualquier ruta no encontrada retorna index.html con charset UTF-8
app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor en 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log('=================================================================');
  console.log('  🚀 INTRANET I.E.P. EL EDUCADOR ACTIVA EN PUERTO: ' + PORT);
  console.log('  🌐 Listo para produccion en Render (Multi-Dispositivo con SSL)');
  console.log('=================================================================');
});