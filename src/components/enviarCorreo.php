<?php
if (isset($_POST['enviar'])) {
    if (!empty($_POST['email']) && !empty($_POST['asunto']) && !empty($_POST['mensaje'])) {
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $mensaje = $_POST['mensaje'];
        $destino = 'manuelmarienhoff1@gmail.com';
        
        $header = "From: $email\r\n";
        $header .= "Reply-To: $email\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();

        $mail = mail($destino, $asunto, $mensaje, $header);

        if ($mail) {
            echo "El correo se envió correctamente";
        } else {
            echo "Hubo un problema al enviar el correo";
        }
    }
}