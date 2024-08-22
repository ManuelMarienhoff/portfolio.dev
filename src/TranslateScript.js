const button = document.querySelector('#languageButton');
const textSpanish = document.querySelectorAll('.spanish');
const textEnglish = document.querySelectorAll('.english');
const inputEmail = document.querySelector('#email');
const inputSubject = document.querySelector('#asunto');
const inputMessage = document.querySelector('#mensaje');
const sendEmailButton = document.querySelector('#sendEmail');
const whatsappLinks = document.querySelectorAll('.whatsapp-float')

button.addEventListener('click', () => {
  /* Traduce a ingles */
  if (button.classList.contains('english')) {
    textSpanish.forEach((element) => {
      element.classList.add('hidden');
    });

    textEnglish.forEach((element) => {
      element.classList.remove('hidden');
    });

    inputEmail.placeholder = 'Your email';
    inputSubject.placeholder = 'Subject';
    inputMessage.placeholder = 'Message';
    sendEmailButton.value = 'Send';

    whatsappLinks.forEach((link) => {
      if (link.classList.contains('english')) {
        link.classList.remove('hidden');
      } else if (link.classList.contains('spanish')) {
        link.classList.add('hidden');
      }
    });

    button.classList.add('spanish');
    button.classList.remove('english');
    /* Traduce a español */
  } else if (button.classList.contains('spanish')) {
    textEnglish.forEach((element) => {
      element.classList.add('hidden');
    });

    textSpanish.forEach((element) => {
      element.classList.remove('hidden');
    });

    inputEmail.placeholder = 'Tu correo electrónico';
    inputSubject.placeholder = 'Asunto';
    inputMessage.placeholder = 'Mensaje';
    sendEmailButton.value = 'Enviar';

    whatsappLinks.forEach((link) => {
      if (link.classList.contains('spanish')) {
        link.classList.remove('hidden');
      } else if (link.classList.contains('english')) {
        link.classList.add('hidden');
      }
    });

    button.classList.add('english');
    button.classList.remove('hidden');
    button.classList.remove('spanish');
  }
});
