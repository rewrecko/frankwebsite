<?php
session_start();

// Genera una stringa di testo casuale per il CAPTCHA
$randomString = substr(md5(rand()), 0, 5);

// Imposta la stringa di testo del CAPTCHA nella sessione
$_SESSION['captcha'] = $randomString;

// Crea un'immagine vuota per il CAPTCHA
$captchaImage = imagecreate(100, 40); // Imposta le dimensioni dell'immagine
$backgroundColor = imagecolorallocate($captchaImage, 255, 255, 255); // Sfondo bianco
$textColor = imagecolorallocate($captchaImage, 0, 0, 0); // Testo nero

// Disegna il testo del CAPTCHA sull'immagine
imagestring($captchaImage, 5, 25, 12, $randomString, $textColor);

// Imposta l'intestazione dell'immagine
header('Content-type: image/png');

// Mostra l'immagine del CAPTCHA
imagepng($captchaImage);
imagedestroy($captchaImage);
?>
