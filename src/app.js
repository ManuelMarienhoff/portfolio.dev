const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/enviarCorreo', (req, res) => {
  const { email, asunto, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: 'tupassword' /* necesito que el usuario autentifique su mail proque sino me bloquean las solicitudes por cuestion de spam */,
    },
  });

  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'manuelmarienhoff1@gmail.com',
    subject: asunto,
    text: `De: ${email}\n\n${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Error al enviar el correo' });
    }
    res.json({ message: 'Correo enviado con éxito', info });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
