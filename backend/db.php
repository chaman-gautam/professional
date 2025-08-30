<?php
$servername = "localhost";
$username   = "root";     // default in XAMPP
$password   = "";         // default in XAMPP
$dbname     = "portfolio_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(" Database connection failed: " . $conn->connect_error);
}
?>
