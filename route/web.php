<?php

$page = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$method = $_SERVER["REQUEST_METHOD"];

require __DIR__ . "/../config/db.php";
require __DIR__ . "/../controllers/pageController.php";
require __DIR__ . "/../controllers/routeController.php";