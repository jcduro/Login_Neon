## 💫 Login Neon
Un formulario de inicio de sesión moderno con efecto neón interactivo:
una cuadrícula de luces que se activan y desvanecen al mover el mouse,
combinado con un estilo glassmorphism translúcido.

---

## ✨ Vista previa

![Login Neon Preview](preview.gif)

> **

---

## ✨Características

🔹 Login en PHP con conexión lista a la base de datos (archivo index.php)

🔹 Gestión segura de contraseñas usando password_hash y password_verify

🔹 Archivo SQL (crear_usuario.sql) para crear la tabla de usuarios y agregar usuario de prueba

🔹 Fondo animado tipo cuadrícula reactiva al movimiento del mouse

🔹 Formulario con efecto vidrio (glassmorphism)

🔹 Botón de inicio de sesión con color neón #00ffe1

🔹 Icono de “ojo” para mostrar/ocultar la contraseña

🔹 Diseño responsive adaptable a cualquier pantalla

---

## 🚀 Cómo probarlo localmente

1. Clona este repositorio:
   ```bash
   git clone https://github.com/jcduro/Login_Neon.git
   cd Login_Neon


2. Configura la base de datos:

Importa el archivo crear_usuario.sql en tu gestor de base de datos MySQL/MariaDB.

Actualiza las credenciales de conexión a la base de datos en index.php si es necesario.

3. Inicia tu servidor local y abre index.php en el navegador.

##🗄️ Estructura de archivos
   
text
Login_Neon/
│
├─ conexion/conexion.php  # Lógica de conexion (conexión con la BD)
├─ index.php              # Lógica de login (conexión con la BD, hash de contraseña)
├─ name_basededatos.sql   # (Archivo SQL para crear la BD)
├─ script.js              # Animaciones e interactividad del login
├─ styles.css             # Estilos y diseño glassmorphism/neón
├─ crear_usuario.sql      # Script SQL para crear tabla y usuario ejemplo
└─ preview.gif            # Vista previa animada del login


## ℹ️ Notas
El login está preparado para integrarse fácilmente con tu propia base de datos.

Por seguridad, las contraseñas se almacenan con hash mediante password_hash.
