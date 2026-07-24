<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit;
}

$name    = trim($_POST["name"] ?? "");
$email   = trim($_POST["email"] ?? "");
$subject = trim($_POST["subject"] ?? "Kontaktanfrage über tc-v.de");
$message = trim($_POST["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    die("Bitte alle Pflichtfelder ausfüllen.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Ungültige E-Mail-Adresse.");
}

$to = "philipp.vierthaler@tc-v.de";

$mailSubject = "TC-V Kontaktformular: " . $subject;

$mailBody =
"Name: {$name}\n" .
"E-Mail: {$email}\n\n" .
"Nachricht:\n{$message}";

$headers = [];
$headers[] = "From: TC-V Website <no-reply@tc-v.de>";
$headers[] = "Reply-To: {$email}";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

mail($to, $mailSubject, $mailBody, implode("\r\n", $headers));

header("Location: ../index.html?status=success");
exit;
?>
