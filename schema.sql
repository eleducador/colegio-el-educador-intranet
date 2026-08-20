-- =========================================================================
-- ESQUEMA DE BASE DE DATOS RELACIONAL (SQL) - COLEGIO "EL EDUCADOR" 2026
-- Compatible con: PostgreSQL (Supabase / Neon), MySQL, SQLite y MariaDB
-- =========================================================================

-- 1. TABLA DE USUARIOS DEL SISTEMA Y AUTENTICACIÓN
CREATE TABLE IF NOT EXISTS tb_usuarios (
    id VARCHAR(50) PRIMARY KEY,
    codigo_institucional VARCHAR(30) UNIQUE NOT NULL,
    nombre_completo VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(30) NOT NULL CHECK (rol IN ('admin', 'director', 'docente', 'estudiante', 'padre')),
    detalle_academico VARCHAR(100),
    tiene_privilegio_admin BOOLEAN DEFAULT FALSE,
    avatar_url TEXT,
    estado VARCHAR(20) DEFAULT 'Activo',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. TABLA DE MATRÍCULAS ESCOLARES
CREATE TABLE IF NOT EXISTS tb_matriculas (
    id VARCHAR(50) PRIMARY KEY,
    codigo_estudiante VARCHAR(30) NOT NULL,
    nombre_estudiante VARCHAR(150) NOT NULL,
    dni VARCHAR(15) NOT NULL,
    nivel VARCHAR(20) NOT NULL CHECK (nivel IN ('Primaria', 'Secundaria')),
    grado VARCHAR(50) NOT NULL,
    apoderado VARCHAR(150) NOT NULL,
    estado_pago VARCHAR(50) DEFAULT 'Pagado (S/ 520.00)',
    estado_matricula VARCHAR(30) DEFAULT 'Matriculado',
    nro_constancia VARCHAR(50) UNIQUE NOT NULL,
    fecha_matricula DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (codigo_estudiante) REFERENCES tb_usuarios(codigo_institucional) ON DELETE CASCADE
);

-- 3. TABLA DE ASIGNATURAS Y CALIFICACIONES BIMESTRALES
CREATE TABLE IF NOT EXISTS tb_calificaciones (
    id VARCHAR(50) PRIMARY KEY,
    codigo_curso VARCHAR(30) NOT NULL,
    nombre_curso VARCHAR(100) NOT NULL,
    docente_responsable VARCHAR(150) NOT NULL,
    codigo_estudiante VARCHAR(30) NOT NULL,
    bimestre_1 NUMERIC(4,2) DEFAULT 0.00,
    bimestre_2 NUMERIC(4,2) DEFAULT 0.00,
    bimestre_3 NUMERIC(4,2) DEFAULT 0.00,
    bimestre_4 NUMERIC(4,2) DEFAULT 0.00,
    promedio_final NUMERIC(4,2) GENERATED ALWAYS AS ((bimestre_1 + bimestre_2 + bimestre_3 + bimestre_4)/4.0) STORED,
    estado VARCHAR(20) DEFAULT 'Aprobado',
    FOREIGN KEY (codigo_estudiante) REFERENCES tb_usuarios(codigo_institucional) ON DELETE CASCADE
);

-- 4. TABLA DE CONTROL DE CUADERNOS MEDIANTE QR
CREATE TABLE IF NOT EXISTS tb_cuadernos_qr (
    id VARCHAR(50) PRIMARY KEY,
    codigo_qr VARCHAR(100) NOT NULL,
    codigo_estudiante VARCHAR(30) NOT NULL,
    nombre_estudiante VARCHAR(150) NOT NULL,
    grado VARCHAR(50) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    docente_evaluador VARCHAR(150) NOT NULL,
    fecha_revision DATE DEFAULT CURRENT_DATE,
    puntaje NUMERIC(4,2) NOT NULL CHECK (puntaje >= 0 AND puntaje <= 20),
    sello_digital VARCHAR(50) NOT NULL, -- 'LOGRO DESTACADO ★', 'REVISADO ✓', 'FALTA COMPLETAR ⚠'
    observaciones TEXT,
    chk_margenes BOOLEAN DEFAULT TRUE,
    chk_fechas BOOLEAN DEFAULT TRUE,
    chk_teoria BOOLEAN DEFAULT TRUE,
    chk_ejercicios BOOLEAN DEFAULT TRUE,
    chk_pulcritud BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (codigo_estudiante) REFERENCES tb_usuarios(codigo_institucional) ON DELETE CASCADE
);

-- 5. TABLA DE HORARIOS ESCOLARES SEMANALES
CREATE TABLE IF NOT EXISTS tb_horarios (
    id VARCHAR(50) PRIMARY KEY,
    grado_id VARCHAR(30) NOT NULL,
    bloque_hora VARCHAR(30) NOT NULL, -- Ej: '07:30 - 08:15'
    dia_semana VARCHAR(10) NOT NULL CHECK (dia_semana IN ('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes')),
    curso VARCHAR(100) NOT NULL,
    docente VARCHAR(150) NOT NULL,
    aula VARCHAR(50) NOT NULL,
    color_tag VARCHAR(20) DEFAULT 'yellow'
);

-- 6. TABLA DE SÍLABUS ACADÉMICOS
CREATE TABLE IF NOT EXISTS tb_silabus (
    id VARCHAR(50) PRIMARY KEY,
    grado_id VARCHAR(30) NOT NULL,
    nombre_curso VARCHAR(150) NOT NULL,
    codigo_curso VARCHAR(30) NOT NULL,
    docente_responsable VARCHAR(150) NOT NULL,
    horas_semanales VARCHAR(30) DEFAULT '4 horas semanales',
    competencias JSON,
    unidades_tematicas JSON,
    bibliografia TEXT
);

-- 7. TABLA DE PAGOS Y PENSIONES ESCOLARES
CREATE TABLE IF NOT EXISTS tb_pensiones (
    id VARCHAR(50) PRIMARY KEY,
    codigo_familia VARCHAR(30) NOT NULL,
    concepto VARCHAR(150) NOT NULL,
    monto NUMERIC(8,2) NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    estado_pago VARCHAR(20) DEFAULT 'pending' CHECK (estado_pago IN ('pending', 'paid', 'overdue')),
    nro_recibo VARCHAR(50),
    metodo_pago VARCHAR(50),
    fecha_pago TIMESTAMP
);

-- 8. TABLA DE COMUNICADOS Y CIRCULARES INSTITUCIONALES
CREATE TABLE IF NOT EXISTS tb_comunicados (
    id VARCHAR(50) PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    categoria VARCHAR(50) DEFAULT 'Institucional',
    prioridad VARCHAR(20) DEFAULT 'normal' CHECK (prioridad IN ('normal', 'urgent', 'high')),
    autor VARCHAR(100) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
