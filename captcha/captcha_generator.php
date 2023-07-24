<?php
session_start();

// Genera una stringa di testo casuale per il CAPTCHA
$randomString = substr(md5(rand()), 0, 5);

// Imposta la stringa di testo del CAPTCHA nella sessione
$_SESSION['captcha'] = $randomString;

// Crea un'immagine vuota per il CAPTCHA
$captchaImage = imagecreatefrompng('captcha_background.png'); // Assicurati di avere un'immagine di sfondo valida

// Imposta il colore del testo (nero)
$textColor = imagecolorallocate($captchaImage, 0, 0, 0);

// Imposta il testo sulle coordinate dell'immagine (posizione casuale per aumentare la sicurezza)
$textX = rand(10, 30);
$textY = rand(20, 40);
imagestring($captchaImage, 5, $textX, $textY, $randomString, $textColor);

// Imposta l'intestazione dell'immagine
header('Content-type: image/png');

// Mostra l'immagine del CAPTCHA
imagepng($captchaImage);
imagedestroy($captchaImage);
?>
