const dropDownContainer = document.querySelector('.services')
const dropDown = document.querySelector('.drop-down')


dropDownContainer.addEventListener('click', (e) => {
  dropDown.classList.toggle('ativo')
})

