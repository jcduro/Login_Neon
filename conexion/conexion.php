<?php
// db.php - Conexión PDO
$DB_HOST = 'localhost';    
$DB_NAME = 'nombre_base_datos';
$DB_USER = 'nombre_usuaerio';
$DB_PASS = 'password';
$DB_CHAR = 'utf8mb4';



$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $dsn = "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=$DB_CHAR";
    $pdo = new PDO($dsn, $DB_USER, $DB_PASS, $options);
} catch (PDOException $e) {
    // En producción no mostrar errores completos. Guardar en log.
    error_log("DB connection failed: " . $e->getMessage());
    die('Error de conexión a la base de datos.');
}
