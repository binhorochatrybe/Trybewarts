const buttonSend = document.querySelector('button');
const inputEmail = document.querySelector('input#email');
const inputPassword = document.querySelector('input#senha');
buttonSend.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
