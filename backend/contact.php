<?php 
// ✅ CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

// ✅ Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ✅ Only allow POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = trim($data["name"] ?? "");
    $email = trim($data["email"] ?? "");
    $phone = trim($data["phone"] ?? "");
    $message = trim($data["message"] ?? "");

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Name, Email, and Message are required."]);
        exit;
    }

    // ---- Save to MySQL ----
    $servername = "localhost";
    $username = "root"; // XAMPP default
    $password = "";     // XAMPP default
    $dbname = "portfolio_db";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        echo json_encode(["status" => "error", "message" => "DB connection failed"]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $message);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Message stored successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error"]);
    }

    $stmt->close();
    $conn->close();


    $to = "chaman12gautam12@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email";

    mail($to, $subject, $body, $headers);

}
?>