# 🏫 I.E.P. EL EDUCADOR (S.J.L.) - Sistema Intranet & Control QR 2026

Sistema integral de gestión académica, control de asistencia en puerta por QR, sellado digital de cuadernos bajo demanda y emisión de boletas oficiales MINEDU.

---

## 🚀 Despliegue en Render (Paso a Paso)

Este proyecto está **100% configurado y listo para desplegarse gratis en Render**.

### Opción 1: Despliegue Automático con GitHub (Recomendado)

1. **Crear repositorio en GitHub:**
   * Crea un nuevo repositorio en [GitHub](https://github.com/new) (por ejemplo: colegio-el-educador-intranet).
   * Sube los archivos de este proyecto ejecutando en tu terminal:
     `ash
     git init
     git add .
     git commit -m Sistema Intranet y Escáner QR v10.1
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/colegio-el-educador-intranet.git
     git push -u origin main
     `

2. **Crear Web Service en Render:**
   * Entra a [Render.com](https://dashboard.render.com/) e inicia sesión con tu cuenta de GitHub.
   * Haz clic en **New +** ➔ **Web Service**.
   * Selecciona tu repositorio colegio-el-educador-intranet.
   * Render detectará la configuración automáticamente (ender.yaml y package.json):
     * **Name:** colegio-el-educador-intranet
     * **Runtime:** Node
     * **Build Command:** 
pm install
     * **Start Command:** 
pm start
     * **Instance Type:** Free
   * Haz clic en **Create Web Service**.

3. **¡Listo! Tu Intranet estará en línea en ~1 minuto:**
   * Obtendrás una URL pública segura con HTTPS gratis:
     https://colegio-el-educador-intranet.onrender.com
   * Al tener HTTPS, **todos los celulares podrán activar la cámara trasera para escanear los stickers QR de los cuadernos**.

---

## 📱 Ventajas de Desplegar en Render:

* 🔒 **HTTPS / SSL Automático:** Indispensable para que los navegadores móviles permitan el uso de la cámara de los celulares.
* 👥 **Multi-Docente Simultáneo:** Varios profesores y el auxiliar pueden escanear y calificar cuadernos al mismo tiempo desde cualquier lugar.
* 🛡️ **Persistencia Blindada:** Sincronización continua de datos entre localStorage, memoria y db.json.
* ⚡ **Control Bajo Demanda:** La cámara solo se activa cuando el usuario la enciende, ahorrando batería y evitando lecturas accidentales.

---

## 👥 Credenciales de Acceso Oficiales:

| Perfil | Usuario | Contraseña | Rol |
| :--- | :--- | :--- | :--- |
| **Coordinación & TI** | dmin | dmin2026 | Coordinación General & Documentación |
| **Dirección** | director | director2026 | Director General |
| **Docente Matemática** | prof.silva | docente2026 | Prof. Roberto Silva |
| **Auxiliar Puerta** | uxiliar | uxiliar2026 | Lic. Carlos Medina |
| **Estudiante** | sofia.mendez | estudiante2026 | Sofía Méndez Flores |
| **Padre / Apoderado** | carmen.mendez | padre2026 | Dra. Carmen Méndez |
