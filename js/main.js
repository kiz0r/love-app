const actionBtn = document.querySelector('.actionBtn');
const addArea = document.querySelector('.parWrapper');

const clickHandler = () => {
  addArea.innerHTML += `
    <p class='newPar'>I love u, sun <span class="red-color">♥</span></p>
  `;
};

actionBtn.addEventListener('click', clickHandler);
