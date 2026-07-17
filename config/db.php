<?php

$host = getenv("MYSQLHOST");
$port = getenv("MYSQLPORT");
$database = getenv("MYSQLDATABASE");
$user = getenv("MYSQLUSER");
$password = getenv("MYSQLPASSWORD");

try {
    $pdo = new PDO(
        "mysql:host=$host;port=$port;dbname=$database;charset=utf8mb4",
        $user,
        $password
    );

} catch (Throwable $e) {
    die($e->getMessage());
}

function saveToDB($username, $email, $password)
{
    global $pdo;

    $stmt = $pdo->prepare(
        "INSERT INTO users(username,email,password)
         VALUES(?,?,?)"
    );

    $stmt->execute([
        $username,
        $email,
        $password
    ]);
}