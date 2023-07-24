<?php
session_start();

if (isset($_POST['captcha']) && $_POST['captcha'] === $_SESSION['captcha']) {
    // Il CAPTCHA è corretto, puoi eseguire le operazioni desiderate qui
    echo "CAPTCHA corretto. Operazione completata!";
} else {
    // Il CAPTCHA è errato, puoi gestire l'errore in modo appropriato
    echo "CAPTCHA errato. Riprova.";
}

// Distruggi la sessione del CAPTCHA dopo la verifica
unset($_SESSION['captcha']);
?>
