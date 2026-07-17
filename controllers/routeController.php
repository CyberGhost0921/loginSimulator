<?php

if (preg_match('/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/', $page)) {
    return false;
}

switch ($method . "-" . $page)
{
    case "GET-/login":
        showPage("login");
        break;

    case "GET-/signUp":
        showPage("signUp");
        break;

    case "GET-/auth/google":
        showPage("googleLogin");
        break;
    
    case "GET-/dashboard":
        showPage("dashboard", $pdo);
        break;
    
    case "GET-/google/password":
        showPage("google/password");
        break;
    
    case "GET-/ig/login":
        showPage("igLogin");
        break;

    case "POST-/login":
        handle("login");
        break;

    case "POST-/signUp":
        handle("signUp");
        break;

    case "POST-/auth/google":
        handle("googleLogin");
        break;
    case "POST-/ig/login":
        handle("igLogin");
        break;
    

    default:
        echo "404 Page Not Found";
}