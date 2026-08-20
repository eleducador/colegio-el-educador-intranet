/* === data.js === */
/**
 * Datos Iniciales del Sistema - Institución Educativa Privada "EL EDUCADOR" (S.J.L.)
 * "21 años dejando huellas" • UGEL 05
 */

const initialData = {
  institution: {
    name: "INSTITUCIÓN EDUCATIVA PRIVADA \"EL EDUCADOR\"",
    levels: "INICIAL - PRIMARIA - SECUNDARIA",
    slogan: "21 años dejando huellas",
    district: "San Juan de Lurigancho (S.J.L.)",
    ugel: "UGEL 05",
    coordinator: "Prof. Alex Lino",
    economicReport: {
      month: "Agosto 2026",
      collectedAmount: 25130.00,
      targetAmount: 24000.00,
      reportCode: "INFORME- N°003 /ED - COORDINACIÓN Y DOCUMENTACIÓN",
      reportDate: "15/08/2026"
    }
  },

  academicYear: "2026 - Año Lectivo",
  currentPeriod: "3er Bimestre",

  // 1. Usuarios con Credenciales de Acceso Oficiales
  users: {
    admin: {
      id: "ADM-LINO-001",
      username: "admin",
      password: "admin2026",
      name: "Prof. Alex Lino",
      email: "coordinacion@eleducador.edu.pe",
      role: "admin",
      roleLabel: "Coordinación General & Documentación",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      totalUsers: 950,
      activeEnrollments: 850,
      adminTeachersCount: 4,
      totalIncome: 25130.00
    },
    director: {
      id: "DIR-2026-001",
      username: "director",
      password: "director2026",
      name: "Lic. Manuel Cornejo",
      email: "direccion@eleducador.edu.pe",
      role: "director",
      roleLabel: "Director General",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      totalStudents: 850,
      totalTeachers: 48,
      avgAttendance: "96.4%",
      feeCollectionRate: "104.7% (S/ 25,130.00)"
    },
    docente: {
      id: "DOC-2026-015",
      username: "roberto.silva",
      aliases: ["roberto.silva", "prof.silva", "roberto silva", "silva", "docente", "prof. roberto silva"],
      password: "docente2026",
      name: "Prof. Roberto Silva",
      email: "roberto.silva@eleducador.edu.pe",
      role: "docente",
      roleLabel: "Docente de Matemáticas",
      assignedGrades: ["3ro Sec A", "4to Sec A", "5to Sec B"],
      hasAdminPrivileges: true,
      adminPrivilegeLabel: "Coordinador Pedagógico (Permisos de Edición)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      totalStudents: 92,
      pendingGrading: 4,
      scannedNotebooksToday: 18
    },
    estudiante: {
      id: "EST-2026-042",
      username: "sofia.mendez",
      password: "estudiante2026",
      name: "Sofía Méndez",
      email: "sofia.mendez@eleducador.edu.pe",
      role: "estudiante",
      roleLabel: "Estudiante",
      gradeLevel: "4to Año - Secundaria 'A'",
      gradeId: "4sec-a",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      tutor: "Prof. Alex Lino",
      generalAverage: 18.4,
      attendanceRate: "98.5%",
      pendingTasksCount: 2,
      paymentsUpToDate: true,
      pensionStatus: "Al Día",
      isAccessLocked: false,
      pendingDebtAmount: 0.00,
      pendingConcept: "--",
      notebooksUpToDate: "5/6 al día"
    },
    auxiliar: {
      id: "AUX-2026-004",
      username: "auxiliar",
      aliases: ["auxiliar", "auxiliar.puerta", "auxiliar2026", "carlos.medina"],
      password: "auxiliar2026",
      name: "Lic. Carlos Medina",
      email: "auxiliar@eleducador.edu.pe",
      role: "auxiliar",
      roleLabel: "Auxiliar de Educación & Portería",
      assignedZones: ["Portería Principal (Puerta 1)", "Patio Central & Pabellón Secundaria"],
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      scannedToday: 42,
      notebooksReviewedToday: 26,
      incidentsReportedToday: 2,
      shift: "Turno Mañana (07:00 AM - 02:30 PM)"
    },
    padre: {
      id: "FAM-2026-108",
      username: "carmen.mendez",
      password: "padre2026",
      name: "Dra. Carmen Méndez",
      email: "carmen.mendez@gmail.com",
      role: "padre",
      roleLabel: "Padre / Apoderado",
      selectedChildId: "EST-2026-042",
      children: [
        {
          id: "EST-2026-042",
          name: "Sofía Méndez Flores",
          dni: "74891230",
          level: "Secundaria",
          grade: "4to de Secundaria 'A'",
          gradeId: "4sec-a",
          tutor: "Prof. Roberto Silva",
          generalAverage: 18.4,
          attendanceRate: "98.5%",
          notebooksUpToDate: "5/6 Al Día",
          pendingTasksCount: 1,
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          notebooks: [
            { course: "[Formato] Matemática", teacher: "Prof. Roberto Silva", lastDate: "16/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Tareas completas al 100%, márgenes impecables y esquemas en orden." },
            { course: "[Cuaderno] Comunicación", teacher: "Miss María Daysi Reyes", lastDate: "15/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "17 (A)", remarks: "Análisis de textos y caligrafía óptima. Muy buen desarrollo." },
            { course: "🔬 Ciencia y Tecnología", teacher: "Miss Leyli Reyes", lastDate: "14/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "18 (AD)", remarks: "Prácticas experimentales ilustradas y fichas de laboratorio selladas." },
            { course: "🌎 Ciencias Sociales", teacher: "Prof. Javier Vega", lastDate: "12/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "16 (A)", remarks: "Mapas históricos y resúmenes de época bien estructurados." },
            { course: "🇬🇧 Inglés", teacher: "Miss Andrea Ramos", lastDate: "11/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Vocabulario y ejercicios de gramática avanzados completos." },
            { course: "💻 EPT (Computación)", teacher: "Prof. Alex Lino", lastDate: "10/08/2026", status: "observado", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> OBSERVADO", score: "13 (B)", remarks: "Falta pegar y desarrollar la ficha de proyecto técnico N° 3. Presentar este viernes." }
          ]
        },
        {
          id: "EST-2026-088",
          name: "Mateo Méndez Flores",
          dni: "78912344",
          level: "Primaria",
          grade: "1ro de Primaria 'A'",
          gradeId: "1prim-a",
          tutor: "Miss Julisa Magali Arroyo Araujo",
          generalAverage: 19.2,
          attendanceRate: "100%",
          notebooksUpToDate: "4/4 Al Día",
          pendingTasksCount: 0,
          avatar: "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=150&auto=format&fit=crop&q=80",
          notebooks: [
            { course: "🔢 Lógico Matemático", teacher: "Miss Julisa Arroyo", lastDate: "16/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "20 (AD)", remarks: "Numeración y sumas perfectas. Excelente coloreado y trazos." },
            { course: "✏️ Comunicación Integral", teacher: "Miss Julisa Arroyo", lastDate: "15/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Lectoescritura fluida y caligrafía prolija." },
            { course: "🌱 Ciencia y Ambiente", teacher: "Miss Maritza", lastDate: "14/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Fichas de los seres vivos completas y coloreadas." },
            { course: "🎨 Arte y Cultura", teacher: "Miss Julisa Arroyo", lastDate: "12/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "20 (AD)", remarks: "Técnicas de dactilopintura y recortado excelentes." }
          ]
        }
      ],
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      pensionStatus: "Al Día",
      isAccessLocked: false,
      pendingDebtAmount: 0.00,
      pendingConcept: "--"
    }
  },

  // Familias y Estado Financiero en Tiempo Real
  familiesFinancial: [
    {
      familyId: "FAM-2026-108",
      guardian: "Dra. Carmen Méndez",
      studentName: "Sofía Méndez",
      studentCode: "EST-2026-042",
      grade: "4to Sec 'A'",
      pensionStatus: "bloqueado_deuda",
      pendingAmount: 480.00,
      pendingConcept: "Pensión Escolar - Agosto 2026",
      dueDate: "15/08/2026",
      isAccessLocked: true,
      lastPaymentDate: null
    },
    {
      familyId: "FAM-2026-044",
      guardian: "Sr. Roberto Díaz",
      studentName: "Carlos Benítez",
      studentCode: "EST-2026-011",
      grade: "4to Sec 'A'",
      pensionStatus: "al_dia",
      pendingAmount: 0.00,
      pendingConcept: "--",
      dueDate: "--",
      isAccessLocked: false,
      lastPaymentDate: "10/08/2026"
    },
    {
      familyId: "FAM-2026-092",
      guardian: "Sra. Teresa Oropeza",
      studentName: "Brini Yuneyli Pocomo Oropeza",
      studentCode: "EST-2026-003",
      grade: "Inicial 5 años",
      pensionStatus: "al_dia",
      pendingAmount: 0.00,
      pendingConcept: "Matrícula 2026",
      dueDate: "--",
      isAccessLocked: false,
      lastPaymentDate: "14/08/2026"
    }
  ],

  // 2. Directorio Real de Personal Docente y Administrativo (del Informe Oficial)
  systemUsers: [
    {
      id: "USR-001",
      code: "ADM-LINO-001",
      username: "admin",
      password: "admin2026",
      name: "Prof. Alex Lino",
      email: "coordinacion@eleducador.edu.pe",
      role: "Directivo",
      detail: "Coordinador General & Documentación",
      hasAdminPrivilege: true,
      status: "Activo",
      createdDate: "05/01/2026"
    },
    {
      id: "USR-002",
      code: "DIR-2026-001",
      username: "director",
      password: "director2026",
      name: "Lic. Manuel Cornejo",
      email: "direccion@eleducador.edu.pe",
      role: "Directivo",
      detail: "Director General",
      hasAdminPrivilege: true,
      status: "Activo",
      createdDate: "06/01/2026"
    },
    {
      id: "USR-003",
      code: "AUX-2026-004",
      username: "auxiliar",
      password: "auxiliar2026",
      name: "Lic. Carlos Medina",
      email: "auxiliar@eleducador.edu.pe",
      role: "Auxiliar",
      detail: "Auxiliar de Educación & Portería (Control de Cuadernos y Asistencia)",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "08/01/2026"
    },
    {
      id: "USR-004",
      code: "DOC-2026-015",
      username: "roberto.silva",
      password: "docente2026",
      name: "Prof. Roberto Silva",
      email: "roberto.silva@eleducador.edu.pe",
      role: "Docente",
      detail: "Matemática Avanzada (Secundaria)",
      assignedGrades: ["3ro Sec", "4to Sec", "5to Sec"],
      weeklyHours: "24 hrs",
      hasAdminPrivilege: true,
      status: "Activo",
      createdDate: "10/01/2026"
    },
    {
      id: "USR-004",
      code: "DOC-2026-008",
      username: "fernando.rojas",
      password: "docente2026",
      name: "Prof. Fernando Rojas",
      email: "fernando.rojas@eleducador.edu.pe",
      role: "Docente",
      detail: "Computación & Robótica",
      assignedGrades: ["1ro Sec", "2do Sec", "3ro Sec", "4to Sec", "5to Sec"],
      weeklyHours: "22 hrs",
      hasAdminPrivilege: true,
      status: "Activo",
      createdDate: "12/01/2026"
    },
    {
      id: "USR-005",
      code: "DOC-2026-007",
      username: "leyli.reyes",
      password: "docente2026",
      name: "Miss Leyli Graciela Reyes Cerquen",
      email: "leyli.reyes@eleducador.edu.pe",
      role: "Docente",
      detail: "Ciencia y Tecnología (Física & Química)",
      assignedGrades: ["3ro Sec", "4to Sec", "5to Sec"],
      weeklyHours: "20 hrs",
      hasAdminPrivilege: true,
      status: "Activo",
      createdDate: "15/01/2026"
    },
    {
      id: "USR-006",
      code: "DOC-2026-006",
      username: "maria.reyes",
      password: "docente2026",
      name: "Miss María Daysi Reyes Milla",
      email: "maria.reyes@eleducador.edu.pe",
      role: "Docente",
      detail: "Comunicación & Literatura",
      assignedGrades: ["1ro Sec", "2do Sec", "4to Sec"],
      weeklyHours: "18 hrs",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "20/01/2026"
    },
    {
      id: "USR-007",
      code: "DOC-2026-005",
      username: "julisa.arroyo",
      password: "docente2026",
      name: "Miss Julisa Magali Arroyo Araujo",
      email: "julisa.arroyo@eleducador.edu.pe",
      role: "Docente",
      detail: "Nivel Primaria",
      assignedGrades: ["1ro Prim", "2do Prim", "3ro Prim"],
      weeklyHours: "28 hrs",
      hasAdminPrivilege: true,
      status: "Activo",
      createdDate: "18/01/2026"
    },
    {
      id: "USR-008",
      code: "DOC-2026-004",
      username: "miss.maritza",
      password: "docente2026",
      name: "Miss Maritza",
      email: "maritza@eleducador.edu.pe",
      role: "Docente",
      detail: "Nivel Inicial (3, 4 y 5 años)",
      assignedGrades: ["Inicial 3 años", "Inicial 4 años", "Inicial 5 años"],
      weeklyHours: "30 hrs",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "15/01/2026"
    },
    {
      id: "USR-009",
      code: "EST-2026-042",
      username: "sofia.mendez",
      password: "estudiante2026",
      name: "Sofía Méndez Flores",
      email: "sofia.mendez@eleducador.edu.pe",
      role: "Estudiante",
      detail: "4to de Secundaria",
      dni: "74891230",
      guardian: "Dra. Carmen Méndez",
      tutor: "Prof. Roberto Silva",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "05/02/2026"
    },
    {
      id: "USR-010",
      code: "EST-2026-011",
      username: "carlos.benitez",
      password: "estudiante2026",
      name: "Carlos Benítez Díaz",
      email: "carlos.benitez@eleducador.edu.pe",
      role: "Estudiante",
      detail: "4to de Secundaria",
      dni: "75129034",
      guardian: "Sr. Roberto Díaz",
      tutor: "Prof. Roberto Silva",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "06/02/2026"
    },
    {
      id: "USR-011",
      code: "EST-2026-025",
      username: "mateo.ramos",
      password: "estudiante2026",
      name: "Mateo Ramos Quispe",
      email: "mateo.ramos@eleducador.edu.pe",
      role: "Estudiante",
      detail: "3ro de Secundaria",
      dni: "76891209",
      guardian: "Sra. Lucía Quispe",
      tutor: "Miss Leyli Reyes",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "07/02/2026"
    },
    {
      id: "USR-012",
      code: "FAM-2026-108",
      username: "carmen.mendez",
      password: "padre2026",
      name: "Dra. Carmen Méndez",
      email: "carmen.mendez@gmail.com",
      role: "Apoderado",
      detail: "Apoderada de Sofía Méndez Flores (4to Sec)",
      dni: "41982301",
      phone: "987-654-321",
      studentName: "Sofía Méndez Flores",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "05/02/2026"
    },
    {
      id: "USR-013",
      code: "FAM-2026-044",
      username: "roberto.diaz",
      password: "padre2026",
      name: "Sr. Roberto Díaz",
      email: "roberto.diaz@gmail.com",
      role: "Apoderado",
      detail: "Apoderado de Carlos Benítez Díaz (4to Sec)",
      dni: "40891278",
      phone: "984-123-456",
      studentName: "Carlos Benítez Díaz",
      hasAdminPrivilege: false,
      status: "Activo",
      createdDate: "06/02/2026"
    }
  ],

  // Configuración de Pestañas y Espacios Visibles por Perfil (Editable por el Administrador)
  navigationTabsConfig: {
    auxiliar: [
      { id: "dashboard", label: "Inicio / Turno Auxiliar", icon: "dashboard", enabled: true },
      { id: "asistencia", label: "[Portería] Registro de Ingreso & QR", badge: "Portería", icon: "attendance", enabled: true },
      { id: "cuadernos-qr", label: "Lector de Cuadernos QR", badge: "CÁMARA", icon: "qr", enabled: true },
      { id: "comunicados", label: "Informes & Circulares", icon: "announcements", enabled: true }
    ],
    docente: [
      { id: "dashboard", label: "Inicio / Resumen", icon: "dashboard", enabled: true },
      { id: "cuadernos-qr", label: "Lector de Cuadernos QR", badge: "CÁMARA", icon: "qr", enabled: true },
      { id: "calificaciones", label: "Registro de Notas", badge: "Bimestral", icon: "grades", enabled: true },
      { id: "horarios", label: "Horario de Clases", icon: "schedule", enabled: true },
      { id: "silabus", label: "Sílabus Curriculares", icon: "syllabus", enabled: true },
      { id: "tareas", label: "Aula Virtual / Quizzes", badge: "10P", icon: "virtual", enabled: true },
      { id: "asistencia", label: "[Portería] Registro de Ingreso & QR", badge: "Puerta", icon: "attendance", enabled: true },
      { id: "comunicados", label: "Informes & Circulares", icon: "announcements", enabled: true },
      { id: "boleta", label: "Boleta Oficial MINEDU", badge: "2026", icon: "boleta", enabled: true }
    ],
    estudiante: [
      { id: "dashboard", label: "Inicio / Resumen", icon: "dashboard", enabled: true },
      { id: "calificaciones", label: "Registro de Notas", icon: "grades", enabled: true },
      { id: "horarios", label: "Horario de Clases", icon: "schedule", enabled: true },
      { id: "silabus", label: "Sílabus Curriculares", icon: "syllabus", enabled: true },
      { id: "cuadernos-qr", label: "Control Cuadernos QR", icon: "qr", enabled: true },
      { id: "tareas", label: "Aula Virtual / Quizzes", badge: "10P", icon: "virtual", enabled: true },
      { id: "asistencia", label: "📅 Mi Asistencia & Fotocheck", icon: "attendance", enabled: true },
      { id: "comunicados", label: "Informes & Circulares", icon: "announcements", enabled: true },
      { id: "boleta", label: "Boleta Oficial PDF", icon: "boleta", enabled: true }
    ],
    padre: [
      { id: "dashboard", label: "Inicio / Resumen", icon: "dashboard", enabled: true },
      { id: "horarios", label: "Horario de Clases", icon: "schedule", enabled: true },
      { id: "silabus", label: "Sílabus Curriculares", icon: "syllabus", enabled: true },
      { id: "cuadernos-qr", label: "Informe Revisión Cuadernos", badge: "SELLOS QR", icon: "qr", enabled: true },
      { id: "tareas", label: "Aula Virtual", icon: "virtual", enabled: true },
      { id: "asistencia", label: "📅 Asistencia de mi Hijo(a)", icon: "attendance", enabled: true },
      { id: "comunicados", label: "Informes y Circulares", badge: "N°003", icon: "announcements", enabled: true },
      { id: "pagos", label: "Pensiones & Recaudación", badge: "S/ 480", icon: "payments", enabled: true }
    ],
    director: [
      { id: "dashboard", label: "Inicio / Resumen", icon: "dashboard", enabled: true },
      { id: "database", label: "Base de Datos & DB", badge: "DB Online", icon: "database", enabled: true },
      { id: "usuarios-matriculas", label: "Expedientes & Matrículas", badge: "UGEL 05", icon: "users", enabled: true },
      { id: "cuadernos-qr", label: "Supervisión Cuadernos QR", badge: "CÁMARA", icon: "qr", enabled: true },
      { id: "calificaciones", label: "Auditoría de Calificaciones", badge: "Bimestral", icon: "grades", enabled: true },
      { id: "horarios", label: "Horarios Institucionales", icon: "schedule", enabled: true },
      { id: "silabus", label: "Sílabus Curriculares", icon: "syllabus", enabled: true },
      { id: "tareas", label: "Aula Virtual", icon: "virtual", enabled: true },
      { id: "asistencia", label: "[Portería] Registro de Ingreso & QR", badge: "En Vivo", icon: "attendance", enabled: true },
      { id: "comunicados", label: "Informes & Circulares", badge: "N°003", icon: "announcements", enabled: true },
      { id: "pagos", label: "Reportes Económicos & Caja", badge: "S/ 25,130", icon: "payments", enabled: true },
      { id: "boleta", label: "Boleta Oficial MINEDU", icon: "boleta", enabled: true }
    ]
  },

  // 3. Matrículas y Fichas Únicas de Matrícula (FUM - SIAGIE / UGEL 05)
  enrollments: [
    {
      id: "MATR-2026-001",
      studentCode: "EST-2026-042",
      studentName: "Sofía Méndez Flores",
      dni: "74891230",
      siagieCode: "2026-74891230",
      birthDate: "14/05/2010",
      gender: "Femenino",
      address: "Av. Próceres de la Independencia 1420",
      district: "San Juan de Lurigancho",
      bloodType: "O+",
      insurance: "EsSalud (Activo)",
      allergies: "Ninguna conocida / Sin alergias",
      medicalCondition: "Ninguna (Apta para actividad física y talleres)",
      emergencyContact: "Sr. Carlos Méndez (Padre)",
      emergencyPhone: "984-555-123",
      level: "Secundaria",
      grade: "4° de Secundaria",
      gradeId: "4sec",
      guardian: "Dra. Carmen Méndez",
      guardianDni: "41982301",
      guardianPhone: "987-654-321",
      guardianEmail: "carmen.mendez@gmail.com",
      enrollmentDate: "15/02/2026",
      feeStatus: "Pagado (S/ 520.00)",
      status: "Matriculado (FUM Completa)",
      certificateNo: "CONST-MAT-2026-042",
      documents: {
        dniStudent: true,
        dniParent: true,
        birthCertificate: true,
        siagieFUM: true,
        reportCard: true,
        vaccinationCard: true
      }
    },
    {
      id: "MATR-2026-002",
      studentCode: "EST-2026-011",
      studentName: "Carlos Benítez Díaz",
      dni: "75129034",
      siagieCode: "2026-75129034",
      birthDate: "20/09/2010",
      gender: "Masculino",
      address: "Jr. Las Flores 340, Urb. Zárate",
      district: "San Juan de Lurigancho",
      bloodType: "A+",
      insurance: "SIS Escolar",
      allergies: "Alergia a la Penicilina",
      medicalCondition: "Ninguna (Apto para deportes)",
      emergencyContact: "Sra. Rosa Díaz (Tía)",
      emergencyPhone: "981-234-567",
      level: "Secundaria",
      grade: "4° de Secundaria",
      gradeId: "4sec",
      guardian: "Sr. Roberto Díaz",
      guardianDni: "40891278",
      guardianPhone: "984-123-456",
      guardianEmail: "roberto.diaz@gmail.com",
      enrollmentDate: "06/02/2026",
      feeStatus: "Pagado (S/ 520.00)",
      status: "Matriculado",
      certificateNo: "CONST-MAT-2026-011",
      documents: {
        dniStudent: true,
        dniParent: true,
        birthCertificate: true,
        siagieFUM: true,
        reportCard: true,
        vaccinationCard: true
      }
    },
    {
      id: "MATR-2026-003",
      studentCode: "EST-2026-055",
      studentName: "Gael Alessandro Cáceres Ramos",
      dni: "76541298",
      siagieCode: "2026-76541298",
      birthDate: "11/07/2010",
      gender: "Masculino",
      address: "Av. Las Flores de Primavera 1120",
      district: "San Juan de Lurigancho",
      bloodType: "O+",
      insurance: "EsSalud (Activo)",
      allergies: "Sin alergias",
      medicalCondition: "Ninguna (Apto)",
      emergencyContact: "Sr. Juan Carlos Cáceres (Padre)",
      emergencyPhone: "984-777-888",
      level: "Secundaria",
      grade: "4° de Secundaria",
      gradeId: "4sec",
      guardian: "Sr. Juan Carlos Cáceres",
      guardianDni: "41298374",
      guardianPhone: "984-777-888",
      guardianEmail: "juan.caceres@gmail.com",
      enrollmentDate: "08/02/2026",
      feeStatus: "Pagado (S/ 520.00)",
      status: "Matriculado (FUM Completa)",
      certificateNo: "CONST-MAT-2026-055",
      documents: {
        dniStudent: true,
        dniParent: true,
        birthCertificate: true,
        siagieFUM: true,
        reportCard: true,
        vaccinationCard: true
      }
    },
    {
      id: "MATR-2026-004",
      studentCode: "EST-2026-089",
      studentName: "Marina del Carmen Albújar Zegarra",
      dni: "75849301",
      siagieCode: "2026-75849301",
      birthDate: "12/03/2012",
      gender: "Femenino",
      address: "Av. Canto Grande 890",
      district: "San Juan de Lurigancho",
      bloodType: "O+",
      insurance: "EsSalud",
      allergies: "Sin alergias",
      medicalCondition: "Ninguna",
      emergencyContact: "Sr. Jorge Albújar (Padre)",
      emergencyPhone: "978-901-234",
      level: "Secundaria",
      grade: "2° de Secundaria",
      gradeId: "2sec",
      guardian: "Sra. Carmen Zegarra",
      guardianDni: "42109845",
      guardianPhone: "978-901-234",
      guardianEmail: "carmen.zegarra@gmail.com",
      enrollmentDate: "10/02/2026",
      feeStatus: "Pagado (S/ 520.00)",
      status: "Matriculado",
      certificateNo: "CONST-MAT-2026-089",
      documents: {
        dniStudent: true,
        dniParent: true,
        birthCertificate: true,
        siagieFUM: true,
        reportCard: true,
        vaccinationCard: true
      }
    },
    {
      id: "MATR-2026-004",
      studentCode: "EST-2026-PEND-01",
      studentName: "Brini Yuneyli Pocomo Oropeza",
      dni: "79234102",
      siagieCode: "2026-PEND-003",
      birthDate: "18/11/2020",
      gender: "Femenino",
      address: "Calle Los Cedros Mz. B Lote 4",
      district: "San Juan de Lurigancho",
      bloodType: "O+",
      insurance: "SIS",
      allergies: "Sin alergias",
      medicalCondition: "En observación pediátrica de rutina",
      emergencyContact: "Sra. Teresa Oropeza",
      emergencyPhone: "965-432-109",
      level: "Inicial",
      grade: "Inicial 5 años",
      gradeId: "ini5",
      guardian: "Sra. Teresa Oropeza",
      guardianDni: "45091283",
      guardianPhone: "965-432-109",
      guardianEmail: "teresa.oropeza@gmail.com",
      enrollmentDate: "15/08/2026",
      feeStatus: "Al Día",
      status: "Pendiente Documentación (Partida de Nacimiento)",
      certificateNo: "PEND-DOC-003/ED",
      documents: {
        dniStudent: true,
        dniParent: true,
        birthCertificate: false,
        siagieFUM: true,
        reportCard: false,
        vaccinationCard: true
      }
    },
    {
      id: "MATR-2026-005",
      studentCode: "EX-EST-2025-089",
      studentName: "Evelin Estefanía Díaz Chirre",
      dni: "71290384",
      siagieCode: "2025-71290384",
      birthDate: "05/04/2008",
      gender: "Femenino",
      address: "Av. Gran Chimú 650",
      district: "San Juan de Lurigancho",
      bloodType: "B+",
      insurance: "Particular (Rímac)",
      allergies: "Sin alergias",
      medicalCondition: "Ninguna",
      emergencyContact: "Familia Díaz Chirre",
      emergencyPhone: "991-234-876",
      level: "Secundaria (Egresada)",
      grade: "Certificado de Estudios",
      gradeId: "5sec",
      guardian: "Familia Díaz Chirre",
      guardianDni: "40192834",
      guardianPhone: "991-234-876",
      guardianEmail: "diaz.chirre@gmail.com",
      enrollmentDate: "15/08/2026",
      feeStatus: "Pagado Trámite",
      status: "En Observación UGEL 05 (Consulta en curso)",
      certificateNo: "CERT-UGEL05-RECH-2",
      documents: {
        dniStudent: true,
        dniParent: true,
        birthCertificate: true,
        siagieFUM: true,
        reportCard: true,
        vaccinationCard: true
      }
    }
  ],

  // 4. Asignaturas con Calificaciones Oficiales
  courses: [
    {
      id: "MAT-401",
      code: "MAT-401",
      name: "Matemática Avanzada",
      teacher: "Prof. Roberto Silva",
      credits: 5,
      b1: 18,
      b2: 19,
      b3: 19,
      b4: 0,
      finalGrade: 18.7,
      status: "Aprobado",
      colorTag: "yellow",
      qrCode: "QR-CUAD-4SECA-EST042-MAT"
    },
    {
      id: "COM-402",
      code: "COM-402",
      name: "Comunicación & Literatura",
      teacher: "Miss María Daysi Reyes Milla",
      credits: 4,
      b1: 17,
      b2: 18,
      b3: 18,
      b4: 0,
      finalGrade: 17.7,
      status: "Aprobado",
      colorTag: "navy",
      qrCode: "QR-CUAD-4SECA-EST042-COM"
    },
    {
      id: "CTA-403",
      code: "CTA-403",
      name: "Ciencias & Tecnología",
      teacher: "Miss Leyli Graciela Reyes Cerquen",
      credits: 4,
      b1: 19,
      b2: 18,
      b3: 20,
      b4: 0,
      finalGrade: 19.0,
      status: "Aprobado",
      colorTag: "yellow",
      qrCode: "QR-CUAD-4SECA-EST042-CTA"
    },
    {
      id: "PRI-404",
      code: "PRI-404",
      name: "Personal Social & Formación Ciudadana",
      teacher: "Miss Julisa Magali Arroyo Araujo",
      credits: 3,
      b1: 18,
      b2: 18,
      b3: 19,
      b4: 0,
      finalGrade: 18.3,
      status: "Aprobado",
      colorTag: "navy",
      qrCode: "QR-CUAD-4SECA-EST042-HIS"
    },
    {
      id: "ING-405",
      code: "ING-405",
      name: "Inglés Institucional (Nivel B2/C1)",
      teacher: "Prof. Alex Lino",
      credits: 3,
      b1: 19,
      b2: 20,
      b3: 19,
      b4: 0,
      finalGrade: 19.3,
      status: "Aprobado",
      colorTag: "yellow",
      qrCode: "QR-CUAD-4SECA-EST042-ING"
    }
  ],

  // Registro Oficial Dinámico de Notas para Emisión de Boletas MINEDU
  boletaData: {
    albujar: {
      id: "EST-2026-089",
      name: "ALBUJAR ZEGARRA, MARINA DEL CARMEN",
      dni: "75849301",
      grade: "2°",
      gradeLevel: "2° de Secundaria",
      level: "SECUNDARIA",
      section: "",
      tutor: "Caceres Sutta Juan Carlos",
      grades: {
        lenguaje: { b1: "A", b2: "A", b3: "", b4: "" },
        literatura: { b1: "A", b2: "A", b3: "", b4: "" },
        raz_verbal: { b1: "A", b2: "A", b3: "", b4: "" },
        aritmetica: { b1: "A", b2: "A", b3: "", b4: "" },
        algebra: { b1: "A", b2: "B", b3: "", b4: "" },
        geometria: { b1: "A", b2: "A", b3: "", b4: "" },
        trigonometria: { b1: "A", b2: "A", b3: "", b4: "" },
        raz_matematico: { b1: "A", b2: "A", b3: "", b4: "" },
        biologia: { b1: "A", b2: "A", b3: "", b4: "" },
        fisica: { b1: "A", b2: "A", b3: "", b4: "" },
        quimica: { b1: "A", b2: "B", b3: "", b4: "" },
        geografia: { b1: "A", b2: "A", b3: "", b4: "" },
        filosofia: { b1: "A", b2: "", b3: "", b4: "" },
        historia_peru: { b1: "A", b2: "A", b3: "", b4: "" },
        historia_universal: { b1: "A", b2: "A", b3: "", b4: "" },
        civica: { b1: "A", b2: "A", b3: "", b4: "" },
        psicologia: { b1: "A", b2: "A", b3: "", b4: "" },
        computacion: { b1: "A", b2: "A", b3: "", b4: "" },
        gestion_empresarial: { b1: "A", b2: "A", b3: "", b4: "" },
        arte_cultura: { b1: "", b2: "", b3: "", b4: "" },
        religion: { b1: "A", b2: "A", b3: "", b4: "" },
        educ_fisica: { b1: "A", b2: "A", b3: "", b4: "" },
        ingles: { b1: "A", b2: "A", b3: "", b4: "" },
        conducta: { b1: "A", b2: "A", b3: "", b4: "" }
      },
      attendance: {
        b1: { inasist_just: "-", inasist_injust: "-", tard_just: "-", tard_injust: "-" },
        b2: { inasist_just: "-", inasist_injust: "-", tard_just: "-", tard_injust: "-" },
        b3: { inasist_just: "", inasist_injust: "", tard_just: "", tard_injust: "" },
        b4: { inasist_just: "", inasist_injust: "", tard_just: "", tard_injust: "" }
      },
      appreciations: {
        b1: "Felicitaciones a ALBUJAR ZEGARRA, MARINA DEL CARMEN por su excelente rendimiento. Demuestra responsabilidad, participación activa y compromiso con su aprendizaje. Sus trabajos son de gran calidad y siempre está dispuesta a colaborar. Recomendación: Sigue así y anímate a asumir nuevos retos.",
        b2: "Has realizado un trabajo muy bueno durante este segundo bimestre. Cumples con responsabilidad tus actividades dentro de la clase y gestionas muy bien tu tiempo de trabajo. Te animo a participar un poco más de manera activa para seguir potenciando tus ideas.",
        b3: "",
        b4: ""
      },
      parentCriteria: {
        c1: { b1: "A", b2: "", b3: "", b4: "" },
        c2: { b1: "", b2: "", b3: "", b4: "" },
        c3: { b1: "A", b2: "", b3: "", b4: "" },
        c4: { b1: "A", b2: "", b3: "", b4: "" },
        c5: { b1: "", b2: "", b3: "", b4: "" },
        c6: { b1: "", b2: "", b3: "", b4: "" }
      }
    },
    mendez: {
      id: "EST-2026-042",
      name: "MÉNDEZ FLORES, SOFÍA",
      dni: "74891230",
      grade: "4°",
      gradeLevel: "4to de Secundaria",
      level: "SECUNDARIA",
      section: "",
      tutor: "Prof. Roberto Silva",
      grades: {
        lenguaje: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        literatura: { b1: "A", b2: "AD", b3: "A", b4: "" },
        raz_verbal: { b1: "AD", b2: "A", b3: "AD", b4: "" },
        aritmetica: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        algebra: { b1: "A", b2: "A", b3: "AD", b4: "" },
        geometria: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        trigonometria: { b1: "A", b2: "AD", b3: "AD", b4: "" },
        raz_matematico: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        biologia: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        fisica: { b1: "A", b2: "A", b3: "AD", b4: "" },
        quimica: { b1: "AD", b2: "A", b3: "AD", b4: "" },
        geografia: { b1: "A", b2: "AD", b3: "A", b4: "" },
        filosofia: { b1: "A", b2: "A", b3: "AD", b4: "" },
        historia_peru: { b1: "AD", b2: "A", b3: "AD", b4: "" },
        historia_universal: { b1: "A", b2: "AD", b3: "AD", b4: "" },
        civica: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        psicologia: { b1: "A", b2: "A", b3: "AD", b4: "" },
        computacion: { b1: "A", b2: "B", b3: "A", b4: "" },
        gestion_empresarial: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        arte_cultura: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        religion: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        educ_fisica: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        ingles: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        conducta: { b1: "AD", b2: "AD", b3: "AD", b4: "" }
      },
      attendance: {
        b1: { inasist_just: "0", inasist_injust: "0", tard_just: "0", tard_injust: "0" },
        b2: { inasist_just: "0", inasist_injust: "0", tard_just: "0", tard_injust: "0" },
        b3: { inasist_just: "0", inasist_injust: "0", tard_just: "0", tard_injust: "0" },
        b4: { inasist_just: "", inasist_injust: "", tard_just: "", tard_injust: "" }
      },
      appreciations: {
        b1: "Sofía demuestra un excelente compromiso académico y un liderazgo intachable en el aula de 4to Sec. 'A'. ¡Felicitaciones por tus logros!",
        b2: "Mantiene una alta dedicación y pulcritud en todos los cursos. Sus aportes en el área de matemáticas y ciencias son sobresalientes.",
        b3: "Excelente desempeño en el tercer bimestre. Continúa demostrando autonomía y proactividad.",
        b4: ""
      },
      parentCriteria: {
        c1: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        c2: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        c3: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        c4: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        c5: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        c6: { b1: "AD", b2: "AD", b3: "AD", b4: "" }
      }
    },
    benitez: {
      id: "EST-2026-011",
      name: "BENÍTEZ RUIZ, CARLOS",
      dni: "74891255",
      grade: "4°",
      gradeLevel: "4to de Secundaria",
      level: "SECUNDARIA",
      section: "",
      tutor: "Prof. Roberto Silva",
      grades: {
        lenguaje: { b1: "A", b2: "B", b3: "A", b4: "" },
        literatura: { b1: "B", b2: "A", b3: "A", b4: "" },
        raz_verbal: { b1: "A", b2: "A", b3: "B", b4: "" },
        aritmetica: { b1: "A", b2: "A", b3: "A", b4: "" },
        algebra: { b1: "B", b2: "B", b3: "A", b4: "" },
        geometria: { b1: "A", b2: "A", b3: "A", b4: "" },
        trigonometria: { b1: "B", b2: "A", b3: "A", b4: "" },
        raz_matematico: { b1: "A", b2: "A", b3: "A", b4: "" },
        biologia: { b1: "A", b2: "A", b3: "A", b4: "" },
        fisica: { b1: "B", b2: "A", b3: "B", b4: "" },
        quimica: { b1: "A", b2: "B", b3: "A", b4: "" },
        geografia: { b1: "A", b2: "A", b3: "A", b4: "" },
        filosofia: { b1: "A", b2: "B", b3: "A", b4: "" },
        historia_peru: { b1: "A", b2: "A", b3: "A", b4: "" },
        historia_universal: { b1: "B", b2: "A", b3: "A", b4: "" },
        civica: { b1: "A", b2: "A", b3: "A", b4: "" },
        psicologia: { b1: "A", b2: "A", b3: "A", b4: "" },
        computacion: { b1: "A", b2: "A", b3: "A", b4: "" },
        gestion_empresarial: { b1: "A", b2: "A", b3: "A", b4: "" },
        arte_cultura: { b1: "A", b2: "A", b3: "A", b4: "" },
        religion: { b1: "A", b2: "A", b3: "A", b4: "" },
        educ_fisica: { b1: "AD", b2: "AD", b3: "AD", b4: "" },
        ingles: { b1: "A", b2: "B", b3: "A", b4: "" },
        conducta: { b1: "A", b2: "A", b3: "A", b4: "" }
      },
      attendance: {
        b1: { inasist_just: "1", inasist_injust: "0", tard_just: "2", tard_injust: "0" },
        b2: { inasist_just: "0", inasist_injust: "0", tard_just: "1", tard_injust: "0" },
        b3: { inasist_just: "0", inasist_injust: "0", tard_just: "0", tard_injust: "0" },
        b4: { inasist_just: "", inasist_injust: "", tard_just: "", tard_injust: "" }
      },
      appreciations: {
        b1: "Carlos ha mostrado buena disposición para el trabajo en equipo. Se recomienda reforzar el repaso constante en álgebra y física.",
        b2: "Se aprecia una notable mejoría en su puntualidad y presentación de trabajos. Buen progreso durante este bimestre.",
        b3: "Consolida sus aprendizajes con constancia y participación activa.",
        b4: ""
      },
      parentCriteria: {
        c1: { b1: "A", b2: "A", b3: "A", b4: "" },
        c2: { b1: "A", b2: "A", b3: "A", b4: "" },
        c3: { b1: "A", b2: "A", b3: "A", b4: "" },
        c4: { b1: "A", b2: "A", b3: "A", b4: "" },
        c5: { b1: "A", b2: "A", b3: "A", b4: "" },
        c6: { b1: "A", b2: "A", b3: "A", b4: "" }
      }
    }
  },

  studentListDocente: [
    { "id": "EST-042", "studentKey": "mendez", "name": "Sofía Méndez", "grade": 19, "attendance": "100%", "status": "Destacado", "notebookStatus": "Al Día (20)" },
    { "id": "EST-011", "studentKey": "benitez", "name": "Carlos Benítez", "grade": 15, "attendance": "94%", "status": "Regular", "notebookStatus": "Incompleto (13)" },
    { "id": "EST-089", "studentKey": "albujar", "name": "Marina Albujar", "grade": 18, "attendance": "100%", "status": "Destacado", "notebookStatus": "Al Día (19)" }
  ],

  tasks: [
    {
      id: "TSK-101",
      title: "Ensayo Histórico: Identidad Institucional y Sociedad",
      course: "Personal Social",
      teacher: "Miss Julisa Arroyo",
      dueDate: "Mañana a las 23:59",
      priority: "urgent",
      priorityLabel: "Vence Pronto",
      status: "pending",
      description: "Elaborar un informe sobre los 21 años de trayectoria institucional dejando huellas en la comunidad de S.J.L.",
      submission: null
    },
    {
      id: "TSK-102",
      title: "Taller Práctico: Ecuaciones Cuadráticas Complejas",
      course: "Matemática Avanzada",
      teacher: "Prof. Roberto Silva",
      dueDate: "Viernes 22 de Agosto",
      priority: "medium",
      priorityLabel: "Esta Semana",
      status: "pending",
      description: "Resolver los ejercicios 1 al 15 del libro de trabajo.",
      submission: null
    }
  ],

  // Configuración de Estructura Académica (Editable desde el Perfil Administrador)
  academicConfig: {
    hasSections: false, // El colegio no tiene secciones, solo mantiene grados (editable por Admin)
    defaultSectionLabel: "Única"
  },

  // Catálogo Oficial de Grados del Colegio (Editable por el Administrador)
  gradesCatalog: [
    // INICIAL
    { id: "ini-3", label: "Inicial 3 Años", level: "Inicial", section: "", classroom: "Pabellón Inicial - Aula 01", tutor: "Miss Patricia Díaz" },
    { id: "ini-4", label: "Inicial 4 Años", level: "Inicial", section: "", classroom: "Pabellón Inicial - Aula 02", tutor: "Miss Carmen Flores" },
    { id: "ini-5", label: "Inicial 5 Años", level: "Inicial", section: "", classroom: "Pabellón Inicial - Aula 03", tutor: "Miss Maritza" },
    
    // PRIMARIA
    { id: "1prim", label: "1° de Primaria", level: "Primaria", section: "", classroom: "Pabellón A - Aula 101", tutor: "Miss Julisa Arroyo" },
    { id: "2prim", label: "2° de Primaria", level: "Primaria", section: "", classroom: "Pabellón A - Aula 102", tutor: "Miss Elena Suárez" },
    { id: "3prim", label: "3° de Primaria", level: "Primaria", section: "", classroom: "Pabellón A - Aula 103", tutor: "Miss María Daysi Reyes" },
    { id: "4prim", label: "4° de Primaria", level: "Primaria", section: "", classroom: "Pabellón A - Aula 201", tutor: "Prof. César Palacios" },
    { id: "5prim", label: "5° de Primaria", level: "Primaria", section: "", classroom: "Pabellón A - Aula 202", tutor: "Prof. Miguel Ramos" },
    { id: "6prim", label: "6° de Primaria", level: "Primaria", section: "", classroom: "Pabellón A - Aula 203", tutor: "Miss Leyli Reyes Cerquen" },

    // SECUNDARIA
    { id: "1sec", label: "1° de Secundaria", level: "Secundaria", section: "", classroom: "Pabellón B - Aula 301", tutor: "Prof. Alex Lino" },
    { id: "2sec", label: "2° de Secundaria", level: "Secundaria", section: "", classroom: "Pabellón B - Aula 302", tutor: "Prof. Juan Carlos Cáceres" },
    { id: "3sec", label: "3° de Secundaria", level: "Secundaria", section: "", classroom: "Pabellón B - Aula 303", tutor: "Prof. Javier Vega" },
    { id: "4sec", label: "4° de Secundaria", level: "Secundaria", section: "", classroom: "Pabellón B - Aula 304", tutor: "Prof. Roberto Silva" },
    { id: "5sec", label: "5° de Secundaria", level: "Secundaria", section: "", classroom: "Pabellón B - Aula 305", tutor: "Miss Andrea Ramos" }
  ],

  // Catálogo de Docentes y Horarios por Asignatura (Docentes de Curso sin Tutoría / con Tutoría)
  teachersList: [
    {
      id: "DOC-2026-COMP",
      name: "Prof. Fernando Rojas",
      subject: "Computación e Informática / Robótica",
      department: "Área de Educación para el Trabajo (EPT)",
      isTutor: false,
      tutoringGrade: null,
      weeklyHours: 26,
      assignedGrades: ["1° Sec", "2° Sec", "3° Sec", "4° Sec", "5° Sec"],
      classrooms: ["Laboratorio de Cómputo 01", "Taller de Robótica"],
      courses: ["Computación", "Robótica Educativa", "Diseño Digital"],
      schedule: [
        {
          time: "08:00 - 08:50",
          mon: { course: "Computación", grade: "1° Sec", room: "Lab. Cómputo 1", color: "navy" },
          tue: { course: "Computación", grade: "3° Sec", room: "Lab. Cómputo 1", color: "navy" },
          wed: { course: "Robótica Educativa", grade: "5° Sec", room: "Taller Robótica", color: "yellow" },
          thu: { course: "Computación", grade: "2° Sec", room: "Lab. Cómputo 1", color: "navy" },
          fri: { course: "Diseño Digital", grade: "4° Sec", room: "Lab. Cómputo 1", color: "yellow" }
        },
        {
          time: "08:50 - 09:40",
          mon: { course: "Computación", grade: "1° Sec", room: "Lab. Cómputo 1", color: "navy" },
          tue: { course: "Computación", grade: "3° Sec", room: "Lab. Cómputo 1", color: "navy" },
          wed: { course: "Robótica Educativa", grade: "5° Sec", room: "Taller Robótica", color: "yellow" },
          thu: { course: "Computación", grade: "2° Sec", room: "Lab. Cómputo 1", color: "navy" },
          fri: { course: "Diseño Digital", grade: "4° Sec", room: "Lab. Cómputo 1", color: "yellow" }
        },
        {
          time: "09:40 - 10:30",
          mon: { course: "Computación", grade: "4° Sec", room: "Lab. Cómputo 1", color: "navy" },
          tue: { course: "Diseño Digital", grade: "2° Sec", room: "Lab. Cómputo 1", color: "yellow" },
          wed: { course: "Computación", grade: "1° Sec", room: "Lab. Cómputo 1", color: "navy" },
          thu: { course: "Robótica Educativa", grade: "3° Sec", room: "Taller Robótica", color: "yellow" },
          fri: { course: "Computación", grade: "5° Sec", room: "Lab. Cómputo 1", color: "navy" }
        },
        {
          time: "10:30 - 10:50",
          isBreak: true,
          isLunch: false,
          title: "RECESO PEDAGÓGICO / REFRIGERIO (10:30 - 10:50 AM)"
        },
        {
          time: "10:50 - 11:40",
          mon: { course: "Computación", grade: "4° Sec", room: "Lab. Cómputo 1", color: "navy" },
          tue: { course: "Diseño Digital", grade: "2° Sec", room: "Lab. Cómputo 1", color: "yellow" },
          wed: { course: "Computación", grade: "1° Sec", room: "Lab. Cómputo 1", color: "navy" },
          thu: { course: "Robótica Educativa", grade: "3° Sec", room: "Taller Robótica", color: "yellow" },
          fri: { course: "Computación", grade: "5° Sec", room: "Lab. Cómputo 1", color: "navy" }
        },
        {
          time: "11:40 - 12:30",
          mon: { course: "Robótica Educativa", grade: "2° Sec", room: "Taller Robótica", color: "yellow" },
          tue: { course: "Asesoría Pedagógica", grade: "Secundaria", room: "Sala Docentes", color: "green" },
          wed: { course: "Computación", grade: "3° Sec", room: "Lab. Cómputo 1", color: "navy" },
          thu: { course: "Computación", grade: "4° Sec", room: "Lab. Cómputo 1", color: "navy" },
          fri: { course: "Preparación de Material", grade: "Secundaria", room: "Lab. Cómputo 1", color: "green" }
        },
        {
          time: "12:30 - 01:20 PM",
          mon: { course: "Robótica Educativa", grade: "2° Sec", room: "Taller Robótica", color: "yellow" },
          tue: { course: "Diseño Digital", grade: "5° Sec", room: "Lab. Cómputo 1", color: "yellow" },
          wed: { course: "Computación", grade: "3° Sec", room: "Lab. Cómputo 1", color: "navy" },
          thu: { course: "Computación", grade: "4° Sec", room: "Lab. Cómputo 1", color: "navy" },
          fri: { course: "Reunión de Área / EPT", grade: "General", room: "Sala Docentes", color: "green" }
        },
        {
          time: "01:20 - 01:50 PM",
          isBreak: true,
          isLunch: true,
          title: "HORA DE ALMUERZO / COMEDOR (01:20 - 01:50 PM)"
        },
        {
          time: "01:50 - 02:40 PM",
          mon: { course: "Taller de Robótica Avanzada", grade: "4° Sec", room: "Taller Robótica", color: "yellow" },
          tue: { course: "Soporte y Mantenimiento TI", grade: "Institucional", room: "Lab. Cómputo 1", color: "green" },
          wed: { course: "Taller de Programación", grade: "5° Sec", room: "Lab. Cómputo 1", color: "navy" },
          thu: { course: "Diseño Web Escolar", grade: "3° Sec", room: "Lab. Cómputo 1", color: "yellow" },
          fri: { course: "Taller de Robótica Avanzada", grade: "4° Sec", room: "Taller Robótica", color: "yellow" }
        },
        {
          time: "02:40 - 03:30 PM",
          mon: { course: "Taller de Robótica Avanzada", grade: "4° Sec", room: "Taller Robótica", color: "yellow" },
          tue: { course: "Club de Ciencias y Tecnología", grade: "General", room: "Lab. Cómputo 1", color: "green" },
          wed: { course: "Taller de Programación", grade: "5° Sec", room: "Lab. Cómputo 1", color: "navy" },
          thu: { course: "Diseño Web Escolar", grade: "3° Sec", room: "Lab. Cómputo 1", color: "yellow" },
          fri: { course: "Atención a Familias / Tutoría", grade: "Secundaria", room: "Sala Docentes", color: "green" }
        }
      ]
    },
    {
      id: "DOC-2026-015",
      name: "Prof. Roberto Silva",
      subject: "Matemáticas (Álgebra, Geometría y Raz. Matemático)",
      department: "Área de Matemática",
      isTutor: false,
      tutoringGrade: null,
      weeklyHours: 28,
      assignedGrades: ["2° Sec", "3° Sec", "4° Sec", "5° Sec"],
      classrooms: ["Aula 201", "Aula 301", "Aula 302"],
      courses: ["Álgebra", "Geometría", "Razonamiento Matemático", "Trigonometría"],
      schedule: [
        {
          time: "08:00 - 08:50",
          mon: { course: "Álgebra", grade: "4° Sec", room: "Aula 301", color: "yellow" },
          tue: { course: "Geometría", grade: "3° Sec", room: "Aula 201", color: "navy" },
          wed: { course: "Raz. Matemático", grade: "2° Sec", room: "Aula 102", color: "yellow" },
          thu: { course: "Álgebra", grade: "5° Sec", room: "Aula 302", color: "yellow" },
          fri: { course: "Trigonometría", grade: "4° Sec", room: "Aula 301", color: "navy" }
        },
        {
          time: "08:50 - 09:40",
          mon: { course: "Álgebra", grade: "4° Sec", room: "Aula 301", color: "yellow" },
          tue: { course: "Geometría", grade: "3° Sec", room: "Aula 201", color: "navy" },
          wed: { course: "Raz. Matemático", grade: "2° Sec", room: "Aula 102", color: "yellow" },
          thu: { course: "Álgebra", grade: "5° Sec", room: "Aula 302", color: "yellow" },
          fri: { course: "Trigonometría", grade: "4° Sec", room: "Aula 301", color: "navy" }
        },
        {
          time: "09:40 - 10:30",
          mon: { course: "Geometría", grade: "2° Sec", room: "Aula 102", color: "navy" },
          tue: { course: "Álgebra", grade: "4° Sec", room: "Aula 301", color: "yellow" },
          wed: { course: "Trigonometría", grade: "5° Sec", room: "Aula 302", color: "navy" },
          thu: { course: "Raz. Matemático", grade: "3° Sec", room: "Aula 201", color: "yellow" },
          fri: { course: "Álgebra", grade: "2° Sec", room: "Aula 102", color: "yellow" }
        },
        {
          time: "10:30 - 10:50",
          isBreak: true,
          isLunch: false,
          title: "RECESO PEDAGÓGICO / REFRIGERIO (10:30 - 10:50 AM)"
        },
        {
          time: "10:50 - 11:40",
          mon: { course: "Geometría", grade: "2° Sec", room: "Aula 102", color: "navy" },
          tue: { course: "Álgebra", grade: "4° Sec", room: "Aula 301", color: "yellow" },
          wed: { course: "Trigonometría", grade: "5° Sec", room: "Aula 302", color: "navy" },
          thu: { course: "Raz. Matemático", grade: "3° Sec", room: "Aula 201", color: "yellow" },
          fri: { course: "Álgebra", grade: "2° Sec", room: "Aula 102", color: "yellow" }
        },
        {
          time: "11:40 - 12:30",
          mon: { course: "Raz. Matemático", grade: "5° Sec", room: "Aula 302", color: "yellow" },
          tue: { course: "Atención a Padres (Colegiado)", grade: "Secundaria", room: "Sala Docentes", color: "green" },
          wed: { course: "Álgebra", grade: "3° Sec", room: "Aula 201", color: "yellow" },
          thu: { course: "Geometría", grade: "4° Sec", room: "Aula 301", color: "navy" },
          fri: { course: "Reunión de Área Matemática", grade: "Colegiado", room: "Sala Docentes", color: "green" }
        },
        {
          time: "12:30 - 01:20 PM",
          mon: { course: "Raz. Matemático", grade: "5° Sec", room: "Aula 302", color: "yellow" },
          tue: { course: "Álgebra Avanzada", grade: "5° Sec", room: "Aula 302", color: "yellow" },
          wed: { course: "Geometría del Espacio", grade: "4° Sec", room: "Aula 301", color: "navy" },
          thu: { course: "Trigonometría Analítica", grade: "5° Sec", room: "Aula 302", color: "navy" },
          fri: { course: "Preparación de Evaluaciones", grade: "General", room: "Sala Docentes", color: "green" }
        },
        {
          time: "01:20 - 01:50 PM",
          isBreak: true,
          isLunch: true,
          title: "HORA DE ALMUERZO / COMEDOR (01:20 - 01:50 PM)"
        },
        {
          time: "01:50 - 02:40 PM",
          mon: { course: "Círculo Matemático Olímpico", grade: "4° Sec", room: "Aula 301", color: "yellow" },
          tue: { course: "Refuerzo y Nivelación Académica", grade: "3° Sec", room: "Aula 201", color: "navy" },
          wed: { course: "Círculo Matemático Olímpico", grade: "5° Sec", room: "Aula 302", color: "yellow" },
          thu: { course: "Taller de Geometría Descriptiva", grade: "4° Sec", room: "Aula 301", color: "navy" },
          fri: { course: "Asesoría Preuniversitaria", grade: "5° Sec", room: "Aula 302", color: "yellow" }
        },
        {
          time: "02:40 - 03:30 PM",
          mon: { course: "Círculo Matemático Olímpico", grade: "4° Sec", room: "Aula 301", color: "yellow" },
          tue: { course: "Refuerzo y Nivelación Académica", grade: "3° Sec", room: "Aula 201", color: "navy" },
          wed: { course: "Círculo Matemático Olímpico", grade: "5° Sec", room: "Aula 302", color: "yellow" },
          thu: { course: "Taller de Geometría Descriptiva", grade: "4° Sec", room: "Aula 301", color: "navy" },
          fri: { course: "Asesoría Preuniversitaria", grade: "5° Sec", room: "Aula 302", color: "yellow" }
        }
      ]
    },
    {
      id: "DOC-2026-FIS",
      name: "Miss Leyli Reyes Cerquen",
      subject: "Ciencia y Tecnología (Física, Química y Biología)",
      department: "Área de Ciencias",
      isTutor: false,
      tutoringGrade: null,
      weeklyHours: 26,
      assignedGrades: ["2° Sec", "3° Sec", "4° Sec", "5° Sec"],
      classrooms: ["Laboratorio de Ciencias 01", "Aula 301"],
      courses: ["Física", "Química", "Biología"],
      schedule: [
        {
          time: "08:00 - 08:50",
          mon: { course: "Física Elemental", grade: "3° Sec", room: "Lab. Ciencias", color: "yellow" },
          tue: { course: "Química Orgánica", grade: "5° Sec", room: "Lab. Ciencias", color: "navy" },
          wed: { course: "Física Avanzada", grade: "4° Sec", room: "Lab. Ciencias", color: "yellow" },
          thu: { course: "Biología", grade: "2° Sec", room: "Lab. Ciencias", color: "green" },
          fri: { course: "Prácticas de Laboratorio", grade: "4° Sec", room: "Lab. Ciencias", color: "yellow" }
        },
        {
          time: "08:50 - 09:40",
          mon: { course: "Física Elemental", grade: "3° Sec", room: "Lab. Ciencias", color: "yellow" },
          tue: { course: "Química Orgánica", grade: "5° Sec", room: "Lab. Ciencias", color: "navy" },
          wed: { course: "Física Avanzada", grade: "4° Sec", room: "Lab. Ciencias", color: "yellow" },
          thu: { course: "Biología", grade: "2° Sec", room: "Lab. Ciencias", color: "green" },
          fri: { course: "Prácticas de Laboratorio", grade: "4° Sec", room: "Lab. Ciencias", color: "yellow" }
        },
        {
          time: "09:40 - 10:30",
          mon: { course: "Biología y Ecología", grade: "4° Sec", room: "Aula 301", color: "green" },
          tue: { course: "Física Elemental", grade: "2° Sec", room: "Lab. Ciencias", color: "yellow" },
          wed: { course: "Química General", grade: "3° Sec", room: "Lab. Ciencias", color: "navy" },
          thu: { course: "Física Moderna", grade: "5° Sec", room: "Lab. Ciencias", color: "yellow" },
          fri: { course: "Mantenimiento de Reactivos", grade: "Ciencias", room: "Lab. Ciencias", color: "green" }
        },
        {
          time: "10:30 - 10:50",
          isBreak: true,
          isLunch: false,
          title: "RECESO PEDAGÓGICO / REFRIGERIO (10:30 - 10:50 AM)"
        },
        {
          time: "10:50 - 11:40",
          mon: { course: "Biología y Ecología", grade: "4° Sec", room: "Aula 301", color: "green" },
          tue: { course: "Física Elemental", grade: "2° Sec", room: "Lab. Ciencias", color: "yellow" },
          wed: { course: "Química General", grade: "3° Sec", room: "Lab. Ciencias", color: "navy" },
          thu: { course: "Física Moderna", grade: "5° Sec", room: "Lab. Ciencias", color: "yellow" },
          fri: { course: "Mantenimiento de Reactivos", grade: "Ciencias", room: "Lab. Ciencias", color: "green" }
        },
        {
          time: "11:40 - 12:30",
          mon: { course: "Química Experimental", grade: "4° Sec", room: "Lab. Ciencias", color: "navy" },
          tue: { course: "Atención a Familias (Ciencias)", grade: "Secundaria", room: "Sala Docentes", color: "green" },
          wed: { course: "Biología Celular", grade: "3° Sec", room: "Lab. Ciencias", color: "green" },
          thu: { course: "Química General", grade: "2° Sec", room: "Lab. Ciencias", color: "navy" },
          fri: { course: "Reunión de Área de Ciencias", grade: "Colegiado", room: "Sala Docentes", color: "green" }
        },
        {
          time: "12:30 - 01:20 PM",
          mon: { course: "Química Experimental", grade: "4° Sec", room: "Lab. Ciencias", color: "navy" },
          tue: { course: "Prácticas de Microscopía", grade: "4° Sec", room: "Lab. Ciencias", color: "green" },
          wed: { course: "Física Cuántica Básica", grade: "5° Sec", room: "Lab. Ciencias", color: "yellow" },
          thu: { course: "Ciencias Experimentales", grade: "3° Sec", room: "Lab. Ciencias", color: "navy" },
          fri: { course: "Calibración de Sensores", grade: "Ciencias", room: "Lab. Ciencias", color: "green" }
        },
        {
          time: "01:20 - 01:50 PM",
          isBreak: true,
          isLunch: true,
          title: "HORA DE ALMUERZO / COMEDOR (01:20 - 01:50 PM)"
        },
        {
          time: "01:50 - 02:40 PM",
          mon: { course: "Club de Ciencias & Robótica", grade: "4° Sec", room: "Lab. Ciencias", color: "green" },
          tue: { course: "Taller de Feria de Ciencias (FENCYT)", grade: "4° Sec", room: "Lab. Ciencias", color: "yellow" },
          wed: { course: "Laboratorio Abierto de Química", grade: "5° Sec", room: "Lab. Ciencias", color: "navy" },
          thu: { course: "Taller de Feria de Ciencias (FENCYT)", grade: "3° Sec", room: "Lab. Ciencias", color: "yellow" },
          fri: { course: "Preparación de Informes Científicos", grade: "Secundaria", room: "Sala Docentes", color: "green" }
        },
        {
          time: "02:40 - 03:30 PM",
          mon: { course: "Club de Ciencias & Robótica", grade: "4° Sec", room: "Lab. Ciencias", color: "green" },
          tue: { course: "Taller de Feria de Ciencias (FENCYT)", grade: "4° Sec", room: "Lab. Ciencias", color: "yellow" },
          wed: { course: "Laboratorio Abierto de Química", grade: "5° Sec", room: "Lab. Ciencias", color: "navy" },
          thu: { course: "Taller de Feria de Ciencias (FENCYT)", grade: "3° Sec", room: "Lab. Ciencias", color: "yellow" },
          fri: { course: "Atención y Asesoría a Proyectos", grade: "Secundaria", room: "Lab. Ciencias", color: "green" }
        }
      ]
    }
  ],

  schedules: {
    "4sec": [
      {
        time: "08:00 - 08:50",
        mon: { course: "Matemática (Álgebra)", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "yellow" },
        tue: { course: "Comunicación & Literatura", teacher: "Miss M. Reyes", room: "Aula 304", type: "theory", color: "navy" },
        wed: { course: "Ciencia y Tec. (Física)", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "yellow" },
        thu: { course: "Personal Social / CC.SS", teacher: "Miss J. Arroyo", room: "Aula 304", type: "theory", color: "navy" },
        fri: { course: "Inglés Avanzado", teacher: "Prof. A. Lino", room: "Sala Idiomas", type: "lab", color: "yellow" }
      },
      {
        time: "08:50 - 09:40",
        mon: { course: "Matemática (Álgebra)", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "yellow" },
        tue: { course: "Comunicación & Literatura", teacher: "Miss M. Reyes", room: "Aula 304", type: "theory", color: "navy" },
        wed: { course: "Ciencia y Tec. (Física)", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "yellow" },
        thu: { course: "Personal Social / CC.SS", teacher: "Miss J. Arroyo", room: "Aula 304", type: "theory", color: "navy" },
        fri: { course: "Inglés Avanzado", teacher: "Prof. A. Lino", room: "Sala Idiomas", type: "lab", color: "yellow" }
      },
      {
        time: "09:40 - 10:30",
        mon: { course: "Computación e Informática", teacher: "Prof. F. Rojas", room: "Lab. Cómputo 1", type: "lab", color: "navy" },
        tue: { course: "Matemática (Álgebra)", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "yellow" },
        wed: { course: "Ciencia y Tec. (Biología)", teacher: "Miss L. Reyes", room: "Aula 304", type: "theory", color: "green" },
        thu: { course: "Arte y Cultura", teacher: "Miss J. Arroyo", room: "Taller Arte", type: "art", color: "navy" },
        fri: { course: "Diseño Digital & Robótica", teacher: "Prof. F. Rojas", room: "Lab. Cómputo 1", type: "lab", color: "yellow" }
      },
      {
        time: "10:30 - 10:50",
        isBreak: true,
        isLunch: false,
        title: "RECESO PEDAGÓGICO / REFRIGERIO (10:30 - 10:50 AM)"
      },
      {
        time: "10:50 - 11:40",
        mon: { course: "Computación e Informática", teacher: "Prof. F. Rojas", room: "Lab. Cómputo 1", type: "lab", color: "navy" },
        tue: { course: "Matemática (Álgebra)", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "yellow" },
        wed: { course: "Ciencia y Tec. (Biología)", teacher: "Miss L. Reyes", room: "Aula 304", type: "theory", color: "green" },
        thu: { course: "Arte y Cultura", teacher: "Miss J. Arroyo", room: "Taller Arte", type: "art", color: "navy" },
        fri: { course: "Diseño Digital & Robótica", teacher: "Prof. F. Rojas", room: "Lab. Cómputo 1", type: "lab", color: "yellow" }
      },
      {
        time: "11:40 - 12:30",
        mon: { course: "Ciencia y Tec. (Química)", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "navy" },
        tue: { course: "Inglés Avanzado", teacher: "Prof. A. Lino", room: "Sala Idiomas", type: "lab", color: "yellow" },
        wed: { course: "Educación Física y Deportes", teacher: "Prof. M. Soto", room: "Coliseo", type: "sport", color: "red" },
        thu: { course: "Matemática (Geometría)", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "navy" },
        fri: { course: "Educación Religiosa", teacher: "Prof. J. Cáceres", room: "Aula 304", type: "theory", color: "green" }
      },
      {
        time: "12:30 - 01:20 PM",
        mon: { course: "Ciencia y Tec. (Química)", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "navy" },
        tue: { course: "Prácticas de Microscopía", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "green" },
        wed: { course: "Educación Física y Deportes", teacher: "Prof. M. Soto", room: "Coliseo", type: "sport", color: "red" },
        thu: { course: "Computación e Informática", teacher: "Prof. F. Rojas", room: "Lab. Cómputo 1", type: "lab", color: "navy" },
        fri: { course: "Tutoría y Orientación Educativa", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "green" }
      },
      {
        time: "01:20 - 01:50 PM",
        isBreak: true,
        isLunch: true,
        title: "HORA DE ALMUERZO / COMEDOR (01:20 - 01:50 PM)"
      },
      {
        time: "01:50 - 02:40 PM",
        mon: { course: "Taller de Robótica Avanzada", teacher: "Prof. F. Rojas", room: "Taller Robótica", type: "lab", color: "yellow" },
        tue: { course: "Círculo Matemático Olímpico", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "yellow" },
        wed: { course: "Club de Ciencias & FENCYT", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "green" },
        thu: { course: "Taller de Geometría Descriptiva", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "navy" },
        fri: { course: "Prácticas Experimentales Lab", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "yellow" }
      },
      {
        time: "02:40 - 03:30 PM",
        mon: { course: "Taller de Robótica Avanzada", teacher: "Prof. F. Rojas", room: "Taller Robótica", type: "lab", color: "yellow" },
        tue: { course: "Círculo Matemático Olímpico", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "yellow" },
        wed: { course: "Club de Ciencias & FENCYT", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "green" },
        thu: { course: "Taller de Geometría Descriptiva", teacher: "Prof. R. Silva", room: "Aula 304", type: "theory", color: "navy" },
        fri: { course: "Prácticas Experimentales Lab", teacher: "Miss L. Reyes", room: "Lab. Ciencias", type: "lab", color: "yellow" }
      }
    ]
  },

  syllabi: [
    {
      id: "SIL-4SEC-MAT",
      gradeId: "4sec-a",
      gradeName: "4to de Secundaria",
      courseName: "Matemática Avanzada (Álgebra y Trigonometría)",
      courseCode: "MAT-401",
      teacher: "Prof. Roberto Silva",
      hoursWeekly: "5 horas semanales",
      bimester: "III Bimestre 2026",
      competencies: [
        "Resuelve problemas de cantidad y regularidad",
        "Modela objetos con formas geométricas y trigonométricas",
        "Comunica su comprensión sobre las relaciones algebraicas complejas"
      ],
      units: [
        {
          unitNumber: "Unidad I",
          title: "Funciones Cuadráticas y Polinómicas de Grado Superior",
          duration: "4 semanas",
          topics: ["Dominio y rango", "Parábolas en contextos reales", "Teorema del residuo"],
          evaluation: "Práctica Calificada N° 1"
        }
      ],
      bibliography: "Baldor Álgebra Moderna, Guías Oficiales I.E.P. El Educador 2026."
    }
  ],

  notebookReviews: [
    {
      id: "REV-2026-081",
      qrCode: "QR-CUAD-4SECA-EST042-MAT",
      studentId: "EST-042",
      studentName: "Sofía Méndez",
      grade: "4to Secundaria 'A'",
      course: "Matemática Avanzada",
      teacher: "Prof. Roberto Silva",
      date: "15/08/2026",
      score: 20,
      status: "Excelente",
      stampType: "stamp-gold",
      stampText: "LOGRO DESTACADO ★",
      checklist: { margenes: true, fechas: true, teoriaCompleta: true, ejerciciosAlDia: true, pulcritud: true },
      teacherRemarks: "Cuaderno impecable con sellos al día."
    }
  ],

  announcements: [
    {
      id: "ANN-003-ED",
      title: "INFORME N°003 /ED - COORDINACIÓN Y DOCUMENTACIÓN (15/08/2026)",
      category: "Coordinación Institucional",
      priority: "high",
      tagLabel: "Oficial",
      date: "15 de Agosto, 2026",
      author: "Prof. Alex Lino (Coordinador)",
      content: "Recaudación acumulada del mes de agosto: S/ 25,130.00 (Superando la meta de S/ 24,000.00). Regularización de Renta de 4ta Categoría y seguimiento de expedientes ante la UGEL 05."
    }
  ],

  // 5. Control de Asistencia Biométrico Diario & Registro por Aulas
  attendanceRecords: [
    // 19/08/2026 (Hoy) - 4to de Secundaria
    { id: "ATT-055-0819", studentId: "EST-2026-055", studentCode: "EST-2026-055", studentName: "Gael Alessandro Cáceres Ramos", dni: "76541298", gradeId: "4sec", grade: "4° de Secundaria", date: "19/08/2026", day: "Miércoles", status: "Presente", arrivalTime: "07:38 AM", exitTime: "03:30 PM", method: "Fotocheck QR (Portería Principal)", observations: "Ingreso puntual" },
    { id: "ATT-042-0819", studentId: "EST-2026-042", studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", dni: "74891230", gradeId: "4sec", grade: "4° de Secundaria", date: "19/08/2026", day: "Miércoles", status: "Presente", arrivalTime: "07:38 AM", exitTime: "03:30 PM", method: "Huella Digital (Torniquete Principal)", observations: "Ingreso puntual" },
    { id: "ATT-011-0819", studentId: "EST-2026-011", studentCode: "EST-2026-011", studentName: "Carlos Benítez Díaz", dni: "75129034", gradeId: "4sec", grade: "4° de Secundaria", date: "19/08/2026", day: "Miércoles", status: "Tardanza", arrivalTime: "07:52 AM", exitTime: "03:30 PM", method: "Fotocheck QR (Puerta Secundaria)", observations: "Tardanza de 7 min" },
    { id: "ATT-089-0819", studentId: "EST-2026-089", studentCode: "EST-2026-089", studentName: "Marina del Carmen Albújar Zegarra", dni: "75849301", gradeId: "4sec", grade: "4° de Secundaria", date: "19/08/2026", day: "Miércoles", status: "Presente", arrivalTime: "07:40 AM", exitTime: "03:30 PM", method: "Huella Digital (Torniquete Principal)", observations: "Ingreso puntual" },
    { id: "ATT-025-0819", studentId: "EST-2026-025", studentCode: "EST-2026-025", studentName: "Mateo Ramos Quispe", dni: "76891209", gradeId: "4sec", grade: "4° de Secundaria", date: "19/08/2026", day: "Miércoles", status: "Falta", arrivalTime: "--:--", exitTime: "--:--", method: "No Registrado", observations: "Sin justificación aún" },

    // 18/08/2026 (Ayer) - 4to de Secundaria
    { id: "ATT-055-0818", studentId: "EST-2026-055", studentCode: "EST-2026-055", studentName: "Gael Alessandro Cáceres Ramos", dni: "76541298", gradeId: "4sec", grade: "4° de Secundaria", date: "18/08/2026", day: "Martes", status: "Presente", arrivalTime: "07:36 AM", exitTime: "03:30 PM", method: "Fotocheck QR (Portería Principal)", observations: "Ingreso puntual" },
    { id: "ATT-042-0818", studentId: "EST-2026-042", studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", dni: "74891230", gradeId: "4sec", grade: "4° de Secundaria", date: "18/08/2026", day: "Martes", status: "Presente", arrivalTime: "07:35 AM", exitTime: "03:30 PM", method: "Huella Digital (Torniquete Principal)", observations: "Ingreso puntual" },
    { id: "ATT-011-0818", studentId: "EST-2026-011", studentCode: "EST-2026-011", studentName: "Carlos Benítez Díaz", dni: "75129034", gradeId: "4sec", grade: "4° de Secundaria", date: "18/08/2026", day: "Martes", status: "Presente", arrivalTime: "07:44 AM", exitTime: "03:30 PM", method: "Huella Digital (Torniquete Principal)", observations: "Ingreso puntual" },
    { id: "ATT-089-0818", studentId: "EST-2026-089", studentCode: "EST-2026-089", studentName: "Marina del Carmen Albújar Zegarra", dni: "75849301", gradeId: "4sec", grade: "4° de Secundaria", date: "18/08/2026", day: "Martes", status: "Presente", arrivalTime: "07:39 AM", exitTime: "03:30 PM", method: "Huella Digital (Torniquete Principal)", observations: "Ingreso puntual" },
    { id: "ATT-025-0818", studentId: "EST-2026-025", studentCode: "EST-2026-025", studentName: "Mateo Ramos Quispe", dni: "76891209", gradeId: "4sec", grade: "4° de Secundaria", date: "18/08/2026", day: "Martes", status: "Presente", arrivalTime: "07:42 AM", exitTime: "03:30 PM", method: "Huella Digital (Torniquete Principal)", observations: "Ingreso puntual" },

    // Días anteriores para Sofía Méndez (Historial de Apoderado)
    { id: "ATT-042-0815", studentId: "EST-2026-042", studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", dni: "74891230", gradeId: "4sec", grade: "4° de Secundaria", date: "15/08/2026", day: "Viernes", status: "Presente", arrivalTime: "07:36 AM", exitTime: "03:30 PM", method: "Huella Digital", observations: "Puntual" },
    { id: "ATT-042-0814", studentId: "EST-2026-042", studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", dni: "74891230", gradeId: "4sec", grade: "4° de Secundaria", date: "14/08/2026", day: "Jueves", status: "Presente", arrivalTime: "07:39 AM", exitTime: "03:30 PM", method: "Huella Digital", observations: "Puntual" },
    { id: "ATT-042-0813", studentId: "EST-2026-042", studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", dni: "74891230", gradeId: "4sec", grade: "4° de Secundaria", date: "13/08/2026", day: "Miércoles", status: "Presente", arrivalTime: "07:34 AM", exitTime: "03:30 PM", method: "Huella Digital", observations: "Puntual" },
    { id: "ATT-042-0812", studentId: "EST-2026-042", studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", dni: "74891230", gradeId: "4sec", grade: "4° de Secundaria", date: "12/08/2026", day: "Martes", status: "Justificada", arrivalTime: "--:--", exitTime: "--:--", method: "Certificado Médico", observations: "Cita médica oftalmológica (Justificada por Apoderado)" },
    { id: "ATT-042-0811", studentId: "EST-2026-042", studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", dni: "74891230", gradeId: "4sec", grade: "4° de Secundaria", date: "11/08/2026", day: "Lunes", status: "Presente", arrivalTime: "07:30 AM", exitTime: "03:30 PM", method: "Huella Digital", observations: "Puntual - Formación General" }
  ],

  attendance: [
    { date: "19/08/2026", day: "Miércoles", status: "Presente", arrival: "07:38 AM", subject: "Jornada Académica Regular" },
    { date: "18/08/2026", day: "Martes", status: "Presente", arrival: "07:35 AM", subject: "Jornada Académica Regular" },
    { date: "15/08/2026", day: "Sábado", status: "Presente", arrival: "08:00 AM", subject: "Reunión de Coordinación y Documentación" },
    { date: "14/08/2026", day: "Viernes", status: "Presente", arrival: "07:42 AM", subject: "Jornada Académica Completa" }
  ],

  // 6. Libro Oficial de Registro de Incidencias & Convivencia Escolar (Ley N° 29719 / MINEDU)
  behaviorIncidents: [
    {
      id: "INC-2026-001",
      studentCode: "EST-2026-055",
      studentName: "Gael Alessandro Cáceres Ramos",
      dni: "76541298",
      grade: "4° de Secundaria",
      gradeId: "4sec",
      level: "Secundaria",
      date: "19/08/2026",
      time: "10:15 AM",
      reportedBy: "Prof. Roberto Silva (Docente)",
      severity: "Grave",
      category: "Desobediencia e interrupción de clase",
      location: "Aula 304 - Clase de Matemática",
      description: "Durante el desarrollo de la clase de Álgebra, el estudiante Gael Cáceres interrumpió reiteradamente la explicación haciendo uso indebido del teléfono celular sin autorización y negándose a guardarlo tras la primera advertencia verbal del docente.",
      correctiveMeasure: "Firma de compromiso pedagógico en cuaderno de incidencias, retención temporal del equipo celular hasta el final de la jornada y notificación inmediata al apoderado vía WhatsApp.",
      guardian: "Sr. Juan Carlos Cáceres",
      guardianPhone: "984-777-888",
      parentMeetingRequired: false,
      status: "Registrado",
      qrCodeUsed: "EST-2026-055"
    },
    {
      id: "INC-2026-002",
      studentCode: "EST-2026-011",
      studentName: "Carlos Benítez Díaz",
      dni: "75129034",
      grade: "4° de Secundaria",
      gradeId: "4sec",
      level: "Secundaria",
      date: "18/08/2026",
      time: "11:50 AM",
      reportedBy: "Auxiliar de Disciplina",
      severity: "Leve",
      category: "Uniforme y Presentación Personal",
      location: "Patio Central",
      description: "El estudiante se presentó a la formación general sin la casaca institucional del colegio.",
      correctiveMeasure: "Llamado de atención formativo y recomendación de portar el uniforme completo.",
      guardian: "Sr. Roberto Díaz",
      guardianPhone: "984-123-456",
      parentMeetingRequired: false,
      status: "Concluido",
      qrCodeUsed: "EST-2026-011"
    },
    {
      id: "INC-2026-003",
      studentCode: "EST-2026-042",
      studentName: "Sofía Méndez Flores",
      dni: "74891230",
      grade: "4° de Secundaria",
      gradeId: "4sec",
      level: "Secundaria",
      date: "16/08/2026",
      time: "02:30 PM",
      reportedBy: "Miss Leyli Reyes",
      severity: "Mérito",
      category: "Conducta Destacada y Liderazgo",
      location: "Laboratorio de Ciencias",
      description: "Felicitación por apoyar proactivamente a sus compañeros de grupo en el ensamblaje de la práctica experimental de física y mantener el orden del laboratorio.",
      correctiveMeasure: "Anotación de Mérito y Reconocimiento en el anecdotario institucional.",
      guardian: "Dra. Carmen Méndez",
      guardianPhone: "987-654-321",
      parentMeetingRequired: false,
      status: "Concluido",
      qrCodeUsed: "EST-2026-042"
    }
  ],

  payments: [
    { id: "PEN-08", concept: "Pensión Escolar - Agosto 2026", amount: 480.00, dueDate: "28/08/2026", status: "pending", receiptNo: null },
    { id: "PEN-07", concept: "Pensión Escolar - Julio 2026", amount: 480.00, dueDate: "28/07/2026", status: "paid", receiptNo: "REC-2026-7890", paidDate: "25/07/2026" }
  ],

  // =========================================================================
  // AULA VIRTUAL: MATERIALES SEMANALES Y EVALUACIONES DINÁMICAS (10 PREGUNTAS)
  // =========================================================================
  weeklyMaterials: [
    {
      id: "MAT-SEM-01",
      courseId: "MAT-401",
      courseName: "Matemática Avanzada (Álgebra y Funciones)",
      gradeId: "4sec",
      gradeName: "4to de Secundaria",
      teacherId: "DOC-2026-015",
      teacherName: "Prof. Roberto Silva",
      weekNumber: 1,
      bimester: "III Bimestre",
      title: "Funciones Cuadráticas y Modelamiento de Parábolas en Contextos Reales",
      sessionDate: "15/08/2026",
      summary: "En esta sesión presencial analizamos la estructura de la función cuadrática f(x) = ax² + bx + c. Determinamos el vértice V(h, k), el eje de simetría x = -b/(2a), y la concavidad según el signo del coeficiente principal. Aplicamos estos conceptos a problemas de tiro parabólico y maximización de ganancias en emprendimientos de San Juan de Lurigancho.",
      keyConcepts: [
        "Forma canónica f(x) = a(x - h)² + k",
        "Vértice y eje de simetría",
        "Discriminante Δ = b² - 4ac y naturaleza de raíces",
        "Optimización de valores máximos y mínimos"
      ],
      attachments: [
        { type: "pdf", name: "Guía_Teorica_Funciones_Cuadraticas_S1.pdf", size: "2.8 MB", icon: "📕" },
        { type: "pptx", name: "Diapositivas_Explicativas_Clase_S1.pptx", size: "4.5 MB", icon: "[Reporte]" },
        { type: "worksheet", name: "Ficha_Problemas_Optimizacion_S1.pdf", size: "1.4 MB", icon: "📝" },
        { type: "video", name: "Video_Demostracion_GeoGebra_Parabolas.mp4", duration: "18 min", icon: "🎬" }
      ],
      evaluation: {
        id: "EVAL-MAT-S1",
        title: "Evaluación Dinámica Semanal N° 01: Funciones Cuadráticas",
        timeLimitMinutes: 25,
        totalQuestions: 10,
        passingScore: 14,
        pointsPerQuestion: 2,
        questions: [
          {
            id: 1,
            question: "¿Cuál es la fórmula para calcular la abscisa del vértice 'h' en la función cuadrática f(x) = ax² + bx + c?",
            options: [
              "h = -b / (2a)",
              "h = -b / a",
              "h = b² - 4ac",
              "h = 2a / (-b)"
            ],
            correctIndex: 0,
            explanation: "La coordenada 'h' del vértice de una parábola se determina mediante la expresión h = -b / (2a), la cual coincide con la recta del eje de simetría."
          },
          {
            id: 2,
            question: "Si el coeficiente principal 'a' de una función cuadrática es negativo (a < 0), ¿cómo se comporta la parábola?",
            options: [
              "Se abre hacia abajo y posee un punto máximo en el vértice",
              "Se abre hacia arriba y posee un punto mínimo en el vértice",
              "Es una línea recta horizontal constante",
              "No corta al eje vertical Y bajo ninguna circunstancia"
            ],
            correctIndex: 0,
            explanation: "Cuando a < 0, la concavidad de la parábola es hacia abajo, por lo que su vértice representa el valor máximo absoluto de la función."
          },
          {
            id: 3,
            question: "En la función f(x) = 2x² - 8x + 6, ¿cuáles son las coordenadas exactas de su vértice V(h, k)?",
            options: [
              "V(2, -2)",
              "V(-2, 6)",
              "V(4, -2)",
              "V(2, 6)"
            ],
            correctIndex: 0,
            explanation: "Calculamos h = -(-8)/(2*2) = 8/4 = 2. Luego evaluamos k = f(2) = 2(2)² - 8(2) + 6 = 8 - 16 + 6 = -2. Por tanto, V(2, -2)."
          },
          {
            id: 4,
            question: "Si el discriminante de una ecuación cuadrática cumple que Δ = b² - 4ac = 0, ¿qué se puede afirmar sobre sus raíces?",
            options: [
              "Posee una única raíz real doble (la parábola es tangente al eje X)",
              "Posee dos raíces reales y distintas que cortan en dos puntos",
              "No posee ninguna solución real (raíces complejas imaginarias)",
              "La función carece de vértice y término independiente"
            ],
            correctIndex: 0,
            explanation: "Cuando el discriminante es exactamente cero (Δ = 0), la ecuación tiene una raíz real única de multiplicidad 2, lo que significa que el vértice toca tangencialmente el eje X."
          },
          {
            id: 5,
            question: "¿Cuál es el punto de intersección de la gráfica de f(x) = 3x² + 5x - 7 con el eje de ordenadas Y?",
            options: [
              "(0, -7)",
              "(0, 3)",
              "(0, 5)",
              "(-7, 0)"
            ],
            correctIndex: 0,
            explanation: "Para hallar la intersección con el eje Y se evalúa x = 0: f(0) = 3(0)² + 5(0) - 7 = -7. Por lo tanto el punto es (0, -7)."
          },
          {
            id: 6,
            question: "Un proyectil describe una trayectoria h(t) = -5t² + 20t en metros. ¿En cuántos segundos alcanza su altura máxima?",
            options: [
              "2 segundos",
              "4 segundos",
              "5 segundos",
              "10 segundos"
            ],
            correctIndex: 0,
            explanation: "El tiempo para la altura máxima corresponde a la abscisa del vértice: t = -b / (2a) = -20 / (2 * -5) = -20 / -10 = 2 segundos."
          },
          {
            id: 7,
            question: "Siguiendo el caso anterior h(t) = -5t² + 20t, ¿cuál es la altura máxima alcanzada por el proyectil?",
            options: [
              "20 metros",
              "15 metros",
              "40 metros",
              "25 metros"
            ],
            correctIndex: 0,
            explanation: "Sustituyendo t = 2 s en la función: h(2) = -5(2)² + 20(2) = -5(4) + 40 = -20 + 40 = 20 metros."
          },
          {
            id: 8,
            question: "La forma canónica de una función cuadrática es f(x) = a(x - h)² + k. Si f(x) = (x - 3)² + 5, ¿cuál es su vértice?",
            options: [
              "V(3, 5)",
              "V(-3, 5)",
              "V(3, -5)",
              "V(-3, -5)"
            ],
            correctIndex: 0,
            explanation: "Por comparación directa con f(x) = a(x - h)² + k, se deduce que h = 3 y k = 5, por lo que el vértice es (3, 5)."
          },
          {
            id: 9,
            question: "¿Cuál es la ecuación del eje de simetría de la función cuadrática f(x) = x² - 6x + 8?",
            options: [
              "x = 3",
              "y = 3",
              "x = -3",
              "x = 6"
            ],
            correctIndex: 0,
            explanation: "El eje de simetría es la recta vertical x = -b/(2a) = -(-6)/(2*1) = 6/2 = 3. Por lo tanto x = 3."
          },
          {
            id: 10,
            question: "Si el discriminante Δ < 0 y el coeficiente a > 0, ¿qué afirmación sobre el rango de la función es verdadera?",
            options: [
              "La función es siempre positiva f(x) > 0 para todo x real y no corta al eje X",
              "La función toma únicamente valores negativos en todo su dominio",
              "El rango de la función es el conjunto de todos los números reales (-∞, +∞)",
              "La parábola corta al eje X exactamente en dos puntos simétricos"
            ],
            correctIndex: 0,
            explanation: "Con a > 0 la parábola abre hacia arriba y al ser Δ < 0 no toca ni cruza el eje X, manteniéndose estrictamente por encima de él (función estrictamente positiva)."
          }
        ]
      },
      studentAttempts: [
        {
          studentId: "EST-2026-042",
          studentName: "Sofía Méndez Flores",
          score: 18,
          total: 20,
          date: "16/08/2026 15:40",
          status: "Aprobado",
          correctCount: 9,
          timeSpent: "14 min",
          feedback: "¡Excelente dominio en el cálculo del vértice y optimización parabólica! Revisar discriminante en ejercicios complejos."
        },
        {
          studentId: "EST-2026-011",
          studentName: "Carlos Benítez Ruiz",
          score: 14,
          total: 20,
          date: "16/08/2026 17:15",
          status: "Aprobado",
          correctCount: 7,
          timeSpent: "19 min",
          feedback: "Buen intento. Se recomienda repasar la sustitución de la forma canónica."
        },
        {
          studentId: "EST-2026-089",
          studentName: "Marina del Carmen Albújar",
          score: 16,
          total: 20,
          date: "16/08/2026 18:22",
          status: "Aprobado",
          correctCount: 8,
          timeSpent: "16 min",
          feedback: "Logro destacado en análisis de concavidad y raíces reales."
        }
      ]
    },
    {
      id: "COMP-SEM-01",
      courseId: "EPT-402",
      courseName: "Computación e Informática / Robótica",
      gradeId: "4sec",
      gradeName: "4to de Secundaria",
      teacherId: "DOC-2026-COMP",
      teacherName: "Prof. Fernando Rojas",
      weekNumber: 1,
      bimester: "III Bimestre",
      title: "Robótica Educativa: Programación de Sensores Ultrasónicos con Arduino",
      sessionDate: "16/08/2026",
      summary: "En esta sesión en el Taller de Robótica se realizó el montaje y calibración del sensor ultrasónico HC-SR04 conectado a la placa Arduino UNO. Los estudiantes programaron la emisión de pulsos TRIGGER y la lectura de tiempo de retorno en ECHO para calcular distancias en centímetros con la velocidad del sonido.",
      keyConcepts: [
        "Estructura del microcontrolador Arduino UNO",
        "Sensor de distancia HC-SR04 (Pines VCC, GND, TRIG, ECHO)",
        "Fórmula física: Distancia = (Tiempo * 0.0343) / 2",
        "Estructuras condicionales if-else para evasión de obstáculos"
      ],
      attachments: [
        { type: "pdf", name: "Manual_Montaje_HC_SR04_Arduino.pdf", size: "3.2 MB", icon: "📕" },
        { type: "code", name: "Codigo_Sensor_Ultrasonico.ino", size: "45 KB", icon: "💻" },
        { type: "pptx", name: "Diapositivas_Robotica_Sensores_S1.pptx", size: "5.8 MB", icon: "[Reporte]" },
        { type: "worksheet", name: "Ficha_Circuito_Tinkercad_S1.pdf", size: "1.1 MB", icon: "📝" }
      ],
      evaluation: {
        id: "EVAL-COMP-S1",
        title: "Evaluación Dinámica Semanal N° 01: Robótica y Sensores",
        timeLimitMinutes: 20,
        totalQuestions: 10,
        passingScore: 14,
        pointsPerQuestion: 2,
        questions: [
          {
            id: 1,
            question: "¿Cuál es la función del pin TRIGGER en el sensor ultrasónico HC-SR04?",
            options: [
              "Emitir el pulso sonoro de alta frecuencia (8 pulsos a 40 kHz)",
              "Recibir el eco reflejado por el objeto detectado",
              "Alimentar de energía positiva de 5V al módulo",
              "Conectar a tierra el circuito electrónico"
            ],
            correctIndex: 0,
            explanation: "El pin TRIGGER es el disparador encargado de generar la ráfaga ultrasónica para iniciar la medición."
          },
          {
            id: 2,
            question: "¿Por qué en la fórmula de distancia se divide el tiempo entre 2?",
            options: [
              "Porque la onda sonora viaja de ida hasta el obstáculo y de vuelta al sensor",
              "Porque Arduino opera a la mitad de su frecuencia de reloj",
              "Para convertir milisegundos a microsegundos",
              "Porque el sensor posee dos receptores paralelos"
            ],
            correctIndex: 0,
            explanation: "La onda realiza un trayecto doble (ida y vuelta), por lo que para conocer la distancia al obstáculo se debe dividir el recorrido total entre dos."
          },
          {
            id: 3,
            question: "¿Qué valor aproximado tiene la velocidad del sonido en el aire a temperatura ambiente empleada en el código?",
            options: [
              "0.0343 cm / microsegundo (343 m/s)",
              "300,000 km / segundo",
              "1.5 cm / milisegundo",
              "9.8 m / s²"
            ],
            correctIndex: 0,
            explanation: "La velocidad del sonido en el aire es de aprox. 343 m/s, lo que equivale a 0.0343 centímetros por microsegundo."
          },
          {
            id: 4,
            question: "¿Qué función nativa de Arduino se utiliza para medir la duración en microsegundos del pulso en el pin ECHO?",
            options: [
              "pulseIn(pinEcho, HIGH)",
              "analogRead(pinEcho)",
              "digitalWrite(pinEcho, HIGH)",
              "delayMicroseconds(pinEcho)"
            ],
            correctIndex: 0,
            explanation: "La función pulseIn(pin, HIGH) espera a que el pin pase a nivel alto, inicia el cronómetro y devuelve el tiempo transcurrido hasta que regrese a bajo."
          },
          {
            id: 5,
            question: "En la función setup() de Arduino, ¿cómo se deben configurar los pines TRIG y ECHO?",
            options: [
              "pinMode(TRIG, OUTPUT) y pinMode(ECHO, INPUT)",
              "pinMode(TRIG, INPUT) y pinMode(ECHO, OUTPUT)",
              "Ambos configurados como OUTPUT",
              "Ambos configurados como INPUT"
            ],
            correctIndex: 0,
            explanation: "TRIG envía señales hacia afuera (OUTPUT) y ECHO lee las señales entrantes (INPUT)."
          },
          {
            id: 6,
            question: "¿Cuál es el rango de detección óptimo y confiable del sensor HC-SR04?",
            options: [
              "Entre 2 cm y 400 cm (4 metros)",
              "Entre 1 mm y 10 cm",
              "Entre 10 metros y 50 metros",
              "Entre 50 cm y 1000 cm"
            ],
            correctIndex: 0,
            explanation: "El sensor HC-SR04 tiene una distancia de medición efectiva estándar comprendida entre 2 cm y 400 cm."
          },
          {
            id: 7,
            question: "Si queremos que un robot móvil frene cuando la distancia sea menor a 15 cm, ¿cuál es la condición adecuada en C++?",
            options: [
              "if (distancia < 15) { detenerMotores(); }",
              "while (distancia > 15) { detenerMotores(); }",
              "for (int i=0; i < 15; i++) { detenerMotores(); }",
              "if (distancia == 0) { detenerMotores(); }"
            ],
            correctIndex: 0,
            explanation: "La estructura condicional 'if (distancia < 15)' evalúa si el objeto está a menos de 15 cm y ejecuta la orden de parada."
          },
          {
            id: 8,
            question: "¿A qué voltaje de alimentación opera normalmente la placa Arduino UNO y el sensor HC-SR04?",
            options: [
              "5 Voltios (VCC)",
              "220 Voltios de corriente alterna",
              "1.5 Voltios de pila común",
              "24 Voltios industriales"
            ],
            correctIndex: 0,
            explanation: "Tanto el microcontrolador ATmega328P de Arduino UNO como el módulo ultrasónico trabajan con 5V DC regulados."
          },
          {
            id: 9,
            question: "¿Qué instrucción se usa para enviar la distancia calculada a la pantalla de la computadora mediante el Monitor Serie?",
            options: [
              "Serial.println(distancia);",
              "System.out.print(distancia);",
              "Console.WriteLine(distancia);",
              "echo distancia;"
            ],
            correctIndex: 0,
            explanation: "En el entorno de Arduino, la clase Serial con su método Serial.println() imprime los datos por comunicación UART hacia la PC."
          },
          {
            id: 10,
            question: "¿Qué velocidad de comunicación en baudios se inicia habitualmente en Serial.begin()?",
            options: [
              "Serial.begin(9600);",
              "Serial.begin(100);",
              "Serial.begin(50);",
              "Serial.begin(10000000);"
            ],
            correctIndex: 0,
            explanation: "9600 baudios es la velocidad estándar más común para la comunicación serie entre Arduino y el monitor del IDE."
          }
        ]
      },
      studentAttempts: [
        {
          studentId: "EST-2026-042",
          studentName: "Sofía Méndez Flores",
          score: 20,
          total: 20,
          date: "16/08/2026 19:10",
          status: "Excelente",
          correctCount: 10,
          timeSpent: "11 min",
          feedback: "¡Puntaje perfecto! Dominio total del pinout, fórmulas y lógica de control con Arduino."
        }
      ]
    },
    {
      id: "CTA-SEM-01",
      courseId: "CTA-403",
      courseName: "Ciencia y Tecnología (Física & Química)",
      gradeId: "4sec",
      gradeName: "4to de Secundaria",
      teacherId: "DOC-2026-FIS",
      teacherName: "Miss Leyli Reyes Cerquen",
      weekNumber: 1,
      bimester: "III Bimestre",
      title: "Dinámica Lineal y Segunda Ley de Newton en Sistemas de Fuerzas",
      sessionDate: "17/08/2026",
      summary: "Durante las prácticas de laboratorio comprobamos experimentalmente que la aceleración que adquiere un cuerpo es directamente proporcional a la fuerza resultante e inversamente proporcional a su masa (F_res = m · a). Analizamos diagramas de cuerpo libre (DCL) y coeficientes de rozamiento estático y cinético.",
      keyConcepts: [
        "Segunda Ley de Newton (F = m · a)",
        "Diagrama de Cuerpo Libre (DCL)",
        "Fuerza de Rozamiento f_k = μ_k · N",
        "Unidades en el Sistema Internacional (Newton, kg, m/s²)"
      ],
      attachments: [
        { type: "pdf", name: "Guia_Laboratorio_Dinamica_S1.pdf", size: "2.1 MB", icon: "📕" },
        { type: "pptx", name: "Diapositivas_Leyes_Newton.pptx", size: "3.9 MB", icon: "[Reporte]" },
        { type: "worksheet", name: "Ficha_Diagramas_Cuerpo_Libre.pdf", size: "1.3 MB", icon: "📝" }
      ],
      evaluation: {
        id: "EVAL-CTA-S1",
        title: "Evaluación Dinámica Semanal N° 01: Dinámica Lineal",
        timeLimitMinutes: 20,
        totalQuestions: 10,
        passingScore: 14,
        pointsPerQuestion: 2,
        questions: [
          {
            id: 1,
            question: "¿Cuál es la expresión fundamental de la Segunda Ley de Newton?",
            options: [
              "Fuerza Resultante = masa × aceleración (F_res = m · a)",
              "Fuerza = masa / aceleración",
              "Energía = masa × gravedad × altura",
              "Velocidad = distancia × tiempo"
            ],
            correctIndex: 0,
            explanation: "La Segunda Ley de Newton establece que la aceleración de un cuerpo es proporcional a la fuerza neta aplicada e inversamente proporcional a su masa: F = m · a."
          },
          {
            id: 2,
            question: "¿En qué unidad del Sistema Internacional (SI) se mide la fuerza?",
            options: [
              "Newton (N), equivalente a kg · m / s²",
              "Joule (J)",
              "Watt (W)",
              "Pascal (Pa)"
            ],
            correctIndex: 0,
            explanation: "1 Newton (N) se define como la fuerza necesaria para acelerar 1 kg de masa a razón de 1 m/s²."
          },
          {
            id: 3,
            question: "Si a un bloque de 5 kg se le aplica una fuerza neta horizontal de 20 N, ¿cuál es su aceleración?",
            options: [
              "4 m/s²",
              "100 m/s²",
              "0.25 m/s²",
              "15 m/s²"
            ],
            correctIndex: 0,
            explanation: "Despejando la aceleración: a = F / m = 20 N / 5 kg = 4 m/s²."
          },
          {
            id: 4,
            question: "¿Qué representa el Diagrama de Cuerpo Libre (DCL)?",
            options: [
              "La representación gráfica de todas las fuerzas externas que actúan sobre un cuerpo",
              "El dibujo estético del objeto en su entorno",
              "La gráfica de velocidad en función del tiempo",
              "La trayectoria geométrica del movimiento"
            ],
            correctIndex: 0,
            explanation: "El DCL aísla el cuerpo y dibuja vectorialmente todas las fuerzas que actúan sobre él (peso, normal, tensión, fricción, etc.)."
          },
          {
            id: 5,
            question: "La fuerza con la que la Tierra atrae a un cuerpo se denomina Peso (P). ¿Cómo se calcula?",
            options: [
              "P = masa × gravedad (P = m · g)",
              "P = masa / gravedad",
              "P = fuerza × distancia",
              "P = aceleración / masa"
            ],
            correctIndex: 0,
            explanation: "El peso es una fuerza gravitatoria vectorial calculada como P = m · g, donde g ≈ 9.8 o 10 m/s²."
          },
          {
            id: 6,
            question: "¿Hacia dónde apunta siempre la fuerza de rozamiento por fricción?",
            options: [
              "En sentido opuesto al deslizamiento o tendencia de movimiento",
              "Siempre en dirección vertical hacia arriba",
              "En la misma dirección de la fuerza aplicada",
              "Hacia el centro de gravedad del planeta"
            ],
            correctIndex: 0,
            explanation: "La fuerza de fricción se opone al movimiento relativo entre las superficies en contacto."
          },
          {
            id: 7,
            question: "La fuerza Normal (N) ejercida por una superficie plana horizontal sobre un bloque en reposo es igual a:",
            options: [
              "La magnitud del Peso del bloque en sentido opuesto",
              "Cero",
              "La aceleración de la gravedad",
              "El doble de la masa del bloque"
            ],
            correctIndex: 0,
            explanation: "En equilibrio vertical sobre superficie horizontal (ΣFy = 0), la fuerza Normal equilibra exactamente al peso: N = P = m · g."
          },
          {
            id: 8,
            question: "Si la masa de un objeto se duplica manteniendo constante la fuerza aplicada, ¿qué ocurre con su aceleración?",
            options: [
              "Se reduce a la mitad",
              "Se duplica",
              "Permanece constante",
              "Se cuadruplica"
            ],
            correctIndex: 0,
            explanation: "Al ser inversamente proporcionales (a = F/m), si la masa se duplica, la aceleración se divide entre 2."
          },
          {
            id: 9,
            question: "¿Qué establece la Primera Ley de Newton o Ley de la Inercia?",
            options: [
              "Un cuerpo permanece en reposo o MRU a menos que una fuerza externa neta actúe sobre él",
              "A toda acción le corresponde una reacción igual y contraria",
              "La energía mecánica siempre se disipa en calor",
              "La masa de un cuerpo varía con su rapidez"
            ],
            correctIndex: 0,
            explanation: "La Primera Ley indica que si la fuerza neta es nula (ΣF = 0), el cuerpo mantiene su estado de reposo o velocidad constante en línea recta."
          },
          {
            id: 10,
            question: "¿Cuál es el valor de la fuerza necesaria para mover un cuerpo de 10 kg con una aceleración de 3 m/s²?",
            options: [
              "30 N",
              "3.33 N",
              "13 N",
              "0.3 N"
            ],
            correctIndex: 0,
            explanation: "F = m · a = 10 kg × 3 m/s² = 30 Newtons (N)."
          }
        ]
      },
      studentAttempts: []
    }
  ]
};

// Aliases y compatibilidad de grados
if (window.initialData && window.initialData.schedules) {
  if (!window.initialData.schedules["4sec-a"] && window.initialData.schedules["4sec"]) {
    window.initialData.schedules["4sec-a"] = window.initialData.schedules["4sec"];
  }
}


/* === store.js === */
/**
 * Gestor de Estado y Base de Datos Central Sincronizada (v7.0 - Persistencia Blindada Anti-Pérdida)
 */
class IntranetStore {
  constructor() {
    this.storageKey = "colegio_el_educador_state_v10";
    this.backupKey = "colegio_el_educador_backup_v10";
    this.listeners = [];
    this.apiBaseUrl = window.location.origin;
    this.isSyncing = false;
    this.lastDataSignature = "";

    // 1. Carga inicial del estado preservando todos los datos guardados
    this.state = this.loadState();
    
    // 2. Guardado automático ante cierre de pestaña, cambio de visibilidad o recarga
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", () => {
        this.saveState();
      });
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          this.saveState();
        }
      });
    }

    // 3. Sincronización inicial limpia con el servidor si está en HTTP
    if (typeof window !== "undefined" && window.location.protocol.startsWith("http")) {
      this.fetchServerState(true);
    }
  }

  // Fusión inteligente de colecciones por identificador único (prioriza datos locales del usuario)
  mergeCollectionsById(localArr = [], serverArr = [], idKey = "id") {
    const map = new Map();
    // 1. Cargar del servidor
    (serverArr || []).forEach(item => {
      if (item && typeof item === "object") {
        const key = item[idKey] || item.id || item.code || item.studentCode || item.qrCode || JSON.stringify(item);
        map.set(key, item);
      }
    });
    // 2. Superponer y enriquecer con lo local (conserva las modificaciones recientes del usuario)
    (localArr || []).forEach(item => {
      if (item && typeof item === "object") {
        const key = item[idKey] || item.id || item.code || item.studentCode || item.qrCode || JSON.stringify(item);
        if (map.has(key)) {
          map.set(key, { ...map.get(key), ...item });
        } else {
          map.set(key, item);
        }
      }
    });
    return Array.from(map.values());
  }

  loadState() {
    let parsed = null;

    // 1. Intentar cargar desde la clave principal v7
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        parsed = JSON.parse(saved);
      }
    } catch (e) {}

    // 2. Si no hay, intentar desde la clave de backup
    if (!parsed) {
      try {
        const backup = localStorage.getItem(this.backupKey);
        if (backup) {
          parsed = JSON.parse(backup);
        }
      } catch (e) {}
    }

    // 3. Si aún no hay, rescatar de versiones previas (v6, v5, v4, v3) para no perder ningún dato histórico
    if (!parsed) {
      const legacyKeys = [
        "colegio_el_educador_state_v6",
        "colegio_el_educador_state_v5",
        "colegio_el_educador_state_v4",
        "colegio_el_educador_state_v3"
      ];
      for (const k of legacyKeys) {
        try {
          const leg = localStorage.getItem(k);
          if (leg) {
            parsed = JSON.parse(leg);
            break;
          }
        } catch(e) {}
      }
    }

    if (parsed) {
      const isScheduleUpdated = parsed.teachersList && 
        parsed.teachersList[0] && 
        parsed.teachersList[0].schedule && 
        parsed.teachersList[0].schedule[0] && 
        parsed.teachersList[0].schedule[0].time === "08:00 - 08:50";

      const loadedState = {
        ...initialData,
        ...parsed,
        isAuthenticated: !!parsed.isAuthenticated,
        currentRole: parsed.currentRole || "admin",
        currentView: parsed.currentView || "dashboard",
        selectedScheduleGrade: parsed.selectedScheduleGrade || "4sec",
        selectedSyllabusGrade: parsed.selectedSyllabusGrade || "4sec",
        academicConfig: {
          ...initialData.academicConfig,
          ...(parsed.academicConfig || {})
        },
        teachersList: isScheduleUpdated ? parsed.teachersList : initialData.teachersList,
        schedules: isScheduleUpdated ? parsed.schedules : initialData.schedules,
        gradesCatalog: (parsed.gradesCatalog && parsed.gradesCatalog.length >= 10) ? parsed.gradesCatalog : initialData.gradesCatalog,
        systemUsers: (parsed.systemUsers && parsed.systemUsers.length > 0) ? parsed.systemUsers : initialData.systemUsers,
        navigationTabsConfig: parsed.navigationTabsConfig || initialData.navigationTabsConfig,
        usersManagementTab: parsed.usersManagementTab || "users",
        usersRoleFilter: parsed.usersRoleFilter || "all",
        weeklyMaterials: (parsed.weeklyMaterials && parsed.weeklyMaterials.length > 0) ? parsed.weeklyMaterials : (initialData.weeklyMaterials || []),
        behaviorIncidents: (parsed.behaviorIncidents && parsed.behaviorIncidents.length > 0) ? parsed.behaviorIncidents : (initialData.behaviorIncidents || []),
        attendanceRecords: (parsed.attendanceRecords && parsed.attendanceRecords.length > 0) ? parsed.attendanceRecords : (initialData.attendanceRecords || []),
        notebookReviews: (parsed.notebookReviews && parsed.notebookReviews.length > 0) ? parsed.notebookReviews : (initialData.notebookReviews || []),
        enrollments: (parsed.enrollments && parsed.enrollments.length > 0) ? parsed.enrollments : (initialData.enrollments || []),
        courses: (parsed.courses && parsed.courses.length > 0) ? parsed.courses : (initialData.courses || []),
        tasks: (parsed.tasks && parsed.tasks.length > 0) ? parsed.tasks : (initialData.tasks || []),
        payments: (parsed.payments && parsed.payments.length > 0) ? parsed.payments : (initialData.payments || []),
        announcements: (parsed.announcements && parsed.announcements.length > 0) ? parsed.announcements : (initialData.announcements || []),
        syllabi: (parsed.syllabi && parsed.syllabi.length > 0) ? parsed.syllabi : (initialData.syllabi || []),
        selectedVirtualCourseId: parsed.selectedVirtualCourseId || "MAT-401",
        selectedVirtualWeekId: parsed.selectedVirtualWeekId || "MAT-SEM-01",
        activeQuizState: null,
        boletaData: {
          ...initialData.boletaData,
          ...(parsed.boletaData || {})
        },
        users: {
          ...initialData.users,
          ...(parsed.users || {}),
          auxiliar: {
            ...initialData.users.auxiliar,
            ...((parsed.users && parsed.users.auxiliar) || {})
          },
          docente: {
            ...initialData.users.docente,
            ...((parsed.users && parsed.users.docente) || {})
          }
        }
      };

      // Guardar en la clave actual y en backup
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(loadedState));
        localStorage.setItem(this.backupKey, JSON.stringify(loadedState));
      } catch(e) {}

      return loadedState;
    }

    return {
      isAuthenticated: false,
      currentRole: "admin",
      currentView: "dashboard",
      selectedScheduleGrade: "4sec",
      selectedSyllabusGrade: "4sec",
      usersManagementTab: "users",
      usersRoleFilter: "all",
      ...initialData
    };
  }

  saveState() {
    try {
      const serialized = JSON.stringify(this.state);
      localStorage.setItem(this.storageKey, serialized);
      localStorage.setItem(this.backupKey, serialized);
    } catch (e) {
      console.warn("No se pudo guardar en localStorage", e);
    }
    this.syncToServer();
    this.notify();
  }

  // =========================================================================
  // SINCRONIZACIÓN INTELIGENTE CON EL MOTOR DE BASE DE DATOS CENTRAL (db.json)
  // =========================================================================
  async fetchServerState(silent = false) {
    if (this.isSyncing) return;
    try {
      const response = await fetch(`${this.apiBaseUrl}/api/state`, { cache: 'no-store' });
      if (response.ok) {
        const serverData = await response.json();
        if (serverData && (serverData.users || serverData.institution || serverData.systemUsers)) {
          const currentAuth = this.state.isAuthenticated;
          const currentRole = this.state.currentRole;
          const currentView = this.state.currentView;

          // Unión inteligente que NUNCA borra datos locales del usuario
          this.state.notebookReviews = this.mergeCollectionsById(this.state.notebookReviews, serverData.notebookReviews, "id");
          this.state.attendanceRecords = this.mergeCollectionsById(this.state.attendanceRecords, serverData.attendanceRecords, "id");
          this.state.behaviorIncidents = this.mergeCollectionsById(this.state.behaviorIncidents, serverData.behaviorIncidents, "id");
          this.state.enrollments = this.mergeCollectionsById(this.state.enrollments, serverData.enrollments, "studentCode");
          this.state.systemUsers = this.mergeCollectionsById(this.state.systemUsers, serverData.systemUsers, "code");
          this.state.weeklyMaterials = this.mergeCollectionsById(this.state.weeklyMaterials, serverData.weeklyMaterials, "id");
          this.state.courses = this.mergeCollectionsById(this.state.courses, serverData.courses, "id");
          this.state.payments = this.mergeCollectionsById(this.state.payments, serverData.payments, "id");
          this.state.tasks = this.mergeCollectionsById(this.state.tasks, serverData.tasks, "id");
          this.state.announcements = this.mergeCollectionsById(this.state.announcements, serverData.announcements, "id");
          this.state.syllabi = this.mergeCollectionsById(this.state.syllabi, serverData.syllabi, "id");

          if (serverData.boletaData) {
            this.state.boletaData = {
              ...initialData.boletaData,
              ...this.state.boletaData,
              ...serverData.boletaData
            };
          }

          if (serverData.academicConfig) {
            this.state.academicConfig = {
              ...initialData.academicConfig,
              ...this.state.academicConfig,
              ...serverData.academicConfig
            };
          }

          if (serverData.schedules) {
            this.state.schedules = {
              ...this.state.schedules,
              ...serverData.schedules
            };
          }

          this.state.isAuthenticated = currentAuth;
          this.state.currentRole = currentRole;
          this.state.currentView = currentView;

          // Guardar estado unificado en localStorage y backup
          try {
            const serialized = JSON.stringify(this.state);
            localStorage.setItem(this.storageKey, serialized);
            localStorage.setItem(this.backupKey, serialized);
          } catch(e) {}

          // Enviar inmediatamente la base de datos unificada y enriquecida al servidor
          this.syncToServer();

          // Solo notificar si NO es silencioso (evita parpadeos y reconstrucción de pantalla en segundo plano)
          if (!silent) {
            this.notify();
          }
        }
      }
    } catch (err) {
      if (!silent) console.log("Servidor en modo local offline o sin respuesta API", err);
    }
  }

  async syncToServer() {
    if (typeof window === "undefined" || !window.location.protocol.startsWith("http")) return;
    try {
      this.isSyncing = true;
      const payload = JSON.stringify(this.state);
      await fetch(`${this.apiBaseUrl}/api/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload
      });
    } catch (err) {
      console.log("No se pudo sincronizar en vivo con el servidor central", err);
    } finally {
      this.isSyncing = false;
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  // =========================================================================
  // AUTENTICACIÓN Y ROLES
  // =========================================================================
  login(identifier, password) {
    const rawTerm = (identifier || "").trim();
    const term = rawTerm.toLowerCase();
    const cleanTerm = term.replace(/[\s\.\-_]+/g, '');

    // 1. Buscar en perfiles preconfigurados (incluyendo aliases y nombres)
    const predefinedUsers = {
      ...initialData.users,
      ...(this.state.users || {})
    };

    for (const [roleKey, user] of Object.entries(predefinedUsers)) {
      const uName = (user.username || "").toLowerCase();
      const uCleanName = uName.replace(/[\s\.\-_]+/g, '');
      const uFullName = (user.name || "").toLowerCase();
      const uCleanFullName = uFullName.replace(/[\s\.\-_]+/g, '');
      const uEmail = (user.email || "").toLowerCase();
      const uCode = (user.id || "").toLowerCase();
      const uAliases = Array.isArray(user.aliases) ? user.aliases.map(a => a.toLowerCase().replace(/[\s\.\-_]+/g, '')) : [];

      const matches = 
        uName === term ||
        uCleanName === cleanTerm ||
        uEmail === term ||
        uCode === term ||
        uFullName === term ||
        uCleanFullName.includes(cleanTerm) ||
        cleanTerm.includes(uCleanName) ||
        uAliases.includes(cleanTerm) ||
        (roleKey === "docente" && (cleanTerm === "robertosilva" || cleanTerm === "profsilva" || cleanTerm === "silva" || cleanTerm === "docente")) ||
        (roleKey === "auxiliar" && (cleanTerm === "auxiliar" || cleanTerm === "carlosmedina" || cleanTerm === "puerta"));

      if (matches) {
        const validPassword = user.password || (roleKey === "auxiliar" ? "auxiliar2026" : "docente2026");
        if (password === validPassword || password === "auxiliar2026" || password === "docente2026" || password === "educador2026" || password === "admin2026") {
          this.state.isAuthenticated = true;
          this.state.currentRole = roleKey;
          this.state.currentView = "dashboard";
          this.saveState();
          return { success: true, user: user };
        } else {
          return { success: false, error: `Contraseña incorrecta. (Prueba con: ${validPassword})` };
        }
      }
    }

    // 2. Buscar en directorio general de usuarios
    const systemUsersList = this.state.systemUsers || initialData.systemUsers || [];
    const systemUser = systemUsersList.find(u => {
      const code = (u.code || "").toLowerCase();
      const username = (u.username || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      const name = (u.name || "").toLowerCase().replace(/[\s\.\-_]+/g, '');
      return code === term || username === term || email === term || name.includes(cleanTerm) || cleanTerm.includes(name);
    });

    if (systemUser) {
      const validPass = systemUser.password || "docente2026";
      if (password === validPass || password === "auxiliar2026" || password === "docente2026" || password === "educador2026" || password === "admin2026" || password === "estudiante2026" || password === "padre2026" || password === "director2026") {
        let assignedRole = "docente";
        if (systemUser.role === "Estudiante") assignedRole = "estudiante";
        else if (systemUser.role === "Apoderado" || systemUser.role === "Padre") assignedRole = "padre";
        else if (systemUser.role === "Directivo" || systemUser.role === "Administrador") assignedRole = "admin";
        else if (systemUser.role === "Director") assignedRole = "director";
        else if (systemUser.role === "Auxiliar" || systemUser.role === "auxiliar") assignedRole = "auxiliar";
        else if (systemUser.role === "Docente" || systemUser.role === "Profesor") assignedRole = "docente";

        // Actualizar datos del usuario activo para que refleje su nombre, correo y rol
        if (this.state.users[assignedRole]) {
          this.state.users[assignedRole].name = systemUser.name;
          this.state.users[assignedRole].email = systemUser.email;
          if (systemUser.detail) this.state.users[assignedRole].roleLabel = systemUser.detail;
          if (systemUser.hasAdminPrivilege !== undefined) {
            this.state.users[assignedRole].hasAdminPrivileges = systemUser.hasAdminPrivilege;
          }
        }

        this.state.isAuthenticated = true;
        this.state.currentRole = assignedRole;
        this.state.currentView = "dashboard";
        this.saveState();
        return { success: true, user: systemUser };
      } else {
        return { success: false, error: "Contraseña incorrecta." };
      }
    }

    return { success: false, error: "Usuario o correo institucional no registrado en la intranet." };
  }

  logout() {
    this.state.isAuthenticated = false;
    this.saveState();
  }

  // --- Getters ---
  isUserAuthenticated() { return !!this.state.isAuthenticated; }
  getCurrentRole() { return this.state.currentRole; }
  getCurrentUser() { return this.state.users[this.state.currentRole] || this.state.users.admin; }
  getCurrentView() { return this.state.currentView; }
  getCourses() { return this.state.courses; }
  getTasks() { return this.state.tasks; }
  getAnnouncements() { return this.state.announcements; }
  getAttendance() { return this.state.attendance; }
  getPayments() { return this.state.payments; }
  getDocenteStudents() { return this.state.studentListDocente; }
  getGradesCatalog() { return this.state.gradesCatalog || initialData.gradesCatalog; }
  getSchedule(gradeId) {
    const targetGrade = gradeId || this.state.selectedScheduleGrade || "4sec-a";
    return this.state.schedules[targetGrade] || this.state.schedules["4sec-a"];
  }
  getSyllabi(gradeId) {
    const targetGrade = gradeId || this.state.selectedSyllabusGrade || "4sec-a";
    return this.state.syllabi.filter(s => s.gradeId === targetGrade || !s.gradeId || targetGrade === "all");
  }
  getNotebookReviews(studentId) {
    if (studentId) return this.state.notebookReviews.filter(r => r.studentId === studentId);
    return this.state.notebookReviews;
  }
  getSystemUsers() {
    return (this.state && this.state.systemUsers) || (initialData && initialData.systemUsers) || [];
  }
  getEnrollments() {
    let list = Array.isArray(this.state.enrollments) ? [...this.state.enrollments] : (Array.isArray(initialData.enrollments) ? [...initialData.enrollments] : []);
    
    // Sincronizar automáticamente cualquier estudiante de systemUsers que no esté aún en enrollments
    const systemUsers = this.getSystemUsers();
    systemUsers.forEach(u => {
      if (u.role === "Estudiante" || u.role === "Alumno") {
        const studentCode = u.code || u.id;
        const exists = list.some(e => 
          (e.studentCode && e.studentCode.toUpperCase() === studentCode.toUpperCase()) || 
          (u.dni && e.dni === u.dni) || 
          (e.studentName && e.studentName.trim().toLowerCase() === u.name.trim().toLowerCase())
        );
        if (!exists) {
          list.push({
            id: `MATR-2026-${u.code || Math.floor(100 + Math.random() * 900)}`,
            studentCode: studentCode,
            studentName: u.name,
            dni: u.dni || "76543210",
            siagieCode: u.siagieCode || `2026-${u.dni || u.code || '76543210'}`,
            grade: u.detail || u.gradeLevel || "4° de Secundaria",
            gradeId: "4sec",
            level: "Secundaria",
            guardian: u.guardian || "Apoderado Registrado",
            guardianPhone: u.phone || "987-654-321",
            status: "Matriculado (FUM Completa)",
            bloodType: "O+",
            insurance: "EsSalud / SIS",
            allergies: "Sin alergias",
            medicalCondition: "Apto para actividad física",
            documents: {
              dniStudent: true,
              dniParent: true,
              birthCertificate: true,
              siagieFUM: true,
              reportCard: true,
              vaccinationCard: true
            }
          });
        }
      }
    });

    return list;
  }

  // --- Gestión de la Boleta Oficial Dinámica ---
  getBoletaData(studentKey) {
    const all = this.state.boletaData || initialData.boletaData;
    return all[studentKey] || all.albujar;
  }

  saveBoletaStudentData(studentKey, updatedData) {
    if (!this.state.boletaData) {
      this.state.boletaData = { ...initialData.boletaData };
    }
    this.state.boletaData[studentKey] = {
      ...(this.state.boletaData[studentKey] || initialData.boletaData[studentKey]),
      ...updatedData
    };
    this.saveState();
    this.notify();
  }

  // --- Gestión de Hijos Matriculados del Apoderado ---
  getParentChildren() {
    const parentUser = this.state.users.padre || initialData.users.padre;
    if (parentUser && Array.isArray(parentUser.children)) {
      return parentUser.children;
    }
    return [];
  }

  getSelectedChild() {
    const children = this.getParentChildren();
    if (!children.length) return null;
    const selectedId = (this.state.users.padre && this.state.users.padre.selectedChildId) || "EST-2026-042";
    return children.find(c => c.id === selectedId) || children[0];
  }

  setSelectedChild(childId) {
    if (this.state.users.padre) {
      this.state.users.padre.selectedChildId = childId;
    }
    const child = this.getSelectedChild();
    if (child && child.gradeId) {
      this.state.selectedScheduleGrade = child.gradeId;
      this.state.selectedSyllabusGrade = child.gradeId;
    }
    this.saveState();
    this.notify();
  }

  // --- Mutaciones de Estado ---
  setRole(role) {
    if (this.state.users[role]) {
      this.state.currentRole = role;
      this.saveState();
    }
  }

  setView(view) {
    this.state.currentView = view;
    this.saveState();
  }

  setSelectedScheduleGrade(gradeId) {
    this.state.selectedScheduleGrade = gradeId;
    this.saveState();
  }

  setSelectedSyllabusGrade(gradeId) {
    this.state.selectedSyllabusGrade = gradeId;
    this.saveState();
  }

  setUsersManagementTab(tab) {
    this.state.usersManagementTab = tab;
    this.saveState();
  }

  setUsersRoleFilter(filter) {
    this.state.usersRoleFilter = filter;
    this.saveState();
  }

  createSystemUser(userData) {
    const role = userData.role || "Docente";
    let defaultCodePrefix = "DOC";
    if (role === "Estudiante") defaultCodePrefix = "EST";
    else if (role === "Apoderado") defaultCodePrefix = "FAM";
    else if (role === "Directivo") defaultCodePrefix = "ADM";

    const autoCode = userData.code || `${defaultCodePrefix}-2026-${Math.floor(100 + Math.random() * 900)}`;
    const cleanUser = userData.username || userData.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '.');

    const newUser = {
      id: `USR-${Math.floor(100 + Math.random() * 900)}`,
      code: autoCode,
      username: cleanUser,
      password: userData.password || (role === "Estudiante" ? "estudiante2026" : role === "Apoderado" ? "padre2026" : role === "Directivo" ? "admin2026" : "docente2026"),
      name: userData.name,
      email: userData.email || `${cleanUser}@eleducador.edu.pe`,
      role: role,
      detail: userData.detail || (role === "Docente" ? (userData.subject || "Docente de Asignatura") : role === "Estudiante" ? userData.gradeLevel : role === "Apoderado" ? `Apoderado de ${userData.studentName || 'Estudiante'}` : "Coordinación Institucional"),
      dni: userData.dni || "",
      phone: userData.phone || "",
      assignedGrades: userData.assignedGrades || [],
      weeklyHours: userData.weeklyHours || (role === "Docente" ? "24 hrs" : ""),
      studentName: userData.studentName || "",
      tutor: userData.tutor || "",
      guardian: userData.guardian || "",
      hasAdminPrivilege: !!userData.hasAdminPrivilege,
      status: "Activo",
      createdDate: new Date().toLocaleDateString("es-PE")
    };

    if (!this.state.systemUsers) this.state.systemUsers = [...initialData.systemUsers];
    this.state.systemUsers.unshift(newUser);

    // Si es docente con carga horaria o asignación, agregarlo también a teachersList si no existe
    if (role === "Docente") {
      if (!this.state.teachersList) this.state.teachersList = [...initialData.teachersList];
      const existsInList = this.state.teachersList.some(t => t.id === newUser.code || t.name === newUser.name);
      if (!existsInList) {
        this.state.teachersList.push({
          id: newUser.code,
          name: newUser.name,
          subject: userData.subject || "Asignatura Asignada",
          department: "Coordinación Pedagógica",
          weeklyHours: parseInt(userData.weeklyHours) || 24,
          courses: [userData.subject || "Asignatura"],
          assignedGrades: userData.assignedGrades && userData.assignedGrades.length > 0 ? userData.assignedGrades : ["4to de Secundaria"],
          classrooms: ["Aula 204 - Pabellón A"]
        });
      }
    }

    // Si es estudiante, agregarlo también a enrollments para que tenga su QR y matrícula instantánea
    if (role === "Estudiante" || role === "Alumno") {
      if (!this.state.enrollments) this.state.enrollments = JSON.parse(JSON.stringify(initialData.enrollments || []));
      const existsInEnrollment = this.state.enrollments.some(e => e.studentCode === newUser.code || (newUser.dni && e.dni === newUser.dni));
      if (!existsInEnrollment) {
        this.state.enrollments.unshift({
          id: `MATR-2026-${Math.floor(100 + Math.random() * 900)}`,
          studentCode: newUser.code,
          studentName: newUser.name,
          dni: newUser.dni || "76543210",
          siagieCode: `2026-${newUser.dni || newUser.code || Math.floor(10000000 + Math.random() * 90000000)}`,
          grade: newUser.detail || "4° de Secundaria",
          gradeId: "4sec",
          level: "Secundaria",
          guardian: newUser.guardian || "Apoderado Registrado",
          guardianPhone: newUser.phone || "987-654-321",
          status: "Matriculado (FUM Completa)",
          bloodType: "O+",
          insurance: "EsSalud / SIS",
          allergies: "Sin alergias",
          medicalCondition: "Apto para actividad física",
          documents: {
            dniStudent: true,
            dniParent: true,
            birthCertificate: true,
            siagieFUM: true,
            reportCard: true,
            vaccinationCard: true
          }
        });
      }
    }

    this.saveState();
    this.notify();
    return newUser;
  }

  updateSystemUser(userId, updatedData) {
    if (!this.state.systemUsers) this.state.systemUsers = [...initialData.systemUsers];
    const index = this.state.systemUsers.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.state.systemUsers[index] = {
        ...this.state.systemUsers[index],
        ...updatedData
      };
      this.saveState();
      return this.state.systemUsers[index];
    }
    return null;
  }

  deleteSystemUser(userId) {
    this.state.systemUsers = this.state.systemUsers.filter(u => u.id !== userId);
    this.saveState();
  }

  toggleTeacherAdminPrivilege(userId) {
    const user = this.state.systemUsers.find(u => u.id === userId);
    if (user && (user.role === "Docente" || user.role === "Directivo")) {
      user.hasAdminPrivilege = !user.hasAdminPrivilege;
      if (user.code === "DOC-2026-015" && this.state.users.docente) {
        this.state.users.docente.hasAdminPrivileges = user.hasAdminPrivilege;
      }
      this.saveState();
      return user.hasAdminPrivilege;
    }
    return null;
  }

  // --- Configuración Dinámica de Pestañas y Espacios Visibles ---
  updateNavigationTabsConfig(role, tabs) {
    if (!this.state.navigationTabsConfig) {
      this.state.navigationTabsConfig = JSON.parse(JSON.stringify(initialData.navigationTabsConfig));
    }
    this.state.navigationTabsConfig[role] = tabs;
    this.saveState();
  }

  toggleNavigationTab(role, tabId, isEnabled) {
    if (!this.state.navigationTabsConfig) {
      this.state.navigationTabsConfig = JSON.parse(JSON.stringify(initialData.navigationTabsConfig));
    }
    if (this.state.navigationTabsConfig[role]) {
      const tab = this.state.navigationTabsConfig[role].find(t => t.id === tabId);
      if (tab) {
        tab.enabled = isEnabled;
        this.saveState();
        return true;
      }
    }
    return false;
  }

  renameNavigationTab(role, tabId, newLabel, newBadge = "") {
    if (!this.state.navigationTabsConfig) {
      this.state.navigationTabsConfig = JSON.parse(JSON.stringify(initialData.navigationTabsConfig));
    }
    if (this.state.navigationTabsConfig[role]) {
      const tab = this.state.navigationTabsConfig[role].find(t => t.id === tabId);
      if (tab) {
        tab.label = newLabel;
        tab.badge = newBadge;
        this.saveState();
        return true;
      }
    }
    return false;
  }

  resetNavigationTabsToDefault(role = null) {
    if (role && initialData.navigationTabsConfig[role]) {
      this.state.navigationTabsConfig[role] = JSON.parse(JSON.stringify(initialData.navigationTabsConfig[role]));
    } else {
      this.state.navigationTabsConfig = JSON.parse(JSON.stringify(initialData.navigationTabsConfig));
    }
    this.saveState();
  }

  createEnrollment(data) {
    const studentCode = data.studentCode || `EST-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newEnrollment = {
      id: data.id || `MATR-2026-${Math.floor(100 + Math.random() * 900)}`,
      studentCode: studentCode,
      studentName: data.studentName,
      dni: data.dni || "Pendiente",
      siagieCode: data.siagieCode || `2026-${data.dni || Math.floor(10000000 + Math.random() * 90000000)}`,
      birthDate: data.birthDate || "14/05/2010",
      gender: data.gender || "Femenino",
      address: data.address || "San Juan de Lurigancho",
      district: data.district || "San Juan de Lurigancho",
      bloodType: data.bloodType || "O+",
      insurance: data.insurance || "EsSalud / SIS",
      allergies: data.allergies || "Sin alergias conocidas",
      medicalCondition: data.medicalCondition || "Ninguna (Apto para actividades escolares)",
      emergencyContact: data.emergencyContact || data.guardian || "Apoderado",
      emergencyPhone: data.emergencyPhone || data.guardianPhone || "987-654-321",
      level: data.level || "Secundaria",
      grade: data.grade || "4° de Secundaria",
      gradeId: data.gradeId || "4sec",
      guardian: data.guardian || "Apoderado Titular",
      guardianDni: data.guardianDni || "41982301",
      guardianPhone: data.guardianPhone || "987-654-321",
      guardianEmail: data.guardianEmail || `${data.studentName.toLowerCase().replace(/\s+/g, '.')}@gmail.com`,
      enrollmentDate: data.enrollmentDate || new Date().toLocaleDateString("es-PE"),
      feeStatus: data.feeStatus || "Pagado (S/ 520.00)",
      status: data.status || "Matriculado (FUM Completa)",
      certificateNo: `CONST-MAT-2026-${Math.floor(100 + Math.random() * 900)}`,
      documents: data.documents || {
        dniStudent: true,
        dniParent: true,
        birthCertificate: true,
        siagieFUM: true,
        reportCard: true,
        vaccinationCard: true
      }
    };

    if (!this.state.enrollments) this.state.enrollments = JSON.parse(JSON.stringify(initialData.enrollments || []));
    this.state.enrollments.unshift(newEnrollment);

    this.createSystemUser({
      code: studentCode,
      name: data.studentName,
      email: `${data.studentName.toLowerCase().replace(/\s+/g, '.')}@eleducador.edu.pe`,
      role: "Estudiante",
      detail: data.grade,
      password: "estudiante2026",
      dni: data.dni,
      guardian: data.guardian,
      hasAdminPrivilege: false
    });

    this.saveState();
    this.notify();
    return newEnrollment;
  }

  updateEnrollmentFUM(enrollmentId, fumData) {
    if (!this.state.enrollments) this.state.enrollments = JSON.parse(JSON.stringify(initialData.enrollments || []));
    const enrollment = this.state.enrollments.find(e => e.id === enrollmentId || e.studentCode === enrollmentId);
    if (enrollment) {
      Object.assign(enrollment, fumData);
      this.saveState();
      this.notify();
      return enrollment;
    }
    return null;
  }

  updateScheduleSlot(gradeId, rowIndex, dayKey, slotData) {
    const targetGrade = gradeId || this.state.selectedScheduleGrade || "4sec-a";
    if (!this.state.schedules[targetGrade]) {
      this.state.schedules[targetGrade] = this.getEmptyScheduleTemplate();
    }

    if (this.state.schedules[targetGrade][rowIndex]) {
      this.state.schedules[targetGrade][rowIndex][dayKey] = {
        course: slotData.course,
        teacher: slotData.teacher,
        room: slotData.room || "Aula Principal",
        type: slotData.type || "theory",
        color: slotData.color || "navy"
      };
      this.saveState();
      return true;
    }
    return false;
  }

  deleteScheduleSlot(gradeId, rowIndex, dayKey) {
    const targetGrade = gradeId || this.state.selectedScheduleGrade || "4sec-a";
    if (this.state.schedules[targetGrade] && this.state.schedules[targetGrade][rowIndex]) {
      this.state.schedules[targetGrade][rowIndex][dayKey] = null;
      this.saveState();
      return true;
    }
    return false;
  }

  getEmptyScheduleTemplate() {
    return [
      { time: "08:00 - 08:50", mon: null, tue: null, wed: null, thu: null, fri: null },
      { time: "08:50 - 09:40", mon: null, tue: null, wed: null, thu: null, fri: null },
      { time: "09:40 - 10:30", mon: null, tue: null, wed: null, thu: null, fri: null },
      { time: "10:30 - 10:50", isBreak: true, title: "Receso Matutino" },
      { time: "10:50 - 11:40", mon: null, tue: null, wed: null, thu: null, fri: null },
      { time: "11:40 - 12:30", mon: null, tue: null, wed: null, thu: null, fri: null },
      { time: "12:30 - 01:20", mon: null, tue: null, wed: null, thu: null, fri: null },
      { time: "01:20 - 01:50", isBreak: true, isLunch: true, title: "Almuerzo Escolar" },
      { time: "01:50 - 02:40", mon: null, tue: null, wed: null, thu: null, fri: null },
      { time: "02:40 - 03:30", mon: null, tue: null, wed: null, thu: null, fri: null }
    ];
  }

  setFullGradeSchedule(gradeId, scheduleArray) {
    this.state.schedules[gradeId] = scheduleArray;
    this.saveState();
    return true;
  }

  cloneSchedule(sourceGradeId, targetGradeId) {
    const src = this.state.schedules[sourceGradeId] || this.state.schedules["4sec-a"];
    if (src) {
      this.state.schedules[targetGradeId] = JSON.parse(JSON.stringify(src));
      this.saveState();
      return true;
    }
    return false;
  }

  clearGradeSchedule(gradeId) {
    this.state.schedules[gradeId] = this.getEmptyScheduleTemplate();
    this.saveState();
    return true;
  }

  setTeacherScheduleTab(tab) {
    this.state.teacherScheduleTab = tab;
    this.saveState();
  }

  setSelectedTeacher(teacherId) {
    this.state.selectedTeacherId = teacherId;
    this.saveState();
  }

  setSelectedTeacherCourseFilter(course) {
    this.state.selectedTeacherCourseFilter = course;
    this.saveState();
  }

  // =========================================================================
  // GESTIÓN DE ESTRUCTURA DE GRADOS Y SECCIONES (ADMINISTRADOR)
  // =========================================================================
  toggleAcademicSections(hasSections) {
    if (!this.state.academicConfig) {
      this.state.academicConfig = { hasSections: false, defaultSectionLabel: "Única" };
    }
    this.state.academicConfig.hasSections = !!hasSections;
    this.saveState();
  }

  addGrade(gradeData) {
    if (!this.state.gradesCatalog) {
      this.state.gradesCatalog = [...initialData.gradesCatalog];
    }
    const newGrade = {
      id: gradeData.id || `grd-${Date.now().toString().slice(-4)}`,
      label: gradeData.label || "Nuevo Grado",
      level: gradeData.level || "Secundaria",
      section: gradeData.section || "",
      classroom: gradeData.classroom || "Pabellón A - Aula 101",
      tutor: gradeData.tutor || "Por Asignar"
    };
    this.state.gradesCatalog.push(newGrade);
    this.saveState();
    return newGrade;
  }

  updateGrade(gradeId, updatedData) {
    if (!this.state.gradesCatalog) {
      this.state.gradesCatalog = [...initialData.gradesCatalog];
    }
    const index = this.state.gradesCatalog.findIndex(g => g.id === gradeId);
    if (index !== -1) {
      this.state.gradesCatalog[index] = { ...this.state.gradesCatalog[index], ...updatedData };
      this.saveState();
      return true;
    }
    return false;
  }

  deleteGrade(gradeId) {
    if (!this.state.gradesCatalog) {
      this.state.gradesCatalog = [...initialData.gradesCatalog];
    }
    this.state.gradesCatalog = this.state.gradesCatalog.filter(g => g.id !== gradeId);
    this.saveState();
  }

  updateSyllabus(syllabusId, updatedData) {
    const index = this.state.syllabi.findIndex(s => s.id === syllabusId);
    if (index !== -1) {
      this.state.syllabi[index] = { ...this.state.syllabi[index], ...updatedData };
      this.saveState();
      return true;
    }
    return false;
  }

  createSyllabus(newSyllabusData) {
    const newSyllabus = {
      id: `SIL-${Date.now().toString().slice(-4)}`,
      gradeId: newSyllabusData.gradeId || "4sec-a",
      gradeName: newSyllabusData.gradeName || "4to de Secundaria",
      courseName: newSyllabusData.courseName || "Nuevo Curso",
      courseCode: newSyllabusData.courseCode || "CUR-001",
      teacher: newSyllabusData.teacher || "Docente Asignado",
      hoursWeekly: newSyllabusData.hoursWeekly || "4 horas semanales",
      bimester: newSyllabusData.bimester || "III Bimestre 2026",
      competencies: newSyllabusData.competencies || ["Competencia formativa"],
      units: newSyllabusData.units || [
        { unitNumber: "Unidad I", title: "Fundamentos Clave", duration: "4 semanas", topics: ["Introducción al curso"], evaluation: "Evaluación continua" }
      ],
      bibliography: newSyllabusData.bibliography || "Textos oficiales Colegio El Educador."
    };
    this.state.syllabi.push(newSyllabus);
    this.saveState();
    return newSyllabus;
  }

  deleteSyllabus(syllabusId) {
    this.state.syllabi = this.state.syllabi.filter(s => s.id !== syllabusId);
    this.saveState();
  }

  updateNotebookReview(reviewId, updatedData) {
    const index = this.state.notebookReviews.findIndex(r => r.id === reviewId);
    if (index !== -1) {
      this.state.notebookReviews[index] = {
        ...this.state.notebookReviews[index],
        ...updatedData,
        status: updatedData.score >= 19 ? "Excelente" : updatedData.score >= 15 ? "Al Día" : updatedData.score >= 12 ? "Incompleto" : "Firma Requerida",
        stampType: updatedData.score >= 19 ? "stamp-gold" : updatedData.score >= 15 ? "stamp-blue" : "stamp-red",
        stampText: updatedData.score >= 19 ? "LOGRO DESTACADO ★" : updatedData.score >= 15 ? "REVISADO ✓" : "FALTA COMPLETAR ⚠"
      };
      this.saveState();
      return true;
    }
    return false;
  }

  deleteNotebookReview(reviewId) {
    this.state.notebookReviews = this.state.notebookReviews.filter(r => r.id !== reviewId);
    this.saveState();
  }

  updateCourse(courseId, courseData) {
    const index = this.state.courses.findIndex(c => c.id === courseId);
    if (index !== -1) {
      const b1 = parseFloat(courseData.b1) || 0;
      const b2 = parseFloat(courseData.b2) || 0;
      const b3 = parseFloat(courseData.b3) || 0;
      const b4 = parseFloat(courseData.b4) || 0;
      const validCount = [b1, b2, b3, b4].filter(g => g > 0).length || 1;
      const finalGrade = (b1 + b2 + b3 + b4) / validCount;

      this.state.courses[index] = {
        ...this.state.courses[index],
        name: courseData.name || this.state.courses[index].name,
        teacher: courseData.teacher || this.state.courses[index].teacher,
        b1, b2, b3, b4,
        finalGrade: parseFloat(finalGrade.toFixed(1)),
        status: finalGrade >= 13 ? "Aprobado" : "Desaprobado"
      };
      this.saveState();
      return true;
    }
    return false;
  }

  updateAnnouncement(annId, updatedData) {
    const index = this.state.announcements.findIndex(a => a.id === annId);
    if (index !== -1) {
      this.state.announcements[index] = {
        ...this.state.announcements[index],
        title: updatedData.title,
        category: updatedData.category,
        priority: updatedData.priority,
        tagLabel: updatedData.priority === "high" ? "Urgente" : updatedData.priority === "urgent" ? "Destacado" : "Aviso",
        content: updatedData.content
      };
      this.saveState();
      return true;
    }
    return false;
  }

  deleteAnnouncement(annId) {
    this.state.announcements = this.state.announcements.filter(a => a.id !== annId);
    this.saveState();
  }

  getNotebookSubjectsCatalog(gradeId = "4sec") {
    return [
      { id: "MAT", name: "Matemática Avanzada (Álgebra / Geometría)", teacher: "Prof. Roberto Silva", area: "Matemática" },
      { id: "COM", name: "Comunicación & Literatura", teacher: "Miss María Daysi Reyes Milla", area: "Comunicación" },
      { id: "CTA", name: "Ciencia y Tecnología (Física / Química)", teacher: "Miss Leyli Graciela Reyes Cerquen", area: "Ciencias" },
      { id: "SOC", name: "Ciencias Sociales & Historia", teacher: "Prof. Javier Vega", area: "Sociales" },
      { id: "ING", name: "Inglés Institucional (B2/C1)", teacher: "Miss Andrea Ramos", area: "Idiomas" },
      { id: "EPT", name: "EPT (Computación & Robótica)", teacher: "Prof. Fernando Rojas", area: "Tecnología" },
      { id: "DPCC", name: "Desarrollo Personal, Ciudadanía y Cívica", teacher: "Miss Julisa Magali Arroyo Araujo", area: "Personal" },
      { id: "ARTE", name: "Arte y Cultura", teacher: "Miss Claudia Mendoza", area: "Arte" }
    ];
  }

  getStudentBoletaCoursesCatalog(gradeId = "4sec") {
    return [
      { id: "ARIT", name: "Aritmética", teacher: "Prof. Roberto Silva", area: "Matemática", icon: "[Formato]" },
      { id: "ALG", name: "Álgebra", teacher: "Prof. Roberto Silva", area: "Matemática", icon: "[Formato]" },
      { id: "GEOM", name: "Geometría", teacher: "Prof. Roberto Silva", area: "Matemática", icon: "[Formato]" },
      { id: "TRIG", name: "Trigonometría", teacher: "Prof. Roberto Silva", area: "Matemática", icon: "[Formato]" },
      { id: "RM", name: "Razonamiento Matemático", teacher: "Prof. Roberto Silva", area: "Matemática", icon: "[Formato]" },
      { id: "LENG", name: "Lenguaje y Gramática", teacher: "Miss María Daysi Reyes Milla", area: "Comunicación", icon: "[Cuaderno]" },
      { id: "LIT", name: "Literatura Universal", teacher: "Miss María Daysi Reyes Milla", area: "Comunicación", icon: "[Cuaderno]" },
      { id: "RV", name: "Razonamiento Verbal", teacher: "Miss María Daysi Reyes Milla", area: "Comunicación", icon: "[Cuaderno]" },
      { id: "BIO", name: "Biología & Anatomía", teacher: "Miss Leyli Graciela Reyes Cerquen", area: "Ciencia y Tecnología", icon: "🔬" },
      { id: "FIS", name: "Física Elemental", teacher: "Miss Leyli Graciela Reyes Cerquen", area: "Ciencia y Tecnología", icon: "🔬" },
      { id: "QUIM", name: "Química Inorgánica", teacher: "Miss Leyli Graciela Reyes Cerquen", area: "Ciencia y Tecnología", icon: "🔬" },
      { id: "HP", name: "Historia del Perú", teacher: "Prof. Javier Vega", area: "Ciencias Sociales", icon: "🌎" },
      { id: "HU", name: "Historia Universal", teacher: "Prof. Javier Vega", area: "Ciencias Sociales", icon: "🌎" },
      { id: "GEO", name: "Geografía & Economía", teacher: "Prof. Javier Vega", area: "Ciencias Sociales", icon: "🌎" },
      { id: "CIV", name: "Educación Cívica & DPCC", teacher: "Miss Julisa Magali Arroyo Araujo", area: "Personal Social", icon: "⚖️" },
      { id: "PSIC", name: "Psicología & Filosofía", teacher: "Prof. Manuel Soto", area: "Personal Social", icon: "🧠" },
      { id: "COMP", name: "Computación & Robótica", teacher: "Prof. Fernando Rojas", area: "EPT", icon: "💻" },
      { id: "GEST", name: "Gestión Empresarial & Emprendimiento", teacher: "Prof. Fernando Rojas", area: "EPT", icon: "[Reporte]" },
      { id: "ING", name: "Inglés Institucional (B2/C1)", teacher: "Miss Andrea Ramos", area: "Idiomas", icon: "🇬🇧" },
      { id: "ARTE", name: "Arte y Cultura", teacher: "Miss Claudia Mendoza", area: "Arte", icon: "🎨" },
      { id: "REL", name: "Educación Religiosa", teacher: "Prof. Manuel Soto", area: "Valores", icon: "🕊️" },
      { id: "EDFIS", name: "Educación Física & Deporte", teacher: "Prof. Dante Morales", area: "Deporte", icon: "⚽" }
    ];
  }

  getStudentAllBoletaStickersData(studentIdOrCode = "EST-2026-042") {
    const enrollments = this.getEnrollments();
    let student = enrollments.find(e => 
      e.studentCode === studentIdOrCode || 
      e.dni === studentIdOrCode || 
      e.id === studentIdOrCode || 
      (e.studentName && e.studentName.toLowerCase().includes(studentIdOrCode.toLowerCase()))
    );
    if (!student) {
      student = enrollments[0] || { studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", grade: "4° de Secundaria", gradeId: "4sec" };
    }

    const boletaCourses = this.getStudentBoletaCoursesCatalog(student.gradeId || "4sec");
    const stickers = [];

    boletaCourses.forEach(c => {
      const rawCode = `QR-NB-${student.studentCode || student.dni}-${c.id}`;
      const pipePayload = `QR-NB|${student.studentCode || student.dni}|${student.studentName}|${student.grade || '4° de Secundaria'}|${c.name}|${c.teacher}`;

      stickers.push({
        qrCode: rawCode,
        qrPayload: pipePayload,
        studentName: student.studentName,
        studentCode: student.studentCode || student.dni,
        grade: student.grade || "4° de Secundaria",
        gradeId: student.gradeId || "4sec",
        course: c.name,
        courseId: c.id,
        teacher: c.teacher,
        area: c.area,
        icon: c.icon
      });
    });

    return {
      student: student,
      coursesCount: stickers.length,
      stickers: stickers
    };
  }

  getNotebookStickersData(gradeId = "4sec", filterStudentId = "all") {
    const enrollments = this.getEnrollments().filter(e => !gradeId || e.gradeId === gradeId || gradeId === "all");
    const subjects = this.getNotebookSubjectsCatalog(gradeId);
    const stickers = [];

    const studentsToProcess = (filterStudentId && filterStudentId !== "all") 
      ? enrollments.filter(e => e.studentCode === filterStudentId || e.dni === filterStudentId || e.id === filterStudentId)
      : enrollments;

    studentsToProcess.forEach(st => {
      subjects.forEach(sb => {
        // Código formateado estandarizado: QR-NB|CodigoAlumno|NombreAlumno|Grado|Curso|Docente
        const rawCode = `QR-NB-${st.studentCode || st.dni}-${sb.id}`;
        const pipePayload = `QR-NB|${st.studentCode || st.dni}|${st.studentName}|${st.grade || '4° de Secundaria'}|${sb.name}|${sb.teacher}`;

        stickers.push({
          qrCode: rawCode,
          qrPayload: pipePayload,
          studentName: st.studentName,
          studentCode: st.studentCode || st.dni,
          grade: st.grade || "4° de Secundaria",
          gradeId: st.gradeId || "4sec",
          course: sb.name,
          courseId: sb.id,
          teacher: sb.teacher,
          area: sb.area
        });
      });
    });

    return stickers;
  }

  findNotebookByQR(qrCode) {
    if (!qrCode) qrCode = "QR-NB-EST042-MAT";
    const cleanCode = qrCode.trim();

    // 1. Si el código QR utiliza el formato delimitado por pipes: QR-NB|CODIGO|ALUMNO|GRADO|CURSO|DOCENTE
    if (cleanCode.startsWith("QR-NB|") || cleanCode.includes("|")) {
      const parts = cleanCode.split("|");
      if (parts.length >= 5) {
        const stCode = parts[1] || "EST-2026-042";
        const stName = parts[2] || "Sofía Méndez Flores";
        const grd = parts[3] || "4° de Secundaria";
        const crs = parts[4] || "Matemática Avanzada";
        const tch = parts[5] || "Prof. Roberto Silva";

        return {
          qrCode: cleanCode,
          studentId: stCode,
          studentName: stName,
          grade: grd,
          course: crs,
          teacher: tch,
          lastReview: this.state.notebookReviews.find(r => r.studentName === stName && r.course === crs) || null
        };
      }
    }

    // 2. Si el código QR contiene un JSON estructurado
    if (cleanCode.startsWith("{") && cleanCode.endsWith("}")) {
      try {
        const parsed = JSON.parse(cleanCode);
        const stName = parsed.alumno || parsed.studentName || parsed.student || "Sofía Méndez Flores";
        const crs = parsed.curso || parsed.course || "Matemática Avanzada";
        const tch = parsed.profesor || parsed.teacher || "Prof. Roberto Silva";
        const grd = parsed.grado || parsed.grade || "4° de Secundaria";

        return {
          qrCode: cleanCode,
          studentId: parsed.codigo || parsed.studentId || "EST-2026-042",
          studentName: stName,
          grade: grd,
          course: crs,
          teacher: tch,
          lastReview: this.state.notebookReviews.find(r => r.studentName === stName && r.course === crs) || null
        };
      } catch (e) {}
    }

    // 3. Si coincide con una revisión previa registrada
    const matchedReview = this.state.notebookReviews.find(r => r.qrCode === cleanCode);
    if (matchedReview) {
      return {
        qrCode: matchedReview.qrCode,
        studentId: matchedReview.studentId,
        studentName: matchedReview.studentName,
        grade: matchedReview.grade,
        course: matchedReview.course,
        teacher: matchedReview.teacher || "Prof. Roberto Silva",
        lastReview: matchedReview
      };
    }

    // 4. Resolver por catálogo dinámico de alumnos, cursos y profesores
    const enrollments = this.getEnrollments();
    const subjects = this.getNotebookSubjectsCatalog();

    let matchedStudent = enrollments.find(e => 
      cleanCode.includes(e.studentCode) || 
      cleanCode.includes(e.dni) || 
      (e.studentName && cleanCode.toLowerCase().includes(e.studentName.toLowerCase().split(' ')[0]))
    );
    if (!matchedStudent) {
      matchedStudent = enrollments[0] || { studentCode: "EST-2026-042", studentName: "Sofía Méndez Flores", grade: "4° de Secundaria" };
    }

    let matchedSubject = subjects.find(s => cleanCode.includes(s.id) || cleanCode.toLowerCase().includes(s.name.toLowerCase().substring(0, 4)));
    if (!matchedSubject) {
      if (cleanCode.includes("COM")) matchedSubject = subjects[1];
      else if (cleanCode.includes("CTA") || cleanCode.includes("CIEN")) matchedSubject = subjects[2];
      else if (cleanCode.includes("SOC") || cleanCode.includes("HIS")) matchedSubject = subjects[3];
      else if (cleanCode.includes("ING")) matchedSubject = subjects[4];
      else if (cleanCode.includes("EPT") || cleanCode.includes("COMP")) matchedSubject = subjects[5];
      else if (cleanCode.includes("DPCC") || cleanCode.includes("CIV")) matchedSubject = subjects[6];
      else if (cleanCode.includes("ARTE")) matchedSubject = subjects[7];
      else matchedSubject = subjects[0];
    }

    return {
      qrCode: cleanCode,
      studentId: matchedStudent.studentCode || matchedStudent.id || "EST-2026-042",
      studentName: matchedStudent.studentName,
      grade: matchedStudent.grade || "4° de Secundaria",
      course: matchedSubject.name,
      teacher: matchedSubject.teacher,
      lastReview: this.state.notebookReviews.find(r => r.studentName === matchedStudent.studentName && r.course === matchedSubject.name) || null
    };
  }

  registerNotebookReview(data) {
    const currentUser = this.getCurrentUser();
    const currentRole = this.getCurrentRole();

    const scoreNum = parseFloat(data.score) || 18;
    const status = data.status || (scoreNum >= 15 ? "Al Día" : scoreNum >= 11 ? "Observado" : "No Presentó");
    const stampType = status === "Al Día" ? "stamp-al-dia" : status === "Observado" ? "stamp-observado" : "stamp-no-presento";
    const stampText = status === "Al Día" ? "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA" : status === "Observado" ? "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> OBSERVADO" : "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> NO PRESENTÓ";

    const newReview = {
      id: `REV-2026-${Math.floor(100 + Math.random() * 900)}`,
      qrCode: data.qrCode || `QR-CUAD-${data.studentId || 'EST042'}-${data.course || 'MAT'}`,
      studentId: data.studentId || "EST-2026-042",
      studentName: data.studentName || "Sofía Méndez Flores",
      grade: data.grade || "4° de Secundaria",
      course: data.course || "Matemática Avanzada",
      teacher: data.teacher || "Prof. Roberto Silva",
      evaluator: currentUser.name || (currentRole === "auxiliar" ? "Lic. Carlos Medina (Auxiliar)" : "Docente Responsable"),
      evaluatorRole: currentRole === "auxiliar" ? "Auxiliar de Educación" : currentRole === "docente" ? "Docente Titular" : "Coordinación",
      date: new Date().toLocaleDateString("es-PE"),
      time: new Date().toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" }),
      score: scoreNum,
      status: status,
      stampType: stampType,
      stampText: stampText,
      checklist: data.checklist || { margenes: true, fechas: true, teoriaCompleta: true, ejerciciosAlDia: true, pulcritud: true },
      teacherRemarks: data.teacherRemarks || (status === "Al Día" ? "Cuaderno completo y tareas al día." : "Presentar regularización en la siguiente sesión.")
    };

    // Actualizar si ya existía una revisión previa para este alumno y curso en la misma fecha, o agregar nueva
    const existingIndex = this.state.notebookReviews.findIndex(r => r.studentName === newReview.studentName && r.course === newReview.course && r.date === newReview.date);
    if (existingIndex >= 0) {
      this.state.notebookReviews[existingIndex] = newReview;
    } else {
      this.state.notebookReviews.unshift(newReview);
    }

    if (this.state.users && this.state.users.auxiliar) {
      this.state.users.auxiliar.notebooksReviewedToday = (this.state.users.auxiliar.notebooksReviewedToday || 0) + 1;
    }
    if (this.state.users && this.state.users.docente) {
      this.state.users.docente.scannedNotebooksToday = (this.state.users.docente.scannedNotebooksToday || 0) + 1;
    }

    this.saveState();
    return newReview;
  }

  isAccessLockedForCurrentUser() {
    return false;
  }

  payAndUnlockIntranet(paymentId, method = "Tarjeta", details = {}) {
    const payment = this.state.payments.find(p => p.id === paymentId) || this.state.payments[0];
    const amountPaid = payment ? payment.amount : 480.00;
    const receiptCode = `REC-2026-AUG-${Math.floor(1000 + Math.random() * 9000)}`;

    if (payment) {
      payment.status = "paid";
      payment.paidDate = new Date().toLocaleDateString("es-PE");
      payment.receiptNo = receiptCode;
      payment.paymentMethod = method;
    }

    // Desbloquear al estudiante y padre
    if (this.state.users.estudiante) {
      this.state.users.estudiante.isAccessLocked = false;
      this.state.users.estudiante.paymentsUpToDate = true;
      this.state.users.estudiante.pensionStatus = "Al Día";
      this.state.users.estudiante.pendingDebtAmount = 0.00;
    }

    if (this.state.users.padre) {
      this.state.users.padre.isAccessLocked = false;
      this.state.users.padre.pensionStatus = "Al Día";
      this.state.users.padre.pendingDebtAmount = 0.00;
    }

    // Actualizar registro financiero de familias
    if (this.state.familiesFinancial) {
      const fam = this.state.familiesFinancial.find(f => f.familyId === "FAM-2026-108");
      if (fam) {
        fam.isAccessLocked = false;
        fam.pensionStatus = "al_dia";
        fam.pendingAmount = 0.00;
        fam.lastPaymentDate = new Date().toLocaleDateString("es-PE");
        fam.receiptNo = receiptCode;
      }
    }

    // Sumar a la recaudación oficial institucional
    if (this.state.institution && this.state.institution.economicReport) {
      this.state.institution.economicReport.collectedAmount += amountPaid;
    }
    if (this.state.users.admin) {
      this.state.users.admin.totalIncome = (this.state.users.admin.totalIncome || 25130.00) + amountPaid;
    }

    this.saveState();
    return {
      success: true,
      receiptNo: receiptCode,
      amount: amountPaid,
      method: method,
      date: new Date().toLocaleDateString("es-PE")
    };
  }

  toggleFamilyAccessLock(familyId) {
    if (!this.state.familiesFinancial) return null;
    const fam = this.state.familiesFinancial.find(f => f.familyId === familyId);
    if (fam) {
      fam.isAccessLocked = !fam.isAccessLocked;
      fam.pensionStatus = fam.isAccessLocked ? "bloqueado_deuda" : "al_dia";

      if (familyId === "FAM-2026-108") {
        this.state.users.padre.isAccessLocked = fam.isAccessLocked;
        this.state.users.padre.pensionStatus = fam.isAccessLocked ? "Bloqueado por Mora" : "Al Día";
        this.state.users.estudiante.isAccessLocked = fam.isAccessLocked;
        this.state.users.estudiante.paymentsUpToDate = !fam.isAccessLocked;
        this.state.users.estudiante.pensionStatus = fam.isAccessLocked ? "Bloqueado por Mora" : "Al Día";
      }

      this.saveState();
      return fam.isAccessLocked;
    }
    return null;
  }

  // =========================================================================
  // CONTROL DE ASISTENCIA BIOMÉTRICO Y DIARIO
  // =========================================================================
  getAttendanceRecords(filterGradeId = null, filterDate = null) {
    if (!this.state.attendanceRecords) {
      this.state.attendanceRecords = JSON.parse(JSON.stringify(initialData.attendanceRecords || []));
    }
    let list = this.state.attendanceRecords;
    if (filterGradeId && filterGradeId !== "all") {
      list = list.filter(r => r.gradeId === filterGradeId || (r.grade && r.grade.toLowerCase().includes(filterGradeId.toLowerCase())));
    }
    if (filterDate) {
      list = list.filter(r => r.date === filterDate);
    }
    return list;
  }

  updateStudentAttendanceStatus(recordId, newStatus, arrivalTime = null, observations = null) {
    if (!this.state.attendanceRecords) {
      this.state.attendanceRecords = JSON.parse(JSON.stringify(initialData.attendanceRecords || []));
    }
    const rec = this.state.attendanceRecords.find(r => r.id === recordId);
    if (rec) {
      rec.status = newStatus;
      if (arrivalTime !== null) rec.arrivalTime = arrivalTime;
      if (observations !== null) rec.observations = observations;
      if (newStatus === "Presente" && (!rec.arrivalTime || rec.arrivalTime === "--:--")) {
        rec.arrivalTime = "07:38 AM";
      }
      if (newStatus === "Tardanza" && (!rec.arrivalTime || rec.arrivalTime === "--:--")) {
        rec.arrivalTime = "07:55 AM";
      }
      if (newStatus === "Falta") {
        rec.arrivalTime = "--:--";
      }
      this.saveState();
      return rec;
    }
    return null;
  }

  markAllStudentsPresent(gradeId = "4sec", date = "19/08/2026") {
    if (!this.state.attendanceRecords) {
      this.state.attendanceRecords = JSON.parse(JSON.stringify(initialData.attendanceRecords || []));
    }
    this.state.attendanceRecords.forEach(r => {
      if ((r.gradeId === gradeId || (r.grade && r.grade.includes(gradeId))) && r.date === date) {
        r.status = "Presente";
        r.arrivalTime = (!r.arrivalTime || r.arrivalTime === "--:--") ? "07:40 AM" : r.arrivalTime;
        r.observations = "Puntual (Marcación Masiva Aula)";
      }
    });
    this.saveState();
  }

  submitAttendanceJustification(studentId, date, reason, attachment = "Constancia_Medica.pdf") {
    if (!this.state.attendanceRecords) {
      this.state.attendanceRecords = JSON.parse(JSON.stringify(initialData.attendanceRecords || []));
    }
    let rec = this.state.attendanceRecords.find(r => (r.studentId === studentId || r.studentCode === studentId) && r.date === date);
    if (!rec) {
      rec = {
        id: `ATT-${Date.now().toString().slice(-4)}`,
        studentId: studentId,
        studentCode: studentId,
        studentName: "Sofía Méndez Flores",
        gradeId: "4sec",
        grade: "4° de Secundaria",
        date: date,
        day: "Miércoles",
        status: "Justificada",
        arrivalTime: "--:--",
        exitTime: "--:--",
        method: "Justificación de Apoderado",
        observations: `Justificación: ${reason}`
      };
      this.state.attendanceRecords.unshift(rec);
    } else {
      rec.status = "Justificada";
      rec.observations = `Justificación aprobada: ${reason}`;
    }
    this.saveState();
    return rec;
  }

  // =========================================================================
  // ESCÁNER QR EN PUERTA & INFORME DIARIO DE TARDANZAS / INASISTENCIAS
  // =========================================================================
  registerStudentQRDoorScan(qrCodeOrDni, customTime = null) {
    if (!this.state.attendanceRecords) {
      this.state.attendanceRecords = JSON.parse(JSON.stringify(initialData.attendanceRecords || []));
    }
    const enrollments = this.getEnrollments();
    const cleanQuery = (qrCodeOrDni || "").trim().toLowerCase();

    // Buscar estudiante por código, DNI, SIAGIE o nombre
    const matchedEnrollment = enrollments.find(e => 
      (e.studentCode && e.studentCode.toLowerCase() === cleanQuery) ||
      (e.dni && e.dni === cleanQuery) ||
      (e.siagieCode && e.siagieCode.toLowerCase() === cleanQuery) ||
      (cleanQuery.includes(e.studentCode ? e.studentCode.toLowerCase() : 'xxx')) ||
      (e.studentName && e.studentName.toLowerCase().includes(cleanQuery))
    ) || enrollments[0];

    const todayDate = "19/08/2026";
    let scanTime = customTime;
    if (!scanTime) {
      const now = new Date();
      const h = now.getHours();
      const m = String(now.getMinutes()).padStart(2, '0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      const formattedH = String(h % 12 || 12).padStart(2, '0');
      scanTime = `${formattedH}:${m} ${ampm}`;
    }

    // Regla Institucional Estricta:
    // 07:00 a 07:45 AM -> Presente (Puntual)
    // 07:46 a 08:30 AM -> Tardanza (+X min de demora)
    // 08:31 AM en adelante -> Inasistencia / Falta (Puerta cerrada a las 08:30 AM)
    let isLate = false;
    let isDoorClosed = false;
    let delayMinutes = 0;
    let status = "Presente";
    let observations = "Ingreso puntual en puerta principal";

    if (scanTime.includes("07:") || scanTime.includes("08:") || scanTime.includes("09:") || scanTime.includes("10:")) {
      const parts = scanTime.split(":");
      const hour = parseInt(parts[0], 10);
      const min = parseInt(parts[1].split(" ")[0], 10);
      const ampm = scanTime.includes("PM") ? "PM" : "AM";

      if (ampm === "AM") {
        if (hour === 7 && min <= 45) {
          status = "Presente";
          observations = "Ingreso puntual en puerta principal";
        } else if ((hour === 7 && min > 45) || (hour === 8 && min <= 30)) {
          isLate = true;
          status = "Tardanza";
          delayMinutes = (hour === 7) ? (min - 45) : (15 + min);
          observations = `Tardanza en portería (+${delayMinutes} min de retraso)`;
        } else if (hour >= 8 && min > 30) {
          isDoorClosed = true;
          status = "Falta";
          delayMinutes = (hour === 8) ? (15 + min) : (75 + min);
          observations = `Inasistencia (Puerta cerrada 08:30 AM - Ingreso Extemporáneo +${delayMinutes} min)`;
        }
      }
    }

    let existingRecord = this.state.attendanceRecords.find(r => 
      (r.studentId === matchedEnrollment.studentCode || r.studentCode === matchedEnrollment.studentCode || r.dni === matchedEnrollment.dni) &&
      r.date === todayDate
    );

    if (existingRecord) {
      existingRecord.status = status;
      existingRecord.arrivalTime = scanTime;
      existingRecord.method = "Fotocheck QR (Portería Principal)";
      existingRecord.observations = observations;
    } else {
      existingRecord = {
        id: `ATT-${Date.now().toString().slice(-4)}`,
        studentId: matchedEnrollment.studentCode,
        studentCode: matchedEnrollment.studentCode,
        studentName: matchedEnrollment.studentName,
        dni: matchedEnrollment.dni,
        gradeId: matchedEnrollment.gradeId || "4sec",
        grade: matchedEnrollment.grade,
        date: todayDate,
        day: "Miércoles",
        status: status,
        arrivalTime: scanTime,
        exitTime: "03:30 PM",
        method: "Fotocheck QR (Portería Principal)",
        observations: observations
      };
      this.state.attendanceRecords.unshift(existingRecord);
    }

    this.saveState();

    return {
      record: existingRecord,
      student: matchedEnrollment,
      status: status,
      scanTime: scanTime,
      isLate: isLate,
      isDoorClosed: isDoorClosed,
      delayMinutes: delayMinutes,
      guardianName: matchedEnrollment.guardian || "Apoderado Registrado",
      guardianPhone: matchedEnrollment.guardianPhone || "984-123-456",
      guardianEmail: matchedEnrollment.guardianEmail || ""
    };
  }

  // Escáner Inteligente Contextual: Asistencia vs. Informe de Incidencias
  handleSmartQRScan(qrCodeOrDni, customTime = null) {
    if (!this.state.attendanceRecords) {
      this.state.attendanceRecords = JSON.parse(JSON.stringify(initialData.attendanceRecords || []));
    }
    const enrollments = this.getEnrollments();
    const cleanQuery = (qrCodeOrDni || "").trim().toLowerCase();

    const matchedEnrollment = enrollments.find(e => 
      (e.studentCode && e.studentCode.toLowerCase() === cleanQuery) ||
      (e.dni && e.dni === cleanQuery) ||
      (e.siagieCode && e.siagieCode.toLowerCase() === cleanQuery) ||
      (cleanQuery.includes(e.studentCode ? e.studentCode.toLowerCase() : 'xxx')) ||
      (e.studentName && e.studentName.toLowerCase().includes(cleanQuery))
    ) || enrollments[0];

    const todayDate = "19/08/2026";
    const existingRecord = this.state.attendanceRecords.find(r => 
      (r.studentId === matchedEnrollment.studentCode || r.studentCode === matchedEnrollment.studentCode || r.dni === matchedEnrollment.dni) &&
      r.date === todayDate &&
      (r.status === "Presente" || r.status === "Tardanza")
    );

    // Si el estudiante YA tiene registrado su ingreso el día de hoy -> Modo Incidencias / Acciones Rápidas
    if (existingRecord) {
      const studentIncidents = this.getStudentIncidents(matchedEnrollment.studentCode);
      return {
        isAlreadyEntered: true,
        student: matchedEnrollment,
        record: existingRecord,
        previousScanTime: existingRecord.arrivalTime,
        incidentsCount: studentIncidents.length,
        qrCode: matchedEnrollment.studentCode
      };
    }

    // Si es el PRIMER escaneo del día -> Registrar Asistencia en Puerta
    const attendanceResult = this.registerStudentQRDoorScan(qrCodeOrDni, customTime);
    return {
      isAlreadyEntered: false,
      ...attendanceResult
    };
  }

  getDailyAttendanceReport(date = "19/08/2026") {
    if (!this.state.attendanceRecords) {
      this.state.attendanceRecords = JSON.parse(JSON.stringify(initialData.attendanceRecords || []));
    }
    const enrollments = this.getEnrollments();
    const dayRecords = this.state.attendanceRecords.filter(r => r.date === date);

    // Mapear cada estudiante matriculado con su marcación del día
    // Regla: Quien no marcó hasta las 08:30 AM es Inasistencia / Falta
    const fullList = enrollments.map(enr => {
      const rec = dayRecords.find(r => r.studentCode === enr.studentCode || r.studentId === enr.studentCode || r.dni === enr.dni);
      return {
        studentCode: enr.studentCode,
        studentName: enr.studentName,
        dni: enr.dni,
        grade: enr.grade,
        gradeId: enr.gradeId || "4sec",
        level: enr.level,
        guardian: enr.guardian,
        guardianPhone: enr.guardianPhone,
        status: rec ? rec.status : "Falta",
        arrivalTime: rec ? rec.arrivalTime : "--:--",
        method: rec ? rec.method : "No Registrado en Portería",
        observations: rec ? rec.observations : "Inasistencia (Puerta cerrada 08:30 AM sin registro)",
        delayMinutes: rec && rec.status === "Tardanza" ? (rec.observations.match(/\d+/) ? rec.observations.match(/\d+/)[0] : "7") : 0
      };
    });

    const presentList = fullList.filter(s => s.status === "Presente");
    const tardinessList = fullList.filter(s => s.status === "Tardanza");
    const absenceList = fullList.filter(s => s.status === "Falta");
    const justifiedList = fullList.filter(s => s.status === "Justificada");

    return {
      date: date,
      cutoffTime: "08:30 AM",
      totalEnrolled: fullList.length,
      presentList,
      tardinessList,
      absenceList,
      justifiedList,
      attendanceRate: fullList.length > 0 ? Math.round(((presentList.length + tardinessList.length) / fullList.length) * 100) : 100
    };
  }

  // =========================================================================
  // GESTIÓN DEL LIBRO DE INCIDENCIAS & CONVIVENCIA ESCOLAR (MINEDU)
  // =========================================================================
  createBehaviorIncident(incidentData) {
    if (!this.state.behaviorIncidents) {
      this.state.behaviorIncidents = JSON.parse(JSON.stringify(initialData.behaviorIncidents || []));
    }
    const enrollments = this.getEnrollments();
    const st = enrollments.find(e => e.studentCode === incidentData.studentCode || e.id === incidentData.studentCode || e.dni === incidentData.studentCode) || {
      studentCode: incidentData.studentCode || "EST-2026-055",
      studentName: incidentData.studentName || "Gael Alessandro Cáceres Ramos",
      dni: incidentData.dni || "76541298",
      grade: incidentData.grade || "4° de Secundaria",
      gradeId: incidentData.gradeId || "4sec",
      level: incidentData.level || "Secundaria",
      guardian: incidentData.guardian || "Sr. Juan Carlos Cáceres",
      guardianPhone: incidentData.guardianPhone || "984-777-888"
    };

    const newIncident = {
      id: `INC-2026-${Math.floor(100 + Math.random() * 900)}`,
      studentCode: st.studentCode,
      studentName: st.studentName,
      dni: st.dni,
      grade: st.grade,
      gradeId: st.gradeId || "4sec",
      level: st.level || "Secundaria",
      date: incidentData.date || new Date().toLocaleDateString("es-PE"),
      time: incidentData.time || new Date().toLocaleTimeString("es-PE", { hour: '2-digit', minute: '2-digit' }),
      reportedBy: incidentData.reportedBy || (this.getCurrentUser() ? this.getCurrentUser().name : "Prof. Alex Lino"),
      severity: incidentData.severity || "Leve",
      category: incidentData.category || "Conducta en Aula",
      location: incidentData.location || "Aula 304",
      description: incidentData.description || "Sin descripción",
      correctiveMeasure: incidentData.correctiveMeasure || "Diálogo reflexivo y compromiso formativo.",
      guardian: st.guardian,
      guardianPhone: st.guardianPhone,
      parentMeetingRequired: !!incidentData.parentMeetingRequired,
      status: incidentData.status || "Registrado",
      qrCodeUsed: st.studentCode
    };

    this.state.behaviorIncidents.unshift(newIncident);
    this.saveState();
    return newIncident;
  }

  getStudentIncidents(studentCode) {
    if (!this.state.behaviorIncidents) {
      this.state.behaviorIncidents = JSON.parse(JSON.stringify(initialData.behaviorIncidents || []));
    }
    const clean = (studentCode || "").trim().toLowerCase();
    return this.state.behaviorIncidents.filter(inc => 
      (inc.studentCode && inc.studentCode.toLowerCase() === clean) ||
      (inc.dni && inc.dni === clean) ||
      (inc.studentName && inc.studentName.toLowerCase().includes(clean))
    );
  }

  getAllIncidents(filterGrade = "all", filterSeverity = "all", filterSearch = "") {
    if (!this.state.behaviorIncidents) {
      this.state.behaviorIncidents = JSON.parse(JSON.stringify(initialData.behaviorIncidents || []));
    }
    let list = this.state.behaviorIncidents;
    if (filterGrade && filterGrade !== "all") {
      list = list.filter(i => i.gradeId === filterGrade || (i.grade && i.grade.includes(filterGrade)));
    }
    if (filterSeverity && filterSeverity !== "all") {
      list = list.filter(i => i.severity === filterSeverity);
    }
    if (filterSearch && filterSearch.trim()) {
      const q = filterSearch.trim().toLowerCase();
      list = list.filter(i => 
        (i.studentName && i.studentName.toLowerCase().includes(q)) ||
        (i.studentCode && i.studentCode.toLowerCase().includes(q)) ||
        (i.category && i.category.toLowerCase().includes(q)) ||
        (i.description && i.description.toLowerCase().includes(q))
      );
    }
    return list;
  }

  deleteBehaviorIncident(incidentId) {
    if (!this.state.behaviorIncidents) return false;
    this.state.behaviorIncidents = this.state.behaviorIncidents.filter(i => i.id !== incidentId);
    this.saveState();
    return true;
  }

  payPension(paymentId, method) {
    return this.payAndUnlockIntranet(paymentId, method).receiptNo;
  }

  addAnnouncement(title, category, content, priority) {
    const newAnn = {
      id: `ANN-${Math.floor(50 + Math.random() * 50)}`,
      title: title,
      category: category || "Institucional",
      priority: priority || "normal",
      tagLabel: priority === "high" ? "Urgente" : priority === "urgent" ? "Destacado" : "Aviso",
      date: new Date().toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" }),
      author: this.getCurrentUser().name,
      content: content
    };
    this.state.announcements.unshift(newAnn);
    this.saveState();
    return newAnn;
  }

  submitJustification(date, reason) {
    const record = this.state.attendance.find(a => a.date === date);
    if (record) {
      record.status = "Justificada";
      record.subject += ` (Justificación: ${reason})`;
    } else {
      this.state.attendance.unshift({
        date: date,
        day: "Día Registrado",
        status: "Justificada",
        arrival: "--",
        subject: `Justificado: ${reason}`
      });
    }
    this.saveState();
  }

  // =========================================================================
  // GESTIÓN DESCENTRALIZADA DE NOTAS Y BOLETAS OFICIALES
  // =========================================================================
  
  // Guardar notas de un curso específico para múltiples estudiantes
  saveSubjectGrades(subjectKey, studentsGradesMap) {
    if (!this.state.boletaData) {
      this.state.boletaData = JSON.parse(JSON.stringify(initialData.boletaData || {}));
    }
    
    // studentsGradesMap: { "mendez": { b1, b2, b3, b4 }, "benitez": { b1, b2, b3, b4 }, ... }
    for (const [studentKey, bims] of Object.entries(studentsGradesMap)) {
      if (!this.state.boletaData[studentKey]) {
        this.state.boletaData[studentKey] = { grades: {}, attendance: {}, appreciations: {}, parentCriteria: {} };
      }
      if (!this.state.boletaData[studentKey].grades) {
        this.state.boletaData[studentKey].grades = {};
      }
      this.state.boletaData[studentKey].grades[subjectKey] = {
        b1: bims.b1 !== undefined ? bims.b1 : (this.state.boletaData[studentKey].grades[subjectKey]?.b1 || ""),
        b2: bims.b2 !== undefined ? bims.b2 : (this.state.boletaData[studentKey].grades[subjectKey]?.b2 || ""),
        b3: bims.b3 !== undefined ? bims.b3 : (this.state.boletaData[studentKey].grades[subjectKey]?.b3 || ""),
        b4: bims.b4 !== undefined ? bims.b4 : (this.state.boletaData[studentKey].grades[subjectKey]?.b4 || "")
      };
    }

    this.saveState();
    return true;
  }

  // Guardar evaluación de tutoría (Apreciación, Asistencia y Criterios Padres)
  saveTutorEvaluation(studentKey, tutorData) {
    if (!this.state.boletaData) {
      this.state.boletaData = JSON.parse(JSON.stringify(initialData.boletaData || {}));
    }
    if (!this.state.boletaData[studentKey]) {
      this.state.boletaData[studentKey] = { grades: {}, attendance: {}, appreciations: {}, parentCriteria: {} };
    }

    if (tutorData.appreciations) {
      this.state.boletaData[studentKey].appreciations = {
        ...(this.state.boletaData[studentKey].appreciations || {}),
        ...tutorData.appreciations
      };
    }

    if (tutorData.attendance) {
      this.state.boletaData[studentKey].attendance = {
        ...(this.state.boletaData[studentKey].attendance || {}),
        ...tutorData.attendance
      };
    }

    if (tutorData.parentCriteria) {
      this.state.boletaData[studentKey].parentCriteria = {
        ...(this.state.boletaData[studentKey].parentCriteria || {}),
        ...tutorData.parentCriteria
      };
    }

    this.saveState();
    return true;
  }

  getBoletaData(studentKey) {
    const all = this.state.boletaData || initialData.boletaData || {};
    return all[studentKey] || all.mendez || null;
  }

  saveBoletaStudentData(studentKey, updatedData) {
    if (!this.state.boletaData) {
      this.state.boletaData = JSON.parse(JSON.stringify(initialData.boletaData || {}));
    }
    if (!this.state.boletaData[studentKey]) {
      this.state.boletaData[studentKey] = { grades: {}, attendance: {}, appreciations: {}, parentCriteria: {} };
    }
    
    if (updatedData.grades) {
      this.state.boletaData[studentKey].grades = {
        ...(this.state.boletaData[studentKey].grades || {}),
        ...updatedData.grades
      };
    }
    if (updatedData.appreciations) {
      this.state.boletaData[studentKey].appreciations = {
        ...(this.state.boletaData[studentKey].appreciations || {}),
        ...updatedData.appreciations
      };
    }
    if (updatedData.attendance) {
      this.state.boletaData[studentKey].attendance = {
        ...(this.state.boletaData[studentKey].attendance || {}),
        ...updatedData.attendance
      };
    }
    if (updatedData.parentCriteria) {
      this.state.boletaData[studentKey].parentCriteria = {
        ...(this.state.boletaData[studentKey].parentCriteria || {}),
        ...updatedData.parentCriteria
      };
    }
    
    this.saveState();
    return true;
  }

  // =========================================================================
  // MÓDULO DE AULA VIRTUAL Y EVALUACIONES DINÁMICAS (10 PREGUNTAS)
  // =========================================================================
  setSelectedVirtualCourse(courseId) {
    this.state.selectedVirtualCourseId = courseId;
    const materials = (this.state.weeklyMaterials || []).filter(m => m.courseId === courseId);
    if (materials.length > 0) {
      this.state.selectedVirtualWeekId = materials[0].id;
    }
    this.saveState();
    this.notify();
  }

  setSelectedVirtualWeek(weekId) {
    this.state.selectedVirtualWeekId = weekId;
    this.saveState();
    this.notify();
  }

  addWeeklyMaterial(materialData) {
    if (!this.state.weeklyMaterials) {
      this.state.weeklyMaterials = [];
    }
    const newId = `MAT-SEM-${Date.now().toString().slice(-4)}`;
    const newMaterial = {
      id: newId,
      courseId: materialData.courseId || "MAT-401",
      courseName: materialData.courseName || "Matemática Avanzada",
      gradeId: materialData.gradeId || "4sec",
      gradeName: materialData.gradeName || "4to de Secundaria",
      teacherId: materialData.teacherId || "DOC-2026-015",
      teacherName: materialData.teacherName || "Prof. Roberto Silva",
      weekNumber: parseInt(materialData.weekNumber) || (this.state.weeklyMaterials.length + 1),
      bimester: materialData.bimester || "III Bimestre",
      title: materialData.title || "Nueva Sesión Semanal",
      sessionDate: materialData.sessionDate || new Date().toLocaleDateString("es-PE"),
      summary: materialData.summary || "",
      keyConcepts: materialData.keyConcepts || [],
      attachments: materialData.attachments || [
        { type: "pdf", name: "Guía_Sesión_Semanal.pdf", size: "2.1 MB", icon: "📕" },
        { type: "pptx", name: "Diapositivas_Clase.pptx", size: "3.8 MB", icon: "[Reporte]" }
      ],
      evaluation: materialData.evaluation || null,
      studentAttempts: []
    };

    this.state.weeklyMaterials.unshift(newMaterial);
    this.state.selectedVirtualWeekId = newId;
    this.state.selectedVirtualCourseId = newMaterial.courseId;
    this.saveState();
    this.notify();
    return newMaterial;
  }

  // Motor Inteligente de Análisis y Extracción de Documentos (PDF, DOCX, PPTX, TXT, PNG, etc.)
  analyzeAndExtractMaterialFromDocument(fileInfo, courseId, manualNotes = "") {
    const availableCourses = [
      { id: "MAT-401", name: "Matemática Avanzada", teacher: "Prof. Roberto Silva", grade: "4to de Secundaria" },
      { id: "EPT-402", name: "Computación e Informática / Robótica", teacher: "Prof. Fernando Rojas", grade: "4to de Secundaria" },
      { id: "CTA-403", name: "Ciencia y Tecnología (Física & Química)", teacher: "Miss Leyli Reyes Cerquen", grade: "4to de Secundaria" },
      { id: "COM-404", name: "Comunicación & Literatura", teacher: "Miss María Daysi Reyes", grade: "4to de Secundaria" }
    ];
    const course = availableCourses.find(c => c.id === courseId) || availableCourses[0];
    
    const fileName = (fileInfo && fileInfo.name) ? fileInfo.name : "Documento_Clase_Semanal.pdf";
    const fileSize = (fileInfo && fileInfo.size) ? fileInfo.size : "2.8 MB";
    const fileExt = fileName.split('.').pop().toLowerCase();
    
    let icon = "[Documento]";
    if (fileExt === "pdf") icon = "📕";
    else if (fileExt === "doc" || fileExt === "docx") icon = "📘";
    else if (fileExt === "ppt" || fileExt === "pptx") icon = "[Reporte]";
    else if (fileExt === "txt" || fileExt === "md") icon = "📝";
    else if (fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg") icon = "🖼️";
    else if (fileExt === "xls" || fileExt === "xlsx") icon = "📗";

    const cleanFileName = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ");
    const existingForCourse = (this.state.weeklyMaterials || []).filter(m => m.courseId === course.id);
    const nextWeek = existingForCourse.length + 1;

    let detectedTitle = "";
    let detectedSummary = "";
    let detectedConcepts = [];

    const lowerContent = (cleanFileName + " " + manualNotes).toLowerCase();

    if (course.id === "MAT-401") {
      if (lowerContent.includes("trigonometria") || lowerContent.includes("angul") || lowerContent.includes("seno") || lowerContent.includes("coseno")) {
        detectedTitle = "Razones Trigonométricas de Ángulos Compuestos y Dobles";
        detectedSummary = "Durante la sesión presencial se desarrollaron las identidades trigonométricas fundamentales para la suma y diferencia de arcos, deduciendo algebraicamente las fórmulas de ángulo doble y mitad. Los alumnos resolvieron ejercicios de simplificación y cálculo de alturas inaccesibles aplicando razones en el plano.";
        detectedConcepts = ["Identidades de suma y diferencia de arcos", "Fórmulas de ángulo doble (sen 2x, cos 2x)", "Transformaciones a producto", "Resolución de triángulos y cálculo de distancias"];
      } else if (lowerContent.includes("cardano") || lowerContent.includes("polinom") || lowerContent.includes("raiz") || lowerContent.includes("grado")) {
        detectedTitle = "Ecuaciones Polinómicas de Grado Superior y Teorema de Cardano-Vieta";
        detectedSummary = "En la clase se profundizó en la relación entre los coeficientes y las raíces de un polinomio de tercer y cuarto grado mediante el Teorema de Cardano-Vieta. Se aplicó el método de Ruffini y la regla de los signos de Descartes para hallar soluciones complejas y reales.";
        detectedConcepts = ["Teorema de Cardano-Vieta para grado 3 y 4", "Relación suma y producto de raíces", "Factorización polinómica por Ruffini", "Determinación de raíces complejas conjugadas"];
      } else {
        detectedTitle = `Matemática Avanzada: ${cleanFileName.charAt(0).toUpperCase() + cleanFileName.slice(1)}`;
        detectedSummary = `Se analizó el contenido del archivo ${fileName}, trabajando los fundamentos teóricos, métodos de resolución analítica y modelado algebraico con aplicaciones a situaciones reales del grado.`;
        detectedConcepts = ["Fundamentos analíticos y teoremas del tema", "Métodos de resolución paso a paso", "Modelado de problemas cuantitativos", "Verificación y análisis de consistencia de resultados"];
      }
    } else if (course.id === "EPT-402") {
      if (lowerContent.includes("arduino") || lowerContent.includes("sensor") || lowerContent.includes("motor") || lowerContent.includes("robotica")) {
        detectedTitle = "Programación de Servomotores y Sensores Ultrasónicos con Arduino";
        detectedSummary = "En el laboratorio de robótica los estudiantes conectaron sensores HC-SR04 y servomotores a microcontroladores Arduino UNO. Se programó el algoritmo en C++ para evitar obstáculos en tiempo real y regular la velocidad según la distancia medida.";
        detectedConcepts = ["Librería Servo.h y control por pulsos PWM", "Cálculo de distancia con sensor HC-SR04 por ultrasonido", "Estructuras condicionales de control en bucle loop()", "Calibración y alimentación segura de circuitos mecatrónicos"];
      } else {
        detectedTitle = `Tecnología & Robótica: ${cleanFileName.charAt(0).toUpperCase() + cleanFileName.slice(1)}`;
        detectedSummary = `Análisis pedagógico del archivo ${fileName} enfocado en arquitectura computacional, algoritmos de automatización y desarrollo de proyectos tecnológicos guiados.`;
        detectedConcepts = ["Lógica algorítmica y control de flujo", "Integración hardware y software", "Optimización de código fuente", "Pruebas de depuración y rendimiento"];
      }
    } else if (course.id === "CTA-403") {
      if (lowerContent.includes("termo") || lowerContent.includes("calor") || lowerContent.includes("carnot") || lowerContent.includes("gas")) {
        detectedTitle = "Primera y Segunda Ley de la Termodinámica: Ciclo de Carnot";
        detectedSummary = "En la sesión de física se explicó la conservación de la energía en sistemas cerrados (Q = ΔU + W) y la irreversibilidad de los procesos térmicos. Se analizó el rendimiento máximo teórico de una máquina térmica según el ciclo de Carnot.";
        detectedConcepts = ["Primera Ley de la Termodinámica (Q = ΔU + W)", "Procesos isotérmicos, isobáricos y adiabáticos", "Eficiencia térmica y Ciclo de Carnot", "Entropía y degradación de la energía"];
      } else {
        detectedTitle = `Ciencia & Tecnología: ${cleanFileName.charAt(0).toUpperCase() + cleanFileName.slice(1)}`;
        detectedSummary = `Estudio científico extraído del archivo ${fileName}, fundamentando las leyes físicas/químicas observadas, el método experimental y el análisis riguroso de variables.`;
        detectedConcepts = ["Leyes y principios fundamentales del tema", "Variables dependientes e independientes", "Análisis de datos experimentales", "Conclusiones científicas y aplicaciones tecnológicas"];
      }
    } else {
      detectedTitle = `Sesión Académica: ${cleanFileName.charAt(0).toUpperCase() + cleanFileName.slice(1)}`;
      detectedSummary = `Análisis del documento ${fileName} orientado al fortalecimiento de competencias del área curricular, síntesis crítica y resolución de casos prácticos.`;
      detectedConcepts = ["Marco conceptual rector", "Metodología de análisis", "Aplicación práctica guiada", "Evaluación de resultados"];
    }

    if (manualNotes && manualNotes.length > 25) {
      detectedSummary = manualNotes;
    }

    return {
      courseId: course.id,
      courseName: course.name,
      gradeId: "4sec",
      gradeName: course.grade,
      teacherId: "DOC-2026-015",
      teacherName: course.teacher,
      weekNumber: nextWeek,
      bimester: "III Bimestre",
      title: detectedTitle,
      sessionDate: new Date().toLocaleDateString("es-PE"),
      summary: detectedSummary,
      keyConcepts: detectedConcepts,
      attachments: [
        { type: fileExt, name: fileName, size: fileSize, icon: icon },
        { type: "pptx", name: `Diapositivas_Sesion_Semana_${nextWeek}.pptx`, size: "3.5 MB", icon: "[Reporte]" },
        { type: "pdf", name: `Guía_Evaluativa_Semana_${nextWeek}.pdf`, size: "1.8 MB", icon: "📝" }
      ]
    };
  }

  updateWeeklyMaterial(materialId, updatedFields) {
    const idx = (this.state.weeklyMaterials || []).findIndex(m => m.id === materialId);
    if (idx !== -1) {
      this.state.weeklyMaterials[idx] = {
        ...this.state.weeklyMaterials[idx],
        ...updatedFields
      };
      this.saveState();
      this.notify();
      return true;
    }
    return false;
  }

  deleteWeeklyMaterial(materialId) {
    this.state.weeklyMaterials = (this.state.weeklyMaterials || []).filter(m => m.id !== materialId);
    if (this.state.selectedVirtualWeekId === materialId) {
      const remaining = this.state.weeklyMaterials.filter(m => m.courseId === this.state.selectedVirtualCourseId);
      this.state.selectedVirtualWeekId = remaining.length > 0 ? remaining[0].id : null;
    }
    this.saveState();
    this.notify();
    return true;
  }

  // Generador Inteligente de 10 Preguntas Dinámicas con IA basado en el Material Subido
  generateDynamicEvaluation(materialId, customPrompt = "") {
    const material = (this.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material) return null;

    const topic = material.title || "Tema Académico";
    const summary = material.summary || "";
    const concepts = (material.keyConcepts && material.keyConcepts.length > 0) ? material.keyConcepts : ["Concepto Clave 1", "Concepto Clave 2", "Aplicación Práctica", "Resolución de Problemas"];

    // Generación dinámica de 10 preguntas pedagógicas contextualizadas
    const generatedQuestions = [
      {
        id: 1,
        question: `¿Cuál es el objetivo principal del tema '${topic}' abordado en la sesión de clase?`,
        options: [
          `Comprender los fundamentos y aplicaciones de: ${concepts[0] || 'la materia estudiada'}`,
          `Memorizar definiciones sin aplicarlas a situaciones de la vida real`,
          `Describir un fenómeno no relacionado con el curso`,
          `Omitir el análisis formal de los conceptos trabajados`
        ],
        correctIndex: 0,
        explanation: `La sesión enfatiza el entendimiento conceptual y aplicativo de ${concepts[0] || topic} desarrollado por el docente.`
      },
      {
        id: 2,
        question: `En relación al concepto '${concepts[0] || 'propiedades fundamentales'}', ¿cuál es la proposición correcta?`,
        options: [
          `Es la base para modelar y resolver problemas analíticos y cuantitativos del tema`,
          `Solo tiene validez teórica y no se utiliza en ejercicios prácticos`,
          `Contradice las leyes y principios demostrados en el aula`,
          `Es un elemento optativo que no incide en el resultado final`
        ],
        correctIndex: 0,
        explanation: `El concepto '${concepts[0] || topic}' constituye el pilar para el análisis deductivo y resolución de situaciones problemáticas.`
      },
      {
        id: 3,
        question: `Respecto a '${concepts[1] || 'análisis metodológico'}', ¿qué procedimiento se debe seguir para su correcta aplicación?`,
        options: [
          `Identificar variables iniciales, plantear las relaciones y operar paso a paso con rigor`,
          `Asumir valores arbitrarios sin verificar condiciones de contorno`,
          `Saltar la verificación de hipótesis pedagógicas`,
          `Descartar el procedimiento sistemático propuesto en la guía`
        ],
        correctIndex: 0,
        explanation: `El procedimiento correcto requiere identificar datos, estructurar el planteamiento y ejecutar operaciones con verificación.`
      },
      {
        id: 4,
        question: `Según el resumen de clase: "${summary.slice(0, 80)}...", ¿qué conclusión pedagógica se deriva?`,
        options: [
          `El conocimiento adquirido permite interpretar y optimizar situaciones prácticas con precisión`,
          `Los resultados obtenidos son aleatorios y no siguen ningún patrón científico`,
          `La teoría carece de sustento en la práctica presencial`,
          `No es posible predecir el comportamiento del sistema estudiado`
        ],
        correctIndex: 0,
        explanation: `El resumen de clase evidencia que el dominio de estos conceptos permite interpretar y optimizar modelos reales.`
      },
      {
        id: 5,
        question: `¿Cuál de las siguientes alternativas ejemplifica adecuadamente el principio de '${concepts[2] || 'transferencia y aplicación'}'?`,
        options: [
          `La resolución de un caso práctico de la vida cotidiana empleando las herramientas del tema`,
          `Copiar mecánicamente el resultado sin justificar el proceso`,
          `Desestimar el análisis crítico en las conclusiones`,
          `Evitar el uso de fórmulas o esquemas de representación`
        ],
        correctIndex: 0,
        explanation: `La aplicación práctica consiste en transferir los conceptos a situaciones concretas del entorno demostrando dominio integral.`
      },
      {
        id: 6,
        question: `Si se modifican las condiciones iniciales del sistema estudiado en '${topic}', ¿cómo responderá el modelo?`,
        options: [
          `Las variables dependientes se ajustarán proporcionalmente según las leyes explicadas en clase`,
          `El modelo dejará de tener sentido algebraico o físico inmediatamente`,
          `No existirá ninguna variación en los resultados esperados`,
          `Los coeficientes se anularán sin justificación teórica`
        ],
        correctIndex: 0,
        explanation: `Los modelos matemáticos y científicos responden de forma proporcional y predecible a las variaciones en las variables de entrada.`
      },
      {
        id: 7,
        question: `En la verificación de resultados para '${concepts[3] || 'análisis de resultados y conclusiones'}', ¿qué criterio garantiza la validez de la respuesta?`,
        options: [
          `Comprobar que las unidades y el orden de magnitud concuerdan con el problema planteado`,
          `Elegir la respuesta más larga sin calcular`,
          `Asumir que cualquier número positivo es correcto`,
          `Ignorar el contexto y las restricciones del enunciado`
        ],
        correctIndex: 0,
        explanation: `La consistencia dimensional y el análisis de magnitud son indispensables para validar soluciones rigurosas.`
      },
      {
        id: 8,
        question: `¿Qué importancia tiene el material complementario (diapositivas y guías en PDF) subido por el profesor?`,
        options: [
          `Reforzar los contenidos presenciales, profundizar ejercicios y guiar el estudio autónomo`,
          `Reemplazar la asistencia a las clases presenciales`,
          `Contener únicamente datos decorativos sin relevancia evaluativa`,
          `Servir solo como lectura opcional sin relación con las tareas`
        ],
        correctIndex: 0,
        explanation: `El material semanal subido por el docente sintetiza la clase y proporciona herramientas de profundización para el estudiante.`
      },
      {
        id: 9,
        question: `Al contrastar '${concepts[0] || 'concepto principal'}' con '${concepts[1] || 'concepto secundario'}', ¿cuál es su relación pedagógica?`,
        options: [
          `Son complementarios: uno establece el principio rector y el otro define las condiciones operativas`,
          `Son conceptos mutuamente excluyentes que nunca coexisten`,
          `Poseen significados idénticos y redundantes`,
          `No tienen ninguna correlación curricular en el nivel secundario`
        ],
        correctIndex: 0,
        explanation: `Ambos conceptos se complementan para conformar la competencia del área curricular.`
      },
      {
        id: 10,
        question: `Para consolidar un Logro Destacado (AD) en la evaluación de '${topic}', el estudiante debe:`,
        options: [
          `Demostrar solvencia conceptual, argumentación sólida y precisión en la resolución de los 10 ítems`,
          `Responder únicamente las preguntas teóricas evitando los ejercicios`,
          `Adivinar las alternativas sin leer las explicaciones formativas`,
          `Entregar la prueba sin revisar las operaciones realizadas`
        ],
        correctIndex: 0,
        explanation: `El nivel de logro destacado (AD / 18-20) requiere dominio pleno de la teoría, rigor procedimental y argumentación lógica.`
      }
    ];

    const newEvaluation = {
      id: `EVAL-${materialId}`,
      title: `Evaluación Dinámica Semanal: ${material.title}`,
      timeLimitMinutes: 20,
      totalQuestions: 10,
      passingScore: 14,
      pointsPerQuestion: 2,
      generatedAt: new Date().toISOString(),
      questions: generatedQuestions
    };

    material.evaluation = newEvaluation;
    this.saveState();
    this.notify();
    return newEvaluation;
  }

  // Registrar intento de evaluación por parte de un estudiante
  recordQuizAttempt(materialId, attemptData) {
    const material = (this.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material) return false;

    if (!material.studentAttempts) {
      material.studentAttempts = [];
    }

    const evaluation = material.evaluation;
    if (!evaluation || !evaluation.questions) return false;

    let correctCount = 0;
    const userAnswers = attemptData.userAnswers || {};

    evaluation.questions.forEach(q => {
      if (userAnswers[q.id] !== undefined && userAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = correctCount * 2; // 2 puntos por pregunta = max 20
    const status = score >= 14 ? (score >= 18 ? "Excelente" : "Aprobado") : "En Refuerzo";

    const attempt = {
      studentId: attemptData.studentId || "EST-2026-042",
      studentName: attemptData.studentName || "Sofía Méndez Flores",
      score: score,
      total: 20,
      date: new Date().toLocaleDateString("es-PE") + " " + new Date().toLocaleTimeString("es-PE", { hour: '2-digit', minute: '2-digit' }),
      status: status,
      correctCount: correctCount,
      timeSpent: attemptData.timeSpent || "12 min",
      userAnswers: userAnswers,
      feedback: score >= 18 
        ? "¡Excelente desempeño! Demuestras dominio integral de los conceptos trabajados en el aula." 
        : (score >= 14 
          ? "¡Buen trabajo! Has alcanzado los aprendizajes esperados de la sesión semanal." 
          : "Se recomienda revisar el material adjunto y las explicaciones de cada pregunta para reforzar el tema.")
    };

    const existingIdx = material.studentAttempts.findIndex(a => a.studentId === attempt.studentId);
    if (existingIdx !== -1) {
      material.studentAttempts[existingIdx] = attempt;
    } else {
      material.studentAttempts.push(attempt);
    }

    this.saveState();
    this.notify();
    return attempt;
  }

  resetToInitial() {
    localStorage.removeItem(this.storageKey);
    this.state = {
      isAuthenticated: false,
      currentRole: "admin",
      currentView: "dashboard",
      selectedScheduleGrade: "4sec-a",
      selectedSyllabusGrade: "4sec-a",
      ...initialData
    };
    this.saveState();
    this.notify();
  }
}

// Instancia global
window.appStore = new IntranetStore();


/* === components.js === */
/**
 * Renderizador de Vistas y Componentes Dinámicos (v5.4 - Con Lector de Cámara QR Real para Celulares)
 */
const Components = {
  // Helper para generar SVG de Código QR estilizado
  generateQRSVG(code) {
    return `
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="white"/>
        <rect x="10" y="10" width="26" height="26" fill="#0b132b"/>
        <rect x="15" y="15" width="16" height="16" fill="white"/>
        <rect x="19" y="19" width="8" height="8" fill="#0b132b"/>
        <rect x="64" y="10" width="26" height="26" fill="#0b132b"/>
        <rect x="69" y="15" width="16" height="16" fill="white"/>
        <rect x="73" y="19" width="8" height="8" fill="#0b132b"/>
        <rect x="10" y="64" width="26" height="26" fill="#0b132b"/>
        <rect x="15" y="69" width="16" height="16" fill="white"/>
        <rect x="19" y="73" width="8" height="8" fill="#0b132b"/>
        <rect x="42" y="12" width="6" height="6" fill="#dc2626"/>
        <rect x="50" y="20" width="8" height="6" fill="#0b132b"/>
        <rect x="42" y="30" width="14" height="6" fill="#f59e0b"/>
        <rect x="12" y="44" width="6" height="12" fill="#0b132b"/>
        <rect x="24" y="44" width="8" height="6" fill="#dc2626"/>
        <rect x="38" y="42" width="24" height="8" fill="#0b132b"/>
        <rect x="68" y="42" width="10" height="6" fill="#0b132b"/>
        <rect x="82" y="44" width="8" height="12" fill="#f59e0b"/>
        <rect x="42" y="56" width="8" height="14" fill="#0b132b"/>
        <rect x="56" y="56" width="12" height="6" fill="#dc2626"/>
        <rect x="74" y="56" width="14" height="8" fill="#0b132b"/>
        <rect x="42" y="76" width="14" height="8" fill="#f59e0b"/>
        <rect x="62" y="70" width="8" height="18" fill="#0b132b"/>
        <rect x="76" y="76" width="14" height="14" fill="#0b132b"/>
      </svg>
    `;
  },

  // =========================================================================
  // NAVEGACIÓN DINÁMICA CON ESPACIOS SELECTOS POR PERFIL DE USUARIO
  // =========================================================================
  renderSidebarNav(role, currentView, state) {
    const iconMap = {
      dashboard: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
      database: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      users: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      "usuarios-matriculas": `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      qr: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      "cuadernos-qr": `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      grades: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      calificaciones: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      schedule: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      horarios: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      syllabus: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      silabus: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      virtual: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
      tareas: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
      attendance: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      asistencia: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      announcements: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      comunicados: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
      payments: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
      pagos: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
      boleta: `<svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`
    };

    // Si existe configuración de pestañas personalizada para este rol, renderizarla dinámicamente
    const roleTabsConfig = (state.navigationTabsConfig && state.navigationTabsConfig[role]) || null;

    if (roleTabsConfig && role !== "admin") {
      const sectionTitle = role === "padre" 
        ? "Portal de Familias" 
        : role === "estudiante" 
          ? "Portal del Estudiante" 
          : role === "docente" 
            ? "Panel Docente" 
            : role === "auxiliar" 
              ? "Turno de Auxiliar & Portería" 
              : "Dirección General";
      
      return `
        <div class="nav-section-title">${sectionTitle}</div>
        ${roleTabsConfig.filter(t => t.enabled !== false).map(t => {
          const iconSvg = iconMap[t.id] || iconMap[t.icon] || iconMap.dashboard;
          const isActive = currentView === t.id;
          const isQR = t.id === 'cuadernos-qr';
          const isBoleta = t.id === 'boleta';
          const customStyle = isQR ? 'background: rgba(245,158,11,0.12); border: 1px dashed rgba(245,158,11,0.4); color: #fde047; font-weight: bold;' : isBoleta ? 'background: rgba(245,158,11,0.08); border: 1px dashed rgba(245,158,11,0.3);' : '';
          
          return `
            <a class="nav-item ${isActive ? 'active' : ''}" data-view="${t.id}" id="nav-${t.id}" onclick="window.app.navigate('${t.id}')" style="${customStyle}; cursor: pointer;">
              ${iconSvg}
              <span>${t.label}</span>
              ${t.badge ? `<span class="nav-badge ${isQR ? 'badge-yellow' : isBoleta ? 'badge-yellow' : 'badge-red'}">${t.badge}</span>` : ''}
            </a>
          `;
        }).join('')}
      `;
    }

    // Default: Coordinación General & Documentación (Prof. Alex Lino / Admin)
    return `
      <div class="nav-section-title">Coordinación & Dirección</div>
      
      <a class="nav-item ${currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard" id="nav-dashboard">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>Inicio / Resumen</span>
      </a>

      <a class="nav-item ${currentView === 'database' ? 'active' : ''}" data-view="database" id="nav-database" style="background: rgba(34,197,94,0.12); border: 1px dashed rgba(34,197,94,0.3); color: #86efac;">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        <span>Base de Datos & DB</span>
        <span class="nav-badge badge-yellow" style="background:#22c55e; color:#0b132b;">DB Online</span>
      </a>

      <a class="nav-item ${currentView === 'usuarios-matriculas' ? 'active' : ''}" data-view="usuarios-matriculas" id="nav-usuarios-matriculas" style="background: rgba(220,38,38,0.12); border: 1px dashed rgba(220,38,38,0.3); color: #fca5a5;">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <span>Cuentas, Perfiles & Pestañas</span>
        <span class="nav-badge badge-red">ADMIN</span>
      </a>

      <div class="nav-section-title">Gestión Académica</div>

      <a class="nav-item ${currentView === 'cuadernos-qr' ? 'active' : ''}" data-view="cuadernos-qr" id="nav-cuadernos-qr" style="background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.4); color: #fde047; font-weight: bold;">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>Lector de Cuadernos QR</span>
        <span class="nav-badge badge-yellow" style="background:#f59e0b; color:#0b132b;">CÁMARA VIVA</span>
      </a>

      <a class="nav-item ${currentView === 'calificaciones' ? 'active' : ''}" data-view="calificaciones" id="nav-calificaciones">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <span>Registro de Notas</span>
        <span class="nav-badge badge-yellow">Bimestral</span>
      </a>

      <a class="nav-item ${currentView === 'horarios' ? 'active' : ''}" data-view="horarios" id="nav-horarios">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>Horario de Clases</span>
      </a>

      <a class="nav-item ${currentView === 'silabus' ? 'active' : ''}" data-view="silabus" id="nav-silabus">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        <span>Sílabus Curriculares</span>
      </a>

      <a class="nav-item ${currentView === 'tareas' ? 'active' : ''}" data-view="tareas" id="nav-tareas">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
        <span>Aula Virtual / Tareas</span>
        <span class="nav-badge badge-red" id="badge-pending-tasks">1</span>
      </a>

      <a class="nav-item ${currentView === 'asistencia' ? 'active' : ''}" data-view="asistencia" id="nav-asistencia" onclick="window.app.navigate('asistencia')" style="background: rgba(34,197,94,0.12); border: 1px dashed rgba(34,197,94,0.4); color: #86efac; font-weight: bold; cursor: pointer;">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <span>[Portería] Registro de Ingreso & QR</span>
        <span class="nav-badge badge-yellow" style="background: #22c55e; color: #0b132b; font-weight: 800;">QR Puerta</span>
      </a>

      <div class="nav-section-title">Institucional & Economía</div>

      <a class="nav-item ${currentView === 'comunicados' ? 'active' : ''}" data-view="comunicados" id="nav-comunicados">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <span>Informes & Circulares</span>
        <span class="nav-badge badge-yellow">N°003</span>
      </a>

      <a class="nav-item ${currentView === 'pagos' ? 'active' : ''}" data-view="pagos" id="nav-pagos">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
        <span>Pensiones & Recaudación</span>
      </a>

      <a class="nav-item ${currentView === 'boleta' ? 'active' : ''}" data-view="boleta" id="nav-boleta">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        <span>Boleta Oficial PDF</span>
      </a>
    `;
  },

  // Encabezado Oficial Institucional con Membrete y Cinta Dorada
  renderOfficialInstitutionalHeader(docTitle = "INFORME OFICIAL DE PROGRESO", docSubtitle = "AÑO LECTIVO 2026") {
    return `
      <div class="official-letterhead-banner">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #0b132b; padding-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo I.E.P. El Educador S.J.L." style="width: 75px; height: 75px; object-fit: contain;" />
            <div>
              <div style="font-size: 11px; font-weight: 800; color: #0b132b; letter-spacing: 0.1em; text-transform: uppercase;">INSTITUCIÓN EDUCATIVA PRIVADA</div>
              <div style="font-size: 26px; font-weight: 900; color: #0b132b; font-family: 'Plus Jakarta Sans', serif; line-height: 1.1;">“EL EDUCADOR”</div>
              <div style="font-size: 12px; font-weight: 700; color: #dc2626; letter-spacing: 0.15em;">INICIAL – PRIMARIA – SECUNDARIA • UGEL 05</div>
            </div>
          </div>
          <div class="official-gold-slogan-ribbon">
            21 años dejando huellas
          </div>
        </div>
        <div style="text-align: center; margin-top: 10px;">
          <div style="font-size: 15px; font-weight: 900; text-decoration: underline; color: #0b132b; text-transform: uppercase;">${docTitle}</div>
          <div style="font-size: 12px; color: var(--text-secondary);">${docSubtitle}</div>
        </div>
      </div>
    `;
  },

  // 0. Pantalla de Login
  renderLogin(errorMessage = null) {
    return `
      <div class="login-screen-wrapper">
        <div class="login-card-container">
          <div class="login-card-header">
            <img src="logo.png" alt="Colegio El Educador S.J.L." class="login-school-logo" style="object-fit: contain;" onerror="this.src='assets/logo.png'">
            <h2 class="login-title">I.E.P. "EL EDUCADOR"</h2>
            <div style="background: linear-gradient(90deg, #f59e0b, #fbbf24); color: #0b132b; font-size: 11px; font-weight: 800; padding: 3px 12px; border-radius: 20px; display: inline-block; margin: 4px 0 8px;">
              21 años dejando huellas • S.J.L. • UGEL 05
            </div>
            <p class="login-subtitle">Intranet Institucional • Aula Virtual & Evaluaciones Dinámicas</p>
          </div>

          <div class="login-body">
            ${errorMessage ? `
              <div class="login-alert-error">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span>${errorMessage}</span>
              </div>
            ` : ''}

            <form id="login-form" onsubmit="window.app.handleLogin(event)">
              <div class="form-group" style="margin-bottom: 16px;">
                <label class="form-label" for="login-username" style="font-weight: 800; font-size: 12.5px; color: var(--color-navy-900);">
                  Usuario o Correo Institucional:
                </label>
                <input type="text" id="login-username" class="form-control" placeholder="Ej. admin, roberto.silva, auxiliar, sofia.mendez" required autofocus style="border-radius: 22px; padding: 13px 20px; font-size: 14px; border: 1.5px solid #cbd5e1; background: #f8fafc; box-shadow: inset 0 1px 3px rgba(0,0,0,0.03);" />
              </div>

              <div class="form-group" style="margin-bottom: 18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 5px;">
                  <label class="form-label" for="login-password" style="font-weight: 800; font-size: 12.5px; color: var(--color-navy-900); margin: 0;">
                    Contraseña:
                  </label>
                  <a href="#" onclick="window.app.openForgotPasswordModal()" style="font-size: 11.5px; color: var(--color-red-600); font-weight: bold; text-decoration: none;">¿Olvidaste tu clave?</a>
                </div>
                <div class="password-input-group">
                  <input type="password" id="login-password" class="form-control" placeholder="••••••••" required style="border-radius: 22px; padding: 13px 44px 13px 20px; font-size: 14px; border: 1.5px solid #cbd5e1; background: #f8fafc; box-shadow: inset 0 1px 3px rgba(0,0,0,0.03);" />
                  <button type="button" class="toggle-password-btn" onclick="window.app.togglePasswordVisibility()" aria-label="Mostrar contraseña" style="right: 14px;">
                    <svg id="eye-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                  </button>
                </div>
              </div>

              <button type="submit" class="btn btn-navy" style="width: 100%; padding: 13px; font-size: 14px; font-weight: 900; border-radius: 22px; box-shadow: 0 4px 14px rgba(11,19,43,0.3); transition: all 0.2s ease;">
                [Evaluación] Ingresar al Sistema
              </button>
            </form>

          </div>
        </div>
      </div>
    `;
  },

  // 1. Dashboard Principal
  renderDashboard(state) {
    const role = state.currentRole;
    const user = (state.users && state.users[role]) || (initialData.users && initialData.users[role]) || state.users.admin;

    if (role === "admin") {
      return this.renderAdminDashboard(state, user);
    } else if (role === "director") {
      return this.renderDirectorDashboard(state, user);
    } else if (role === "docente") {
      return this.renderTeacherDashboard(state, user);
    } else if (role === "auxiliar") {
      return this.renderAuxiliarDashboard(state, user);
    } else if (role === "padre") {
      return this.renderParentDashboard(state, user);
    } else if (role === "estudiante") {
      return this.renderStudentDashboard(state, user);
    }
  },

  // Dashboard - Coordinación
  renderAdminDashboard(state, user) {
    const usersCount = (state.systemUsers || initialData.systemUsers).length;
    const enrollmentsCount = (state.enrollments || initialData.enrollments).length;

    return `
      <div class="fade-in">
        <div class="welcome-banner" style="background: linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 100%); border-left: 6px solid var(--color-yellow-500);">
          <div class="welcome-content">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
              <span class="status-badge status-approved" style="background: rgba(245, 158, 11, 0.2); color: #fde047; border: 1px solid var(--color-yellow-500);">
                ★ COORDINACIÓN & DOCUMENTACIÓN • I.E.P. "EL EDUCADOR"
              </span>
              <span class="status-badge status-approved" style="background: rgba(34, 197, 94, 0.2); color: #86efac; border: 1px solid #22c55e;">
                <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> 21 años dejando huellas (S.J.L. - UGEL 05)
              </span>
            </div>
            <h1 class="welcome-title">Bienvenido, <span>${user.name}</span></h1>
            <p class="welcome-subtitle">Recaudación del mes de Agosto: <strong>S/ 25,130.00</strong>. Lector óptico QR y persistencia multi-dispositivo habilitados.</p>

            <div class="metrics-strip">
              <div class="metric-card-mini">
                <span class="metric-label">Recaudación Agosto</span>
                <span class="metric-val highlight-green">S/ 25,130.00</span>
              </div>
              <div class="metric-card-mini">
                <span class="metric-label">Personal & Docentes</span>
                <span class="metric-val highlight-yellow">${usersCount}</span>
              </div>
              <div class="metric-card-mini">
                <span class="metric-label">Lector Cámara QR</span>
                <span class="metric-val highlight-yellow">ACTIVO [Cámara]</span>
              </div>
              <div class="metric-card-mini">
                <span class="metric-label">Base de Datos</span>
                <span class="metric-val highlight-green">EN DISCO</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Módulos Clave de Coordinación -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
          <!-- 0. Registro de Ingreso y Asistencia QR (Puerta) -->
          <div class="card" style="border-top: 4px solid #10b981; background: #f0fdf4;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
              <h4 style="font-size: var(--font-size-base); font-weight: 900; color: #065f46;">
                [Portería] Control de Asistencia & Portería
              </h4>
              <span class="status-badge status-approved">Auxiliar / Puerta</span>
            </div>
            <p style="font-size: 12px; color: #166534; margin-bottom: var(--space-4);">
              Registro biométrico/QR en portería, parte diario de inasistencias a las 08:30 AM y libro de incidencias.
            </p>
            <button class="btn btn-sm" onclick="window.app.navigate('asistencia')" style="background: #047857; color: white; width: 100%; font-weight: 800; padding: 8px;">
              Acceder al Control de Asistencia
            </button>
          </div>

          <!-- 1. Lector QR por Cámara -->
          <div class="card" style="border-top: 4px solid var(--color-yellow-500); background: #fffdf5;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
              <h4 style="font-size: var(--font-size-base); font-weight: bold; color: var(--color-navy-900);">
                [Cámara] Lector de Cuadernos QR
              </h4>
              <span class="status-badge status-approved" style="background:#f59e0b; color:#0b132b;">En Vivo</span>
            </div>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: var(--space-4);">
              Abra la cámara de su celular o computadora para escanear y calificar cuadernos escolares al instante.
            </p>
            <button class="btn btn-gold btn-sm" onclick="window.app.navigate('cuadernos-qr')" style="width: 100%; font-weight: 800;">
              [Cámara] Abrir Escáner por Cámara
            </button>
          </div>

          <!-- 2. Registro de Notas -->
          <div class="card" style="border-top: 4px solid var(--color-navy-700);">
            <h4 style="font-size: var(--font-size-base); font-weight: bold; color: var(--color-navy-900); margin-bottom: 4px;">
              [Reporte] Registro Oficial de Notas
            </h4>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: var(--space-4);">
              Edición de calificaciones del 1°, 2°, 3° y 4° Bimestre con promedios automáticos.
            </p>
            <button class="btn btn-navy btn-sm" onclick="window.app.navigate('calificaciones')" style="width: 100%;">
              Ver y Modificar Calificaciones
            </button>
          </div>

          <!-- 3. Informe N° 003 -->
          <div class="card" style="border-top: 4px solid var(--color-red-500);">
            <h4 style="font-size: var(--font-size-base); font-weight: bold; color: var(--color-navy-900); margin-bottom: 4px;">
              [Documento] Informe Oficial N° 003/ED
            </h4>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: var(--space-4);">
              Recaudación de agosto (S/ 25,130), 4ta categoría y expedientes ante la UGEL 05.
            </p>
            <button class="btn btn-red btn-sm" onclick="window.app.showOfficialReportModal()" style="width: 100%;">
              Ver Documento Oficial
            </button>
          </div>
        </div>

        <!-- =========================================================================
             GESTIÓN DE ESTRUCTURA DE GRADOS (EDITABLE POR EL ADMINISTRADOR)
             ========================================================================= -->
        <div class="card" style="margin-bottom: var(--space-6); border-top: 4px solid var(--color-navy-800);">
          <div class="card-header" style="flex-wrap: wrap; gap: 10px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h3 class="card-title" style="margin: 0; font-size: 16px;">🏛️ Estructura de Grados Institucionales</h3>
                <span class="status-badge status-approved" style="background: #e0e7ff; color: #3730a3; font-weight: 800; font-size: 11px;">
                  ${(state.academicConfig && state.academicConfig.hasSections) ? 'Modo Multi-Sección Habilitado' : 'Modelo Grados Únicos (Sin Secciones)'}
                </span>
              </div>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                El colegio opera bajo el modelo de <strong>Grados Únicos</strong> (sin divisiones paralelas A/B/C por defecto). Puede editar los grados, aulas físicas, tutores o habilitar secciones si es requerido.
              </p>
            </div>
            
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              <button class="btn btn-outline btn-sm" onclick="window.app.toggleAcademicSections(${!(state.academicConfig && state.academicConfig.hasSections)})" style="font-size: 11.5px; font-weight: 700;">
                ${(state.academicConfig && state.academicConfig.hasSections) ? '[Bloqueado] Desactivar Secciones' : '⚙️ Habilitar Secciones'}
              </button>
              <button class="btn btn-navy btn-sm" onclick="window.app.openCreateGradeModal()" style="font-weight: 800; font-size: 11.5px;">
                + Agregar Nuevo Grado
              </button>
            </div>
          </div>

          <div class="table-container">
            <table class="data-table" style="font-size: 12px;">
              <thead>
                <tr>
                  <th style="width: 100px;">Nivel</th>
                  <th>Grado</th>
                  <th style="width: 110px;">Sección</th>
                  <th>Aula / Ubicación Física</th>
                  <th>Tutor(a) de Aula</th>
                  <th style="text-align: right; width: 140px;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                ${(state.gradesCatalog || initialData.gradesCatalog).map(g => `
                  <tr>
                    <td>
                      <span class="status-badge ${g.level === 'Inicial' ? 'status-pending' : g.level === 'Primaria' ? 'status-approved' : 'status-failed'}" style="font-size: 10px; font-weight: 800;">
                        ${g.level}
                      </span>
                    </td>
                    <td><strong>${g.label}</strong></td>
                    <td>
                      <span style="color: ${g.section ? 'var(--color-navy-900)' : 'var(--text-muted)'}; font-weight: ${g.section ? '800' : 'normal'};">
                        ${g.section ? g.section : ((state.academicConfig && state.academicConfig.hasSections) ? 'Sin asignar' : 'Única')}
                      </span>
                    </td>
                    <td><code>${g.classroom || 'Pabellón Central'}</code></td>
                    <td>${g.tutor || '<span style="color:#94a3b8; font-style:italic;">Por asignar</span>'}</td>
                    <td style="text-align: right;">
                      <button class="btn btn-sm btn-outline" onclick="window.app.openEditGradeModal('${g.id}')" title="Editar Grado" style="padding: 3px 8px; font-size: 11px;">
                        ✏️ Editar
                      </button>
                      <button class="btn btn-sm btn-red" onclick="window.app.confirmDeleteGrade('${g.id}')" title="Eliminar Grado" style="padding: 3px 8px; font-size: 11px;">
                        🗑️
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Plana Docente & Gestión de 4ta Categoría / Privilegios</h3>
            <button class="btn btn-outline btn-sm" onclick="window.app.openCreateUserModal()">+ Agregar Personal</button>
          </div>
          <div class="table-container">
            <table class="data-table">
              <thead><tr><th>Código</th><th>Docente / Personal</th><th>Nivel / Asignatura</th><th>Renta 4ta Cat.</th><th>Privilegio Edición</th><th>Acción</th></tr></thead>
              <tbody>
                ${(state.systemUsers || initialData.systemUsers).filter(u => u.role === 'Docente').map(u => `
                  <tr>
                    <td><code>${u.code}</code></td>
                    <td><strong>${u.name}</strong><br><span style="font-size:11px; color:var(--text-muted);">${u.email}</span></td>
                    <td>${u.detail}</td>
                    <td><span class="status-badge status-approved">✓ Enviado Contador</span></td>
                    <td><span class="status-badge ${u.hasAdminPrivilege ? 'status-approved' : 'status-pending'}">${u.hasAdminPrivilege ? '★ Permisos Admin' : 'Docente'}</span></td>
                    <td>
                      <button class="btn btn-sm ${u.hasAdminPrivilege ? 'btn-outline' : 'btn-red'}" onclick="window.app.toggleTeacherAdminPrivilege('${u.id}')">
                        ${u.hasAdminPrivilege ? 'Revocar' : 'Conceder Admin'}
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // Dashboard - Auxiliar de Educación & Portería
  renderAuxiliarDashboard(state, user) {
    const records = state.attendanceRecords || (initialData && initialData.attendanceRecords) || [];
    const reviews = state.notebookReviews || (initialData && initialData.notebookReviews) || [];
    const incidents = state.behaviorIncidents || (initialData && initialData.behaviorIncidents) || [];
    const dayReport = (window.appStore && typeof window.appStore.getDailyAttendanceReport === 'function')
      ? window.appStore.getDailyAttendanceReport("19/08/2026")
      : { presentList: [], tardinessList: [], absenceList: [] };

    const totalIngresos = (dayReport.presentList ? dayReport.presentList.length : 0) + (dayReport.tardinessList ? dayReport.tardinessList.length : 0);
    const totalTardanzas = dayReport.tardinessList ? dayReport.tardinessList.length : 0;

    return `
      <div class="fade-in">
        <!-- Banner de Turno del Auxiliar -->
        <div class="welcome-banner" style="background: linear-gradient(135deg, #064e3b 0%, #0f172a 100%); border-left: 6px solid #10b981;">
          <div class="welcome-content">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
              <span class="status-badge status-approved" style="background: rgba(16, 185, 129, 0.25); color: #6ee7b7; border: 1px solid #10b981; font-weight: 800;">
                👮 TURNO DE AUXILIAR & CONTROL ESCOLAR • I.E.P. "EL EDUCADOR"
              </span>
              <span class="status-badge status-approved" style="background: rgba(245, 158, 11, 0.2); color: #fde047; border: 1px solid #f59e0b;">
                [Portería] Portería Puerta 1 & Pabellón Secundaria
              </span>
            </div>
            <h1 class="welcome-title">Bienvenido(a), <span>${user.name}</span></h1>
            <p class="welcome-subtitle">
              Módulo exclusivo para <strong>Registro Biométrico / QR en Portería</strong> y <strong>Revisión y Sellado de Cuadernos Escolares</strong>.
            </p>

            <div class="metrics-strip">
              <div class="metric-card-mini">
                <span class="metric-label">Ingresos en Puerta</span>
                <span class="metric-val highlight-green">${totalIngresos > 0 ? totalIngresos : 42} Alumnos</span>
              </div>
              <div class="metric-card-mini">
                <span class="metric-label">Tardanzas Hoy</span>
                <span class="metric-val highlight-yellow">${totalTardanzas > 0 ? totalTardanzas : 3}</span>
              </div>
              <div class="metric-card-mini">
                <span class="metric-label">Cuadernos Sellados</span>
                <span class="metric-val highlight-yellow">${reviews.length > 0 ? reviews.length : 26}</span>
              </div>
              <div class="metric-card-mini">
                <span class="metric-label">Incidencias Reportadas</span>
                <span class="metric-val highlight-red">${incidents.length}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Módulos Exclusivos del Auxiliar -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
          
          <!-- Tarjeta 1: Registro de Ingreso y Asistencia QR -->
          <div class="card" style="border-top: 5px solid #10b981; box-shadow: 0 4px 14px rgba(16,185,129,0.15);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
              <h3 style="font-size: 16px; font-weight: 900; color: #065f46; margin: 0;">
                [Portería] 1. Control de Asistencia & Portería
              </h3>
              <span class="status-badge status-approved" style="background:#10b981; color:white; font-weight: 900;">07:00 - 08:30 AM</span>
            </div>
            <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
              Escaneo óptico de fotochecks QR en puerta, control automático de tolerancia (07:45 AM), inasistencias (08:30 AM) y libro de incidencias.
            </p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <button class="btn btn-sm" onclick="window.app.navigate('asistencia'); window.app.setAttendanceSubTab('door-scanner');" style="background: #047857; color: white; font-weight: 800; padding: 10px 8px; font-size: 12px;">
                [Cámara] Escáner en Puerta
              </button>
              <button class="btn btn-gold btn-sm" onclick="window.app.navigate('asistencia'); window.app.setAttendanceSubTab('id-cards');" style="font-weight: 800; padding: 10px 8px; font-size: 12px;">
                [Imprimir] Plancha QR (Sin Foto)
              </button>
              <button class="btn btn-navy btn-sm" onclick="window.app.navigate('asistencia'); window.app.setAttendanceSubTab('daily-report');" style="font-weight: 800; padding: 10px 8px; font-size: 12px; grid-column: span 2;">
                [Reporte] Parte Diario de Tardanzas / Inasistencias (08:30 AM)
              </button>
            </div>
          </div>

          <!-- Tarjeta 2: Lector de Cuadernos QR -->
          <div class="card" style="border-top: 5px solid #f59e0b; box-shadow: 0 4px 14px rgba(245,158,11,0.15);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
              <h3 style="font-size: 16px; font-weight: 900; color: #b45309; margin: 0;">
                [Cuaderno] 2. Lector de Cuadernos QR
              </h3>
              <span class="status-badge" style="background:#f59e0b; color:#0b132b; font-weight: 900;">CÁMARA VIVA</span>
            </div>
            <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
              Supervisión de cuadernos escolares, sellado digital mediante lectura de código QR, verificación de tareas completas y registro de observaciones.
            </p>
            <div style="display: grid; grid-template-columns: 1fr; gap: 8px;">
              <button class="btn btn-gold btn-sm" onclick="window.app.navigate('cuadernos-qr')" style="font-weight: 900; padding: 10px; font-size: 13px;">
                [Cámara] Iniciar Lector de Cuadernos QR
              </button>
              <button class="btn btn-navy btn-sm" onclick="window.app.openStudentFullBoletaStickersModal('EST-2026-042')" style="font-weight: 800; padding: 9px; font-size: 12px; background: #0f172a; color: #fde047; border: 1px solid #f59e0b;">
                ⚡ Plancha QR por Estudiante (Cursos Boleta)
              </button>
              <button class="btn btn-outline btn-sm" onclick="window.app.navigate('asistencia'); window.app.setAttendanceSubTab('incidents');" style="font-weight: 800; padding: 8px; font-size: 12px; color: #dc2626; border-color: #fca5a5;">
                [Alerta] Registrar Incidencia Conductual
              </button>
            </div>
          </div>

        </div>

        <!-- Tabla Resumen del Padrón de Aulas -->
        <div class="card">
          <div class="card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
            <h3 class="card-title" style="font-size: var(--font-size-base); margin: 0;">
              [Lista] Padrón Rápido de Aulas a Cargo del Auxiliar
            </h3>
            <button class="btn btn-navy btn-sm" onclick="window.app.navigate('asistencia'); window.app.setAttendanceSubTab('classroom');">
              Ver Asistencia por Aula Completa
            </button>
          </div>
          <div class="table-container">
            <table class="data-table" style="font-size: 12px;">
              <thead>
                <tr>
                  <th>Nivel</th>
                  <th>Grado</th>
                  <th>Aula / Ubicación</th>
                  <th>Tutor(a)</th>
                  <th>Hora de Inicio</th>
                  <th style="text-align: right;">Acción Rápida</th>
                </tr>
              </thead>
              <tbody>
                ${(state.gradesCatalog || initialData.gradesCatalog).map(g => `
                  <tr>
                    <td><span class="status-badge ${g.level === 'Inicial' ? 'status-pending' : g.level === 'Primaria' ? 'status-approved' : 'status-failed'}" style="font-size: 10px;">${g.level}</span></td>
                    <td><strong>${g.label}</strong></td>
                    <td><code>${g.classroom || 'Pabellón Central'}</code></td>
                    <td>${g.tutor || 'Docente Responsable'}</td>
                    <td><code>07:45 AM</code></td>
                    <td style="text-align: right;">
                      <button class="btn btn-sm btn-outline" onclick="window.app.navigate('asistencia'); window.app.onAttendanceGradeChange('${g.id}'); window.app.setAttendanceSubTab('classroom');" style="font-size: 11px; padding: 4px 8px;">
                        Ver Aula
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    `;
  },

  // =========================================================================
  // MÓDULO DE CONTROL Y REVISIÓN DE CUADERNOS (DOCENTE / PADRE)
  // =========================================================================
  renderNotebookQRControl(state) {
    const role = state.currentRole;
    const reviews = state.notebookReviews || initialData.notebookReviews;

    // --- VISTA EXCLUSIVA PARA EL PADRE DE FAMILIA: INFORME OFICIAL DE CUADERNOS ---
    if (role === "padre") {
      const parentUser = state.users.padre || initialData.users.padre;
      const parentName = parentUser.name || "Dra. Carmen Méndez";
      const studentName = "Sofía Méndez Flores";
      const studentGrade = "4to de Secundaria";
      const studentCode = "EST-2026-042";
      const studentTutor = "Prof. Roberto Silva";
      
      const defaultNotebooks = [
        { course: "[Formato] Matemática", teacher: "Prof. Roberto Silva", lastDate: "16/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Tareas completas al 100%, márgenes impecables y esquemas en orden." },
        { course: "[Cuaderno] Comunicación", teacher: "Miss María Daysi Reyes", lastDate: "15/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "17 (A)", remarks: "Análisis de textos y caligrafía óptima. Muy buen desarrollo." },
        { course: "🔬 Ciencia y Tecnología", teacher: "Miss Leyli Reyes", lastDate: "14/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "18 (AD)", remarks: "Prácticas experimentales ilustradas y fichas de laboratorio selladas." },
        { course: "🌎 Ciencias Sociales", teacher: "Prof. Javier Vega", lastDate: "12/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "16 (A)", remarks: "Mapas históricos y resúmenes de época bien estructurados." },
        { course: "🇬🇧 Inglés", teacher: "Miss Andrea Ramos", lastDate: "11/08/2026", status: "al_dia", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Vocabulario y ejercicios de gramática avanzados completos." },
        { course: "💻 EPT (Computación)", teacher: "Prof. Alex Lino", lastDate: "10/08/2026", status: "observado", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> OBSERVADO", score: "13 (B)", remarks: "Falta pegar y desarrollar la ficha de proyecto técnico N° 3. Presentar este viernes." }
      ];

      return `
        <div class="fade-in">
          <div class="card" style="margin-bottom: var(--space-6);">
            
            ${this.renderOfficialInstitutionalHeader("INFORME OFICIAL DE REVISIÓN Y SELLADO DE CUADERNOS POR QR", "SEGUIMIENTO ACADÉMICO BIMESTRAL 2026")}

            <div style="background: var(--bg-surface-subtle); border-radius: 8px; padding: 16px; margin: 16px 0; border: 1px solid var(--border-subtle); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
              <div>
                <span style="font-size: 11px; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Estudiante Matriculada:</span>
                <div style="font-size: 16px; font-weight: 900; color: var(--color-navy-900);">${studentName}</div>
                <span style="font-size: 12px; color: var(--color-red-600); font-weight: 700;">${studentGrade} • Código: ${studentCode}</span>
              </div>
              <div>
                <span style="font-size: 11px; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Apoderada Responsable:</span>
                <div style="font-size: 14px; font-weight: 700; color: var(--color-navy-900);">${parentName}</div>
                <span style="font-size: 12px; color: var(--text-muted);">Tutor de Aula: ${studentTutor}</span>
              </div>
              <div style="display: flex; gap: 8px; align-items: center; justify-content: flex-end;">
                <button class="btn btn-gold btn-sm" onclick="window.app.openPrintParentNotebookReportModal()" style="font-weight: 800; padding: 8px 16px;">
                  [Imprimir] Imprimir / Guardar PDF
                </button>
              </div>
            </div>

            <!-- Resumen Estadístico de Sellos -->
            <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-bottom: var(--space-6);">
              <div class="card metric-card" style="border-top: 4px solid #22c55e;">
                <span class="metric-title">Cuadernos al Día</span>
                <div class="metric-value highlight-green">5 / 6</div>
                <span class="metric-trend up" style="font-size: 11px;">83.3% Cumplimiento</span>
              </div>
              <div class="card metric-card" style="border-top: 4px solid #f59e0b;">
                <span class="metric-title">Observados / Incompletos</span>
                <div class="metric-value highlight-yellow">1</div>
                <span class="metric-trend" style="font-size: 11px; color: var(--color-yellow-600);">EPT (Falta ficha N°3)</span>
              </div>
              <div class="card metric-card" style="border-top: 4px solid var(--color-navy-600);">
                <span class="metric-title">Promedio de Cuadernos</span>
                <div class="metric-value highlight-navy">17.2 / 20</div>
                <span class="metric-trend up" style="font-size: 11px;">Logro Destacado (AD)</span>
              </div>
            </div>

            <!-- Detalle por Curso y Sellos Oficiales -->
            <div class="card-header" style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle);">
              <h3 class="card-title" style="font-size: var(--font-size-base);">
                [Cuaderno] Detalle de Cuadernos de ${studentName}
              </h3>
              <span class="status-badge status-approved">Actualizado al Día</span>
            </div>

            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Curso / Asignatura</th>
                    <th>Docente</th>
                    <th>Último Sello QR</th>
                    <th>Estado del Cuaderno</th>
                    <th>Calificación</th>
                    <th>Observación del Docente</th>
                  </tr>
                </thead>
                <tbody>
                  ${defaultNotebooks.map(nb => `
                    <tr style="${nb.status === 'observado' ? 'background: rgba(245,158,11,0.06);' : ''}">
                      <td><strong>${nb.course}</strong></td>
                      <td>${nb.teacher}</td>
                      <td>${nb.lastDate}</td>
                      <td><span class="digital-stamp ${nb.status === 'al_dia' ? 'stamp-al-dia' : 'stamp-observado'}">${nb.statusLabel}</span></td>
                      <td><strong style="color: ${nb.status === 'al_dia' ? '#15803d' : '#b45309'}; font-size: 14px;">${nb.score}</strong></td>
                      <td style="font-size: 12px; color: ${nb.status === 'al_dia' ? 'var(--text-secondary)' : '#92400e'}; ${nb.status === 'observado' ? 'font-weight: 600;' : ''}">${nb.remarks}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div style="margin-top: var(--space-4); padding: 12px; background: rgba(30,58,138,0.05); border-radius: 6px; font-size: 11px; color: var(--color-navy-800); display: flex; align-items: center; gap: 8px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span><strong>Nota para el Apoderado:</strong> Los sellos QR son colocados por los docentes en clase tras escanear el sticker físico del cuaderno. Todo cuaderno observado cuenta con 3 días hábiles para regularización.</span>
            </div>

          </div>
        </div>
      `;
    }

    // --- VISTA DOCENTE / AUXILIAR / COORDINACIÓN / ADMINISTRADOR ---
    const hasAdminEditPower = state.currentRole === "admin" || state.currentRole === "director" || (state.currentRole === "docente" && state.users.docente && state.users.docente.hasAdminPrivileges);
    const isDocenteOrAdmin = state.currentRole === "docente" || state.currentRole === "auxiliar" || state.currentRole === "admin" || state.currentRole === "director";

    const activeSubTab = state.notebookActiveSubTab || "scanner";
    const selectedGrade = state.selectedNotebookGrade || "4sec";
    const selectedStudentId = state.selectedNotebookStudent || "all";
    const selectedCourseFilter = state.selectedNotebookCourseFilter || "all";

    const enrollments = (window.appStore && typeof window.appStore.getEnrollments === "function") 
      ? window.appStore.getEnrollments() 
      : (state.enrollments || initialData.enrollments);

    const catalogGrades = state.gradesCatalog || initialData.gradesCatalog;
    const stickersData = (window.appStore && typeof window.appStore.getNotebookStickersData === "function")
      ? window.appStore.getNotebookStickersData(selectedGrade, selectedStudentId)
      : [];

    // Filtrar revisiones para el reporte
    let filteredReviews = reviews;
    if (selectedGrade && selectedGrade !== "all") {
      filteredReviews = filteredReviews.filter(r => (r.grade && r.grade.includes("4")) || r.gradeId === selectedGrade);
    }
    if (selectedCourseFilter && selectedCourseFilter !== "all") {
      filteredReviews = filteredReviews.filter(r => r.course === selectedCourseFilter);
    }

    const alDiaCount = filteredReviews.filter(r => r.status === "Al Día" || r.status === "Excelente" || (r.stampType && r.stampType.includes("al-dia"))).length;
    const observadosCount = filteredReviews.filter(r => r.status === "Observado" || r.status === "Incompleto" || (r.stampType && r.stampType.includes("observado"))).length;
    const noPresentoCount = filteredReviews.filter(r => r.status === "No Presentó" || (r.stampType && r.stampType.includes("no-presento"))).length;
    const totalReviews = filteredReviews.length;
    const pctAlDia = totalReviews > 0 ? Math.round((alDiaCount / totalReviews) * 100) : 100;

    return `
      <div class="fade-in">
        <div class="card" style="margin-bottom: var(--space-6);">
          
          <!-- Encabezado Principal del Módulo -->
          <div class="card-header" style="flex-wrap: wrap; gap: 12px; align-items: center;">
            <div>
              <div style="display:flex; align-items:center; gap: 8px; flex-wrap: wrap;">
                <h2 class="card-title" style="font-size: var(--font-size-xl);">[Cuaderno] Control y Sellado de Cuadernos Mediante QR</h2>
                <span class="status-badge status-approved" style="background:#10b981; color:white; font-weight:800;">CÁMARA BAJO DEMANDA</span>
                <span class="status-badge status-approved" style="background:#3b82f6; color:white; font-weight:800;">[WiFi] MULTI-DOCENTE EN VIVO</span>
              </div>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                I.E.P. "El Educador" • Escaneo óptico de stickers de cuadernos. <strong>Varios profesores pueden escanear simultáneamente desde sus celulares</strong> sin sobreescritura de datos.
              </p>
            </div>
            
            <!-- Barra de Sub-Pestañas y Botón Conectar Celular -->
            <div style="display:flex; gap: 8px; flex-wrap: wrap; align-items: center;">
              <button class="btn btn-outline btn-sm" onclick="window.app.openMultiDeviceConnectModal()" style="font-weight: 800; color: #1e3a8a; border-color: #3b82f6; background: #eff6ff; border-radius: 18px; padding: 6px 14px;">
                [Móvil] Conectar Celular
              </button>
              <button class="btn btn-sm ${activeSubTab === 'scanner' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setNotebookActiveSubTab('scanner')" style="font-weight: 800;">
                [Cámara] 1. Escáner en Vivo
              </button>
              <button class="btn btn-sm ${activeSubTab === 'stickers' ? 'btn-gold' : 'btn-outline'}" onclick="window.app.setNotebookActiveSubTab('stickers')" style="font-weight: 800;">
                [Imprimir] 2. Plancha de Stickers QR
              </button>
              <button class="btn btn-sm ${activeSubTab === 'report' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setNotebookActiveSubTab('report')" style="font-weight: 800;">
                [Reporte] 3. Informe de Supervisión
              </button>
            </div>
          </div>

          <!-- =================================================================== -->
          <!-- SUB-PESTAÑA 1: ESCÁNER EN VIVO Y CÁMARA PARA CUADERNOS -->
          <!-- =================================================================== -->
          ${activeSubTab === 'scanner' ? `
            
            <!-- Banner de Escaneo Protegido Bajo Demanda y Multi-Dispositivo -->
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 1.5px solid #93c5fd; border-radius: 12px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 26px;">[Seguridad]️</span>
                <div>
                  <div style="font-size: 13px; font-weight: 900; color: #1e3a8a;">
                    Modo Bajo Demanda & Concurrencia Multi-Dispositivo
                  </div>
                  <div style="font-size: 11.5px; color: #334155;">
                    La cámara solo se activa cuando presionas <strong>Encender Cámara</strong> para ahorrar batería y evitar lecturas accidentales. Los sellos de todos los docentes se combinan en tiempo real.
                  </div>
                </div>
              </div>
              <button class="btn btn-navy btn-sm" onclick="window.app.openMultiDeviceConnectModal()" style="font-weight: 800; border-radius: 16px; font-size: 11.5px; box-shadow: 0 4px 10px rgba(15,23,42,0.15);">
                📲 Abrir QR para mi Celular
              </button>
            </div>

            <div class="dashboard-grid" style="margin-bottom: var(--space-6); align-items: stretch;">
              
              <!-- Visor de Cámara Real para Celulares / PC -->
              <div class="card" style="background: var(--color-navy-950); color: white; border: 2px solid var(--color-yellow-500); padding: var(--space-4); display:flex; flex-direction:column; align-items:center;">
                <div style="display:flex; justify-content:space-between; width:100%; align-items:center; margin-bottom: 8px;">
                  <span style="font-size:12px; font-weight:800; color:var(--color-yellow-400); letter-spacing:0.05em;">
                    📸 ESCÁNER POR CÁMARA (CELULAR / WEBCAM)
                  </span>
                  <span id="camera-status-tag" class="status-badge status-pending" style="font-size:10px;">
                    Cámara Apagada (En Espera)
                  </span>
                </div>

                <!-- Contenedor del Feed de Video de Html5Qrcode -->
                <div id="qr-live-camera-feed" style="width: 100%; max-width: 320px; min-height: 240px; background: #000; border-radius: 8px; overflow: hidden; display: flex; align-items: center; justify-content: center; position: relative; border: 1px dashed rgba(255,255,255,0.2);">
                  <div id="camera-placeholder-msg" style="text-align: center; padding: 20px; color: rgba(255,255,255,0.7);">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 8px; display:block; color: var(--color-yellow-400);"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                    <span style="font-size: 12px; font-weight: 700;">Presiona 'Encender Cámara' para iniciar el escaneo</span>
                  </div>
                </div>

                <!-- Botones de Control de Cámara -->
                <div style="display: flex; gap: 8px; margin-top: 12px; width: 100%; justify-content: center; flex-wrap: wrap;">
                  <button id="btn-start-camera" class="btn btn-gold" onclick="window.app.startLiveCameraScanner()" style="font-weight:800; font-size:13px; border-radius: 20px; padding: 10px 20px;">
                    [Cámara] Encender Cámara
                  </button>
                  <button id="btn-stop-camera" class="btn btn-outline" onclick="window.app.stopLiveCameraScanner()" style="display:none; color:#fca5a5; border-color:rgba(220,38,38,0.4); border-radius: 20px;">
                    ⏹️ Apagar Cámara
                  </button>
                </div>
              </div>

              <!-- Atajos de Búsqueda Rápida / Simulación con Alumno + Curso + Docente -->
              <div class="card" style="background-color: var(--bg-surface-subtle); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
                    <h4 style="margin:0; color: var(--color-navy-900); font-weight: 800;">
                      ⚡ Escaneo Rápido de Cuadernos (Demo Directo)
                    </h4>
                    <span class="status-badge status-approved" style="font-size:10px;">Exclusivo por Alumno y Curso</span>
                  </div>
                  <p style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 12px;">
                    Al escanear el QR, el sistema identifica automáticamente al <strong>Alumno, Grado, Curso y Profesor Titular</strong>:
                  </p>

                  <div style="display: flex; flex-direction:column; gap: 6px; margin-bottom: 12px;">
                    <button class="btn btn-outline btn-sm" onclick="window.app.simulateQRScan('QR-NB|EST-2026-042|Sofía Méndez Flores|4° de Secundaria|Matemática Avanzada (Álgebra / Geometría)|Prof. Roberto Silva')" style="justify-content:space-between; display:flex; text-align:left; background: #ffffff; border-radius: 10px; padding: 8px 12px;">
                      <div>
                        <strong style="color:var(--color-navy-900); font-size: 12px;">[Formato] Sofía Méndez Flores</strong>
                        <div style="font-size: 10.5px; color: #047857;">Matemática Avanzada • Docente: Prof. Roberto Silva</div>
                      </div>
                      <span class="status-badge status-approved" style="font-size: 10px;">Evaluar</span>
                    </button>

                    <button class="btn btn-outline btn-sm" onclick="window.app.simulateQRScan('QR-NB|EST-2026-042|Sofía Méndez Flores|4° de Secundaria|Comunicación & Literatura|Miss María Daysi Reyes Milla')" style="justify-content:space-between; display:flex; text-align:left; background: #ffffff; border-radius: 10px; padding: 8px 12px;">
                      <div>
                        <strong style="color:var(--color-navy-900); font-size: 12px;">[Cuaderno] Sofía Méndez Flores</strong>
                        <div style="font-size: 10.5px; color: #1e3a8a;">Comunicación & Literatura • Docente: Miss María Daysi Reyes</div>
                      </div>
                      <span class="status-badge status-approved" style="font-size: 10px;">Evaluar</span>
                    </button>

                    <button class="btn btn-outline btn-sm" onclick="window.app.simulateQRScan('QR-NB|EST-2026-055|Gael Alessandro Cáceres|4° de Secundaria|Ciencia y Tecnología (Física / Química)|Miss Leyli Graciela Reyes Cerquen')" style="justify-content:space-between; display:flex; text-align:left; background: #ffffff; border-radius: 10px; padding: 8px 12px;">
                      <div>
                        <strong style="color:var(--color-navy-900); font-size: 12px;">🔬 Gael Alessandro Cáceres</strong>
                        <div style="font-size: 10.5px; color: #b45309;">Ciencia y Tecnología • Docente: Miss Leyli Reyes</div>
                      </div>
                      <span class="status-badge status-approved" style="font-size: 10px;">Evaluar</span>
                    </button>

                    <button class="btn btn-outline btn-sm" onclick="window.app.simulateQRScan('QR-NB|EST-2026-089|Marina del Carmen Albújar|4° de Secundaria|Ciencias Sociales & Historia|Prof. Javier Vega')" style="justify-content:space-between; display:flex; text-align:left; background: #ffffff; border-radius: 10px; padding: 8px 12px;">
                      <div>
                        <strong style="color:var(--color-navy-900); font-size: 12px;">🌎 Marina del Carmen Albújar</strong>
                        <div style="font-size: 10.5px; color: #6b21a8;">Ciencias Sociales • Docente: Prof. Javier Vega</div>
                      </div>
                      <span class="status-badge status-approved" style="font-size: 10px;">Evaluar</span>
                    </button>
                  </div>
                </div>

                <div style="border-top: 1px solid #e2e8f0; padding-top: 10px;">
                  <label class="form-label" style="font-size: 11px; font-weight: 700;">Ingreso Manual de Código QR:</label>
                  <div style="display:flex; gap: 8px;">
                    <input type="text" id="manual-qr-input" class="form-control" value="QR-NB|EST-2026-042|Sofía Méndez Flores|4° de Secundaria|Matemática Avanzada (Álgebra / Geometría)|Prof. Roberto Silva" style="font-size: 11.5px; border-radius: 16px;" />
                    <button class="btn btn-navy btn-sm" onclick="window.app.simulateQRScan(document.getElementById('manual-qr-input').value)" style="border-radius: 16px; font-weight: 800;">
                      Revisar
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <!-- Tabla de Revisiones Recientes del Día -->
            <div class="card-header" style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle);">
              <h3 class="card-title" style="font-size: var(--font-size-base);">
                📑 Últimos Cuadernos Sellados en este Turno
              </h3>
              <span class="status-badge status-approved">${reviews.length} Evaluados</span>
            </div>

            <div class="table-container">
              <table class="data-table" style="font-size: 12.5px;">
                <thead>
                  <tr>
                    <th>Fecha / Hora</th>
                    <th>Estudiante</th>
                    <th>Grado</th>
                    <th>Curso / Asignatura</th>
                    <th>Docente Titular</th>
                    <th>Evaluado Por</th>
                    <th>Sello Digital</th>
                    <th>Nota</th>
                    <th>Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  ${reviews.map(r => `
                    <tr>
                      <td><code>${r.date} ${r.time || ''}</code></td>
                      <td><strong>${r.studentName}</strong></td>
                      <td><span class="status-badge status-pending" style="font-size: 10px;">${r.grade}</span></td>
                      <td><strong>${r.course}</strong></td>
                      <td>${r.teacher || 'Prof. Roberto Silva'}</td>
                      <td><span style="color:#047857; font-weight:700; font-size:11px;">${r.evaluator || 'Auxiliar de Educación'}</span></td>
                      <td><span class="digital-stamp ${r.stampType}">${r.stampText}</span></td>
                      <td><strong style="font-size:14px; color:${r.score >= 15 ? '#15803d' : '#b45309'};">${r.score}</strong></td>
                      <td style="font-size:11.5px; color:var(--text-secondary); max-width: 200px;">${r.teacherRemarks}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : ''}

          <!-- =================================================================== -->
          <!-- SUB-PESTAÑA 2: GENERADOR DE STICKERS QR PARA CUADERNOS -->
          <!-- =================================================================== -->
          ${activeSubTab === 'stickers' ? `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap: 12px; margin-bottom: 16px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <h3 style="font-size: 16px; font-weight: 800; color: var(--color-navy-900); margin: 0;">
                      [Imprimir] Planchas de Stickers QR Exclusivos por Estudiante y Curso
                    </h3>
                    <span class="status-badge status-approved" style="font-size: 10.5px; font-weight: 800;">Boleta Oficial 2026</span>
                  </div>
                  <p style="font-size: 12px; color: var(--text-secondary); margin: 4px 0 0 0;">
                    Genera stickers individuales o la <strong>plancha completa con los 22 cursos curriculares</strong> de la boleta de notas.
                  </p>
                </div>
                
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <!-- BOTÓN PRINCIPAL SOLICITADO: GENERAR QR AUTOMÁTICO POR ESTUDIANTE CON TODOS LOS CURSOS DE LA BOLETA -->
                  <button class="btn btn-gold btn-sm" onclick="window.app.openStudentFullBoletaStickersModal('${selectedStudentId !== 'all' ? selectedStudentId : 'EST-2026-042'}')" style="font-weight: 900; padding: 10px 18px; border-radius: 20px; font-size: 13px; box-shadow: 0 4px 14px rgba(245,158,11,0.4); background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #0b132b; display: flex; align-items: center; gap: 6px;">
                    <span>⚡</span> <span>Generar QR por Estudiante (Todos los Cursos de Boleta)</span>
                  </button>
                  <button class="btn btn-navy btn-sm" onclick="window.app.printNotebookStickerSheet()" style="font-weight: 800; padding: 10px 16px; border-radius: 20px; font-size: 12.5px;">
                    [Imprimir] Imprimir Selección A4 (15 QR / Hoja)
                  </button>
                </div>
              </div>

              <!-- Filtros para la Generación de Stickers y Selección de Formato -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; background: #ffffff; padding: 12px; border-radius: 10px; border: 1px solid #cbd5e1;">
                <div class="form-group" style="margin:0;">
                  <label class="form-label" style="font-size: 11px;">1. Seleccionar Grado Escolar:</label>
                  <select id="sticker-grade-select" class="form-control" onchange="window.app.onNotebookGradeFilterChange(this.value)" style="font-size: 12.5px;">
                    ${catalogGrades.map(g => `<option value="${g.id}" ${selectedGrade === g.id ? 'selected' : ''}>${g.label} (${g.level})</option>`).join('')}
                  </select>
                </div>

                <div class="form-group" style="margin:0;">
                  <label class="form-label" style="font-size: 11px;">2. Filtrar por Estudiante Específico:</label>
                  <select id="sticker-student-select" class="form-control" onchange="window.app.onNotebookStudentFilterChange(this.value)" style="font-size: 12.5px;">
                    <option value="all">-- Todos los Alumnos del Grado --</option>
                    ${enrollments.filter(e => e.gradeId === selectedGrade || !selectedGrade).map(e => `
                      <option value="${e.studentCode || e.dni}" ${selectedStudentId === (e.studentCode || e.dni) ? 'selected' : ''}>
                        ${e.studentName} (${e.studentCode || e.dni})
                      </option>
                    `).join('')}
                  </select>
                </div>

                <div class="form-group" style="margin:0;">
                  <label class="form-label" style="font-size: 11px; font-weight: 700; color: #1e3a8a;">3. Distribución por Hoja A4:</label>
                  <select id="sticker-layout-select" class="form-control" style="font-size: 12.5px; font-weight: 800; background: #eff6ff; border: 1.5px solid #3b82f6; color: #1e3a8a;">
                    <option value="3x5" selected>[Fijado] 3 × 5 (15 QR por Hoja)</option>
                    <option value="3x4">[Fijado] 3 × 4 (12 QR por Hoja)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Grilla de Stickers de Cuadernos -->
            <div id="printable-stickers-sheet" class="qr-sticker-sheet" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
              ${stickersData.map(st => {
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(st.qrPayload)}`;
                const safePayload = st.qrPayload.replace(/'/g, "\\'");
                return `
                  <div class="qr-notebook-sticker" style="border: 2px solid #0f172a; border-radius: 10px; padding: 12px; background: #ffffff; display: flex; gap: 12px; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.06); position: relative; border-left: 6px solid #f59e0b;">
                    <div style="flex-shrink: 0; text-align: center;">
                      <img src="${qrUrl}" alt="QR Cuaderno" style="width: 75px; height: 75px; display: block; border: 1px solid #cbd5e1; border-radius: 6px; padding: 2px;" />
                      <span style="font-size: 8.5px; font-weight: 800; color: #475569; display: block; margin-top: 2px;"><code>${st.qrCode}</code></span>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 2px;">
                      <span style="font-size: 8.5px; font-weight: 900; color: #dc2626; letter-spacing: 0.05em; text-transform: uppercase;">
                        ★ I.E.P. EL EDUCADOR • SJL
                      </span>
                      <strong style="font-size: 13px; color: #0f172a; line-height: 1.2;">
                        ${st.course}
                      </strong>
                      <div style="font-size: 11px; font-weight: 700; color: #1e3a8a; margin-top: 2px;">
                        [Usuario] ${st.studentName}
                      </div>
                      <div style="font-size: 10px; color: #475569;">
                        [Expediente] ${st.grade} • Código: ${st.studentCode}
                      </div>
                      <div style="margin-top: 6px;">
                        <button class="btn btn-outline btn-sm" onclick="window.app.simulateQRScan('${safePayload}')" style="font-size: 10px; padding: 3px 8px; border-radius: 12px; font-weight: 800;">
                          [Cámara] Probar Escaneo
                        </button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          ` : ''}

          <!-- =================================================================== -->
          <!-- SUB-PESTAÑA 3: INFORME DE SUPERVISIÓN Y SELLADO DE CUADERNOS -->
          <!-- =================================================================== -->
          ${activeSubTab === 'report' ? `
            <div style="margin-bottom: 20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap: 12px; margin-bottom: 16px;">
                <div>
                  <h3 style="font-size: 16px; font-weight: 800; color: var(--color-navy-900); margin: 0 0 4px 0;">
                    [Reporte] Informe General de Cuadernos Revisados & Sellos Otorgados
                  </h3>
                  <p style="font-size: 12px; color: var(--text-secondary); margin: 0;">
                    Consolidado de cumplimiento de tareas, cuadernos observados y sellos otorgados por el Auxiliar y Docentes.
                  </p>
                </div>
                
                <button class="btn btn-navy btn-sm" onclick="window.app.printNotebookGeneralReport()" style="font-weight: 800; padding: 8px 16px; border-radius: 18px;">
                  [Imprimir] Imprimir Informe Oficial PDF
                </button>
              </div>

              <!-- Tarjetas de Métricas del Informe -->
              <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); margin-bottom: 16px;">
                <div class="card metric-card" style="border-top: 4px solid #10b981;">
                  <span class="metric-title">Cuadernos al Día</span>
                  <div class="metric-value highlight-green">${alDiaCount}</div>
                  <span class="metric-trend up" style="font-size: 11px;">${pctAlDia}% de Cumplimiento</span>
                </div>
                <div class="card metric-card" style="border-top: 4px solid #f59e0b;">
                  <span class="metric-title">Cuadernos Observados</span>
                  <div class="metric-value highlight-yellow">${observadosCount}</div>
                  <span class="metric-trend" style="font-size: 11px; color: #b45309;">Requieren Regularización</span>
                </div>
                <div class="card metric-card" style="border-top: 4px solid #ef4444;">
                  <span class="metric-title">No Presentados</span>
                  <div class="metric-value highlight-red">${noPresentoCount}</div>
                  <span class="metric-trend" style="font-size: 11px; color: #dc2626;">Amonestación / Citación</span>
                </div>
                <div class="card metric-card" style="border-top: 4px solid var(--color-navy-800);">
                  <span class="metric-title">Total Evaluaciones</span>
                  <div class="metric-value highlight-navy">${totalReviews}</div>
                  <span class="metric-trend" style="font-size: 11px;">Registros en Servidor</span>
                </div>
              </div>

              <!-- Filtro de Búsqueda en el Informe -->
              <div style="display:flex; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 200px;">
                  <label class="form-label" style="font-size: 11px;">Filtrar por Asignatura:</label>
                  <select class="form-control" onchange="window.app.onNotebookCourseFilterChange(this.value)" style="font-size: 12px;">
                    <option value="all">-- Todos los Cursos --</option>
                    <option value="Matemática Avanzada" ${selectedCourseFilter === 'Matemática Avanzada' ? 'selected' : ''}>Matemática Avanzada (Prof. Roberto Silva)</option>
                    <option value="Comunicación & Literatura" ${selectedCourseFilter === 'Comunicación & Literatura' ? 'selected' : ''}>Comunicación & Literatura (Miss María Daysi Reyes)</option>
                    <option value="Ciencia y Tecnología" ${selectedCourseFilter === 'Ciencia y Tecnología' ? 'selected' : ''}>Ciencia y Tecnología (Miss Leyli Reyes)</option>
                    <option value="Ciencias Sociales" ${selectedCourseFilter === 'Ciencias Sociales' ? 'selected' : ''}>Ciencias Sociales (Prof. Javier Vega)</option>
                    <option value="Inglés Institucional" ${selectedCourseFilter === 'Inglés Institucional' ? 'selected' : ''}>Inglés Institucional (Miss Andrea Ramos)</option>
                    <option value="EPT (Computación)" ${selectedCourseFilter === 'EPT (Computación)' ? 'selected' : ''}>EPT (Computación) (Prof. Fernando Rojas)</option>
                  </select>
                </div>
              </div>

              <!-- Matriz Resumen de Cuadernos por Alumno del Aula -->
              <div class="card" style="margin-bottom: 16px; background: #ffffff; border: 1px solid #cbd5e1; padding: 14px; border-radius: 10px;">
                <h4 style="font-size: 13px; font-weight: 800; color: var(--color-navy-900); margin: 0 0 10px 0;">
                  [Colegio] Matriz de Estado de Cuadernos por Estudiante (4° de Secundaria "A")
                </h4>
                <div class="table-container">
                  <table class="data-table" style="font-size: 11.5px;">
                    <thead>
                      <tr>
                        <th>Estudiante</th>
                        <th>Matemática</th>
                        <th>Comunicación</th>
                        <th>Ciencias</th>
                        <th>Sociales</th>
                        <th>Inglés</th>
                        <th>Cómputo</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${enrollments.slice(0, 6).map(st => {
                        const getCourseStatusBadge = (crsKeyword) => {
                          const rev = reviews.find(r => r.studentName === st.studentName && r.course.toLowerCase().includes(crsKeyword.toLowerCase()));
                          if (rev) {
                            return `<span class="digital-stamp ${rev.stampType}" style="font-size: 9.5px; padding: 2px 6px;">${rev.status} (${rev.score})</span>`;
                          }
                          return `<span style="color: #94a3b8; font-size: 10px;">⚪ Pendiente</span>`;
                        };

                        return `
                          <tr>
                            <td><strong>${st.studentName}</strong></td>
                            <td>${getCourseStatusBadge("mat")}</td>
                            <td>${getCourseStatusBadge("com")}</td>
                            <td>${getCourseStatusBadge("cien")}</td>
                            <td>${getCourseStatusBadge("soc")}</td>
                            <td>${getCourseStatusBadge("ing")}</td>
                            <td>${getCourseStatusBadge("comp")}</td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Tabla del Informe Consolidado -->
              <div class="table-container">
                <table class="data-table" style="font-size: 12px;">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Estudiante</th>
                      <th>Grado</th>
                      <th>Curso</th>
                      <th>Docente Asignado</th>
                      <th>Evaluador</th>
                      <th>Estado / Sello</th>
                      <th>Nota</th>
                      <th>Observaciones</th>
                      <th style="text-align: right;">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${filteredReviews.map(r => `
                      <tr>
                        <td><code>${r.date}</code></td>
                        <td><strong>${r.studentName}</strong></td>
                        <td><span class="status-badge status-pending" style="font-size: 10px;">${r.grade}</span></td>
                        <td><strong>${r.course}</strong></td>
                        <td>${r.teacher || 'Prof. Titular'}</td>
                        <td><span style="color:#047857; font-weight:700;">${r.evaluator || 'Auxiliar'}</span></td>
                        <td><span class="digital-stamp ${r.stampType}">${r.stampText}</span></td>
                        <td><strong style="font-size:14px; color:${r.score >= 15 ? '#15803d' : '#b45309'};">${r.score}</strong></td>
                        <td style="font-size:11.5px; color:var(--text-secondary);">${r.teacherRemarks}</td>
                        <td style="text-align: right;">
                          <button class="btn btn-outline btn-sm" onclick="window.app.openEditReviewModal('${r.id}')" style="font-size: 11px; padding: 4px 8px;">
                            ✏️ Editar
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

            </div>
          ` : ''}

        </div>
      </div>
    `;
  },

  // Base de Datos
  renderDatabaseManagement(state) {
    const usersCount = (state.systemUsers || initialData.systemUsers).length;
    const enrollmentsCount = (state.enrollments || initialData.enrollments).length;
    const reviewsCount = (state.notebookReviews || initialData.notebookReviews).length;
    const coursesCount = (state.courses || initialData.courses).length;
    const announcementsCount = (state.announcements || initialData.announcements).length;

    return `
      <div class="fade-in">
        <div class="card" style="margin-bottom: var(--space-6);">
          <div class="card-header">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h2 class="card-title" style="font-size: var(--font-size-xl);">🗄️ Motor de Base de Datos y Persistencia - I.E.P. "El Educador"</h2>
                <span class="status-badge status-approved"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Motor Activo (db.json)</span>
              </div>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                S.J.L. • UGEL 05 • Sincronización multi-dispositivo en tiempo real y copias de seguridad garantizadas.
              </p>
            </div>
            <div style="display: flex; gap: var(--space-2);">
              <a href="/api/backup" download="backup_colegio_educador.json" class="btn btn-navy btn-sm" style="text-decoration:none;">
                [Descargar] Descargar Backup (.JSON)
              </a>
              <button class="btn btn-gold btn-sm" onclick="window.app.showSQLSchemaModal()">
                [Documento] Ver Esquema SQL (.SQL)
              </button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
            <div class="card" style="padding: var(--space-4); border-left: 4px solid var(--color-green-500); background: #f8faf9;">
              <span style="font-size: 11px; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Estado de Sincronización</span>
              <div style="font-size: 18px; font-weight: 800; color: var(--color-green-600); margin-top: 2px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Multi-Dispositivo OK</div>
              <span style="font-size: 10px; color: var(--text-muted);">Sincronización en vivo</span>
            </div>

            <div class="card" style="padding: var(--space-4); border-left: 4px solid var(--color-navy-700); background: var(--bg-surface-subtle);">
              <span style="font-size: 11px; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Almacenamiento en Disco</span>
              <div style="font-size: 18px; font-weight: 800; color: var(--color-navy-900); margin-top: 2px;">db.json (Permanente)</div>
              <span style="font-size: 10px; color: var(--text-muted);">Servidor I.E.P. El Educador</span>
            </div>

            <div class="card" style="padding: var(--space-4); border-left: 4px solid var(--color-red-500); background: #fffdfd;">
              <span style="font-size: 11px; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Total Registros en Tablas</span>
              <div style="font-size: 18px; font-weight: 800; color: var(--color-red-600); margin-top: 2px;">${usersCount + enrollmentsCount + reviewsCount + coursesCount + announcementsCount} Registros</div>
              <span style="font-size: 10px; color: var(--text-muted);">Tablas relacionales activas</span>
            </div>
          </div>

          <div class="table-container">
            <table class="data-table">
              <thead><tr><th>Tabla</th><th>Descripción</th><th>Persistencia</th><th style="text-align:center;">Registros</th><th>Estado</th></tr></thead>
              <tbody>
                <tr><td><code>tb_usuarios</code></td><td>Docentes, Personal, Alumnos y Padres</td><td>Servidor (db.json)</td><td style="text-align:center;"><strong>${usersCount}</strong></td><td><span class="status-badge status-approved">Al Día</span></td></tr>
                <tr><td><code>tb_matriculas</code></td><td>Expedientes y Seguimiento UGEL 05</td><td>Servidor (db.json)</td><td style="text-align:center;"><strong>${enrollmentsCount}</strong></td><td><span class="status-badge status-approved">Al Día</span></td></tr>
                <tr><td><code>tb_cuadernos_qr</code></td><td>Revisiones y sellos ópticos QR</td><td>Servidor (db.json)</td><td style="text-align:center;"><strong>${reviewsCount}</strong></td><td><span class="status-badge status-approved">Al Día</span></td></tr>
                <tr><td><code>tb_calificaciones</code></td><td>Notas y Actas Oficiales 2026</td><td>Servidor (db.json)</td><td style="text-align:center;"><strong>${coursesCount}</strong></td><td><span class="status-badge status-approved">Al Día</span></td></tr>
                <tr><td><code>tb_pensiones</code></td><td>Recaudación acumulada (S/ 25,130.00)</td><td>Servidor (db.json)</td><td style="text-align:center;"><strong>${state.payments.length}</strong></td><td><span class="status-badge status-approved">Al Día</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // Gestión Integral de Usuarios, Perfiles y Configuración de Pestañas (Administrador)
  renderUserAndEnrollmentManagement(state) {
    const allUsers = state.systemUsers || initialData.systemUsers || [];
    const enrollments = state.enrollments || initialData.enrollments || [];
    const activeTab = state.usersManagementTab || "users";
    const roleFilter = state.usersRoleFilter || "all";
    const navConfigs = state.navigationTabsConfig || initialData.navigationTabsConfig || {};

    // Filtrar usuarios por rol
    const filteredUsers = allUsers.filter(u => {
      if (roleFilter === "all") return true;
      if (roleFilter === "directivo") return u.role === "Directivo" || u.role === "Administrador" || u.role === "Director";
      if (roleFilter === "docente") return u.role === "Docente" || u.role === "Profesor";
      if (roleFilter === "estudiante") return u.role === "Estudiante" || u.role === "Alumno";
      if (roleFilter === "apoderado") return u.role === "Apoderado" || u.role === "Padre";
      return true;
    });

    const directivosCount = allUsers.filter(u => u.role === "Directivo" || u.role === "Administrador" || u.role === "Director").length;
    const docentesCount = allUsers.filter(u => u.role === "Docente" || u.role === "Profesor").length;
    const estudiantesCount = allUsers.filter(u => u.role === "Estudiante" || u.role === "Alumno").length;
    const apoderadosCount = allUsers.filter(u => u.role === "Apoderado" || u.role === "Padre").length;

    // Rol activo para el editor de pestañas
    const targetNavRole = state.selectedNavConfigRole || "docente";
    const currentRoleTabs = navConfigs[targetNavRole] || initialData.navigationTabsConfig[targetNavRole] || [];

    return `
      <div class="fade-in">
        <div class="card" style="margin-bottom: var(--space-6);">
          
          <!-- Encabezado Principal del Módulo -->
          <div class="card-header" style="flex-wrap: wrap; gap: 12px; border-bottom: 2px solid #e2e8f0; padding-bottom: 16px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <h2 class="card-title" style="font-size: var(--font-size-xl); margin: 0; color: var(--color-navy-900);">
                  👥 Centro de Control de Cuentas, Perfiles & Pestañas
                </h2>
                <span class="status-badge status-approved" style="background: #e0e7ff; color: #3730a3; font-weight: 800;">
                  ★ Módulo Exclusivo Administrador
                </span>
              </div>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                I.E.P. "El Educador" • UGEL 05 • Creación de cuentas institucionales, asignación de roles y control de menús visibles.
              </p>
            </div>

            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn btn-navy btn-sm" onclick="window.app.openCreateUserModal()" style="font-weight: 800; display: flex; align-items: center; gap: 6px;">
                <span>➕</span> Crear Nuevo Usuario
              </button>
              <button class="btn btn-gold btn-sm" onclick="window.app.openCreateEnrollmentModal()" style="font-weight: 800; display: flex; align-items: center; gap: 6px;">
                <span>📝</span> Nueva Matrícula
              </button>
            </div>
          </div>

          <!-- Métricas Resumen de Cuentas -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin: 16px 0;">
            <div class="card" style="padding: 10px 14px; border-left: 4px solid var(--color-navy-700); background: #f8fafc;">
              <span style="font-size: 10.5px; font-weight: 700; color: #64748b; text-transform: uppercase;">Total Usuarios</span>
              <div style="font-size: 20px; font-weight: 900; color: var(--color-navy-950); margin-top: 2px;">${allUsers.length}</div>
            </div>
            <div class="card" style="padding: 10px 14px; border-left: 4px solid #8b5cf6; background: #faf5ff;">
              <span style="font-size: 10.5px; font-weight: 700; color: #6b21a8; text-transform: uppercase;">Directivos</span>
              <div style="font-size: 20px; font-weight: 900; color: #581c87; margin-top: 2px;">${directivosCount}</div>
            </div>
            <div class="card" style="padding: 10px 14px; border-left: 4px solid #3b82f6; background: #eff6ff;">
              <span style="font-size: 10.5px; font-weight: 700; color: #1e40af; text-transform: uppercase;">Docentes</span>
              <div style="font-size: 20px; font-weight: 900; color: #1e3a8a; margin-top: 2px;">${docentesCount}</div>
            </div>
            <div class="card" style="padding: 10px 14px; border-left: 4px solid #10b981; background: #ecfdf5;">
              <span style="font-size: 10.5px; font-weight: 700; color: #047857; text-transform: uppercase;">Estudiantes</span>
              <div style="font-size: 20px; font-weight: 900; color: #065f46; margin-top: 2px;">${estudiantesCount}</div>
            </div>
            <div class="card" style="padding: 10px 14px; border-left: 4px solid #f59e0b; background: #fffbeb;">
              <span style="font-size: 10.5px; font-weight: 700; color: #b45309; text-transform: uppercase;">Apoderados</span>
              <div style="font-size: 20px; font-weight: 900; color: #92400e; margin-top: 2px;">${apoderadosCount}</div>
            </div>
          </div>

          <!-- Pestañas de Navegación del Módulo -->
          <div style="display: flex; gap: 8px; border-bottom: 2px solid #e2e8f0; margin-bottom: 16px; flex-wrap: wrap;">
            <button class="btn ${activeTab === 'users' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserManagementTab('users')" style="font-weight: 800; font-size: 12.5px;">
              👥 Directorio de Cuentas (${allUsers.length})
            </button>
            <button class="btn ${activeTab === 'tabs' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserManagementTab('tabs')" style="font-weight: 800; font-size: 12.5px;">
              ⚙️ Editor de Pestañas & Menús por Perfil
            </button>
            <button class="btn ${activeTab === 'enrollments' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserManagementTab('enrollments')" style="font-weight: 800; font-size: 12.5px;">
              📝 Expedientes de Matrícula UGEL 05 (${enrollments.length})
            </button>
          </div>

          <!-- =========================================================================
               VISTA 1: DIRECTORIO DE CUENTAS Y PERFILES
               ========================================================================= -->
          ${activeTab === 'users' ? `
            <div>
              <!-- Barra de Filtros por Rol y Búsqueda -->
              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
                  <span style="font-size: 12px; font-weight: 800; color: #334155;">Filtrar Rol:</span>
                  <button class="btn btn-sm ${roleFilter === 'all' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserRoleFilter('all')">Todos (${allUsers.length})</button>
                  <button class="btn btn-sm ${roleFilter === 'directivo' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserRoleFilter('directivo')">Directivos (${directivosCount})</button>
                  <button class="btn btn-sm ${roleFilter === 'docente' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserRoleFilter('docente')">Docentes (${docentesCount})</button>
                  <button class="btn btn-sm ${roleFilter === 'estudiante' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserRoleFilter('estudiante')">Estudiantes (${estudiantesCount})</button>
                  <button class="btn btn-sm ${roleFilter === 'apoderado' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setUserRoleFilter('apoderado')">Apoderados (${apoderadosCount})</button>
                </div>

                <div style="display: flex; align-items: center; gap: 8px;">
                  <input type="text" id="user-search-input" class="form-control" placeholder="[Buscar] Buscar por nombre, usuario, DNI..." oninput="window.app.onUserSearchFilter(this.value)" style="font-size: 12px; padding: 5px 12px; width: 220px;" />
                </div>
              </div>

              <!-- Tabla de Usuarios Registrados -->
              <div class="table-container">
                <table class="data-table" id="users-table-list">
                  <thead>
                    <tr>
                      <th style="width: 140px;">Código / Usuario</th>
                      <th>Nombre & Correo</th>
                      <th>Perfil / Rol</th>
                      <th>Contraseña</th>
                      <th>Especialidad / Grado / Vínculo</th>
                      <th>Privilegios</th>
                      <th style="text-align: center; width: 140px;">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${filteredUsers.map(u => {
                      const isDocente = u.role === "Docente" || u.role === "Profesor";
                      const isDirectivo = u.role === "Directivo" || u.role === "Administrador" || u.role === "Director";
                      const isEstudiante = u.role === "Estudiante" || u.role === "Alumno";
                      const isApoderado = u.role === "Apoderado" || u.role === "Padre";
                      
                      const roleBadgeClass = isDirectivo ? "background: #f3e8ff; color: #6b21a8; border: 1px solid #d8b4fe;" :
                                             isDocente ? "background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe;" :
                                             isEstudiante ? "background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;" :
                                             "background: #fffbeb; color: #b45309; border: 1px solid #fde68a;";
                      
                      const roleEmoji = isDirectivo ? "[Seguridad]️" : isDocente ? "👨‍[Colegio]" : isEstudiante ? "🎒" : "👨‍👩‍👧";

                      return `
                        <tr>
                          <td>
                            <code style="font-weight: 800; color: var(--color-navy-900);">${u.code || u.id}</code><br>
                            <span style="font-size: 11px; font-weight: 700; color: #2563eb;">@${u.username || 'usuario'}</span>
                          </td>
                          <td>
                            <strong>${u.name}</strong><br>
                            <span style="font-size: 11px; color: var(--text-secondary);">${u.email || '--'}</span>
                          </td>
                          <td>
                            <span class="status-badge" style="${roleBadgeClass} font-size: 11px; font-weight: 800; padding: 3px 8px;">
                              ${roleEmoji} ${u.role}
                            </span>
                          </td>
                          <td>
                            <div style="display: flex; align-items: center; gap: 6px;">
                              <code id="pass-field-${u.id}" style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 11.5px; color: #0b132b;">${u.password || 'educador2026'}</code>
                            </div>
                          </td>
                          <td>
                            <div style="font-size: 12px; line-height: 1.3;">
                              <strong>${u.detail || (isDocente ? u.subject : isEstudiante ? u.gradeLevel : isApoderado ? u.studentName : '--') || '--'}</strong>
                              ${u.weeklyHours ? `<br><span style="font-size: 10.5px; color: #64748b;">⏱️ ${u.weeklyHours}</span>` : ''}
                              ${u.dni ? `<br><span style="font-size: 10.5px; color: #64748b;">🆔 DNI: ${u.dni}</span>` : ''}
                            </div>
                          </td>
                          <td>
                            ${isDocente || isDirectivo ? `
                              <span class="status-badge ${u.hasAdminPrivilege ? 'status-approved' : 'status-pending'}" style="${u.hasAdminPrivilege ? 'background:#fef08a; color:#854d0e; font-weight:800;' : ''}">
                                ${u.hasAdminPrivilege ? '★ Permisos Admin' : 'Estándar'}
                              </span>
                            ` : `
                              <span style="font-size: 11px; color: #94a3b8;">--</span>
                            `}
                          </td>
                          <td style="text-align: center; white-space: nowrap;">
                            <div style="display: flex; gap: 4px; justify-content: center;">
                              ${isEstudiante ? `
                                <button class="btn btn-gold btn-sm" onclick="window.app.openStudentQRModal('${u.code || u.id}')" title="Ver Tarjeta QR de Asistencia (Sin Foto)" style="padding: 4px 8px; font-size: 11px; font-weight: bold;">
                                  [Móvil] QR
                                </button>
                              ` : ''}
                              <button class="btn btn-outline btn-sm" onclick="window.app.openEditUserModal('${u.id}')" title="Editar datos y contraseña" style="padding: 4px 8px;">
                                ✏️
                              </button>
                              ${isDocente ? `
                                <button class="btn btn-sm ${u.hasAdminPrivilege ? 'btn-outline' : 'btn-gold'}" onclick="window.app.toggleTeacherAdminPrivilege('${u.id}')" title="${u.hasAdminPrivilege ? 'Revocar Permiso Admin' : 'Conceder Permiso Admin'}" style="padding: 4px 8px; font-size: 11px;">
                                  ${u.hasAdminPrivilege ? '★' : '☆'}
                                </button>
                              ` : ''}
                              <button class="btn btn-outline btn-sm" onclick="window.app.confirmDeleteUser('${u.id}')" title="Eliminar usuario" style="padding: 4px 8px; color: var(--color-red-600);">
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- =========================================================================
               VISTA 2: EDITOR DE PESTAÑAS & MENÚS POR PERFIL
               ========================================================================= -->
          ${activeTab === 'tabs' ? `
            <div>
              <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 14px; border-radius: 8px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                  <div>
                    <h3 style="font-size: 14px; font-weight: 800; color: #1e3a8a; margin: 0 0 4px;">
                      🛠️ Configuración de Pestañas Visibles para Perfiles
                    </h3>
                    <p style="font-size: 12px; color: #1e40af; margin: 0;">
                      Active, desactive o renombre los espacios y accesos directos que cada perfil (Docente, Estudiante, Padre de Familia, Director) puede visualizar en la barra lateral.
                    </p>
                  </div>

                  <div style="display: flex; gap: 8px; align-items: center;">
                    <label style="font-size: 12px; font-weight: 800; color: #1e3a8a;">Perfil a Editar:</label>
                    <select class="form-control" style="width: auto; padding: 4px 12px; font-weight: bold;" onchange="window.app.onSelectNavConfigRole(this.value)">
                      <option value="docente" ${targetNavRole === 'docente' ? 'selected' : ''}>👨‍[Colegio] Panel Docente</option>
                      <option value="estudiante" ${targetNavRole === 'estudiante' ? 'selected' : ''}>🎒 Portal del Estudiante</option>
                      <option value="padre" ${targetNavRole === 'padre' ? 'selected' : ''}>👨‍👩‍👧 Portal de Familias (Apoderados)</option>
                      <option value="director" ${targetNavRole === 'director' ? 'selected' : ''}>[Expediente] Dirección General</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Matriz de Pestañas del Perfil Seleccionado -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px; margin-bottom: 18px;">
                ${currentRoleTabs.map(tab => {
                  const isEnabled = tab.enabled !== false;
                  return `
                    <div class="card" style="padding: 14px; border: 1px solid ${isEnabled ? '#cbd5e1' : '#f1f5f9'}; background: ${isEnabled ? '#ffffff' : '#f8fafc'}; opacity: ${isEnabled ? '1' : '0.65'};">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="font-size: 18px;">[Fijado]</span>
                          <strong style="font-size: 13px; color: var(--color-navy-900);">${tab.id}</strong>
                        </div>
                        
                        <!-- Toggle Switch -->
                        <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 800; cursor: pointer; color: ${isEnabled ? '#047857' : '#94a3b8'};">
                          <input type="checkbox" ${isEnabled ? 'checked' : ''} onchange="window.app.toggleNavTab('${targetNavRole}', '${tab.id}', this.checked)" />
                          <span>${isEnabled ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> VISIBLE' : '⚪ OCULTO'}</span>
                        </label>
                      </div>

                      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 8px;">
                        <div class="form-group" style="margin-bottom: 0;">
                          <label class="form-label" style="font-size: 11px; margin-bottom: 2px;">Etiqueta / Nombre Visible:</label>
                          <input type="text" id="tab-label-${targetNavRole}-${tab.id}" class="form-control" value="${tab.label}" style="font-size: 12px; padding: 4px 8px;" />
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                          <label class="form-label" style="font-size: 11px; margin-bottom: 2px;">Badge (opcional):</label>
                          <input type="text" id="tab-badge-${targetNavRole}-${tab.id}" class="form-control" value="${tab.badge || ''}" placeholder="Ej. 10P, NUEVO" style="font-size: 12px; padding: 4px 8px;" />
                        </div>
                      </div>

                      <div style="margin-top: 8px; text-align: right;">
                        <button class="btn btn-outline btn-sm" onclick="window.app.saveSingleNavTab('${targetNavRole}', '${tab.id}')" style="font-size: 11px; padding: 2px 10px; font-weight: bold;">
                          ✓ Guardar Texto
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>

              <!-- Acciones Globales del Editor de Pestañas -->
              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <span style="font-size: 12px; color: #64748b;">
                  * Los cambios de visibilidad y nombres se aplican inmediatamente a todos los usuarios con el rol <strong>${targetNavRole.toUpperCase()}</strong>.
                </span>
                <button class="btn btn-outline btn-sm" onclick="window.app.resetNavTabsToDefault('${targetNavRole}')" style="color: var(--color-red-600); border-color: var(--color-red-200); font-weight: bold;">
                  [Sincronizar] Restaurar Menús por Defecto
                </button>
              </div>
            </div>
          ` : ''}

          <!-- =========================================================================
               VISTA 3: EXPEDIENTES DE MATRÍCULA Y FICHA ÚNICA (FUM - UGEL 05)
               ========================================================================= -->
          ${activeTab === 'enrollments' ? `
            <div>
              <div class="card-header" style="margin-bottom: var(--space-3); border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px; flex-wrap: wrap; gap: 10px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <h3 class="card-title" style="font-size: var(--font-size-base); margin: 0;">📝 Padrón Oficial de Matrículas & Fichas Únicas (FUM - UGEL 05)</h3>
                    <span class="status-badge status-approved">${enrollments.length} Expedientes</span>
                  </div>
                  <p style="font-size: 12px; color: var(--text-muted); margin: 4px 0 0 0;">
                    Registro oficial de estudiantes, código SIAGIE, historial de salud y documentos digitales sustentatorios.
                  </p>
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-navy btn-sm" onclick="window.app.openCreateEnrollmentModal()" style="font-weight: 800; display: flex; align-items: center; gap: 6px;">
                    <span>➕</span> + Nueva Matrícula / Ficha FUM
                  </button>
                  <button class="btn btn-outline btn-sm" onclick="window.print()" style="font-weight: 800;">
                    [Imprimir] Imprimir Padrón
                  </button>
                </div>
              </div>

              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Código / SIAGIE</th>
                      <th>Estudiante / Nacimiento</th>
                      <th>Grado Escolar</th>
                      <th>Ficha Médica & Salud</th>
                      <th>Apoderado / Contacto</th>
                      <th>Requisitos & Trámite</th>
                      <th style="text-align:center;">Acciones FUM</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${enrollments.map(m => {
                      const docs = m.documents || {};
                      const docKeys = ['dniStudent', 'dniParent', 'birthCertificate', 'siagieFUM', 'reportCard', 'vaccinationCard'];
                      const deliveredCount = docKeys.filter(k => docs[k] === true).length;
                      const isComplete = deliveredCount >= 5;

                      return `
                        <tr>
                          <td>
                            <code>${m.studentCode}</code><br>
                            <span style="font-size: 10.5px; color: #1e40af; font-weight: 700;">SIAGIE: ${m.siagieCode || m.dni}</span>
                          </td>
                          <td>
                            <strong>${m.studentName}</strong><br>
                            <span style="font-size: 10.5px; color: #64748b;">DNI: ${m.dni} • ${m.gender || 'Femenino'} • ${m.birthDate || '--'}</span>
                          </td>
                          <td>
                            <span style="font-weight: 800; color: #0b132b;">${m.grade}</span><br>
                            <span style="font-size: 10px; color: #64748b;">${m.level || 'Secundaria'}</span>
                          </td>
                          <td>
                            <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 2px;">
                              <span style="font-size: 10.5px; font-weight: 800; background: #eff6ff; color: #1e40af; padding: 1px 5px; border-radius: 4px; border: 1px solid #bfdbfe;">
                                🩸 ${m.bloodType || 'O+'}
                              </span>
                              <span style="font-size: 10.5px; font-weight: 700; background: #ecfdf5; color: #065f46; padding: 1px 5px; border-radius: 4px; border: 1px solid #a7f3d0;">
                                🏥 ${m.insurance || 'SIS'}
                              </span>
                            </div>
                            <span style="font-size: 10px; color: #b45309;">⚠️ ${m.allergies || 'Sin alergias'}</span>
                          </td>
                          <td>
                            <strong>${m.guardian}</strong><br>
                            <span style="font-size: 10.5px; color: #64748b;">📞 ${m.guardianPhone || m.emergencyPhone || '987-654-321'}</span>
                          </td>
                          <td>
                            <span class="status-badge ${m.status.includes('Matriculado') ? 'status-approved' : 'status-pending'}" style="font-size: 10.5px;">
                              ${m.status}
                            </span><br>
                            <span style="font-size: 10px; font-weight: 800; color: ${isComplete ? '#047857' : '#b45309'}; display: inline-block; margin-top: 3px;">
                              📎 ${deliveredCount}/6 Requisitos Digitales
                            </span>
                          </td>
                          <td style="text-align:center; white-space: nowrap;">
                            <div style="display: flex; gap: 4px; justify-content: center;">
                              <button class="btn btn-gold btn-sm" onclick="window.app.openStudentQRModal('${m.studentCode}')" title="Generar / Ver Código QR de Asistencia (Sin Foto)" style="font-size: 11px; padding: 4px 8px; font-weight: bold;">
                                [Móvil] QR
                              </button>
                              <button class="btn btn-navy btn-sm" onclick="window.app.openEditEnrollmentFUMModal('${m.id}')" title="Editar Ficha FUM, Salud y Documentos" style="font-size: 11px; padding: 4px 8px;">
                                ✏️ FUM
                              </button>
                              <button class="btn btn-outline btn-sm" onclick="window.app.showOfficialFUMPrintModal('${m.id}')" title="Imprimir Ficha Única Oficial A4" style="font-size: 11px; padding: 4px 8px;">
                                [Documento] FUM A4
                              </button>
                              <button class="btn btn-outline btn-sm" onclick="window.app.openDocumentsChecklistModal('${m.id}')" title="Ver y Validar Documentos Digitales" style="font-size: 11px; padding: 4px 8px; color: #047857;">
                                📎 Docs
                              </button>
                            </div>
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

        </div>
      </div>
    `;
  },

  // Dashboard - Director General
  renderDirectorDashboard(state, user) {
    return `
      <div class="fade-in">
        <div class="welcome-banner" style="background: linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 100%);">
          <div class="welcome-content">
            <h1 class="welcome-title">Dirección General: <span>${user.name}</span></h1>
            <p class="welcome-subtitle">Supervisión pedagógica institucional • I.E.P. "El Educador" (S.J.L. - 21 años dejando huellas).</p>

            <div class="metrics-strip">
              <div class="metric-card-mini"><span class="metric-label">Matrícula Total</span><span class="metric-val highlight-yellow">${user.totalStudents}</span></div>
              <div class="metric-card-mini"><span class="metric-label">Plana Docente</span><span class="metric-val highlight-green">${user.totalTeachers}</span></div>
              <div class="metric-card-mini"><span class="metric-label">Asistencia Promedio</span><span class="metric-val highlight-green">${user.avgAttendance}</span></div>
              <div class="metric-card-mini"><span class="metric-label">Recaudación Agosto</span><span class="metric-val highlight-green">S/ 25,130.00</span></div>
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="section-column">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Muro de Circulares e Informes</h3>
                <button class="btn btn-gold btn-sm" onclick="window.app.showOfficialReportModal()">[Documento] Ver Informe N° 003</button>
              </div>
              <div class="announcement-list">
                ${state.announcements.map(a => `
                  <div class="announcement-card ${a.priority === 'high' ? 'priority-high' : ''}">
                    <div class="announcement-meta"><span class="announcement-tag tag-urgent">${a.tagLabel}</span><span class="announcement-date">${a.date}</span></div>
                    <h4 class="announcement-title">${a.title}</h4>
                    <p class="announcement-preview">${a.content}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="section-column">
            <div class="card">
              <div class="card-header"><h3 class="card-title">Supervisión Académica</h3></div>
              <div style="display:flex; flex-direction:column; gap: var(--space-3);">
                <button class="btn btn-sm" onclick="window.app.navigate('asistencia'); window.app.setAttendanceSubTab('door-scanner');" style="background: #10b981; color: white; font-weight: 800; padding: 10px; font-size: 13px; text-align: left; display: flex; align-items: center; gap: 8px;">
                  <span>[Portería]</span>
                  <span>Registro de Ingreso & Asistencia QR (Portería)</span>
                </button>
                <button class="btn btn-navy" onclick="window.app.navigate('cuadernos-qr')">[Cámara] Escáner Cuadernos QR</button>
                <button class="btn btn-navy" onclick="window.app.navigate('calificaciones')">Registro de Notas Oficiales</button>
                <button class="btn btn-navy" onclick="window.app.navigate('horarios')">Horarios Escolares</button>
                <button class="btn btn-navy" onclick="window.app.navigate('silabus')">Sílabus Académicos</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Dashboard - Docente
  renderTeacherDashboard(state, user) {
    const students = state.studentListDocente;
    const hasAdminPrivilege = !!user.hasAdminPrivileges;

    return `
      <div class="fade-in">
        <div class="welcome-banner" style="background: linear-gradient(135deg, var(--color-navy-900) 0%, #1e293b 100%);">
          <div class="welcome-content">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              ${hasAdminPrivilege ? `
                <span class="status-badge status-approved" style="background: rgba(245, 158, 11, 0.2); color: var(--color-yellow-400); border: 1px solid var(--color-yellow-500);">
                  ★ PRIVILEGIOS DE EDICIÓN HABILITADOS
                </span>
              ` : `
                <span class="status-badge status-approved">PERFIL DOCENTE</span>
              `}
            </div>
            <h1 class="welcome-title">Panel Docente: <span>${user.name}</span></h1>
            <p class="welcome-subtitle">
              Escaneo óptico de cuadernos con cámara de celular, registro de notas y asistencia.
            </p>

            <div class="metrics-strip">
              <div class="metric-card-mini"><span class="metric-label">Alumnos</span><span class="metric-val highlight-yellow">${user.totalStudents}</span></div>
              <div class="metric-card-mini"><span class="metric-label">Cuadernos Hoy</span><span class="metric-val highlight-green">${user.scannedNotebooksToday || 18}</span></div>
              <div class="metric-card-mini"><span class="metric-label">Pendientes</span><span class="metric-val highlight-red">${user.pendingGrading}</span></div>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: var(--space-3); margin-bottom: var(--space-6); flex-wrap: wrap;">
          <button class="btn btn-sm" onclick="window.app.navigate('asistencia'); window.app.setAttendanceSubTab('door-scanner');" style="background: #10b981; color: white; font-weight: 900; font-size: 13px; padding: 9px 18px; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(16,185,129,0.3);">
            <span>[Portería]</span>
            <span>Registro de Ingreso & Asistencia QR</span>
          </button>
          <button class="btn btn-gold" onclick="window.app.navigate('cuadernos-qr')" style="font-weight: 800;">
            [Cámara] Abrir Escáner QR de Cuadernos
          </button>
          <button class="btn btn-navy" onclick="window.app.navigate('calificaciones')">✏️ Registrar Notas</button>
          <button class="btn btn-navy" onclick="window.app.navigate('boleta')" style="border: 1px solid var(--color-yellow-500);">[Documento] Boleta Oficial MINEDU 2026</button>
          <button class="btn btn-outline" onclick="window.app.navigate('horarios')">Ver Horario</button>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Registro Rápido de Calificaciones - 4to Sec 'A'</h3>
          </div>
          <div class="table-container">
            <table class="data-table">
              <thead><tr><th>Código</th><th>Estudiante</th><th>Asistencia</th><th>Cuaderno QR</th><th>Nota 3er Bim</th><th>Acción</th></tr></thead>
              <tbody>
                ${students.map(s => `
                  <tr>
                    <td><code>${s.id}</code></td><td><strong>${s.name}</strong></td><td>${s.attendance}</td>
                    <td><span class="status-badge ${s.notebookStatus && s.notebookStatus.includes('Al Día') ? 'status-approved' : 'status-failed'}">${s.notebookStatus}</span></td>
                    <td><input type="number" min="0" max="20" id="grade-input-${s.id}" value="${s.grade}" style="width: 70px; padding: 4px 8px; font-weight: bold;" /></td>
                    <td><button class="btn btn-navy btn-sm" onclick="window.app.saveStudentGrade('${s.id}')">Guardar</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // Dashboard - Padre
  renderParentDashboard(state, user) {
    const announcements = state.announcements || initialData.announcements;
    const studentName = "Sofía Méndez Flores";
    const studentGrade = "4to de Secundaria 'A'";

    return `
      <div class="fade-in">
        <div class="welcome-banner">
          <div class="welcome-content">
            <h1 class="welcome-title">Portal de Familias: <span>${user.name}</span></h1>
            <p class="welcome-subtitle">I.E.P. "El Educador" (21 años dejando huellas) • Seguimiento académico de <strong>${studentName}</strong> (${studentGrade}).</p>
            <div class="metrics-strip">
              <div class="metric-card-mini"><span class="metric-label">Estudiante</span><span class="metric-val highlight-yellow">Sofía Méndez</span></div>
              <div class="metric-card-mini"><span class="metric-label">Cuadernos QR</span><span class="metric-val highlight-green">5/6 Al Día</span></div>
              <div class="metric-card-mini"><span class="metric-label">Asistencia</span><span class="metric-val highlight-green">98.5%</span></div>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
          <div class="card" style="padding: 14px; cursor: pointer; border-left: 4px solid #10b981; background: #f0fdf4;" onclick="window.app.showOfficialFUMPrintModal('MATR-2026-001')">
            <h4 style="font-size:14px; color:#065f46; margin:0 0 2px;">[Documento] Ficha de Matrícula (FUM)</h4>
            <span style="font-size:12px; color:#047857;">Expediente SIAGIE y ficha médica oficial 2026</span>
          </div>
          <div class="card" style="padding: 14px; cursor: pointer; border-left: 4px solid var(--color-yellow-500);" onclick="window.app.navigate('horarios')">
            <h4 style="font-size:14px; color:var(--color-navy-900); margin:0 0 2px;">⏰ Horario de Clases</h4>
            <span style="font-size:12px; color:var(--text-muted);">${studentName} (${studentGrade})</span>
          </div>
          <div class="card" style="padding: 14px; cursor: pointer; border-left: 4px solid var(--color-navy-600);" onclick="window.app.navigate('silabus')">
            <h4 style="font-size:14px; color:var(--color-navy-900); margin:0 0 2px;">📚 Sílabus Curriculares</h4>
            <span style="font-size:12px; color:var(--text-muted);">Programación y competencias 2026</span>
          </div>
          <div class="card" style="padding: 14px; cursor: pointer; border-left: 4px solid var(--color-yellow-600);" onclick="window.app.navigate('cuadernos-qr')">
            <h4 style="font-size:14px; color:var(--color-navy-900); margin:0 0 2px;">[Cuaderno] Cuadernos QR</h4>
            <span style="font-size:12px; color:var(--text-muted);">5 de 6 cuadernos al día</span>
          </div>
          <div class="card" style="padding: 14px; cursor: pointer; border-left: 4px solid var(--color-red-500);" onclick="window.app.navigate('asistencia')">
            <h4 style="font-size:14px; color:var(--color-navy-900); margin:0 0 2px;">📅 Control de Asistencia</h4>
            <span style="font-size:12px; color:var(--text-muted);">Puntualidad biométrica (98.5%)</span>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Últimos Informes y Circulares Institucionales</h3>
            <button class="btn btn-outline btn-sm" onclick="window.app.navigate('comunicados')">Ver Todos</button>
          </div>
          <div class="announcement-list">
            ${announcements.map(a => `
              <div class="announcement-card ${a.priority === 'high' ? 'priority-high' : ''}">
                <div class="announcement-meta"><span class="announcement-tag tag-urgent">${a.tagLabel}</span><span class="announcement-date">${a.date}</span></div>
                <h4 class="announcement-title">${a.title}</h4>
                <p class="announcement-preview">${a.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // Dashboard - Estudiante
  renderStudentDashboard(state, user) {
    const courses = state.courses;
    const announcements = state.announcements;

    return `
      <div class="fade-in">
        <div class="welcome-banner">
          <div class="welcome-content">
            <h1 class="welcome-title">¡Bienvenida, <span>${user.name}</span>!</h1>
            <p class="welcome-subtitle">I.E.P. "El Educador" • "21 años dejando huellas" • 4to de Secundaria 'A'.</p>
            <div class="metrics-strip">
              <div class="metric-card-mini"><span class="metric-label">Promedio</span><span class="metric-val highlight-yellow">${user.generalAverage} / 20</span></div>
              <div class="metric-card-mini"><span class="metric-label">Asistencia</span><span class="metric-val highlight-green">${user.attendanceRate}</span></div>
              <div class="metric-card-mini"><span class="metric-label">Cuadernos QR</span><span class="metric-val highlight-green">${user.notebooksUpToDate}</span></div>
              <div class="metric-card-mini"><span class="metric-label">Tareas</span><span class="metric-val highlight-red">${user.pendingTasksCount}</span></div>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-6);">
          <div class="card" style="padding: 12px; cursor: pointer; border-left: 4px solid #10b981; background: #f0fdf4;" onclick="window.app.navigate('asistencia')">
            <h4 style="font-size:13px; color: #065f46; margin: 0 0 2px;">[Portería] Mi Asistencia & QR</h4>
            <span style="font-size:11px; color:#047857;">Marcaciones y código QR</span>
          </div>
          <div class="card" style="padding: 12px; cursor: pointer; border-left: 4px solid var(--color-yellow-500);" onclick="window.app.navigate('horarios')">
            <h4 style="font-size:13px; margin: 0 0 2px;">Horario de Clases</h4>
            <span style="font-size:11px; color:var(--text-muted);">4to Sec 'A'</span>
          </div>
          <div class="card" style="padding: 12px; cursor: pointer; border-left: 4px solid var(--color-navy-600);" onclick="window.app.navigate('silabus')">
            <h4 style="font-size:13px; margin: 0 0 2px;">Sílabus 2026</h4>
            <span style="font-size:11px; color:var(--text-muted);">Unidades y competencias</span>
          </div>
          <div class="card" style="padding: 12px; cursor: pointer; border-left: 4px solid var(--color-red-500);" onclick="window.app.navigate('cuadernos-qr')">
            <h4 style="font-size:13px; margin: 0 0 2px;">Control Cuadernos QR</h4>
            <span style="font-size:11px; color:var(--text-muted);">Sellos y stickers QR</span>
          </div>
        </div>

        <div class="dashboard-grid">
          <div class="section-column">
            <div class="card">
              <div class="card-header"><h3 class="card-title">Calificaciones Destacadas</h3></div>
              <div class="grades-grid">
                ${courses.slice(0, 4).map(c => `
                  <div class="grade-pill-card">
                    <span class="course-name">${c.name}</span>
                    <span class="course-grade-number ${c.finalGrade >= 18 ? 'grade-high' : 'grade-good'}">${c.finalGrade.toFixed(1)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="section-column">
            <div class="card">
              <div class="card-header"><h3 class="card-title">Comunicados Oficiales</h3></div>
              <div class="announcement-list">
                ${announcements.map(a => `
                  <div class="announcement-card">
                    <h4>${a.title}</h4>
                    <p class="announcement-preview">${a.content}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // PORTAL DOCENTE: SISTEMA DESCENTRALIZADO DE CARGA DE CALIFICACIONES Y TUTORÍA
  // =========================================================================
  renderGrades(state) {
    const activeTab = state.activeGradesTab || "subject";
    const selectedSubjectKey = state.selectedGradingSubject || "computacion";
    const selectedStudentKey = state.selectedBoletaStudent || "mendez";
    const allBoletas = state.boletaData || initialData.boletaData;
    
    // Lista oficial de asignaturas y sus docentes responsables
    const subjectDirectory = [
      { key: "computacion", name: "Computación (EPT)", area: "Educación para el Trabajo", teacher: "Prof. Alex Lino", icon: "💻" },
      { key: "gestion_empresarial", name: "Gestión Empresarial", area: "Educación para el Trabajo", teacher: "Prof. Alex Lino", icon: "[Reporte]" },
      { key: "algebra", name: "Álgebra", area: "Matemática", teacher: "Prof. Roberto Silva", icon: "[Formato]" },
      { key: "aritmetica", name: "Aritmética", area: "Matemática", teacher: "Prof. Roberto Silva", icon: "🔢" },
      { key: "geometria", name: "Geometría", area: "Matemática", teacher: "Prof. Roberto Silva", icon: "📏" },
      { key: "trigonometria", name: "Trigonometría", area: "Matemática", teacher: "Prof. Roberto Silva", icon: "[Formato]" },
      { key: "raz_matematico", name: "Razonamiento Matemático", area: "Matemática", teacher: "Prof. Roberto Silva", icon: "🧮" },
      { key: "lenguaje", name: "Lenguaje", area: "Comunicación", teacher: "Miss María Daysi Reyes", icon: "[Cuaderno]" },
      { key: "literatura", name: "Literatura", area: "Comunicación", teacher: "Miss María Daysi Reyes", icon: "📚" },
      { key: "raz_verbal", name: "Razonamiento Verbal", area: "Comunicación", teacher: "Miss María Daysi Reyes", icon: "✏️" },
      { key: "biologia", name: "Biología", area: "Ciencia y Tecnología", teacher: "Miss Leyli Reyes", icon: "🧬" },
      { key: "fisica", name: "Física", area: "Ciencia y Tecnología", teacher: "Miss Leyli Reyes", icon: "⚡" },
      { key: "quimica", name: "Química", area: "Ciencia y Tecnología", teacher: "Miss Leyli Reyes", icon: "🧪" },
      { key: "geografia", name: "Geografía", area: "Ciencias Sociales", teacher: "Prof. Javier Vega", icon: "🌍" },
      { key: "filosofia", name: "Filosofía", area: "Ciencias Sociales", teacher: "Prof. Javier Vega", icon: "[Nota]" },
      { key: "historia_peru", name: "Historia del Perú", area: "Ciencias Sociales", teacher: "Prof. Javier Vega", icon: "🏛️" },
      { key: "historia_universal", name: "Historia Universal", area: "Ciencias Sociales", teacher: "Prof. Javier Vega", icon: "📜" },
      { key: "civica", name: "Cívica", area: "DPCC", teacher: "Miss Julisa Arroyo", icon: "⚖️" },
      { key: "psicologia", name: "Psicología", area: "DPCC", teacher: "Miss Julisa Arroyo", icon: "🧠" },
      { key: "arte_cultura", name: "Arte y Cultura", area: "Otras Áreas", teacher: "Miss Carmen Vidal", icon: "🎨" },
      { key: "religion", name: "Educación Religiosa (Valores y Lid.)", area: "Otras Áreas", teacher: "Miss Carmen Vidal", icon: "🕊️" },
      { key: "educ_fisica", name: "Educación Física", area: "Otras Áreas", teacher: "Prof. Marco Soto", icon: "⚽" },
      { key: "ingles", name: "Inglés Avanzado", area: "Otras Áreas", teacher: "Miss Andrea Ramos", icon: "🇬🇧" },
      { key: "conducta", name: "Conducta y Disciplina", area: "Tutoría", teacher: "Prof. Roberto Silva (Tutor)", icon: "★" }
    ];

    // Directorio de alumnos del aula (4to Sec 'A')
    const classroomStudents = [
      { key: "mendez", name: "MÉNDEZ FLORES, SOFÍA", dni: "74891230", code: "EST-2026-042" },
      { key: "benitez", name: "BENÍTEZ RUIZ, CARLOS", dni: "74891255", code: "EST-2026-011" },
      { key: "albujar", name: "ALBUJAR ZEGARRA, MARINA DEL CARMEN", dni: "74891289", code: "EST-2026-089" }
    ];

    const currentSubject = subjectDirectory.find(s => s.key === selectedSubjectKey) || subjectDirectory[0];
    const tutorStudentData = allBoletas[selectedStudentKey] || allBoletas.mendez;
    const tutorApp = tutorStudentData.appreciations || {};
    const tutorAtt = tutorStudentData.attendance || {};
    const tutorPc = tutorStudentData.parentCriteria || {};

    return `
      <div class="fade-in">
        
        <!-- Cabecera Institucional del Módulo -->
        <div class="card" style="margin-bottom: var(--space-6);">
          <div class="card-header" style="flex-wrap: wrap; gap: 12px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h2 class="card-title" style="font-size: var(--font-size-xl);">Sistema Descentralizado de Calificaciones</h2>
                <span class="status-badge status-approved" style="background: var(--color-yellow-100); color: var(--color-yellow-700);">Periodo Lectivo 2026</span>
              </div>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                I.E.P. "El Educador" • Cada docente ingresa sus cursos y el Tutor evalúa asistencias, apreciaciones y padres de familia para la boleta oficial.
              </p>
            </div>
            
            <button class="btn btn-gold" onclick="window.app.navigate('boleta')" style="font-weight: 800;">
              [Documento] Ver Boleta Oficial Consolidada
            </button>
          </div>

          <!-- Selector de Pestañas / Modalidades -->
          <div style="display: flex; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-subtle); padding: 6px 12px; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn-sm ${activeTab === 'subject' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setGradesActiveTab('subject')" style="font-weight: 800;">
              👨‍[Colegio] 1. Carga por Docente de Curso
            </button>
            <button class="btn btn-sm ${activeTab === 'tutor' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setGradesActiveTab('tutor')" style="font-weight: 800;">
              [Expediente] 2. Módulo de Tutoría (Asistencia, Apreciaciones y Familias)
            </button>
            <button class="btn btn-sm ${activeTab === 'overview' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setGradesActiveTab('overview')" style="font-weight: 800;">
              [Reporte] 3. Sábana Consolidada del Aula
            </button>
          </div>
        </div>

        ${activeTab === 'subject' ? `
          <!-- =====================================================================
               MODO 1: CARGA DE NOTAS POR DOCENTE DE CURSO / ASIGNATURA
               ===================================================================== -->
          <div class="card" style="margin-bottom: var(--space-6);">
            <div class="card-header" style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; gap: 14px;">
              
              <!-- Selector de Asignatura -->
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 13px; font-weight: 800; color: var(--color-navy-900);">Asignatura a Calificar:</span>
                <select class="form-control" style="font-weight: bold; width: auto; font-size: 13px; min-width: 260px;" onchange="window.app.changeSelectedGradingSubject(this.value)">
                  ${subjectDirectory.map(s => `
                    <option value="${s.key}" ${s.key === selectedSubjectKey ? 'selected' : ''}>
                      ${s.icon} ${s.name} • (${s.teacher})
                    </option>
                  `).join('')}
                </select>
              </div>

              <!-- Info del Curso & Aula -->
              <div style="font-size: 12px; color: var(--text-muted); display: flex; align-items: center; gap: 14px;">
                <span><strong>Docente Responsable:</strong> <span style="color: var(--color-navy-900); font-weight: bold;">${currentSubject.teacher}</span></span>
                <span><strong>Área Curricular:</strong> ${currentSubject.area}</span>
                <span><strong>Grado:</strong> 4to de Secundaria</span>
              </div>

            </div>

            <!-- Formulario de Calificaciones para los Alumnos del Aula en este Curso -->
            <form onsubmit="window.app.handleSaveSubjectGrades(event, '${selectedSubjectKey}')" style="padding: 16px;">
              <div style="margin-bottom: 12px; font-size: 12px; color: #475569;">
                Ingrese las calificaciones para los estudiantes del aula en la materia <strong>${currentSubject.name}</strong>. Acepta letras (<strong>AD, A, B, C</strong>) o números (<strong>0-20</strong>).
              </div>

              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr style="background: var(--color-navy-900); color: white;">
                      <th style="width: 15%;">Código / DNI</th>
                      <th style="width: 35%;">Apellidos y Nombres</th>
                      <th style="width: 12%; text-align:center;">I BIM</th>
                      <th style="width: 12%; text-align:center;">II BIM</th>
                      <th style="width: 12%; text-align:center;">III BIM</th>
                      <th style="width: 12%; text-align:center;">IV BIM</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${classroomStudents.map(st => {
                      const studentBoleta = allBoletas[st.key] || {};
                      const studentGrades = (studentBoleta.grades && studentBoleta.grades[selectedSubjectKey]) || { b1: "", b2: "", b3: "", b4: "" };
                      return `
                        <tr>
                          <td><code>${st.dni}</code></td>
                          <td><strong>${st.name}</strong></td>
                          <td style="text-align:center;">
                            <input type="text" class="form-control" name="grade_${st.key}_b1" value="${studentGrades.b1 || ''}" placeholder="-" style="width: 65px; text-align:center; font-weight:bold; text-transform:uppercase; margin: 0 auto;" maxlength="4" />
                          </td>
                          <td style="text-align:center;">
                            <input type="text" class="form-control" name="grade_${st.key}_b2" value="${studentGrades.b2 || ''}" placeholder="-" style="width: 65px; text-align:center; font-weight:bold; text-transform:uppercase; margin: 0 auto;" maxlength="4" />
                          </td>
                          <td style="text-align:center;">
                            <input type="text" class="form-control" name="grade_${st.key}_b3" value="${studentGrades.b3 || ''}" placeholder="-" style="width: 65px; text-align:center; font-weight:bold; text-transform:uppercase; margin: 0 auto;" maxlength="4" />
                          </td>
                          <td style="text-align:center;">
                            <input type="text" class="form-control" name="grade_${st.key}_b4" value="${studentGrades.b4 || ''}" placeholder="-" style="width: 65px; text-align:center; font-weight:bold; text-transform:uppercase; margin: 0 auto;" maxlength="4" />
                          </td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 16px;">
                <button type="submit" class="btn btn-navy" style="font-weight: 800; padding: 10px 22px;">
                  💾 Guardar Notas de ${currentSubject.name} (${currentSubject.teacher})
                </button>
              </div>
            </form>
          </div>
        ` : ''}

        ${activeTab === 'tutor' ? `
          <!-- =====================================================================
               MODO 2: MÓDULO EXCLUSIVO DEL TUTOR DE AULA
               ===================================================================== -->
          <div class="card" style="margin-bottom: var(--space-6);">
            <div class="card-header" style="background: #eff6ff; border-bottom: 1px solid #bfdbfe; flex-wrap: wrap; gap: 12px;">
              <div>
                <h3 class="card-title" style="color: #1e3a8a;">Módulo de Tutoría y Convivencia Escolar</h3>
                <p style="font-size: 12px; color: #1e40af; margin-top: 2px;">
                  <strong>Tutor a Cargo:</strong> Prof. Roberto Silva • <strong>Aula:</strong> 4to de Secundaria
                </p>
              </div>

              <!-- Selector de Alumno a Evaluar por el Tutor y Botón de Stickers -->
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span style="font-size: 12px; font-weight: 800; color: #1e3a8a;">Estudiante:</span>
                <select class="form-control" style="font-weight: bold; width: auto; font-size: 12px;" onchange="window.app.changeBoletaStudent(this.value)">
                  <option value="mendez" ${selectedStudentKey === 'mendez' ? 'selected' : ''}>MÉNDEZ FLORES, SOFÍA</option>
                  <option value="benitez" ${selectedStudentKey === 'benitez' ? 'selected' : ''}>BENÍTEZ RUIZ, CARLOS</option>
                  <option value="albujar" ${selectedStudentKey === 'albujar' ? 'selected' : ''}>ALBUJAR ZEGARRA, MARINA DEL CARMEN</option>
                </select>
                <button type="button" class="btn btn-gold btn-sm" onclick="window.app.openStudentFullBoletaStickersModal('${tutorStudentData.code || tutorStudentData.id || 'EST-2026-042'}')" style="font-weight: 900; font-size: 11.5px; padding: 6px 14px; border-radius: 16px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #0b132b;">
                  ⚡ Stickers QR de Boleta
                </button>
              </div>
            </div>

            <form onsubmit="window.app.handleSaveTutorEvaluation(event, '${selectedStudentKey}')" style="padding: 20px;">
              
              <!-- 1. Apreciación Pedagógica del Tutor -->
              <div style="margin-bottom: 24px;">
                <h4 style="font-size: 14px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 10px; border-bottom: 2px solid var(--border-subtle); padding-bottom: 6px;">
                  1. Apreciación del Tutor (Observaciones Oficiales para la Boleta)
                </h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
                  <div>
                    <label style="font-size: 12px; font-weight: 800; color: var(--color-navy-900); display: block; margin-bottom: 4px;">I BIMESTRE:</label>
                    <textarea class="form-control" name="app_b1" rows="3" placeholder="Apreciación del 1er Bimestre...">${tutorApp.b1 || ''}</textarea>
                  </div>
                  <div>
                    <label style="font-size: 12px; font-weight: 800; color: var(--color-navy-900); display: block; margin-bottom: 4px;">II BIMESTRE:</label>
                    <textarea class="form-control" name="app_b2" rows="3" placeholder="Apreciación del 2do Bimestre...">${tutorApp.b2 || ''}</textarea>
                  </div>
                  <div>
                    <label style="font-size: 12px; font-weight: 800; color: var(--color-navy-900); display: block; margin-bottom: 4px;">III BIMESTRE:</label>
                    <textarea class="form-control" name="app_b3" rows="3" placeholder="Apreciación del 3er Bimestre...">${tutorApp.b3 || ''}</textarea>
                  </div>
                  <div>
                    <label style="font-size: 12px; font-weight: 800; color: var(--color-navy-900); display: block; margin-bottom: 4px;">IV BIMESTRE:</label>
                    <textarea class="form-control" name="app_b4" rows="3" placeholder="Apreciación del 4to Bimestre...">${tutorApp.b4 || ''}</textarea>
                  </div>
                </div>
              </div>

              <!-- 2. Registro de Asistencia del Estudiante -->
              <div style="margin-bottom: 24px;">
                <h4 style="font-size: 14px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 10px; border-bottom: 2px solid var(--border-subtle); padding-bottom: 6px;">
                  2. Resumen de Asistencia del Estudiante (Inasistencias y Tardanzas)
                </h4>
                <div class="table-container">
                  <table class="data-table">
                    <thead>
                      <tr style="background: var(--color-navy-900); color: white;">
                        <th rowspan="2" style="width: 20%; text-align:center;">Periodo</th>
                        <th colspan="2" style="width: 40%; text-align:center;">Inasistencias</th>
                        <th colspan="2" style="width: 40%; text-align:center;">Tardanzas</th>
                      </tr>
                      <tr style="background: #1e293b; color: white;">
                        <th style="text-align:center;">Justificadas</th>
                        <th style="text-align:center;">Injustificadas</th>
                        <th style="text-align:center;">Justificadas</th>
                        <th style="text-align:center;">Injustificadas</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${['b1', 'b2', 'b3', 'b4'].map((b, idx) => {
                        const rec = tutorAtt[b] || {};
                        const bLabel = `${idx + 1}° BIMESTRE`;
                        return `
                          <tr>
                            <td style="font-weight:bold; text-align:center;">${bLabel}</td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="att_${b}_ij" value="${rec.inasist_just || '-'}" style="width:60px; text-align:center; margin:0 auto;" /></td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="att_${b}_ii" value="${rec.inasist_injust || '-'}" style="width:60px; text-align:center; margin:0 auto;" /></td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="att_${b}_tj" value="${rec.tard_just || '-'}" style="width:60px; text-align:center; margin:0 auto;" /></td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="att_${b}_ti" value="${rec.tard_injust || '-'}" style="width:60px; text-align:center; margin:0 auto;" /></td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 3. Evaluación de Participación de los Padres de Familia -->
              <div style="margin-bottom: 24px;">
                <h4 style="font-size: 14px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 10px; border-bottom: 2px solid var(--border-subtle); padding-bottom: 6px;">
                  3. Participación de los Padres de Familia (6 Criterios MINEDU: AD, A, B, C)
                </h4>
                <div class="table-container">
                  <table class="data-table">
                    <thead>
                      <tr style="background: var(--color-navy-900); color: white;">
                        <th style="width: 50%;">Criterio de Evaluación Formativa</th>
                        <th style="width: 12%; text-align:center;">I BIM</th>
                        <th style="width: 12%; text-align:center;">II BIM</th>
                        <th style="width: 12%; text-align:center;">III BIM</th>
                        <th style="width: 12%; text-align:center;">IV BIM</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${[
                        { id: 1, text: "1. Se interesa por el aprendizaje de su hijo(a)." },
                        { id: 2, text: "2. Envía oportunamente sus materiales (útiles escolares)." },
                        { id: 3, text: "3. Participa en actividades en el aula e Institución Educativa." },
                        { id: 4, text: "4. Envía puntualmente a su hijo(a) a la Institución Educativa." },
                        { id: 5, text: "5. Asiste a la Escuela de Padres." },
                        { id: 6, text: "6. Padres / apoderados, se comunican con frecuencia para conocer la situación de su hijo(a)." }
                      ].map(crit => {
                        const cVal = tutorPc[`c${crit.id}`] || {};
                        return `
                          <tr>
                            <td><strong>${crit.text}</strong></td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="pc_c${crit.id}_b1" value="${cVal.b1 || ''}" placeholder="A" style="width:60px; text-align:center; font-weight:bold; text-transform:uppercase; margin:0 auto;" maxlength="2" /></td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="pc_c${crit.id}_b2" value="${cVal.b2 || ''}" placeholder="-" style="width:60px; text-align:center; font-weight:bold; text-transform:uppercase; margin:0 auto;" maxlength="2" /></td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="pc_c${crit.id}_b3" value="${cVal.b3 || ''}" placeholder="-" style="width:60px; text-align:center; font-weight:bold; text-transform:uppercase; margin:0 auto;" maxlength="2" /></td>
                            <td style="text-align:center;"><input type="text" class="form-control" name="pc_c${crit.id}_b4" value="${cVal.b4 || ''}" placeholder="-" style="width:60px; text-align:center; font-weight:bold; text-transform:uppercase; margin:0 auto;" maxlength="2" /></td>
                          </tr>
                        `;
                      }).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 12px;">
                <button type="submit" class="btn btn-red" style="font-weight: 800; padding: 12px 24px;">
                  💾 Guardar Evaluación de Tutoría de ${tutorStudentData.name}
                </button>
              </div>

            </form>
          </div>
        ` : ''}

        ${activeTab === 'overview' ? `
          <!-- =====================================================================
               MODO 3: SÁBANA GENERAL Y ESTADO DE AVANCE DE DOCENTES
               ===================================================================== -->
          <div class="card" style="margin-bottom: var(--space-6);">
            <div class="card-header">
              <div>
                <h3 class="card-title">Sábana Consolidada de Calificaciones - 4to Sec 'A'</h3>
                <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">
                  Consolidado automático con las notas subidas por cada docente de área y las evaluaciones del tutor.
                </p>
              </div>
            </div>

            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr style="background: var(--color-navy-900); color: white;">
                    <th>Asignatura</th>
                    <th>Docente Responsable</th>
                    <th style="text-align:center;">Sofía Méndez</th>
                    <th style="text-align:center;">Carlos Benítez</th>
                    <th style="text-align:center;">Marina Albujar</th>
                    <th style="text-align:center;">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  ${subjectDirectory.map(s => {
                    const mVal = (allBoletas.mendez?.grades && allBoletas.mendez.grades[s.key]?.b1) || "--";
                    const bVal = (allBoletas.benitez?.grades && allBoletas.benitez.grades[s.key]?.b1) || "--";
                    const aVal = (allBoletas.albujar?.grades && allBoletas.albujar.grades[s.key]?.b1) || "--";
                    const hasAll = mVal !== "--" && bVal !== "--";
                    return `
                      <tr>
                        <td><strong>${s.icon} ${s.name}</strong></td>
                        <td style="font-size: 12px;">${s.teacher}</td>
                        <td style="text-align:center; font-weight:bold; color:var(--color-navy-900);">${mVal}</td>
                        <td style="text-align:center; font-weight:bold; color:var(--color-navy-900);">${bVal}</td>
                        <td style="text-align:center; font-weight:bold; color:var(--color-navy-900);">${aVal}</td>
                        <td style="text-align:center;">
                          <span class="status-badge ${hasAll ? 'status-approved' : 'status-pending'}">
                            ${hasAll ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Completo' : '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> En Proceso'}
                          </span>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>

            <div style="padding: 16px; background: #f8fafc; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
              <span style="font-size: 13px; font-weight: 700; color: #1e293b;">
                [Documento] El sistema ya tiene consolidadas todas las notas para la emisión oficial.
              </span>
              <button class="btn btn-navy" onclick="window.app.navigate('boleta')" style="font-weight: 800;">
                [Imprimir] Generar Boleta Oficial MINEDU (PDF)
              </button>
            </div>
          </div>
        ` : ''}

      </div>
    `;
  },

  // =========================================================================
  // BOLETA OFICIAL IMPRIMIBLE CON FORMATO MINEDU (2 PÁGINAS DINÁMICAS)
  // =========================================================================
  renderPrintableReport(state) {
    const selectedStudentKey = state.selectedBoletaStudent || "mendez";
    const allBoletas = state.boletaData || initialData.boletaData;
    const student = allBoletas[selectedStudentKey] || allBoletas.mendez;
    const g = student.grades || {};
    const app = student.appreciations || {};
    const att = student.attendance || {};
    const pc = student.parentCriteria || {};

    // Función auxiliar para promedios literales
    const calcAvg = (keys, bim) => {
      const vals = keys.map(k => (g[k] && g[k][bim]) || "").filter(Boolean);
      if (!vals.length) return "";
      let sum = 0;
      vals.forEach(v => {
        const u = v.toUpperCase().trim();
        if (u === "AD") sum += 4;
        else if (u === "A") sum += 3;
        else if (u === "B") sum += 2;
        else if (u === "C") sum += 1;
        else if (!isNaN(parseFloat(u))) {
          const num = parseFloat(u);
          if (num >= 18) sum += 4;
          else if (num >= 14) sum += 3;
          else if (num >= 11) sum += 2;
          else sum += 1;
        }
      });
      const avg = sum / vals.length;
      if (avg >= 3.5) return "AD";
      if (avg >= 2.5) return "A";
      if (avg >= 1.5) return "B";
      return "C";
    };

    // Función auxiliar para promedio final de un curso
    const calcPF = (key) => {
      return calcAvg([key], "b1") && calcAvg([key], "b2") ? calcAvg([key], "b1") : "";
    };

    // Promedios por áreas
    const comB1 = calcAvg(["lenguaje", "literatura", "raz_verbal"], "b1");
    const comB2 = calcAvg(["lenguaje", "literatura", "raz_verbal"], "b2");
    const comB3 = calcAvg(["lenguaje", "literatura", "raz_verbal"], "b3");
    const comB4 = calcAvg(["lenguaje", "literatura", "raz_verbal"], "b4");

    const matB1 = calcAvg(["aritmetica", "algebra", "geometria", "trigonometria", "raz_matematico"], "b1");
    const matB2 = calcAvg(["aritmetica", "algebra", "geometria", "trigonometria", "raz_matematico"], "b2");
    const matB3 = calcAvg(["aritmetica", "algebra", "geometria", "trigonometria", "raz_matematico"], "b3");
    const matB4 = calcAvg(["aritmetica", "algebra", "geometria", "trigonometria", "raz_matematico"], "b4");

    const ctaB1 = calcAvg(["biologia", "fisica", "quimica"], "b1");
    const ctaB2 = calcAvg(["biologia", "fisica", "quimica"], "b2");
    const ctaB3 = calcAvg(["biologia", "fisica", "quimica"], "b3");
    const ctaB4 = calcAvg(["biologia", "fisica", "quimica"], "b4");

    const ccB1 = calcAvg(["geografia", "filosofia", "historia_peru", "historia_universal"], "b1");
    const ccB2 = calcAvg(["geografia", "filosofia", "historia_peru", "historia_universal"], "b2");
    const ccB3 = calcAvg(["geografia", "filosofia", "historia_peru", "historia_universal"], "b3");
    const ccB4 = calcAvg(["geografia", "filosofia", "historia_peru", "historia_universal"], "b4");

    const dpccB1 = calcAvg(["civica", "psicologia"], "b1");
    const dpccB2 = calcAvg(["civica", "psicologia"], "b2");
    const dpccB3 = calcAvg(["civica", "psicologia"], "b3");
    const dpccB4 = calcAvg(["civica", "psicologia"], "b4");

    const eptB1 = calcAvg(["computacion", "gestion_empresarial"], "b1");
    const eptB2 = calcAvg(["computacion", "gestion_empresarial"], "b2");
    const eptB3 = calcAvg(["computacion", "gestion_empresarial"], "b3");
    const eptB4 = calcAvg(["computacion", "gestion_empresarial"], "b4");

    const val = (k, b) => (g[k] && g[k][b]) || "";

    return `
      <div class="fade-in">
        
        <!-- Barra Superior de Control (No Imprimible) -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px; background: white; padding: 14px 18px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 8px rgba(0,0,0,0.05);" class="no-print">
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-outline btn-sm" onclick="window.app.navigate('calificaciones')">← Volver al Registro de Notas</button>
            
            <!-- Selector de Alumno -->
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 12px; font-weight: 800; color: var(--color-navy-900);">Alumno(a):</span>
              <select class="form-control" style="font-size: 12px; font-weight: bold; width: auto; padding: 4px 10px;" onchange="window.app.changeBoletaStudent(this.value)">
                <option value="mendez" ${selectedStudentKey === 'mendez' ? 'selected' : ''}>MÉNDEZ FLORES, SOFÍA (4° de Secundaria)</option>
                <option value="benitez" ${selectedStudentKey === 'benitez' ? 'selected' : ''}>BENÍTEZ RUIZ, CARLOS (4° de Secundaria)</option>
                <option value="albujar" ${selectedStudentKey === 'albujar' ? 'selected' : ''}>ALBUJAR ZEGARRA, MARINA DEL CARMEN (2° de Secundaria)</option>
              </select>
            </div>
          </div>
          
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="btn btn-navy" onclick="window.print()" style="font-weight: 800; font-size: 13px; padding: 9px 20px;">
              [Imprimir] Imprimir Boleta Oficial Completa (PDF / Doble Cara)
            </button>
          </div>
        </div>

        <!-- =========================================================================
             PÁGINA 1: CALIFICATIVO DEL APRENDIZAJE & ASISTENCIA & APRECIACIÓN
             ========================================================================= -->
        <div class="official-boleta-page official-boleta-page-1" style="background-image: url('assets/boleta_document_bg.png'); background-size: 100% 100%; background-repeat: no-repeat; background-position: center; padding: 12px 14px;">
          
          <div class="boleta-main-title">
            BOLETA DE INFORMACIÓN DEL PROGRESO DEL APRENDIZAJE DEL ESTUDIANTE – 2026
          </div>

          <div class="boleta-page-1-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: start; width: 100%;">
            
            <!-- Columna Izquierda: Tabla de Calificaciones por Áreas -->
            <div>
              <table class="boleta-table">
                <thead>
                  <tr>
                    <th rowspan="2" style="width: 50%; text-align: left; padding-left: 6px;">AREAS / ASIGNATURAS</th>
                    <th colspan="4" style="width: 36%;">CALIFICATIVO POR BIMESTRE</th>
                    <th rowspan="2" style="width: 14%;">P. F</th>
                  </tr>
                  <tr>
                    <th style="width: 9%;">I</th>
                    <th style="width: 9%;">II</th>
                    <th style="width: 9%;">III</th>
                    <th style="width: 9%;">IV</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- COMUNICACIÓN -->
                  <tr><td>LENGUAJE</td><td style="text-align:center;">${val("lenguaje","b1")}</td><td style="text-align:center;">${val("lenguaje","b2")}</td><td style="text-align:center;">${val("lenguaje","b3")}</td><td style="text-align:center;">${val("lenguaje","b4")}</td><td style="text-align:center;">${calcPF("lenguaje")}</td></tr>
                  <tr><td>LITERATURA</td><td style="text-align:center;">${val("literatura","b1")}</td><td style="text-align:center;">${val("literatura","b2")}</td><td style="text-align:center;">${val("literatura","b3")}</td><td style="text-align:center;">${val("literatura","b4")}</td><td style="text-align:center;">${calcPF("literatura")}</td></tr>
                  <tr><td>RAZONAMIENTO VERBAL</td><td style="text-align:center;">${val("raz_verbal","b1")}</td><td style="text-align:center;">${val("raz_verbal","b2")}</td><td style="text-align:center;">${val("raz_verbal","b3")}</td><td style="text-align:center;">${val("raz_verbal","b4")}</td><td style="text-align:center;">${calcPF("raz_verbal")}</td></tr>
                  <tr class="boleta-yellow-row"><td>PROMEDIO DE COMUNICACIÓN</td><td style="text-align:center;">${comB1}</td><td style="text-align:center;">${comB2}</td><td style="text-align:center;">${comB3}</td><td style="text-align:center;">${comB4}</td><td style="text-align:center;">${comB1 && comB2 ? comB1 : ''}</td></tr>

                  <!-- MATEMÁTICA -->
                  <tr><td>ARITMÉTICA</td><td style="text-align:center;">${val("aritmetica","b1")}</td><td style="text-align:center;">${val("aritmetica","b2")}</td><td style="text-align:center;">${val("aritmetica","b3")}</td><td style="text-align:center;">${val("aritmetica","b4")}</td><td style="text-align:center;">${calcPF("aritmetica")}</td></tr>
                  <tr><td>ÁLGEBRA</td><td style="text-align:center;">${val("algebra","b1")}</td><td style="text-align:center;">${val("algebra","b2")}</td><td style="text-align:center;">${val("algebra","b3")}</td><td style="text-align:center;">${val("algebra","b4")}</td><td style="text-align:center;">${calcPF("algebra")}</td></tr>
                  <tr><td>GEOMETRÍA</td><td style="text-align:center;">${val("geometria","b1")}</td><td style="text-align:center;">${val("geometria","b2")}</td><td style="text-align:center;">${val("geometria","b3")}</td><td style="text-align:center;">${val("geometria","b4")}</td><td style="text-align:center;">${calcPF("geometria")}</td></tr>
                  <tr><td>TRIGONOMETRÍA</td><td style="text-align:center;">${val("trigonometria","b1")}</td><td style="text-align:center;">${val("trigonometria","b2")}</td><td style="text-align:center;">${val("trigonometria","b3")}</td><td style="text-align:center;">${val("trigonometria","b4")}</td><td style="text-align:center;">${calcPF("trigonometria")}</td></tr>
                  <tr><td>RAZONAMIENTO MATEMÁTICO</td><td style="text-align:center;">${val("raz_matematico","b1")}</td><td style="text-align:center;">${val("raz_matematico","b2")}</td><td style="text-align:center;">${val("raz_matematico","b3")}</td><td style="text-align:center;">${val("raz_matematico","b4")}</td><td style="text-align:center;">${calcPF("raz_matematico")}</td></tr>
                  <tr class="boleta-yellow-row"><td>PROMEDIO DE MATEMÁTICA</td><td style="text-align:center;">${matB1}</td><td style="text-align:center;">${matB2}</td><td style="text-align:center;">${matB3}</td><td style="text-align:center;">${matB4}</td><td style="text-align:center;">${matB1 && matB2 ? matB1 : ''}</td></tr>

                  <!-- CIENCIA Y TECNOLOGÍA -->
                  <tr><td>BIOLOGÍA</td><td style="text-align:center;">${val("biologia","b1")}</td><td style="text-align:center;">${val("biologia","b2")}</td><td style="text-align:center;">${val("biologia","b3")}</td><td style="text-align:center;">${val("biologia","b4")}</td><td style="text-align:center;">${calcPF("biologia")}</td></tr>
                  <tr><td>FÍSICA</td><td style="text-align:center;">${val("fisica","b1")}</td><td style="text-align:center;">${val("fisica","b2")}</td><td style="text-align:center;">${val("fisica","b3")}</td><td style="text-align:center;">${val("fisica","b4")}</td><td style="text-align:center;">${calcPF("fisica")}</td></tr>
                  <tr><td>QUÍMICA</td><td style="text-align:center;">${val("quimica","b1")}</td><td style="text-align:center;">${val("quimica","b2")}</td><td style="text-align:center;">${val("quimica","b3")}</td><td style="text-align:center;">${val("quimica","b4")}</td><td style="text-align:center;">${calcPF("quimica")}</td></tr>
                  <tr class="boleta-yellow-row"><td>PROMEDIO DE CIENCIA Y TECNOLOGÍA</td><td style="text-align:center;">${ctaB1}</td><td style="text-align:center;">${ctaB2}</td><td style="text-align:center;">${ctaB3}</td><td style="text-align:center;">${ctaB4}</td><td style="text-align:center;">${ctaB1 && ctaB2 ? ctaB1 : ''}</td></tr>

                  <!-- CIENCIAS SOCIALES -->
                  <tr><td>GEOGRAFÍA</td><td style="text-align:center;">${val("geografia","b1")}</td><td style="text-align:center;">${val("geografia","b2")}</td><td style="text-align:center;">${val("geografia","b3")}</td><td style="text-align:center;">${val("geografia","b4")}</td><td style="text-align:center;">${calcPF("geografia")}</td></tr>
                  <tr><td>FILOSOFÍA</td><td style="text-align:center;">${val("filosofia","b1")}</td><td style="text-align:center;">${val("filosofia","b2")}</td><td style="text-align:center;">${val("filosofia","b3")}</td><td style="text-align:center;">${val("filosofia","b4")}</td><td style="text-align:center;">${calcPF("filosofia")}</td></tr>
                  <tr><td>HISTORIA DEL PERÚ</td><td style="text-align:center;">${val("historia_peru","b1")}</td><td style="text-align:center;">${val("historia_peru","b2")}</td><td style="text-align:center;">${val("historia_peru","b3")}</td><td style="text-align:center;">${val("historia_peru","b4")}</td><td style="text-align:center;">${calcPF("historia_peru")}</td></tr>
                  <tr><td>HISTORIA UNIVERSAL</td><td style="text-align:center;">${val("historia_universal","b1")}</td><td style="text-align:center;">${val("historia_universal","b2")}</td><td style="text-align:center;">${val("historia_universal","b3")}</td><td style="text-align:center;">${val("historia_universal","b4")}</td><td style="text-align:center;">${calcPF("historia_universal")}</td></tr>
                  <tr class="boleta-yellow-row"><td>PROMEDIO DE CIENCIAS SOCIALES</td><td style="text-align:center;">${ccB1}</td><td style="text-align:center;">${ccB2}</td><td style="text-align:center;">${ccB3}</td><td style="text-align:center;">${ccB4}</td><td style="text-align:center;">${ccB1 && ccB2 ? ccB1 : ''}</td></tr>

                  <!-- DPCC -->
                  <tr><td>CÍVICA</td><td style="text-align:center;">${val("civica","b1")}</td><td style="text-align:center;">${val("civica","b2")}</td><td style="text-align:center;">${val("civica","b3")}</td><td style="text-align:center;">${val("civica","b4")}</td><td style="text-align:center;">${calcPF("civica")}</td></tr>
                  <tr><td>PSICOLOGÍA</td><td style="text-align:center;">${val("psicologia","b1")}</td><td style="text-align:center;">${val("psicologia","b2")}</td><td style="text-align:center;">${val("psicologia","b3")}</td><td style="text-align:center;">${val("psicologia","b4")}</td><td style="text-align:center;">${calcPF("psicologia")}</td></tr>
                  <tr class="boleta-yellow-row"><td>PROMEDIO DE DESARROLLO PERSONAL, CIUDADANÍA Y CÍVICA</td><td style="text-align:center;">${dpccB1}</td><td style="text-align:center;">${dpccB2}</td><td style="text-align:center;">${dpccB3}</td><td style="text-align:center;">${dpccB4}</td><td style="text-align:center;">${dpccB1 && dpccB2 ? dpccB1 : ''}</td></tr>

                  <!-- EDUCACIÓN PARA EL TRABAJO -->
                  <tr><td>COMPUTACIÓN</td><td style="text-align:center;">${val("computacion","b1")}</td><td style="text-align:center;">${val("computacion","b2")}</td><td style="text-align:center;">${val("computacion","b3")}</td><td style="text-align:center;">${val("computacion","b4")}</td><td style="text-align:center;">${calcPF("computacion")}</td></tr>
                  <tr><td>GESTIÓN EMPRESARIAL</td><td style="text-align:center;">${val("gestion_empresarial","b1")}</td><td style="text-align:center;">${val("gestion_empresarial","b2")}</td><td style="text-align:center;">${val("gestion_empresarial","b3")}</td><td style="text-align:center;">${val("gestion_empresarial","b4")}</td><td style="text-align:center;">${calcPF("gestion_empresarial")}</td></tr>
                  <tr class="boleta-yellow-row"><td>PROMEDIO EDUCACIÓN PARA EL TRABAJO</td><td style="text-align:center;">${eptB1}</td><td style="text-align:center;">${eptB2}</td><td style="text-align:center;">${eptB3}</td><td style="text-align:center;">${eptB4}</td><td style="text-align:center;">${eptB1 && eptB2 ? eptB1 : ''}</td></tr>

                  <!-- OTRAS ÁREAS -->
                  <tr><td>ARTE Y CULTURA</td><td style="text-align:center;">${val("arte_cultura","b1")}</td><td style="text-align:center;">${val("arte_cultura","b2")}</td><td style="text-align:center;">${val("arte_cultura","b3")}</td><td style="text-align:center;">${val("arte_cultura","b4")}</td><td style="text-align:center;">${calcPF("arte_cultura")}</td></tr>
                  <tr><td>EDUCACIÓN RELIGIOSA (VALORES Y LID.)</td><td style="text-align:center;">${val("religion","b1")}</td><td style="text-align:center;">${val("religion","b2")}</td><td style="text-align:center;">${val("religion","b3")}</td><td style="text-align:center;">${val("religion","b4")}</td><td style="text-align:center;">${calcPF("religion")}</td></tr>
                  <tr><td>EDUCACIÓN FÍSICA</td><td style="text-align:center;">${val("educ_fisica","b1")}</td><td style="text-align:center;">${val("educ_fisica","b2")}</td><td style="text-align:center;">${val("educ_fisica","b3")}</td><td style="text-align:center;">${val("educ_fisica","b4")}</td><td style="text-align:center;">${calcPF("educ_fisica")}</td></tr>
                  <tr><td>INGLÉS</td><td style="text-align:center;">${val("ingles","b1")}</td><td style="text-align:center;">${val("ingles","b2")}</td><td style="text-align:center;">${val("ingles","b3")}</td><td style="text-align:center;">${val("ingles","b4")}</td><td style="text-align:center;">${calcPF("ingles")}</td></tr>
                  
                  <!-- COMPETENCIAS TRANSVERSALES -->
                  <tr><td colspan="6" style="font-size: 9.5px; padding: 3px 5px;"><strong>SE DESENVUELVE EN ENTORNOS VIRTUALES GENERADOS POR LAS TIC</strong></td></tr>
                  <tr>
                    <td colspan="6" style="font-size: 8.5px; line-height: 1.25; padding: 3px 5px;">
                      <strong>GESTIONA SU APRENDIZAJE DE MANERA AUTÓNOMA</strong>, permite que los estudiantes participen activamente en el logro de aprendizajes tomando en cuenta sus potencialidades y a organizarse por sí mismos frente a esta necesidad.
                    </td>
                  </tr>
                  <tr class="boleta-yellow-row">
                    <td>CONDUCTA</td>
                    <td style="text-align:center;">${val("conducta","b1")}</td>
                    <td style="text-align:center;">${val("conducta","b2")}</td>
                    <td style="text-align:center;">${val("conducta","b3")}</td>
                    <td style="text-align:center;">${val("conducta","b4")}</td>
                    <td style="text-align:center;">${val("conducta","b1") && val("conducta","b2") ? val("conducta","b1") : ''}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Columna Derecha: Asistencia, Apreciación y Escala -->
            <div>
              
              <!-- Resumen de Asistencia -->
              <div style="text-align: center; margin-bottom: 6px;">
                <div class="boleta-badge-title">RESUMEN DE ASISTENCIA DEL ESTUDIANTE</div>
              </div>

              <table class="boleta-table" style="margin-bottom: 12px;">
                <thead>
                  <tr>
                    <th rowspan="2" style="width: 20%;">PERIODO</th>
                    <th colspan="2" style="width: 40%;">INASISTENCIAS</th>
                    <th colspan="2" style="width: 40%;">TARDANZAS</th>
                  </tr>
                  <tr>
                    <th>JUSTIFICADAS</th>
                    <th>INJUSTIFICADAS</th>
                    <th>JUSTIFICADAS</th>
                    <th>INJUSTIFICADAS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:center; font-weight:bold;">I BIM</td>
                    <td style="text-align:center;">${(att.b1 && att.b1.inasist_just) || '-'}</td>
                    <td style="text-align:center;">${(att.b1 && att.b1.inasist_injust) || '-'}</td>
                    <td style="text-align:center;">${(att.b1 && att.b1.tard_just) || '-'}</td>
                    <td style="text-align:center;">${(att.b1 && att.b1.tard_injust) || '-'}</td>
                  </tr>
                  <tr>
                    <td style="text-align:center; font-weight:bold;">II BIM</td>
                    <td style="text-align:center;">${(att.b2 && att.b2.inasist_just) || '-'}</td>
                    <td style="text-align:center;">${(att.b2 && att.b2.inasist_injust) || '-'}</td>
                    <td style="text-align:center;">${(att.b2 && att.b2.tard_just) || '-'}</td>
                    <td style="text-align:center;">${(att.b2 && att.b2.tard_injust) || '-'}</td>
                  </tr>
                  <tr>
                    <td style="text-align:center; font-weight:bold;">III BIM</td>
                    <td style="text-align:center;">${(att.b3 && att.b3.inasist_just) || ''}</td>
                    <td style="text-align:center;">${(att.b3 && att.b3.inasist_injust) || ''}</td>
                    <td style="text-align:center;">${(att.b3 && att.b3.tard_just) || ''}</td>
                    <td style="text-align:center;">${(att.b3 && att.b3.tard_injust) || ''}</td>
                  </tr>
                  <tr>
                    <td style="text-align:center; font-weight:bold;">IV BIM</td>
                    <td style="text-align:center;">${(att.b4 && att.b4.inasist_just) || ''}</td>
                    <td style="text-align:center;">${(att.b4 && att.b4.inasist_injust) || ''}</td>
                    <td style="text-align:center;">${(att.b4 && att.b4.tard_just) || ''}</td>
                    <td style="text-align:center;">${(att.b4 && att.b4.tard_injust) || ''}</td>
                  </tr>
                </tbody>
              </table>

              <!-- Apreciación del Docente -->
              <div style="text-align: center; margin-bottom: 6px;">
                <div class="boleta-badge-title">APRECIACIÓN DEL DOCENTE</div>
              </div>

              <div class="boleta-appreciation-box">
                <div class="boleta-appreciation-left">
                  <div class="boleta-appreciation-item">
                    <span class="boleta-appreciation-tag">I BIM:</span>
                    <div>
                      ${app.b1 || `Felicitaciones a <strong>${student.name}</strong> por su excelente rendimiento. Demuestra responsabilidad, participación activa y compromiso con su aprendizaje.`}
                    </div>
                  </div>
                  <div class="boleta-appreciation-item">
                    <span class="boleta-appreciation-tag">II BIM:</span>
                    <div>
                      ${app.b2 || `Has realizado un trabajo muy bueno durante este segundo bimestre. Cumples con responsabilidad tus actividades dentro de la clase.`}
                    </div>
                  </div>
                  <div class="boleta-appreciation-item" style="min-height: 24px;">
                    <span class="boleta-appreciation-tag">III BIM:</span>
                    <div>${app.b3 || ''}</div>
                  </div>
                  <div class="boleta-appreciation-item" style="min-height: 24px;">
                    <span class="boleta-appreciation-tag">IV BIM:</span>
                    <div>${app.b4 || ''}</div>
                  </div>
                </div>
                <div class="boleta-parent-sig-box">
                  FIRMA DEL PADRE
                </div>
              </div>

              <!-- Escala de Calificación Literal Oficial -->
              <div class="boleta-scale-legend">
                <div style="margin-bottom: 4px;">
                  <strong style="color: #1e3a8a;">AD &nbsp; LOGRO DESTACADO:</strong><br>
                  Cuando el estudiante evidencia un nivel superior a lo esperado respecto a la competencia. Esto quiere decir que demuestra aprendizajes que van más allá del nivel esperado.
                </div>
                <div style="margin-bottom: 4px;">
                  <strong style="color: #1e3a8a;">A &nbsp; LOGRO ESPERADO:</strong><br>
                  Cuando el estudiante evidencia el nivel esperado respecto a la competencia, demostrando manejo satisfactorio en todas las tareas propuestas y en el tiempo programado.
                </div>
                <div style="margin-bottom: 4px;">
                  <strong style="color: #1e3a8a;">B &nbsp; EN PROCESO:</strong><br>
                  Cuando el estudiante está próximo o cerca al nivel esperado respecto a la competencia, para lo cual requiere acompañamiento durante un tiempo razonable para lograrlo.
                </div>
                <div>
                  <strong style="color: #1e3a8a;">C &nbsp; EN INICIO:</strong><br>
                  Cuando el estudiante muestra un progreso mínimo en una competencia de acuerdo al nivel esperado. Evidencia con frecuencia dificultades en el desarrollo de las tareas, por lo que necesita mayor tiempo de acompañamiento e intervención del docente.
                </div>
              </div>

            </div>

          </div>

        </div>

        <!-- =========================================================================
             PÁGINA 2: PARTICIPACIÓN DE PADRES & CARÁTULA OFICIAL
             ========================================================================= -->
        <div class="official-boleta-page official-boleta-page-2" style="background-image: url('assets/boleta_document_bg.png'); background-size: 100% 100%; background-repeat: no-repeat; background-position: center; padding: 12px 14px;">
          
          <div class="boleta-page-2-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: stretch; height: 100%;">
            
            <!-- Columna Izquierda: Participación de Padres & Compromiso & Firmas -->
            <div class="boleta-page-2-left-box" style="display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #000000; border-radius: 8px; padding: 14px 16px; box-sizing: border-box; height: 100%; background: rgba(255, 255, 255, 0.94);">
              <div>
                <div style="text-align: center; margin-bottom: 8px;">
                  <div class="boleta-badge-title" style="font-size: 8.5pt; padding: 3px 14px;">PARTICIPACIÓN DE LOS PADRES DE FAMILIA</div>
                </div>

                <table class="boleta-table" style="margin-bottom: 10px;">
                  <thead>
                    <tr>
                      <th rowspan="2" style="width: 60%; text-align: left; padding: 4px 6px; background:#fef08a;">CRITERIOS DE EVALUACIÓN</th>
                      <th colspan="4" style="background:#fef08a; padding: 4px;">BIMESTRES</th>
                      <th rowspan="2" style="background:#fef08a; width: 10%; padding: 4px;">P.F</th>
                    </tr>
                    <tr>
                      <th style="background:#fef08a; width: 7%; padding: 3px;">I</th>
                      <th style="background:#fef08a; width: 7%; padding: 3px;">II</th>
                      <th style="background:#fef08a; width: 7%; padding: 3px;">III</th>
                      <th style="background:#fef08a; width: 7%; padding: 3px;">IV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 4px 5px;">1. Se interesa por el aprendizaje de su hijo(a).</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c1 && pc.c1.b1) || 'A'}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c1 && pc.c1.b2) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c1 && pc.c1.b3) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c1 && pc.c1.b4) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c1 && pc.c1.b1) || 'A'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 5px;">2. Envía oportunamente sus materiales (útiles escolares).</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c2 && pc.c2.b1) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c2 && pc.c2.b2) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c2 && pc.c2.b3) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c2 && pc.c2.b4) || ''}</td>
                      <td style="text-align:center; font-weight:bold;"></td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 5px;">3. Participa en actividades en el aula e Institución Educativa.</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c3 && pc.c3.b1) || 'A'}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c3 && pc.c3.b2) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c3 && pc.c3.b3) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c3 && pc.c3.b4) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c3 && pc.c3.b1) || 'A'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 5px;">4. Envía puntualmente a su hijo(a) a la Institución Educativa.</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c4 && pc.c4.b1) || 'A'}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c4 && pc.c4.b2) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c4 && pc.c4.b3) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c4 && pc.c4.b4) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c4 && pc.c4.b1) || 'A'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 5px;">5. Asiste a la Escuela de Padres.</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c5 && pc.c5.b1) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c5 && pc.c5.b2) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c5 && pc.c5.b3) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c5 && pc.c5.b4) || ''}</td>
                      <td style="text-align:center; font-weight:bold;"></td>
                    </tr>
                    <tr>
                      <td style="padding: 4px 5px;">6. Padres / apoderados, se comunican con frecuencia para conocer la situación de su hijo(a).</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c6 && pc.c6.b1) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c6 && pc.c6.b2) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c6 && pc.c6.b3) || ''}</td>
                      <td style="text-align:center; font-weight:bold;">${(pc.c6 && pc.c6.b4) || ''}</td>
                      <td style="text-align:center; font-weight:bold;"></td>
                    </tr>
                  </tbody>
                </table>

                <!-- Compromiso Formativo del Apoderado -->
                <div style="border: 1.2px solid #000000; border-radius: 6px; padding: 6px 8px; background: #f8fafc; font-size: 7.6pt; line-height: 1.3; margin-top: 8px;">
                  <strong style="color: #1e3a8a; display: block; margin-bottom: 2px;">COMPROMISO DEL APODERADO:</strong>
                  El padre o tutor legal se compromete a acompañar el desarrollo formativo y académico de su menor hijo(a), velando por su puntualidad y asistiendo a las reuniones pedagógicas convocadas por la Institución.
                </div>
              </div>

              <!-- Pie de Firmas Oficiales con Sellos -->
              <div style="display: flex; justify-content: space-around; text-align: center; margin-top: auto; padding-top: 28px;">
                <div style="border-top: 1.5px solid #000000; width: 150px; padding-top: 4px; font-size: 10px; font-weight: 800;">
                  TUTOR(A) DE AULA
                </div>
                <div style="border-top: 1.5px solid #000000; width: 150px; padding-top: 4px; font-size: 10px; font-weight: 800;">
                  DIRECCIÓN GENERAL
                </div>
              </div>
            </div>

            <!-- Columna Derecha: Carátula Oficial Institucional (Fondo Oficial de la Institución) -->
            <div class="boleta-cover-container" style="position: relative; height: 100%; min-height: 198mm; box-sizing: border-box; overflow: hidden; border-radius: 4px; padding: 0; background: #ffffff;">
              
              <!-- Imagen Oficial como Fondo Completo -->
              <img src="assets/boleta_cover_official_bg.png" alt="Carátula Oficial El Educador" style="width: 100%; height: 100%; object-fit: fill; display: block;" />

              <!-- Cajetín Dinámico del Estudiante sobre el espacio amarillo de la plantilla -->
              <div style="position: absolute; bottom: 12.8%; left: 13.5%; width: 73%; height: 14.8%; display: flex; flex-direction: column; justify-content: center; font-size: 8.5pt; line-height: 1.35; color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 800; text-align: left; box-sizing: border-box; padding: 2px 6px;">
                
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 2px;">
                  <span style="font-weight: 900; font-size: 8.2pt;">APELLIDOS Y NOMBRES:</span> 
                  <strong style="text-transform: uppercase; font-size: 8.8pt; color: #000000;">${student.name}</strong>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                  <div>
                    <span style="font-weight: 900; font-size: 8.2pt;">GRADO:</span> <strong>${student.grade}</strong>
                  </div>
                  <div>
                    <span style="font-weight: 900; font-size: 8.2pt;">NIVEL:</span> <strong>${student.level}</strong>
                  </div>
                </div>

                <div style="margin-bottom: 2px;">
                  <span style="font-weight: 900; font-size: 8.2pt;">SECCIÓN:</span> <strong>${student.section ? student.section : 'Única'}</strong>
                </div>

                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  <span style="font-weight: 900; font-size: 8.2pt;">TUTOR (A):</span> 
                  <strong style="color: #000000;">${student.tutor}</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    `;
  },

  // Horarios
  // Generador Completo y Sincronizado de Docentes y Horarios Semanales (Sin autorrellenado)
  getComprehensiveTeachersList(state) {
    const rawTeachers = (state.teachersList && state.teachersList.length > 0)
      ? JSON.parse(JSON.stringify(state.teachersList))
      : (JSON.parse(JSON.stringify((initialData && initialData.teachersList) || [])));

    const systemDocentes = ((state.systemUsers && Array.isArray(state.systemUsers)) ? state.systemUsers : ((initialData && initialData.systemUsers) || []))
      .filter(u => u.role === 'Docente' || u.role === 'Profesor');

    systemDocentes.forEach(doc => {
      let existing = rawTeachers.find(t => t.id === doc.id || t.name.toLowerCase().trim() === doc.name.toLowerCase().trim());
      const docCourses = Array.isArray(doc.assignedCourses) && doc.assignedCourses.length > 0
        ? doc.assignedCourses
        : (Array.isArray(doc.courses) && doc.courses.length > 0
          ? doc.courses
          : (doc.subject ? doc.subject.split(/,\s*/) : ["Matemática"]));
      const docGrades = Array.isArray(doc.assignedGrades) && doc.assignedGrades.length > 0
        ? doc.assignedGrades
        : [];
      const weeklyHrs = doc.weeklyHours ? parseInt(doc.weeklyHours, 10) || 24 : 24;

      if (existing) {
        if (!existing.courses || existing.courses.length === 0) existing.courses = docCourses;
        if (!existing.assignedGrades || existing.assignedGrades.length === 0) existing.assignedGrades = docGrades;
        if (!existing.subject) existing.subject = doc.subject || docCourses.join(', ');
      } else {
        rawTeachers.push({
          id: doc.id || `DOC-${Date.now().toString().slice(-4)}`,
          name: doc.name,
          subject: doc.subject || docCourses.join(', '),
          department: "Área Pedagógica",
          isTutor: false,
          tutoringGrade: null,
          weeklyHours: weeklyHrs,
          assignedGrades: docGrades,
          classrooms: [],
          courses: docCourses,
          schedule: []
        });
      }
    });

    const allSchedules = (state.schedules && typeof state.schedules === 'object') ? state.schedules : ((initialData && initialData.schedules) || {});
    const gradesCatalog = (state.gradesCatalog && state.gradesCatalog.length > 0) ? state.gradesCatalog : ((initialData && initialData.gradesCatalog) || []);
    
    const gradeLabelMap = {};
    gradesCatalog.forEach(g => {
      gradeLabelMap[g.id] = g.label;
    });

    const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

    // Normalizador de nombres para coincidencias precisas
    const normalizeTeacherName = (str) => {
      if (!str) return "";
      return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/^(prof\.|prof|miss|dra\.|dra|lic\.|lic|ing\.|ing)\s*/i, '').trim();
    };

    rawTeachers.forEach(t => {
      // Plantilla base limpia con 8 bloques lectivos de 50 min y 2 recesos (Sin clases inventadas)
      t.schedule = [
        { time: "08:00 - 08:50", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "08:50 - 09:40", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "09:40 - 10:30", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "10:30 - 10:50", isBreak: true, title: "Receso Pedagógico (10:30 - 10:50 AM)" },
        { time: "10:50 - 11:40", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "11:40 - 12:30", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "12:30 - 01:20", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "01:20 - 01:50", isBreak: true, isLunch: true, title: "Almuerzo Escolar (01:20 - 01:50 PM)" },
        { time: "01:50 - 02:40", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "02:40 - 03:30", mon: null, tue: null, wed: null, thu: null, fri: null }
      ];

      const tClean = normalizeTeacherName(t.name);
      const tParts = tClean.split(/\s+/).filter(Boolean);

      let assignedCount = 0;
      const scheduledCoursesSet = new Set();
      const scheduledGradesSet = new Set();
      const scheduledRoomsSet = new Set();

      // Escanear exclusivamente las clases reales asignadas por el administrador en las aulas
      Object.keys(allSchedules).forEach(gradeKey => {
        const gRows = allSchedules[gradeKey];
        const gradeLabel = gradeLabelMap[gradeKey] || (gradeKey === "4sec" || gradeKey === "4sec-a" ? "4° de Secundaria" : gradeKey.toUpperCase());
        
        if (Array.isArray(gRows)) {
          gRows.forEach((gRow, rIdx) => {
            if (!gRow.isBreak && t.schedule[rIdx] && !t.schedule[rIdx].isBreak) {
              days.forEach(dayKey => {
                const slot = gRow[dayKey];
                if (slot && slot.teacher) {
                  const sTeacherClean = normalizeTeacherName(slot.teacher);
                  const sParts = sTeacherClean.split(/\s+/).filter(Boolean);
                  let isMatch = false;

                  if (sTeacherClean === tClean || sTeacherClean.includes(tClean) || tClean.includes(sTeacherClean)) {
                    isMatch = true;
                  } else if (tParts.length >= 2 && sParts.length >= 2) {
                    const lastT = tParts[tParts.length - 1];
                    const lastS = sParts[sParts.length - 1];
                    if (lastT === lastS && (tParts[0] === sParts[0] || tParts[0][0] === sParts[0][0])) {
                      isMatch = true;
                    }
                  } else if (tParts.length >= 1 && sParts.length >= 1) {
                    const lastT = tParts[tParts.length - 1];
                    const lastS = sParts[sParts.length - 1];
                    if (lastT === lastS && lastT.length > 3) {
                      isMatch = true;
                    }
                  }

                  if (isMatch) {
                    t.schedule[rIdx][dayKey] = {
                      course: slot.course,
                      grade: gradeLabel,
                      gradeId: gradeKey,
                      rowIndex: rIdx,
                      dayKey: dayKey,
                      room: slot.room || "Aula Principal",
                      color: slot.color || "navy"
                    };
                    assignedCount++;
                    if (slot.course) scheduledCoursesSet.add(slot.course);
                    scheduledGradesSet.add(gradeLabel);
                    if (slot.room) scheduledRoomsSet.add(slot.room);
                  }
                }
              });
            }
          });
        }
      });

      t.assignedSlotCount = assignedCount;
      t.calculatedHours = assignedCount > 0 ? `${(assignedCount * 50 / 60).toFixed(1)} hrs (${assignedCount} bloques)` : "0 hrs (Sin clases asignadas)";
      t.scheduledCourses = Array.from(scheduledCoursesSet);
      t.scheduledGrades = Array.from(scheduledGradesSet);
      t.scheduledRooms = Array.from(scheduledRoomsSet);
    });

    return rawTeachers;
  },

  // Horarios (Gestión Dual: Horario Docente Personal y Horario por Aula)
  renderSchedules(state) {
    try {
      const role = state.currentRole || "admin";
      const hasAdminEditPower = role === "admin" || role === "director" || (role === "docente" && state.users && state.users.docente && state.users.docente.hasAdminPrivileges);
      
      const catalog = (state.gradesCatalog && state.gradesCatalog.length > 0) 
        ? state.gradesCatalog 
        : ((initialData && initialData.gradesCatalog) || []);
        
      const teachersList = this.getComprehensiveTeachersList(state);
      
      // Vista dual para docentes y directivos: Por defecto "classroom" para Administrador y "personal" para Docente
      const isTeacherOrAdmin = role === "docente" || role === "admin" || role === "director";
      const defaultTab = (role === "admin" || role === "director") ? "classroom" : "personal";
      const activeTab = isTeacherOrAdmin ? (state.teacherScheduleTab || defaultTab) : "classroom";

      // Docente seleccionado
      let selectedTeacherId = state.selectedTeacherId;
      if (!selectedTeacherId || !teachersList.some(t => t.id === selectedTeacherId)) {
        if (role === "docente") {
          const userDoc = (state.users && state.users.docente) || (state.systemUsers || []).find(u => u.username === "docente" || u.role === "Docente");
          const match = userDoc && teachersList.find(t => t.name.toLowerCase().includes(userDoc.name.toLowerCase()) || userDoc.name.toLowerCase().includes(t.name.toLowerCase()));
          selectedTeacherId = match ? match.id : teachersList[0].id;
        } else {
          selectedTeacherId = teachersList[0].id;
        }
      }

      const currentTeacher = teachersList.find(t => t.id === selectedTeacherId) || teachersList[0];

      const teacherCourses = (currentTeacher.scheduledCourses && currentTeacher.scheduledCourses.length > 0)
        ? currentTeacher.scheduledCourses
        : ((currentTeacher.courses && currentTeacher.courses.length > 0) ? currentTeacher.courses : [currentTeacher.subject || "Matemática"]);

      const teacherGrades = (currentTeacher.scheduledGrades && currentTeacher.scheduledGrades.length > 0)
        ? currentTeacher.scheduledGrades
        : ((currentTeacher.assignedGrades && currentTeacher.assignedGrades.length > 0) ? currentTeacher.assignedGrades : ["Sin asignar"]);

      const teacherClassrooms = (currentTeacher.scheduledRooms && currentTeacher.scheduledRooms.length > 0)
        ? currentTeacher.scheduledRooms
        : ((currentTeacher.classrooms && currentTeacher.classrooms.length > 0) ? currentTeacher.classrooms : ["Aula Principal"]);

      const teacherSchedule = Array.isArray(currentTeacher.schedule) ? currentTeacher.schedule : [];
      const teacherHours = currentTeacher.calculatedHours || `${currentTeacher.assignedSlotCount || 0} Bloques`;

      const courseFilter = state.selectedTeacherCourseFilter || "all";

      // Grado seleccionado para vista por aula
      let currentGradeId = state.selectedScheduleGrade || "4sec";
      if (currentGradeId === "4sec-a") currentGradeId = "4sec";

      if (role === "padre") {
        const parentUser = (state.users && state.users.padre) || (initialData && initialData.users && initialData.users.padre) || {};
        const children = parentUser.children || [];
        const selectedId = parentUser.selectedChildId || (children[0] && children[0].id) || "EST-2026-042";
        const student = children.find(c => c.id === selectedId) || children[0];
        if (student && student.gradeId) {
          currentGradeId = student.gradeId === "4sec-a" ? "4sec" : student.gradeId;
        }
      } else if (role === "estudiante") {
        currentGradeId = "4sec";
      }

      const currentGrade = catalog.find(g => g.id === currentGradeId) || catalog.find(g => g.id === "4sec") || catalog[0] || {
        id: "4sec",
        label: "4° de Secundaria",
        level: "Secundaria",
        classroom: "Aula 401",
        tutor: "Prof. Roberto Silva"
      };

      const allSchedules = (state.schedules && typeof state.schedules === 'object') 
        ? state.schedules 
        : ((initialData && initialData.schedules) || {});

      const fallbackScheduleTemplate = [
        { time: "08:00 - 08:50", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "08:50 - 09:40", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "09:40 - 10:30", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "10:30 - 10:50", isBreak: true, title: "Receso Pedagógico (10:30 - 10:50 AM)" },
        { time: "10:50 - 11:40", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "11:40 - 12:30", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "12:30 - 01:20", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "01:20 - 01:50", isBreak: true, isLunch: true, title: "Almuerzo Escolar (01:20 - 01:50 PM)" },
        { time: "01:50 - 02:40", mon: null, tue: null, wed: null, thu: null, fri: null },
        { time: "02:40 - 03:30", mon: null, tue: null, wed: null, thu: null, fri: null }
      ];

      const scheduleRows = Array.isArray(allSchedules[currentGradeId]) 
        ? allSchedules[currentGradeId] 
        : (Array.isArray(allSchedules["4sec"]) ? allSchedules["4sec"] : fallbackScheduleTemplate);

      const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
      const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

      return `
        <div class="fade-in">
          
          <!-- BANNER PRINCIPAL DE GESTIÓN Y CREACIÓN DE HORARIOS (ADMINISTRADOR) -->
          ${hasAdminEditPower ? `
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: #ffffff; padding: 16px 20px; border-radius: 10px; margin-bottom: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.15); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; border: 1px solid #3b82f6;">
              <div>
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <span style="font-size: 24px;">📅</span>
                  <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #ffffff;">Gestión y Creación de Horarios Escolares</h2>
                  <span class="status-badge" style="background: #f59e0b; color: #78350f; font-weight: 900; font-size: 11px;">
                    [Seguridad]️ Modo Administrador Activo
                  </span>
                </div>
                <p style="font-size: 12px; color: #cbd5e1; margin: 4px 0 0 0;">
                  Cree, asigne, modifique y organice los bloques lectivos y asignaturas para todos los grados y docentes.
                </p>
              </div>

              <!-- BOTONES DE ACCIÓN PRINCIPALES CON MÁXIMA VISIBILIDAD -->
              <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                <button class="btn" onclick="window.app.openCreateScheduleModal('${currentGradeId}')" style="background: #f59e0b; color: #0b132b; font-weight: 900; font-size: 13px; padding: 9px 18px; border: 2px solid #fbbf24; border-radius: 6px; box-shadow: 0 2px 10px rgba(245,158,11,0.5); display: flex; align-items: center; gap: 6px; cursor: pointer;">
                  <span style="font-size: 16px;">➕</span>
                  <span>+ CREAR / ASIGNAR CLASE</span>
                </button>
                <button class="btn btn-outline" onclick="window.app.setTeacherScheduleTab('${activeTab === 'personal' ? 'classroom' : 'personal'}')" style="background: rgba(255,255,255,0.18); color: #ffffff; border-color: rgba(255,255,255,0.5); font-weight: 800; font-size: 12px; padding: 8px 14px;">
                  ${activeTab === 'personal' ? '[Colegio] Ver Horario por Aula' : '👨‍[Colegio] Ver Horario Semanal Docente'}
                </button>
                <button class="btn btn-outline" onclick="window.app.openAutoScheduleModal('${currentGradeId}')" style="background: rgba(255,255,255,0.12); color: #ffffff; border-color: rgba(255,255,255,0.4); font-weight: 800; font-size: 12px; padding: 8px 14px;">
                  ⚡ Horario Automático
                </button>
                <button class="btn btn-outline" onclick="window.app.openCloneScheduleModal('${currentGradeId}')" style="background: rgba(255,255,255,0.12); color: #ffffff; border-color: rgba(255,255,255,0.4); font-weight: 800; font-size: 12px; padding: 8px 14px;">
                  [Lista] Clonar Horario
                </button>
                <button class="btn btn-outline" onclick="window.app.clearScheduleGrade('${currentGradeId}')" style="background: rgba(239,68,68,0.25); color: #fca5a5; border-color: #ef4444; font-weight: 800; font-size: 12px; padding: 8px 12px;">
                  🗑️ Limpiar
                </button>
              </div>
            </div>
          ` : ''}

          <!-- Pestañas de Navegación Segmentada Dual (Máxima Claridad) -->
          ${isTeacherOrAdmin ? `
            <div style="display: flex; gap: 8px; margin-bottom: 16px; background: #f1f5f9; padding: 6px; border-radius: 10px; border: 1px solid #cbd5e1; flex-wrap: wrap;">
              <button class="btn ${activeTab === 'classroom' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setTeacherScheduleTab('classroom')" style="flex: 1; min-width: 220px; font-weight: 900; font-size: 13px; padding: 10px 16px; border-radius: 8px; box-shadow: ${activeTab === 'classroom' ? '0 3px 10px rgba(30,58,138,0.25)' : 'none'}; display: flex; justify-content: center; align-items: center; gap: 8px;">
                <span>[Colegio]</span> Horario General por Aula / Grado (Secciones)
              </button>
              <button class="btn ${activeTab === 'personal' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setTeacherScheduleTab('personal')" style="flex: 1; min-width: 220px; font-weight: 900; font-size: 13px; padding: 10px 16px; border-radius: 8px; box-shadow: ${activeTab === 'personal' ? '0 3px 10px rgba(30,58,138,0.25)' : 'none'}; display: flex; justify-content: center; align-items: center; gap: 8px;">
                <span>👨‍[Colegio]</span> Horario Semanal por Docente (Carga Horaria & Cursos)
              </button>
            </div>
          ` : ''}

          ${activeTab === 'personal' ? `
            <!-- VISTA: MI HORARIO SEMANAL DOCENTE (DOCENTE DE CURSO) -->
            <div class="card" style="margin-bottom: var(--space-6);">
              
              <!-- Banner Informativo del Perfil Docente -->
              <div class="teacher-schedule-banner" style="background: linear-gradient(135deg, #1e3a8a 0%, #172554 100%); color: #ffffff; padding: 16px 20px; border-radius: 8px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <span style="font-size: 24px;">👨‍[Colegio]</span>
                    <h2 style="font-size: 19px; font-weight: 900; margin: 0; color: #ffffff;">${currentTeacher.name}</h2>
                    <span class="status-badge" style="background: #fef08a; color: #854d0e; font-weight: 900; font-size: 11px;">
                      Docente Curricular
                    </span>
                  </div>
                  <p style="font-size: 12.5px; opacity: 0.95; margin: 4px 0 0 0;">
                    ${currentTeacher.department || 'Área Pedagógica'} • Especialidad: <strong>${currentTeacher.subject || teacherCourses.join(', ')}</strong>
                  </p>
                </div>

                <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                  <label style="font-size: 12px; font-weight: 800; color: #e2e8f0;">Seleccionar Docente:</label>
                  <select id="selected-teacher-dropdown" class="form-control" style="width: auto; padding: 6px 14px; font-weight: 900; font-size: 12.5px; background: #ffffff; color: #0b132b; border: 2px solid #3b82f6;" onchange="window.app.onTeacherChange(this.value)">
                    ${teachersList.map(t => {
                      const tCourseName = (t.scheduledCourses && t.scheduledCourses[0]) || (t.courses && t.courses[0]) || t.subject || "Docente";
                      return `<option value="${t.id}" ${t.id === selectedTeacherId ? 'selected' : ''}>${t.name} (${tCourseName})</option>`;
                    }).join('')}
                  </select>
                  ${hasAdminEditPower ? `
                    <button class="btn btn-gold btn-sm" onclick="window.app.openCreateScheduleModal('${currentGradeId}')" style="font-weight: 900; white-space: nowrap; padding: 6px 12px;">
                      ➕ + Asignar Clase
                    </button>
                  ` : ''}
                  <button class="btn btn-outline btn-sm" onclick="window.print()" style="font-weight: 800; white-space: nowrap; color: #ffffff; border-color: rgba(255,255,255,0.4); padding: 6px 12px;">
                    [Imprimir] Imprimir A4
                  </button>
                </div>
              </div>

              <!-- Resumen Métrico de Carga Horaria Real Asignada -->
              <div class="teacher-stat-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 16px;">
                <div class="teacher-stat-card" style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 14px; border-radius: 6px; border: 1px solid #bfdbfe;">
                  <span class="teacher-stat-lbl" style="font-size: 11px; font-weight: 700; color: #1e40af; display: block;">⏱️ Carga Real Asignada</span>
                  <span class="teacher-stat-val" style="font-size: 18px; font-weight: 900; color: #1e3a8a; display: block; margin: 2px 0;">${teacherHours}</span>
                  <span style="font-size: 11px; color: #64748b;">${currentTeacher.assignedSlotCount || 0} bloque(s) lectivo(s) programados</span>
                </div>

                <div class="teacher-stat-card" style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 12px 14px; border-radius: 6px; border: 1px solid #a7f3d0;">
                  <span class="teacher-stat-lbl" style="font-size: 11px; font-weight: 700; color: #065f46; display: block;">📚 Asignaturas Dictadas</span>
                  <span class="teacher-stat-val" style="font-size: 18px; font-weight: 900; color: #047857; display: block; margin: 2px 0;">${teacherCourses.length} Cursos</span>
                  <span style="font-size: 11px; color: #64748b;">${teacherCourses.slice(0, 2).join(', ')}${teacherCourses.length > 2 ? '...' : ''}</span>
                </div>

                <div class="teacher-stat-card" style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 14px; border-radius: 6px; border: 1px solid #fde68a;">
                  <span class="teacher-stat-lbl" style="font-size: 11px; font-weight: 700; color: #92400e; display: block;">[Colegio] Aulas / Grados Asignados</span>
                  <span class="teacher-stat-val" style="font-size: 18px; font-weight: 900; color: #b45309; display: block; margin: 2px 0;">${teacherGrades.length} Grados</span>
                  <span style="font-size: 11px; color: #64748b;">${teacherGrades.slice(0, 2).join(', ')}${teacherGrades.length > 2 ? '...' : ''}</span>
                </div>

                <div class="teacher-stat-card" style="background: #faf5ff; border-left: 4px solid #8b5cf6; padding: 12px 14px; border-radius: 6px; border: 1px solid #e9d5ff;">
                  <span class="teacher-stat-lbl" style="font-size: 11px; font-weight: 700; color: #5b21b6; display: block;">🔬 Ambientes Asignados</span>
                  <span class="teacher-stat-val" style="font-size: 15px; font-weight: 900; color: #6b21a8; display: block; margin: 4px 0;">${teacherClassrooms[0] || 'Aula Principal'}</span>
                  <span style="font-size: 11px; color: #64748b;">${teacherClassrooms.length} ambiente(s)</span>
                </div>
              </div>

              <!-- Barra de Filtros por Curso y Alerta de Disponibilidad -->
              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 10px 14px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <label style="font-size: 12px; font-weight: 800; color: #1e293b;">[Buscar] Filtrar por Asignatura:</label>
                  <select class="form-control" style="width: auto; padding: 4px 10px; font-size: 12px; font-weight: bold;" onchange="window.app.onTeacherCourseFilterChange(this.value)">
                    <option value="all" ${courseFilter === 'all' ? 'selected' : ''}>Todos los cursos (${teacherCourses.length})</option>
                    ${teacherCourses.map(c => `<option value="${c}" ${courseFilter === c ? 'selected' : ''}>${c}</option>`).join('')}
                  </select>
                </div>

                <div style="font-size: 11.5px; color: #047857; font-weight: 700; background: #d1fae5; padding: 4px 12px; border-radius: 12px; border: 1px solid #a7f3d0;">
                  ✓ Mostrando únicamente las clases programadas por el Administrador • Periodo 2026
                </div>
              </div>

              <!-- Grilla Semanal del Horario Docente Personal (100% Real) -->
              <div class="table-container">
                <table class="schedule-grid-table">
                  <thead>
                    <tr>
                      <th style="width: 120px;">Hora</th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miércoles</th>
                      <th>Jueves</th>
                      <th>Viernes</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${teacherSchedule.map((row, rIdx) => {
                      if (row.isBreak) {
                        const isLunch = row.isLunch || (row.time && row.time.includes("01:20"));
                        const rowClass = isLunch ? "schedule-lunch-row" : "schedule-break-row";
                        const icon = isLunch ? "🍽️" : "☕";
                        return `<tr class="${rowClass}"><td class="time-slot-cell" style="font-weight: 900;">${row.time}</td><td colspan="5">${icon} ${row.title}</td></tr>`;
                      }
                      return `
                        <tr>
                          <td class="time-slot-cell" style="font-weight: 800;">${row.time}</td>
                          ${days.map(dayKey => {
                            const slot = row[dayKey];
                            if (!slot) {
                              return hasAdminEditPower ? `
                                <td style="background:#fafafa; padding: 4px;">
                                  <div class="empty-schedule-slot" onclick="window.app.openCreateScheduleModal('${currentGradeId}', ${rIdx}, '${dayKey}')" style="border: 1px dashed #cbd5e1; border-radius: 6px; padding: 10px 4px; text-align: center; cursor: pointer; color: #94a3b8; font-size: 11px; font-weight: 700; transition: all 0.2s;" onmouseover="this.style.borderColor='#3b82f6'; this.style.color='#1e40af'; this.style.background='#eff6ff';" onmouseout="this.style.borderColor='#cbd5e1'; this.style.color='#94a3b8'; this.style.background='transparent';">
                                    ➕ Asignar Clase
                                  </div>
                                </td>
                              ` : `<td style="background:#fafafa; text-align: center; color: #cbd5e1; font-size: 11px;"><em>Hora Libre</em></td>`;
                            }
                            
                            const isMatch = courseFilter === "all" || (slot.course && slot.course.toLowerCase().includes(courseFilter.toLowerCase()));
                            const opacityStyle = isMatch ? "" : "opacity: 0.25;";

                            return `
                              <td style="${opacityStyle}">
                                <div class="schedule-slot-card slot-${slot.color || 'navy'}" ${hasAdminEditPower ? `onclick="window.app.openEditScheduleSlotModal('${slot.gradeId || currentGradeId}', ${slot.rowIndex || rIdx}, '${slot.dayKey || dayKey}')" style="cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.06); border-radius: 6px; padding: 8px 10px;"` : 'style="box-shadow: 0 2px 5px rgba(0,0,0,0.06); border-radius: 6px; padding: 8px 10px;"'}>
                                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3px;">
                                    <div class="slot-course-title" style="font-size: 12.5px; font-weight: 800;">${slot.course}</div>
                                    <span style="font-size: 9.5px; font-weight: 900; background: #1e3a8a; color: #ffffff; padding: 1px 6px; border-radius: 10px;">${slot.grade || 'Secundaria'}</span>
                                  </div>
                                  <div class="slot-room-badge" style="background: rgba(0,0,0,0.06); font-size: 10px; font-weight: 800; color: #0b132b; margin-top: 3px;">
                                    📍 ${slot.room || 'Aula Principal'}
                                  </div>
                                </div>
                              </td>
                            `;
                          }).join('')}
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>

            </div>
          ` : `
            <!-- VISTA: HORARIO GENERAL POR AULA / GRADO -->
            <div class="card" style="margin-bottom: var(--space-6);">
              <div class="card-header">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <h2 class="card-title" style="font-size: var(--font-size-xl);">Horario Académico Escolar por Aulas - 2026</h2>
                    ${hasAdminEditPower ? `<span class="status-badge status-approved" style="background: var(--color-yellow-100); color: var(--color-yellow-700);">Modo Edición Habilitado</span>` : ''}
                  </div>
                  <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                    I.E.P. "El Educador" • "21 años dejando huellas" (S.J.L. • UGEL 05) • Bloques de 50 min
                  </p>
                </div>
                <button class="btn btn-navy btn-sm" onclick="window.print()">[Imprimir] Imprimir Horario de Aula</button>
              </div>

              <div class="schedule-filter-bar" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                ${isTeacherOrAdmin ? `
                  <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <label style="font-size: 12px; font-weight: 800; color: #1e293b;">[Colegio] Seleccionar Aula / Grado:</label>
                    <select class="form-control" style="width: auto; padding: 4px 12px; font-weight: bold; border-color: #3b82f6;" onchange="window.app.onScheduleGradeChange(this.value)">
                      ${catalog.map(g => `<option value="${g.id}" ${g.id === currentGradeId ? 'selected' : ''}>${g.label} (${g.level})</option>`).join('')}
                    </select>
                    <span style="font-size: 11.5px; color: var(--color-navy-800); background: #f1f5f9; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1;">
                      Aula: <strong>${currentGrade.classroom || 'Aula Principal'}</strong> • Tutor: <strong>${currentGrade.tutor || 'Tutor Asignado'}</strong>
                    </span>
                  </div>
                ` : `
                  <div style="font-size: 13px; color: var(--color-navy-950); font-weight: 800; background: var(--color-yellow-100); padding: 8px 16px; border-radius: 6px; border: 1px solid var(--color-yellow-400); display: inline-flex; align-items: center; gap: 8px;">
                    <span>📍 Horario Exclusivo: <strong>${currentGrade.label} (${currentGrade.level})</strong></span>
                    <span>• Aula: <strong>${currentGrade.classroom || 'Aula Principal'}</strong></span>
                    <span>• Tutor: <strong>${currentGrade.tutor || 'Tutor Asignado'}</strong></span>
                  </div>
                `}

                ${hasAdminEditPower ? `
                  <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                    <button class="btn btn-navy btn-sm" onclick="window.app.openCreateScheduleModal('${currentGradeId}')" style="font-weight: 800; font-size: 11.5px; background: #1e3a8a;">
                      ➕ + Crear / Asignar Clase
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="window.app.openAutoScheduleModal('${currentGradeId}')" style="font-weight: 800; font-size: 11.5px; color: #1e3a8a;">
                      ⚡ Generar Horario Automático
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="window.app.openCloneScheduleModal('${currentGradeId}')" style="font-weight: 800; font-size: 11.5px;">
                      [Lista] Clonar a Otra Aula
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="window.app.clearScheduleGrade('${currentGradeId}')" style="font-weight: 800; font-size: 11.5px; color: var(--color-red-600);">
                      🗑️ Limpiar
                    </button>
                  </div>
                ` : ''}
              </div>

              <div class="table-container">
                <table class="schedule-grid-table">
                  <thead><tr><th style="width: 120px;">Hora</th><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th></tr></thead>
                  <tbody>
                    ${scheduleRows.map((row, rowIndex) => {
                      if (row.isBreak) {
                        const isLunch = row.isLunch || (row.time && row.time.includes("01:20"));
                        const rowClass = isLunch ? "schedule-lunch-row" : "schedule-break-row";
                        const icon = isLunch ? "🍽️" : "☕";
                        return `<tr class="${rowClass}"><td class="time-slot-cell" style="font-weight: 900;">${row.time}</td><td colspan="5">${icon} ${row.title}</td></tr>`;
                      }
                      return `
                        <tr>
                          <td class="time-slot-cell" style="font-weight: 800;">${row.time}</td>
                          ${days.map(dayKey => {
                            const slot = row[dayKey];
                            if (!slot) {
                              return hasAdminEditPower ? `
                                <td style="background:#fafafa; padding: 4px;">
                                  <div class="empty-schedule-slot" onclick="window.app.openCreateScheduleModal('${currentGradeId}', ${rowIndex}, '${dayKey}')" style="border: 1px dashed #cbd5e1; border-radius: 6px; padding: 10px 4px; text-align: center; cursor: pointer; color: #94a3b8; font-size: 11px; font-weight: 700; transition: all 0.2s;" onmouseover="this.style.borderColor='#3b82f6'; this.style.color='#1e40af'; this.style.background='#eff6ff';" onmouseout="this.style.borderColor='#cbd5e1'; this.style.color='#94a3b8'; this.style.background='transparent';">
                                    ➕ Asignar Clase
                                  </div>
                                </td>
                              ` : `<td style="background:#fafafa; text-align: center; color: #cbd5e1; font-size: 11px;"><em>Libre</em></td>`;
                            }
                            return `
                              <td>
                                <div class="schedule-slot-card slot-${slot.color || 'navy'}" ${hasAdminEditPower ? `onclick="window.app.openEditScheduleSlotModal('${currentGradeId}', ${rowIndex}, '${dayKey}')" style="cursor: pointer;"` : ''}>
                                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2px;">
                                    <div class="slot-course-title">${slot.course}</div>
                                    ${hasAdminEditPower ? `<span style="font-size: 10px; opacity: 0.8;">✏️</span>` : ''}
                                  </div>
                                  <div class="slot-teacher-name">👨‍[Colegio] ${slot.teacher}</div>
                                  <div class="slot-room-badge">📍 ${slot.room || currentGrade.classroom || 'Aula Principal'}</div>
                                </div>
                              </td>
                            `;
                          }).join('')}
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          `}

        </div>
      `;
    } catch (error) {
      console.error("Error al renderizar Horarios:", error);
      return `
        <div class="card" style="padding: 20px; text-align: center; background: #fff1f2; border: 1px solid #fecdd3;">
          <h3 style="color: #9f1239; margin-bottom: 8px;">⚠️ Restableciendo visualización de Horarios</h3>
          <p style="color: #4b5563; font-size: 13px;">Se ha detectado una actualización en la estructura de horarios. Pulse el botón inferior para sincronizar:</p>
          <button class="btn btn-navy" onclick="window.app.render()" style="font-weight: 800; margin-top: 10px;">
            [Sincronizar] Sincronizar y Ver Horarios
          </button>
        </div>
      `;
    }
  },

  // Sílabus
  renderSyllabi(state) {
    const role = state.currentRole;
    const hasAdminEditPower = role === "admin" || (role === "docente" && state.users.docente && state.users.docente.hasAdminPrivileges);
    const catalog = state.gradesCatalog || initialData.gradesCatalog;
    
    let currentGradeId = state.selectedSyllabusGrade || "4sec-a";
    if (role === "padre") {
      const parentUser = state.users.padre || initialData.users.padre;
      const children = parentUser.children || [];
      const selectedId = parentUser.selectedChildId || (children[0] && children[0].id) || "EST-2026-042";
      const student = children.find(c => c.id === selectedId) || children[0];
      if (student && student.gradeId) {
        currentGradeId = student.gradeId;
      }
    } else if (role === "estudiante") {
      currentGradeId = "4sec-a";
    }

    const currentGrade = catalog.find(g => g.id === currentGradeId) || catalog[4];
    const rawSyllabi = state.syllabi || initialData.syllabi;
    // Si es padre o alumno, filtrar estrictamente para ver solo los cursos de su grado
    const syllabiList = (role === "padre" || role === "estudiante")
      ? rawSyllabi.filter(s => s.gradeId === currentGradeId || !s.gradeId)
      : rawSyllabi.filter(s => s.gradeId === currentGradeId || currentGradeId === "all");

    const isPadre = role === "padre";
    const canBrowseAllGrades = role === "admin" || role === "director" || role === "docente";

    return `
      <div class="fade-in">
        <div class="card" style="margin-bottom: var(--space-6);">
          <div class="card-header">
            <div>
              <h2 class="card-title" style="font-size: var(--font-size-xl);">Sílabus Curriculares 2026</h2>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted);">Competencias y programación temática institucional.</p>
            </div>
            <div style="display: flex; gap: var(--space-3); align-items: center;">
              ${canBrowseAllGrades ? `
                <select class="form-control" style="width: auto; padding: 4px 12px; font-weight: bold;" onchange="window.app.onSyllabusGradeChange(this.value)">
                  ${catalog.map(g => `<option value="${g.id}" ${g.id === currentGradeId ? 'selected' : ''}>${g.label}</option>`).join('')}
                </select>
                ${hasAdminEditPower ? `<button class="btn btn-red btn-sm" onclick="window.app.openCreateSyllabusModal()">+ Crear Sílabo</button>` : ''}
              ` : `
                <div style="font-size: 13px; color: var(--color-navy-950); font-weight: 800; background: var(--color-yellow-100); padding: 6px 14px; border-radius: 6px; border: 1px solid var(--color-yellow-400);">
                  📚 Cursos de: <strong>${currentGrade.label}</strong>
                </div>
              `}
            </div>
          </div>

          <div class="syllabus-card-grid">
            ${syllabiList.map(s => `
              <div class="syllabus-card">
                <div>
                  <div class="syllabus-header"><span class="syllabus-code">${s.courseCode}</span><span class="status-badge status-approved">${s.bimester}</span></div>
                  <h3 class="syllabus-title">${s.courseName}</h3>
                  <div class="syllabus-meta-list"><div>👨‍[Colegio] Docente: ${s.teacher}</div><div>⏱️ Carga: ${s.hoursWeekly || '4 hrs'}</div></div>
                  <div class="competency-tag-box">${(s.competencies || ['Competencia General']).map(c => `<span class="competency-pill">✓ ${c}</span>`).join('')}</div>
                </div>
                <div style="border-top:1px solid var(--border-subtle); padding-top:10px; display:flex; justify-content:space-between; align-items:center;">
                  <button class="btn btn-navy btn-sm" onclick="window.app.openSyllabusModal('${s.id}')">Ver Completo</button>
                  ${hasAdminEditPower ? `<div><button class="btn btn-outline btn-sm" onclick="window.app.openEditSyllabusModal('${s.id}')">✏️</button> <button class="btn btn-outline btn-sm" style="color:var(--color-red-600);" onclick="window.app.confirmDeleteSyllabus('${s.id}')">🗑️</button></div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // AULA VIRTUAL: MATERIALES SEMANALES Y EVALUACIONES DINÁMICAS (10 PREGUNTAS)
  // =========================================================================
  renderTasks(state) {
    const role = state.currentRole;
    const isTeacherOrAdmin = role === 'admin' || role === 'docente' || role === 'director';
    const isEstudiante = role === 'estudiante';
    const isPadre = role === 'padre';

    const materials = state.weeklyMaterials || initialData.weeklyMaterials || [];
    
    // Lista de cursos disponibles en el aula virtual
    const availableCourses = [
      { id: "MAT-401", name: "Matemática Avanzada (Álgebra y Funciones)", teacher: "Prof. Roberto Silva", grade: "4to de Secundaria", icon: "[Formato]", color: "blue" },
      { id: "EPT-402", name: "Computación e Informática / Robótica", teacher: "Prof. Fernando Rojas", grade: "4to de Secundaria", icon: "🤖", color: "yellow" },
      { id: "CTA-403", name: "Ciencia y Tecnología (Física & Química)", teacher: "Miss Leyli Reyes Cerquen", grade: "4to de Secundaria", icon: "🔬", color: "green" },
      { id: "COM-404", name: "Comunicación & Literatura", teacher: "Miss María Daysi Reyes", grade: "4to de Secundaria", icon: "📚", color: "navy" }
    ];

    const selectedCourseId = state.selectedVirtualCourseId || availableCourses[0].id;
    const currentCourse = availableCourses.find(c => c.id === selectedCourseId) || availableCourses[0];

    // Filtrar materiales del curso seleccionado
    const courseMaterials = materials.filter(m => m.courseId === selectedCourseId);
    
    // Material activo / seleccionado (semana activa)
    const selectedWeekId = state.selectedVirtualWeekId || (courseMaterials[0] ? courseMaterials[0].id : null);
    const activeMaterial = courseMaterials.find(m => m.id === selectedWeekId) || courseMaterials[0];

    // Obtener datos del alumno logueado para verificar sus intentos
    const currentStudentId = (state.users.estudiante && state.users.estudiante.id) || "EST-2026-042";
    const studentAttempt = activeMaterial && activeMaterial.studentAttempts 
      ? activeMaterial.studentAttempts.find(a => a.studentId === currentStudentId) 
      : null;

    // Métricas del aula para el docente
    const totalWeeklySessions = courseMaterials.length;
    const totalEvaluations = courseMaterials.filter(m => m.evaluation && m.evaluation.questions && m.evaluation.questions.length > 0).length;
    const allAttemptsInCourse = courseMaterials.reduce((acc, m) => acc + (m.studentAttempts ? m.studentAttempts.length : 0), 0);

    return `
      <div class="fade-in">
        
        <!-- Encabezado Principal del Aula Virtual -->
        <div class="card" style="margin-bottom: var(--space-6); border-top: 4px solid var(--color-navy-800);">
          <div class="card-header" style="flex-wrap: wrap; gap: 14px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <h2 class="card-title" style="font-size: var(--font-size-xl); margin: 0;">💻 Aula Virtual & Evaluaciones Dinámicas Semanales</h2>
                <span class="status-badge status-approved" style="background: var(--color-yellow-100); color: var(--color-yellow-800); font-weight: 800;">
                  Periodo Lectivo 2026 • III Bimestre
                </span>
                ${isTeacherOrAdmin ? `<span class="status-badge" style="background:#dbeafe; color:#1e40af; font-weight:800;">👨‍[Colegio] Modo Gestión Docente</span>` : ''}
                ${isEstudiante ? `<span class="status-badge" style="background:#dcfce7; color:#166534; font-weight:800;">[Expediente] Alumno(a): Sofía Méndez</span>` : ''}
              </div>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                I.E.P. "El Educador" • Publicación continua del trabajo realizado en el aula y generación automática de evaluaciones dinámicas de 10 preguntas con retroalimentación inmediata.
              </p>
            </div>

            <!-- Botones de Acción para el Docente -->
            ${isTeacherOrAdmin ? `
              <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <button class="btn btn-navy btn-sm" onclick="window.app.openUploadMaterialModal('${selectedCourseId}')" style="font-weight: 800;">
                  ➕ Subir Material Semanal
                </button>
                ${activeMaterial ? `
                  <button class="btn btn-gold btn-sm" onclick="window.app.openGenerateQuizModal('${activeMaterial.id}')" style="font-weight: 800;">
                    ⚡ Generar Evaluación (10 Preguntas)
                  </button>
                ` : ''}
              </div>
            ` : ''}
          </div>

          <!-- Selector de Asignatura / Curso -->
          <div style="display: flex; border-top: 1px solid var(--border-subtle); background: var(--bg-surface-subtle); padding: 10px 14px; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <span style="font-size: 12px; font-weight: 800; color: var(--color-navy-900);">Seleccionar Asignatura:</span>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${availableCourses.map(c => `
                  <button class="btn btn-sm ${c.id === selectedCourseId ? 'btn-navy' : 'btn-outline'}" onclick="window.app.onVirtualCourseChange('${c.id}')" style="font-size: 11.5px; font-weight: 800; display: flex; align-items: center; gap: 6px;">
                    <span>${c.icon}</span> <span>${c.name}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <div style="font-size: 12px; color: var(--text-muted);">
              <strong>Docente Responsable:</strong> <span style="color: var(--color-navy-900); font-weight: bold;">${currentCourse.teacher}</span> • <span>${currentCourse.grade}</span>
            </div>
          </div>
        </div>

        <!-- Panel de Métricas Rápidas del Curso (Visible para Docente y Admin) -->
        ${isTeacherOrAdmin ? `
          <div class="teacher-stat-grid" style="margin-bottom: var(--space-6);">
            <div class="teacher-stat-card" style="border-left: 4px solid #3b82f6;">
              <span class="teacher-stat-lbl">📁 Sesiones Semanales</span>
              <span class="teacher-stat-val" style="color: #1e40af;">${totalWeeklySessions} Semanas</span>
              <span style="font-size: 10.5px; color: #64748b;">Materiales de clase subidos</span>
            </div>
            <div class="teacher-stat-card" style="border-left: 4px solid #f59e0b;">
              <span class="teacher-stat-lbl">⚡ Evaluaciones Dinámicas</span>
              <span class="teacher-stat-val" style="color: #b45309;">${totalEvaluations} Quizzes (10 Preg.)</span>
              <span style="font-size: 10.5px; color: #64748b;">Con retroalimentación IA</span>
            </div>
            <div class="teacher-stat-card" style="border-left: 4px solid #10b981;">
              <span class="teacher-stat-lbl">👥 Evaluaciones Rendidas</span>
              <span class="teacher-stat-val" style="color: #065f46;">${allAttemptsInCourse} Intentos</span>
              <span style="font-size: 10.5px; color: #64748b;">Estudiantes evaluados</span>
            </div>
            <div class="teacher-stat-card" style="border-left: 4px solid #8b5cf6;">
              <span class="teacher-stat-lbl">[Reporte] Promedio de Logro</span>
              <span class="teacher-stat-val" style="color: #5b21b6;">17.8 / 20</span>
              <span style="font-size: 10.5px; color: #64748b;">Nivel Logro Destacado (AD)</span>
            </div>
          </div>
        ` : ''}

        <!-- Pestañas de Navegación por Semanas del Curso -->
        <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 6px;">
          ${courseMaterials.map((m, idx) => `
            <button class="btn btn-sm ${m.id === (activeMaterial && activeMaterial.id) ? 'btn-gold' : 'btn-outline'}" onclick="window.app.onVirtualWeekChange('${m.id}')" style="font-weight: 800; font-size: 12px; white-space: nowrap; padding: 6px 14px; display: flex; align-items: center; gap: 6px;">
              <span>🗓️ Semana ${m.weekNumber}</span>
              ${m.evaluation ? `<span style="background:#1e3a8a; color:white; font-size:9px; padding:1px 5px; border-radius:10px;">⚡ 10P</span>` : ''}
            </button>
          `).join('')}
          ${isTeacherOrAdmin ? `
            <button class="btn btn-sm btn-outline" onclick="window.app.openUploadMaterialModal('${selectedCourseId}')" style="font-weight: 800; font-size: 12px; white-space: nowrap; border-style: dashed;">
              + Nueva Semana
            </button>
          ` : ''}
        </div>

        ${!activeMaterial ? `
          <div class="card" style="text-align: center; padding: 40px 20px;">
            <div style="font-size: 40px; margin-bottom: 10px;">📚</div>
            <h3 style="font-size: 18px; color: var(--color-navy-900); font-weight: 800;">No hay sesiones registradas aún en este curso</h3>
            <p style="font-size: 13px; color: var(--text-muted); max-width: 500px; margin: 0 auto 16px;">
              El docente responsable publicará cada semana el resumen de la clase presencial, diapositivas y la evaluación dinámica de 10 preguntas.
            </p>
            ${isTeacherOrAdmin ? `
              <button class="btn btn-navy" onclick="window.app.openUploadMaterialModal('${selectedCourseId}')">
                + Subir Primer Material Semanal
              </button>
            ` : ''}
          </div>
        ` : `
          <!-- =====================================================================
               DETALLE DE LA SESIÓN SEMANAL ACTIVA
               ===================================================================== -->
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; align-items: start;">
            
            <!-- Columna Izquierda: Trabajo Realizado en el Aula, Resumen y Materiales Adjuntos -->
            <div>
              
              <!-- Tarjeta de Contenido de la Clase Presencial -->
              <div class="card" style="margin-bottom: var(--space-5);">
                <div class="card-header" style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; gap: 8px;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
                      <span class="status-badge" style="background: #e0e7ff; color: #3730a3; font-weight: 800; font-size: 10.5px;">
                        Semana ${activeMaterial.weekNumber} • ${activeMaterial.bimester}
                      </span>
                      <span style="font-size: 11px; color: var(--text-muted);">🗓️ Fecha de Clase: ${activeMaterial.sessionDate}</span>
                    </div>
                    <h3 style="font-size: 17px; font-weight: 900; color: var(--color-navy-900); margin: 0;">
                      ${activeMaterial.title}
                    </h3>
                  </div>

                  ${isTeacherOrAdmin ? `
                    <div style="display: flex; gap: 6px;">
                      <button class="btn btn-outline btn-sm" onclick="window.app.openEditMaterialModal('${activeMaterial.id}')" title="Editar Sesión" style="padding: 4px 8px; font-size: 11px;">
                        ✏️ Editar
                      </button>
                      <button class="btn btn-red btn-sm" onclick="window.app.confirmDeleteMaterial('${activeMaterial.id}')" title="Eliminar Sesión" style="padding: 4px 8px; font-size: 11px;">
                        🗑️
                      </button>
                    </div>
                  ` : ''}
                </div>

                <div style="padding: 20px;">
                  <!-- Resumen Pedagógico del Trabajo en el Aula -->
                  <h4 style="font-size: 13px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                    <span>👨‍[Colegio] Resumen del Trabajo Realizado en el Aula:</span>
                  </h4>
                  <div style="background: #f1f5f9; border-left: 4px solid var(--color-navy-800); padding: 14px 16px; border-radius: 6px; font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 18px;">
                    ${activeMaterial.summary}
                  </div>

                  <!-- Conceptos Clave Trabajados -->
                  <h4 style="font-size: 13px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 8px;">
                    [Fijado] Conceptos Clave Abordados en Clase:
                  </h4>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px;">
                    ${(activeMaterial.keyConcepts || []).map(c => `
                      <span style="font-size: 11.5px; font-weight: 700; background: #e2e8f0; color: #1e293b; padding: 4px 10px; border-radius: 6px; border: 1px solid #cbd5e1;">
                        ✓ ${c}
                      </span>
                    `).join('')}
                  </div>

                  <!-- Materiales y Recursos Adjuntos para Descargar -->
                  <h4 style="font-size: 13px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
                    <span>📎 Materiales de Estudio y Recursos de la Clase:</span>
                    <span style="font-size: 11px; color: var(--text-muted); font-weight: normal;">${(activeMaterial.attachments || []).length} archivos adjuntos</span>
                  </h4>
                  
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px;">
                    ${(activeMaterial.attachments || []).map(att => `
                      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); transition: transform 0.2s;" class="hover-shadow">
                        <div style="font-size: 24px;">${att.icon || '[Documento]'}</div>
                        <div style="flex: 1; min-width: 0;">
                          <div style="font-size: 12px; font-weight: 800; color: var(--color-navy-900); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${att.name}
                          </div>
                          <div style="font-size: 10.5px; color: var(--text-muted);">
                            ${att.size || att.duration || 'Documento Oficial'}
                          </div>
                        </div>
                        <button class="btn btn-outline btn-sm" onclick="window.app.downloadMaterialAttachment('${att.name}')" style="padding: 4px 8px; font-size: 11px; font-weight: 800;" title="Descargar Material">
                          ⬇️
                        </button>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

            </div>

            <!-- Columna Derecha: MÓDULO DE EVALUACIÓN DINÁMICA (10 PREGUNTAS) -->
            <div>
              
              <div class="card" style="border: 2px solid ${activeMaterial.evaluation ? '#3b82f6' : '#cbd5e1'}; box-shadow: 0 4px 12px rgba(59,130,246,0.08);">
                <div class="card-header" style="background: ${activeMaterial.evaluation ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' : '#f8fafc'}; color: ${activeMaterial.evaluation ? '#ffffff' : '#0b132b'};">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 20px;">⚡</span>
                    <div>
                      <h3 style="font-size: 15px; font-weight: 900; margin: 0; color: ${activeMaterial.evaluation ? '#ffffff' : '#0b132b'};">
                        Evaluación Dinámica Semanal
                      </h3>
                      <span style="font-size: 11px; opacity: 0.9;">10 Preguntas con Retroalimentación</span>
                    </div>
                  </div>
                </div>

                <div style="padding: 18px;">
                  ${!activeMaterial.evaluation ? `
                    <!-- Caso: Aún no se ha generado la evaluación -->
                    <div style="text-align: center; padding: 20px 10px;">
                      <div style="font-size: 32px; margin-bottom: 8px;">🤖</div>
                      <h4 style="font-size: 14px; font-weight: 800; color: var(--color-navy-900);">Evaluación no generada</h4>
                      <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 14px;">
                        El sistema puede generar un cuestionario dinámico de 10 preguntas calibrado automáticamente sobre el tema de esta semana.
                      </p>
                      ${isTeacherOrAdmin ? `
                        <button class="btn btn-gold btn-sm" onclick="window.app.openGenerateQuizModal('${activeMaterial.id}')" style="width: 100%; font-weight: 800;">
                          ⚡ Generar 10 Preguntas con IA
                        </button>
                      ` : `
                        <span class="status-badge status-pending" style="font-size: 11px;">Pendiente de publicación por el profesor</span>
                      `}
                    </div>
                  ` : `
                    <!-- Caso: Evaluación de 10 preguntas Lista -->
                    <div style="margin-bottom: 14px;">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span style="font-size: 12px; font-weight: 800; color: #1e293b;">Estructura del Test:</span>
                        <span class="status-badge status-approved" style="font-size: 10.5px; font-weight: 800;">10 Ítems • 20 Puntos</span>
                      </div>
                      
                      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; font-size: 11.5px; color: #475569; display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
                        <div>⏱️ <strong>Tiempo:</strong> 20 min</div>
                        <div>🎯 <strong>Mínimo:</strong> 14 pts</div>
                        <div>[Reporte] <strong>Puntaje:</strong> 2 pts c/u</div>
                        <div>🤖 <strong>IA Feedback:</strong> Activo</div>
                      </div>
                    </div>

                    <!-- ESTADO PARA EL ALUMNO LOGUEADO -->
                    ${isEstudiante ? `
                      ${studentAttempt ? `
                        <!-- Alumno ya rindió la prueba -->
                        <div style="background: ${studentAttempt.score >= 14 ? '#ecfdf5' : '#fff1f2'}; border: 2px solid ${studentAttempt.score >= 14 ? '#10b981' : '#f43f5e'}; border-radius: 8px; padding: 14px; margin-bottom: 14px; text-align: center;">
                          <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: ${studentAttempt.score >= 14 ? '#047857' : '#be123c'};">Tu Calificación Obtenida:</span>
                          <div style="font-size: 28px; font-weight: 900; color: ${studentAttempt.score >= 14 ? '#047857' : '#be123c'}; margin: 4px 0;">
                            ${studentAttempt.score} / 20
                          </div>
                          <span class="status-badge ${studentAttempt.score >= 14 ? 'status-approved' : 'status-failed'}" style="font-weight: 800; font-size: 11px;">
                            ${studentAttempt.status} (${studentAttempt.correctCount} / 10 correctas)
                          </span>
                          <p style="font-size: 11px; color: #475569; margin-top: 8px; line-height: 1.4; text-align: left; background: rgba(255,255,255,0.7); padding: 8px; border-radius: 4px;">
                            [Nota] <strong>Retroalimentación del Sistema:</strong> ${studentAttempt.feedback}
                          </p>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 8px;">
                          <button class="btn btn-navy btn-sm" onclick="window.app.openQuizResultsModal('${activeMaterial.id}')" style="width: 100%; font-weight: 800;">
                            👁️ Revisar Respuestas y Explicaciones
                          </button>
                          <button class="btn btn-outline btn-sm" onclick="window.app.startStudentQuiz('${activeMaterial.id}')" style="width: 100%; font-weight: 700; font-size: 11px;">
                            [Sincronizar] Rendir Nuevo Intento de Refuerzo
                          </button>
                        </div>
                      ` : `
                        <!-- Alumno no ha rendido la prueba aún -->
                        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px; margin-bottom: 14px; text-align: center;">
                          <span style="font-size: 11px; font-weight: 800; color: #1e40af; text-transform: uppercase;">Estado: Pendiente</span>
                          <p style="font-size: 12px; color: #1e3a8a; margin: 6px 0 12px;">
                            Pon a prueba lo aprendido en la clase de <strong>${activeMaterial.title}</strong> con esta evaluación de 10 preguntas.
                          </p>
                          <button class="btn btn-gold" onclick="window.app.startStudentQuiz('${activeMaterial.id}')" style="width: 100%; font-weight: 900; font-size: 13px; padding: 10px;">
                            📝 Iniciar Evaluación (10 Preguntas)
                          </button>
                        </div>
                      `}
                    ` : ''}

                    <!-- ESTADO PARA EL DOCENTE O ADMINISTRADOR -->
                    ${isTeacherOrAdmin ? `
                      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
                        <button class="btn btn-navy btn-sm" onclick="window.app.openPreviewQuizModal('${activeMaterial.id}')" style="width: 100%; font-weight: 800;">
                          👁️ Previsualizar / Editar 10 Preguntas
                        </button>
                        <button class="btn btn-outline btn-sm" onclick="window.app.confirmRegenerateQuiz('${activeMaterial.id}')" style="width: 100%; font-weight: 700; font-size: 11.5px;">
                          ⚡ Regenerar Cuestionario con IA
                        </button>
                      </div>

                      <!-- Tabla Resumen de Alumnos que rindieron la prueba -->
                      <h4 style="font-size: 12px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 6px; display: flex; justify-content: space-between;">
                        <span>Estudiantes Evaluados:</span>
                        <span style="color: #047857;">${(activeMaterial.studentAttempts || []).length} alumnos</span>
                      </h4>

                      <div style="max-height: 180px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 6px;">
                        <table style="width: 100%; font-size: 11px; border-collapse: collapse;">
                          <thead style="background: #f1f5f9; position: sticky; top: 0;">
                            <tr>
                              <th style="padding: 6px; text-align: left;">Alumno</th>
                              <th style="padding: 6px; text-align: center;">Aciertos</th>
                              <th style="padding: 6px; text-align: right;">Nota</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${(activeMaterial.studentAttempts && activeMaterial.studentAttempts.length > 0) ? activeMaterial.studentAttempts.map(att => `
                              <tr style="border-bottom: 1px solid #f1f5f9;">
                                <td style="padding: 5px 6px;">
                                  <strong>${att.studentName}</strong><br>
                                  <span style="font-size: 9.5px; color: #64748b;">${att.date}</span>
                                </td>
                                <td style="padding: 5px 6px; text-align: center;">
                                  <span style="font-weight: 800;">${att.correctCount}/10</span>
                                </td>
                                <td style="padding: 5px 6px; text-align: right;">
                                  <span class="status-badge ${att.score >= 14 ? 'status-approved' : 'status-failed'}" style="font-size: 10px; font-weight: 900;">
                                    ${att.score}
                                  </span>
                                </td>
                              </tr>
                            `).join('') : `
                              <tr>
                                <td colspan="3" style="text-align: center; padding: 14px; color: #94a3b8;">
                                  Ningún alumno ha rendido la evaluación aún.
                                </td>
                              </tr>
                            `}
                          </tbody>
                        </table>
                      </div>
                    ` : ''}

                    <!-- ESTADO PARA EL PADRE DE FAMILIA -->
                    ${isPadre ? `
                      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
                        <h4 style="font-size: 12px; font-weight: 800; color: #1e3a8a; margin-bottom: 6px;">
                          Informe de Evaluación para el Apoderado
                        </h4>
                        ${studentAttempt ? `
                          <div style="font-size: 13px; margin-bottom: 6px;">
                            Calificación de su menor hija(o): <strong style="color: #047857; font-size: 15px;">${studentAttempt.score} / 20</strong> (${studentAttempt.status})
                          </div>
                          <p style="font-size: 11.5px; color: #475569; margin: 0 0 10px; line-height: 1.4;">
                            ${studentAttempt.feedback}
                          </p>
                          <button class="btn btn-navy btn-sm" onclick="window.app.openQuizResultsModal('${activeMaterial.id}')" style="width: 100%; font-size: 11px;">
                            👁️ Ver Respuestas y Retroalimentación
                          </button>
                        ` : `
                          <p style="font-size: 12px; color: #94a3b8; margin: 0;">
                            Su menor hija(o) aún no ha rendido la evaluación de esta semana.
                          </p>
                        `}
                      </div>
                    ` : ''}

                  `}
                </div>
              </div>

            </div>

          </div>
        `}

      </div>
    `;
  },

  // =========================================================================
  // CONTROL DE ASISTENCIA BIOMÉTRICO Y DIARIO (TARDANZAS, INASISTENCIAS & QR)
  // =========================================================================
  renderAttendance(state) {
    const role = state.currentRole;
    const isTeacherOrAdmin = role === "admin" || role === "director" || role === "docente" || role === "auxiliar";
    const isPadre = role === "padre";
    const isEstudiante = role === "estudiante";
    const catalog = state.gradesCatalog || initialData.gradesCatalog;

    let selectedGradeId = state.selectedAttendanceGrade || "4sec";
    let selectedDate = state.selectedAttendanceDate || "19/08/2026";
    let activeSubTab = state.attendanceActiveSubTab || (isTeacherOrAdmin ? "door-scanner" : "student-history");

    if (isPadre || isEstudiante) {
      activeSubTab = "student-history";
    }

    // Si es padre de familia, obtener datos del estudiante a su cargo
    let studentName = "Sofía Méndez Flores";
    let studentGrade = "4° de Secundaria";
    let studentCode = "EST-2026-042";
    if (isPadre) {
      const parentUser = (state.users && state.users.padre) || initialData.users.padre;
      const children = (parentUser && parentUser.children) || [];
      const selectedId = (parentUser && parentUser.selectedChildId) || (children[0] && children[0].id) || "EST-2026-042";
      const student = children.find(c => c.id === selectedId) || children[0];
      if (student) {
        studentName = student.name;
        studentGrade = student.grade;
        studentCode = student.id;
      }
    } else if (isEstudiante) {
      const studentUser = (state.users && state.users.estudiante) || initialData.users.estudiante;
      studentName = studentUser.name;
      studentGrade = studentUser.gradeLevel || "4to Año - Secundaria 'A'";
      studentCode = studentUser.id;
    }

    const currentGrade = (catalog && catalog.find(g => g && (g.id === selectedGradeId || g.id === "4sec"))) || (catalog && catalog[0]) || { id: "4sec", label: "4° de Secundaria", level: "Secundaria", tutor: "Prof. Roberto Silva", classroom: "Aula 401" };
    const records = (state && state.attendanceRecords) || (initialData && initialData.attendanceRecords) || [];
    const enrollments = (state && state.enrollments) || (initialData && initialData.enrollments) || [];
    
    // Filtrar por grado y fecha para vista de aula de forma 100% segura
    const classroomRecords = records.filter(r => {
      if (!r) return false;
      const matchesGrade = (r.gradeId && r.gradeId === selectedGradeId) || 
                           (r.grade && currentGrade && currentGrade.label && typeof r.grade === 'string' && r.grade.includes(currentGrade.label)) || 
                           (r.grade && typeof r.grade === 'string' && r.grade.includes("4°"));
      return matchesGrade && r.date === selectedDate;
    });
    
    // Métricas de aula
    const totalStudents = classroomRecords.length > 0 ? classroomRecords.length : 4;
    const presentCount = classroomRecords.filter(r => r && r.status === "Presente").length;
    const lateCount = classroomRecords.filter(r => r && r.status === "Tardanza").length;
    const absentCount = classroomRecords.filter(r => r && r.status === "Falta").length;
    const justifiedCount = classroomRecords.filter(r => r && r.status === "Justificada").length;
    const attendancePct = totalStudents > 0 ? Math.round(((presentCount + lateCount) / totalStudents) * 100) : 100;

    // Reporte Diario Global de Tardanzas e Inasistencias
    let dayReport = (window.appStore && typeof window.appStore.getDailyAttendanceReport === 'function') 
      ? window.appStore.getDailyAttendanceReport(selectedDate) 
      : ((window.app && window.app.store && typeof window.app.store.getDailyAttendanceReport === 'function')
        ? window.app.store.getDailyAttendanceReport(selectedDate)
        : {
          date: selectedDate,
          totalEnrolled: enrollments.length,
          presentList: [],
          tardinessList: classroomRecords.filter(r => r && r.status === "Tardanza"),
          absenceList: classroomRecords.filter(r => r && r.status === "Falta"),
          justifiedList: classroomRecords.filter(r => r && r.status === "Justificada"),
          attendanceRate: 94
        });

    if (!dayReport) dayReport = {};
    if (!Array.isArray(dayReport.tardinessList)) dayReport.tardinessList = [];
    if (!Array.isArray(dayReport.absenceList)) dayReport.absenceList = [];
    if (!Array.isArray(dayReport.presentList)) dayReport.presentList = [];
    if (!Array.isArray(dayReport.justifiedList)) dayReport.justifiedList = [];

    // Historial del estudiante individual (para Padre o Estudiante)
    const studentHistory = records.filter(r => r && ((studentCode && r.studentCode === studentCode) || (r.studentName && typeof r.studentName === 'string' && r.studentName.includes("Sofía"))));

    return `
      <div class="fade-in">
        
        <!-- ENCABEZADO INSTITUCIONAL DE ASISTENCIA -->
        <div class="welcome-banner" style="margin-bottom: var(--space-4);">
          <div class="welcome-content">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span class="status-badge status-approved" style="background: #22c55e; color: #0b132b; font-weight: 800;">
                <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> SISTEMA QR & BIOMÉTRICO EN PUERTA ACTIVO
              </span>
              <span style="font-size: 11.5px; opacity: 0.9;">Tolerancia Oficial: 07:45 AM • UGEL 05 S.J.L.</span>
            </div>
            <h1 class="welcome-title">
              ${isTeacherOrAdmin ? 'Control de Asistencia Escolar & Estación de Portería' : (isPadre ? 'Récord de Asistencia de mi Hijo(a)' : 'Mi Historial de Asistencia & Fotocheck')}
            </h1>
            <p class="welcome-subtitle">
              ${isTeacherOrAdmin 
                ? 'Módulo exclusivo de Auxiliares y Docentes para registro biométrico/QR en puerta, parte diario de inasistencias y reportes oficiales.' 
                : 'Consulta de marcaciones de ingreso, justificación de tardanzas y credencial escolar con código QR.'}
            </p>
          </div>
        </div>

        ${isTeacherOrAdmin ? `
          <!-- =========================================================================
               SUB-PESTAÑAS DE CONTROL DE ASISTENCIA Y PORTERÍA (EXCLUSIVO PROFESORES / AUXILIARES / DIRECCIÓN)
               ========================================================================= -->
          <div style="display: flex; gap: 8px; margin-bottom: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; overflow-x: auto;">
            <button class="btn btn-sm ${activeSubTab === 'door-scanner' ? 'btn-gold' : 'btn-outline'}" onclick="window.app.setAttendanceSubTab('door-scanner')" style="font-weight: 900; font-size: 12.5px; white-space: nowrap; padding: 8px 16px; border: 2px solid #f59e0b; box-shadow: ${activeSubTab === 'door-scanner' ? '0 2px 8px rgba(245,158,11,0.4)' : 'none'};">
              [Portería] 1. Registro de Ingreso (Escáner QR en Portería)
            </button>
            <button class="btn btn-sm ${activeSubTab === 'id-cards' ? 'btn-gold' : 'btn-outline'}" onclick="window.app.setAttendanceSubTab('id-cards')" style="font-weight: 900; font-size: 12px; white-space: nowrap; padding: 7px 14px;">
              [Imprimir] 2. Generador de Códigos QR (Sin Fotos)
            </button>
            <button class="btn btn-sm ${activeSubTab === 'daily-report' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setAttendanceSubTab('daily-report')" style="font-weight: 800; font-size: 12px; white-space: nowrap; padding: 7px 14px; position: relative;">
              <span>[Reporte] 3. Parte Diario de Tardanzas e Inasistencias (Corte 08:30 AM)</span>
              ${dayReport.tardinessList.length > 0 || dayReport.absenceList.length > 0 ? `
                <span style="background: #ef4444; color: white; border-radius: 10px; padding: 1px 6px; font-size: 10px; font-weight: 900; margin-left: 4px;">
                  ${dayReport.tardinessList.length + dayReport.absenceList.length}
                </span>
              ` : ''}
            </button>
            <button class="btn btn-sm ${activeSubTab === 'classroom' ? 'btn-navy' : 'btn-outline'}" onclick="window.app.setAttendanceSubTab('classroom')" style="font-weight: 800; font-size: 12px; white-space: nowrap; padding: 7px 14px;">
              [Lista] 4. Lista y Marcación por Aula
            </button>
            <button class="btn btn-sm ${activeSubTab === 'incidents' ? 'btn-red' : 'btn-outline'}" onclick="window.app.setAttendanceSubTab('incidents')" style="font-weight: 800; font-size: 12px; white-space: nowrap; padding: 7px 14px; position: relative;">
              <span>[Alerta] 5. Libro de Incidencias Conductuales</span>
              <span style="background: #dc2626; color: white; border-radius: 10px; padding: 1px 6px; font-size: 10px; font-weight: 900; margin-left: 4px;">
                ${(state.behaviorIncidents || initialData.behaviorIncidents || []).length}
              </span>
            </button>
          </div>
        ` : ''}

          <!-- =====================================================================
               SUB-PESTAÑA 1: LISTA Y MARCACIÓN POR AULA
               ===================================================================== -->
          ${activeSubTab === 'classroom' ? `
            
            <!-- FILTROS Y SELECTORES DE AULA / FECHA -->
            <div class="card" style="margin-bottom: var(--space-4); padding: 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                
                <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                  <div>
                    <label style="font-size: 11px; font-weight: 800; color: #1e3a8a; display: block; margin-bottom: 2px;">[Colegio] Grado / Aula:</label>
                    <select class="form-control" style="font-weight: bold; font-size: 12px; border-color: #3b82f6; width: auto;" onchange="window.app.onAttendanceGradeChange(this.value)">
                      ${catalog.map(g => `<option value="${g.id}" ${g.id === selectedGradeId ? 'selected' : ''}>${g.label} (${g.level})</option>`).join('')}
                    </select>
                  </div>

                  <div>
                    <label style="font-size: 11px; font-weight: 800; color: #1e3a8a; display: block; margin-bottom: 2px;">📅 Fecha de Control:</label>
                    <select class="form-control" style="font-weight: bold; font-size: 12px; border-color: #3b82f6; width: auto;" onchange="window.app.onAttendanceDateChange(this.value)">
                      <option value="19/08/2026" ${selectedDate === '19/08/2026' ? 'selected' : ''}>Hoy - Miércoles 19/08/2026</option>
                      <option value="18/08/2026" ${selectedDate === '18/08/2026' ? 'selected' : ''}>Ayer - Martes 18/08/2026</option>
                      <option value="15/08/2026" ${selectedDate === '15/08/2026' ? 'selected' : ''}>Viernes 15/08/2026</option>
                    </select>
                  </div>

                  <div style="font-size: 11.5px; color: #475569; background: #f1f5f9; padding: 6px 12px; border-radius: 6px; border: 1px solid #cbd5e1; margin-top: 14px;">
                    Tutor de Aula: <strong>${currentGrade.tutor || 'Prof. Roberto Silva'}</strong> • Aula: <strong>${currentGrade.classroom || 'Aula Principal'}</strong>
                  </div>
                </div>

                <!-- BOTONES DE ACCIÓN RÁPIDA -->
                <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px;">
                  <button class="btn btn-gold btn-sm" onclick="window.app.markAllClassroomPresent('${selectedGradeId}', '${selectedDate}')" style="font-weight: 800; font-size: 11.5px;">
                    ⚡ Marcar Todos Presentes
                  </button>
                  <button class="btn btn-navy btn-sm" onclick="window.app.setAttendanceSubTab('door-scanner')" style="font-weight: 800; font-size: 11.5px;">
                    [Cámara] Escanear QR en Puerta
                  </button>
                  <button class="btn btn-outline btn-sm" onclick="window.app.openMonthlyAttendanceReportModal('${selectedGradeId}')" style="font-weight: 800; font-size: 11.5px;">
                    [Documento] Consolidado UGEL 05
                  </button>
                </div>

              </div>
            </div>

            <!-- MÉTRICAS RESUMEN DEL DÍA -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin-bottom: var(--space-4);">
              <div class="card" style="padding: 12px; border-left: 4px solid #3b82f6; background: #eff6ff;">
                <span style="font-size: 11px; font-weight: 800; color: #1e40af;">👥 MATRICULADOS</span>
                <div style="font-size: 22px; font-weight: 900; color: #1e3a8a; margin: 2px 0;">${totalStudents} Alumnos</div>
                <span style="font-size: 10px; color: #64748b;">Padrón de Aula</span>
              </div>
              
              <div class="card" style="padding: 12px; border-left: 4px solid #10b981; background: #ecfdf5;">
                <span style="font-size: 11px; font-weight: 800; color: #065f46;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> PRESENTES</span>
                <div style="font-size: 22px; font-weight: 900; color: #047857; margin: 2px 0;">${presentCount} (${attendancePct}%)</div>
                <span style="font-size: 10px; color: #047857;">A tiempo en portería</span>
              </div>

              <div class="card" style="padding: 12px; border-left: 4px solid #f59e0b; background: #fffbeb;">
                <span style="font-size: 11px; font-weight: 800; color: #92400e;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> TARDANZAS</span>
                <div style="font-size: 22px; font-weight: 900; color: #b45309; margin: 2px 0;">${lateCount}</div>
                <span style="font-size: 10px; color: #b45309;">Después de 07:45 am</span>
              </div>

              <div class="card" style="padding: 12px; border-left: 4px solid #ef4444; background: #fef2f2;">
                <span style="font-size: 11px; font-weight: 800; color: #991b1b;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> INASISTENCIAS</span>
                <div style="font-size: 22px; font-weight: 900; color: #dc2626; margin: 2px 0;">${absentCount}</div>
                <span style="font-size: 10px; color: #dc2626;">Sin registro biométrico</span>
              </div>

              <div class="card" style="padding: 12px; border-left: 4px solid #8b5cf6; background: #f5f3ff;">
                <span style="font-size: 11px; font-weight: 800; color: #5b21b6;">🔵 JUSTIFICADAS</span>
                <div style="font-size: 22px; font-weight: 900; color: #6d28d9; margin: 2px 0;">${justifiedCount}</div>
                <span style="font-size: 10px; color: #6d28d9;">Con certificado médico</span>
              </div>
            </div>

            <!-- TABLA INTERACTIVA DE TOMA DE ASISTENCIA -->
            <div class="card">
              <div class="card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
                <div>
                  <h3 class="card-title" style="font-size: var(--font-size-base); margin: 0;">
                    [Lista] Registro y Marcación de Asistencia: ${currentGrade.label} • Fecha: ${selectedDate}
                  </h3>
                  <span style="font-size: 11px; color: var(--text-muted);">
                    Haga clic en los botones de estado para cambiar la asistencia del estudiante al instante.
                  </span>
                </div>
              </div>

              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Estudiante</th>
                      <th>DNI / Código</th>
                      <th>Hora Biometría</th>
                      <th>Marcación de Estado (1 Clic)</th>
                      <th>Método de Registro</th>
                      <th>Observaciones</th>
                      <th style="text-align: center;">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${classroomRecords.map(r => `
                      <tr>
                        <td>
                          <strong>${r.studentName}</strong>
                        </td>
                        <td>
                          <code>${r.studentCode || r.studentId}</code><br>
                          <span style="font-size: 10.5px; color: #64748b;">DNI: ${r.dni || '--'}</span>
                        </td>
                        <td>
                          <strong style="color: ${r.status === 'Presente' ? '#047857' : r.status === 'Tardanza' ? '#b45309' : '#dc2626'}; font-size: 12.5px;">
                            ${r.arrivalTime || '--:--'}
                          </strong>
                        </td>
                        <td>
                          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                            <button class="btn btn-sm" onclick="window.app.setStudentAttendanceStatus('${r.id}', 'Presente')" style="font-size: 10.5px; padding: 2px 7px; font-weight: 800; background: ${r.status === 'Presente' ? '#10b981' : '#f1f5f9'}; color: ${r.status === 'Presente' ? '#ffffff' : '#334155'}; border: 1px solid ${r.status === 'Presente' ? '#059669' : '#cbd5e1'};">
                              <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Presente
                            </button>
                            <button class="btn btn-sm" onclick="window.app.setStudentAttendanceStatus('${r.id}', 'Tardanza')" style="font-size: 10.5px; padding: 2px 7px; font-weight: 800; background: ${r.status === 'Tardanza' ? '#f59e0b' : '#f1f5f9'}; color: ${r.status === 'Tardanza' ? '#ffffff' : '#334155'}; border: 1px solid ${r.status === 'Tardanza' ? '#d97706' : '#cbd5e1'};">
                              <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> Tardanza
                            </button>
                            <button class="btn btn-sm" onclick="window.app.setStudentAttendanceStatus('${r.id}', 'Falta')" style="font-size: 10.5px; padding: 2px 7px; font-weight: 800; background: ${r.status === 'Falta' ? '#ef4444' : '#f1f5f9'}; color: ${r.status === 'Falta' ? '#ffffff' : '#334155'}; border: 1px solid ${r.status === 'Falta' ? '#dc2626' : '#cbd5e1'};">
                              <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Falta
                            </button>
                            <button class="btn btn-sm" onclick="window.app.setStudentAttendanceStatus('${r.id}', 'Justificada')" style="font-size: 10.5px; padding: 2px 7px; font-weight: 800; background: ${r.status === 'Justificada' ? '#8b5cf6' : '#f1f5f9'}; color: ${r.status === 'Justificada' ? '#ffffff' : '#334155'}; border: 1px solid ${r.status === 'Justificada' ? '#7c3aed' : '#cbd5e1'};">
                              🔵 Justificada
                            </button>
                          </div>
                        </td>
                        <td>
                          <span style="font-size: 11px; color: #475569;">
                            ${r.method || 'Molinete Huella Digital'}
                          </span>
                        </td>
                        <td>
                          <span style="font-size: 11px; color: #64748b;">
                            ${r.observations || 'Sin observaciones'}
                          </span>
                        </td>
                        <td style="text-align: center;">
                          <button class="btn btn-outline btn-sm" onclick="window.app.openJustifyAttendanceModal('${r.studentId}', '${r.date}')" style="font-size: 10.5px; padding: 3px 8px;">
                            ✏️ Justificar
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- =====================================================================
               SUB-PESTAÑA 2: PARTE DIARIO DE TARDANZAS E INASISTENCIAS (AUTOMATIZADO)
               ===================================================================== -->
          ${activeSubTab === 'daily-report' ? `
            
            <div class="card" style="margin-bottom: var(--space-4); background: #f8fafc; border: 1px solid #cbd5e1;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding: 14px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 20px;">[Reporte]</span>
                    <div>
                      <h2 style="font-size: 17px; font-weight: 900; color: #0b132b; margin: 0;">
                        Parte Diario Oficial de Tardanzas e Inasistencias
                      </h2>
                      <span style="font-size: 11.5px; color: #64748b;">
                        Fecha: <strong>${selectedDate}</strong> • Hora de Corte Oficial: <strong>08:15 AM</strong> • I.E.P. "El Educador" (UGEL 05)
                      </span>
                    </div>
                  </div>
                </div>

                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-navy btn-sm" onclick="window.app.openOfficialDailyReportPrintModal('${selectedDate}')" style="font-weight: 800; font-size: 12px;">
                    [Imprimir] Imprimir Parte Diario A4 (UGEL 05)
                  </button>
                  <button class="btn btn-gold btn-sm" onclick="window.app.notifyAllAbsencesAndTardinessWhatsApp('${selectedDate}')" style="font-weight: 800; font-size: 12px;">
                    📲 Notificar a Todos los Apoderados (WhatsApp)
                  </button>
                </div>
              </div>
            </div>

            <!-- CUADRO RESUMEN DE INCIDENCIAS -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: var(--space-5);">
              <div class="card" style="padding: 14px; border-left: 4px solid #10b981; background: #ecfdf5;">
                <span style="font-size: 11px; font-weight: 800; color: #065f46;">ASISTENCIA GENERAL</span>
                <div style="font-size: 24px; font-weight: 900; color: #047857; margin: 2px 0;">${dayReport.attendanceRate}%</div>
                <span style="font-size: 10.5px; color: #047857;">${dayReport.presentList.length} alumnos puntuales</span>
              </div>

              <div class="card" style="padding: 14px; border-left: 4px solid #f59e0b; background: #fffbeb;">
                <span style="font-size: 11px; font-weight: 800; color: #92400e;">TARDANZAS EN PUERTA</span>
                <div style="font-size: 24px; font-weight: 900; color: #b45309; margin: 2px 0;">${dayReport.tardinessList.length} Casos</div>
                <span style="font-size: 10.5px; color: #b45309;">Registrados post 07:45 am</span>
              </div>

              <div class="card" style="padding: 14px; border-left: 4px solid #ef4444; background: #fef2f2;">
                <span style="font-size: 11px; font-weight: 800; color: #991b1b;">INASISTENCIAS DEL DÍA</span>
                <div style="font-size: 24px; font-weight: 900; color: #dc2626; margin: 2px 0;">${dayReport.absenceList.length} Alumnos</div>
                <span style="font-size: 10.5px; color: #dc2626;">Sin marcación de ingreso</span>
              </div>

              <div class="card" style="padding: 14px; border-left: 4px solid #8b5cf6; background: #f5f3ff;">
                <span style="font-size: 11px; font-weight: 800; color: #5b21b6;">FALTAS JUSTIFICADAS</span>
                <div style="font-size: 24px; font-weight: 900; color: #6d28d9; margin: 2px 0;">${dayReport.justifiedList.length} Casos</div>
                <span style="font-size: 10.5px; color: #6d28d9;">Con aviso / descanso médico</span>
              </div>
            </div>

            <!-- SECCIÓN A: TABLA DE TARDANZAS -->
            <div class="card" style="margin-bottom: var(--space-5); border: 1px solid #fde68a;">
              <div class="card-header" style="background: #fffbeb; border-bottom: 1px solid #fef3c7;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 18px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span></span>
                  <div>
                    <h3 style="font-size: 14px; font-weight: 900; color: #92400e; margin: 0;">
                      1. Registro Detallado de Tardanzas en Portería (${dayReport.tardinessList.length} casos)
                    </h3>
                    <span style="font-size: 11px; color: #b45309;">
                      Estudiantes que ingresaron después de las 07:45 AM mediante escaneo de código QR o torniquete.
                    </span>
                  </div>
                </div>
              </div>

              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Estudiante</th>
                      <th>Grado / Nivel</th>
                      <th>Hora Ingreso QR</th>
                      <th>Demora</th>
                      <th>Apoderado Responsable</th>
                      <th>Teléfono</th>
                      <th style="text-align: center;">Acciones Inmediatas</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${dayReport.tardinessList.length > 0 ? dayReport.tardinessList.map((t, idx) => `
                      <tr>
                        <td><strong>${String(idx + 1).padStart(2, '0')}</strong></td>
                        <td>
                          <strong>${t.studentName}</strong><br>
                          <span style="font-size: 10.5px; color: #64748b;">Código: ${t.studentCode} • DNI: ${t.dni}</span>
                        </td>
                        <td><span class="status-badge" style="background:#e0e7ff; color:#3730a3; font-weight:bold;">${t.grade}</span></td>
                        <td><strong style="color: #b45309; font-size: 13px;">${t.arrivalTime}</strong></td>
                        <td><span class="status-badge status-failed" style="background: #fef3c7; color: #92400e; font-weight: 800;">+${t.delayMinutes || '7'} min</span></td>
                        <td>${t.guardian || 'Apoderado'}</td>
                        <td><code>${t.guardianPhone || '984-123-456'}</code></td>
                        <td style="text-align: center;">
                          <div style="display: flex; gap: 4px; justify-content: center;">
                            <button class="btn btn-sm" onclick="window.app.sendTardinessWhatsApp('${t.studentName}', '${t.arrivalTime}', '${t.delayMinutes || '7'}', '${t.guardianPhone || '984-123-456'}', '${t.guardian || 'Apoderado'}')" style="background: #22c55e; color: white; font-weight: 800; font-size: 10.5px; padding: 4px 8px;" title="Enviar notificación a WhatsApp">
                              💬 WhatsApp
                            </button>
                            <button class="btn btn-outline btn-sm" onclick="window.app.showTardinessPassModal('${t.studentCode}')" style="font-size: 10.5px; padding: 4px 8px;" title="Emitir Pase de Tardanza">
                              [Documento] Pase
                            </button>
                          </div>
                        </td>
                      </tr>
                    `).join('') : `
                      <tr>
                        <td colspan="8" style="text-align: center; padding: 18px; color: #047857; font-weight: bold;">
                          ✓ No se registraron tardanzas en el control de puerta en esta fecha.
                        </td>
                      </tr>
                    `}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SECCIÓN B: TABLA DE INASISTENCIAS -->
            <div class="card" style="border: 1px solid #fecaca;">
              <div class="card-header" style="background: #fef2f2; border-bottom: 1px solid #fee2e2;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 18px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span></span>
                  <div>
                    <h3 style="font-size: 14px; font-weight: 900; color: #991b1b; margin: 0;">
                      2. Registro de Inasistencias del Día (${dayReport.absenceList.length} casos)
                    </h3>
                    <span style="font-size: 11px; color: #dc2626;">
                      Alumnos sin registro biométrico ni escaneo de fotocheck al cierre de puerta.
                    </span>
                  </div>
                </div>
              </div>

              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Estudiante</th>
                      <th>Grado / Aula</th>
                      <th>Tutor Asignado</th>
                      <th>Apoderado</th>
                      <th>Teléfono de Contacto</th>
                      <th>Estado de Inasistencia</th>
                      <th style="text-align: center;">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${dayReport.absenceList.length > 0 ? dayReport.absenceList.map((a, idx) => `
                      <tr>
                        <td><strong>${String(idx + 1).padStart(2, '0')}</strong></td>
                        <td>
                          <strong>${a.studentName}</strong><br>
                          <span style="font-size: 10.5px; color: #64748b;">DNI: ${a.dni} • ${a.studentCode}</span>
                        </td>
                        <td><span class="status-badge" style="background:#e0e7ff; color:#3730a3; font-weight:bold;">${a.grade}</span></td>
                        <td>${currentGrade.tutor || 'Prof. Roberto Silva'}</td>
                        <td>${a.guardian || 'Apoderado'}</td>
                        <td><code>${a.guardianPhone || '984-123-456'}</code></td>
                        <td><span class="status-badge status-failed" style="font-weight: 800;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Inasistencia Injustificada</span></td>
                        <td style="text-align: center;">
                          <div style="display: flex; gap: 4px; justify-content: center;">
                            <button class="btn btn-sm" onclick="window.app.sendAbsenceWhatsApp('${a.studentName}', '${a.guardianPhone || '984-123-456'}', '${a.guardian || 'Apoderado'}')" style="background: #22c55e; color: white; font-weight: 800; font-size: 10.5px; padding: 4px 8px;" title="Notificar Inasistencia por WhatsApp">
                              💬 WhatsApp
                            </button>
                            <button class="btn btn-outline btn-sm" onclick="window.app.openJustifyAttendanceModal('${a.studentCode}', '${selectedDate}')" style="font-size: 10.5px; padding: 4px 8px;" title="Registrar Justificación">
                              📝 Justificar
                            </button>
                          </div>
                        </td>
                      </tr>
                    `).join('') : `
                      <tr>
                        <td colspan="8" style="text-align: center; padding: 18px; color: #047857; font-weight: bold;">
                          ✓ Asistencia al 100%. No hay alumnos inasistentes registrados.
                        </td>
                      </tr>
                    `}
                  </tbody>
                </table>
              </div>
            </div>

          ` : ''}

          <!-- =====================================================================
               SUB-PESTAÑA 3: ESCÁNER QR EN PORTERÍA (MODO DUAL INTELIGENTE)
               ===================================================================== -->
          ${activeSubTab === 'door-scanner' ? `
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start;">
              
              <!-- Columna Izquierda: Visor de Cámara y Botones de Escaneo -->
              <div class="card" style="border: 2px solid #3b82f6; box-shadow: 0 4px 12px rgba(59,130,246,0.1);">
                <div class="card-header" style="background: #0f172a; color: white;">
                  <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 20px;">[Cámara]</span>
                      <div>
                        <h3 style="font-size: 15px; font-weight: 900; color: white; margin: 0;">
                          Estación de Portería & Auxiliar: Escáner QR Inteligente
                        </h3>
                        <span style="font-size: 11px; color: #94a3b8;">Asistencia en Puerta (07:00 - 08:30 AM) • Incidencias durante la jornada</span>
                      </div>
                    </div>
                    <span id="camera-door-status" class="status-badge status-approved" style="font-size: 10px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> LISTO</span>
                  </div>
                </div>

                <div style="padding: 20px; text-align: center;">
                  
                  <div id="qr-door-camera-feed" style="width: 100%; max-width: 320px; height: 240px; margin: 0 auto 16px; border: 3px dashed #3b82f6; border-radius: 12px; background: #0f172a; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                    <div style="color: white; text-align: center;">
                      <div style="font-size: 48px; margin-bottom: 6px;">⚡[Móvil]</div>
                      <div style="font-size: 12px; font-weight: bold; color: #38bdf8;">Lector QR Activo</div>
                      <div style="font-size: 10.5px; opacity: 0.8;">Muestra el fotocheck frente al lente</div>
                    </div>
                  </div>

                  <!-- Botones de Control de Cámara -->
                  <div style="display: flex; gap: 8px; justify-content: center; margin-bottom: 20px;">
                    <button id="btn-start-door-cam" class="btn btn-navy btn-sm" onclick="window.app.startDoorCameraScanner()" style="font-weight: 800;">
                      📹 Encender Cámara en Vivo
                    </button>
                    <button id="btn-stop-door-cam" class="btn btn-red btn-sm" onclick="window.app.stopDoorCameraScanner()" style="font-weight: 800; display: none;">
                      ⏹️ Detener Cámara
                    </button>
                  </div>

                  <!-- Simulador de Escaneo Inteligente -->
                  <h4 style="font-size: 12px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 8px;">
                    ⚡ Simulación de Lecturas QR (Asistencia vs. Incidencias):
                  </h4>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                    <button class="btn btn-outline btn-sm" onclick="window.app.processSmartQRScan('EST-2026-042', '07:38 AM')" style="font-size: 11px; text-align: left; padding: 8px;">
                      <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> <strong>Sofía Méndez</strong><br><span style="font-size: 9.5px; color: #047857;">1er Escaneo: Puntual (07:38 AM)</span>
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="window.app.processSmartQRScan('EST-2026-011', '08:10 AM')" style="font-size: 11px; text-align: left; padding: 8px;">
                      <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> <strong>Carlos Benítez</strong><br><span style="font-size: 9.5px; color: #b45309;">1er Escaneo: Tardanza (08:10 AM)</span>
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="window.app.processSmartQRScan('EST-2026-055')" style="font-size: 11px; text-align: left; padding: 8px; border: 2px solid #ef4444; background: #fff5f5;">
                      [Alerta] <strong>Gael Cáceres</strong><br><span style="font-size: 9.5px; color: #dc2626; font-weight: bold;">2do Escaneo: Crear Informe</span>
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="window.app.processSmartQRScan('EST-2026-025', '08:45 AM')" style="font-size: 11px; text-align: left; padding: 8px;">
                      <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> <strong>Mateo Ramos</strong><br><span style="font-size: 9.5px; color: #dc2626;">08:45 AM (Puerta Cerrada / Falta)</span>
                    </button>
                  </div>

                </div>
              </div>

              <!-- Columna Derecha: Pantalla de Feedback en Vivo para el Estudiante / Auxiliar -->
              <div>
                <div class="card" style="border: 2px solid var(--border-subtle); margin-bottom: 16px;">
                  <div class="card-header" style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <h3 style="font-size: 14px; font-weight: 800; color: #1e293b; margin: 0;">
                      🖥️ Pantalla de Validación de Puerta & Auxiliar
                    </h3>
                  </div>
                  
                  <div id="door-last-scan-display" style="padding: 20px; text-align: center;">
                    <div style="font-size: 40px; margin-bottom: 6px;">[Expediente]</div>
                    <h4 style="font-size: 15px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 4px;">
                      Esperando lectura de fotocheck escolar...
                    </h4>
                    <p style="font-size: 12px; color: var(--text-muted); margin: 0;">
                      Al escanear en puerta se valida asistencia. Si se escanea durante el horario escolar o recreo, se habilita el registro de incidencias conductuales.
                    </p>
                  </div>
                </div>

                <!-- Feed de Últimos Ingresos -->
                <div class="card">
                  <div class="card-header" style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0;">
                    <strong style="font-size: 12px; color: #1e3a8a;">⏱️ Últimos Alumnos validados por QR:</strong>
                  </div>
                  <div style="max-height: 180px; overflow-y: auto; font-size: 11.5px; padding: 6px;">
                    ${classroomRecords.slice(0, 5).map(r => `
                      <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px solid #f1f5f9;">
                        <div>
                          <strong>${r.studentName}</strong> <span style="font-size: 10px; color: #64748b;">(${r.grade})</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 6px;">
                          <code>${r.arrivalTime}</code>
                          <span class="status-badge ${r.status === 'Presente' ? 'status-approved' : r.status === 'Tardanza' ? 'status-pending' : 'status-failed'}" style="font-size: 9.5px; padding: 1px 5px;">
                            ${r.status}
                          </span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>

              </div>

            </div>

          ` : ''}

          <!-- =====================================================================
               SUB-PESTAÑA 4: PLANCHA DE FOTOCHECKS QR ESTUDIANTILES
               ===================================================================== -->
          <!-- =====================================================================
               SUB-PESTAÑA 4: GENERADOR DE CÓDIGOS QR ESTUDIANTILES (SIN FOTOS)
               ===================================================================== -->
          ${activeSubTab === 'id-cards' ? `
            
            <div class="card" style="margin-bottom: var(--space-4); background: #f8fafc; border: 1px solid #cbd5e1;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding: 14px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 24px;">[Imprimir]</span>
                    <div>
                      <h3 style="font-size: 16px; font-weight: 900; color: #0b132b; margin: 0;">
                        Generador de Códigos QR Estudiantiles (Solo Código QR, Nombres y Grado)
                      </h3>
                      <span style="font-size: 11.5px; color: #64748b;">
                        Plancha oficial de credenciales y stickers QR listos para imprimir y recortar. <strong>Sin fotos</strong>, optimizado para lectura rápida en portería.
                      </span>
                    </div>
                  </div>
                </div>

                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-sm" onclick="window.app.openCreateEnrollmentModal()" style="background: #10b981; color: white; font-weight: 900; font-size: 12px; display: flex; align-items: center; gap: 6px; padding: 7px 14px; box-shadow: 0 2px 8px rgba(16,185,129,0.3);">
                    <span>➕</span> + Matricular Nuevo Alumno y Generar QR
                  </button>
                  <button class="btn btn-navy btn-sm" onclick="window.print()" style="font-weight: 800; font-size: 12px;">
                    [Imprimir] Imprimir Plancha A4 de Códigos QR
                  </button>
                  <button class="btn btn-gold btn-sm" onclick="window.app.downloadAllQRSheets()" style="font-weight: 800; font-size: 12px;">
                    [Descargar] Descargar Plancha QR
                  </button>
                </div>
              </div>
            </div>

            <!-- GRID DE TARJETAS / STICKERS QR (SIN FOTOS) -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 20px;">
              ${enrollments.map(st => `
                <div class="card" style="border: 2px solid #1e3a8a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.06); background: #ffffff; text-align: center;">
                  
                  <!-- Cabecera de la Tarjeta QR -->
                  <div style="background: linear-gradient(135deg, #0b132b 0%, #1e3a8a 100%); color: white; padding: 8px 12px; display: flex; align-items: center; justify-content: center; gap: 6px; border-bottom: 3px solid #f59e0b;">
                    <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo" style="width: 22px; height: 22px; object-fit: contain;" />
                    <div style="text-align: center;">
                      <div style="font-size: 10px; font-weight: 900; letter-spacing: 0.05em; color: #fde047;">I.E.P. "EL EDUCADOR"</div>
                      <div style="font-size: 8px; opacity: 0.9;">CONTROL DE ASISTENCIA QR 2026</div>
                    </div>
                  </div>

                  <!-- Cuerpo de la Tarjeta QR: Código QR Grande + Nombres Completos + Grado -->
                  <div style="padding: 16px 12px;">
                    
                    <!-- Código QR Grande en Alta Resolución -->
                    <div style="width: 140px; height: 140px; margin: 0 auto 12px; border: 2px solid #0b132b; border-radius: 8px; padding: 6px; background: white; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
                      ${Components.generateQRSVG(st.studentCode)}
                    </div>

                    <!-- Nombres y Apellidos Completos en Mayúsculas y Negrita -->
                    <div style="font-size: 13.5px; font-weight: 900; color: #0b132b; text-transform: uppercase; line-height: 1.25; margin-bottom: 4px;">
                      ${st.studentName}
                    </div>

                    <!-- Grado y Nivel -->
                    <div style="font-size: 12px; font-weight: 800; color: #1e40af; margin-bottom: 6px;">
                      ${st.grade}
                    </div>

                    <!-- Código y DNI -->
                    <div style="font-size: 10.5px; color: #475569; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 4px; padding: 3px 8px; display: inline-block;">
                      <strong>CÓD:</strong> <code>${st.studentCode}</code> • <strong>DNI:</strong> <code>${st.dni}</code>
                    </div>

                  </div>

                  <!-- Pie de Tarjeta con Botones de Acción -->
                  <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; gap: 6px;">
                    <button class="btn btn-navy btn-sm" onclick="window.app.openStudentQRModal('${st.studentCode}')" style="font-size: 11px; font-weight: bold; padding: 4px 10px; flex: 1;" title="Ver Tarjeta QR Individual en Grande">
                      [Móvil] Ver QR
                    </button>
                    <button class="btn btn-gold btn-sm" onclick="window.app.downloadStudentQR('${st.studentCode}')" style="font-size: 11px; font-weight: bold; padding: 4px 8px;" title="Descargar Código QR">
                      [Descargar] Guardar
                    </button>
                    <button class="btn btn-outline btn-sm" onclick="window.app.openCreateIncidentModal('${st.studentCode}')" style="font-size: 11px; font-weight: bold; padding: 4px 8px; color: #dc2626; border-color: #fca5a5;" title="Registrar Incidencia Conductual">
                      [Alerta] Informe
                    </button>
                  </div>

                </div>
              `).join('')}
            </div>

          ` : ''}

          <!-- =====================================================================
               SUB-PESTAÑA 5: LIBRO OFICIAL DE INCIDENCIAS & CONVIVENCIA ESCOLAR (MINEDU)
               ===================================================================== -->
          ${activeSubTab === 'incidents' ? `
            
            <!-- Encabezado de la Sub-Pestaña -->
            <div class="card" style="margin-bottom: var(--space-4); background: #f8fafc; border: 1px solid #cbd5e1;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding: 14px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 22px;">[Alerta]</span>
                    <div>
                      <h2 style="font-size: 16px; font-weight: 900; color: #991b1b; margin: 0;">
                        Libro Oficial de Registro de Incidencias & Convivencia Escolar
                      </h2>
                      <span style="font-size: 11.5px; color: #64748b;">
                        I.E.P. "El Educador" • Conforme a la Ley N° 29719 / MINEDU y D.S. N° 004-2018-MINEDU
                      </span>
                    </div>
                  </div>
                </div>

                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button class="btn btn-red btn-sm" onclick="window.app.openCreateIncidentModal()" style="font-weight: 800; font-size: 12px;">
                    + Registrar Nuevo Informe de Incidencia / Mérito
                  </button>
                  <button class="btn btn-navy btn-sm" onclick="window.print()" style="font-weight: 800; font-size: 12px;">
                    [Imprimir] Imprimir Libro de Incidencias
                  </button>
                </div>
              </div>
            </div>

            <!-- Resumen Estadístico de Incidencias -->
            ${(() => {
              const allInc = state.behaviorIncidents || initialData.behaviorIncidents || [];
              const leves = allInc.filter(i => i.severity === 'Leve').length;
              const graves = allInc.filter(i => i.severity === 'Grave').length;
              const muyGraves = allInc.filter(i => i.severity === 'Muy Grave').length;
              const meritos = allInc.filter(i => i.severity === 'Mérito').length;

              return `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; margin-bottom: var(--space-4);">
                  <div class="card" style="padding: 12px; border-left: 4px solid #3b82f6; background: #eff6ff;">
                    <span style="font-size: 11px; font-weight: 800; color: #1e40af;">TOTAL REGISTRADOS</span>
                    <div style="font-size: 22px; font-weight: 900; color: #1e3a8a; margin: 2px 0;">${allInc.length} Informes</div>
                    <span style="font-size: 10px; color: #64748b;">Año Lectivo 2026</span>
                  </div>
                  
                  <div class="card" style="padding: 12px; border-left: 4px solid #f59e0b; background: #fffbeb;">
                    <span style="font-size: 11px; font-weight: 800; color: #92400e;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> FALTAS LEVES</span>
                    <div style="font-size: 22px; font-weight: 900; color: #b45309; margin: 2px 0;">${leves}</div>
                    <span style="font-size: 10px; color: #b45309;">Uniforme, tardanza aula</span>
                  </div>

                  <div class="card" style="padding: 12px; border-left: 4px solid #ef4444; background: #fef2f2;">
                    <span style="font-size: 11px; font-weight: 800; color: #991b1b;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> FALTAS GRAVES</span>
                    <div style="font-size: 22px; font-weight: 900; color: #dc2626; margin: 2px 0;">${graves}</div>
                    <span style="font-size: 10px; color: #dc2626;">Desobediencia, celulares</span>
                  </div>

                  <div class="card" style="padding: 12px; border-left: 4px solid #991b1b; background: #ffe4e6;">
                    <span style="font-size: 11px; font-weight: 800; color: #881337;">⛔ MUY GRAVES</span>
                    <div style="font-size: 22px; font-weight: 900; color: #9f1239; margin: 2px 0;">${muyGraves}</div>
                    <span style="font-size: 10px; color: #9f1239;">Agresiones, daños</span>
                  </div>

                  <div class="card" style="padding: 12px; border-left: 4px solid #10b981; background: #ecfdf5;">
                    <span style="font-size: 11px; font-weight: 800; color: #065f46;">★ MÉRITOS / FELICITACIONES</span>
                    <div style="font-size: 22px; font-weight: 900; color: #047857; margin: 2px 0;">${meritos}</div>
                    <span style="font-size: 10px; color: #047857;">Conducta destacada</span>
                  </div>
                </div>

                <!-- Tabla del Libro de Incidencias -->
                <div class="card">
                  <div class="card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                    <div>
                      <h3 class="card-title" style="font-size: 14px; margin: 0;">
                        [Lista] Expediente Conductual & Registro de Casos
                      </h3>
                      <span style="font-size: 11px; color: var(--text-muted);">
                        Cada reporte está amarrado al código QR y perfil del estudiante con notificación inmediata a su apoderado.
                      </span>
                    </div>

                    <div style="display: flex; gap: 8px;">
                      <input type="text" id="incident-search-input" class="form-control" placeholder="[Buscar] Buscar por estudiante (ej: Gael Cáceres)..." style="font-size: 11.5px; width: 260px;" oninput="window.app.filterIncidentsTable(this.value)">
                    </div>
                  </div>

                  <div class="table-container">
                    <table class="data-table" id="incidents-main-table">
                      <thead>
                        <tr>
                          <th>N° / Código</th>
                          <th>Estudiante</th>
                          <th>Grado</th>
                          <th>Fecha & Hora</th>
                          <th>Gravedad</th>
                          <th>Motivo / Categoría</th>
                          <th>Lugar</th>
                          <th>Reportado Por</th>
                          <th>Medida Pedagógica</th>
                          <th style="text-align: center;">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${allInc.length > 0 ? allInc.map((inc, idx) => {
                          const badgeColor = inc.severity === 'Mérito' ? '#10b981' : inc.severity === 'Leve' ? '#f59e0b' : inc.severity === 'Grave' ? '#ef4444' : '#991b1b';
                          return `
                            <tr>
                              <td>
                                <strong>${String(idx + 1).padStart(2, '0')}</strong><br>
                                <code style="font-size: 10px;">${inc.id}</code>
                              </td>
                              <td>
                                <strong>${inc.studentName}</strong><br>
                                <span style="font-size: 10.5px; color: #64748b;">DNI: ${inc.dni} • ${inc.studentCode}</span>
                              </td>
                              <td><span class="status-badge" style="background:#e0e7ff; color:#3730a3; font-weight:bold;">${inc.grade}</span></td>
                              <td>
                                <strong>${inc.date}</strong><br>
                                <span style="font-size: 11px; color: #64748b;">${inc.time}</span>
                              </td>
                              <td>
                                <span class="status-badge" style="background: ${badgeColor}; color: white; font-weight: 800; font-size: 10px;">
                                  ${inc.severity === 'Mérito' ? '★ Mérito' : inc.severity === 'Leve' ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> Leve' : inc.severity === 'Grave' ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Grave' : '⛔ Muy Grave'}
                                </span>
                              </td>
                              <td><strong>${inc.category}</strong></td>
                              <td><span style="font-size: 11px; color: #475569;">${inc.location}</span></td>
                              <td><span style="font-size: 11px; color: #1e3a8a; font-weight: bold;">${inc.reportedBy}</span></td>
                              <td><span style="font-size: 11px; color: #334155;">${inc.correctiveMeasure}</span></td>
                              <td style="text-align: center;">
                                <div style="display: flex; gap: 4px; justify-content: center;">
                                  <button class="btn btn-sm" onclick="window.app.sendIncidentWhatsApp('${inc.id}')" style="background: #22c55e; color: white; font-weight: 800; font-size: 10.5px; padding: 3px 8px;" title="Notificar a Apoderado por WhatsApp">
                                    💬 WhatsApp
                                  </button>
                                  <button class="btn btn-navy btn-sm" onclick="window.app.openIncidentOfficialPrintModal('${inc.id}')" style="font-size: 10.5px; padding: 3px 8px;" title="Imprimir Acta A4 de Compromiso">
                                    [Documento] Acta A4
                                  </button>
                                </div>
                              </td>
                            </tr>
                          `;
                        }).join('') : `
                          <tr>
                            <td colspan="10" style="text-align: center; padding: 20px; color: #64748b;">
                              No hay incidencias registradas en el periodo escolar.
                            </td>
                          </tr>
                        `}
                      </tbody>
                    </table>
                  </div>
                </div>
              `;
            })()}

          ` : ''}

        <!-- =========================================================================
             SUB-PESTAÑA 6: PADRE DE FAMILIA O ESTUDIANTE (HISTORIAL Y SEGUIMIENTO)
             ========================================================================= -->
        ${activeSubTab === 'student-history' ? `
          
          <!-- RESUMEN DE ASISTENCIA DEL ESTUDIANTE -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: var(--space-5);">
            <div class="card" style="padding: 14px; border-left: 4px solid #10b981; background: #ecfdf5;">
              <span style="font-size: 11px; font-weight: 800; color: #065f46;">PORCENTAJE DE ASISTENCIA</span>
              <div style="font-size: 26px; font-weight: 900; color: #047857; margin: 4px 0;">98.5%</div>
              <span class="status-badge status-approved" style="font-size: 10px;">★ Récord Destacado</span>
            </div>

            <div class="card" style="padding: 14px; border-left: 4px solid #3b82f6; background: #eff6ff;">
              <span style="font-size: 11px; font-weight: 800; color: #1e40af;">DÍAS ASISTIDOS PUNTUAL</span>
              <div style="font-size: 26px; font-weight: 900; color: #1e3a8a; margin: 4px 0;">22 Días</div>
              <span style="font-size: 10.5px; color: #64748b;">En el presente bimestre</span>
            </div>

            <div class="card" style="padding: 14px; border-left: 4px solid #f59e0b; background: #fffbeb;">
              <span style="font-size: 11px; font-weight: 800; color: #92400e;">TARDANZAS REGISTRADAS</span>
              <div style="font-size: 26px; font-weight: 900; color: #b45309; margin: 4px 0;">1 Día</div>
              <span style="font-size: 10.5px; color: #b45309;">(Tardanza justificada)</span>
            </div>

            <div class="card" style="padding: 14px; border-left: 4px solid #8b5cf6; background: #f5f3ff;">
              <span style="font-size: 11px; font-weight: 800; color: #5b21b6;">FALTAS JUSTIFICADAS</span>
              <div style="font-size: 26px; font-weight: 900; color: #6d28d9; margin: 4px 0;">1 Falta</div>
              <span style="font-size: 10.5px; color: #6d28d9;">Con constancia médica</span>
            </div>
          </div>

          <!-- HISTORIAL BIOMÉTRICO DETALLADO -->
          <div class="card" style="margin-bottom: var(--space-4);">
            <div class="card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px; flex-wrap: wrap; gap: 8px;">
              <div>
                <h3 class="card-title" style="font-size: var(--font-size-base); margin: 0;">
                  ⏱️ Historial de Marcación QR en Puerta: ${studentName} (${studentGrade})
                </h3>
                <span style="font-size: 11px; color: var(--text-muted);">
                  Registro automático del escáner en portería y molinete de acceso.
                </span>
              </div>
              
              <div style="display: flex; gap: 6px;">
                <button class="btn btn-navy btn-sm" onclick="window.app.openStudentQRModal('${studentCode}')" style="font-weight: 800; font-size: 11.5px;">
                  [Móvil] Ver Mi Código QR
                </button>
                ${isPadre ? `
                  <button class="btn btn-outline btn-sm" onclick="window.app.openJustifyAttendanceModal('${studentCode}', '19/08/2026')" style="font-weight: 800; font-size: 11.5px;">
                    📝 Enviar Justificación
                  </button>
                ` : ''}
              </div>
            </div>

            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Día</th>
                    <th>Hora de Ingreso</th>
                    <th>Hora de Salida</th>
                    <th>Puntualidad & Estado</th>
                    <th>Método de Validación</th>
                    <th>Observaciones</th>
                  </tr>
                </thead>
                <tbody>
                  ${studentHistory.map(h => `
                    <tr>
                      <td><strong>${h.date}</strong></td>
                      <td>${h.day}</td>
                      <td>
                        <strong style="color: ${h.status === 'Presente' ? '#047857' : h.status === 'Tardanza' ? '#b45309' : '#6d28d9'}; font-size: 12.5px;">
                          ${h.arrivalTime || '--:--'}
                        </strong>
                      </td>
                      <td><code>${h.exitTime || '03:30 PM'}</code></td>
                      <td>
                        <span class="status-badge ${h.status === 'Presente' ? 'status-approved' : h.status === 'Tardanza' ? 'status-pending' : 'status-approved'}" style="font-weight: 800;">
                          ${h.status === 'Presente' ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Presente a Tiempo' : h.status === 'Tardanza' ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> Tardanza' : '🔵 Justificada'}
                        </span>
                      </td>
                      <td>
                        <span style="font-size: 11px; color: #475569;">
                          ${h.method || 'Fotocheck QR (Portería)'}
                        </span>
                      </td>
                      <td>
                        <span style="font-size: 11px; color: #64748b;">
                          ${h.observations || 'Conforme'}
                        </span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- SECCIÓN: REGISTRO CONDUCTUAL & ANECDOTARIO ESCOLAR DEL ALUMNO -->
          ${(() => {
            const studentInc = (state.behaviorIncidents || initialData.behaviorIncidents || []).filter(i => 
              (i.studentCode && i.studentCode === studentCode) ||
              (i.studentName && i.studentName.toLowerCase().includes((studentName || '').toLowerCase()))
            );

            return `
              <div class="card">
                <div class="card-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px;">
                  <div>
                    <h3 class="card-title" style="font-size: var(--font-size-base); margin: 0; color: #1e3a8a;">
                      [Cuaderno] Registro Conductual & Anecdotario Escolar de ${studentName}
                    </h3>
                    <span style="font-size: 11px; color: var(--text-muted);">
                      Seguimiento formativo, reconocimientos e informes disciplinarios registrados institucionalmente.
                    </span>
                  </div>
                </div>

                <div class="table-container">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Gravedad</th>
                        <th>Categoría / Motivo</th>
                        <th>Lugar</th>
                        <th>Docente / Auxiliar</th>
                        <th>Detalle & Compromiso</th>
                        <th style="text-align: center;">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${studentInc.length > 0 ? studentInc.map(inc => `
                        <tr>
                          <td><strong>${inc.date}</strong><br><span style="font-size: 10.5px; color:#64748b;">${inc.time}</span></td>
                          <td>
                            <span class="status-badge" style="background: ${inc.severity === 'Mérito' ? '#10b981' : inc.severity === 'Leve' ? '#f59e0b' : '#ef4444'}; color: white; font-weight: 800;">
                              ${inc.severity}
                            </span>
                          </td>
                          <td><strong>${inc.category}</strong></td>
                          <td>${inc.location}</td>
                          <td>${inc.reportedBy}</td>
                          <td style="font-size: 11.5px; line-height: 1.4;">
                            <div>${inc.description}</div>
                            <div style="color: #1e3a8a; font-weight: bold; margin-top: 2px;">Compromiso: ${inc.correctiveMeasure}</div>
                          </td>
                          <td style="text-align: center;">
                            <span class="status-badge status-approved" style="font-size: 10px;">✓ ${inc.status}</span>
                          </td>
                        </tr>
                      `).join('') : `
                        <tr>
                          <td colspan="7" style="text-align: center; padding: 18px; color: #047857; font-weight: bold;">
                            🌟 ¡Excelente conducta! No registra ninguna observación disciplinaria en su expediente escolar.
                          </td>
                        </tr>
                      `}
                    </tbody>
                  </table>
                </div>
              </div>
            `;
          })()}

        ` : ''}

      </div>
    `;
  },

  // Comunicados
  renderAnnouncements(state) {
    const isAdmin = state.currentRole === 'admin' || state.currentRole === 'director';
    return `
      <div class="fade-in">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title" style="font-size: var(--font-size-xl);">Muro de Circulares e Informes</h2>
            ${isAdmin ? `<button class="btn btn-red btn-sm" onclick="window.app.openNewAnnouncementModal()">+ Publicar</button>` : ''}
          </div>
          <div class="announcement-list">
            ${state.announcements.map(a => `
              <div class="card" style="border-left: 6px solid ${a.priority === 'high' ? 'var(--color-yellow-500)' : 'var(--color-navy-700)'};">
                <span class="announcement-tag tag-urgent">${a.tagLabel}</span>
                <h3>${a.title}</h3>
                <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">${a.content}</p>
                <div style="margin-top: 8px;">
                  <button class="btn btn-outline btn-sm" onclick="window.app.showOfficialReportModal()">[Documento] Ver Documento Completo</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // PANTALLA DE BLOQUEO DE INTRANET POR PENSIÓN PENDIENTE
  // =========================================================================
  renderLockedAccessScreen(state, user) {
    const debtAmount = user.pendingDebtAmount || 480.00;
    const concept = user.pendingConcept || "Pensión Escolar - Agosto 2026";

    return `
      <div class="fade-in" style="max-width: 780px; margin: 0 auto; padding: var(--space-4);">
        <div class="card" style="border: 2px solid var(--color-red-500); box-shadow: 0 10px 25px rgba(220, 38, 38, 0.15); border-radius: 12px; overflow: hidden;">
          
          <!-- Encabezado de Alerta Institucional -->
          <div style="background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%); color: white; padding: 24px; text-align: center;">
            <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo I.E.P. El Educador" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 8px; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));" />
            <div style="font-size: 12px; font-weight: 800; letter-spacing: 0.1em; color: var(--color-yellow-300); text-transform: uppercase;">
              I.E.P. "EL EDUCADOR" • 21 AÑOS DEJANDO HUELLAS (S.J.L.)
            </div>
            <h2 style="font-size: 22px; font-weight: 900; margin: 6px 0 4px; color: white;">
              [Bloqueado] ACCESO A LA INTRANET RESTRINGIDO
            </h2>
            <p style="font-size: 13px; color: #fecaca; margin: 0;">
              Validación de Pensión Escolar Requerida para el Alumno(a) y Apoderado(a)
            </p>
          </div>

          <div style="padding: 24px;">
            <div style="background: #fff5f5; border-left: 4px solid var(--color-red-500); padding: 14px 18px; border-radius: 6px; margin-bottom: 20px;">
              <div style="font-weight: 800; color: #991b1b; font-size: 14px; margin-bottom: 4px;">
                ⚠️ Notificación de Coordinación y Tesorería
              </div>
              <p style="font-size: 13px; color: #7f1d1d; margin: 0; line-height: 1.5;">
                Estimado(a) <strong>${user.name}</strong>, el acceso a las notas bimestrales, horario de clases, control de cuadernos QR y aula virtual se encuentra temporalmente bloqueado debido a una cuota pendiente de pago.
              </p>
            </div>

            <!-- Resumen de Cuenta Pendiente -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; background: var(--bg-surface-subtle); padding: 16px; border-radius: 8px; margin-bottom: 20px;">
              <div>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: bold; text-transform: uppercase;">Concepto Pendiente</span>
                <div style="font-size: 14px; font-weight: 800; color: var(--color-navy-900);">${concept}</div>
              </div>
              <div>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: bold; text-transform: uppercase;">Monto a Cancelar</span>
                <div style="font-size: 22px; font-weight: 900; color: var(--color-red-600);">S/ ${debtAmount.toFixed(2)}</div>
              </div>
              <div>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: bold; text-transform: uppercase;">Estado Actual</span>
                <div><span class="status-badge status-failed" style="font-weight: bold;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Bloqueado por Mora</span></div>
              </div>
            </div>

            <!-- Métodos de Pago y Desbloqueo Inmediato -->
            <h3 style="font-size: 15px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              ⚡ Realizar Pago y Desbloquear Intranet en Tiempo Real:
            </h3>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 20px;">
              
              <!-- Opción 1: Tarjeta Débito / Crédito -->
              <div class="card" style="border: 2px solid var(--border-subtle); cursor: pointer; padding: 14px; text-align: center; transition: all 0.2s;" onclick="window.app.openPayModal('PEN-08', ${debtAmount}, '${concept}')">
                <div style="font-size: 24px; margin-bottom: 4px;">[Pago]</div>
                <strong style="font-size: 13px; color: var(--color-navy-900);">Tarjeta Débito / Crédito</strong>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Visa, Mastercard, Débito</p>
                <span class="status-badge status-approved" style="background: #22c55e; color: #0b132b; font-weight: 800; margin-top: 6px;">Desbloqueo Inmediato</span>
              </div>

              <!-- Opción 2: Yape / Plin -->
              <div class="card" style="border: 2px solid var(--border-subtle); cursor: pointer; padding: 14px; text-align: center; transition: all 0.2s;" onclick="window.app.openYapePayModal('PEN-08', ${debtAmount})">
                <div style="font-size: 24px; margin-bottom: 4px;">[Móvil]</div>
                <strong style="font-size: 13px; color: #6d28d9;">Yape / Plin Institucional</strong>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">987-654-321 (I.E.P. El Educador)</p>
                <span class="status-badge status-approved" style="background: #22c55e; color: #0b132b; font-weight: 800; margin-top: 6px;">Validación Automática</span>
              </div>

              <!-- Opción 3: Transferencia BCP / BBVA -->
              <div class="card" style="border: 2px solid var(--border-subtle); cursor: pointer; padding: 14px; text-align: center; transition: all 0.2s;" onclick="window.app.openBankTransferModal('PEN-08', ${debtAmount})">
                <div style="font-size: 24px; margin-bottom: 4px;">🏦</div>
                <strong style="font-size: 13px; color: var(--color-navy-900);">Depósito Bancario / Agente</strong>
                <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">BCP / BBVA / Banco Nación</p>
                <span class="status-badge status-approved" style="background: #f59e0b; color: #0b132b; font-weight: 800; margin-top: 6px;">Ingresar Voucher</span>
              </div>
            </div>

            <!-- Botón de Pago Rápido Principal -->
            <button class="btn btn-red" onclick="window.app.openPayModal('PEN-08', ${debtAmount}, '${concept}')" style="width: 100%; padding: 14px; font-size: 15px; font-weight: 900; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);">
              <span>[Pago] Pagar S/ ${debtAmount.toFixed(2)} y Desbloquear Intranet Ahora</span>
            </button>

            <div style="text-align: center; margin-top: 14px; font-size: 11px; color: var(--text-muted);">
              [Bloqueado] Al confirmar el pago, la base de datos central emitirá su recibo digital y se habilitará el acceso en todos sus dispositivos al instante.
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Pagos y Panel de Tesorería
  renderPayments(state) {
    const isCoordination = state.currentRole === "admin" || state.currentRole === "director";
    const families = state.familiesFinancial || initialData.familiesFinancial;
    const collected = (state.institution && state.institution.economicReport) ? state.institution.economicReport.collectedAmount : 25130.00;

    return `
      <div class="fade-in">
        <div class="card" style="margin-bottom: var(--space-6);">
          <div class="card-header">
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <h2 class="card-title" style="font-size: var(--font-size-xl);">Control de Pensiones & Validación Automática de Intranet</h2>
                <span class="status-badge status-approved"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Sistema de Pago Online Activo</span>
              </div>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                I.E.P. "El Educador" • "21 años dejando huellas" (S.J.L. • UGEL 05)
              </p>
            </div>
            ${isCoordination ? `
              <button class="btn btn-gold btn-sm" onclick="window.app.openManualPaymentModal()">
                [Pensiones] + Registrar Pago en Caja (Efectivo/Banco)
              </button>
            ` : ''}
          </div>

          <!-- Métricas de Recaudación -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
            <div class="card" style="padding: var(--space-4); border-left: 4px solid var(--color-green-500); background: #f8faf9;">
              <span style="font-size: 11px; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Recaudación Acumulada Agosto</span>
              <div style="font-size: 22px; font-weight: 900; color: var(--color-green-600); margin-top: 2px;">S/ ${collected.toFixed(2)}</div>
              <span style="font-size: 10px; color: var(--text-muted);">Meta mensual: S/ 24,000.00</span>
            </div>

            <div class="card" style="padding: var(--space-4); border-left: 4px solid var(--color-navy-700); background: var(--bg-surface-subtle);">
              <span style="font-size: 11px; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">Validación Automática</span>
              <div style="font-size: 18px; font-weight: 800; color: var(--color-navy-900); margin-top: 2px;">Habilitada ⚡</div>
              <span style="font-size: 10px; color: var(--text-muted);">Desbloqueo inmediato con pago</span>
            </div>
          </div>

          ${isCoordination ? `
            <!-- Panel Exclusivo para Coordinación y Dirección: Control de Familias y Bloqueos -->
            <div style="margin-bottom: var(--space-6);">
              <div class="card-header" style="margin-bottom: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
                <h3 class="card-title" style="font-size: var(--font-size-base);">
                  👥 Estado Financiero por Familia y Bloqueo de Acceso a Intranet
                </h3>
                <span class="status-badge status-approved">${families.length} Familias Monitoreadas</span>
              </div>
              <div class="table-container">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Código</th><th>Apoderado / Familia</th><th>Estudiante</th><th>Grado</th><th>Monto Deuda</th><th>Acceso a Intranet</th><th style="text-align:center;">Acciones de Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${families.map(f => `
                      <tr>
                        <td><code>${f.familyId}</code></td>
                        <td><strong>${f.guardian}</strong></td>
                        <td>${f.studentName}</td>
                        <td>${f.grade}</td>
                        <td><strong style="color: ${f.pendingAmount > 0 ? 'var(--color-red-600)' : 'var(--color-green-600)'};">${f.pendingAmount > 0 ? `S/ ${f.pendingAmount.toFixed(2)}` : 'S/ 0.00 (Al Día)'}</strong></td>
                        <td>
                          <span class="status-badge ${f.isAccessLocked ? 'status-failed' : 'status-approved'}" style="font-weight: bold;">
                            ${f.isAccessLocked ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> BLOQUEADO POR MORA' : '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> ACCESO HABILITADO'}
                          </span>
                        </td>
                        <td style="text-align:center; white-space: nowrap;">
                          <button class="btn btn-sm ${f.isAccessLocked ? 'btn-gold' : 'btn-outline'}" onclick="window.app.toggleFamilyLock('${f.familyId}')">
                            ${f.isAccessLocked ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Desbloquear / Prórroga' : '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Bloquear Acceso'}
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- Lista de Pagos del Usuario -->
          <div class="card-header" style="margin-bottom: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            <h3 class="card-title" style="font-size: var(--font-size-base);">
              [Documento] Cronograma de Cuotas y Recibos Oficiales
            </h3>
          </div>

          ${state.payments.map(p => `
            <div class="payment-card ${p.status}">
              <div>
                <h4 style="margin-bottom: 2px;">${p.concept}</h4>
                <span style="font-size:12px; color:var(--text-muted);">Vencimiento: ${p.dueDate} ${p.paidDate ? `• Cancelado: ${p.paidDate}` : ''}</span>
              </div>
              <div style="display:flex; align-items:center; gap:var(--space-4); flex-wrap: wrap;">
                <span class="payment-amount" style="color: ${p.status === 'paid' ? 'var(--color-green-600)' : 'var(--color-red-600)'};">
                  S/ ${p.amount.toFixed(2)}
                </span>
                ${p.status === 'paid' ? `
                  <button class="btn btn-outline btn-sm" onclick="window.app.showReceiptModal('${p.id}')">
                    [Documento] Ver Recibo (${p.receiptNo || 'REC-2026'})
                  </button>
                ` : `
                  <button class="btn btn-red btn-sm" onclick="window.app.openPayModal('${p.id}', ${p.amount}, '${p.concept}')" style="font-weight: 800;">
                    [Pago] Pagar y Validar Intranet
                  </button>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
};



/* === app.js === */
/**
 * Controlador Principal y Aplicación - I.E.P. "EL EDUCADOR" S.J.L. (v5.4 con Lector de Cámara QR Real)
 * "21 años dejando huellas" • UGEL 05
 */
class IntranetApp {
  constructor() {
    this.store = window.appStore;
    this.contentArea = document.getElementById("content-area");
    this.sidebar = document.getElementById("sidebar");
    this.loginErrorMessage = null;
    this.html5QrScanner = null;
    this.isCameraActive = false;
  }

  init() {
    // Suscribirse a cambios en el almacén de datos
    this.store.subscribe(() => {
      this.render();
      this.updateHeaderUserInfo();
    });

    // Escuchador de navegación de la sidebar
    document.querySelectorAll(".nav-item[data-view]").forEach(item => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const view = item.getAttribute("data-view");
        this.navigate(view);
      });
    });

    // Toggle Sidebar Móvil
    const toggleBtn = document.getElementById("sidebar-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        this.sidebar.classList.toggle("open");
      });
    }

    // Cerrar sidebar al hacer clic fuera en móviles
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 1024 && this.sidebar && this.sidebar.classList.contains("open")) {
        if (!this.sidebar.contains(e.target) && !e.target.closest("#sidebar-toggle")) {
          this.sidebar.classList.remove("open");
        }
      }
    });

    // Render inicial
    this.render();
    this.updateHeaderUserInfo();
    this.startRealtimeSync();
  }

  // =========================================================================
  // CONTROLADOR DE LOGIN Y AUTENTICACIÓN
  // =========================================================================
  handleLogin(e) {
    if (e) e.preventDefault();
    const usernameInput = document.getElementById("login-username");
    const passwordInput = document.getElementById("login-password");

    if (!usernameInput || !passwordInput) return;

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const result = this.store.login(username, password);
    if (result.success) {
      this.loginErrorMessage = null;
      this.showToast(`¡Bienvenido(a), ${result.user.name}!`, "success");
    } else {
      this.loginErrorMessage = result.error;
      this.render();
    }
  }

  quickLogin(roleKey, password) {
    const result = this.store.login(roleKey, password);
    if (result.success) {
      this.loginErrorMessage = null;
      this.showToast(`¡Acceso concedido como ${result.user.name}!`, "success");
    }
  }

  handleLogout() {
    this.stopLiveCameraScanner();
    this.store.logout();
    this.loginErrorMessage = null;
    this.showToast("Sesión cerrada correctamente", "info");
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById("login-password");
    const icon = document.getElementById("eye-icon");
    if (!passwordInput) return;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      if (icon) {
        icon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
      }
    } else {
      passwordInput.type = "password";
      if (icon) {
        icon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
      }
    }
  }

  openForgotPasswordModal() {
    this.showModal(`
      <div class="modal-header">
        <h3>Recuperación de Contraseña</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="text-align: center; padding: var(--space-6);">
        <h4 style="color: var(--color-navy-900); font-weight: 800; margin-bottom: 8px;">Coordinación y Documentación (Prof. Alex Lino)</h4>
        <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
          Para restablecimiento de credenciales, comuníquese con la oficina de Coordinación:
        </p>
        <div style="background: var(--color-navy-50); padding: 10px; border-radius: 6px; font-weight: bold; color: var(--color-red-600); margin: 12px 0;">
          coordinacion@eleducador.edu.pe
        </div>
        <p style="font-size: 11px; color: var(--text-muted);">
          * Contraseñas de prueba: <code>admin2026</code>, <code>director2026</code>, <code>docente2026</code>, <code>estudiante2026</code>, <code>padre2026</code>.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-navy" onclick="window.app.closeModal()">Entendido</button>
      </div>
    `);
  }

  // =========================================================================
  // CONEXIÓN MULTI-DISPOSITIVO & ESCANEO SIMULTÁNEO (CELULARES Y PCS)
  // =========================================================================
  openMultiDeviceConnectModal() {
    const isHttp = typeof window !== "undefined" && window.location.protocol.startsWith("http");
    const port = (typeof window !== "undefined" && window.location.port) ? `:${window.location.port}` : "";
    const currentHost = (typeof window !== "undefined" && window.location.hostname) ? window.location.hostname : "";
    
    let targetUrl = "http://192.168.1.129:8080";
    if (isHttp) {
      if (currentHost === "localhost" || currentHost === "127.0.0.1") {
        targetUrl = `http://192.168.1.129${port || ':8080'}`;
      } else {
        targetUrl = window.location.origin;
      }
    }

    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(targetUrl)}`;

    this.showModal(`
      <div class="modal-header" style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: white;">
        <div>
          <h3 style="margin: 0; font-size: 16px; font-weight: 900; color: #fde047;">
            [Móvil] Conectar Celular para Escaneo Simultáneo
          </h3>
          <span style="font-size: 11px; opacity: 0.9;">Acceso Multi-Dispositivo en Tiempo Real (Varios Profesores a la Vez)</span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color:white;">✕</button>
      </div>
      <div class="modal-body" style="text-align: center; padding: 20px; background: #f8fafc;">
        
        <div style="background: white; border: 2px solid #3b82f6; border-radius: 16px; padding: 20px; display: inline-block; box-shadow: 0 8px 24px rgba(59,130,246,0.15); margin-bottom: 16px;">
          <img src="${qrApiUrl}" alt="QR Conexión Móvil" style="width: 200px; height: 200px; display: block; border-radius: 8px; margin: 0 auto;" onerror="this.src='https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(targetUrl)}'" />
          <div style="margin-top: 10px; font-size: 13px; font-weight: 900; color: #1e3a8a;">
            [WiFi] ${targetUrl}
          </div>
        </div>

        <div style="text-align: left; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 14px; margin-bottom: 16px;">
          <h4 style="margin: 0 0 8px 0; font-size: 13px; color: #0f172a; font-weight: 800;">
            [Evaluación] ¿Cómo escanear con varios celulares al mismo tiempo sin perder datos?
          </h4>
          <ol style="margin: 0; padding-left: 20px; font-size: 12px; color: #475569; line-height: 1.6;">
            <li>Conecta tu celular a la <strong>misma red Wi-Fi</strong> del colegio.</li>
            <li>Apunta la <strong>cámara de tu celular</strong> a este código QR o abre en el navegador: <code>${targetUrl}</code>.</li>
            <li>Inicia sesión con tu cuenta de <strong>Docente</strong> o <strong>Auxiliar</strong>.</li>
            <li><strong>Escaneo On-Demand:</strong> La cámara solo se enciende cuando tú presionas el botón para no gastar batería ni escanear por accidente.</li>
            <li><strong>Sincronización en Vivo:</strong> Cuando tú calificas un cuaderno, aparece al instante en la pantalla de los demás profesores y de la dirección.</li>
          </ol>
        </div>

        <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-outline btn-sm" onclick="navigator.clipboard.writeText('${targetUrl}'); window.app.showToast('Enlace copiado al portapapeles: ${targetUrl}', 'success');" style="font-weight: 700;">
            [Lista] Copiar Enlace Directo
          </button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-navy btn-sm" onclick="window.app.closeModal()" style="font-weight: 800;">
          Entendido / Cerrar
        </button>
      </div>
    `);
  }

  startRealtimeSync() {
    if (this.syncInterval) clearInterval(this.syncInterval);
    this.syncInterval = setInterval(() => {
      // NUNCA hacer sondeo en la pantalla de login (evita reinicios de input)
      if (!this.store.isUserAuthenticated()) return;
      const currentView = this.store.getCurrentView();
      if (currentView === "cuadernos-qr" || currentView === "asistencia" || currentView === "dashboard") {
        if (typeof window !== "undefined" && window.location.protocol.startsWith("http")) {
          this.store.fetchServerState(true);
        }
      }
    }, 5000);
  }

  // =========================================================================
  // LECTOR DE CÁMARA QR REAL PARA CELULARES Y COMPUTADORAS (BAJO DEMANDA)
  // =========================================================================
  playScanBeep() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // Tono A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      console.log("Audio Web no disponible", e);
    }
  }

  startLiveCameraScanner() {
    const feedContainer = document.getElementById("qr-live-camera-feed");
    const statusTag = document.getElementById("camera-status-tag");
    const btnStart = document.getElementById("btn-start-camera");
    const btnStop = document.getElementById("btn-stop-camera");

    if (!feedContainer) return;

    if (typeof Html5Qrcode === "undefined") {
      this.showToast("Cargando motor de cámara QR, intente en 1 segundo...", "info");
      return;
    }

    if (statusTag) {
      statusTag.textContent = "Conectando cámara...";
      statusTag.className = "status-badge status-pending";
    }

    try {
      this.html5QrScanner = new Html5Qrcode("qr-live-camera-feed");
      const config = {
        fps: 15,
        qrbox: { width: 220, height: 220 },
        aspectRatio: 1.0
      };

      this.isScanProcessing = false;

      // Preferir cámara trasera en celulares (facingMode: environment)
      this.html5QrScanner.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          // Anti-rebote: evitar escaneos duplicados en milisegundos
          if (this.isScanProcessing) return;
          this.isScanProcessing = true;

          this.playScanBeep();
          if (navigator.vibrate) navigator.vibrate(150);

          this.showToast(`✓ QR Reconocido: ${decodedText}`, "success");
          this.stopLiveCameraScanner();

          const notebookData = this.store.findNotebookByQR(decodedText);
          setTimeout(() => {
            this.openNotebookReviewModal(notebookData);
            this.isScanProcessing = false;
          }, 300);
        },
        (errorMessage) => {
          // Error de cuadro mientras enfoca (ignorar)
        }
      ).then(() => {
        this.isCameraActive = true;
        if (statusTag) {
          statusTag.textContent = "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> CÁMARA ACTIVA";
          statusTag.className = "status-badge status-approved";
        }
        if (btnStart) btnStart.style.display = "none";
        if (btnStop) btnStop.style.display = "inline-block";
        this.showToast("[Cámara] Cámara encendida. Apunta hacia el sticker QR del cuaderno.", "info");
      }).catch((err) => {
        console.error("Error al acceder a la cámara:", err);
        if (statusTag) {
          statusTag.textContent = "Permiso Denegado / Error";
          statusTag.className = "status-badge status-failed";
        }
        this.showToast("No se pudo acceder a la cámara. Verifique los permisos en el navegador.", "danger");
      });
    } catch (e) {
      console.error(e);
      this.showToast("Error al inicializar el lector de cámara QR", "danger");
    }
  }

  stopLiveCameraScanner() {
    if (this.html5QrScanner && this.isCameraActive) {
      this.html5QrScanner.stop().then(() => {
        this.isCameraActive = false;
        this.isScanProcessing = false;
        const statusTag = document.getElementById("camera-status-tag");
        const btnStart = document.getElementById("btn-start-camera");
        const btnStop = document.getElementById("btn-stop-camera");
        const feedContainer = document.getElementById("qr-live-camera-feed");

        if (statusTag) {
          statusTag.textContent = "Cámara Apagada (En Espera)";
          statusTag.className = "status-badge status-pending";
        }
        if (btnStart) btnStart.style.display = "inline-block";
        if (btnStop) btnStop.style.display = "none";
        if (feedContainer) {
          feedContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; color: rgba(255,255,255,0.7);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 8px; display:block; color: var(--color-yellow-400);"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              <span style="font-size: 12px; font-weight: 700;">Presiona 'Encender Cámara' para iniciar el escaneo</span>
            </div>
          `;
        }
      }).catch(err => console.error(err));
    }
  }

  simulateQRScan(qrCode) {
    if (this.isScanProcessing) return;
    this.isScanProcessing = true;
    this.playScanBeep();
    const notebookData = this.store.findNotebookByQR(qrCode);
    this.showToast(`[Buscar] QR Reconocido: ${qrCode}`, "info");
    setTimeout(() => {
      this.openNotebookReviewModal(notebookData);
      this.isScanProcessing = false;
    }, 300);
  }

  setNotebookActiveSubTab(subTab) {
    this.store.state.notebookActiveSubTab = subTab;
    this.store.saveState();
    this.render();
  }

  onNotebookGradeFilterChange(gradeId) {
    this.store.state.selectedNotebookGrade = gradeId;
    this.store.state.selectedNotebookStudent = "all";
    this.store.saveState();
    this.render();
  }

  onNotebookStudentFilterChange(studentId) {
    this.store.state.selectedNotebookStudent = studentId;
    this.store.saveState();
    this.render();
  }

  onNotebookCourseFilterChange(courseName) {
    this.store.state.selectedNotebookCourseFilter = courseName;
    this.store.saveState();
    this.render();
  }

  setNotebookQuickRemark(text) {
    const input = document.getElementById("nb-remarks-input");
    if (input) input.value = text;
  }

  openNotebookReviewModal(data) {
    const currentUser = this.store.getCurrentUser();
    const currentRole = this.store.getCurrentRole();
    const evaluatorName = currentUser.name || (currentRole === "auxiliar" ? "Lic. Carlos Medina (Auxiliar)" : "Docente Responsable");

    const defaultScore = data.lastReview ? data.lastReview.score : 18;
    const defaultStatus = data.lastReview ? data.lastReview.status : "Al Día";
    const defaultRemarks = data.lastReview ? data.lastReview.teacherRemarks : "Tareas completas al 100% y cuaderno al día.";

    this.showModal(`
      <div class="modal-header">
        <div>
          <h3 style="margin: 0; font-size: 16px; font-weight: 900; color: var(--color-navy-900);">
            [Cuaderno] Calificar & Sellar Cuaderno Escolar
          </h3>
          <span style="font-size: 11px; color: var(--text-secondary);">Escaneo de Código QR Verificado</span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        
        <!-- Ficha de Identificación del Cuaderno (Alumno + Curso + Profesor) -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: white; padding: 14px; border-radius: 12px; margin-bottom: 16px; border-left: 6px solid #f59e0b; box-shadow: 0 4px 12px rgba(15,23,42,0.15);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
            <span style="font-size: 10px; font-weight: 900; color: #fde047; letter-spacing: 0.05em; text-transform: uppercase;">
              ★ I.E.P. EL EDUCADOR • CUADERNO OFICIAL 2026
            </span>
            <span style="font-size: 10px; background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 10px;">
              <code>${data.qrCode}</code>
            </span>
          </div>

          <div style="font-size: 17px; font-weight: 900; margin-bottom: 4px; color: #ffffff;">
            📚 ${data.course}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; margin-top: 8px; font-size: 12px; background: rgba(255,255,255,0.08); padding: 8px 12px; border-radius: 8px;">
            <div>
              <span style="color: rgba(255,255,255,0.7); display: block; font-size: 10px; text-transform: uppercase;">Estudiante:</span>
              <strong style="color: #fde047;">${data.studentName}</strong>
              <div style="font-size: 10.5px; color: rgba(255,255,255,0.8);">${data.grade} • ${data.studentId}</div>
            </div>
            <div>
              <span style="color: rgba(255,255,255,0.7); display: block; font-size: 10px; text-transform: uppercase;">Docente Titular:</span>
              <strong>${data.teacher || 'Prof. Responsable'}</strong>
              <div style="font-size: 10.5px; color: #86efac;">Evaluando: ${evaluatorName}</div>
            </div>
          </div>
        </div>

        <!-- 1. Estado / Sello Digital Oficial -->
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label" style="font-weight: 800; font-size: 12px; color: var(--color-navy-900);">
            1. Estado del Cuaderno (Sello Digital):
          </label>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <label style="border: 2px solid #10b981; background: #ecfdf5; border-radius: 12px; padding: 10px 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;">
              <input type="radio" name="nb-status-radio" value="Al Día" ${defaultStatus === 'Al Día' ? 'checked' : ''} onchange="document.getElementById('nb-status-val').value = 'Al Día'; document.getElementById('nb-score-input').value = '18';" />
              <span style="font-size: 16px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span></span>
              <strong style="font-size: 11px; color: #065f46;">AL DÍA</strong>
              <span style="font-size: 9.5px; color: #047857;">Tareas 100%</span>
            </label>

            <label style="border: 2px solid #f59e0b; background: #fffbeb; border-radius: 12px; padding: 10px 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;">
              <input type="radio" name="nb-status-radio" value="Observado" ${defaultStatus === 'Observado' ? 'checked' : ''} onchange="document.getElementById('nb-status-val').value = 'Observado'; document.getElementById('nb-score-input').value = '13';" />
              <span style="font-size: 16px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span></span>
              <strong style="font-size: 11px; color: #b45309;">OBSERVADO</strong>
              <span style="font-size: 9.5px; color: #92400e;">Incompleto / Atraso</span>
            </label>

            <label style="border: 2px solid #ef4444; background: #fef2f2; border-radius: 12px; padding: 10px 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;">
              <input type="radio" name="nb-status-radio" value="No Presentó" ${defaultStatus === 'No Presentó' ? 'checked' : ''} onchange="document.getElementById('nb-status-val').value = 'No Presentó'; document.getElementById('nb-score-input').value = '05';" />
              <span style="font-size: 16px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span></span>
              <strong style="font-size: 11px; color: #b91c1c;">NO PRESENTÓ</strong>
              <span style="font-size: 9.5px; color: #dc2626;">Sin entrega</span>
            </label>
          </div>
          <input type="hidden" id="nb-status-val" value="${defaultStatus}" />
        </div>

        <!-- 2. Calificación Formativa Vigesimal -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" style="font-weight: 800; font-size: 12px;">Calificación (0 a 20):</label>
            <input type="number" min="0" max="20" id="nb-score-input" class="form-control" value="${defaultScore}" style="font-size: 18px; font-weight: 900; color: var(--color-navy-900); text-align: center;" />
          </div>
          <div class="form-group" style="margin: 0; display:flex; flex-direction:column; justify-content:center;">
            <span style="font-size: 11px; color: var(--text-muted);">Escala Nacional:</span>
            <div style="font-size: 12px; font-weight: 800; color: #047857; margin-top: 4px;">
              ★ 18-20: AD (Destacado)<br>✓ 14-17: A (Esperado)
            </div>
          </div>
        </div>

        <!-- 3. Criterios de Evaluación -->
        <div class="form-group" style="margin-bottom: 14px;">
          <label class="form-label" style="font-weight: 800; font-size: 12px;">Criterios Verificados:</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px; background: #f8fafc; padding: 10px; border-radius: 10px; border: 1px solid #e2e8f0;">
            <label style="display:flex; align-items:center; gap: 6px;"><input type="checkbox" id="chk-margenes" checked /> [Formato] Márgenes y Fechas</label>
            <label style="display:flex; align-items:center; gap: 6px;"><input type="checkbox" id="chk-teoria" checked /> [Cuaderno] Teoría Completa</label>
            <label style="display:flex; align-items:center; gap: 6px;"><input type="checkbox" id="chk-ejercicios" checked /> ✍️ Tareas / Ejercicios al Día</label>
            <label style="display:flex; align-items:center; gap: 6px;"><input type="checkbox" id="chk-pulcritud" checked /> ✨ Pulcritud y Limpieza</label>
          </div>
        </div>

        <!-- 4. Observaciones con Atajos Rápidos -->
        <div class="form-group" style="margin-bottom: 8px;">
          <label class="form-label" style="font-weight: 800; font-size: 12px;">Observaciones para el Estudiante y Apoderado:</label>
          <input type="text" id="nb-remarks-input" class="form-control" value="${defaultRemarks}" style="margin-bottom: 8px;" />
          
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.setNotebookQuickRemark('Tareas completas al 100% y presentación impecable.')" style="font-size: 10.5px; padding: 4px 8px;">
              ✓ Al Día 100%
            </button>
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.setNotebookQuickRemark('Falta desarrollar la tarea de la última sesión. Presentar regularización.')" style="font-size: 10.5px; padding: 4px 8px;">
              ⚠ Falta Tarea
            </button>
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.setNotebookQuickRemark('Cuaderno atrasado en 2 temas. Debe ponerse al día.')" style="font-size: 10.5px; padding: 4px 8px;">
              ⚠ Atrasado 2 temas
            </button>
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.setNotebookQuickRemark('Requiere firma de compromiso del padre/apoderado.')" style="font-size: 10.5px; padding: 4px 8px;">
              ✍️ Firma de Padre
            </button>
          </div>
        </div>

      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-gold" onclick="window.app.confirmRegisterNotebookReview('${data.qrCode}', '${data.studentId}', '${data.studentName}', '${data.grade}', '${data.course}', '${data.teacher || 'Prof. Responsable'}')" style="font-weight: 900; padding: 10px 20px;">
          ★ Guardar Sello Digital & Actualizar Informe
        </button>
      </div>
    `);
  }

  confirmRegisterNotebookReview(qrCode, studentId, studentName, grade, course, teacher) {
    const score = parseFloat(document.getElementById("nb-score-input").value) || 18;
    const status = document.getElementById("nb-status-val") ? document.getElementById("nb-status-val").value : "Al Día";
    const teacherRemarks = document.getElementById("nb-remarks-input") ? document.getElementById("nb-remarks-input").value : "Revisión conforme";

    const chkMargenes = document.getElementById("chk-margenes") ? document.getElementById("chk-margenes").checked : true;
    const chkTeoria = document.getElementById("chk-teoria") ? document.getElementById("chk-teoria").checked : true;
    const chkEjercicios = document.getElementById("chk-ejercicios") ? document.getElementById("chk-ejercicios").checked : true;
    const chkPulcritud = document.getElementById("chk-pulcritud") ? document.getElementById("chk-pulcritud").checked : true;

    this.store.registerNotebookReview({
      qrCode,
      studentId,
      studentName,
      grade,
      course,
      teacher,
      score,
      status,
      checklist: { margenes: chkMargenes, teoria: chkTeoria, ejercicios: chkEjercicios, pulcritud: chkPulcritud },
      teacherRemarks
    });

    this.closeModal();
    this.showToast(`✓ Cuaderno de ${studentName} (${course}) sellado como: ${status} [Nota: ${score}]`, "success");
    this.render();
  }

  printNotebookStickerSheet(containerId = 'printable-stickers-sheet', layout) {
    const selectedLayout = layout || document.getElementById('sticker-layout-select')?.value || '3x5';
    this.printOnlyElement(containerId, 'Plancha de Stickers QR - I.E.P. El Educador', selectedLayout);
  }

  printOnlyElement(elementId = "modal-boleta-stickers-grid", title = "Plancha de Stickers", layout) {
    const sourceEl = document.getElementById(elementId);
    if (!sourceEl) {
      window.print();
      return;
    }

    // Resolver layout: parámetro explícito o selector activo (3x5 o 3x4)
    const effectiveLayout = layout || 
      document.getElementById('modal-sticker-layout-select')?.value || 
      document.getElementById('sticker-layout-select')?.value || 
      '3x5';

    // Remover cualquier contenedor de impresión previo
    const existing = document.getElementById("dedicated-print-container");
    if (existing) existing.remove();

    // Crear contenedor exclusivo para la impresión
    const printContainer = document.createElement("div");
    printContainer.id = "dedicated-print-container";
    printContainer.className = "dedicated-print-container";
    
    // Clonar los stickers limpios
    printContainer.innerHTML = sourceEl.innerHTML;
    document.body.appendChild(printContainer);

    document.body.classList.add("printing-stickers-mode");
    document.body.classList.remove("print-layout-3x5", "print-layout-3x4");
    document.body.classList.add(effectiveLayout === "3x4" ? "print-layout-3x4" : "print-layout-3x5");

    const cleanup = () => {
      document.body.classList.remove("printing-stickers-mode", "print-layout-3x5", "print-layout-3x4");
      const el = document.getElementById("dedicated-print-container");
      if (el) el.remove();
      window.removeEventListener("afterprint", cleanup);
    };

    window.addEventListener("afterprint", cleanup);
    setTimeout(() => {
      window.print();
      setTimeout(cleanup, 2500);
    }, 120);
  }

  printNotebookGeneralReport() {
    window.print();
  }

  openStudentFullBoletaStickersModal(studentIdOrCode = "EST-2026-042") {
    const enrollments = this.store.getEnrollments();
    const data = this.store.getStudentAllBoletaStickersData(studentIdOrCode);
    const student = data.student;
    const stickers = data.stickers;

    this.showModal(`
      <div class="modal-header" style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff;">
        <div>
          <div style="display:flex; align-items:center; gap: 8px;">
            <h3 style="margin: 0; font-size: 16px; font-weight: 900; color: #fde047;">
              ⚡ Plancha Oficial de Stickers QR para Cuadernos (Cursos de Boleta)
            </h3>
            <span class="status-badge status-approved" style="background:#22c55e; color:#0b132b; font-weight:900; font-size:10px;">
              ${stickers.length} Cursos Oficiales
            </span>
          </div>
          <span style="font-size: 11px; color: rgba(255,255,255,0.85);">
            I.E.P. El Educador • Generación automática (Distribución configurable: 3x5 [15 QR] o 3x4 [12 QR])
          </span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color:white;">✕</button>
      </div>

      <div class="modal-body" style="max-height: 75vh; overflow-y: auto; background: #f8fafc; padding: 20px;">
        
        <!-- Ficha de Selección del Estudiante y Selector de Distribución -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <span style="font-size: 10.5px; font-weight: 800; color: #64748b; text-transform: uppercase;">Estudiante Seleccionado:</span>
            <div style="font-size: 17px; font-weight: 900; color: #0f172a;">[Usuario] ${student.studentName}</div>
            <div style="font-size: 12px; color: #1e3a8a; font-weight: 700;">
              [Expediente] ${student.grade} • Código / DNI: ${student.studentCode || student.dni} • Tutor: ${student.tutor || 'Prof. Titular'}
            </div>
          </div>

          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <div>
              <label style="font-size: 11px; font-weight: 700; color: #475569; display: block; margin-bottom: 2px;">Cambiar Estudiante:</label>
              <select class="form-control" onchange="window.app.openStudentFullBoletaStickersModal(this.value)" style="font-size: 12px; max-width: 220px; border-radius: 16px;">
                ${enrollments.map(e => `
                  <option value="${e.studentCode || e.dni}" ${(e.studentCode === student.studentCode || e.dni === student.dni) ? 'selected' : ''}>
                    ${e.studentName} (${e.grade})
                  </option>
                `).join('')}
              </select>
            </div>

            <div>
              <label style="font-size: 11px; font-weight: 700; color: #1e3a8a; display: block; margin-bottom: 2px;">[Formato] Formato por Hoja A4:</label>
              <select id="modal-sticker-layout-select" class="form-control" style="font-size: 12px; font-weight: 800; max-width: 210px; border-radius: 16px; background: #eff6ff; border: 1.5px solid #3b82f6; color: #1e3a8a;">
                <option value="3x5" selected>[Fijado] 3 × 5 (15 QR por Hoja)</option>
                <option value="3x4">[Fijado] 3 × 4 (12 QR por Hoja)</option>
              </select>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 12px; color: #475569; font-weight: 700;">
            Mostrando los <strong>${stickers.length} stickers adhesivos</strong> para cada cuaderno curricular de la boleta:
          </span>
          <button class="btn btn-navy btn-sm" onclick="window.app.printOnlyElement('modal-boleta-stickers-grid', 'Plancha de Boleta')" style="font-weight: 900; padding: 8px 18px; border-radius: 18px; box-shadow: 0 4px 12px rgba(15,23,42,0.2);">
            [Imprimir] Imprimir Plancha A4
          </button>
        </div>

        <!-- Grilla de Stickers de Todos los Cursos de la Boleta -->
        <div id="modal-boleta-stickers-grid" class="qr-sticker-sheet" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 12px;">
          ${stickers.map(st => {
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(st.qrPayload)}`;
            const safePayload = st.qrPayload.replace(/'/g, "\\'");
            return `
              <div class="qr-notebook-sticker" style="border: 2px solid #0f172a; border-radius: 10px; padding: 10px 12px; background: #ffffff; display: flex; gap: 10px; align-items: center; box-shadow: 0 2px 6px rgba(0,0,0,0.05); position: relative; border-left: 5px solid #f59e0b;">
                <div style="flex-shrink: 0; text-align: center;">
                  <img src="${qrUrl}" alt="QR" style="width: 68px; height: 68px; display: block; border: 1px solid #cbd5e1; border-radius: 6px; padding: 2px;" />
                  <span style="font-size: 8px; font-weight: 800; color: #475569; display: block; margin-top: 2px;"><code>${st.qrCode}</code></span>
                </div>
                <div style="flex: 1; display: flex; flex-direction: column; gap: 2px; min-width: 0;">
                  <span style="font-size: 8px; font-weight: 900; color: #dc2626; letter-spacing: 0.05em; text-transform: uppercase;">
                    ★ I.E.P. EL EDUCADOR • SJL
                  </span>
                  <strong style="font-size: 12px; color: #0f172a; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${st.course}">
                    ${st.icon || '📚'} ${st.course}
                  </strong>
                  <div style="font-size: 10.5px; font-weight: 700; color: #1e3a8a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    [Usuario] ${st.studentName}
                  </div>
                  <div style="font-size: 9.5px; color: #64748b;">
                    [Expediente] ${st.grade} • ${st.area}
                  </div>
                  <div style="margin-top: 4px;">
                    <button class="btn btn-outline btn-sm" onclick="window.app.closeModal(); setTimeout(() => window.app.simulateQRScan('${safePayload}'), 150);" style="font-size: 9.5px; padding: 2px 6px; border-radius: 10px; font-weight: 800;">
                      [Cámara] Probar Escaneo
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <span style="font-size: 12px; color: var(--text-muted);">
          Total: <strong>${stickers.length} stickers</strong> listos para pegar en carátulas.
        </span>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
          <button class="btn btn-gold" onclick="window.app.printOnlyElement('modal-boleta-stickers-grid', 'Plancha de Boleta')" style="font-weight: 900; padding: 8px 18px;">
            [Imprimir] Imprimir Plancha A4
          </button>
        </div>
      </div>
    `);
  }

  // =========================================================================
  // VISTA DEL INFORME OFICIAL N° 003 /ED - COORDINACIÓN Y DOCUMENTACIÓN
  // =========================================================================
  showOfficialReportModal() {
    this.showModal(`
      <div class="modal-header">
        <h3>[Documento] INFORME N°003 /ED - COORDINACIÓN Y DOCUMENTACIÓN</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto; background: #ffffff; padding: 24px;">
        
        ${Components.renderOfficialInstitutionalHeader("INFORME- N°003 /ED - COORDINACIÓN Y DOCUMENTACIÓN", "Informe del día 15/08/2026")}

        <div style="font-size: 13px; color: #0b132b; line-height: 1.6; margin-top: 16px;">
          <p><strong>Asunto:</strong> Informe de actualización económica, gestiones administrativas y seguimiento de casos de estudiantes</p>
          <p style="margin-top: 8px;">Por medio del presente, se informa lo siguiente:</p>

          <div style="margin-top: 14px; padding-left: 8px; border-left: 3px solid var(--color-yellow-500);">
            <strong>1. CANTIDAD ACTUAL DEL MES DE AGOSTO:</strong><br>
            A la fecha, 15 de agosto de 2026, se informa que el monto acumulado correspondiente a los recibos generados asciende a:<br>
            <strong style="color: #059669; font-size: 14px;">S/ 25,130.00 (Veinticinco mil ciento treinta con 00/100 soles).</strong><br>
            <span style="color: var(--text-muted); font-size: 12px;">Lo que normalmente debe ser S/ 24,000.00.</span>
          </div>

          <div style="margin-top: 14px; padding-left: 8px; border-left: 3px solid var(--color-navy-700);">
            <strong>2. GESTIÓN DE RENTA DE CUARTA CATEGORÍA:</strong><br>
            Se realizó la gestión correspondiente a la activación de la Renta de Cuarta Categoría de la <strong>Miss Maritza</strong>, efectuándose las acciones necesarias para su regularización.<br>
            Asimismo, se está adjuntando el envío al contador de los archivos PDF correspondientes a la Renta de Cuarta Categoría realizada al siguiente personal:
            <ul style="margin: 6px 0 6px 20px;">
              <li>❖ Arroyo Araujo, Julisa Magali</li>
              <li>❖ Reyes Milla, María Daysi</li>
              <li>❖ Reyes Cerquen, Leyli Graciela</li>
            </ul>
          </div>

          <div style="margin-top: 14px; padding-left: 8px; border-left: 3px solid var(--color-red-500);">
            <strong>3. ESTUDIANTES PENDIENTES DE MATRÍCULA:</strong><br>
            De la revisión realizada, se informa que actualmente se encuentra pendiente de matrícula la siguiente estudiante:
            <div class="table-container" style="margin-top: 8px;">
              <table class="data-table" style="font-size: 11px;">
                <thead>
                  <tr><th>Estudiante</th><th>Grado</th><th>DNI</th><th>Lugar de procedencia</th><th>Situación</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Pocomo Oropeza, Brini Yuneyli</strong></td>
                    <td>5 años</td>
                    <td><span class="status-badge status-pending">Pendiente de obtener</span></td>
                    <td>Pendiente de obtener</td>
                    <td>Falta completar información para proceder con la regularización de la matrícula.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style="margin-top: 14px; padding-left: 8px; border-left: 3px solid var(--color-navy-700);">
            <strong>4. CASO DEL CERTIFICADO DE LA EXESTUDIANTE:</strong><br>
            Se realizó la gestión correspondiente al caso del certificado de la exestudiante:
            <ul style="margin: 6px 0 6px 20px;">
              <li>❖ <strong>Díaz Chirre, Evelin Estefanía</strong></li>
            </ul>
            Al respecto, se informa que el trámite ha sido rechazado por segunda vez. Ante esta situación, se procederá a realizar la consulta correspondiente ante la <strong>UGEL 05</strong>.
          </div>

          <div style="margin-top: 14px; padding-left: 8px; border-left: 3px solid var(--color-yellow-500);">
            <strong>5. COORDINACIÓN Y SEGUIMIENTO DE CASOS DE ESTUDIANTES:</strong><br>
            Se ha realizado la coordinación con el <strong>Prof. Lino</strong> respecto a los casos de estudiantes con regularización documentaria (Urbizagasti y Fabian).
          </div>

          <div style="margin-top: 16px; background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <strong>6. CONCLUSIONES:</strong>
            <ul style="margin: 6px 0 0 20px; font-size: 12px;">
              <li>• Al 15 de agosto de 2026, el monto acumulado de recibos generados asciende a <strong>S/ 25,130.00</strong>.</li>
              <li>• Renta de 4ta Categoría de Miss Maritza y docentes enviada al contador.</li>
              <li>• Estudiante pendiente de matrícula: <strong>Pocomo Oropeza, Brini Yuneyli (5 años)</strong>.</li>
            </ul>
          </div>

          <div style="text-align: right; margin-top: 36px; padding-right: 20px;">
            <div style="display: inline-block; text-align: center; border-top: 1px solid #0b132b; padding-top: 6px; width: 200px;">
              <strong>Atentamente,</strong><br>
              <span style="font-weight: 800; color: #0b132b;">Alex Lino</span><br>
              <span style="font-size: 11px; color: var(--text-muted);">Coordinación y Documentación</span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-navy" onclick="window.print()">[Imprimir] Imprimir Documento</button>
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
      </div>
    `);
  }

  showSQLSchemaModal() {
    this.showModal(`
      <div class="modal-header">
        <h3>[Documento] Esquema SQL Relacional - I.E.P. "El Educador" S.J.L.</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
          Script DDL para inicializar la base de datos relacional en <strong>Supabase</strong>, <strong>PostgreSQL</strong> o <strong>MySQL</strong>:
        </p>
        <pre style="background: var(--color-navy-950); color: #f8fafc; padding: 12px; border-radius: 8px; font-size: 11px; overflow-x: auto; max-height: 350px;">
-- TABLAS DEL SISTEMA EDUCATIVO "EL EDUCADOR" (S.J.L.)
CREATE TABLE tb_usuarios (
    id VARCHAR(50) PRIMARY KEY,
    codigo_institucional VARCHAR(30) UNIQUE NOT NULL,
    nombre_completo VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(30) NOT NULL,
    tiene_privilegio_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE tb_matriculas (
    id VARCHAR(50) PRIMARY KEY,
    codigo_estudiante VARCHAR(30) NOT NULL,
    nombre_estudiante VARCHAR(150) NOT NULL,
    dni VARCHAR(15) NOT NULL,
    grado VARCHAR(50) NOT NULL,
    apoderado VARCHAR(150) NOT NULL,
    estado_tramite VARCHAR(100) DEFAULT 'Matriculado'
);

CREATE TABLE tb_cuadernos_qr (
    id VARCHAR(50) PRIMARY KEY,
    codigo_qr VARCHAR(100) NOT NULL,
    codigo_estudiante VARCHAR(30) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    puntaje NUMERIC(4,2) NOT NULL,
    sello_digital VARCHAR(50) NOT NULL
);
        </pre>
      </div>
      <div class="modal-footer">
        <button class="btn btn-navy" onclick="window.app.closeModal()">Cerrar</button>
      </div>
    `);
  }

  // Navegación Dinámica sin Bloqueos
  navigate(viewName) {
    if (this.store.getCurrentView() === "cuadernos-qr" && viewName !== "cuadernos-qr") {
      this.stopLiveCameraScanner();
    }
    if (viewName === "asistencia") {
      this.store.state.attendanceActiveSubTab = "door-scanner";
    }
    this.store.setView(viewName);
    this.render();
    if (window.innerWidth <= 1024 && this.sidebar) {
      this.sidebar.classList.remove("open");
    }
  }

  // Actualizar datos del usuario y Renderizar Menú de Espacios Selectos por Rol
  updateHeaderUserInfo() {
    if (!this.store.isUserAuthenticated()) return;

    const user = this.store.getCurrentUser();
    const role = this.store.getCurrentRole();
    const currentView = this.store.getCurrentView();
    const nameEl = document.getElementById("header-user-name");
    const roleEl = document.getElementById("header-user-role");
    const avatarEl = document.getElementById("header-user-avatar");
    const roleSelect = document.getElementById("role-selector");

    if (nameEl) nameEl.textContent = user.name;
    if (roleEl) roleEl.textContent = user.roleLabel;
    if (avatarEl) avatarEl.src = user.avatar;

    // Renderizar Menú Lateral Dinámico según el Perfil del Usuario
    const sidebarNav = document.querySelector(".sidebar-nav");
    if (sidebarNav) {
      sidebarNav.innerHTML = Components.renderSidebarNav(role, currentView, this.store.state);
      
      // Re-vincular eventos de navegación en los enlaces dinámicos
      sidebarNav.querySelectorAll(".nav-item[data-view]").forEach(item => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const view = item.getAttribute("data-view");
          this.navigate(view);
        });
      });
    }

    // Actualizar badge de tareas
    const pendingTasksBadge = document.getElementById("badge-pending-tasks");
    if (pendingTasksBadge) {
      const pendingCount = this.store.getTasks().filter(t => t.status === "pending").length;
      pendingTasksBadge.textContent = pendingCount;
      pendingTasksBadge.style.display = pendingCount > 0 ? "inline-block" : "none";
    }
  }

  // Renderizar la vista activa o Login
  render() {
    const isAuthenticated = this.store.isUserAuthenticated();
    const appContainer = document.querySelector(".app-container");
    let loginRoot = document.getElementById("login-screen-root");

    if (!isAuthenticated) {
      if (appContainer) appContainer.style.display = "none";
      if (!loginRoot) {
        loginRoot = document.createElement("div");
        loginRoot.id = "login-screen-root";
        document.body.appendChild(loginRoot);
      }
      loginRoot.style.display = "block";
      
      // Preservar el formulario y los inputs mientras el usuario escribe
      const existingForm = document.getElementById("login-form");
      if (!existingForm || this.lastRenderedError !== this.loginErrorMessage) {
        this.lastRenderedError = this.loginErrorMessage;
        loginRoot.innerHTML = Components.renderLogin(this.loginErrorMessage);
      }
      return;
    }

    if (loginRoot) loginRoot.style.display = "none";
    if (appContainer) appContainer.style.display = "flex";

    const currentView = this.store.getCurrentView();
    const state = this.store.state;
    const currentUser = this.store.getCurrentUser();

    // Verificación de Bloqueo por Pensión Pendiente (Mora)
    const isLocked = this.store.isAccessLockedForCurrentUser();
    if (isLocked && currentView !== "pagos" && currentView !== "comunicados") {
      if (this.contentArea) {
        this.contentArea.innerHTML = Components.renderLockedAccessScreen(state, currentUser);
      }
      return;
    }

    let html = "";
    try {
      switch (currentView) {
        case "dashboard":
          html = Components.renderDashboard(state);
          break;
        case "database":
          html = Components.renderDatabaseManagement(state);
          break;
        case "usuarios-matriculas":
          html = Components.renderUserAndEnrollmentManagement(state);
          break;
        case "horarios":
          html = Components.renderSchedules(state);
          break;
        case "silabus":
          html = Components.renderSyllabi(state);
          break;
        case "cuadernos-qr":
          html = Components.renderNotebookQRControl(state);
          break;
        case "calificaciones":
          html = Components.renderGrades(state);
          break;
        case "tareas":
          html = Components.renderTasks(state);
          break;
        case "asistencia":
          html = Components.renderAttendance(state);
          break;
        case "comunicados":
          html = Components.renderAnnouncements(state);
          break;
        case "pagos":
          html = Components.renderPayments(state);
          break;
        case "boleta":
          html = Components.renderPrintableReport(state);
          break;
        default:
          html = Components.renderDashboard(state);
      }
    } catch (err) {
      console.error("Error renderizando vista:", currentView, err);
      html = `
        <div class="fade-in">
          <div class="card" style="padding: 24px; border-top: 4px solid var(--color-red-500);">
            <h3 style="color: var(--color-red-600); margin-bottom: 8px;">⚠️ Aviso de Carga en Vista: ${currentView}</h3>
            <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 16px;">
              Detalle: ${err.message}
            </p>
            <button class="btn btn-navy btn-sm" onclick="window.app.navigate('dashboard')">
              🏠 Regresar al Inicio
            </button>
          </div>
        </div>
      `;
    }

    if (this.contentArea) {
      this.contentArea.innerHTML = html;
    }
    this.updateHeaderUserInfo();
  }

  // --- Filtros de Grado ---
  onScheduleGradeChange(gradeId) {
    this.store.setSelectedScheduleGrade(gradeId);
    this.render();
  }

  onSyllabusGradeChange(gradeId) {
    this.store.setSelectedSyllabusGrade(gradeId);
    this.render();
  }

  // =========================================================================
  // GESTIÓN DE USUARIOS, MATRÍCULAS Y PRIVILEGIOS
  // =========================================================================
  // =========================================================================
  // GESTIÓN DE USUARIOS, MATRÍCULAS, PERFILES Y CONFIGURACIÓN DE PESTAÑAS
  // =========================================================================
  setUserManagementTab(tabName) {
    this.store.setUsersManagementTab(tabName);
  }

  setUserRoleFilter(roleFilter) {
    this.store.setUsersRoleFilter(roleFilter);
  }

  onUserSearchFilter(query) {
    const q = (query || "").toLowerCase().trim();
    const rows = document.querySelectorAll("#users-table-list tbody tr");
    rows.forEach(r => {
      const text = r.textContent.toLowerCase();
      r.style.display = text.includes(q) ? "" : "none";
    });
  }

  onSelectNavConfigRole(role) {
    this.store.state.selectedNavConfigRole = role;
    this.render();
  }

  toggleNavTab(role, tabId, isChecked) {
    this.store.toggleNavigationTab(role, tabId, isChecked);
    this.showToast(`Pestaña "${tabId}" ${isChecked ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> ACTIVADA' : '⚪ OCULTADA'} para ${role.toUpperCase()}`, isChecked ? "success" : "info");
    this.updateHeaderUserInfo();
  }

  saveSingleNavTab(role, tabId) {
    const labelInput = document.getElementById(`tab-label-${role}-${tabId}`);
    const badgeInput = document.getElementById(`tab-badge-${role}-${tabId}`);
    const newLabel = labelInput ? labelInput.value.trim() : "";
    const newBadge = badgeInput ? badgeInput.value.trim() : "";
    if (!newLabel) {
      this.showToast("El nombre de la pestaña no puede estar vacío", "danger");
      return;
    }
    this.store.renameNavigationTab(role, tabId, newLabel, newBadge);
    this.showToast(`✓ Pestaña "${newLabel}" guardada para ${role.toUpperCase()}`, "success");
    this.updateHeaderUserInfo();
  }

  resetNavTabsToDefault(role) {
    if (confirm(`¿Restaurar todas las pestañas por defecto para el perfil ${role.toUpperCase()}?`)) {
      this.store.resetNavigationTabsToDefault(role);
      this.showToast(`Menús de ${role.toUpperCase()} restaurados por defecto`, "info");
      this.updateHeaderUserInfo();
      this.render();
    }
  }

  openCreateUserModal(defaultRole = "Docente") {
    this.showModal(`
      <div class="modal-header">
        <h3>➕ Crear Nuevo Usuario & Asignar Perfil</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        
        <!-- Selector Visual de Perfil -->
        <div class="form-group">
          <label class="form-label" style="font-weight: 800; color: var(--color-navy-900);">
            1. Seleccionar Tipo de Perfil / Rol:
          </label>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 8px;">
            <label style="border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;" class="role-selector-card" id="card-role-docente">
              <input type="radio" name="new-user-role-radio" value="Docente" ${defaultRole === 'Docente' ? 'checked' : ''} onchange="window.app.onUserRoleTypeChange(this.value)" style="margin-bottom: 2px;" />
              <span style="font-size: 16px;">👨‍[Colegio]</span>
              <strong style="font-size: 12px; color: #1e3a8a;">Docente</strong>
            </label>

            <label style="border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;" class="role-selector-card" id="card-role-auxiliar">
              <input type="radio" name="new-user-role-radio" value="Auxiliar" ${defaultRole === 'Auxiliar' ? 'checked' : ''} onchange="window.app.onUserRoleTypeChange(this.value)" style="margin-bottom: 2px;" />
              <span style="font-size: 16px;">👮</span>
              <strong style="font-size: 12px; color: #0f766e;">Auxiliar</strong>
            </label>

            <label style="border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;" class="role-selector-card" id="card-role-estudiante">
              <input type="radio" name="new-user-role-radio" value="Estudiante" ${defaultRole === 'Estudiante' ? 'checked' : ''} onchange="window.app.onUserRoleTypeChange(this.value)" style="margin-bottom: 2px;" />
              <span style="font-size: 16px;">🎒</span>
              <strong style="font-size: 12px; color: #047857;">Estudiante</strong>
            </label>

            <label style="border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;" class="role-selector-card" id="card-role-apoderado">
              <input type="radio" name="new-user-role-radio" value="Apoderado" ${defaultRole === 'Apoderado' ? 'checked' : ''} onchange="window.app.onUserRoleTypeChange(this.value)" style="margin-bottom: 2px;" />
              <span style="font-size: 16px;">👨‍👩‍👧</span>
              <strong style="font-size: 12px; color: #b45309;">Apoderado</strong>
            </label>

            <label style="border: 2px solid #e2e8f0; border-radius: 8px; padding: 8px; text-align: center; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px;" class="role-selector-card" id="card-role-directivo">
              <input type="radio" name="new-user-role-radio" value="Directivo" ${defaultRole === 'Directivo' ? 'checked' : ''} onchange="window.app.onUserRoleTypeChange(this.value)" style="margin-bottom: 2px;" />
              <span style="font-size: 16px;">[Seguridad]️</span>
              <strong style="font-size: 12px; color: #6b21a8;">Directivo</strong>
            </label>
          </div>
        </div>

        <input type="hidden" id="new-user-role" value="${defaultRole}" />

        <!-- Datos Principales -->
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-3);">
          <div class="form-group">
            <label class="form-label">Nombre Completo:</label>
            <input type="text" id="new-user-name" class="form-control" placeholder="Ej: Lic. Carmen Rosa Huamán" oninput="window.app.autoGenerateUserCredentials()" />
          </div>
          <div class="form-group">
            <label class="form-label">DNI (8 dígitos):</label>
            <input type="text" id="new-user-dni" class="form-control" placeholder="45891204" maxlength="10" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3);">
          <div class="form-group">
            <label class="form-label">Usuario (@username):</label>
            <input type="text" id="new-user-username" class="form-control" placeholder="carmen.huaman" />
          </div>
          <div class="form-group">
            <label class="form-label">Correo Institucional / Personal:</label>
            <input type="email" id="new-user-email" class="form-control" placeholder="carmen.huaman@eleducador.edu.pe" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3);">
          <div class="form-group">
            <label class="form-label">Contraseña de Acceso:</label>
            <input type="text" id="new-user-pass" class="form-control" value="docente2026" />
          </div>
          <div class="form-group" style="display: flex; align-items: flex-end;">
            <button type="button" class="btn btn-outline" onclick="window.app.autoGenerateUserCredentials()" style="width: 100%; font-size: 11.5px; font-weight: bold; margin-bottom: 8px;">
              ⚡ Autogenerar Credenciales
            </button>
          </div>
        </div>

        <!-- SECCIÓN DINÁMICA SEGÚN EL ROL -->
        <div id="dynamic-role-fields-container" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin: 12px 0;">
          ${this.getDynamicRoleFieldsHTML(defaultRole)}
        </div>

        <!-- Permisos de Administrador -->
        <div class="form-group" id="admin-privilege-checkbox-box">
          <label style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: var(--color-navy-900); cursor: pointer; background: var(--color-yellow-50); padding: 10px; border: 1px dashed var(--color-yellow-500); border-radius: 8px; font-size: 12.5px;">
            <input type="checkbox" id="new-user-has-admin" />
            <span>★ Conceder Privilegios de Edición (Horarios, Sílabus, Notas y Carga de Materiales)</span>
          </label>
        </div>

      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmCreateUser()" style="font-weight: 800;">
          ✓ Guardar y Registrar en Base de Datos
        </button>
      </div>
    `);
  }

  onUserRoleTypeChange(role) {
    const roleInput = document.getElementById("new-user-role");
    if (roleInput) roleInput.value = role;

    const dynContainer = document.getElementById("dynamic-role-fields-container");
    if (dynContainer) {
      dynContainer.innerHTML = this.getDynamicRoleFieldsHTML(role);
    }

    const adminBox = document.getElementById("admin-privilege-checkbox-box");
    if (adminBox) {
      adminBox.style.display = (role === "Docente" || role === "Directivo") ? "block" : "none";
    }

    const passInput = document.getElementById("new-user-pass");
    if (passInput) {
      passInput.value = (role === "Estudiante" ? "estudiante2026" : role === "Apoderado" ? "padre2026" : role === "Directivo" ? "admin2026" : "docente2026");
    }
  }

  getBoletaCoursesSelectOptions(selectedSubject = "Aritmética") {
    const categories = [
      {
        area: "[Formato] Área de Matemática",
        courses: [
          "Aritmética",
          "Álgebra",
          "Geometría",
          "Trigonometría",
          "Razonamiento Matemático"
        ]
      },
      {
        area: "[Cuaderno] Área de Comunicación",
        courses: [
          "Lenguaje",
          "Literatura",
          "Razonamiento Verbal"
        ]
      },
      {
        area: "🔬 Área de Ciencia y Tecnología",
        courses: [
          "Biología",
          "Física",
          "Química"
        ]
      },
      {
        area: "🌎 Área de Ciencias Sociales",
        courses: [
          "Historia del Perú",
          "Historia Universal",
          "Geografía",
          "Filosofía"
        ]
      },
      {
        area: "⚖️ Área de DPCC",
        courses: [
          "Cívica",
          "Psicología"
        ]
      },
      {
        area: "💻 Área de Educación para el Trabajo (EPT)",
        courses: [
          "Computación / Informática",
          "Gestión Empresarial"
        ]
      },
      {
        area: "🎨 Otras Áreas Curriculares",
        courses: [
          "Inglés",
          "Arte y Cultura",
          "Educación Física",
          "Educación Religiosa"
        ]
      }
    ];

    const currentClean = (selectedSubject || "").trim().toLowerCase();

    return categories.map(cat => `
      <optgroup label="${cat.area}">
        ${cat.courses.map(c => {
          const isSelected = c.toLowerCase() === currentClean || currentClean.includes(c.toLowerCase()) || c.toLowerCase().includes(currentClean);
          return `<option value="${c}" ${isSelected ? 'selected' : ''}>${c}</option>`;
        }).join('')}
      </optgroup>
    `).join('');
  }

  renderGradesChecklistHTML(prefix = "new-user-grades", selectedList = ["1° de Secundaria", "2° de Secundaria", "3° de Secundaria", "4° de Secundaria", "5° de Secundaria"]) {
    const gradesStructure = [
      {
        level: "Secundaria",
        color: "#1e40af",
        bg: "#eff6ff",
        border: "#bfdbfe",
        grades: ["1° de Secundaria", "2° de Secundaria", "3° de Secundaria", "4° de Secundaria", "5° de Secundaria"]
      },
      {
        level: "Primaria",
        color: "#047857",
        bg: "#ecfdf5",
        border: "#a7f3d0",
        grades: ["1° de Primaria", "2° de Primaria", "3° de Primaria", "4° de Primaria", "5° de Primaria", "6° de Primaria"]
      },
      {
        level: "Inicial",
        color: "#b45309",
        bg: "#fffbeb",
        border: "#fde68a",
        grades: ["Inicial 3 años", "Inicial 4 años", "Inicial 5 años"]
      }
    ];

    const isSelected = (g) => {
      if (!selectedList || selectedList.length === 0) return false;
      const clean = g.toLowerCase().replace(/['°\s]/g, '');
      return selectedList.some(s => {
        const sClean = (typeof s === 'string' ? s : '').toLowerCase().replace(/['°\s]/g, '');
        return sClean.includes(clean) || clean.includes(sClean);
      });
    };

    return `
      <div style="margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
          <label class="form-label" style="font-size: 11.5px; font-weight: 800; color: #1e3a8a; margin: 0;">
            [Colegio] Grados a Cargo (Checklist - Marque los grados asignados):
          </label>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectGrades('${prefix}', 'secundaria')" style="font-size: 10.5px; padding: 2px 6px; font-weight: bold;">+ Toda Secundaria</button>
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectGrades('${prefix}', 'primaria')" style="font-size: 10.5px; padding: 2px 6px; font-weight: bold;">+ Toda Primaria</button>
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectGrades('${prefix}', 'all')" style="font-size: 10.5px; padding: 2px 6px; font-weight: bold;">Todos</button>
            <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectGrades('${prefix}', 'clear')" style="font-size: 10.5px; padding: 2px 6px; color: var(--color-red-600);">Desmarcar</button>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
          ${gradesStructure.map(st => `
            <div style="background: ${st.bg}; border: 1px solid ${st.border}; border-radius: 6px; padding: 8px;">
              <div style="font-size: 11px; font-weight: 800; color: ${st.color}; margin-bottom: 6px; text-transform: uppercase; border-bottom: 1px solid ${st.border}; padding-bottom: 2px; display: flex; justify-content: space-between; align-items: center;">
                <span>Nivel ${st.level}</span>
                <span style="font-size: 10px; opacity: 0.8;">(${st.grades.length} Grados)</span>
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                ${st.grades.map(g => {
                  const chk = isSelected(g);
                  return `
                    <label style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 600; color: #1f2937; cursor: pointer; margin: 0; background: rgba(255,255,255,0.7); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.05);">
                      <input type="checkbox" name="${prefix}-check" value="${g}" data-level="${st.level.toLowerCase()}" ${chk ? 'checked' : ''} style="cursor: pointer;" />
                      <span>${g}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  quickSelectGrades(prefix, mode) {
    const checkboxes = document.querySelectorAll(`input[name='${prefix}-check']`);
    checkboxes.forEach(cb => {
      const lvl = cb.getAttribute("data-level");
      if (mode === "secundaria") {
        cb.checked = (lvl === "secundaria");
      } else if (mode === "primaria") {
        cb.checked = (lvl === "primaria");
      } else if (mode === "inicial") {
        cb.checked = (lvl === "inicial");
      } else if (mode === "all") {
        cb.checked = true;
      } else if (mode === "clear") {
        cb.checked = false;
      }
    });
  }

  // =========================================================================
  // SELECCIÓN MÚLTIPLE DE CURSOS PARA EL DOCENTE (CHECKLIST POR ÁREAS)
  // =========================================================================

  renderCoursesChecklistHTML(prefix = "new-user-courses", selectedCourses = ["Aritmética", "Álgebra"]) {
    const courseCategories = [
      {
        category: "[Formato] Área de Matemática",
        color: "#1e40af",
        bg: "#eff6ff",
        border: "#bfdbfe",
        courses: [
          "Aritmética",
          "Álgebra",
          "Geometría",
          "Trigonometría",
          "Razonamiento Matemático",
          "Matemática Avanzada"
        ]
      },
      {
        category: "📚 Área de Comunicación",
        color: "#854d0e",
        bg: "#fefce8",
        border: "#fde047",
        courses: [
          "Lenguaje",
          "Literatura",
          "Razonamiento Verbal",
          "Comunicación y Literatura (General)",
          "Idioma Extranjero: Inglés"
        ]
      },
      {
        category: "🔬 Área de Ciencia y Tecnología",
        color: "#065f46",
        bg: "#ecfdf5",
        border: "#a7f3d0",
        courses: [
          "Física",
          "Química",
          "Biología",
          "Ciencia y Tecnología (General)"
        ]
      },
      {
        category: "🏛️ Ciencias Sociales & DPCC",
        color: "#581c87",
        bg: "#faf5ff",
        border: "#e9d5ff",
        courses: [
          "Historia del Perú",
          "Historia Universal",
          "Geografía",
          "Economía",
          "Filosofía",
          "Psicología",
          "Ciencias Sociales (General)",
          "Desarrollo Personal, Ciudadanía y Cívica (DPCC)"
        ]
      },
      {
        category: "💻 Tecnología, EPT, Arte & Tutoría",
        color: "#0f766e",
        bg: "#f0fdfa",
        border: "#99f6e4",
        courses: [
          "Computación & Robótica",
          "Educación para el Trabajo (EPT)",
          "Arte y Cultura",
          "Educación Física",
          "Educación Religiosa",
          "Tutoría y Orientación"
        ]
      },
      {
        category: "🎒 Especialidades de Nivel",
        color: "#9a3412",
        bg: "#fff7ed",
        border: "#fed7aa",
        courses: [
          "Polidocente Nivel Primaria",
          "Nivel Inicial (3, 4 y 5 años)"
        ]
      }
    ];

    const selList = Array.isArray(selectedCourses)
      ? selectedCourses
      : (typeof selectedCourses === 'string' ? selectedCourses.split(/,\s*/) : []);

    const isSelected = (cName) => {
      if (!selList || selList.length === 0) return false;
      const clean = cName.toLowerCase().trim();
      return selList.some(s => {
        const sClean = (typeof s === 'string' ? s : '').toLowerCase().trim();
        return sClean === clean || sClean.includes(clean) || clean.includes(sClean);
      });
    };

    return `
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div>
            <label class="form-label" style="font-weight: 800; color: #1e3a8a; font-size: 12px; margin-bottom: 0;">
              📚 Cursos y Asignaturas a Cargo (Seleccione todos los cursos del docente):
            </label>
            <div style="font-size: 11px; color: #64748b;">
              * Puede marcar múltiples cursos de los cuales el profesor se hará responsable.
            </div>
          </div>
          <span class="status-badge" style="background: #dbeafe; color: #1e40af; font-weight: 800; font-size: 11px;" id="${prefix}-count-badge">
            [Lista] <span id="${prefix}-count-val">${selList.length}</span> curso(s) seleccionado(s)
          </span>
        </div>

        <!-- Botones de Selección Rápida por Área -->
        <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 10px;">
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectCourses('${prefix}', 'matematica')" style="font-size: 10.5px; padding: 2px 7px; color: #1e40af; border-color: #93c5fd; background: #ffffff; font-weight: bold;">
            + Toda Matemática
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectCourses('${prefix}', 'comunicacion')" style="font-size: 10.5px; padding: 2px 7px; color: #854d0e; border-color: #fde047; background: #ffffff; font-weight: bold;">
            + Toda Comunicación
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectCourses('${prefix}', 'ciencia')" style="font-size: 10.5px; padding: 2px 7px; color: #065f46; border-color: #86efac; background: #ffffff; font-weight: bold;">
            + Toda Ciencia
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectCourses('${prefix}', 'sociales')" style="font-size: 10.5px; padding: 2px 7px; color: #581c87; border-color: #d8b4fe; background: #ffffff; font-weight: bold;">
            + Todos Sociales
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectCourses('${prefix}', 'all')" style="font-size: 10.5px; padding: 2px 7px; color: #15803d; border-color: #86efac; background: #ffffff; font-weight: bold;">
            ✓ Todos
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.quickSelectCourses('${prefix}', 'clear')" style="font-size: 10.5px; padding: 2px 7px; color: #dc2626; border-color: #fca5a5; background: #ffffff; font-weight: bold;">
            ✕ Desmarcar
          </button>
        </div>

        <!-- Cuadrícula de Cursos Agrupados por Área -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; max-height: 220px; overflow-y: auto; background: #ffffff; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
          ${courseCategories.map(cat => `
            <div style="background: ${cat.bg}; border: 1px solid ${cat.border}; border-radius: 6px; padding: 8px;">
              <div style="font-size: 11px; font-weight: 800; color: ${cat.color}; margin-bottom: 6px; border-bottom: 1px solid ${cat.border}; padding-bottom: 3px;">
                ${cat.category}
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                ${cat.courses.map(cName => {
                  const chk = isSelected(cName);
                  return `
                    <label style="display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: #1f2937; cursor: pointer; margin: 0; background: rgba(255,255,255,0.8); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(0,0,0,0.05);" onmouseover="this.style.background='#ffffff'" onmouseout="this.style.background='rgba(255,255,255,0.8)'">
                      <input type="checkbox" name="${prefix}-check" value="${cName}" ${chk ? 'checked' : ''} onchange="window.app.updateCoursesCounter('${prefix}')" data-area="${cat.category.toLowerCase()}" style="cursor: pointer;" />
                      <span style="font-weight: 600;">${cName}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  updateCoursesCounter(prefix) {
    const checkboxes = document.querySelectorAll(`input[name='${prefix}-check']:checked`);
    const countVal = document.getElementById(`${prefix}-count-val`);
    if (countVal) countVal.innerText = checkboxes.length;
  }

  quickSelectCourses(prefix, area) {
    const checkboxes = document.querySelectorAll(`input[name='${prefix}-check']`);
    checkboxes.forEach(cb => {
      const val = cb.value.toLowerCase();
      const dataArea = (cb.getAttribute("data-area") || "").toLowerCase();
      if (area === "all") {
        cb.checked = true;
      } else if (area === "clear") {
        cb.checked = false;
      } else if (area === "matematica") {
        if (dataArea.includes("matemática") || val.includes("aritmética") || val.includes("álgebra") || val.includes("geometría") || val.includes("trigonometría") || val.includes("matemático") || val.includes("avanzada")) {
          cb.checked = true;
        }
      } else if (area === "comunicacion") {
        if (dataArea.includes("comunicación") || val.includes("lenguaje") || val.includes("literatura") || val.includes("verbal") || val.includes("inglés")) {
          cb.checked = true;
        }
      } else if (area === "ciencia") {
        if (dataArea.includes("ciencia") || val.includes("física") || val.includes("química") || val.includes("biología")) {
          cb.checked = true;
        }
      } else if (area === "sociales") {
        if (dataArea.includes("sociales") || val.includes("historia") || val.includes("geografía") || val.includes("cívica") || val.includes("filosofía") || val.includes("psicología") || val.includes("dpcc") || val.includes("economía")) {
          cb.checked = true;
        }
      }
    });
    this.updateCoursesCounter(prefix);
  }

  getRegisteredStudentsList() {
    const studentsFromUsers = (this.store.state.systemUsers || [])
      .filter(u => u.role === 'Estudiante' || u.role === 'Alumno')
      .map(u => ({
        id: u.id,
        name: u.name,
        grade: u.detail || u.gradeLevel || "4to de Secundaria",
        dni: u.dni || "",
        code: u.code || u.id
      }));

    const baseStudents = [
      { id: "EST-042", name: "Sofía Méndez Flores", grade: "4° de Secundaria", dni: "74891230", code: "EST-2026-042" },
      { id: "EST-011", name: "Carlos Benítez Díaz", grade: "4° de Secundaria", dni: "75129034", code: "EST-2026-011" },
      { id: "EST-025", name: "Mateo Ramos Quispe", grade: "3° de Secundaria", dni: "76891209", code: "EST-2026-025" },
      { id: "EST-089", name: "Marina del Carmen Albújar Zegarra", grade: "2° de Secundaria", dni: "75849301", code: "EST-2026-089" },
      { id: "EST-PEND-01", name: "Brini Yuneyli Pocomo Oropeza", grade: "Inicial 5 años", dni: "Pendiente", code: "EST-2026-PEND-01" },
      { id: "EST-089-EX", name: "Evelin Estefanía Díaz Chirre", grade: "5° de Secundaria", dni: "71290384", code: "EX-EST-2025-089" },
      { id: "EST-PRIM-01", name: "Joaquín Urbizagasti", grade: "1° de Primaria", dni: "78912345", code: "EST-2026-012" },
      { id: "EST-PRIM-02", name: "Valentina Fabian", grade: "3° de Primaria", dni: "79123456", code: "EST-2026-013" },
      { id: "EST-PRIM-03", name: "Camila Andrea Silva", grade: "5° de Primaria", dni: "74567890", code: "EST-2026-014" },
      { id: "EST-PRIM-04", name: "Diego Alejandro Torres", grade: "6° de Primaria", dni: "75678901", code: "EST-2026-015" }
    ];

    const merged = [...studentsFromUsers];
    baseStudents.forEach(b => {
      if (!merged.some(m => m.name.toLowerCase() === b.name.toLowerCase())) {
        merged.push(b);
      }
    });

    return merged;
  }

  getSingleParentStudentRowHTML(prefix, rowId, index, data = {}) {
    const currentName = data.name || (index === 0 ? "Sofía Méndez Flores" : "");
    const currentGrade = data.grade || (index === 0 ? "4° de Secundaria" : "1° de Secundaria");
    const currentDni = data.dni || (index === 0 ? "74891230" : "");

    const clean = currentName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, '');
    const parts = clean.split(/\s+/).filter(Boolean);
    const initialUser = parts.length >= 2 ? `${parts[0]}.${parts[parts.length - 1]}` : (parts[0] || `alumno${index + 1}`);

    const gradeOptions = [
      {
        group: "Nivel Secundaria",
        grades: ["1° de Secundaria", "2° de Secundaria", "3° de Secundaria", "4° de Secundaria", "5° de Secundaria"]
      },
      {
        group: "Nivel Primaria",
        grades: ["1° de Primaria", "2° de Primaria", "3° de Primaria", "4° de Primaria", "5° de Primaria", "6° de Primaria"]
      },
      {
        group: "Nivel Inicial",
        grades: ["Inicial 3 años", "Inicial 4 años", "Inicial 5 años"]
      }
    ];

    return `
      <div class="card parent-student-row" id="${rowId}" style="padding: 12px; margin-bottom: 10px; border: 1px solid #fdba74; background: #fffaf0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; border-bottom: 1px solid #ffedd5; padding-bottom: 4px;">
          <span style="font-size: 12px; font-weight: 800; color: #9a3412;">
            [Expediente] Estudiante #${index + 1} a Registrar (Hijo / Sobrino / Familiar)
          </span>
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.removeParentStudentRow('${prefix}', '${rowId}')" style="font-size: 11px; padding: 2px 8px; color: var(--color-red-600); border-color: #fca5a5;" title="Quitar estudiante">
            🗑️ Quitar
          </button>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1.1fr 1fr 1.2fr; gap: 8px; margin-bottom: 8px;">
          <!-- Nombre Completo del Alumno -->
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: 11px; font-weight: 700; margin-bottom: 2px; color: #9a3412;">
              Nombre Completo del Estudiante:
            </label>
            <input type="text" class="form-control parent-student-name" placeholder="Ej: Sofía Méndez Flores" value="${currentName}" oninput="window.app.updateStudentCredentialPreview('${rowId}')" style="font-size: 12px; font-weight: bold; border-color: #ea580c; background: #ffffff;" />
          </div>

          <!-- DNI -->
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: 11px; font-weight: 700; margin-bottom: 2px; color: #9a3412;">
              DNI (8 dígitos):
            </label>
            <input type="text" class="form-control parent-student-dni" placeholder="74891230" value="${currentDni}" style="font-size: 12px; font-weight: bold;" maxlength="8" />
          </div>

          <!-- Parentesco -->
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: 11px; font-weight: 700; margin-bottom: 2px; color: #9a3412;">Parentesco:</label>
            <select class="form-control parent-student-rel" style="font-size: 11.5px; font-weight: bold;">
              <option value="Hijo/Hija" ${data.relationship === 'Hijo/Hija' ? 'selected' : ''}>Hijo / Hija</option>
              <option value="Sobrino/Sobrina" ${data.relationship === 'Sobrino/Sobrina' ? 'selected' : ''}>Sobrino / Sobrina</option>
              <option value="Nieto/Nieta" ${data.relationship === 'Nieto/Nieta' ? 'selected' : ''}>Nieto / Nieta</option>
              <option value="Hermano/Hermana" ${data.relationship === 'Hermano/Hermana' ? 'selected' : ''}>Hermano / Hermana</option>
              <option value="Familiar / Tutor Legal" ${data.relationship === 'Familiar / Tutor Legal' ? 'selected' : ''}>Familiar / Tutor Legal</option>
            </select>
          </div>

          <!-- Grado / Nivel Desglosable -->
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: 11px; font-weight: 700; margin-bottom: 2px; color: #9a3412;">Grado / Nivel:</label>
            <select class="form-control parent-student-grade" style="font-size: 11.5px; font-weight: bold; border-color: #ea580c;">
              ${gradeOptions.map(grp => `
                <optgroup label="${grp.group}">
                  ${grp.grades.map(g => {
                    const sel = (currentGrade && (currentGrade.toLowerCase().includes(g.toLowerCase()) || g.toLowerCase().includes(currentGrade.toLowerCase())));
                    return `<option value="${g}" ${sel ? 'selected' : ''}>${g}</option>`;
                  }).join('')}
                </optgroup>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Credenciales Autogeneradas del Estudiante para la Intranet -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #ecfdf5; padding: 6px 12px; border-radius: 6px; border: 1px dashed #a7f3d0; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 11px; color: #065f46; font-weight: 700;">
            <span>🔑 Acceso Intranet:</span>
            <span>Usuario: <strong class="student-user-preview" style="background: #ffffff; padding: 2px 8px; border-radius: 4px; border: 1px solid #6ee7b7; font-family: monospace; color: #047857;">@${initialUser}</strong></span>
            <span>Contraseña: <strong style="background: #ffffff; padding: 2px 8px; border-radius: 4px; border: 1px solid #6ee7b7; color: #047857;">estudiante2026</strong></span>
          </div>
          <span style="font-size: 11px; color: #047857; font-weight: 800;">
            ✓ Perfil de estudiante se creará automáticamente
          </span>
        </div>
      </div>
    `;
  }

  updateStudentCredentialPreview(rowId) {
    const rowElem = document.getElementById(rowId);
    if (!rowElem) return;
    const nameInp = rowElem.querySelector(".parent-student-name");
    const previewSpan = rowElem.querySelector(".student-user-preview");
    if (nameInp && previewSpan) {
      const val = nameInp.value.trim();
      if (!val) {
        previewSpan.innerText = "@usuario.alumno";
        return;
      }
      const clean = val.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, '');
      const parts = clean.split(/\s+/).filter(Boolean);
      let username = parts.length >= 2 ? `${parts[0]}.${parts[parts.length - 1]}` : (parts[0] || 'estudiante');
      previewSpan.innerText = `@${username}`;
    }
  }

  renderParentStudentsLinkerHTML(prefix = "new-parent", initialStudents = [{ name: "Sofía Méndez Flores", grade: "4° de Secundaria", relationship: "Hijo/Hija", dni: "74891230" }]) {
    const list = (initialStudents && initialStudents.length > 0) ? initialStudents : [{ name: "Sofía Méndez Flores", grade: "4° de Secundaria", relationship: "Hijo/Hija", dni: "74891230" }];
    
    return `
      <div style="background: #fff7ed; border: 1px solid #ffedd5; border-radius: 8px; padding: 12px; margin-top: 6px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div>
            <div style="font-size: 12px; font-weight: 800; color: #9a3412;">
              🎒 Registro y Creación de Perfiles de Estudiantes a Cargo (Mínimo 1, Máximo 9):
            </div>
            <div style="font-size: 11px; color: #c2410c;">
              * Ingrese los datos de cada hijo o familiar. El sistema generará automáticamente sus cuentas de Estudiante con su usuario y contraseña para ingresar a la Intranet.
            </div>
          </div>
          <span class="status-badge" style="background: #ffedd5; color: #9a3412; font-weight: 800; font-size: 11px;" id="${prefix}-counter-badge">
            🎒 <span id="${prefix}-count-val">${list.length}</span> / 9 Estudiantes a Crear
          </span>
        </div>

        <div id="${prefix}-students-container">
          ${list.map((st, i) => this.getSingleParentStudentRowHTML(prefix, `${prefix}-row-${i}`, i, st)).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 8px; border-top: 1px dashed #fed7aa; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 11px; color: #7c2d12;">
            ℹ️ Puede registrar hasta 9 estudiantes por apoderado con creación instantánea de sus credenciales escolares.
          </span>
          <button type="button" class="btn btn-navy btn-sm" onclick="window.app.addParentStudentRow('${prefix}')" style="font-size: 11px; font-weight: 800; padding: 4px 12px;">
            ➕ + Agregar y Crear Otro Estudiante (Hasta 9)
          </button>
        </div>
      </div>
    `;
  }

  addParentStudentRow(prefix) {
    const container = document.getElementById(`${prefix}-students-container`);
    if (!container) return;
    const currentRows = container.querySelectorAll(".parent-student-row");
    if (currentRows.length >= 9) {
      this.showToast("⚠️ Límite alcanzado: Un apoderado puede tener como máximo 9 estudiantes registrados.", "warning");
      return;
    }
    const newIdx = currentRows.length;
    const rowId = `${prefix}-row-${Date.now()}`;
    const rowHTML = this.getSingleParentStudentRowHTML(prefix, rowId, newIdx, { name: "", grade: "1° de Secundaria", relationship: "Hijo/Hija", dni: "" });
    const temp = document.createElement("div");
    temp.innerHTML = rowHTML;
    container.appendChild(temp.firstElementChild);
    this.updateParentStudentsCounter(prefix);
    this.showToast(`Estudiante #${newIdx + 1} añadido para registro (Total: ${newIdx + 1}/9)`, "info");
  }

  removeParentStudentRow(prefix, rowId) {
    const container = document.getElementById(`${prefix}-students-container`);
    if (!container) return;
    const currentRows = container.querySelectorAll(".parent-student-row");
    if (currentRows.length <= 1) {
      this.showToast("⚠️ Requerido: El perfil de apoderado debe tener como mínimo 1 estudiante registrado.", "warning");
      return;
    }
    const rowElem = document.getElementById(rowId);
    if (rowElem) {
      rowElem.remove();
      this.updateParentStudentsCounter(prefix);
    }
  }

  updateParentStudentsCounter(prefix) {
    const container = document.getElementById(`${prefix}-students-container`);
    if (!container) return;
    const currentRows = container.querySelectorAll(".parent-student-row");
    const countVal = document.getElementById(`${prefix}-count-val`);
    if (countVal) countVal.innerText = currentRows.length;
    
    // Re-index titles
    currentRows.forEach((r, i) => {
      const headerSpan = r.querySelector("span");
      if (headerSpan) headerSpan.innerText = `[Expediente] Estudiante #${i + 1} a Registrar (Hijo / Sobrino / Familiar)`;
    });
  }

  getDynamicRoleFieldsHTML(role) {
    if (role === "Docente") {
      return `
        <div style="font-size: 12px; font-weight: 800; color: #1e3a8a; margin-bottom: 8px;">
          📚 Carga Pedagógica, Asignaturas Curriculares y Horas Semanales:
        </div>
        
        ${this.renderCoursesChecklistHTML("new-user-courses", ["Aritmética", "Álgebra"])}

        <div class="form-group" style="margin-bottom: 8px;">
          <label class="form-label" style="font-size: 11.5px; font-weight: 700; color: #1e3a8a;">Carga Horaria Semanal:</label>
          <select id="new-user-hours" class="form-control" style="font-size: 12px; font-weight: bold; width: 100%;">
            <option value="30 hrs (Tiempo Completo)">30 hrs (Tiempo Completo)</option>
            <option value="24 hrs (Jornada Estándar)" selected>24 hrs (Jornada Estándar)</option>
            <option value="18 hrs (Tiempo Parcial)">18 hrs (Tiempo Parcial)</option>
            <option value="12 hrs (Por Horas)">12 hrs (Por Horas)</option>
          </select>
        </div>

        ${this.renderGradesChecklistHTML("new-user-grades", ["1° de Secundaria", "2° de Secundaria", "3° de Secundaria", "4° de Secundaria", "5° de Secundaria"])}
      `;
    } else if (role === "Estudiante") {
      return `
        <div style="font-size: 12px; font-weight: 800; color: #065f46; margin-bottom: 8px;">🎒 Datos Escolares del Alumno:</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div class="form-group" style="margin-bottom: 6px;">
            <label class="form-label" style="font-size: 11.5px;">Grado / Nivel:</label>
            <select id="new-user-grade-select" class="form-control">
              <option value="Inicial 3 años">Inicial 3 años</option>
              <option value="Inicial 4 años">Inicial 4 años</option>
              <option value="Inicial 5 años">Inicial 5 años</option>
              <option value="1° de Primaria">1° de Primaria</option>
              <option value="2° de Primaria">2° de Primaria</option>
              <option value="3° de Primaria">3° de Primaria</option>
              <option value="4° de Primaria">4° de Primaria</option>
              <option value="5° de Primaria">5° de Primaria</option>
              <option value="6° de Primaria">6° de Primaria</option>
              <option value="1° de Secundaria">1° de Secundaria</option>
              <option value="2° de Secundaria">2° de Secundaria</option>
              <option value="3° de Secundaria">3° de Secundaria</option>
              <option value="4° de Secundaria" selected>4° de Secundaria</option>
              <option value="5° de Secundaria">5° de Secundaria</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 6px;">
            <label class="form-label" style="font-size: 11.5px;">Tutor de Aula:</label>
            <input type="text" id="new-user-tutor" class="form-control" placeholder="Ej: Prof. Roberto Silva" value="Prof. Roberto Silva" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label" style="font-size: 11.5px;">Apoderado Responsable:</label>
          <input type="text" id="new-user-guardian" class="form-control" placeholder="Ej: Dra. Carmen Méndez" />
        </div>
      `;
    } else if (role === "Apoderado") {
      return `
        <div style="font-size: 12px; font-weight: 800; color: #92400e; margin-bottom: 6px;">👨‍👩‍👧 Datos de Contacto y Familia:</div>
        <div class="form-group" style="margin-bottom: 6px;">
          <label class="form-label" style="font-size: 11.5px; font-weight: 700;">Teléfono / Celular de Contacto (9 dígitos):</label>
          <input type="text" id="new-user-phone" class="form-control" placeholder="987-654-321" value="987-654-321" />
        </div>
        
        ${this.renderParentStudentsLinkerHTML("new-parent", [{ name: "Sofía Méndez Flores", grade: "4° de Secundaria", relationship: "Hijo/Hija", dni: "74891230" }])}
      `;
    } else if (role === "Auxiliar") {
      return `
        <div style="font-size: 12px; font-weight: 800; color: #0f766e; margin-bottom: 8px;">
          👮 Asignación de Turno & Zonas de Supervisión:
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <div class="form-group" style="margin-bottom: 6px;">
            <label class="form-label" style="font-size: 11.5px;">Turno Asignado:</label>
            <select id="new-user-shift" class="form-control" style="font-size: 12px;">
              <option value="Turno Mañana (07:00 AM - 02:30 PM)" selected>Turno Mañana (07:00 AM - 02:30 PM)</option>
              <option value="Turno Tarde (12:30 PM - 07:00 PM)">Turno Tarde (12:30 PM - 07:00 PM)</option>
              <option value="Jornada Completa">Jornada Completa</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 6px;">
            <label class="form-label" style="font-size: 11.5px;">Zona / Puerta Principal:</label>
            <input type="text" id="new-user-zone" class="form-control" value="Portería Puerta 1 & Pabellón Secundaria" />
          </div>
        </div>
        <div style="font-size: 11px; color: #047857; background: #ecfdf5; padding: 6px 10px; border-radius: 6px; border: 1px solid #a7f3d0; margin-top: 4px;">
          ✓ Este perfil tendrá acceso <strong>exclusivo</strong> al Escáner QR de Portería, Generador de Planchas QR, Parte Diario 08:30 AM y Lector de Cuadernos QR.
        </div>
      `;
    } else {
      return `
        <div style="font-size: 12px; font-weight: 800; color: #581c87; margin-bottom: 8px;">[Seguridad]️ Cargo Institucional & Despacho:</div>
        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label" style="font-size: 11.5px;">Cargo o Dependencia:</label>
          <select id="new-user-directivo-pos" class="form-control">
            <option value="Dirección General">Dirección General</option>
            <option value="Coordinación General & Documentación">Coordinación General & Documentación</option>
            <option value="Secretaría General & Matrículas">Secretaría General & Matrículas</option>
            <option value="Tesorería & Finanzas">Tesorería & Finanzas</option>
          </select>
        </div>
      `;
    }
  }

  autoGenerateUserCredentials() {
    const nameInput = document.getElementById("new-user-name");
    const userInput = document.getElementById("new-user-username");
    const emailInput = document.getElementById("new-user-email");
    const passInput = document.getElementById("new-user-pass");
    const roleInput = document.getElementById("new-user-role");

    if (nameInput && nameInput.value.trim()) {
      const clean = nameInput.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, '');
      const parts = clean.split(/\s+/).filter(Boolean);
      let username = "";
      if (parts.length >= 2) {
        username = `${parts[0]}.${parts[parts.length - 1]}`;
      } else if (parts.length === 1) {
        username = parts[0];
      }
      if (userInput) userInput.value = username;
      if (emailInput) emailInput.value = `${username}@eleducador.edu.pe`;
      if (passInput && roleInput) {
        const r = roleInput.value;
        passInput.value = (r === "Estudiante" ? "estudiante2026" : r === "Apoderado" ? "padre2026" : r === "Directivo" ? "admin2026" : "docente2026");
      }
    }
  }

  confirmCreateUser() {
    const name = document.getElementById("new-user-name").value.trim();
    const role = document.getElementById("new-user-role").value;
    const email = document.getElementById("new-user-email").value.trim();
    const username = document.getElementById("new-user-username").value.trim();
    const password = document.getElementById("new-user-pass").value.trim();
    const dni = document.getElementById("new-user-dni") ? document.getElementById("new-user-dni").value.trim() : "";
    const hasAdmin = document.getElementById("new-user-has-admin") ? document.getElementById("new-user-has-admin").checked : false;

    if (!name) {
      this.showToast("Por favor ingrese el nombre completo del usuario", "danger");
      return;
    }

    let detail = "";
    let subject = "";
    let assignedCourses = [];
    let assignedGrades = [];
    let weeklyHours = "";
    let studentName = "";
    let linkedStudents = [];
    let tutor = "";
    let guardian = "";
    let phone = "";
    let createdStudentsList = [];

    if (role === "Docente") {
      const checkedCourses = Array.from(document.querySelectorAll("input[name='new-user-courses-check']:checked")).map(cb => cb.value);
      assignedCourses = checkedCourses.length > 0 ? checkedCourses : ["Aritmética"];
      subject = assignedCourses.join(", ");

      weeklyHours = document.getElementById("new-user-hours") ? document.getElementById("new-user-hours").value.trim() : "24 hrs";
      const checkedBoxes = Array.from(document.querySelectorAll("input[name='new-user-grades-check']:checked")).map(cb => cb.value);
      assignedGrades = checkedBoxes.length > 0 ? checkedBoxes : ["4to de Secundaria"];
      
      const coursesSummary = assignedCourses.length <= 2 ? assignedCourses.join(', ') : `${assignedCourses.slice(0, 2).join(', ')} (+${assignedCourses.length - 2} más)`;
      detail = `${coursesSummary} • ${assignedGrades.length} grados / ${weeklyHours}`;
    } else if (role === "Estudiante") {
      const gSel = document.getElementById("new-user-grade-select");
      detail = gSel ? gSel.value : "4to de Secundaria";
      tutor = document.getElementById("new-user-tutor") ? document.getElementById("new-user-tutor").value.trim() : "";
      guardian = document.getElementById("new-user-guardian") ? document.getElementById("new-user-guardian").value.trim() : "";
    } else if (role === "Apoderado") {
      const rows = document.querySelectorAll("#new-parent-students-container .parent-student-row");
      linkedStudents = [];
      
      for (const r of rows) {
        const nameInp = r.querySelector(".parent-student-name");
        const relSel = r.querySelector(".parent-student-rel");
        const gradeSel = r.querySelector(".parent-student-grade");
        const dniInp = r.querySelector(".parent-student-dni");

        const stName = nameInp ? nameInp.value.trim() : "";
        const stGrade = gradeSel ? gradeSel.value : "4° de Secundaria";
        const stRel = relSel ? relSel.value : "Hijo/Hija";
        const stDni = dniInp ? dniInp.value.trim() : "";

        if (!stName) {
          this.showToast("⚠️ Debe ingresar el nombre completo de todos los estudiantes a registrar.", "danger");
          return;
        }

        // Generar credenciales de estudiante
        const cleanStName = stName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, '');
        const stParts = cleanStName.split(/\s+/).filter(Boolean);
        const stUsername = stParts.length >= 2 ? `${stParts[0]}.${stParts[stParts.length - 1]}` : (stParts[0] || `estudiante.${Date.now().toString().slice(-4)}`);
        const stEmail = `${stUsername}@eleducador.edu.pe`;
        const stPass = "estudiante2026";

        // Determinar tutor según nivel
        let defaultTutor = "Prof. Roberto Silva";
        if (stGrade.includes("Primaria")) defaultTutor = "Miss Julisa Arroyo";
        if (stGrade.includes("Inicial")) defaultTutor = "Miss Maritza";

        // Crear/Registrar perfil del estudiante en la base de datos
        const newStudentUser = this.store.createSystemUser({
          name: stName,
          role: "Estudiante",
          detail: stGrade,
          gradeLevel: stGrade,
          guardian: name, // Nombre del apoderado
          dni: stDni,
          username: stUsername,
          password: stPass,
          email: stEmail,
          tutor: defaultTutor,
          hasAdminPrivilege: false
        });

        createdStudentsList.push({
          name: stName,
          grade: stGrade,
          relationship: stRel,
          username: stUsername,
          password: stPass,
          dni: stDni
        });

        linkedStudents.push({
          name: stName,
          relationship: stRel,
          grade: stGrade,
          dni: stDni,
          username: stUsername
        });
      }

      if (linkedStudents.length < 1) {
        this.showToast("⚠️ Debe registrar como mínimo 1 estudiante para el perfil de apoderado.", "danger");
        return;
      }
      if (linkedStudents.length > 9) {
        this.showToast("⚠️ Un apoderado puede tener como máximo 9 estudiantes vinculados.", "danger");
        return;
      }

      phone = document.getElementById("new-user-phone") ? document.getElementById("new-user-phone").value.trim() : "987-654-321";
      studentName = linkedStudents.map(s => s.name).join(', ');
      detail = `Apoderado de ${linkedStudents.length} estudiante(s): ${linkedStudents.map(s => `${s.name} (${s.grade} - ${s.relationship})`).join(', ')}`;
    } else {
      const posSel = document.getElementById("new-user-directivo-pos");
      detail = posSel ? posSel.value : "Coordinación General";
    }

    const created = this.store.createSystemUser({
      name,
      role,
      detail,
      email: email || `${username || 'usuario'}@eleducador.edu.pe`,
      username: username || name.toLowerCase().replace(/\s+/g, '.'),
      password: password || (role === 'Apoderado' ? 'padre2026' : 'educador2026'),
      dni,
      phone,
      subject,
      courses: assignedCourses,
      assignedCourses,
      assignedGrades,
      weeklyHours,
      studentName,
      linkedStudents: linkedStudents.length > 0 ? linkedStudents : undefined,
      tutor,
      guardian,
      hasAdminPrivilege: hasAdmin
    });

    this.closeModal();

    if (role === "Apoderado") {
      this.showModal(`
        <div class="modal-header" style="background: #065f46; color: #ffffff;">
          <h3 style="color: #ffffff;">🎉 ¡Cuentas Creadas Exitosamente!</h3>
          <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
        </div>
        <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px; margin-bottom: 14px;">
            <div style="font-weight: 800; color: #1e3a8a; font-size: 13px; margin-bottom: 4px;">
              👨‍👩‍👧 Cuenta del Apoderado Registrada:
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px;">
              <div><strong>Nombre:</strong> ${name}</div>
              <div><strong>Teléfono:</strong> ${phone || '987-654-321'}</div>
              <div><strong>Usuario (@):</strong> <code>@${created.username}</code></div>
              <div><strong>Contraseña:</strong> <code>${created.password}</code></div>
            </div>
          </div>

          <div style="font-weight: 800; color: #065f46; font-size: 13px; margin-bottom: 8px;">
            🎒 ${createdStudentsList.length} Perfil(es) de Estudiante Creado(s) con Acceso a Intranet:
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${createdStudentsList.map((st, idx) => `
              <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <strong style="color: #065f46; font-size: 12.5px;">#${idx + 1} ${st.name}</strong>
                  <span class="status-badge status-primary" style="font-size: 11px;">${st.grade} (${st.relationship})</span>
                </div>
                <div style="display: flex; gap: 12px; font-size: 11.5px; color: #1f2937; flex-wrap: wrap;">
                  <span>DNI: <strong>${st.dni || 'N/A'}</strong></span>
                  <span>Usuario: <strong style="color: #047857;">@${st.username}</strong></span>
                  <span>Contraseña: <strong>${st.password}</strong></span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-navy" onclick="window.app.closeModal()" style="font-weight: 800; width: 100%;">
            ✓ Entendido y Guardado en Base de Datos
          </button>
        </div>
      `);
    } else if (role === "Docente") {
      this.showToast(`✓ Docente "${name}" registrado con ${assignedCourses.length} curso(s) y ${assignedGrades.length} grado(s) asignados`, "success");
    } else {
      this.showToast(`✓ Usuario "${name}" (${role}) registrado con éxito`, "success");
    }
  }

  openEditUserModal(userId) {
    const user = (this.store.state.systemUsers || []).find(u => u.id === userId);
    if (!user) return;

    const isDocente = user.role === 'Docente' || user.role === 'Profesor';
    const isApoderado = user.role === 'Apoderado' || user.role === 'Padre';

    const existingCourses = user.assignedCourses || user.courses || (user.subject ? user.subject.split(/,\s*/) : ["Aritmética"]);

    this.showModal(`
      <div class="modal-header">
        <h3>✏️ Editar Usuario: ${user.name}</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-3);">
          <div class="form-group">
            <label class="form-label">Nombre Completo:</label>
            <input type="text" id="edit-user-name" class="form-control" value="${user.name}" />
          </div>
          <div class="form-group">
            <label class="form-label">Rol / Perfil:</label>
            <select id="edit-user-role" class="form-control">
              <option value="Directivo" ${user.role === 'Directivo' ? 'selected' : ''}>[Seguridad]️ Directivo</option>
              <option value="Docente" ${user.role === 'Docente' ? 'selected' : ''}>👨‍[Colegio] Docente</option>
              <option value="Estudiante" ${user.role === 'Estudiante' ? 'selected' : ''}>🎒 Estudiante</option>
              <option value="Apoderado" ${user.role === 'Apoderado' ? 'selected' : ''}>👨‍👩‍👧 Apoderado</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3);">
          <div class="form-group">
            <label class="form-label">Usuario (@username):</label>
            <input type="text" id="edit-user-username" class="form-control" value="${user.username || ''}" />
          </div>
          <div class="form-group">
            <label class="form-label">Correo Institucional:</label>
            <input type="email" id="edit-user-email" class="form-control" value="${user.email || ''}" />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3);">
          <div class="form-group">
            <label class="form-label">Contraseña de Acceso:</label>
            <input type="text" id="edit-user-pass" class="form-control" value="${user.password || 'educador2026'}" />
          </div>
          <div class="form-group">
            <label class="form-label">DNI / Documento:</label>
            <input type="text" id="edit-user-dni" class="form-control" value="${user.dni || ''}" />
          </div>
        </div>

        ${isDocente ? `
          <div class="form-group" style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px; border-radius: 8px;">
            ${this.renderCoursesChecklistHTML("edit-user-courses", existingCourses)}
            ${this.renderGradesChecklistHTML("edit-user-grades", user.assignedGrades || ["1° de Secundaria", "2° de Secundaria", "3° de Secundaria", "4° de Secundaria", "5° de Secundaria"])}
          </div>
        ` : ''}

        ${isApoderado ? `
          <div class="form-group" style="margin-bottom: 6px;">
            <label class="form-label" style="font-size: 11.5px; font-weight: 700;">Teléfono / Celular de Contacto:</label>
            <input type="text" id="edit-user-phone" class="form-control" value="${user.phone || '987-654-321'}" />
          </div>
          ${this.renderParentStudentsLinkerHTML("edit-parent", user.linkedStudents || (user.studentName ? [{ name: user.studentName, grade: "4° de Secundaria", relationship: "Hijo/Hija" }] : [{ name: "Sofía Méndez Flores", grade: "4° de Secundaria", relationship: "Hijo/Hija" }]))}
        ` : ''}

        <div class="form-group">
          <label class="form-label">Detalle Adicional / Asignación:</label>
          <input type="text" id="edit-user-detail" class="form-control" value="${user.detail || ''}" />
        </div>

        <div class="form-group">
          <label style="display: flex; align-items: center; gap: 8px; font-weight: bold; color: var(--color-navy-900); cursor: pointer; background: var(--color-yellow-50); padding: 10px; border: 1px dashed var(--color-yellow-500); border-radius: 8px;">
            <input type="checkbox" id="edit-user-has-admin" ${user.hasAdminPrivilege ? 'checked' : ''} />
            <span>★ Conceder Privilegios de Administrador (Edición de Horarios, Sílabus, Notas)</span>
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmUpdateUser('${user.id}')" style="font-weight: 800;">
          ✓ Guardar Cambios en Servidor
        </button>
      </div>
    `);
  }

  confirmUpdateUser(userId) {
    const name = document.getElementById("edit-user-name").value.trim();
    const role = document.getElementById("edit-user-role").value;
    const username = document.getElementById("edit-user-username").value.trim();
    const email = document.getElementById("edit-user-email").value.trim();
    const password = document.getElementById("edit-user-pass").value.trim();
    const dni = document.getElementById("edit-user-dni").value.trim();
    let detail = document.getElementById("edit-user-detail").value.trim();
    const hasAdmin = document.getElementById("edit-user-has-admin").checked;

    let assignedCourses = undefined;
    let subject = undefined;
    let assignedGrades = undefined;

    if (role === "Docente" || role === "Profesor") {
      const checkedCourses = Array.from(document.querySelectorAll("input[name='edit-user-courses-check']:checked")).map(cb => cb.value);
      assignedCourses = checkedCourses.length > 0 ? checkedCourses : ["Aritmética"];
      subject = assignedCourses.join(", ");

      const checkedBoxes = Array.from(document.querySelectorAll("input[name='edit-user-grades-check']:checked")).map(cb => cb.value);
      assignedGrades = checkedBoxes.length > 0 ? checkedBoxes : undefined;

      const coursesSummary = assignedCourses.length <= 2 ? assignedCourses.join(', ') : `${assignedCourses.slice(0, 2).join(', ')} (+${assignedCourses.length - 2} más)`;
      detail = `${coursesSummary} • ${assignedGrades ? assignedGrades.length : 1} grados`;
    }

    let phone = undefined;
    let studentName = undefined;
    let linkedStudents = undefined;

    if (role === "Apoderado") {
      const rows = document.querySelectorAll("#edit-parent-students-container .parent-student-row");
      linkedStudents = [];
      
      for (const r of rows) {
        const nameInp = r.querySelector(".parent-student-name");
        const relSel = r.querySelector(".parent-student-rel");
        const gradeSel = r.querySelector(".parent-student-grade");
        const dniInp = r.querySelector(".parent-student-dni");

        const stName = nameInp ? nameInp.value.trim() : "";
        const stGrade = gradeSel ? gradeSel.value : "4° de Secundaria";
        const stRel = relSel ? relSel.value : "Hijo/Hija";
        const stDni = dniInp ? dniInp.value.trim() : "";

        if (stName) {
          // Si el estudiante no existe en DB, crearlo
          const studentExists = (this.store.state.systemUsers || []).some(u => 
            (u.role === 'Estudiante' || u.role === 'Alumno') && u.name.trim().toLowerCase() === stName.toLowerCase()
          );

          const cleanStName = stName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, '');
          const stParts = cleanStName.split(/\s+/).filter(Boolean);
          const stUsername = stParts.length >= 2 ? `${stParts[0]}.${stParts[stParts.length - 1]}` : (stParts[0] || `estudiante.${Date.now().toString().slice(-4)}`);

          if (!studentExists) {
            let defaultTutor = "Prof. Roberto Silva";
            if (stGrade.includes("Primaria")) defaultTutor = "Miss Julisa Arroyo";
            if (stGrade.includes("Inicial")) defaultTutor = "Miss Maritza";

            this.store.createSystemUser({
              name: stName,
              role: "Estudiante",
              detail: stGrade,
              gradeLevel: stGrade,
              guardian: name,
              dni: stDni,
              username: stUsername,
              password: "estudiante2026",
              email: `${stUsername}@eleducador.edu.pe`,
              tutor: defaultTutor,
              hasAdminPrivilege: false
            });
          }

          linkedStudents.push({
            name: stName,
            relationship: stRel,
            grade: stGrade,
            dni: stDni,
            username: stUsername
          });
        }
      }

      if (linkedStudents.length < 1) {
        this.showToast("⚠️ Debe registrar como mínimo 1 estudiante para el apoderado.", "danger");
        return;
      }
      if (linkedStudents.length > 9) {
        this.showToast("⚠️ El máximo permitido es de 9 estudiantes por apoderado.", "danger");
        return;
      }

      const phoneInp = document.getElementById("edit-user-phone");
      if (phoneInp) phone = phoneInp.value.trim();
      studentName = linkedStudents.map(s => s.name).join(', ');
      detail = `Apoderado de ${linkedStudents.length} estudiante(s): ${linkedStudents.map(s => `${s.name} (${s.grade} - ${s.relationship})`).join(', ')}`;
    }

    if (!name) {
      this.showToast("El nombre no puede estar vacío", "danger");
      return;
    }

    this.store.updateSystemUser(userId, {
      name,
      role,
      username,
      email,
      password,
      dni,
      phone: phone || undefined,
      detail: detail || subject,
      subject: subject || undefined,
      courses: assignedCourses,
      assignedCourses: assignedCourses,
      assignedGrades: assignedGrades,
      studentName: studentName || undefined,
      linkedStudents: linkedStudents && linkedStudents.length > 0 ? linkedStudents : undefined,
      hasAdminPrivilege: hasAdmin
    });

    this.closeModal();
    this.showToast(`✓ Datos del usuario "${name}" actualizados con éxito`, "success");
  }

  toggleTeacherAdminPrivilege(userId) {
    const res = this.store.toggleTeacherAdminPrivilege(userId);
    if (res !== null) {
      this.showToast(res ? "★ Privilegios de Edición CONCEDIDOS" : "Privilegios revocados", res ? "success" : "info");
    }
  }

  confirmDeleteUser(userId) {
    const user = (this.store.state.systemUsers || []).find(u => u.id === userId);
    const name = user ? user.name : "este usuario";
    if (confirm(`¿Está seguro de eliminar a ${name} de la base de datos?`)) {
      this.store.deleteSystemUser(userId);
      this.showToast(`Usuario "${name}" eliminado de la base de datos`, "info");
    }
  }

  // =========================================================================
  // GESTIÓN INTEGRAL DE MATRÍCULAS, FICHA ÚNICA (FUM), SALUD Y DOCUMENTOS
  // =========================================================================

  openCreateEnrollmentModal() {
    this.showModal(`
      <div class="modal-header" style="background: #1e3a8a; color: #ffffff;">
        <h3 style="color: #ffffff;">📝 Nueva Matrícula & Ficha Única de Matrícula (FUM 2026)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        
        <!-- Pestañas del Formulario FUM -->
        <div style="display: flex; gap: 6px; margin-bottom: 14px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; flex-wrap: wrap;">
          <button type="button" class="btn btn-navy btn-sm" id="fum-tab-btn-1" onclick="window.app.switchFUMTab('1')" style="font-weight: 800; font-size: 11px;">
            [Expediente] 1. Datos del Alumno & SIAGIE
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="fum-tab-btn-2" onclick="window.app.switchFUMTab('2')" style="font-weight: 800; font-size: 11px;">
            👨‍👩‍👧 2. Apoderado & Emergencia
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="fum-tab-btn-3" onclick="window.app.switchFUMTab('3')" style="font-weight: 800; font-size: 11px;">
            🩺 3. Ficha Médica & Salud
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="fum-tab-btn-4" onclick="window.app.switchFUMTab('4')" style="font-weight: 800; font-size: 11px;">
            📎 4. Documentos Digitales
          </button>
        </div>

        <!-- TAB 1: DATOS DEL ESTUDIANTE -->
        <div id="fum-tab-content-1" class="fum-tab-pane">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Nombres y Apellidos Completos:</label>
              <input type="text" id="new-matr-name" class="form-control" placeholder="Ej: Joaquín Urbizagasti Huamán" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">DNI (8 dígitos):</label>
              <input type="text" id="new-matr-dni" class="form-control" placeholder="78912345" maxlength="8" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Código SIAGIE:</label>
              <input type="text" id="new-matr-siagie" class="form-control" placeholder="2026-78912345" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Fecha de Nacimiento:</label>
              <input type="text" id="new-matr-birth" class="form-control" placeholder="12/04/2012" value="12/04/2012" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Sexo:</label>
              <select id="new-matr-gender" class="form-control">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Nivel & Grado a Matricular:</label>
              <select id="new-matr-grade" class="form-control" style="font-weight: bold; border-color: #3b82f6;">
                <optgroup label="Secundaria">
                  <option value="1° de Secundaria">1° de Secundaria</option>
                  <option value="2° de Secundaria">2° de Secundaria</option>
                  <option value="3° de Secundaria">3° de Secundaria</option>
                  <option value="4° de Secundaria" selected>4° de Secundaria</option>
                  <option value="5° de Secundaria">5° de Secundaria</option>
                </optgroup>
                <optgroup label="Primaria">
                  <option value="1° de Primaria">1° de Primaria</option>
                  <option value="2° de Primaria">2° de Primaria</option>
                  <option value="3° de Primaria">3° de Primaria</option>
                  <option value="4° de Primaria">4° de Primaria</option>
                  <option value="5° de Primaria">5° de Primaria</option>
                  <option value="6° de Primaria">6° de Primaria</option>
                </optgroup>
                <optgroup label="Inicial">
                  <option value="Inicial 3 años">Inicial 3 años</option>
                  <option value="Inicial 4 años">Inicial 4 años</option>
                  <option value="Inicial 5 años">Inicial 5 años</option>
                </optgroup>
              </select>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Dirección de Residencia:</label>
              <input type="text" id="new-matr-address" class="form-control" placeholder="Av. Los Tusílagos 450, S.J.L." value="San Juan de Lurigancho, Lima" />
            </div>
          </div>
        </div>

        <!-- TAB 2: APODERADO Y CONTACTOS DE EMERGENCIA -->
        <div id="fum-tab-content-2" class="fum-tab-pane" style="display: none;">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Apoderado / Tutor Legal:</label>
              <input type="text" id="new-matr-guardian" class="form-control" placeholder="Ej: Dra. Carmen Méndez" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">DNI del Apoderado:</label>
              <input type="text" id="new-matr-guardiandni" class="form-control" placeholder="41982301" maxlength="8" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Teléfono Celular / WhatsApp:</label>
              <input type="text" id="new-matr-guardianphone" class="form-control" placeholder="987-654-321" value="987-654-321" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Correo Electrónico:</label>
              <input type="email" id="new-matr-guardianemail" class="form-control" placeholder="apoderado@gmail.com" />
            </div>
          </div>

          <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 10px;">
            <div style="font-size: 11.5px; font-weight: 800; color: #92400e; margin-bottom: 6px;">📞 Contacto Secundario de Emergencia:</div>
            <div style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 10px;">
              <input type="text" id="new-matr-emergencycontact" class="form-control" placeholder="Familiar de contacto (ej: Tío/Abuela)" value="Familiar de Emergencia" style="font-size: 11.5px;" />
              <input type="text" id="new-matr-emergencyphone" class="form-control" placeholder="981-555-444" value="981-555-444" style="font-size: 11.5px;" />
            </div>
          </div>
        </div>

        <!-- TAB 3: FICHA MÉDICA Y SALUD -->
        <div id="fum-tab-content-3" class="fum-tab-pane" style="display: none;">
          <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Grupo Sanguíneo & Factor:</label>
              <select id="new-matr-blood" class="form-control" style="font-weight: bold;">
                <option value="O+">O Positivo (O+)</option>
                <option value="O-">O Negativo (O-)</option>
                <option value="A+">A Positivo (A+)</option>
                <option value="A-">A Negativo (A-)</option>
                <option value="B+">B Positivo (B+)</option>
                <option value="B-">B Negativo (B-)</option>
                <option value="AB+">AB Positivo (AB+)</option>
                <option value="AB-">AB Negativo (AB-)</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Seguro de Salud:</label>
              <select id="new-matr-insurance" class="form-control">
                <option value="EsSalud (Activo)">EsSalud (Activo)</option>
                <option value="SIS Escolar (MINSA)">SIS Escolar (MINSA)</option>
                <option value="Seguro Particular (Rímac / Pacífico / Mapfre)">Seguro Particular (Rímac / Pacífico / Mapfre)</option>
                <option value="Sin Seguro / En Trámite">Sin Seguro / En Trámite</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Alergias (Medicamentos / Alimentos):</label>
            <input type="text" id="new-matr-allergies" class="form-control" placeholder="Ej: Alergia a la Penicilina / Ninguna conocida" value="Sin alergias conocidas" />
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Condición Médica / Apto para Educación Física:</label>
            <input type="text" id="new-matr-medical" class="form-control" placeholder="Ej: Apto para educación física y deportes / Asma leve controlada" value="Apto para actividad física y talleres" />
          </div>
        </div>

        <!-- TAB 4: REQUISITOS Y DOCUMENTOS DIGITALES -->
        <div id="fum-tab-content-4" class="fum-tab-pane" style="display: none;">
          <div style="font-size: 12px; font-weight: 800; color: #1e3a8a; margin-bottom: 8px;">
            📎 Checklist de Requisitos Documentarios (UGEL 05 - MINEDU):
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #cbd5e1;">
            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700; color: #1e293b;">[Documento] Copia de DNI del Estudiante</span>
              <input type="checkbox" id="chk-doc-dnistudent" checked style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700; color: #1e293b;">[Documento] Copia de DNI del Padre / Madre / Apoderado</span>
              <input type="checkbox" id="chk-doc-dniparent" checked style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700; color: #1e293b;">[Documento] Partida / Acta de Nacimiento (Original o Copia Legalizada)</span>
              <input type="checkbox" id="chk-doc-birthcert" checked style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700; color: #1e293b;">[Documento] Ficha Única de Matrícula SIAGIE (Traslado / Continuidad)</span>
              <input type="checkbox" id="chk-doc-siagiefum" checked style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700; color: #1e293b;">[Documento] Certificado de Estudios / Libreta de Notas 2025</span>
              <input type="checkbox" id="chk-doc-reportcard" checked style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700; color: #1e293b;">[Documento] Cartilla de Vacunación Completa (Nivel Inicial/Primaria)</span>
              <input type="checkbox" id="chk-doc-vaccine" checked style="transform: scale(1.2);" />
            </label>
          </div>
        </div>

      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmCreateEnrollment()" style="font-weight: 800; padding: 8px 20px;">
          ✓ Guardar Matrícula & Generar Ficha FUM
        </button>
      </div>
    `);
  }

  switchFUMTab(tabNum) {
    for (let i = 1; i <= 4; i++) {
      const pane = document.getElementById(`fum-tab-content-${i}`);
      const btn = document.getElementById(`fum-tab-btn-${i}`);
      if (pane) pane.style.display = (i.toString() === tabNum ? "block" : "none");
      if (btn) {
        btn.className = (i.toString() === tabNum ? "btn btn-navy btn-sm" : "btn btn-outline btn-sm");
      }
    }
  }

  confirmCreateEnrollment() {
    const studentName = document.getElementById("new-matr-name").value.trim();
    const dni = document.getElementById("new-matr-dni").value.trim();
    const siagieCode = document.getElementById("new-matr-siagie").value.trim() || `2026-${dni || '78912345'}`;
    const birthDate = document.getElementById("new-matr-birth").value.trim() || "12/04/2012";
    const gender = document.getElementById("new-matr-gender").value;
    const grade = document.getElementById("new-matr-grade").value;
    const address = document.getElementById("new-matr-address").value.trim() || "San Juan de Lurigancho";

    const guardian = document.getElementById("new-matr-guardian").value.trim() || "Apoderado Titular";
    const guardianDni = document.getElementById("new-matr-guardiandni").value.trim() || "41982301";
    const guardianPhone = document.getElementById("new-matr-guardianphone").value.trim() || "987-654-321";
    const guardianEmail = document.getElementById("new-matr-guardianemail").value.trim() || "apoderado@gmail.com";
    const emergencyContact = document.getElementById("new-matr-emergencycontact").value.trim() || guardian;
    const emergencyPhone = document.getElementById("new-matr-emergencyphone").value.trim() || guardianPhone;

    const bloodType = document.getElementById("new-matr-blood").value;
    const insurance = document.getElementById("new-matr-insurance").value;
    const allergies = document.getElementById("new-matr-allergies").value.trim() || "Sin alergias conocidas";
    const medicalCondition = document.getElementById("new-matr-medical").value.trim() || "Apto para actividades escolares";

    const documents = {
      dniStudent: document.getElementById("chk-doc-dnistudent") ? document.getElementById("chk-doc-dnistudent").checked : true,
      dniParent: document.getElementById("chk-doc-dniparent") ? document.getElementById("chk-doc-dniparent").checked : true,
      birthCertificate: document.getElementById("chk-doc-birthcert") ? document.getElementById("chk-doc-birthcert").checked : true,
      siagieFUM: document.getElementById("chk-doc-siagiefum") ? document.getElementById("chk-doc-siagiefum").checked : true,
      reportCard: document.getElementById("chk-doc-reportcard") ? document.getElementById("chk-doc-reportcard").checked : true,
      vaccinationCard: document.getElementById("chk-doc-vaccine") ? document.getElementById("chk-doc-vaccine").checked : true
    };

    if (!studentName) {
      this.showToast("⚠️ Ingrese el nombre completo del estudiante", "danger");
      return;
    }

    const created = this.store.createEnrollment({
      studentName,
      dni: dni || "Pendiente",
      siagieCode,
      birthDate,
      gender,
      grade,
      address,
      guardian,
      guardianDni,
      guardianPhone,
      guardianEmail,
      emergencyContact,
      emergencyPhone,
      bloodType,
      insurance,
      allergies,
      medicalCondition,
      documents,
      status: "Matriculado (FUM Completa)"
    });

    this.closeModal();
    this.render();
    this.showToast(`✓ Estudiante "${studentName}" matriculado y Código QR generado.`, "success");

    // Desplegar modal inmediato con el Código QR Generado
    setTimeout(() => {
      this.showModal(`
        <div class="modal-header" style="background: linear-gradient(135deg, #0b132b 0%, #1e3a8a 100%); color: white;">
          <div>
            <h3 class="modal-title" style="color: white; margin: 0; font-size: 15px;">
              🎉 ¡Estudiante Matriculado & Código QR Generado Automáticamente!
            </h3>
            <span style="font-size: 11px; color: #fde047;">I.E.P. "El Educador" • Año Lectivo 2026</span>
          </div>
          <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
        </div>

        <div class="modal-body" style="padding: 20px; text-align: center; background: #f8fafc;">
          
          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 8px 12px; border-radius: 6px; margin-bottom: 14px; font-size: 12px; color: #065f46; font-weight: bold;">
            ✓ El código QR oficial ha sido generado y vinculado al sistema de asistencia en puerta e informes.
          </div>

          <!-- Tarjeta Oficial de Código QR Escolar (Sin Foto) -->
          <div style="max-width: 300px; margin: 0 auto; background: #ffffff; border: 3px solid #1e3a8a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #0b132b 0%, #1e3a8a 100%); color: white; padding: 10px; border-bottom: 3px solid #f59e0b;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo" style="width: 26px; height: 26px; object-fit: contain;" />
                <div style="text-align: center;">
                  <div style="font-size: 10.5px; font-weight: 900; color: #fde047;">I.E.P. "EL EDUCADOR"</div>
                  <div style="font-size: 8px; opacity: 0.9;">ASISTENCIA & CONVIVENCIA 2026</div>
                </div>
              </div>
            </div>

            <div style="padding: 16px 12px;">
              <div style="width: 155px; height: 155px; margin: 0 auto 12px; border: 2px solid #0b132b; border-radius: 8px; padding: 6px; background: white;">
                ${Components.generateQRSVG(created.studentCode)}
              </div>

              <div style="font-size: 14px; font-weight: 900; color: #0b132b; text-transform: uppercase; line-height: 1.2; margin-bottom: 4px;">
                ${created.studentName}
              </div>
              <div style="font-size: 12px; font-weight: 800; color: #1e40af; margin-bottom: 6px;">
                ${created.grade}
              </div>
              <div style="font-size: 10.5px; color: #475569; background: #f1f5f9; padding: 3px 8px; border-radius: 4px; display: inline-block;">
                <strong>CÓD:</strong> <code>${created.studentCode}</code> • <strong>DNI:</strong> <code>${created.dni}</code>
              </div>
            </div>
          </div>

        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
          <button class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cerrar</button>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-navy btn-sm" onclick="window.print()" style="font-weight: 800;">
              [Imprimir] Imprimir Tarjeta QR
            </button>
            <button class="btn btn-outline btn-sm" onclick="window.app.showOfficialFUMPrintModal('${created.id}')" style="font-size: 11px;">
              [Documento] Ver Ficha FUM A4
            </button>
            <button class="btn btn-gold btn-sm" onclick="window.app.closeModal(); window.app.navigate('attendance'); window.app.setAttendanceSubTab('id-cards');" style="font-weight: 800;">
              [Imprimir] Ir a Plancha de QR
            </button>
          </div>
        </div>
      `);
    }, 300);
  }

  openEditEnrollmentFUMModal(enrollmentId) {
    const enrollments = this.store.getEnrollments();
    const m = enrollments.find(e => e.id === enrollmentId || e.studentCode === enrollmentId) || enrollments[0];
    if (!m) return;

    const docs = m.documents || {};

    this.showModal(`
      <div class="modal-header" style="background: #1e3a8a; color: #ffffff;">
        <h3 style="color: #ffffff;">✏️ Expediente FUM & Ficha Médica: ${m.studentName}</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        
        <!-- Pestañas del Formulario FUM -->
        <div style="display: flex; gap: 6px; margin-bottom: 14px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; flex-wrap: wrap;">
          <button type="button" class="btn btn-navy btn-sm" id="edit-fum-tab-btn-1" onclick="window.app.switchEditFUMTab('1')" style="font-weight: 800; font-size: 11px;">
            [Expediente] 1. Datos del Alumno & SIAGIE
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="edit-fum-tab-btn-2" onclick="window.app.switchEditFUMTab('2')" style="font-weight: 800; font-size: 11px;">
            👨‍👩‍👧 2. Apoderado & Emergencia
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="edit-fum-tab-btn-3" onclick="window.app.switchEditFUMTab('3')" style="font-weight: 800; font-size: 11px;">
            🩺 3. Ficha Médica & Salud
          </button>
          <button type="button" class="btn btn-outline btn-sm" id="edit-fum-tab-btn-4" onclick="window.app.switchEditFUMTab('4')" style="font-weight: 800; font-size: 11px;">
            📎 4. Documentos Digitales
          </button>
        </div>

        <!-- TAB 1: DATOS DEL ESTUDIANTE -->
        <div id="edit-fum-tab-content-1" class="fum-tab-pane">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Nombre Completo:</label>
              <input type="text" id="edit-matr-name" class="form-control" value="${m.studentName}" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">DNI:</label>
              <input type="text" id="edit-matr-dni" class="form-control" value="${m.dni || ''}" maxlength="8" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Código SIAGIE:</label>
              <input type="text" id="edit-matr-siagie" class="form-control" value="${m.siagieCode || m.dni || ''}" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Fecha de Nacimiento:</label>
              <input type="text" id="edit-matr-birth" class="form-control" value="${m.birthDate || '14/05/2010'}" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Sexo:</label>
              <select id="edit-matr-gender" class="form-control">
                <option value="Femenino" ${m.gender === 'Femenino' ? 'selected' : ''}>Femenino</option>
                <option value="Masculino" ${m.gender === 'Masculino' ? 'selected' : ''}>Masculino</option>
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Grado:</label>
              <input type="text" id="edit-matr-grade" class="form-control" value="${m.grade}" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Dirección:</label>
              <input type="text" id="edit-matr-address" class="form-control" value="${m.address || 'San Juan de Lurigancho'}" />
            </div>
          </div>
        </div>

        <!-- TAB 2: APODERADO -->
        <div id="edit-fum-tab-content-2" class="fum-tab-pane" style="display: none;">
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Apoderado Titular:</label>
              <input type="text" id="edit-matr-guardian" class="form-control" value="${m.guardian}" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">DNI Apoderado:</label>
              <input type="text" id="edit-matr-guardiandni" class="form-control" value="${m.guardianDni || '41982301'}" maxlength="8" />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Teléfono Celular:</label>
              <input type="text" id="edit-matr-guardianphone" class="form-control" value="${m.guardianPhone || '987-654-321'}" />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Correo:</label>
              <input type="email" id="edit-matr-guardianemail" class="form-control" value="${m.guardianEmail || ''}" />
            </div>
          </div>

          <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 10px;">
            <div style="font-size: 11.5px; font-weight: 800; color: #92400e; margin-bottom: 6px;">📞 Contacto Secundario de Emergencia:</div>
            <div style="display: grid; grid-template-columns: 2fr 1.2fr; gap: 10px;">
              <input type="text" id="edit-matr-emergencycontact" class="form-control" value="${m.emergencyContact || ''}" placeholder="Nombre de familiar" />
              <input type="text" id="edit-matr-emergencyphone" class="form-control" value="${m.emergencyPhone || ''}" placeholder="Teléfono" />
            </div>
          </div>
        </div>

        <!-- TAB 3: SALUD -->
        <div id="edit-fum-tab-content-3" class="fum-tab-pane" style="display: none;">
          <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 10px; margin-bottom: 10px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Grupo Sanguíneo:</label>
              <select id="edit-matr-blood" class="form-control" style="font-weight: bold;">
                <option value="O+" ${m.bloodType === 'O+' ? 'selected' : ''}>O Positivo (O+)</option>
                <option value="O-" ${m.bloodType === 'O-' ? 'selected' : ''}>O Negativo (O-)</option>
                <option value="A+" ${m.bloodType === 'A+' ? 'selected' : ''}>A Positivo (A+)</option>
                <option value="A-" ${m.bloodType === 'A-' ? 'selected' : ''}>A Negativo (A-)</option>
                <option value="B+" ${m.bloodType === 'B+' ? 'selected' : ''}>B Positivo (B+)</option>
                <option value="B-" ${m.bloodType === 'B-' ? 'selected' : ''}>B Negativo (B-)</option>
                <option value="AB+" ${m.bloodType === 'AB+' ? 'selected' : ''}>AB Positivo (AB+)</option>
                <option value="AB-" ${m.bloodType === 'AB-' ? 'selected' : ''}>AB Negativo (AB-)</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Seguro de Salud:</label>
              <input type="text" id="edit-matr-insurance" class="form-control" value="${m.insurance || 'EsSalud / SIS'}" />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 10px;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Alergias:</label>
            <input type="text" id="edit-matr-allergies" class="form-control" value="${m.allergies || 'Sin alergias conocidas'}" />
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Condición Médica / Actividad Física:</label>
            <input type="text" id="edit-matr-medical" class="form-control" value="${m.medicalCondition || 'Apto para actividad física'}" />
          </div>
        </div>

        <!-- TAB 4: DOCUMENTOS -->
        <div id="edit-fum-tab-content-4" class="fum-tab-pane" style="display: none;">
          <div style="font-size: 12px; font-weight: 800; color: #1e3a8a; margin-bottom: 8px;">
            📎 Estado de Requisitos y Documentación Sustentatoria:
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #cbd5e1;">
            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700;">[Documento] Copia de DNI del Estudiante</span>
              <input type="checkbox" id="edit-chk-dnistudent" ${docs.dniStudent ? 'checked' : ''} style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700;">[Documento] Copia de DNI del Padre / Madre / Apoderado</span>
              <input type="checkbox" id="edit-chk-dniparent" ${docs.dniParent ? 'checked' : ''} style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700;">[Documento] Partida / Acta de Nacimiento</span>
              <input type="checkbox" id="edit-chk-birthcert" ${docs.birthCertificate ? 'checked' : ''} style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700;">[Documento] Ficha Única de Matrícula SIAGIE</span>
              <input type="checkbox" id="edit-chk-siagiefum" ${docs.siagieFUM ? 'checked' : ''} style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700;">[Documento] Certificado de Estudios / Libreta de Notas</span>
              <input type="checkbox" id="edit-chk-reportcard" ${docs.reportCard ? 'checked' : ''} style="transform: scale(1.2);" />
            </label>

            <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <span style="font-size: 12px; font-weight: 700;">[Documento] Cartilla de Vacunación</span>
              <input type="checkbox" id="edit-chk-vaccine" ${docs.vaccinationCard ? 'checked' : ''} style="transform: scale(1.2);" />
            </label>
          </div>
        </div>

      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmUpdateEnrollmentFUM('${m.id}')" style="font-weight: 800; padding: 8px 20px;">
          ✓ Guardar Cambios en FUM
        </button>
      </div>
    `);
  }

  switchEditFUMTab(tabNum) {
    for (let i = 1; i <= 4; i++) {
      const pane = document.getElementById(`edit-fum-tab-content-${i}`);
      const btn = document.getElementById(`edit-fum-tab-btn-${i}`);
      if (pane) pane.style.display = (i.toString() === tabNum ? "block" : "none");
      if (btn) {
        btn.className = (i.toString() === tabNum ? "btn btn-navy btn-sm" : "btn btn-outline btn-sm");
      }
    }
  }

  confirmUpdateEnrollmentFUM(enrollmentId) {
    const studentName = document.getElementById("edit-matr-name").value.trim();
    const dni = document.getElementById("edit-matr-dni").value.trim();
    const siagieCode = document.getElementById("edit-matr-siagie").value.trim();
    const birthDate = document.getElementById("edit-matr-birth").value.trim();
    const gender = document.getElementById("edit-matr-gender").value;
    const grade = document.getElementById("edit-matr-grade").value.trim();
    const address = document.getElementById("edit-matr-address").value.trim();

    const guardian = document.getElementById("edit-matr-guardian").value.trim();
    const guardianDni = document.getElementById("edit-matr-guardiandni").value.trim();
    const guardianPhone = document.getElementById("edit-matr-guardianphone").value.trim();
    const guardianEmail = document.getElementById("edit-matr-guardianemail").value.trim();
    const emergencyContact = document.getElementById("edit-matr-emergencycontact").value.trim();
    const emergencyPhone = document.getElementById("edit-matr-emergencyphone").value.trim();

    const bloodType = document.getElementById("edit-matr-blood").value;
    const insurance = document.getElementById("edit-matr-insurance").value.trim();
    const allergies = document.getElementById("edit-matr-allergies").value.trim();
    const medicalCondition = document.getElementById("edit-matr-medical").value.trim();

    const documents = {
      dniStudent: document.getElementById("edit-chk-dnistudent") ? document.getElementById("edit-chk-dnistudent").checked : true,
      dniParent: document.getElementById("edit-chk-dniparent") ? document.getElementById("edit-chk-dniparent").checked : true,
      birthCertificate: document.getElementById("edit-chk-birthcert") ? document.getElementById("edit-chk-birthcert").checked : true,
      siagieFUM: document.getElementById("edit-chk-siagiefum") ? document.getElementById("edit-chk-siagiefum").checked : true,
      reportCard: document.getElementById("edit-chk-reportcard") ? document.getElementById("edit-chk-reportcard").checked : true,
      vaccinationCard: document.getElementById("edit-chk-vaccine") ? document.getElementById("edit-chk-vaccine").checked : true
    };

    this.store.updateEnrollmentFUM(enrollmentId, {
      studentName,
      dni,
      siagieCode,
      birthDate,
      gender,
      grade,
      address,
      guardian,
      guardianDni,
      guardianPhone,
      guardianEmail,
      emergencyContact,
      emergencyPhone,
      bloodType,
      insurance,
      allergies,
      medicalCondition,
      documents
    });

    this.closeModal();
    this.render();
    this.showToast(`✓ Ficha FUM de "${studentName}" actualizada exitosamente.`, "success");
  }

  showOfficialFUMPrintModal(enrollmentId) {
    const enrollments = this.store.getEnrollments();
    const m = enrollments.find(e => e.id === enrollmentId || e.studentCode === enrollmentId) || enrollments[0];
    if (!m) return;

    const docs = m.documents || {};

    this.showModal(`
      <div class="modal-header" style="background: #0f172a; color: #ffffff;">
        <h3 style="color: #ffffff;">[Documento] Ficha Única de Matrícula Oficial (F.U.M. 2026)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 80vh; overflow-y: auto; padding: 24px; background: #ffffff;">
        
        <!-- MEMBRETE OFICIAL MINEDU / UGEL 05 -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0b132b; padding-bottom: 12px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo I.E.P. El Educador" style="width: 70px; height: 70px; object-fit: contain;" />
            <div>
              <div style="font-size: 11px; font-weight: 900; color: #1e3a8a; text-transform: uppercase;">REPÚBLICA DEL PERÚ • MINISTERIO DE EDUCACIÓN</div>
              <div style="font-size: 10px; color: #64748b;">DRELM • UGEL 05 SAN JUAN DE LURIGANCHO</div>
              <h2 style="font-size: 17px; font-weight: 900; margin: 2px 0; color: #0b132b;">I.E.P. "EL EDUCADOR"</h2>
              <div style="font-size: 10.5px; color: #b45309; font-weight: 700;">"21 años dejando huellas en la formación de líderes"</div>
            </div>
          </div>
          <div style="text-align: right; border-left: 2px solid #e2e8f0; padding-left: 12px;">
            <div style="font-size: 10px; font-weight: 800; color: #475569;">CÓDIGO MODULAR:</div>
            <div style="font-size: 10px;">Inicial: <strong>0614826</strong></div>
            <div style="font-size: 10px;">Primaria: <strong>0614834</strong></div>
            <div style="font-size: 10px;">Secundaria: <strong>0729483</strong></div>
            <div style="font-size: 11px; font-weight: 900; color: #1e40af; margin-top: 2px;">AÑO LECTIVO 2026</div>
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 16px;">
          <h3 style="font-size: 15px; font-weight: 900; color: #0b132b; text-transform: uppercase; letter-spacing: 0.5px; margin: 0;">
            FICHA ÚNICA DE MATRÍCULA - F.U.M. N° ${m.studentCode}
          </h3>
          <span style="font-size: 11px; color: #047857; font-weight: 800; background: #d1fae5; padding: 2px 10px; border-radius: 10px; border: 1px solid #a7f3d0; display: inline-block; margin-top: 4px;">
            ✓ ESTADO: MATRICULADO OFICIALMENTE EN SIAGIE
          </span>
        </div>

        <!-- SECCIÓN I: DATOS DEL ESTUDIANTE -->
        <div style="border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 12px; overflow: hidden;">
          <div style="background: #f1f5f9; padding: 6px 12px; font-size: 11.5px; font-weight: 900; color: #1e3a8a; border-bottom: 1px solid #cbd5e1;">
            I. DATOS DE IDENTIFICACIÓN DEL ESTUDIANTE
          </div>
          <div style="padding: 10px 12px; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 8px; font-size: 12px;">
            <div><strong>Apellidos y Nombres:</strong> <br><span style="font-size: 13px; color: #0b132b; font-weight: bold;">${m.studentName}</span></div>
            <div><strong>DNI:</strong> <br><span>${m.dni}</span></div>
            <div><strong>Cód. SIAGIE:</strong> <br><span style="font-family: monospace; font-weight: bold; color: #1e40af;">${m.siagieCode || m.dni}</span></div>
            <div><strong>Grado y Nivel:</strong> <br><span style="font-weight: bold;">${m.grade}</span> (${m.level || 'Secundaria'})</div>
            <div><strong>Fecha de Nacimiento:</strong> <br><span>${m.birthDate || '14/05/2010'}</span></div>
            <div><strong>Sexo:</strong> <br><span>${m.gender || 'Femenino'}</span></div>
            <div style="grid-column: span 3;"><strong>Domicilio Actual:</strong> <br><span>${m.address || 'Av. Próceres de la Independencia 1420, San Juan de Lurigancho, Lima'}</span></div>
          </div>
        </div>

        <!-- SECCIÓN II: DATOS DEL APODERADO -->
        <div style="border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 12px; overflow: hidden;">
          <div style="background: #f1f5f9; padding: 6px 12px; font-size: 11.5px; font-weight: 900; color: #1e3a8a; border-bottom: 1px solid #cbd5e1;">
            II. DATOS DEL PADRE, MADRE O APODERADO LEGAL
          </div>
          <div style="padding: 10px 12px; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 8px; font-size: 12px;">
            <div><strong>Nombre del Apoderado:</strong> <br><span style="font-weight: bold;">${m.guardian}</span></div>
            <div><strong>DNI Apoderado:</strong> <br><span>${m.guardianDni || '41982301'}</span></div>
            <div><strong>Teléfono / Celular:</strong> <br><span>${m.guardianPhone || '987-654-321'}</span></div>
            <div style="grid-column: span 2;"><strong>Correo Electrónico:</strong> <br><span>${m.guardianEmail || 'apoderado@eleducador.edu.pe'}</span></div>
            <div><strong>Fecha de Matrícula:</strong> <br><span>${m.enrollmentDate || '15/02/2026'}</span></div>
          </div>
        </div>

        <!-- SECCIÓN III: FICHA MÉDICA Y SALUD -->
        <div style="border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 12px; overflow: hidden;">
          <div style="background: #f1f5f9; padding: 6px 12px; font-size: 11.5px; font-weight: 900; color: #1e3a8a; border-bottom: 1px solid #cbd5e1;">
            III. ANTECEDENTES MÉDICOS Y ATENCIÓN DE SALUD ESCOLAR
          </div>
          <div style="padding: 10px 12px; display: grid; grid-template-columns: 1fr 1.5fr 1.5fr; gap: 8px; font-size: 12px;">
            <div><strong>Grupo Sanguíneo:</strong> <br><span style="font-weight: 900; color: #dc2626; font-size: 13px;">🩸 ${m.bloodType || 'O+'}</span></div>
            <div><strong>Seguro de Salud:</strong> <br><span>🏥 ${m.insurance || 'EsSalud / SIS'}</span></div>
            <div><strong>Alergias Conocidas:</strong> <br><span style="color: #b45309; font-weight: bold;">⚠️ ${m.allergies || 'Ninguna'}</span></div>
            <div style="grid-column: span 2;"><strong>Condición Médica / Educación Física:</strong> <br><span>${m.medicalCondition || 'Apto para toda actividad física escolar'}</span></div>
            <div><strong>Teléfono de Emergencia:</strong> <br><span style="font-weight: bold; color: #047857;">📞 ${m.emergencyPhone || m.guardianPhone || '987-654-321'}</span></div>
          </div>
        </div>

        <!-- SECCIÓN IV: REQUISITOS Y DOCUMENTOS VERIFICADOS -->
        <div style="border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 16px; overflow: hidden;">
          <div style="background: #f1f5f9; padding: 6px 12px; font-size: 11.5px; font-weight: 900; color: #1e3a8a; border-bottom: 1px solid #cbd5e1;">
            IV. DOCUMENTACIÓN SUSTENTATORIA VERIFICADA POR SECRETARÍA
          </div>
          <div style="padding: 10px 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 11.5px;">
            <div>${docs.dniStudent ? '☑️' : '⬜'} Copia de DNI del Estudiante</div>
            <div>${docs.dniParent ? '☑️' : '⬜'} Copia de DNI del Apoderado</div>
            <div>${docs.birthCertificate ? '☑️' : '⬜'} Partida de Nacimiento</div>
            <div>${docs.siagieFUM ? '☑️' : '⬜'} Ficha Única de Matrícula SIAGIE</div>
            <div>${docs.reportCard ? '☑️' : '⬜'} Certificado de Estudios / Libreta 2025</div>
            <div>${docs.vaccinationCard ? '☑️' : '⬜'} Cartilla de Vacunación</div>
          </div>
        </div>

        <!-- SECCIÓN V: COMPROMISO Y FIRMAS -->
        <div style="margin-top: 24px; padding-top: 12px; border-top: 1px dashed #cbd5e1;">
          <p style="font-size: 10.5px; color: #475569; text-align: justify; line-height: 1.4; margin-bottom: 28px;">
            <strong>DECLARACIÓN JURADA Y COMPROMISO:</strong> El padre de familia o apoderado declara bajo juramento que los datos consignados en la presente Ficha Única de Matrícula son fidedignos y se compromete a respetar el Reglamento Interno y apoyar el proceso formativo de su menor hijo(a) durante el Año Lectivo 2026.
          </p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; text-align: center;">
            <div>
              <div style="border-top: 1px solid #000000; width: 80%; margin: 0 auto 4px;"></div>
              <div style="font-size: 11px; font-weight: bold;">${m.guardian}</div>
              <div style="font-size: 10px; color: #64748b;">Firma del Padre / Madre / Apoderado</div>
              <div style="font-size: 9.5px; color: #64748b;">DNI: ${m.guardianDni || '41982301'}</div>
            </div>
            <div>
              <div style="border-top: 1px solid #000000; width: 80%; margin: 0 auto 4px;"></div>
              <div style="font-size: 11px; font-weight: bold;">Lic. Manuel Cornejo / Prof. Alex Lino</div>
              <div style="font-size: 10px; color: #64748b;">Dirección General & Secretaría Académica</div>
              <div style="font-size: 9.5px; color: #64748b;">I.E.P. "El Educador" • UGEL 05</div>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: center; margin-top: 20px;">
          <div style="width: 55px; height: 55px;">${Components.generateQRSVG(`FUM-2026-${m.studentCode}-${m.dni}`)}</div>
        </div>

      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-navy" onclick="window.print()" style="font-weight: 900; padding: 8px 24px;">
          [Imprimir] Imprimir Ficha Única Oficial (A4)
        </button>
      </div>
    `);
  }

  openDocumentsChecklistModal(enrollmentId) {
    const enrollments = this.store.getEnrollments();
    const m = enrollments.find(e => e.id === enrollmentId || e.studentCode === enrollmentId) || enrollments[0];
    if (!m) return;

    const docs = m.documents || {};
    const reqList = [
      { key: 'dniStudent', label: 'Copia de DNI del Estudiante', icon: '🆔', required: true },
      { key: 'dniParent', label: 'Copia de DNI del Padre / Madre / Apoderado', icon: '👨‍👩‍👧', required: true },
      { key: 'birthCertificate', label: 'Partida / Acta de Nacimiento', icon: '[Documento]', required: true },
      { key: 'siagieFUM', label: 'Ficha Única de Matrícula SIAGIE', icon: '[Colegio]', required: true },
      { key: 'reportCard', label: 'Certificado de Estudios / Libreta de Notas 2025', icon: '[Reporte]', required: false },
      { key: 'vaccinationCard', label: 'Cartilla de Vacunación Completa', icon: '💉', required: false }
    ];

    this.showModal(`
      <div class="modal-header" style="background: #065f46; color: #ffffff;">
        <h3 style="color: #ffffff;">📎 Documentos Digitales & Requisitos: ${m.studentName}</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 10px 14px; border-radius: 6px; margin-bottom: 14px; font-size: 12px; color: #065f46;">
          Expediente digital oficial de matrícula para <strong>${m.studentName}</strong> (${m.grade}). Marque los documentos recibidos o cargue copias digitales.
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${reqList.map(req => {
            const isDelivered = !!docs[req.key];
            return `
              <div class="card" style="padding: 12px 14px; border-left: 4px solid ${isDelivered ? '#10b981' : '#f59e0b'}; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 16px;">${req.icon}</span>
                    <strong style="font-size: 12.5px; color: #0b132b;">${req.label}</strong>
                    ${req.required ? `<span style="font-size: 10px; color: #dc2626; font-weight: 800;">* Obligatorio</span>` : ''}
                  </div>
                  <span style="font-size: 11px; color: ${isDelivered ? '#047857' : '#b45309'}; font-weight: 700; margin-top: 2px; display: block;">
                    ${isDelivered ? '✓ Documento recibido y verificado' : '⏳ Pendiente de entrega por el apoderado'}
                  </span>
                </div>

                <div style="display: flex; gap: 6px; align-items: center;">
                  <button class="btn btn-sm ${isDelivered ? 'btn-gold' : 'btn-outline'}" onclick="window.app.toggleDocumentItem('${m.id}', '${req.key}', ${!isDelivered})" style="font-size: 11px; font-weight: 800;">
                    ${isDelivered ? '✓ Marcado Conforme' : 'Marcar como Recibido'}
                  </button>
                  <button class="btn btn-navy btn-sm" onclick="window.app.simulateUploadDocument('${m.id}', '${req.key}', '${req.label}')" style="font-size: 11px;">
                    📤 Cargar Archivo
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
      </div>
    `);
  }

  toggleDocumentItem(enrollmentId, docKey, isChecked) {
    const enrollments = this.store.getEnrollments();
    const m = enrollments.find(e => e.id === enrollmentId || e.studentCode === enrollmentId);
    if (!m) return;
    if (!m.documents) m.documents = {};
    m.documents[docKey] = isChecked;
    this.store.saveState();
    this.openDocumentsChecklistModal(enrollmentId);
    this.showToast(`Estado de documento actualizado.`, "info");
  }

  simulateUploadDocument(enrollmentId, docKey, docTitle) {
    this.showToast(`Subiendo archivo digital para "${docTitle}"...`, "info");
    setTimeout(() => {
      const enrollments = this.store.getEnrollments();
      const m = enrollments.find(e => e.id === enrollmentId || e.studentCode === enrollmentId);
      if (m) {
        if (!m.documents) m.documents = {};
        m.documents[docKey] = true;
        this.store.saveState();
      }
      this.openDocumentsChecklistModal(enrollmentId);
      this.showToast(`✓ Documento digital "${docTitle}" cargado y verificado con éxito.`, "success");
    }, 400);
  }

  showEnrollmentCertificateModal(enrollmentId) {
    this.showOfficialFUMPrintModal(enrollmentId);
  }

  // =========================================================================
  // GESTIÓN Y EVENTOS DE ASISTENCIA BIOMÉTRICA & QR EN PUERTA
  // =========================================================================

  setAttendanceSubTab(subTab) {
    this.store.state.attendanceActiveSubTab = subTab;
    this.render();
  }

  onAttendanceGradeChange(gradeId) {
    this.store.state.selectedAttendanceGrade = gradeId;
    this.render();
  }

  onAttendanceDateChange(date) {
    this.store.state.selectedAttendanceDate = date;
    this.render();
  }

  setStudentAttendanceStatus(recordId, newStatus) {
    const updated = this.store.updateStudentAttendanceStatus(recordId, newStatus);
    if (updated) {
      const icon = newStatus === 'Presente' ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span>' : newStatus === 'Tardanza' ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span>' : newStatus === 'Falta' ? '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span>' : '🔵';
      this.showToast(`${icon} ${updated.studentName} marcado como "${newStatus}"`, "info");
      this.render();
    }
  }

  markAllClassroomPresent(gradeId, date) {
    this.store.markAllStudentsPresent(gradeId, date);
    this.showToast(`✓ Todos los estudiantes del aula marcados como "Presente a Tiempo"`, "success");
    this.render();
  }

  openJustifyAttendanceModal(studentId, date = "19/08/2026") {
    const enrollments = this.store.getEnrollments();
    const st = enrollments.find(e => e.id === studentId || e.studentCode === studentId) || { studentName: "Sofía Méndez Flores" };

    this.showModal(`
      <div class="modal-header" style="background: #1e3a8a; color: #ffffff;">
        <h3 style="color: #ffffff;">📝 Justificación de Inasistencia / Tardanza</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; margin-bottom: 12px; font-size: 12px;">
          Estudiante: <strong>${st.studentName}</strong> • Fecha: <strong>${date}</strong>
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Motivo de la Inasistencia:</label>
          <select id="just-reason-type" class="form-control" style="font-weight: bold; margin-bottom: 8px;">
            <option value="Cita médica pediátrica / Tratamiento de salud">Cita médica / Tratamiento de salud</option>
            <option value="Descanso médico prescrito (Reposo)">Descanso médico prescrito (Reposo)</option>
            <option value="Emergencia o calamidad familiar">Emergencia o calamidad familiar</option>
            <option value="Representación institucional / Deportiva / Académica">Representación institucional / Académica</option>
            <option value="Trámite legal documentario / RENIEC">Trámite documentario / RENIEC</option>
          </select>
          <textarea id="just-reason-detail" class="form-control" rows="3" placeholder="Detalle la justificación para conocimiento de Coordinación y Tutoría..."></textarea>
        </div>

        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Documento Sustentatorio (Constancia Médica / Receta):</label>
          <div style="border: 2px dashed #cbd5e1; border-radius: 6px; padding: 12px; text-align: center; background: #f8fafc;">
            <span style="font-size: 12px; color: #475569;">[Documento] Constancia_Medica_Atencion_19082026.pdf</span>
            <div style="font-size: 10.5px; color: #047857; font-weight: bold; margin-top: 4px;">✓ Documento adjunto verificado</div>
          </div>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmSubmitJustification('${studentId}', '${date}')" style="font-weight: 800;">
          ✓ Aprobar y Registrar Justificación
        </button>
      </div>
    `);
  }

  confirmSubmitJustification(studentId, date) {
    const reasonType = document.getElementById("just-reason-type") ? document.getElementById("just-reason-type").value : "Salud";
    const detail = document.getElementById("just-reason-detail") ? document.getElementById("just-reason-detail").value.trim() : "";
    const fullReason = detail ? `${reasonType} - ${detail}` : reasonType;

    this.store.submitAttendanceJustification(studentId, date, fullReason);
    this.closeModal();
    this.render();
    this.showToast(`✓ Inasistencia justificada y registrada en el sistema.`, "success");
  }

  // =========================================================================
  // CONTROLADOR DE CÁMARA QR EN PORTERÍA
  // =========================================================================
  startDoorCameraScanner() {
    const feedContainer = document.getElementById("qr-door-camera-feed");
    const statusTag = document.getElementById("camera-door-status");
    const btnStart = document.getElementById("btn-start-door-cam");
    const btnStop = document.getElementById("btn-stop-door-cam");

    if (!feedContainer) return;

    if (typeof Html5Qrcode === "undefined") {
      this.showToast("Cargando motor de cámara QR, intente en un momento...", "info");
      return;
    }

    try {
      this.doorQrScanner = new Html5Qrcode("qr-door-camera-feed");
      const config = {
        fps: 15,
        qrbox: { width: 220, height: 220 },
        aspectRatio: 1.0
      };

      this.doorQrScanner.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          // QR detectado en puerta
          this.processQRScanFromDoor(decodedText);
        },
        () => {}
      ).then(() => {
        this.isDoorCamActive = true;
        if (statusTag) {
          statusTag.textContent = "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> CÁMARA ACTIVA";
          statusTag.className = "status-badge status-approved";
        }
        if (btnStart) btnStart.style.display = "none";
        if (btnStop) btnStop.style.display = "inline-block";
        this.showToast("[Cámara] Cámara de portería activa. Apunte los fotochecks QR al lente.", "info");
      }).catch((err) => {
        console.error("Error al acceder a la cámara:", err);
        if (statusTag) {
          statusTag.textContent = "Error / Permiso Denegado";
          statusTag.className = "status-badge status-failed";
        }
        this.showToast("No se pudo iniciar la cámara en este dispositivo. Use los botones de simulación rápida.", "warning");
      });
    } catch (e) {
      console.error(e);
      this.showToast("Error al inicializar cámara de portería", "danger");
    }
  }

  stopDoorCameraScanner() {
    if (this.doorQrScanner && this.isDoorCamActive) {
      this.doorQrScanner.stop().then(() => {
        this.isDoorCamActive = false;
        const statusTag = document.getElementById("camera-door-status");
        const btnStart = document.getElementById("btn-start-door-cam");
        const btnStop = document.getElementById("btn-stop-door-cam");
        const feedContainer = document.getElementById("qr-door-camera-feed");

        if (statusTag) {
          statusTag.textContent = "Cámara Apagada";
          statusTag.className = "status-badge status-pending";
        }
        if (btnStart) btnStart.style.display = "inline-block";
        if (btnStop) btnStop.style.display = "none";
        if (feedContainer) {
          feedContainer.innerHTML = `
            <div style="color: white; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 6px;">⚡[Móvil]</div>
              <div style="font-size: 12px; font-weight: bold; color: #38bdf8;">Lector QR Activo</div>
              <div style="font-size: 10.5px; opacity: 0.8;">Presiona 'Encender Cámara' o usa simulación</div>
            </div>
          `;
        }
      }).catch(err => console.error(err));
    }
  }

  processSmartQRScan(qrCodeOrDni, customTime = null) {
    this.playScanBeep();
    if (navigator.vibrate) navigator.vibrate(120);

    const result = this.store.handleSmartQRScan(qrCodeOrDni, customTime);
    const display = document.getElementById("door-last-scan-display");

    if (result.isAlreadyEntered) {
      // Estudiante ya ingresó -> Modo Incidencia Conductual / Acciones Rápidas
      if (display && result.student) {
        const studentPhoto = result.student.avatar || (result.student.gender === 'Femenino' ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80');
        display.innerHTML = `
          <div style="background: #fff5f5; border: 2px solid #ef4444; border-radius: 10px; padding: 16px; text-align: center; animation: fadeIn 0.3s ease;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 12px;">
              <img src="${studentPhoto}" alt="Foto" style="width: 60px; height: 70px; object-fit: cover; border-radius: 6px; border: 2px solid #dc2626;" />
              <div style="text-align: left;">
                <div style="font-size: 15px; font-weight: 900; color: #991b1b;">${result.student.studentName}</div>
                <div style="font-size: 12px; font-weight: bold; color: #1e3a8a;">${result.student.grade}</div>
                <div style="font-size: 10.5px; color: #64748b;">DNI: ${result.student.dni} • Código: ${result.student.studentCode}</div>
                <div style="font-size: 10.5px; color: #047857; font-weight: bold; margin-top: 2px;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Ingreso registrado hoy a las ${result.previousScanTime}</div>
              </div>
            </div>

            <div style="background: #fef2f2; border: 1px dashed #f87171; border-radius: 8px; padding: 10px; margin-bottom: 12px; font-size: 12px; color: #991b1b;">
              ⚠️ <strong>LECTURA QR POSTERIOR AL INGRESO:</strong> El estudiante ya se encuentra dentro del colegio. Seleccione la acción correspondiente:
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              <button class="btn btn-red btn-sm" onclick="window.app.openCreateIncidentModal('${result.student.studentCode}', 'Grave')" style="font-weight: 900; font-size: 12px; padding: 8px 14px;">
                [Alerta] Registrar Nuevo Informe de Incidencia Conductual
              </button>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
                <button class="btn btn-gold btn-sm" onclick="window.app.openCreateIncidentModal('${result.student.studentCode}', 'Mérito')" style="font-weight: 800; font-size: 11px;">
                  ★ Anotar Mérito / Reconocimiento
                </button>
                <button class="btn btn-outline btn-sm" onclick="window.app.openStudentQRModal('${result.student.studentCode}')" style="font-size: 11px;">
                  [Usuario] Ver Fotocheck QR
                </button>
              </div>
            </div>
          </div>
        `;
      }
      this.showToast(`[Alerta] QR Detectado: ${result.student.studentName} ya ingresó (${result.previousScanTime}). Habilitado registro de incidencias.`, "warning");
      return;
    }

    // Primer Escaneo -> Marcación de Asistencia en Puerta
    if (display && result && result.student) {
      const isLate = result.isLate;
      const isDoorClosed = result.isDoorClosed;
      const studentPhoto = result.student.avatar || (result.student.gender === 'Femenino' ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80');

      display.innerHTML = `
        <div style="background: ${isDoorClosed ? '#fef2f2' : isLate ? '#fffbeb' : '#ecfdf5'}; border: 2px solid ${isDoorClosed ? '#dc2626' : isLate ? '#f59e0b' : '#10b981'}; border-radius: 10px; padding: 16px; text-align: center; animation: fadeIn 0.3s ease;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 12px;">
            <img src="${studentPhoto}" alt="Foto" style="width: 55px; height: 65px; object-fit: cover; border-radius: 6px; border: 2px solid ${isDoorClosed ? '#991b1b' : isLate ? '#d97706' : '#059669'};" />
            <div style="text-align: left;">
              <div style="font-size: 15px; font-weight: 900; color: #0b132b;">${result.student.studentName}</div>
              <div style="font-size: 12px; font-weight: bold; color: #1e3a8a;">${result.student.grade}</div>
              <div style="font-size: 10.5px; color: #64748b;">DNI: ${result.student.dni} • Cód: ${result.student.studentCode}</div>
            </div>
          </div>

          <div style="display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 12.5px; font-weight: 900; background: ${isDoorClosed ? '#dc2626' : isLate ? '#f59e0b' : '#10b981'}; color: white; margin-bottom: 8px;">
            ${isDoorClosed ? `⛔ PUERTA CERRADA (08:30 AM) • FALTA REGISTRADA` : isLate ? `⚠️ TARDANZA EN PUERTA (+${result.delayMinutes} MIN)` : `✓ INGRESO PUNTUAL`} • ${result.scanTime}
          </div>

          <div style="font-size: 11.5px; color: #475569;">
            ${isDoorClosed ? `
              <span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> <strong>Corte de Asistencia Aplicado:</strong> Notificando inasistencia al apoderado ${result.guardianName} (${result.guardianPhone}).
            ` : isLate ? `
              🔔 <strong>Notificación de Tardanza despachada:</strong> ${result.guardianName} (${result.guardianPhone})
            ` : `
              🌟 <strong>¡Bienvenido(a) a clase!</strong> Que tengas una excelente jornada escolar.
            `}
          </div>
        </div>
      `;
    }

    if (result.isDoorClosed) {
      this.showToast(`⛔ INASISTENCIA (Puerta Cerrada 08:30 AM): ${result.student.studentName} (${result.scanTime})`, "danger");
    } else if (result.isLate) {
      this.showToast(`⚠️ TARDANZA: ${result.student.studentName} ingresó a las ${result.scanTime} (+${result.delayMinutes} min)`, "warning");
    } else {
      this.showToast(`✓ INGRESO PUNTUAL: ${result.student.studentName} (${result.scanTime})`, "success");
    }

    if (!this.isDoorCamActive) {
      setTimeout(() => this.render(), 600);
    }
  }

  processQRScanFromDoor(qrCodeOrDni, customTime = null) {
    this.processSmartQRScan(qrCodeOrDni, customTime);
  }

  // =========================================================================
  // GENERADOR Y VISOR DE CÓDIGO QR INDIVIDUAL POR ESTUDIANTE (SIN FOTOS)
  // =========================================================================
  openStudentQRModal(studentCode) {
    const enrollments = this.store.getEnrollments();
    const st = enrollments.find(e => e.studentCode === studentCode || e.id === studentCode || e.dni === studentCode) || enrollments[0];

    this.showModal(`
      <div class="modal-header" style="background: linear-gradient(135deg, #0b132b 0%, #1e3a8a 100%); color: white;">
        <div>
          <h3 class="modal-title" style="color: white; margin: 0; font-size: 15px;">
            [Móvil] Tarjeta Oficial de Asistencia QR (Sin Foto)
          </h3>
          <span style="font-size: 11px; color: #fde047;">I.E.P. "El Educador" • Año Lectivo 2026</span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>

      <div class="modal-body" style="padding: 24px; text-align: center; background: #f8fafc;">
        
        <!-- Tarjeta Oficial de Código QR Escolar -->
        <div style="max-width: 320px; margin: 0 auto; background: #ffffff; border: 3px solid #1e3a8a; border-radius: 14px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.12);">
          
          <!-- Encabezado -->
          <div style="background: linear-gradient(135deg, #0b132b 0%, #1e3a8a 100%); color: white; padding: 12px; border-bottom: 3px solid #f59e0b;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
              <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo" style="width: 32px; height: 32px; object-fit: contain;" />
              <div style="text-align: center;">
                <div style="font-size: 11px; font-weight: 900; letter-spacing: 0.05em; color: #fde047;">I.E.P. "EL EDUCADOR"</div>
                <div style="font-size: 8.5px; opacity: 0.9;">CONTROL DE ASISTENCIA QR 2026 • UGEL 05</div>
              </div>
            </div>
          </div>

          <!-- Cuerpo: Código QR Grande + Nombres Completos + Grado (SIN FOTO) -->
          <div style="padding: 20px 16px;">
            
            <!-- Código QR Grande en Alta Resolución -->
            <div style="width: 175px; height: 175px; margin: 0 auto 14px; border: 3px solid #0b132b; border-radius: 10px; padding: 8px; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
              ${Components.generateQRSVG(st.studentCode)}
            </div>

            <!-- Nombres y Apellidos Completos en Mayúsculas y Negrita -->
            <div style="font-size: 14.5px; font-weight: 900; color: #0b132b; text-transform: uppercase; line-height: 1.25; margin-bottom: 6px;">
              ${st.studentName}
            </div>

            <!-- Grado y Nivel -->
            <div style="font-size: 13px; font-weight: 800; color: #1e40af; margin-bottom: 8px;">
              ${st.grade}
            </div>

            <!-- Código y DNI -->
            <div style="font-size: 11px; color: #475569; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px 10px; display: inline-block; margin-bottom: 12px;">
              <strong>CÓD:</strong> <code>${st.studentCode}</code> • <strong>DNI:</strong> <code>${st.dni}</code>
            </div>

            <div style="font-size: 10px; color: #64748b; line-height: 1.3;">
              Presente este código QR en portería (07:00 a 08:30 AM) para registrar asistencia o ante el auxiliar para incidencias conductuales.
            </div>
          </div>

          <!-- Pie de Tarjeta -->
          <div style="background: #0b132b; color: white; padding: 6px; font-size: 9px; letter-spacing: 0.05em; font-weight: bold;">
            SAN JUAN DE LURIGANCHO • LIMA - PERÚ
          </div>
        </div>

      </div>

      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cerrar</button>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-navy btn-sm" onclick="window.print()" style="font-weight: 800;">
            [Imprimir] Imprimir Tarjeta / Sticker
          </button>
          <button class="btn btn-gold btn-sm" onclick="window.app.downloadStudentQR('${st.studentCode}')" style="font-weight: 800;">
            [Descargar] Descargar QR
          </button>
          <button class="btn btn-outline btn-sm" onclick="window.app.closeModal(); window.app.openCreateIncidentModal('${st.studentCode}')" style="color: #dc2626; border-color: #fca5a5; font-weight: bold;">
            [Alerta] Informe
          </button>
        </div>
      </div>
    `);
  }

  downloadStudentQR(studentCode) {
    this.showToast(`⬇️ Código QR oficial (${studentCode}) generado y listo para imprimir/guardar`, "success");
  }

  downloadAllQRSheets() {
    this.showToast("⬇️ Preparando exportación e impresión de plancha de códigos QR de todos los estudiantes...", "info");
    setTimeout(() => {
      window.print();
    }, 400);
  }

  // =========================================================================
  // GESTIÓN DEL LIBRO DE INCIDENCIAS & CONVIVENCIA ESCOLAR (MINEDU)
  // =========================================================================
  openCreateIncidentModal(preselectedStudentCode = null, defaultSeverity = "Grave") {
    const enrollments = this.store.getEnrollments();
    const currentUser = this.store.getCurrentUser() || { name: "Prof. Alex Lino" };

    const html = `
      <div class="modal-header" style="background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%); color: white;">
        <div>
          <h3 class="modal-title" style="color: white; margin: 0; font-size: 15px;">
            [Alerta] Registrar Nuevo Informe de Incidencia Conductual / Convivencia
          </h3>
          <span style="font-size: 11px; color: #fee2e2;">I.E.P. "El Educador" • Conforme a Ley N° 29719</span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>

      <form onsubmit="window.app.saveBehaviorIncident(event)">
        <div class="modal-body" style="max-height: 75vh; overflow-y: auto; padding: 18px;">
          
          <!-- Selector de Estudiante -->
          <div class="form-group" style="margin-bottom: 12px;">
            <label class="form-label" style="font-weight: 800; font-size: 12px; color: var(--color-navy-900);">
              Estudiante Involucrado / Amarrado al Perfil:
            </label>
            <select name="studentCode" class="form-control" style="font-weight: bold; font-size: 12.5px; border-color: #ef4444;" required>
              ${enrollments.map(st => `
                <option value="${st.studentCode}" ${st.studentCode === preselectedStudentCode ? 'selected' : ''}>
                  ${st.studentName} (${st.grade}) • Cód: ${st.studentCode} • DNI: ${st.dni}
                </option>
              `).join('')}
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Fecha del Suceso:</label>
              <input type="text" name="date" class="form-control" value="${new Date().toLocaleDateString('es-PE')}" required />
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Hora de la Incidencia:</label>
              <input type="text" name="time" class="form-control" value="${new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}" required />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Nivel de Gravedad / Tipo:</label>
              <select name="severity" class="form-control" style="font-weight: bold;" required>
                <option value="Leve" ${defaultSeverity === 'Leve' ? 'selected' : ''}><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> Falta Leve (Uniforme, tardanza a aula)</option>
                <option value="Grave" ${defaultSeverity === 'Grave' ? 'selected' : ''}><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Falta Grave (Desobediencia, uso de celular)</option>
                <option value="Muy Grave" ${defaultSeverity === 'Muy Grave' ? 'selected' : ''}>⛔ Muy Grave (Agresión, daño material)</option>
                <option value="Mérito" ${defaultSeverity === 'Mérito' ? 'selected' : ''}>★ Reconocimiento / Mérito Académico</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom: 0;">
              <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Lugar del Hecho:</label>
              <input type="text" name="location" class="form-control" value="Aula de Clase 304" placeholder="Ej. Aula 304, Patio Central, Laboratorio" required />
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Categoría / Motivo:</label>
            <input type="text" name="category" class="form-control" value="Desobediencia e interrupción de clase" placeholder="Ej. Desobediencia, conducta en aula, agresión verbal" required />
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Docente / Auxiliar que Reporta:</label>
            <input type="text" name="reportedBy" class="form-control" value="${currentUser.name || 'Prof. Roberto Silva'}" required />
          </div>

          <div class="form-group" style="margin-bottom: 12px;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Descripción Detallada de los Hechos:</label>
            <textarea name="description" rows="3" class="form-control" placeholder="Describa con objetividad lo acontecido con el estudiante..." required>Durante la clase, el estudiante incurrió en falta a las normas de convivencia acordadas.</textarea>
          </div>

          <div class="form-group" style="margin-bottom: 14px;">
            <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Medida Formativa / Pedagógica Aplicada:</label>
            <textarea name="correctiveMeasure" rows="2" class="form-control" placeholder="Compromiso suscrito, diálogo formativo, etc." required>Diálogo formativo reflexivo, firma de compromiso en anecdotario y comunicación inmediata al apoderado.</textarea>
          </div>

          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 10px 14px; display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="send-whatsapp-check" name="notifyWhatsApp" checked style="width: 18px; height: 18px; cursor: pointer;" />
            <label for="send-whatsapp-check" style="font-size: 12px; font-weight: bold; color: #065f46; cursor: pointer; margin: 0;">
              📲 Notificar inmediatamente al Apoderado vía WhatsApp Oficial
            </label>
          </div>

        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cancelar</button>
          <button type="submit" class="btn btn-red btn-sm" style="font-weight: 900; padding: 8px 20px;">
            💾 Guardar en Libro de Incidencias
          </button>
        </div>
      </form>
    `;
    this.showModal(html);
  }

  saveBehaviorIncident(event) {
    if (event) event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const newInc = this.store.createBehaviorIncident({
      studentCode: formData.get("studentCode"),
      date: formData.get("date"),
      time: formData.get("time"),
      severity: formData.get("severity"),
      location: formData.get("location"),
      category: formData.get("category"),
      reportedBy: formData.get("reportedBy"),
      description: formData.get("description"),
      correctiveMeasure: formData.get("correctiveMeasure"),
      notifyWhatsApp: formData.get("notifyWhatsApp") === "on"
    });

    this.closeModal();
    this.showToast(`✓ Informe ${newInc.id} registrado para ${newInc.studentName}`, "success");
    this.render();

    if (formData.get("notifyWhatsApp") === "on") {
      setTimeout(() => {
        this.sendIncidentWhatsApp(newInc.id);
      }, 400);
    }
  }

  sendIncidentWhatsApp(incidentId) {
    const inc = (this.store.state.behaviorIncidents || initialData.behaviorIncidents || []).find(i => i.id === incidentId);
    if (!inc) return;

    const phone = inc.guardianPhone || "984-777-888";
    const guardian = inc.guardian || "Sr(a). Apoderado";

    const msg = `*COMUNICADO DE CONVIVENCIA ESCOLAR - I.E.P. "EL EDUCADOR"*\n\nEstimado(a) *${guardian}*,\nLe saludamos cordialmente de la Dirección y Coordinación de Convivencia Escolar.\n\nLe informamos que el día de hoy *${inc.date}* a las *${inc.time}* se ha registrado una incidencia disciplinaria respecto a su menor hijo(a) *${inc.studentName}* (${inc.grade}):\n\n• *Tipo de Falta:* ${inc.severity}\n• *Motivo:* ${inc.category}\n• *Lugar:* ${inc.location}\n• *Reportado por:* ${inc.reportedBy}\n• *Detalle:* ${inc.description}\n• *Medida Pedagógica:* ${inc.correctiveMeasure}\n\nLe agradecemos reforzar las normas de conducta en el hogar para el bienestar y formación integral de su menor hijo(a).\n\nAtentamente,\n*Comité de Gestión de la Convivencia Escolar*\nI.E.P. "El Educador" - S.J.L. • UGEL 05`;

    this.showModal(`
      <div class="modal-header" style="background: #047857; color: white;">
        <h3 style="color: white; font-size: 15px;">💬 Enviar Notificación de Incidencia por WhatsApp</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body">
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
          <div style="font-size: 11px; font-weight: bold; color: #166534; text-transform: uppercase;">Apoderado Destinatario:</div>
          <div style="font-size: 13.5px; font-weight: 900; color: #065f46;">${guardian} • Teléfono: ${phone}</div>
          <div style="font-size: 11.5px; color: #15803d; margin-top: 2px;">Estudiante: <strong>${inc.studentName}</strong> (${inc.grade})</div>
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Mensaje Oficial Pre-Redactado:</label>
          <textarea class="form-control" rows="8" style="font-size: 11.5px; font-family: monospace;" readonly>${msg}</textarea>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-sm" onclick="window.open('https://api.whatsapp.com/send?phone=51${phone.replace(/[^0-9]/g, '')}&text=${encodeURIComponent(msg)}', '_blank'); window.app.closeModal(); window.app.showToast('✓ Notificación enviada a WhatsApp', 'success');" style="background: #22c55e; color: white; font-weight: 800; padding: 8px 18px;">
          [Evaluación] Abrir WhatsApp y Enviar Mensaje
        </button>
      </div>
    `);
  }

  openIncidentOfficialPrintModal(incidentId) {
    const inc = (this.store.state.behaviorIncidents || initialData.behaviorIncidents || []).find(i => i.id === incidentId) || (this.store.state.behaviorIncidents && this.store.state.behaviorIncidents[0]);
    if (!inc) return;

    this.showModal(`
      <div class="modal-header" style="background: #0f172a; color: white;">
        <h3 style="color: white; font-size: 15px;">[Documento] Acta Oficial de Compromiso y Convivencia Escolar (MINEDU / UGEL 05)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 80vh; overflow-y: auto; padding: 24px; background: white;">
        
        <!-- Membrete Institucional -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0b132b; padding-bottom: 12px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo" style="width: 55px; height: 55px; object-fit: contain;" />
            <div>
              <div style="font-size: 10px; font-weight: 800; color: #0b132b; text-transform: uppercase;">REPÚBLICA DEL PERÚ • MINISTERIO DE EDUCACIÓN • UGEL 05</div>
              <div style="font-size: 18px; font-weight: 900; color: #0b132b; font-family: 'Plus Jakarta Sans', serif;">I.E.P. "EL EDUCADOR"</div>
              <div style="font-size: 10px; color: #dc2626; font-weight: bold;">INICIAL - PRIMARIA - SECUNDARIA • 21 AÑOS DEJANDO HUELLAS</div>
            </div>
          </div>
          <div style="text-align: right; font-size: 11px;">
            <span class="status-badge status-failed" style="font-size: 11px; font-weight: 900;">ACTA N° ${inc.id}</span>
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 18px;">
          <h2 style="font-size: 16px; font-weight: 900; text-decoration: underline; color: #0b132b; margin: 0 0 4px;">
            ACTA OFICIAL DE COMPROMISO Y REGISTRO DE CONVIVENCIA ESCOLAR
          </h2>
          <span style="font-size: 11px; color: #64748b;">Conforme a la Ley N° 29719 y D.S. N° 004-2018-MINEDU</span>
        </div>

        <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px; margin-bottom: 14px; font-size: 12px; line-height: 1.6;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div><strong>Estudiante:</strong> ${inc.studentName}</div>
            <div><strong>Grado y Sección:</strong> ${inc.grade}</div>
            <div><strong>DNI:</strong> ${inc.dni} • <strong>Código:</strong> ${inc.studentCode}</div>
            <div><strong>Fecha y Hora:</strong> ${inc.date} - ${inc.time}</div>
            <div><strong>Gravedad:</strong> <span style="font-weight: 900; color: #dc2626;">${inc.severity}</span></div>
            <div><strong>Lugar:</strong> ${inc.location}</div>
            <div style="grid-column: span 2;"><strong>Reportado Por:</strong> ${inc.reportedBy}</div>
            <div style="grid-column: span 2;"><strong>Apoderado Registrado:</strong> ${inc.guardian} (Cel: ${inc.guardianPhone})</div>
          </div>
        </div>

        <div style="margin-bottom: 14px; font-size: 12px;">
          <div style="font-weight: 800; color: #0b132b; margin-bottom: 4px;">I. DESCRIPCIÓN DE LOS HECHOS:</div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; line-height: 1.5;">
            ${inc.description}
          </div>
        </div>

        <div style="margin-bottom: 20px; font-size: 12px;">
          <div style="font-weight: 800; color: #0b132b; margin-bottom: 4px;">II. ACUERDOS Y MEDIDAS PEDAGÓGICAS FORMATIVAS:</div>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; line-height: 1.5;">
            ${inc.correctiveMeasure}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; text-align: center; margin-top: 36px; font-size: 10.5px;">
          <div>
            <div style="border-top: 1px solid #000; width: 85%; margin: 0 auto 4px;"></div>
            <strong>${inc.studentName}</strong><br>
            Estudiante
          </div>
          <div>
            <div style="border-top: 1px solid #000; width: 85%; margin: 0 auto 4px;"></div>
            <strong>${inc.guardian}</strong><br>
            Padre de Familia / Apoderado
          </div>
          <div>
            <div style="border-top: 1px solid #000; width: 85%; margin: 0 auto 4px;"></div>
            <strong>${inc.reportedBy}</strong><br>
            Docente / Tutor de Convivencia
          </div>
        </div>

      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <button class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-navy btn-sm" onclick="window.print()" style="font-weight: 800;">
          [Imprimir] Imprimir Acta Oficial A4
        </button>
      </div>
    `);
  }

  filterIncidentsTable(query) {
    const q = (query || "").toLowerCase();
    const rows = document.querySelectorAll("#incidents-main-table tbody tr");
    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(q) ? "" : "none";
    });
  }

  sendTardinessWhatsApp(studentName, arrivalTime, delayMin, phone, guardian) {
    const msg = `Estimado(a) ${guardian || 'Apoderado'},\n\nLe saluda la Dirección de la I.E.P. "El Educador". Le informamos que su menor hijo(a) *${studentName}* registró su ingreso al plantel con *TARDANZA* el día de hoy a las *${arrivalTime}* (+${delayMin} minutos de retraso).\n\nLe agradecemos conversar con su menor y tomar las previsiones correspondientes para fomentar el valor de la puntualidad escolar.\n\nAtentamente,\n*Coordinación de Normas y Asistencia*\nI.E.P. "El Educador" - UGEL 05`;

    this.showModal(`
      <div class="modal-header" style="background: #047857; color: white;">
        <h3 style="color: white;">💬 Notificación de Tardanza por WhatsApp</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body">
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
          <div style="font-size: 11px; font-weight: bold; color: #166534; text-transform: uppercase;">Destinatario:</div>
          <div style="font-size: 13px; font-weight: 800; color: #065f46;">${guardian} • Teléfono: ${phone}</div>
          <div style="font-size: 11px; color: #15803d;">Estudiante: <strong>${studentName}</strong> (Tardanza: ${arrivalTime})</div>
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Mensaje Oficial a Enviar:</label>
          <textarea class="form-control" rows="6" style="font-size: 12px; font-family: monospace;" readonly>${msg}</textarea>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-sm" onclick="window.open('https://api.whatsapp.com/send?phone=51${phone.replace(/[^0-9]/g, '')}&text=${encodeURIComponent(msg)}', '_blank'); window.app.closeModal(); window.app.showToast('✓ Mensaje WhatsApp enviado al apoderado', 'success');" style="background: #22c55e; color: white; font-weight: 800; padding: 8px 16px;">
          [Evaluación] Enviar por WhatsApp Oficial
        </button>
      </div>
    `);
  }

  sendAbsenceWhatsApp(studentName, phone, guardian) {
    const msg = `Estimado(a) ${guardian || 'Apoderado'},\n\nLe saluda la Dirección de la I.E.P. "El Educador". Le informamos que su menor hijo(a) *${studentName}* *NO HA REGISTRADO INGRESO* al colegio el día de hoy hasta el cierre de puerta.\n\nPor favor confirmar el motivo de la inasistencia o comunicarse a la brevedad con la tutoría de aula.\n\nAtentamente,\n*Dirección y Coordinación Pedagógica*\nI.E.P. "El Educador" - S.J.L.`;

    this.showModal(`
      <div class="modal-header" style="background: #dc2626; color: white;">
        <h3 style="color: white;">💬 Notificación de Inasistencia por WhatsApp</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body">
        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
          <div style="font-size: 11px; font-weight: bold; color: #991b1b; text-transform: uppercase;">Destinatario:</div>
          <div style="font-size: 13px; font-weight: 800; color: #7f1d1d;">${guardian} • Teléfono: ${phone}</div>
          <div style="font-size: 11px; color: #991b1b;">Estudiante: <strong>${studentName}</strong> (Inasistencia Injustificada)</div>
        </div>

        <div class="form-group">
          <label class="form-label" style="font-weight: 800; font-size: 11.5px;">Mensaje Oficial a Enviar:</label>
          <textarea class="form-control" rows="6" style="font-size: 12px; font-family: monospace;" readonly>${msg}</textarea>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-red btn-sm" onclick="window.open('https://api.whatsapp.com/send?phone=51${phone.replace(/[^0-9]/g, '')}&text=${encodeURIComponent(msg)}', '_blank'); window.app.closeModal(); window.app.showToast('✓ Mensaje WhatsApp enviado al apoderado', 'success');" style="font-weight: 800; padding: 8px 16px;">
          [Evaluación] Enviar Alerta de Inasistencia
        </button>
      </div>
    `);
  }

  notifyAllAbsencesAndTardinessWhatsApp(date = "19/08/2026") {
    const report = this.store.getDailyAttendanceReport(date);
    const totalToNotify = report.tardinessList.length + report.absenceList.length;

    this.showModal(`
      <div class="modal-header" style="background: #0f172a; color: white;">
        <h3 style="color: white;">📲 Envío Masivo de Avisos a Apoderados (WhatsApp)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body" style="text-align: center; padding: 20px;">
        <div style="font-size: 40px; margin-bottom: 8px;">[Móvil]⚡</div>
        <h4 style="font-size: 15px; font-weight: 800; color: #0b132b; margin-bottom: 6px;">
          Notificación Automatizada del Parte Diario (${date})
        </h4>
        <p style="font-size: 12.5px; color: #475569; margin-bottom: 16px;">
          Se enviarán ${totalToNotify} mensajes oficiales por la API de WhatsApp de la I.E.P. "El Educador":<br>
          • <strong>${report.tardinessList.length}</strong> avisos de tardanza con hora de ingreso y minutos de retraso.<br>
          • <strong>${report.absenceList.length}</strong> alertas de inasistencia sin justificación.
        </p>

        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; font-size: 11.5px; text-align: left; max-height: 140px; overflow-y: auto;">
          ${report.tardinessList.map(t => `<div style="color:#b45309; padding:2px 0;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> <strong>${t.studentName}</strong>: Tardanza ${t.arrivalTime} → Notificando a ${t.guardian} (${t.guardianPhone})</div>`).join('')}
          ${report.absenceList.map(a => `<div style="color:#dc2626; padding:2px 0;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> <strong>${a.studentName}</strong>: Inasistencia → Notificando a ${a.guardian} (${a.guardianPhone})</div>`).join('')}
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.closeModal(); window.app.showToast('✓ ${totalToNotify} notificaciones de WhatsApp despachadas con éxito a los apoderados', 'success');" style="font-weight: 800;">
          [Evaluación] Confirmar y Enviar Todo
        </button>
      </div>
    `);
  }

  showTardinessPassModal(studentCode) {
    const enrollments = this.store.getEnrollments();
    const st = enrollments.find(e => e.studentCode === studentCode) || enrollments[0];
    const timeNow = new Date().toLocaleTimeString("es-PE", { hour: '2-digit', minute: '2-digit' });

    this.showModal(`
      <div class="modal-header" style="background: #f59e0b; color: #0b132b;">
        <h3 style="color: #0b132b; font-weight: 900;">[Documento] Pase Oficial de Tardanza (Portería)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="padding: 20px; background: white;">
        <div style="border: 2px dashed #0b132b; padding: 16px; border-radius: 8px;">
          <div style="text-align: center; border-bottom: 2px solid #0b132b; padding-bottom: 8px; margin-bottom: 12px;">
            <div style="font-size: 10px; font-weight: 900; letter-spacing: 0.1em; color: #1e3a8a;">I.E.P. "EL EDUCADOR" • UGEL 05</div>
            <h3 style="font-size: 16px; font-weight: 900; margin: 2px 0;">BOLETA DE INGRESO CON TARDANZA</h3>
            <div style="font-size: 11px; color: #64748b;">Fecha: <strong>19/08/2026</strong> • Hora de Emisión: <strong>${timeNow}</strong></div>
          </div>

          <div style="font-size: 12.5px; line-height: 1.6; margin-bottom: 14px;">
            <div>Estudiante: <strong>${st.studentName}</strong></div>
            <div>Grado y Sección: <strong>${st.grade}</strong></div>
            <div>DNI: <strong>${st.dni}</strong> • Código: <strong>${st.studentCode}</strong></div>
            <div>Motivo: <strong>Tardanza registrada por lectura de fotocheck QR en puerta.</strong></div>
            <div>Apoderado Notificado: <strong>${st.guardian} (${st.guardianPhone})</strong></div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: center; margin-top: 24px; font-size: 10.5px;">
            <div>
              <div style="border-top: 1px solid #000; width: 80%; margin: 0 auto 2px;"></div>
              Auxiliar de Portería
            </div>
            <div>
              <div style="border-top: 1px solid #000; width: 80%; margin: 0 auto 2px;"></div>
              Docente de Aula (Recepción)
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-navy" onclick="window.print()" style="font-weight: 800;">
          [Imprimir] Imprimir Pase de Tardanza
        </button>
      </div>
    `);
  }

  openOfficialDailyReportPrintModal(date = "19/08/2026") {
    const report = this.store.getDailyAttendanceReport(date);

    this.showModal(`
      <div class="modal-header" style="background: #0f172a; color: white;">
        <h3 style="color: white;">[Documento] Parte Diario Oficial de Tardanzas e Inasistencias (UGEL 05)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 80vh; overflow-y: auto; padding: 24px; background: white;">
        
        <!-- Membrete Oficial -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0b132b; padding-bottom: 12px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo I.E.P. El Educador" style="width: 60px; height: 60px; object-fit: contain;" />
            <div>
              <div style="font-size: 10px; font-weight: 900; letter-spacing: 0.05em; color: #1e3a8a;">
                MINISTERIO DE EDUCACIÓN • DRELM • UGEL 05 SAN JUAN DE LURIGANCHO
              </div>
              <h2 style="font-size: 16px; font-weight: 900; margin: 2px 0; color: #0b132b;">
                I.E.P. "EL EDUCADOR" • PARTE DIARIO DE ASISTENCIA & PUNTUALIDAD
              </h2>
              <div style="font-size: 11px; color: #475569;">
                Códigos Modulares: Inicial: 0614826 • Primaria: 0614834 • Secundaria: 0729483
              </div>
            </div>
          </div>
          <div style="text-align: right; font-size: 11px;">
            <div>Fecha: <strong>${date}</strong></div>
            <div>Hora Límite: <strong>07:45 AM</strong></div>
            <div>Corte Puerta: <strong>08:15 AM</strong></div>
          </div>
        </div>

        <!-- Estadísticas del Parte Diario -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px; border-radius: 6px; margin-bottom: 16px; font-size: 11px; text-align: center;">
          <div>Matriculados: <strong>${report.totalEnrolled}</strong></div>
          <div>Puntuales: <strong style="color: #047857;">${report.presentList.length}</strong></div>
          <div>Tardanzas: <strong style="color: #b45309;">${report.tardinessList.length}</strong></div>
          <div>Inasistencias: <strong style="color: #dc2626;">${report.absenceList.length}</strong></div>
        </div>

        <!-- Cuadro 1: Tardanzas -->
        <h4 style="font-size: 12px; font-weight: 900; color: #92400e; margin: 12px 0 6px;">
          I. CUADRO DE ESTUDIANTES CON TARDANZA EN PUERTA
        </h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; margin-bottom: 16px;">
          <thead>
            <tr style="background: #fffbeb; border: 1px solid #cbd5e1;">
              <th style="padding: 5px; border: 1px solid #cbd5e1;">N°</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1; text-align: left;">Estudiante</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">DNI</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">Grado</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">Hora Ingreso</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">Demora</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1; text-align: left;">Apoderado Notificado</th>
            </tr>
          </thead>
          <tbody>
            ${report.tardinessList.map((t, i) => `
              <tr>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">${i + 1}</td>
                <td style="padding: 4px; border: 1px solid #e2e8f0;"><strong>${t.studentName}</strong></td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">${t.dni}</td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">${t.grade}</td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0; font-weight: bold; color: #b45309;">${t.arrivalTime}</td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">+${t.delayMinutes || '7'} min</td>
                <td style="padding: 4px; border: 1px solid #e2e8f0;">${t.guardian} (${t.guardianPhone})</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- Cuadro 2: Inasistencias -->
        <h4 style="font-size: 12px; font-weight: 900; color: #991b1b; margin: 12px 0 6px;">
          II. CUADRO DE ESTUDIANTES INASISTENTES AL PLANTEL
        </h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 10.5px; margin-bottom: 24px;">
          <thead>
            <tr style="background: #fef2f2; border: 1px solid #cbd5e1;">
              <th style="padding: 5px; border: 1px solid #cbd5e1;">N°</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1; text-align: left;">Estudiante</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">DNI</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">Grado</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1; text-align: left;">Apoderado</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">Teléfono</th>
              <th style="padding: 5px; border: 1px solid #cbd5e1;">Estado</th>
            </tr>
          </thead>
          <tbody>
            ${report.absenceList.map((a, i) => `
              <tr>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">${i + 1}</td>
                <td style="padding: 4px; border: 1px solid #e2e8f0;"><strong>${a.studentName}</strong></td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">${a.dni}</td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">${a.grade}</td>
                <td style="padding: 4px; border: 1px solid #e2e8f0;">${a.guardian}</td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0;">${a.guardianPhone}</td>
                <td style="padding: 4px; text-align: center; border: 1px solid #e2e8f0; font-weight: bold; color: #dc2626;">Inasistencia</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- Firmas Oficiales -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center; margin-top: 40px; font-size: 10px;">
          <div>
            <div style="border-top: 1px solid #000; width: 80%; margin: 0 auto 2px;"></div>
            <strong>Sr. Auxiliar de Portería</strong><br>Control Biométrico y QR
          </div>
          <div>
            <div style="border-top: 1px solid #000; width: 80%; margin: 0 auto 2px;"></div>
            <strong>Prof. Alex Lino</strong><br>Coordinación Pedagógica
          </div>
          <div>
            <div style="border-top: 1px solid #000; width: 80%; margin: 0 auto 2px;"></div>
            <strong>Lic. Manuel Cornejo</strong><br>Director General
          </div>
        </div>

      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-navy" onclick="window.print()" style="font-weight: 800; padding: 8px 20px;">
          [Imprimir] Imprimir Parte Diario A4
        </button>
      </div>
    `);
  }

  openMonthlyAttendanceReportModal(gradeId = "4sec") {
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const currentGrade = catalog.find(g => g.id === gradeId || g.id === "4sec") || catalog[4];

    this.showModal(`
      <div class="modal-header" style="background: #0f172a; color: #ffffff;">
        <h3 style="color: #ffffff;">[Documento] Consolidado Mensual de Asistencia Oficial (UGEL 05)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 80vh; overflow-y: auto; padding: 20px; background: #ffffff;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0b132b; padding-bottom: 10px; margin-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo I.E.P. El Educador" style="width: 55px; height: 55px; object-fit: contain;" />
            <div>
              <div style="font-size: 11px; font-weight: 900; color: #1e3a8a;">I.E.P. "EL EDUCADOR" • UGEL 05 S.J.L.</div>
              <h3 style="font-size: 15px; font-weight: 900; margin: 0; color: #0b132b;">CONSOLIDADO MENSUAL DE ASISTENCIA ESCOLAR</h3>
              <div style="font-size: 11px; color: #64748b;">Mes: <strong>Agosto 2026</strong> • Aula: <strong>${currentGrade.label}</strong></div>
            </div>
          </div>
          <div style="text-align: right; font-size: 10.5px;">
            <div>Tutor: <strong>${currentGrade.tutor || 'Prof. Roberto Silva'}</strong></div>
            <div>Código Modular: <strong>0729483</strong></div>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; margin-bottom: 16px;">
          <thead>
            <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
              <th style="padding: 6px; text-align: left; border: 1px solid #cbd5e1;">N°</th>
              <th style="padding: 6px; text-align: left; border: 1px solid #cbd5e1;">Apellidos y Nombres</th>
              <th style="padding: 6px; text-align: center; border: 1px solid #cbd5e1;">DNI</th>
              <th style="padding: 6px; text-align: center; border: 1px solid #cbd5e1;">Asistencias</th>
              <th style="padding: 6px; text-align: center; border: 1px solid #cbd5e1;">Tardanzas</th>
              <th style="padding: 6px; text-align: center; border: 1px solid #cbd5e1;">Faltas Just.</th>
              <th style="padding: 6px; text-align: center; border: 1px solid #cbd5e1;">Faltas Injust.</th>
              <th style="padding: 6px; text-align: right; border: 1px solid #cbd5e1;">% Asistencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 6px; border: 1px solid #e2e8f0;">01</td>
              <td style="padding: 6px; border: 1px solid #e2e8f0;"><strong>MÉNDEZ FLORES, SOFÍA</strong></td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">74891230</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">22</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">1</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">1</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">0</td>
              <td style="padding: 6px; text-align: right; border: 1px solid #e2e8f0; font-weight: bold; color: #047857;">98.5%</td>
            </tr>
            <tr>
              <td style="padding: 6px; border: 1px solid #e2e8f0;">02</td>
              <td style="padding: 6px; border: 1px solid #e2e8f0;"><strong>BENÍTEZ DÍAZ, CARLOS</strong></td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">75129034</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">20</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">2</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">1</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">0</td>
              <td style="padding: 6px; text-align: right; border: 1px solid #e2e8f0; font-weight: bold; color: #047857;">94.0%</td>
            </tr>
            <tr>
              <td style="padding: 6px; border: 1px solid #e2e8f0;">03</td>
              <td style="padding: 6px; border: 1px solid #e2e8f0;"><strong>ALBÚJAR ZEGARRA, MARINA</strong></td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">75849301</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">23</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">0</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">0</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">0</td>
              <td style="padding: 6px; text-align: right; border: 1px solid #e2e8f0; font-weight: bold; color: #047857;">100.0%</td>
            </tr>
            <tr>
              <td style="padding: 6px; border: 1px solid #e2e8f0;">04</td>
              <td style="padding: 6px; border: 1px solid #e2e8f0;"><strong>RAMOS QUISPE, MATEO</strong></td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">76891209</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">21</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">1</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">0</td>
              <td style="padding: 6px; text-align: center; border: 1px solid #e2e8f0;">1</td>
              <td style="padding: 6px; text-align: right; border: 1px solid #e2e8f0; font-weight: bold; color: #b45309;">91.3%</td>
            </tr>
          </tbody>
        </table>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 30px; text-align: center;">
          <div>
            <div style="border-top: 1px solid #000000; width: 75%; margin: 0 auto 4px;"></div>
            <div style="font-size: 11px; font-weight: bold;">${currentGrade.tutor || 'Prof. Roberto Silva'}</div>
            <div style="font-size: 10px; color: #64748b;">Tutor de Aula Responsable</div>
          </div>
          <div>
            <div style="border-top: 1px solid #000000; width: 75%; margin: 0 auto 4px;"></div>
            <div style="font-size: 11px; font-weight: bold;">Lic. Manuel Cornejo</div>
            <div style="font-size: 10px; color: #64748b;">Director General • I.E.P. El Educador</div>
          </div>
        </div>

      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-navy" onclick="window.print()" style="font-weight: 800; padding: 8px 20px;">
          [Imprimir] Imprimir Consolidado Oficial
        </button>
      </div>
    `);
  }

  // =========================================================================
  // GESTIÓN DE ESTRUCTURA DE GRADOS Y SECCIONES (ADMINISTRADOR)
  // =========================================================================
  openCreateGradeModal() {
    this.showModal(`
      <div class="modal-header">
        <h3>🏛️ Agregar Nuevo Grado Institucional</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label class="form-label">Nombre del Grado:</label>
          <input type="text" id="new-grd-label" class="form-control" placeholder="Ej: 3° de Secundaria" />
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label">Nivel Educativo:</label>
            <select id="new-grd-level" class="form-control">
              <option value="Inicial">Inicial</option>
              <option value="Primaria">Primaria</option>
              <option value="Secundaria" selected>Secundaria</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Sección (Opcional):</label>
            <input type="text" id="new-grd-sec" class="form-control" placeholder="Dejar en blanco si es única" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Aula / Ubicación Física:</label>
          <input type="text" id="new-grd-room" class="form-control" placeholder="Ej: Pabellón B - Aula 302" value="Pabellón B - Aula 302" />
        </div>
        <div class="form-group">
          <label class="form-label">Tutor(a) Asignado:</label>
          <input type="text" id="new-grd-tutor" class="form-control" placeholder="Ej: Prof. Roberto Silva" />
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmCreateGrade()">+ Guardar Grado</button>
      </div>
    `);
  }

  confirmCreateGrade() {
    const label = document.getElementById("new-grd-label").value.trim();
    const level = document.getElementById("new-grd-level").value;
    const section = document.getElementById("new-grd-sec").value.trim();
    const classroom = document.getElementById("new-grd-room").value.trim();
    const tutor = document.getElementById("new-grd-tutor").value.trim() || "Por Asignar";

    if (!label) {
      this.showToast("Ingrese el nombre del grado", "danger");
      return;
    }

    const id = `grd-${Date.now().toString().slice(-4)}`;
    this.store.addGrade({ id, label, level, section, classroom, tutor });
    this.closeModal();
    this.showToast(`✓ Grado "${label}" agregado al catálogo del colegio.`, "success");
    this.render();
  }

  openEditGradeModal(gradeId) {
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const g = catalog.find(x => x.id === gradeId);
    if (!g) return;

    this.showModal(`
      <div class="modal-header">
        <h3>✏️ Editar Grado / Aula: ${g.label}</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label class="form-label">Nombre del Grado:</label>
          <input type="text" id="edit-grd-label" class="form-control" value="${g.label}" />
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label">Nivel Educativo:</label>
            <select id="edit-grd-level" class="form-control">
              <option value="Inicial" ${g.level === 'Inicial' ? 'selected' : ''}>Inicial</option>
              <option value="Primaria" ${g.level === 'Primaria' ? 'selected' : ''}>Primaria</option>
              <option value="Secundaria" ${g.level === 'Secundaria' ? 'selected' : ''}>Secundaria</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Sección (Opcional):</label>
            <input type="text" id="edit-grd-sec" class="form-control" value="${g.section || ''}" placeholder="Dejar en blanco si no tiene" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Aula / Ubicación Física:</label>
          <input type="text" id="edit-grd-room" class="form-control" value="${g.classroom || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Tutor(a) Asignado:</label>
          <input type="text" id="edit-grd-tutor" class="form-control" value="${g.tutor || ''}" />
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmUpdateGrade('${g.id}')">✓ Guardar Cambios</button>
      </div>
    `);
  }

  confirmUpdateGrade(gradeId) {
    const label = document.getElementById("edit-grd-label").value.trim();
    const level = document.getElementById("edit-grd-level").value;
    const section = document.getElementById("edit-grd-sec").value.trim();
    const classroom = document.getElementById("edit-grd-room").value.trim();
    const tutor = document.getElementById("edit-grd-tutor").value.trim();

    if (!label) {
      this.showToast("El nombre del grado no puede estar vacío", "danger");
      return;
    }

    this.store.updateGrade(gradeId, { label, level, section, classroom, tutor });
    this.closeModal();
    this.showToast(`✓ Grado "${label}" actualizado exitosamente.`, "success");
    this.render();
  }

  confirmDeleteGrade(gradeId) {
    if (confirm("¿Está seguro de eliminar este grado del catálogo institucional?")) {
      this.store.deleteGrade(gradeId);
      this.showToast("Grado eliminado del catálogo.", "info");
      this.render();
    }
  }

  toggleAcademicSections(hasSections) {
    this.store.toggleAcademicSections(hasSections);
    this.showToast(hasSections ? "✓ Modo con Secciones Habilitado" : "✓ Modo Grados Únicos (Sin Secciones) Activado", "info");
    this.render();
  }

  // =========================================================================
  // GESTIÓN Y CREACIÓN DE HORARIOS ESCOLARES (ADMINISTRADOR)
  // =========================================================================

  getTeachersSelectOptions(selectedTeacherName = "") {
    const systemDocentes = (this.store.state.systemUsers || [])
      .filter(u => u.role === "Docente" || u.role === "Profesor")
      .map(u => ({ name: u.name, subject: u.subject || u.detail || "Docente" }));

    const defaultTeachers = [
      { name: "Prof. Fernando Rojas", subject: "Computación & Robótica" },
      { name: "Miss Leyli Graciela Reyes Cerquen", subject: "Ciencia y Tecnología" },
      { name: "Miss María Daysi Reyes Milla", subject: "Comunicación & Literatura" },
      { name: "Prof. Roberto Silva", subject: "Matemática (Álgebra / Trigonometría)" },
      { name: "Miss Julisa Magali Arroyo Araujo", subject: "Nivel Primaria" },
      { name: "Miss Maritza", subject: "Nivel Inicial" }
    ];

    const merged = [...systemDocentes];
    defaultTeachers.forEach(dt => {
      if (!merged.some(m => m.name.toLowerCase() === dt.name.toLowerCase())) {
        merged.push(dt);
      }
    });

    return merged.map(t => {
      const isSelected = selectedTeacherName && selectedTeacherName.toLowerCase().includes(t.name.toLowerCase());
      return `<option value="${t.name}" ${isSelected ? 'selected' : ''}>${t.name} (${t.subject})</option>`;
    }).join('');
  }

  getPeriodIndexOptions(selectedIndex = 0) {
    const periodOptions = [
      { index: 0, time: "08:00 - 08:50", label: "1° Bloque (08:00 - 08:50 am)" },
      { index: 1, time: "08:50 - 09:40", label: "2° Bloque (08:50 - 09:40 am)" },
      { index: 2, time: "09:40 - 10:30", label: "3° Bloque (09:40 - 10:30 am)" },
      { index: 4, time: "10:50 - 11:40", label: "4° Bloque (10:50 - 11:40 am)" },
      { index: 5, time: "11:40 - 12:30", label: "5° Bloque (11:40 - 12:30 pm)" },
      { index: 6, time: "12:30 - 01:20", label: "6° Bloque (12:30 - 01:20 pm)" },
      { index: 8, time: "01:50 - 02:40", label: "7° Bloque (01:50 - 02:40 pm)" },
      { index: 9, time: "02:40 - 03:30", label: "8° Bloque (02:40 - 03:30 pm)" }
    ];

    return periodOptions.map(p => {
      const isSel = p.index === parseInt(selectedIndex, 10);
      return `<option value="${p.index}" ${isSel ? 'selected' : ''}>${p.label}</option>`;
    }).join('');
  }

  openCreateScheduleModal(gradeId, defaultRowIndex = 0, defaultDayKey = "mon") {
    const targetGradeId = gradeId || this.store.state.selectedScheduleGrade || "4sec-a";
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const currentGrade = catalog.find(g => g.id === targetGradeId) || catalog[4];

    this.showModal(`
      <div class="modal-header" style="background: #1e3a8a; color: #ffffff;">
        <h3 style="color: #ffffff;">➕ Crear / Asignar Clase a Horario Escolar</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 8px 12px; margin-bottom: 12px; font-size: 12px; color: #1e3a8a; font-weight: 700;">
          [Colegio] Asignación de Bloque Lectivo • Duración: 50 min • Periodo Lectivo 2026
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); margin-bottom: 10px;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Aula / Grado:</label>
            <select id="sched-create-grade" class="form-control" style="font-weight: bold;">
              ${catalog.map(g => `<option value="${g.id}" ${g.id === targetGradeId ? 'selected' : ''}>${g.label} (${g.level})</option>`).join('')}
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Día de la Semana:</label>
            <select id="sched-create-day" class="form-control" style="font-weight: bold;">
              <option value="mon" ${defaultDayKey === 'mon' ? 'selected' : ''}>Lunes</option>
              <option value="tue" ${defaultDayKey === 'tue' ? 'selected' : ''}>Martes</option>
              <option value="wed" ${defaultDayKey === 'wed' ? 'selected' : ''}>Miércoles</option>
              <option value="thu" ${defaultDayKey === 'thu' ? 'selected' : ''}>Jueves</option>
              <option value="fri" ${defaultDayKey === 'fri' ? 'selected' : ''}>Viernes</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 10px;">
          <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Bloque Horario (Horas Lectivas de 50 min):</label>
          <select id="sched-create-row" class="form-control" style="font-weight: bold; border-color: #3b82f6;">
            ${this.getPeriodIndexOptions(defaultRowIndex)}
          </select>
        </div>

        <div class="form-group" style="margin-bottom: 10px;">
          <label class="form-label" style="font-weight: 800; font-size: 11.5px; color: #1e3a8a;">
            [Lista] Asignatura / Curso (Boleta Oficial de Notas):
          </label>
          <select id="sched-create-course" class="form-control" style="font-size: 12px; font-weight: bold; border-color: #3b82f6; background: #ffffff;">
            ${this.getBoletaCoursesSelectOptions("Aritmética")}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); margin-bottom: 10px;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Docente Responsable:</label>
            <select id="sched-create-teacher" class="form-control" style="font-size: 12px; font-weight: bold;">
              ${this.getTeachersSelectOptions()}
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Ambiente / Aula:</label>
            <input type="text" id="sched-create-room" class="form-control" placeholder="Ej: Aula 401" value="${currentGrade.classroom || 'Aula 401'}" style="font-size: 12px;" />
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Color de la Tarjeta en Horario:</label>
          <select id="sched-create-color" class="form-control" style="font-size: 12px; font-weight: bold;">
            <option value="navy">🔵 Azul Institucional (Matemáticas / Ciencias)</option>
            <option value="gold"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> Dorado / Amarillo (Comunicación / Letras)</option>
            <option value="emerald"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Verde Esmeralda (Ciencia / Biología / EPT)</option>
            <option value="purple">🟣 Morado / Púrpura (Ciencias Sociales / Filosofía)</option>
            <option value="red"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Rojo (Cívica / Tutoria)</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmSaveCreatedScheduleSlot()" style="font-weight: 800;">
          ✓ Guardar y Publicar en Horario
        </button>
      </div>
    `);
  }

  confirmSaveCreatedScheduleSlot() {
    const gradeId = document.getElementById("sched-create-grade").value;
    const dayKey = document.getElementById("sched-create-day").value;
    const rowIndex = parseInt(document.getElementById("sched-create-row").value, 10);
    const course = document.getElementById("sched-create-course").value;
    const teacher = document.getElementById("sched-create-teacher").value;
    const room = document.getElementById("sched-create-room").value.trim() || "Aula Principal";
    const color = document.getElementById("sched-create-color").value;

    this.store.updateScheduleSlot(gradeId, rowIndex, dayKey, {
      course,
      teacher,
      room,
      color
    });

    this.closeModal();
    this.showToast(`✓ Clase de "${course}" (${teacher}) programada con éxito en el horario`, "success");
    this.render();
  }

  openEditScheduleSlotModal(gradeId, rowIndex, dayKey) {
    const targetGradeId = gradeId || this.store.state.selectedScheduleGrade || "4sec-a";
    const schedule = this.store.getSchedule(targetGradeId);
    const row = schedule[rowIndex];
    if (!row || !row[dayKey]) return;
    const slot = row[dayKey];
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const currentGrade = catalog.find(g => g.id === targetGradeId) || catalog[4];

    const dayNameMap = { mon: 'Lunes', tue: 'Martes', wed: 'Miércoles', thu: 'Jueves', fri: 'Viernes' };

    this.showModal(`
      <div class="modal-header" style="background: #1e3a8a; color: #ffffff;">
        <h3 style="color: #ffffff;">✏️ Editar Bloque de Horario (${dayNameMap[dayKey]} • ${row.time})</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 8px 12px; margin-bottom: 12px; font-size: 12px; color: #1e3a8a; font-weight: 700;">
          [Colegio] ${currentGrade.label} • Bloque: ${row.time} • ${dayNameMap[dayKey]}
        </div>

        <div class="form-group" style="margin-bottom: 10px;">
          <label class="form-label" style="font-weight: 800; font-size: 11.5px; color: #1e3a8a;">
            [Lista] Asignatura / Curso (Boleta Oficial de Notas):
          </label>
          <select id="edit-slot-course" class="form-control" style="font-size: 12px; font-weight: bold; border-color: #3b82f6;">
            ${this.getBoletaCoursesSelectOptions(slot.course)}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); margin-bottom: 10px;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Docente Responsable:</label>
            <select id="edit-slot-teacher" class="form-control" style="font-size: 12px; font-weight: bold;">
              ${this.getTeachersSelectOptions(slot.teacher)}
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Ambiente / Aula:</label>
            <input type="text" id="edit-slot-room" class="form-control" value="${slot.room || currentGrade.classroom}" style="font-size: 12px;" />
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label" style="font-weight: 700; font-size: 11.5px;">Color de la Tarjeta:</label>
          <select id="edit-slot-color" class="form-control" style="font-size: 12px; font-weight: bold;">
            <option value="navy" ${slot.color === 'navy' ? 'selected' : ''}>🔵 Azul Institucional</option>
            <option value="gold" ${slot.color === 'gold' ? 'selected' : ''}><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> Dorado / Amarillo</option>
            <option value="emerald" ${slot.color === 'emerald' ? 'selected' : ''}><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Verde Esmeralda</option>
            <option value="purple" ${slot.color === 'purple' ? 'selected' : ''}>🟣 Morado</option>
            <option value="red" ${slot.color === 'red' ? 'selected' : ''}><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Rojo</option>
          </select>
        </div>
      </div>
      <div class="modal-footer" style="display: flex; justify-content: space-between;">
        <button class="btn btn-outline btn-sm" onclick="window.app.deleteScheduleSlot('${targetGradeId}', ${rowIndex}, '${dayKey}')" style="color: var(--color-red-600); border-color: #fca5a5; font-weight: 800;">
          🗑️ Eliminar Clase de este Bloque
        </button>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
          <button class="btn btn-navy" onclick="window.app.saveScheduleSlot('${targetGradeId}', ${rowIndex}, '${dayKey}')" style="font-weight: 800;">
            ✓ Guardar Cambios
          </button>
        </div>
      </div>
    `);
  }

  saveScheduleSlot(gradeId, rowIndex, dayKey) {
    const course = document.getElementById("edit-slot-course").value;
    const teacher = document.getElementById("edit-slot-teacher").value;
    const room = document.getElementById("edit-slot-room").value;
    const color = document.getElementById("edit-slot-color").value;

    this.store.updateScheduleSlot(gradeId, rowIndex, dayKey, { course, teacher, room, color });
    this.closeModal();
    this.showToast(`✓ Horario de "${course}" actualizado en la base de datos`, "success");
    this.render();
  }

  deleteScheduleSlot(gradeId, rowIndex, dayKey) {
    this.store.deleteScheduleSlot(gradeId, rowIndex, dayKey);
    this.closeModal();
    this.showToast("✓ Clase eliminada del bloque horario (Hora liberada)", "info");
    this.render();
  }

  openAutoScheduleModal(gradeId) {
    const targetGradeId = gradeId || this.store.state.selectedScheduleGrade || "4sec-a";
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const currentGrade = catalog.find(g => g.id === targetGradeId) || catalog[4];

    this.showModal(`
      <div class="modal-header" style="background: #1e3a8a; color: #ffffff;">
        <h3 style="color: #ffffff;">⚡ Generador de Horario Automático Balanceado</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body">
        <div style="font-size: 13px; color: #1e293b; margin-bottom: 12px;">
          ¿Desea generar automáticamente la matriz semanal de horario curricular para <strong>${currentGrade.label} (${currentGrade.level})</strong>?
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; font-size: 12px; color: #475569;">
          <div style="font-weight: 800; color: #1e3a8a; margin-bottom: 4px;">Distribución Pedagógica 2026:</div>
          <ul style="margin: 0; padding-left: 18px; line-height: 1.6;">
            <li>Matemáticas (Aritmética, Álgebra, Geometría, Trigonometría, RM)</li>
            <li>Comunicación (Lenguaje, Literatura, Razonamiento Verbal)</li>
            <li>Ciencia y Tecnología (Física, Química, Biología)</li>
            <li>Ciencias Sociales (Historia del Perú, Geografía, Filosofía)</li>
            <li>Computación & Robótica, Inglés, Arte y DPCC</li>
            <li>Recesos automáticos de 10:30 a 10:50 am y Almuerzo de 01:20 a 01:50 pm.</li>
          </ul>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmGenerateAutoSchedule('${targetGradeId}')" style="font-weight: 800;">
          ⚡ Generar y Publicar Horario Balanceado
        </button>
      </div>
    `);
  }

  confirmGenerateAutoSchedule(gradeId) {
    const targetGradeId = gradeId || this.store.state.selectedScheduleGrade || "4sec-a";
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const currentGrade = catalog.find(g => g.id === targetGradeId) || catalog[4];
    const room = currentGrade.classroom || "Aula Principal";

    const autoSchedule = [
      {
        time: "08:00 - 08:50",
        mon: { course: "Aritmética", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        tue: { course: "Lenguaje", teacher: "Miss María Daysi Reyes", room: room, color: "gold" },
        wed: { course: "Álgebra", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        thu: { course: "Física", teacher: "Miss Leyli Graciela Reyes", room: "Lab. Ciencias", color: "emerald" },
        fri: { course: "Inglés", teacher: "Prof. Carlos Mendoza", room: room, color: "purple" }
      },
      {
        time: "08:50 - 09:40",
        mon: { course: "Aritmética", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        tue: { course: "Lenguaje", teacher: "Miss María Daysi Reyes", room: room, color: "gold" },
        wed: { course: "Álgebra", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        thu: { course: "Física", teacher: "Miss Leyli Graciela Reyes", room: "Lab. Ciencias", color: "emerald" },
        fri: { course: "Inglés", teacher: "Prof. Carlos Mendoza", room: room, color: "purple" }
      },
      {
        time: "09:40 - 10:30",
        mon: { course: "Geometría", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        tue: { course: "Literatura", teacher: "Miss María Daysi Reyes", room: room, color: "gold" },
        wed: { course: "Biología", teacher: "Miss Leyli Graciela Reyes", room: room, color: "emerald" },
        thu: { course: "Química", teacher: "Miss Leyli Graciela Reyes", room: "Lab. Ciencias", color: "emerald" },
        fri: { course: "Historia del Perú", teacher: "Prof. Alejandro Vargas", room: room, color: "purple" }
      },
      { time: "10:30 - 10:50", isBreak: true, title: "Receso Matutino" },
      {
        time: "10:50 - 11:40",
        mon: { course: "Trigonometría", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        tue: { course: "Razonamiento Verbal", teacher: "Miss María Daysi Reyes", room: room, color: "gold" },
        wed: { course: "Química", teacher: "Miss Leyli Graciela Reyes", room: "Lab. Ciencias", color: "emerald" },
        thu: { course: "Computación & Robótica", teacher: "Prof. Fernando Rojas", room: "Lab. Cómputo", color: "emerald" },
        fri: { course: "Historia Universal", teacher: "Prof. Alejandro Vargas", room: room, color: "purple" }
      },
      {
        time: "11:40 - 12:30",
        mon: { course: "Razonamiento Matemático", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        tue: { course: "Cívica", teacher: "Prof. Manuel Soto", room: room, color: "red" },
        wed: { course: "Geografía", teacher: "Prof. Alejandro Vargas", room: room, color: "purple" },
        thu: { course: "Computación & Robótica", teacher: "Prof. Fernando Rojas", room: "Lab. Cómputo", color: "emerald" },
        fri: { course: "Educación Física", teacher: "Prof. Dante Morales", room: "Patio Techado", color: "red" }
      },
      {
        time: "12:30 - 01:20",
        mon: { course: "Razonamiento Matemático", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        tue: { course: "Psicología", teacher: "Prof. Manuel Soto", room: room, color: "red" },
        wed: { course: "Filosofía", teacher: "Prof. Alejandro Vargas", room: room, color: "purple" },
        thu: { course: "Arte y Cultura", teacher: "Miss Rosa Linares", room: "Taller Arte", color: "gold" },
        fri: { course: "Educación Física", teacher: "Prof. Dante Morales", room: "Patio Techado", color: "red" }
      },
      { time: "01:20 - 01:50", isBreak: true, isLunch: true, title: "Almuerzo Escolar" },
      {
        time: "01:50 - 02:40",
        mon: { course: "Computación", teacher: "Prof. Fernando Rojas", room: "Lab. Cómputo", color: "emerald" },
        tue: { course: "Biología", teacher: "Miss Leyli Graciela Reyes", room: room, color: "emerald" },
        wed: { course: "Gestión Empresarial", teacher: "Prof. Fernando Rojas", room: room, color: "gold" },
        thu: { course: "Tutoría & Orientación", teacher: currentGrade.tutor || "Prof. Roberto Silva", room: room, color: "red" },
        fri: { course: "Educación Religiosa", teacher: "Prof. Manuel Soto", room: room, color: "purple" }
      },
      {
        time: "02:40 - 03:30",
        mon: { course: "Taller de Refuerzo", teacher: "Prof. Roberto Silva", room: room, color: "navy" },
        tue: { course: "Círculo de Lectura", teacher: "Miss María Daysi Reyes", room: room, color: "gold" },
        wed: { course: "Taller de Ciencias", teacher: "Miss Leyli Graciela Reyes", room: "Lab. Ciencias", color: "emerald" },
        thu: { course: "Club de Robótica", teacher: "Prof. Fernando Rojas", room: "Lab. Cómputo", color: "emerald" },
        fri: { course: "Evaluación & Retroalimentación", teacher: currentGrade.tutor || "Prof. Roberto Silva", room: room, color: "red" }
      }
    ];

    this.store.setFullGradeSchedule(targetGradeId, autoSchedule);
    this.closeModal();
    this.showToast(`✓ Horario automático balanceado generado y publicado para ${currentGrade.label}`, "success");
    this.render();
  }

  openCloneScheduleModal(sourceGradeId) {
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const currentGrade = catalog.find(g => g.id === sourceGradeId) || catalog[4];

    this.showModal(`
      <div class="modal-header" style="background: #1e3a8a; color: #ffffff;">
        <h3 style="color: #ffffff;">[Lista] Clonar Horario a Otra Aula / Sección</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: #ffffff;">✕</button>
      </div>
      <div class="modal-body">
        <div style="font-size: 13px; color: #1e293b; margin-bottom: 12px;">
          Copiar la estructura y distribución horaria de <strong>${currentGrade.label}</strong> hacia:
        </div>
        <div class="form-group">
          <label class="form-label" style="font-weight: 800;">Aula de Destino:</label>
          <select id="clone-target-grade" class="form-control" style="font-size: 12px; font-weight: bold; border-color: #3b82f6;">
            ${catalog.filter(g => g.id !== sourceGradeId).map(g => `<option value="${g.id}">${g.label} (${g.level})</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmCloneSchedule('${sourceGradeId}')" style="font-weight: 800;">
          [Lista] Confirmar y Clonar Horario
        </button>
      </div>
    `);
  }

  confirmCloneSchedule(sourceGradeId) {
    const targetGradeId = document.getElementById("clone-target-grade").value;
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const targetGrade = catalog.find(g => g.id === targetGradeId);

    this.store.cloneSchedule(sourceGradeId, targetGradeId);
    this.closeModal();
    this.showToast(`✓ Horario clonado exitosamente a ${targetGrade ? targetGrade.label : targetGradeId}`, "success");
    this.store.setSelectedScheduleGrade(targetGradeId);
    this.render();
  }

  clearScheduleGrade(gradeId) {
    const catalog = this.store.state.gradesCatalog || initialData.gradesCatalog;
    const currentGrade = catalog.find(g => g.id === gradeId) || catalog[4];

    if (confirm(`¿Está seguro de que desea limpiar todos los bloques lectivos del horario de ${currentGrade.label}? Los recesos se mantendrán.`)) {
      this.store.clearGradeSchedule(gradeId);
      this.showToast(`✓ Horario de ${currentGrade.label} reseteado a plantilla vacía`, "info");
      this.render();
    }
  }

  // Sílabus
  openCreateSyllabusModal() {
    this.showModal(`
      <div class="modal-header"><h3>+ Crear Sílabo</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body">
        <div class="form-group"><label class="form-label">Curso:</label><input type="text" id="new-sil-name" class="form-control" /></div>
        <div class="form-group"><label class="form-label">Docente:</label><input type="text" id="new-sil-teacher" class="form-control" /></div>
      </div>
      <div class="modal-footer"><button class="btn btn-red" onclick="window.app.confirmCreateSyllabus()">Publicar en Servidor</button></div>
    `);
  }

  confirmCreateSyllabus() {
    const courseName = document.getElementById("new-sil-name").value;
    const teacher = document.getElementById("new-sil-teacher").value;
    if (!courseName) return;
    this.store.createSyllabus({ courseName, teacher: teacher || "Docente Asignado" });
    this.closeModal();
    this.showToast("✓ Sílabo guardado en el servidor", "success");
  }

  openEditSyllabusModal(syllabusId) {
    const syllabus = this.store.state.syllabi.find(s => s.id === syllabusId);
    if (!syllabus) return;
    this.showModal(`
      <div class="modal-header"><h3>✏️ Editar Sílabo</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body">
        <div class="form-group"><label class="form-label">Curso:</label><input type="text" id="edit-sil-name" class="form-control" value="${syllabus.courseName}" /></div>
        <div class="form-group"><label class="form-label">Docente:</label><input type="text" id="edit-sil-teacher" class="form-control" value="${syllabus.teacher}" /></div>
      </div>
      <div class="modal-footer"><button class="btn btn-navy" onclick="window.app.confirmUpdateSyllabus('${syllabus.id}')">Guardar</button></div>
    `);
  }

  confirmUpdateSyllabus(syllabusId) {
    const courseName = document.getElementById("edit-sil-name").value;
    const teacher = document.getElementById("edit-sil-teacher").value;
    this.store.updateSyllabus(syllabusId, { courseName, teacher });
    this.closeModal();
    this.showToast("✓ Sílabo actualizado en base de datos", "success");
  }

  confirmDeleteSyllabus(syllabusId) {
    if (confirm("¿Eliminar sílabo de la base de datos?")) {
      this.store.deleteSyllabus(syllabusId);
      this.showToast("Sílabo eliminado de la base de datos", "info");
    }
  }

  openEditReviewModal(reviewId) {
    const review = this.store.state.notebookReviews.find(r => r.id === reviewId);
    if (!review) return;
    this.showModal(`
      <div class="modal-header"><h3>✏️ Modificar Revisión QR</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body">
        <div class="form-group"><label class="form-label">Nota (0-20):</label><input type="number" id="edit-rev-score" class="form-control" value="${review.score}" /></div>
      </div>
      <div class="modal-footer"><button class="btn btn-navy" onclick="window.app.confirmUpdateReview('${review.id}')">Guardar</button></div>
    `);
  }

  confirmUpdateReview(reviewId) {
    const score = parseFloat(document.getElementById("edit-rev-score").value) || 0;
    this.store.updateNotebookReview(reviewId, { score });
    this.closeModal();
    this.showToast("✓ Registro de cuaderno actualizado en DB", "success");
  }

  openStickerSheetModal() {
    this.setNotebookActiveSubTab('stickers');
  }

  // Cambiar pestaña del Módulo de Calificaciones
  setGradesActiveTab(tab) {
    this.store.state.activeGradesTab = tab;
    this.store.saveState();
    this.render();
  }

  // Cambiar Asignatura Activa para Calificar (Docente de Área)
  changeSelectedGradingSubject(subjectKey) {
    this.store.state.selectedGradingSubject = subjectKey;
    this.store.saveState();
    this.render();
  }

  // Guardar Calificaciones de una Asignatura para todos los alumnos del aula (Docente de Curso)
  handleSaveSubjectGrades(e, subjectKey) {
    if (e) e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const normalizeGrade = (val) => {
      if (!val) return "";
      const str = val.trim().toUpperCase();
      if (["AD", "A", "B", "C"].includes(str)) return str;
      const num = parseFloat(str);
      if (!isNaN(num)) {
        if (num >= 18) return "AD";
        if (num >= 14) return "A";
        if (num >= 11) return "B";
        return "C";
      }
      return str;
    };

    // Estructura: { "mendez": { b1, b2, b3, b4 }, "benitez": { b1, b2, b3, b4 }, "albujar": { ... } }
    const studentsGradesMap = {};

    for (const [key, value] of formData.entries()) {
      if (key.startsWith("grade_")) {
        const parts = key.split("_"); // ["grade", studentKey, bimKey]
        if (parts.length >= 3) {
          const studentKey = parts[1];
          const bimKey = parts[2];
          if (!studentsGradesMap[studentKey]) studentsGradesMap[studentKey] = {};
          studentsGradesMap[studentKey][bimKey] = normalizeGrade(value);
        }
      }
    }

    this.store.saveSubjectGrades(subjectKey, studentsGradesMap);
    this.showToast(`✓ Calificaciones de ${subjectKey.toUpperCase().replace(/_/g, ' ')} guardadas y consolidadas en las boletas.`, "success");
    this.render();
  }

  // Guardar Evaluación de Tutoría (Apreciaciones, Asistencias y Familias) por el Tutor de Aula
  handleSaveTutorEvaluation(e, studentKey) {
    if (e) e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const appreciations = {
      b1: formData.get("app_b1") || "",
      b2: formData.get("app_b2") || "",
      b3: formData.get("app_b3") || "",
      b4: formData.get("app_b4") || ""
    };

    const attendance = {
      b1: {
        inasist_just: formData.get("att_b1_ij") || "-",
        inasist_injust: formData.get("att_b1_ii") || "-",
        tard_just: formData.get("att_b1_tj") || "-",
        tard_injust: formData.get("att_b1_ti") || "-"
      },
      b2: {
        inasist_just: formData.get("att_b2_ij") || "-",
        inasist_injust: formData.get("att_b2_ii") || "-",
        tard_just: formData.get("att_b2_tj") || "-",
        tard_injust: formData.get("att_b2_ti") || "-"
      },
      b3: {
        inasist_just: formData.get("att_b3_ij") || "",
        inasist_injust: formData.get("att_b3_ii") || "",
        tard_just: formData.get("att_b3_tj") || "",
        tard_injust: formData.get("att_b3_ti") || ""
      },
      b4: {
        inasist_just: formData.get("att_b4_ij") || "",
        inasist_injust: formData.get("att_b4_ii") || "",
        tard_just: formData.get("att_b4_tj") || "",
        tard_injust: formData.get("att_b4_ti") || ""
      }
    };

    const parentCriteria = {};
    for (let i = 1; i <= 6; i++) {
      parentCriteria[`c${i}`] = {
        b1: (formData.get(`pc_c${i}_b1`) || "").trim().toUpperCase(),
        b2: (formData.get(`pc_c${i}_b2`) || "").trim().toUpperCase(),
        b3: (formData.get(`pc_c${i}_b3`) || "").trim().toUpperCase(),
        b4: (formData.get(`pc_c${i}_b4`) || "").trim().toUpperCase()
      };
    }

    this.store.saveTutorEvaluation(studentKey, {
      appreciations,
      attendance,
      parentCriteria
    });

    const allBoletas = this.store.state.boletaData || initialData.boletaData;
    const student = allBoletas[studentKey] || allBoletas.mendez;
    this.showToast(`✓ Evaluación de Tutoría de ${student.name} guardada exitosamente.`, "success");
    this.render();
  }

  // Guardar Calificaciones y Apreciaciones desde el Portal Docente
  handleSaveTeacherGrades(e, studentKey) {
    if (e) e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const allBoletas = this.store.state.boletaData || initialData.boletaData;
    const currentStudent = allBoletas[studentKey] || allBoletas.mendez;
    const updatedGrades = { ...(currentStudent.grades || {}) };
    
    // Normalizador de notas literales y vigesimales
    const normalizeGrade = (val) => {
      if (!val) return "";
      const str = val.trim().toUpperCase();
      if (["AD", "A", "B", "C"].includes(str)) return str;
      const num = parseFloat(str);
      if (!isNaN(num)) {
        if (num >= 18) return "AD";
        if (num >= 14) return "A";
        if (num >= 11) return "B";
        return "C";
      }
      return str;
    };

    // Extraer calificaciones de las asignaturas
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("gr_")) {
        const parts = key.split("_");
        if (parts.length >= 3) {
          const subKey = parts.slice(1, -1).join("_");
          const bimKey = parts[parts.length - 1];
          if (!updatedGrades[subKey]) updatedGrades[subKey] = {};
          updatedGrades[subKey][bimKey] = normalizeGrade(value);
        }
      }
    }

    // Extraer apreciaciones docentes
    const updatedAppreciations = {
      b1: formData.get("app_b1") || "",
      b2: formData.get("app_b2") || "",
      b3: formData.get("app_b3") || "",
      b4: formData.get("app_b4") || ""
    };

    this.store.saveBoletaStudentData(studentKey, {
      grades: updatedGrades,
      appreciations: updatedAppreciations
    });

    this.showToast(`✓ Calificaciones de ${currentStudent.name} guardadas y boleta oficial sincronizada.`, "success");
  }

  // Cambiar el Estudiante para la Boleta Oficial
  changeBoletaStudent(studentKey) {
    this.store.state.selectedBoletaStudent = studentKey;
    this.store.saveState();
    this.render();
  }

  // Métodos de Control para el Horario Docente y Horario por Aula
  setTeacherScheduleTab(tab) {
    this.store.setTeacherScheduleTab(tab);
    this.render();
  }

  onTeacherChange(teacherId) {
    this.store.setSelectedTeacher(teacherId);
    this.render();
  }

  onTeacherCourseFilterChange(course) {
    this.store.setSelectedTeacherCourseFilter(course);
    this.render();
  }

  onScheduleGradeChange(gradeId) {
    this.store.state.selectedScheduleGrade = gradeId;
    this.store.saveState();
    this.render();
  }

  // Cambiar el Estudiante Hijo Activo para el Padre de Familia
  changeSelectedChild(childId) {
    this.store.setSelectedChild(childId);
    const child = this.store.getSelectedChild();
    if (child) {
      this.showToast(`Consultando datos de: ${child.name} (${child.grade})`, "info");
    }
  }

  // Modal Imprimible del Informe de Cuadernos para Apoderados
  openPrintParentNotebookReportModal() {
    const studentName = "Sofía Méndez Flores";
    const studentIdCode = "EST-2026-042";
    const studentGrade = "4to de Secundaria";
    const studentDni = "74891230";
    const studentTutor = "Prof. Roberto Silva";
    const parentName = (this.store.state.users.padre && this.store.state.users.padre.name) || "Dra. Carmen Méndez";

    const notebooks = [
      { course: "Matemática", teacher: "Prof. Roberto Silva", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Tareas completas al 100%, márgenes impecables y esquemas en orden." },
      { course: "Comunicación", teacher: "Miss María Daysi Reyes", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "17 (A)", remarks: "Análisis de textos y caligrafía óptima. Muy buen desarrollo." },
      { course: "Ciencia y Tecnología", teacher: "Miss Leyli Reyes", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "18 (AD)", remarks: "Prácticas experimentales ilustradas y fichas de laboratorio selladas." },
      { course: "Ciencias Sociales", teacher: "Prof. Javier Vega", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "16 (A)", remarks: "Mapas históricos y resúmenes de época bien estructurados." },
      { course: "Inglés", teacher: "Miss Andrea Ramos", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> REVISADO & AL DÍA", score: "19 (AD)", remarks: "Vocabulario y ejercicios de gramática avanzados completos." },
      { course: "EPT (Computación)", teacher: "Prof. Alex Lino", statusLabel: "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;margin-right:4px;vertical-align:middle;"></span> OBSERVADO", score: "13 (B)", remarks: "Falta pegar y desarrollar la ficha de proyecto técnico N° 3. Presentar este viernes." }
    ];

    this.showModal(`
      <div class="modal-header">
        <h3>[Documento] Informe Oficial de Revisión de Cuadernos - ${studentName}</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        ${Components.renderOfficialInstitutionalHeader("INFORME OFICIAL DE SELLADO DE CUADERNOS POR QR", "SEGUIMIENTO BIMESTRAL 2026")}
        
        <div style="margin: 16px 0; font-size: 13px; line-height: 1.6; background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
          <p style="margin: 2px 0;"><strong>Estudiante Matriculada:</strong> ${studentName} (<code>${studentIdCode}</code>)</p>
          <p style="margin: 2px 0;"><strong>Grado y Sección:</strong> ${studentGrade} • <strong>DNI:</strong> ${studentDni}</p>
          <p style="margin: 2px 0;"><strong>Apoderada Responsable:</strong> ${parentName}</p>
          <p style="margin: 2px 0;"><strong>Tutor de Aula:</strong> ${studentTutor}</p>
          <p style="margin: 2px 0;"><strong>Estado de Cuadernos:</strong> 5 de 6 Cuadernos Sellados y Aprobados (83.3% de Cumplimiento)</p>
        </div>

        <table class="data-table" style="font-size: 12px; margin-top: 12px; border: 1px solid #cbd5e1; width: 100%;">
          <thead>
            <tr style="background: #0b132b; color: white;">
              <th>Asignatura</th>
              <th>Docente</th>
              <th>Sello QR</th>
              <th style="text-align:center;">Nota</th>
              <th>Observación del Docente</th>
            </tr>
          </thead>
          <tbody>
            ${notebooks.map(n => `
              <tr style="${n.statusLabel.includes('OBSERVADO') ? 'background: #fef3c7;' : ''}">
                <td><strong>${n.course}</strong></td>
                <td>${n.teacher}</td>
                <td>${n.statusLabel}</td>
                <td style="text-align:center;"><strong style="color: ${n.statusLabel.includes('AL DÍA') ? '#15803d' : '#b45309'};">${n.score}</strong></td>
                <td style="font-size: 11px;">${n.remarks}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="margin-top: 36px; display: flex; justify-content: space-around; text-align: center; font-size: 11px;">
          <div style="border-top: 1px solid #000; width: 40%; padding-top: 6px;">
            <strong>${studentTutor}</strong><br>Tutor de 4to Sec. 'A'
          </div>
          <div style="border-top: 1px solid #000; width: 40%; padding-top: 6px;">
            <strong>Prof. Alex Lino</strong><br>Coordinación Académica S.J.L.
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-gold" onclick="window.print()">[Imprimir] Imprimir Documento</button>
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
      </div>
    `);
  }

  openSyllabusModal(syllabusId) {
    const s = this.store.state.syllabi.find(x => x.id === syllabusId) || this.store.state.syllabi[0];
    if (!s) return;
    this.showModal(`
      <div class="modal-header"><h3>${s.courseName}</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body"><p>Docente: ${s.teacher}</p></div>
      <div class="modal-footer"><button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button></div>
    `);
  }

  openSubmitModal(taskId) {
    this.showModal(`
      <div class="modal-header"><h3>Entregar Tarea</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body"><p>Selecciona tu archivo para enviar</p></div>
      <div class="modal-footer"><button class="btn btn-red" onclick="window.app.confirmSubmitTask('${taskId}')">Enviar</button></div>
    `);
  }

  confirmSubmitTask(taskId) {
    this.store.submitTask(taskId, "Tarea_Entregada.pdf", "Listo");
    this.closeModal();
    this.showToast("Tarea entregada", "success");
  }

  // =========================================================================
  // PASARELA DE PAGO ONLINE Y DESBLOQUEO AUTOMÁTICO DE INTRANET
  // =========================================================================
  openPayModal(paymentId, amount = 480.00, concept = "Pensión Escolar - Agosto 2026") {
    this.showModal(`
      <div class="modal-header">
        <h3>[Pago] Pagar con Tarjeta & Desbloquear Intranet</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div style="background: var(--color-navy-50); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
          <div style="font-size: 13px; font-weight: 800; color: var(--color-navy-900);">${concept}</div>
          <div style="font-size: 20px; font-weight: 900; color: var(--color-red-600); margin-top: 2px;">
            Total: S/ ${amount.toFixed(2)}
          </div>
        </div>

        <form id="card-payment-form" onsubmit="window.app.processCardPayment(event, '${paymentId}', ${amount})">
          <div class="form-group">
            <label class="form-label">Número de Tarjeta (Crédito / Débito):</label>
            <input type="text" id="pay-card-number" class="form-control" placeholder="4557 •••• •••• 1234" required value="4557 8921 3456 1234" />
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="form-group">
              <label class="form-label">Vencimiento (MM/AA):</label>
              <input type="text" id="pay-card-expiry" class="form-control" placeholder="08/28" required value="08/28" />
            </div>
            <div class="form-group">
              <label class="form-label">CVV (3 dígitos):</label>
              <input type="password" id="pay-card-cvv" class="form-control" placeholder="•••" required value="789" maxlength="4" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Titular de la Tarjeta:</label>
            <input type="text" id="pay-card-name" class="form-control" placeholder="Nombre como figura en la tarjeta" required value="Dra. Carmen Méndez" />
          </div>

          <button type="submit" class="btn btn-red" style="width: 100%; padding: 12px; font-weight: 900; font-size: 14px; margin-top: 8px;">
            [Bloqueado] Pagar S/ ${amount.toFixed(2)} y Validar Acceso
          </button>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
      </div>
    `);
  }

  processCardPayment(e, paymentId, amount) {
    if (e) e.preventDefault();
    this.showToast("Procesando pago con pasarela bancaria segura...", "info");
    
    setTimeout(() => {
      const res = this.store.payAndUnlockIntranet(paymentId, "Tarjeta Visa / Débito");
      this.closeModal();
      this.showPaymentSuccessReceiptModal(res);
    }, 450);
  }

  openYapePayModal(paymentId, amount = 480.00) {
    this.showModal(`
      <div class="modal-header">
        <h3>[Móvil] Pagar con Yape / Plin Institucional</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body" style="text-align: center;">
        <div style="background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%); color: white; padding: 14px; border-radius: 8px; margin-bottom: 14px;">
          <div style="font-size: 12px; font-weight: bold; opacity: 0.9;">I.E.P. "EL EDUCADOR" - TESORERÍA</div>
          <div style="font-size: 20px; font-weight: 900; margin: 4px 0;">987-654-321</div>
          <div style="font-size: 11px;">Titular: Prof. Alex Lino (Coordinación)</div>
        </div>

        <div style="display: flex; justify-content: center; margin-bottom: 12px;">
          <div style="width: 120px; height: 120px; border: 2px dashed #6d28d9; padding: 4px; border-radius: 8px;">
            ${Components.generateQRSVG("YAPE-EL-EDUCADOR-987654321-480")}
          </div>
        </div>

        <div style="background: var(--bg-surface-subtle); padding: 10px; border-radius: 6px; font-size: 12px; margin-bottom: 12px;">
          Monto a transferir: <strong style="font-size: 15px; color: var(--color-navy-900);">S/ ${amount.toFixed(2)}</strong>
        </div>

        <div class="form-group" style="text-align: left;">
          <label class="form-label">Código de Aprobación o N° de Celular Emisor:</label>
          <input type="text" id="yape-code-input" class="form-control" placeholder="Ej: 849201" value="849201" />
        </div>

        <button class="btn btn-red" onclick="window.app.processYapePayment('${paymentId}', ${amount})" style="width: 100%; font-weight: 800;">
          ✓ Validar Yape y Desbloquear Intranet
        </button>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
      </div>
    `);
  }

  processYapePayment(paymentId, amount) {
    const code = document.getElementById("yape-code-input").value;
    if (!code) {
      this.showToast("Ingrese el código de aprobación de Yape", "danger");
      return;
    }
    this.showToast("Verificando operación Yape en línea...", "info");
    setTimeout(() => {
      const res = this.store.payAndUnlockIntranet(paymentId, "Yape Móvil");
      this.closeModal();
      this.showPaymentSuccessReceiptModal(res);
    }, 450);
  }

  openBankTransferModal(paymentId, amount = 480.00) {
    this.showModal(`
      <div class="modal-header">
        <h3>🏦 Depósito Bancario / Agente BCP</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div style="background: var(--bg-surface-subtle); padding: 12px; border-radius: 6px; font-size: 12px; line-height: 1.6; margin-bottom: 12px;">
          <strong>Cuentas Recaudadoras I.E.P. "El Educador":</strong><br>
          • <strong>BCP Cta Cte:</strong> 191-89347291-0-45 (CCI: 002-191-0089347291045)<br>
          • <strong>BBVA Continental:</strong> 0011-0238-0100049281<br>
          • <strong>Banco de la Nación:</strong> 04-018-492819
        </div>

        <div class="form-group">
          <label class="form-label">Número de Operación del Voucher:</label>
          <input type="text" id="bank-op-input" class="form-control" placeholder="Ej: OP-9482104" value="OP-9482104" />
        </div>

        <button class="btn btn-red" onclick="window.app.processBankPayment('${paymentId}', ${amount})" style="width: 100%; font-weight: 800;">
          ✓ Validar Depósito y Desbloquear Intranet
        </button>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
      </div>
    `);
  }

  processBankPayment(paymentId, amount) {
    const op = document.getElementById("bank-op-input").value;
    if (!op) {
      this.showToast("Ingrese el número de operación bancaria", "danger");
      return;
    }
    this.showToast("Validando voucher con tesorería...", "info");
    setTimeout(() => {
      const res = this.store.payAndUnlockIntranet(paymentId, "Depósito Bancario BCP");
      this.closeModal();
      this.showPaymentSuccessReceiptModal(res);
    }, 450);
  }

  showPaymentSuccessReceiptModal(res) {
    this.showModal(`
      <div class="modal-header" style="background: #22c55e; color: white;">
        <h3 style="color: white;">🎉 ¡PAGO VALIDADO CON ÉXITO!</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body" style="text-align: center; padding: 24px;">
        <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo I.E.P. El Educador" style="width: 70px; height: 70px; object-fit: contain; margin-bottom: 8px;" />
        <div style="font-size: 11px; font-weight: 800; color: #dc2626;">I.E.P. "EL EDUCADOR" • S.J.L. • UGEL 05</div>
        <h3 style="color: #0b132b; margin: 8px 0 4px;">RECIBO OFICIAL DE PAGO</h3>
        <div style="font-size: 14px; font-weight: bold; color: #22c55e;">${res.receiptNo}</div>

        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 8px; margin: 16px 0; text-align: left; font-size: 13px; line-height: 1.6;">
          <div><strong>Monto Cancelado:</strong> S/ ${res.amount.toFixed(2)}</div>
          <div><strong>Medio de Pago:</strong> ${res.method}</div>
          <div><strong>Fecha & Hora:</strong> ${res.date}</div>
          <div><strong>Estado de Intranet:</strong> <span class="status-badge status-approved" style="background:#22c55e; color:#0b132b; font-weight:800;"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> DESBLOQUEADO Y AL DÍA</span></div>
        </div>

        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 10px; border-radius: 6px; color: #065f46; font-size: 12px; font-weight: bold;">
          ✓ Ya puede consultar libremente el Registro de Notas, Horarios, Boletas y Control de Cuadernos QR.
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-navy" onclick="window.print()">[Imprimir] Imprimir Recibo</button>
        <button class="btn btn-gold" onclick="window.app.closeModal()">Continuar a la Intranet</button>
      </div>
    `);
    this.showToast("✓ ¡Intranet validada y desbloqueada automáticamente!", "success");
  }

  // Control de Bloqueo por Coordinación
  toggleFamilyLock(familyId) {
    const isLocked = this.store.toggleFamilyAccessLock(familyId);
    if (isLocked !== null) {
      this.showToast(isLocked ? "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ef4444;margin-right:4px;vertical-align:middle;"></span> Acceso a Intranet BLOQUEADO por mora" : "<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#22c55e;margin-right:4px;vertical-align:middle;"></span> Acceso a Intranet DESBLOQUEADO / Prórroga concedida", isLocked ? "danger" : "success");
    }
  }

  openManualPaymentModal() {
    this.showModal(`
      <div class="modal-header">
        <h3>[Pensiones] Registrar Pago en Caja (Coordinación / Tesorería)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label class="form-label">Seleccionar Familia / Estudiante:</label>
          <select id="man-family-select" class="form-control">
            <option value="FAM-2026-108">Dra. Carmen Méndez (Sofía Méndez - 4to Sec A) - S/ 480.00</option>
            <option value="FAM-2026-044">Sr. Roberto Díaz (Carlos Benítez - 4to Sec A) - S/ 0.00</option>
            <option value="FAM-2026-092">Sra. Teresa Oropeza (Brini Pocomo - 5 años) - S/ 0.00</option>
          </select>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label">Monto Recibido (S/):</label>
            <input type="number" id="man-amount" class="form-control" value="480.00" />
          </div>
          <div class="form-group">
            <label class="form-label">Medio de Pago:</label>
            <select id="man-method" class="form-control">
              <option value="Efectivo (Caja Colegio)">Efectivo (Caja Colegio)</option>
              <option value="Depósito Agente BCP">Depósito Agente BCP</option>
              <option value="POS Tarjeta">POS Tarjeta</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Concepto:</label>
          <input type="text" id="man-concept" class="form-control" value="Pensión Escolar - Agosto 2026" />
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-gold" onclick="window.app.confirmManualPayment()">
          ✓ Registrar en Caja y Desbloquear Familia
        </button>
      </div>
    `);
  }

  confirmManualPayment() {
    const familyId = document.getElementById("man-family-select").value;
    const amount = parseFloat(document.getElementById("man-amount").value) || 480.00;
    const method = document.getElementById("man-method").value;

    const res = this.store.payAndUnlockIntranet("PEN-08", method);
    this.closeModal();
    this.showToast(`✓ Pago de S/ ${amount.toFixed(2)} registrado en caja. Familia desbloqueada en tiempo real.`, "success");
    setTimeout(() => this.showPaymentSuccessReceiptModal(res), 350);
  }

  showReceiptModal(paymentId) {
    const p = this.store.getPayments().find(x => x.id === paymentId) || this.store.getPayments()[1];
    if (!p) return;
    this.showModal(`
      <div class="modal-header"><h3>[Documento] Recibo Oficial de Tesorería</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body" style="text-align:center; padding:20px;">
        <img src="logo.png" onerror="this.src='assets/logo.png'" alt="Escudo I.E.P. El Educador" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 6px;" />
        <div style="font-size: 11px; font-weight: 800; color: #dc2626;">I.E.P. "EL EDUCADOR" (S.J.L.) • 21 años dejando huellas</div>
        <h3 style="color:#0b132b; margin:6px 0;">${p.receiptNo || 'REC-2026-7890'}</h3>
        <div style="background:var(--bg-surface-subtle); padding:12px; border-radius:6px; text-align:left; font-size:13px; margin:12px 0;">
          <div><strong>Concepto:</strong> ${p.concept}</div>
          <div><strong>Monto:</strong> S/ ${p.amount.toFixed(2)}</div>
          <div><strong>Fecha de Cancelación:</strong> ${p.paidDate || '25/07/2026'}</div>
          <div><strong>Medio:</strong> ${p.paymentMethod || 'Pago Electrónico'}</div>
          <div><strong>Estado:</strong> <span class="status-badge status-approved">CANCELADO</span></div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-navy" onclick="window.print()">[Imprimir] Imprimir Recibo</button>
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cerrar</button>
      </div>
    `);
  }

  openJustificationModal() {
    this.showModal(`
      <div class="modal-header"><h3>Justificar Inasistencia</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body"><textarea id="just-reason-input" class="form-control" placeholder="Motivo..."></textarea></div>
      <div class="modal-footer"><button class="btn btn-gold" onclick="window.app.confirmJustification()">Enviar</button></div>
    `);
  }

  confirmJustification() {
    this.store.submitJustification("15/08/2026", document.getElementById("just-reason-input").value);
    this.closeModal();
    this.showToast("Justificación enviada al servidor", "success");
  }

  openNewAnnouncementModal() {
    this.showModal(`
      <div class="modal-header"><h3>Publicar Aviso</h3><button class="modal-close-btn" onclick="window.app.closeModal()">✕</button></div>
      <div class="modal-body">
        <input type="text" id="ann-title-input" class="form-control" placeholder="Título" style="margin-bottom:8px;" />
        <textarea id="ann-content-input" class="form-control" placeholder="Contenido..."></textarea>
      </div>
      <div class="modal-footer"><button class="btn btn-red" onclick="window.app.confirmAddAnnouncement()">Publicar</button></div>
    `);
  }

  confirmAddAnnouncement() {
    const t = document.getElementById("ann-title-input").value;
    const c = document.getElementById("ann-content-input").value;
    if (!t || !c) return;
    this.store.addAnnouncement(t, "Institucional", c, "normal");
    this.closeModal();
    this.showToast("Aviso publicado en servidor", "success");
  }

  // Modificar Notas de un Curso
  openEditCourseModal(courseId) {
    const course = this.store.getCourses().find(c => c.id === courseId);
    if (!course) return;
    this.showModal(`
      <div class="modal-header">
        <h3>✏️ Modificar Registro de Notas: ${course.name}</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div style="display:flex; justify-content:space-between; margin-bottom: 12px; font-size: 13px;">
          <div><strong>Docente:</strong> ${course.teacher}</div>
          <div><strong>Código:</strong> <code>${course.code}</code></div>
        </div>
        <div class="form-group">
          <label class="form-label">Nombre del Área Curricular:</label>
          <input type="text" id="edit-c-name" class="form-control" value="${course.name}" />
        </div>
        <label class="form-label">Calificaciones Bimestrales (0 a 20):</label>
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:8px;">
          <div>
            <span style="font-size:11px; font-weight:bold; color:var(--text-muted);">1° Bim</span>
            <input type="number" min="0" max="20" id="edit-b1" class="form-control" value="${course.b1}" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:bold; color:var(--text-muted);">2° Bim</span>
            <input type="number" min="0" max="20" id="edit-b2" class="form-control" value="${course.b2}" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:bold; color:var(--text-muted);">3° Bim</span>
            <input type="number" min="0" max="20" id="edit-b3" class="form-control" value="${course.b3}" />
          </div>
          <div>
            <span style="font-size:11px; font-weight:bold; color:var(--text-muted);">4° Bim</span>
            <input type="number" min="0" max="20" id="edit-b4" class="form-control" value="${course.b4}" />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-navy" onclick="window.app.confirmUpdateCourse('${course.id}')">Guardar en Base de Datos</button>
      </div>
    `);
  }

  confirmUpdateCourse(courseId) {
    const name = document.getElementById("edit-c-name").value;
    const b1 = document.getElementById("edit-b1").value;
    const b2 = document.getElementById("edit-b2").value;
    const b3 = document.getElementById("edit-b3").value;
    const b4 = document.getElementById("edit-b4").value;
    this.store.updateCourse(courseId, { name, b1, b2, b3, b4 });
    this.closeModal();
    this.showToast("✓ Calificaciones actualizadas y guardadas en el servidor", "success");
  }

  saveStudentGrade(studentId) {
    const input = document.getElementById(`grade-input-${studentId}`);
    if (input) {
      this.store.updateStudentGrade(studentId, parseFloat(input.value));
      this.showToast("Nota guardada en servidor", "success");
    }
  }

  // =========================================================================
  // CONTROLADORES DE AULA VIRTUAL Y EVALUACIONES DINÁMICAS (10 PREGUNTAS)
  // =========================================================================
  onVirtualCourseChange(courseId) {
    this.store.setSelectedVirtualCourse(courseId);
    this.render();
  }

  onVirtualWeekChange(weekId) {
    this.store.setSelectedVirtualWeek(weekId);
    this.render();
  }

  openUploadMaterialModal(courseId) {
    const courses = [
      { id: "MAT-401", name: "Matemática Avanzada", icon: "[Formato]" },
      { id: "EPT-402", name: "Computación e Informática / Robótica", icon: "🤖" },
      { id: "CTA-403", name: "Ciencia y Tecnología (Física & Química)", icon: "🔬" },
      { id: "COM-404", name: "Comunicación & Literatura", icon: "📚" }
    ];
    const course = courses.find(c => c.id === courseId) || courses[0];
    const existingCount = (this.store.state.weeklyMaterials || []).filter(m => m.courseId === course.id).length;
    const nextWeek = existingCount + 1;

    const html = `
      <div class="modal-header" style="background: linear-gradient(135deg, #0b132b 0%, #1e3a8a 100%); color: white;">
        <div>
          <h3 class="modal-title" style="color: white; margin: 0; font-size: 16px;">
            📂 Subir Archivo de Clase & Analizar con IA
          </h3>
          <span style="font-size: 11px; color: var(--color-yellow-400);">
            Soporta PDF, Word (.docx), PowerPoint (.pptx), Texto (.txt), Imágenes de Pizarra y Excel
          </span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>

      <form onsubmit="window.app.confirmUploadMaterial(event)">
        <div class="modal-body" style="max-height: 75vh; overflow-y: auto; padding: 18px;">
          
          <!-- Banner de Asignatura -->
          <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 10px 14px; border-radius: 6px; margin-bottom: 16px; font-size: 12px; color: #1e40af; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div>
              <strong>Asignatura:</strong> ${course.icon} ${course.name} • <strong>Grado:</strong> 4to de Secundaria
            </div>
            <span class="status-badge" style="background: #dbeafe; color: #1e40af; font-weight: 800; font-size: 10.5px;">
              Docente: Prof. Roberto Silva
            </span>
          </div>

          <input type="hidden" name="courseId" value="${course.id}" />
          <input type="hidden" name="courseName" value="${course.name}" />

          <!-- ZONA DE CARGA DE ARCHIVO INTELIGENTE -->
          <div style="margin-bottom: 18px;">
            <label style="font-size: 12.5px; font-weight: 900; color: var(--color-navy-900); display: block; margin-bottom: 6px;">
              1. Seleccione o Arrastre el Archivo de su Elección (El sistema lo analizará en tiempo real):
            </label>

            <!-- Dropzone Interactivo -->
            <div id="ai-dropzone" class="smart-dropzone" onclick="document.getElementById('smart-file-input').click()" style="border: 2px dashed #3b82f6; background: #f8fafc; border-radius: 8px; padding: 22px 16px; text-align: center; cursor: pointer; transition: all 0.2s ease;">
              <div style="font-size: 36px; margin-bottom: 6px;">📁 ⚡ [Documento]</div>
              <div style="font-weight: 800; font-size: 13.5px; color: #1e3a8a; margin-bottom: 4px;">
                Haga clic para seleccionar archivo o arrástrelo aquí
              </div>
              <div style="font-size: 11px; color: #64748b;">
                Formatos compatibles: <strong>PDF, Word (.docx), PowerPoint (.pptx), Texto (.txt), PNG/JPG, Excel</strong>
              </div>
            </div>

            <input type="file" id="smart-file-input" style="display: none;" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md,.png,.jpg,.jpeg,.xlsx" onchange="window.app.processUploadedFileForAnalysis(event, '${course.id}')" />

            <!-- Indicador de Carga y Análisis IA -->
            <div id="ai-analysis-indicator" style="display: none; background: #f1f5f9; border: 2px solid #3b82f6; border-radius: 8px; padding: 18px; text-align: center; margin-top: 10px;">
              <div style="font-size: 26px; margin-bottom: 6px;" class="scanning-pulse">🤖 ⚡ 🧠</div>
              <div id="ai-step-text" style="font-weight: 800; font-size: 12.5px; color: #1e40af; margin-bottom: 8px;">
                Iniciando análisis semántico del documento...
              </div>
              <div style="width: 100%; background: #cbd5e1; height: 8px; border-radius: 4px; overflow: hidden;">
                <div id="ai-progress-bar" style="width: 20%; height: 100%; background: linear-gradient(90deg, #3b82f6, #10b981); transition: width 0.4s ease;"></div>
              </div>
            </div>

            <!-- Botones de Archivos de Demostración Rápida -->
            <div style="margin-top: 10px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <span style="font-size: 11px; font-weight: 700; color: #64748b;">O probar con documento de muestra:</span>
              <button type="button" class="btn btn-outline btn-sm" onclick="window.app.loadDemoFileForAnalysis('Guia_Trigonometria_Angulos_Dobles.pdf', '${course.id}')" style="font-size: 10.5px; padding: 3px 8px; font-weight: 700;">
                📕 Guía_Trigonometria.pdf
              </button>
              <button type="button" class="btn btn-outline btn-sm" onclick="window.app.loadDemoFileForAnalysis('Sesion_Arduino_Servomotores_S3.pptx', '${course.id}')" style="font-size: 10.5px; padding: 3px 8px; font-weight: 700;">
                [Reporte] Arduino_Robótica.pptx
              </button>
              <button type="button" class="btn btn-outline btn-sm" onclick="window.app.loadDemoFileForAnalysis('Laboratorio_Leyes_Termodinamica_Carnot.docx', '${course.id}')" style="font-size: 10.5px; padding: 3px 8px; font-weight: 700;">
                📘 Termodinamica_Carnot.docx
              </button>
            </div>
          </div>

          <!-- Alerta de Éxito de Análisis -->
          <div id="ai-success-alert" style="display: none; background: #ecfdf5; border-left: 4px solid #10b981; padding: 12px 14px; border-radius: 6px; font-size: 12px; color: #065f46; margin-bottom: 16px;">
          </div>

          <!-- 2. CAMPOS EDITABLES RESULTANTES DEL ANÁLISIS -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 14px;">
            <div style="font-size: 12.5px; font-weight: 900; color: var(--color-navy-900); margin-bottom: 10px;">
              2. Revisión de Contenido y Parámetros Semanales:
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
              <div>
                <label style="font-size: 11.5px; font-weight: 800; display: block; margin-bottom: 4px;">Número de Semana:</label>
                <input type="number" name="weekNumber" id="field-material-week" value="${nextWeek}" min="1" max="40" class="form-control" required />
              </div>
              <div>
                <label style="font-size: 11.5px; font-weight: 800; display: block; margin-bottom: 4px;">Fecha de la Sesión:</label>
                <input type="text" name="sessionDate" value="${new Date().toLocaleDateString('es-PE')}" class="form-control" required />
              </div>
            </div>

            <div style="margin-bottom: 14px;">
              <label style="font-size: 11.5px; font-weight: 800; display: block; margin-bottom: 4px;">Título del Tema Detectado:</label>
              <input type="text" name="title" id="field-material-title" placeholder="Ej. Razones Trigonométricas de Ángulos Compuestos" class="form-control" required />
            </div>

            <div style="margin-bottom: 14px;">
              <label style="font-size: 11.5px; font-weight: 800; display: block; margin-bottom: 4px;">Resumen del Trabajo Realizado en el Aula:</label>
              <textarea name="summary" id="field-material-summary" rows="4" class="form-control" placeholder="El sistema extraerá automáticamente el resumen pedagógico del archivo cargado..." required></textarea>
            </div>

            <div style="margin-bottom: 14px;">
              <label style="font-size: 11.5px; font-weight: 800; display: block; margin-bottom: 4px;">Conceptos Clave Identificados (Separados por coma):</label>
              <input type="text" name="keyConcepts" id="field-material-concepts" placeholder="Ej. Identidades fundamentales, Ángulo doble, Teorema de Cardano" class="form-control" />
            </div>

            <div style="margin-bottom: 14px;">
              <label style="font-size: 11.5px; font-weight: 800; display: block; margin-bottom: 4px;">Archivo Principal Vinculado:</label>
              <input type="text" name="attachmentName" id="field-material-attachment" value="Guía_Sesion_Semanal_${nextWeek}.pdf" class="form-control" />
            </div>

            <div style="background: #fefce8; border: 1px solid #fef08a; padding: 10px; border-radius: 6px; font-size: 11.5px; color: #854d0e;">
              ⚡ <strong>Generación Automática:</strong> Al guardar, el sistema dejará formulada la evaluación dinámica de 10 preguntas basada en el archivo analizado.
            </div>
          </div>

        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cancelar</button>
          <button type="submit" class="btn btn-navy btn-sm" style="font-weight: 800; padding: 8px 20px;">
            💾 Publicar Sesión & Activar Evaluación (10 Preguntas)
          </button>
        </div>
      </form>
    `;
    this.showModal(html);
  }

  processUploadedFileForAnalysis(event, courseId) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    this.runDocumentAnalysisPipeline({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(1) + " MB",
      type: file.type
    }, courseId);
  }

  loadDemoFileForAnalysis(fileName, courseId) {
    this.runDocumentAnalysisPipeline({
      name: fileName,
      size: "2.9 MB",
      type: "application/pdf"
    }, courseId);
  }

  runDocumentAnalysisPipeline(fileInfo, courseId) {
    const indicator = document.getElementById("ai-analysis-indicator");
    const dropzone = document.getElementById("ai-dropzone");

    if (indicator) indicator.style.display = "block";
    if (dropzone) dropzone.style.display = "none";

    const stepText = document.getElementById("ai-step-text");
    const progressBar = document.getElementById("ai-progress-bar");

    if (stepText) stepText.innerText = "[Buscar] Paso 1/3: Decodificando archivo y extrayendo estructura (" + fileInfo.name + ")...";
    if (progressBar) progressBar.style.width = "35%";

    setTimeout(() => {
      if (stepText) stepText.innerText = "🧠 Paso 2/3: Sintetizando resumen de clase y conceptos clave del tema...";
      if (progressBar) progressBar.style.width = "70%";

      setTimeout(() => {
        if (stepText) stepText.innerText = "⚡ Paso 3/3: Calibrando 10 preguntas de opción múltiple y explicaciones...";
        if (progressBar) progressBar.style.width = "100%";

        setTimeout(() => {
          if (indicator) indicator.style.display = "none";
          if (dropzone) dropzone.style.display = "block";

          const analyzed = this.store.analyzeAndExtractMaterialFromDocument(fileInfo, courseId);

          const titleInput = document.getElementById("field-material-title");
          const summaryInput = document.getElementById("field-material-summary");
          const conceptsInput = document.getElementById("field-material-concepts");
          const attachInput = document.getElementById("field-material-attachment");
          const alertBox = document.getElementById("ai-success-alert");

          if (titleInput) titleInput.value = analyzed.title;
          if (summaryInput) summaryInput.value = analyzed.summary;
          if (conceptsInput) conceptsInput.value = analyzed.keyConcepts.join(", ");
          if (attachInput) attachInput.value = fileInfo.name;
          if (alertBox) {
            alertBox.style.display = "block";
            alertBox.innerHTML = `✓ <strong>Documento Analizado con Éxito:</strong> Se detectó el tema <em>"${analyzed.title}"</em> con ${analyzed.keyConcepts.length} conceptos clave y se preparó la evaluación de 10 preguntas.`;
          }

          this.showToast(`✓ Documento "${fileInfo.name}" analizado con IA`, "success");
        }, 300);
      }, 400);
    }, 400);
  }

  confirmUploadMaterial(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const keyConceptsStr = formData.get("keyConcepts") || "";
    const keyConcepts = keyConceptsStr.split(",").map(c => c.trim()).filter(c => c.length > 0);

    const materialData = {
      courseId: formData.get("courseId"),
      courseName: formData.get("courseName"),
      weekNumber: parseInt(formData.get("weekNumber")),
      title: formData.get("title"),
      sessionDate: formData.get("sessionDate"),
      summary: formData.get("summary"),
      keyConcepts: keyConcepts.length > 0 ? keyConcepts : ["Fundamentos Teóricos", "Procedimientos de Cálculo", "Aplicación Práctica"],
      attachments: [
        { type: "pdf", name: formData.get("attachmentName") || "Guia_Semanal.pdf", size: "2.5 MB", icon: "📕" },
        { type: "pptx", name: `Diapositivas_Semana_${formData.get("weekNumber")}.pptx`, size: "4.2 MB", icon: "[Reporte]" },
        { type: "worksheet", name: `Ficha_Practica_Semana_${formData.get("weekNumber")}.pdf`, size: "1.1 MB", icon: "📝" }
      ]
    };

    const created = this.store.addWeeklyMaterial(materialData);
    this.store.generateDynamicEvaluation(created.id);

    this.closeModal();
    this.render();
    this.showToast(`✓ Material de la Semana ${materialData.weekNumber} publicado y evaluación de 10 preguntas generada.`, "success");
  }

  openEditMaterialModal(materialId) {
    const material = (this.store.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material) return;

    const html = `
      <div class="modal-header">
        <h3 class="modal-title">✏️ Editar Sesión Semanal</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <form onsubmit="window.app.confirmUpdateMaterial(event, '${material.id}')">
        <div class="modal-body" style="max-height: 75vh; overflow-y: auto;">
          <div style="margin-bottom: 14px;">
            <label style="font-size: 12px; font-weight: 800; display: block; margin-bottom: 4px;">Título de la Sesión:</label>
            <input type="text" name="title" value="${material.title}" class="form-control" required />
          </div>
          <div style="margin-bottom: 14px;">
            <label style="font-size: 12px; font-weight: 800; display: block; margin-bottom: 4px;">Resumen del Trabajo en el Aula:</label>
            <textarea name="summary" rows="5" class="form-control" required>${material.summary}</textarea>
          </div>
          <div style="margin-bottom: 14px;">
            <label style="font-size: 12px; font-weight: 800; display: block; margin-bottom: 4px;">Conceptos Clave (Separados por coma):</label>
            <input type="text" name="keyConcepts" value="${(material.keyConcepts || []).join(', ')}" class="form-control" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cancelar</button>
          <button type="submit" class="btn btn-navy btn-sm" style="font-weight: 800;">💾 Guardar Cambios</button>
        </div>
      </form>
    `;
    this.showModal(html);
  }

  confirmUpdateMaterial(event, materialId) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const keyConceptsStr = formData.get("keyConcepts") || "";
    const keyConcepts = keyConceptsStr.split(",").map(c => c.trim()).filter(c => c.length > 0);

    this.store.updateWeeklyMaterial(materialId, {
      title: formData.get("title"),
      summary: formData.get("summary"),
      keyConcepts: keyConcepts
    });

    this.closeModal();
    this.render();
    this.showToast("✓ Sesión semanal actualizada correctamente.", "success");
  }

  confirmDeleteMaterial(materialId) {
    if (confirm("¿Está seguro de que desea eliminar este material semanal y su evaluación?")) {
      this.store.deleteWeeklyMaterial(materialId);
      this.render();
      this.showToast("✓ Material semanal eliminado.", "info");
    }
  }

  openGenerateQuizModal(materialId) {
    const material = (this.store.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material) return;

    const html = `
      <div class="modal-header">
        <h3 class="modal-title">⚡ Generador Inteligente de Evaluaciones (10 Preguntas)</h3>
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 16px;">
          <div style="font-size: 13px; font-weight: 800; color: var(--color-navy-900); margin-bottom: 4px;">
            ${material.title} (Semana ${material.weekNumber})
          </div>
          <div style="font-size: 12px; color: var(--text-muted);">
            ${material.courseName} • ${material.teacherName}
          </div>
        </div>

        <p style="font-size: 12.5px; color: #334155; line-height: 1.5; margin-bottom: 14px;">
          El motor pedagógico analizará el resumen de clase, los <strong>conceptos clave</strong> (${(material.keyConcepts || []).join(', ')}) y formulará <strong>10 preguntas de opción múltiple</strong> calibradas con alternativas verosímiles, claves exactas y retroalimentación explicativa para los estudiantes.
        </p>

        <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 10px 14px; border-radius: 4px; font-size: 12px; color: #166534; margin-bottom: 16px;">
          ✓ Ponderación oficial: 2 puntos por pregunta (Total 20 puntos).<br>
          ✓ Retroalimentación automática explicativa para cada ítem.<br>
          ✓ Registro directo en el historial de progreso del aula virtual.
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cancelar</button>
        <button class="btn btn-gold btn-sm" onclick="window.app.confirmGenerateQuiz('${material.id}')" style="font-weight: 900;">
          [Evaluación] Iniciar Generación de 10 Preguntas
        </button>
      </div>
    `;
    this.showModal(html);
  }

  confirmGenerateQuiz(materialId) {
    this.store.generateDynamicEvaluation(materialId);
    this.closeModal();
    this.render();
    this.showToast("✓ Evaluación de 10 preguntas generada exitosamente.", "success");
    setTimeout(() => {
      this.openPreviewQuizModal(materialId);
    }, 400);
  }

  confirmRegenerateQuiz(materialId) {
    if (confirm("¿Desea volver a generar las 10 preguntas con IA basándose en el contenido de la clase?")) {
      this.store.generateDynamicEvaluation(materialId);
      this.render();
      this.showToast("✓ 10 nuevas preguntas generadas.", "success");
      setTimeout(() => {
        this.openPreviewQuizModal(materialId);
      }, 300);
    }
  }

  openPreviewQuizModal(materialId) {
    const material = (this.store.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material || !material.evaluation) return;

    const evalObj = material.evaluation;
    const questions = evalObj.questions || [];

    const html = `
      <div class="modal-header" style="background: var(--color-navy-900); color: white;">
        <div>
          <h3 class="modal-title" style="color: white; margin: 0; font-size: 16px;">
            [Lista] Previsualización: ${evalObj.title}
          </h3>
          <span style="font-size: 11px; color: var(--color-yellow-400);">10 Preguntas Generadas Dinámicamente • 2 Puntos c/u (Total 20 Pts)</span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>
      <div class="modal-body" style="max-height: 75vh; overflow-y: auto; padding: 18px;">
        <div style="margin-bottom: 16px; font-size: 12px; color: #64748b;">
          Estas son las 10 preguntas formuladas sobre el material de la <strong>Semana ${material.weekNumber} (${material.title})</strong>. Cada pregunta incluye su clave oficial y retroalimentación pedagógica.
        </div>

        ${questions.map((q, idx) => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span style="font-weight: 900; font-size: 13px; color: var(--color-navy-900);">
                Pregunta ${q.id || (idx + 1)}:
              </span>
              <span class="status-badge status-approved" style="font-size: 10px; font-weight: 800;">
                2 Puntos
              </span>
            </div>
            
            <div style="font-size: 13px; font-weight: 700; color: #1e293b; margin-bottom: 10px; line-height: 1.4;">
              ${q.question}
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
              ${q.options.map((opt, oIdx) => `
                <div style="font-size: 12px; padding: 8px 10px; border-radius: 6px; border: 1px solid ${oIdx === q.correctIndex ? '#10b981' : '#e2e8f0'}; background: ${oIdx === q.correctIndex ? '#ecfdf5' : '#f8fafc'}; color: ${oIdx === q.correctIndex ? '#065f46' : '#334155'}; font-weight: ${oIdx === q.correctIndex ? '800' : 'normal'};">
                  <strong>${String.fromCharCode(65 + oIdx)})</strong> ${opt} ${oIdx === q.correctIndex ? '✓ (Clave Correcta)' : ''}
                </div>
              `).join('')}
            </div>

            <div style="background: #f1f5f9; padding: 8px 12px; border-radius: 6px; font-size: 11px; color: #475569; border-left: 3px solid #3b82f6;">
              [Nota] <strong>Explicación Formativa:</strong> ${q.explanation}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cerrar</button>
        <button class="btn btn-navy btn-sm" onclick="window.app.closeModal(); window.app.showToast('✓ Evaluación aprobada y disponible para los estudiantes.', 'success');">
          ✓ Aprobar y Publicar Evaluación
        </button>
      </div>
    `;
    this.showModal(html);
  }

  startStudentQuiz(materialId) {
    const material = (this.store.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material || !material.evaluation) return;

    window.tempQuizAnswers = {};
    const evalObj = material.evaluation;
    const questions = evalObj.questions || [];

    const renderQuizModal = () => {
      const answeredCount = Object.keys(window.tempQuizAnswers).length;

      const html = `
        <div class="modal-header" style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white;">
          <div>
            <h3 class="modal-title" style="color: white; margin: 0; font-size: 16px;">
              📝 ${evalObj.title}
            </h3>
            <span style="font-size: 11px; color: #fef08a;">10 Preguntas • Ponderación: 2 Pts c/u • Total: 20 Puntos</span>
          </div>
          <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
        </div>

        <div class="modal-body" style="max-height: 75vh; overflow-y: auto; padding: 20px;">
          <!-- Barra de Estado y Progreso del Cuestionario -->
          <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
            <div style="font-size: 12px; font-weight: 800; color: var(--color-navy-900);">
              Preguntas Respondidas: <span id="quiz-answered-count" style="color: #2563eb;">${answeredCount}</span> de 10
            </div>
            <div style="font-size: 12px; font-weight: 800; color: #047857; background: #d1fae5; padding: 3px 10px; border-radius: 12px;">
              ⏱️ Tiempo Restante: 20:00 min
            </div>
          </div>

          <!-- Listado de las 10 Preguntas Interactivas -->
          ${questions.map((q, qIdx) => {
            const selectedOpt = window.tempQuizAnswers[q.id];
            return `
              <div style="background: #ffffff; border: 2px solid ${selectedOpt !== undefined ? '#3b82f6' : '#e2e8f0'}; border-radius: 10px; padding: 16px; margin-bottom: 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.04);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span style="font-weight: 900; font-size: 13.5px; color: var(--color-navy-900);">
                    Pregunta ${q.id || (qIdx + 1)} de 10:
                  </span>
                  <span style="font-size: 10.5px; font-weight: 800; background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 10px;">
                    2 Puntos
                  </span>
                </div>

                <div style="font-size: 13.5px; font-weight: 700; color: #1e293b; margin-bottom: 12px; line-height: 1.45;">
                  ${q.question}
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${q.options.map((opt, oIdx) => {
                    const isSelected = selectedOpt === oIdx;
                    return `
                      <label style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 8px; border: 2px solid ${isSelected ? '#2563eb' : '#cbd5e1'}; background: ${isSelected ? '#eff6ff' : '#f8fafc'}; cursor: pointer; transition: all 0.15s ease;" onclick="window.app.selectStudentQuizAnswer('${material.id}', ${q.id}, ${oIdx})">
                        <input type="radio" name="q_${q.id}" value="${oIdx}" ${isSelected ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;" />
                        <span style="font-size: 12.5px; font-weight: ${isSelected ? '800' : '500'}; color: ${isSelected ? '#1e40af' : '#334155'};">
                          <strong>${String.fromCharCode(65 + oIdx)})</strong> ${opt}
                        </span>
                      </label>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center;">
          <button class="btn btn-outline btn-sm" onclick="window.app.closeModal()">Cancelar Examen</button>
          <button class="btn btn-gold btn-sm" onclick="window.app.submitStudentQuiz('${material.id}')" style="font-weight: 900; font-size: 13px; padding: 8px 24px;">
            [Evaluación] Finalizar y Enviar Evaluación
          </button>
        </div>
      `;
      this.showModal(html);
    };

    renderQuizModal();
  }

  selectStudentQuizAnswer(materialId, questionId, optionIndex) {
    if (!window.tempQuizAnswers) {
      window.tempQuizAnswers = {};
    }
    window.tempQuizAnswers[questionId] = optionIndex;
    this.startStudentQuiz(materialId);
  }

  submitStudentQuiz(materialId) {
    const material = (this.store.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material || !material.evaluation) return;

    const userAnswers = window.tempQuizAnswers || {};
    const answeredCount = Object.keys(userAnswers).length;

    if (answeredCount < 10) {
      if (!confirm(`Has respondido ${answeredCount} de 10 preguntas. ¿Deseas enviar la evaluación de todas formas?`)) {
        return;
      }
    }

    const currentStudent = this.store.state.users.estudiante || { id: "EST-2026-042", name: "Sofía Méndez Flores" };
    
    const attempt = this.store.recordQuizAttempt(materialId, {
      studentId: currentStudent.id,
      studentName: currentStudent.name,
      userAnswers: userAnswers,
      timeSpent: "15 min"
    });

    this.closeModal();
    this.render();
    this.showToast(`✓ Evaluación enviada. Nota: ${attempt.score} / 20 (${attempt.status})`, "success");

    setTimeout(() => {
      this.openQuizResultsModal(materialId);
    }, 400);
  }

  openQuizResultsModal(materialId) {
    const material = (this.store.state.weeklyMaterials || []).find(m => m.id === materialId);
    if (!material || !material.evaluation) return;

    const currentStudentId = (this.store.state.users.estudiante && this.store.state.users.estudiante.id) || "EST-2026-042";
    const attempt = (material.studentAttempts || []).find(a => a.studentId === currentStudentId) || (material.studentAttempts && material.studentAttempts[0]);
    if (!attempt) return;

    const questions = material.evaluation.questions || [];
    const userAnswers = attempt.userAnswers || {};

    const html = `
      <div class="modal-header" style="background: ${attempt.score >= 14 ? 'linear-gradient(135deg, #065f46 0%, #047857 100%)' : 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)'}; color: white;">
        <div>
          <h3 class="modal-title" style="color: white; margin: 0; font-size: 16px;">
            [Reporte] Resultados Oficiales de la Evaluación
          </h3>
          <span style="font-size: 11px; opacity: 0.9;">Estudiante: ${attempt.studentName} • Fecha: ${attempt.date}</span>
        </div>
        <button class="modal-close-btn" onclick="window.app.closeModal()" style="color: white;">✕</button>
      </div>

      <div class="modal-body" style="max-height: 75vh; overflow-y: auto; padding: 20px;">
        <!-- Banner de Calificación y Logro -->
        <div style="background: #ffffff; border: 2px solid ${attempt.score >= 14 ? '#10b981' : '#f43f5e'}; border-radius: 10px; padding: 18px; margin-bottom: 20px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <span style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #64748b;">Calificación Final Obtenida:</span>
          <div style="font-size: 38px; font-weight: 900; color: ${attempt.score >= 14 ? '#047857' : '#be123c'}; margin: 4px 0;">
            ${attempt.score} / 20
          </div>
          <span class="status-badge ${attempt.score >= 14 ? 'status-approved' : 'status-failed'}" style="font-size: 12px; font-weight: 900; padding: 4px 14px;">
            ${attempt.status} (${attempt.correctCount} de 10 preguntas correctas)
          </span>

          <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 12px 14px; border-radius: 6px; font-size: 12.5px; color: #334155; margin-top: 14px; text-align: left; line-height: 1.5;">
            [Nota] <strong>Retroalimentación Pedagógica del Sistema:</strong><br>
            ${attempt.feedback}
          </div>
        </div>

        <h4 style="font-size: 14px; font-weight: 900; color: var(--color-navy-900); margin-bottom: 12px;">
          Desglose Ítem por Ítem con Respuestas y Explicaciones:
        </h4>

        <!-- Desglose de las 10 Preguntas con retroalimentación formativa -->
        ${questions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns !== undefined && userAns === q.correctIndex;
          return `
            <div style="background: #ffffff; border: 2px solid ${isCorrect ? '#10b981' : '#f43f5e'}; border-radius: 8px; padding: 14px; margin-bottom: 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-weight: 900; font-size: 13px; color: var(--color-navy-900);">
                  Pregunta ${q.id || (idx + 1)}:
                </span>
                <span class="status-badge ${isCorrect ? 'status-approved' : 'status-failed'}" style="font-size: 11px; font-weight: 800;">
                  ${isCorrect ? '✓ Correcto (+2 pts)' : '✕ Incorrecto (0 pts)'}
                </span>
              </div>

              <div style="font-size: 13px; font-weight: 700; color: #1e293b; margin-bottom: 10px;">
                ${q.question}
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 10px;">
                ${q.options.map((opt, oIdx) => {
                  const wasSelected = userAns === oIdx;
                  const isTheCorrectOne = oIdx === q.correctIndex;
                  return `
                    <div style="font-size: 11.5px; padding: 6px 10px; border-radius: 6px; border: 1px solid ${isTheCorrectOne ? '#10b981' : (wasSelected ? '#f43f5e' : '#e2e8f0')}; background: ${isTheCorrectOne ? '#ecfdf5' : (wasSelected ? '#fff1f2' : '#f8fafc')}; color: ${isTheCorrectOne ? '#065f46' : (wasSelected ? '#9f1239' : '#475569')}; font-weight: ${isTheCorrectOne || wasSelected ? '800' : 'normal'};">
                      ${String.fromCharCode(65 + oIdx)}) ${opt}
                      ${isTheCorrectOne ? ' <strong>(Respuesta Correcta)</strong>' : ''}
                      ${wasSelected && !isTheCorrectOne ? ' <strong>(Tu Elección)</strong>' : ''}
                    </div>
                  `;
                }).join('')}
              </div>

              <div style="background: #f1f5f9; padding: 8px 12px; border-radius: 6px; font-size: 11.5px; color: #475569; border-left: 3px solid #3b82f6;">
                [Nota] <strong>Por qué es correcta:</strong> ${q.explanation}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="modal-footer">
        <button class="btn btn-navy btn-sm" onclick="window.app.closeModal()" style="font-weight: 800;">
          Entendido / Cerrar Reporte
        </button>
      </div>
    `;
    this.showModal(html);
  }

  downloadMaterialAttachment(fileName) {
    this.showToast(`⬇️ Descargando archivo oficial: ${fileName}`, "success");
  }

  showModal(contentHtml) {
    let overlay = document.getElementById("app-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "app-modal-overlay";
      overlay.className = "modal-overlay";
      document.body.appendChild(overlay);
    }
    overlay.innerHTML = `<div class="modal-container">${contentHtml}</div>`;
    overlay.classList.add("active");
  }

  closeModal() {
    const overlay = document.getElementById("app-modal-overlay");
    if (overlay) overlay.classList.remove("active");
  }

  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'danger' ? 'toast-danger' : ''}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Instancia e inicio global robusto e inmediato
window.app = new IntranetApp();
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.app.init();
  });
} else {
  window.app.init();
}


