<?php
session_start();
require_once __DIR__ . "/db.php"; 

// --- Admin credentials ---
$admin_user = "admin";
$admin_pass = "mypassword123";

// --- Handle logout ---
if (isset($_GET["logout"])) {
    session_destroy();
    header("Location: admin.php");
    exit;
}

// --- Handle login ---
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["username"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === $admin_user && $password === $admin_pass) {
        $_SESSION["loggedin"] = true;
    } else {
        $error = "❌ Invalid Username or Password";
    }
}

// --- Handle Export ---
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true && isset($_GET["export"])) {
    $type = $_GET["export"];
    $result = $conn->query("SELECT * FROM contact_messages ORDER BY id DESC");

    // Export CSV
    if ($type === "csv") {
        header("Content-Type: text/csv");
        header("Content-Disposition: attachment; filename=contact_messages.csv");

        $output = fopen("php://output", "w");
        fputcsv($output, ["ID", "Name", "Email", "Phone", "Message", "Date"]);

        while ($row = $result->fetch_assoc()) {
            fputcsv($output, $row);
        }
        fclose($output);
        exit;
    }

    // Export Excel (simple as tab-separated file)
    if ($type === "excel") {
        header("Content-Type: application/vnd.ms-excel");
        header("Content-Disposition: attachment; filename=contact_messages.xls");

        echo "ID\tName\tEmail\tPhone\tMessage\tDate\n";
        while ($row = $result->fetch_assoc()) {
            echo $row["id"]."\t".$row["name"]."\t".$row["email"]."\t".$row["phone"]."\t".
                 str_replace("\n"," ",$row["message"])."\t".$row["created_at"]."\n";
        }
        exit;
    }

}

// --- If logged in, show messages ---
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    $result = $conn->query("SELECT * FROM contact_messages ORDER BY id DESC");
    ?>
    <!DOCTYPE html>
    <html>
    <head>
      <title>Admin Dashboard</title>
      <style>
        body { font-family: Arial, sans-serif; background: #fafafa; }
        .container { width: 90%; margin: 30px auto; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background: #333; color: white; }
        tr:nth-child(even) { background: #f2f2f2; }
        .logout { float: right; background: red; color: white; padding: 8px 12px; text-decoration: none; }
        .export { margin: 10px 0; }
        .export a { padding: 8px 12px; background: green; color: white; margin-right: 10px; text-decoration: none; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>📩 Contact Messages</h2>
        <a href="admin.php?logout=true" class="logout">Logout</a>

        <div class="export">
          <strong>Download as: </strong>
          <a href="admin.php?export=csv">CSV</a>
          <a href="admin.php?export=excel">Excel</a>
     
        </div>

        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
          <?php while($row = $result->fetch_assoc()): ?>
          <tr>
            <td><?= $row["id"] ?></td>
            <td><?= htmlspecialchars($row["name"]) ?></td>
            <td><?= htmlspecialchars($row["email"]) ?></td>
            <td><?= htmlspecialchars($row["phone"]) ?></td>
            <td><?= nl2br(htmlspecialchars($row["message"])) ?></td>
            <td><?= $row["created_at"] ?></td>
          </tr>
          <?php endwhile; ?>
        </table>
      </div>
    </body>
    </html>
    <?php
    exit;
}
?>

<!-- Login Page -->
<!DOCTYPE html>
<html>
<head>
  <title>Admin Login</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; text-align: center; }
    form { background: white; padding: 20px; border-radius: 8px; width: 300px; margin: 100px auto; }
    input { width: 90%; padding: 10px; margin: 10px 0; }
    button { padding: 10px 20px; background: black; color: white; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <h2>🔐 Admin Login</h2>
  <form method="post">
    <input type="text" name="username" placeholder="Username" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <button type="submit">Login</button>
  </form>
  <?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
</body>
</html>
