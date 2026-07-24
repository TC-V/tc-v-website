<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit;
}


$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$message = trim($_POST["message"] ?? "");


if (
    empty($name) ||
    empty($email) ||
    empty($message) ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {

    header("Location: ../index.html?status=error#kontakt");
    exit;

}


$to = "philipp.vierthaler@tc-v.de";

$subject = "Neue Anfrage über tc-v.de";


$email_content =
"Neue Kontaktanfrage\n\n" .
"Name: " . $name . "\n" .
"E-Mail: " . $email . "\n" .
"Telefon: " . $phone . "\n\n" .
"Nachricht:\n" .
$message;


$headers =
"From: Website Kontaktformular <noreply@tc-v.de>\r\n" .
"Reply-To: " . $email . "\r\n" .
"Content-Type: text/plain; charset=UTF-8\r\n";


mail(
    $to,
    $subject,
    $email_content,
    $headers
);


header("Location: ../index.html?status=success#kontakt");
exit;

?>
