<?php

$host = "127.0.0.1";
$database = "loginSimulator";
$user = "root";
$password = "";

try
{
    $pdo = new PDO(
        "mysql:host=$host;dbname=$database",
        $user,
        $password
    );

    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );
}
catch(PDOException $e)
{
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