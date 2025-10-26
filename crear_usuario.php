<?php
require_once __DIR__ . "/conexion/conexion.php";

// Cambia estos valores a tu usuario y contraseña preferidos
$usuario = 'nombre_usuario';
$clave = password_hash('password', PASSWORD_DEFAULT);

$sql = "INSERT INTO name_basededatos (usuario, clave) VALUES (:usuario, :clave)";
$stmt = $pdo->prepare($sql);
$stmt->execute(['usuario' => $usuario, 'clave' => $clave]);

echo "✅ Usuario administrador creado correctamente";
?>
