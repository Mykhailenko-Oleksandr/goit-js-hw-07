function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', (event) => {
  const body = document.querySelector('body')
  const color = document.querySelector('.color')

  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor
})

