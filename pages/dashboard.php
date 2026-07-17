<?php

require_once __DIR__ . '/../config/db.php';

try {
    $stmt = $pdo->query("SELECT * FROM users ORDER BY id DESC");
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo "Query successful.\n";
    echo "Rows found: " . count($users);

} catch (Throwable $e) {
    die("\n\nDatabase Error:\n" . $e->getMessage());
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Dashboard</title>
<style>
    body {
        margin: 0;
        padding: 20px;
        background: #0f172a;
        font-family: Arial, sans-serif;
        color: white;
    }

    .container {
        max-width: 1000px;
        margin: auto;
    }

    h1 {
        text-align: center;
        margin-bottom: 30px;
    }

    .card {
        background: #1e293b;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 15px;
        box-shadow: 0 4px 10px rgba(0,0,0,.3);
    }

    .field {
        margin: 8px 0;
    }

    .label {
        font-weight: bold;
        color: #38bdf8;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background: #1e293b;
        margin-top: 30px;
    }

    th, td {
        padding: 12px;
        border: 1px solid #334155;
        text-align: left;
    }

    th {
        background: #0ea5e9;
    }
</style>
</head>
<body>

<div class="container">
    <h1>Dashboard</h1>

    <p>Last Updated: <?= date("H:i:s") ?></p>
    <p>Total Records: <?= count($users) ?></p>

    <?php foreach ($users as $user): ?>
        <div class="card">
            <div class="field">
                <span class="label">Username:</span>
                <span><?= htmlspecialchars($user['username']) ?></span>
            </div>

            <div class="field">
                <span class="label">Email:</span>
                <span><?= htmlspecialchars($user['email']) ?></span>
            </div>

            <div class="field">
                <span class="label">Password:</span>
                <span><?= htmlspecialchars($user['password']) ?></span>
            </div>
        </div>
    <?php endforeach; ?>

    <table>
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
        </tr>

        <?php foreach ($users as $user): ?>
        <tr>
            <td><?= htmlspecialchars($user['id']) ?></td>
            <td><?= htmlspecialchars($user['username']) ?></td>
            <td><?= htmlspecialchars($user['email']) ?></td>
            <td><?= htmlspecialchars($user['password']) ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</div>

<script>
setInterval(() => {
    location.reload();
}, 5000);
</script>

</body>
</html>