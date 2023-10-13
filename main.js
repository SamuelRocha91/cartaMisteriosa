function randomNumber() {
  const nums = [3, 3, 2, 2];
  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = Math.floor(Math.random() * nums[i]);
  }
  return nums;
}

function generationClassForWord(ran) {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotate = ['rotateleft', 'rotateright'];
  const skew = ['skewleft', 'skewright'];
  const styleSpan = `${style[ran[0]]} ${size[ran[1]]} ${rotate[ran[2]]} ${skew[ran[3]]}`;
  return styleSpan;
}

function wordModifier() {
  const p = document.querySelector('p');
  p.addEventListener('click', (event) => {
    const span = event.target;
    const randomNUmbers = randomNumber();
    span.className = generationClassForWord(randomNUmbers);
  });
}

function createSpan(words, i, ran) {
  const span = document.createElement('span');
  span.id = 'criar-carta';
  span.innerText = `${words[i]}`;
  span.className = generationClassForWord(ran);
  return span;
}

function criarCarta(event) {
  const input = document.querySelector('input');
  const p = document.querySelector('p');
  event.preventDefault();
  const randomNUmbers = randomNumber();
  p.innerHTML = '';
  if (!input.value || input.value.trim().length === 0) {
    const span = document.createElement('span');
    span.innerText = 'Por favor, digite o conteúdo da carta.';
    return p.appendChild(span);
  }
  const words = input.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const span = createSpan(words, i, randomNUmbers);
    p.appendChild(span);
    p.innerHTML += ' ';
  }
}

function addCarta() {
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => criarCarta(event));
}

function contadorDePalavras() {
  const p = document.getElementById('carta-contador');
  const button = document.querySelector('button');
  const input = document.querySelector('input');
  button.addEventListener('click', () => {
    const arrayOfWord = input.value.split(' ');
    p.innerText = `${arrayOfWord.length}`;
  });
}

window.onload = () => {
  addCarta();
  wordModifier();
  contadorDePalavras();
};
