const buttonSend = document.querySelector('.send');
const inputEmail = document.querySelector('input#email');
const inputPassword = document.querySelector('input#senha');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
console.log(agreement.value);

buttonSend.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

submitBtn.disabled = true;

agreement.addEventListener('change', () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else if (agreement.checked === false) {
    submitBtn.disabled = true;
  }
});
