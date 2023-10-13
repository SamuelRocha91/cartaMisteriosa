function criarCarta(event) {
  const input = document.querySelector('input');
  const p = document.querySelector('p');
  event.preventDefault();
  p.innerHTML = '';
  if (!input.value || input.value.trim().length === 0) {
    const span = document.createElement('span');
    span.innerText = 'Por favor, digite o conteúdo da carta.';
    return p.appendChild(span);
  }
  const words = input.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    const span = document.createElement('span');
    span.id = 'criar-carta';
    span.innerText = `${words[i]}`;
    p.appendChild(span);
    p.innerHTML += ' ';
  }
}

function addCarta() {
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => criarCarta(event));
}

window.onload = () => {
  addCarta();
};
