const buttonSend = document.querySelector('.send');
const inputEmail = document.querySelector('input#email');
const inputPassword = document.querySelector('input#senha');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
console.log(agreement.value);
// função que checa se os valores dos inputs estão corretos, emitindo um alerta para sim ou para não.
buttonSend.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

submitBtn.disabled = true;
// função que checa se os termos de condição foram aceitos. Caso aceitos, o botão enviar é liberado.
agreement.addEventListener('change', () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else if (agreement.checked === false) {
    submitBtn.disabled = true;
  }
});


const textArea = document.getElementById('textarea')
const counter = document.querySelector('div #counter')
textArea.addEventListener('input', counterWord = () => {
  const count = 500 - textArea.value.length
  counter.innerHTML = count
})
// criando a função que esconde o forms primário e mostra o secundário. Utilizei a propriedade .visibility do css
const forms2 = document.querySelector('#form-data')
const forms1 = document.querySelector('#evaluation-form')
forms2.style.visibility = 'hidden';
submitBtn.addEventListener('click', showAndHide = (event) => {
  event.preventDefault()
  forms1.style.visibility = 'hidden';
  forms2.style.visibility = 'visible';
  // resgatando valores simples para adicionar ao parágrafo
  document.querySelector('.nome').innerHTML = 'Nome: ' + document.querySelector('#input-name').value + ' ' + document.querySelector('#input-lastname').value

  document.querySelector('.email').innerHTML = 'Email: ' + document.querySelector('#input-email').value

  document.querySelector('.obs').innerHTML = 'Observações: ' + document.querySelector('textarea').value

  document.querySelector('.casa').innerHTML = 'Casa: ' + document.querySelector('#house').value
  //
  //resgatando valores 'complexos' e adicionando com o for, pois possuímos mais de um input dentro de uma mesma categoria
  const nodelistFamilia = document.querySelectorAll('#family input')
  const familia = document.querySelector('.familia')
  for (let index = 0; index < nodelistFamilia.length; index += 1) {
    if (nodelistFamilia[index].checked) {
      familia.innerHTML = 'Família: ' + nodelistFamilia[index].value
    }
  }

  const materiaUser = document.querySelector('.materia')
  const nodelistCheckbox = document.querySelectorAll('.checkbox input')
  let storeCheckbox = '';
  for (let index = 0; index < nodelistCheckbox.length; index += 1) {
    if (nodelistCheckbox[index].checked) {
      storeCheckbox += nodelistCheckbox[index].value + ', '
      materiaUser.innerHTML = 'Matérias: ' + storeCheckbox
    }

  }

  const avaliation = document.querySelector('.avaliation')
  const nodelistAvaliation = document.querySelectorAll('.avaliacao input')
  for (let index = 0; index < nodelistAvaliation.length; index += 1) {
    if (nodelistAvaliation[index].checked) {
      avaliation.innerHTML = 'Avaliação: ' + nodelistAvaliation[index].value
    }
    
  }
  //
}
);
// dark mode
const icon = document.querySelector('.div-icons')
const body = document.querySelector('body')
const header = document.querySelector('header')
const allInputs = document.querySelectorAll('input')
const labels = document.querySelectorAll('label')
icon.addEventListener('click', () => {
if (body.style.backgroundColor === 'white') {
  body.style.backgroundColor = 'black';
  header.style.backgroundColor = '#1C1C1C';
  body.style.color = 'white';
  for (let index = 0; index < allInputs.length; index++) {
    allInputs[index].style.backgroundColor = '#808080'
  }
} else {
  body.style.backgroundColor = 'white';
  header.style.backgroundColor = 'rgb(50, 167, 145)';
  body.style.color = 'black';
  for (let index = 0; index < allInputs.length; index++) {
    allInputs[index].style.backgroundColor = 'white'
  }
}
})
