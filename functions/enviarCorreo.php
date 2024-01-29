<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!empty($data['email']) && !empty($data['asunto']) && !empty($data['mensaje'])) {
        $email = $data['email'];
        $asunto = $data['asunto'];
        $mensaje = $data['mensaje'];
        $destino = 'manuelmarienhoff1@gmail.com';
        
        $header = "From: $email\r\n";
        $header .= "Reply-To: $email\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();

        $mail = mail($destino, $asunto, $mensaje, $header);

        if ($mail) {
            echo json_encode(["message" => "El correo se envió correctamente"]);
        } else {
            echo json_encode(["message" => "Hubo un problema al enviar el correo"]);
        }
    }
}
