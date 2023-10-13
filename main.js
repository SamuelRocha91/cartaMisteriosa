function addCarta() {
  const button = document.querySelector('button');
  const input = document.querySelector('input');
  const p = document.querySelector('p');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    p.innerHTML = '';
    const words = input.value.split(' ');
    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement('span');
      span.id = 'criar-carta';
      span.innerText = `${words[i]}`;
      p.appendChild(span);
    }
  });
}

window.onload = () => {
  addCarta();
};
