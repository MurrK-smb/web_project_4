
const editBtn = document.querySelector('.info__edit-button')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close-button')

function openModal() {
  modal.classList.add('modal_open')
  formName.value = infoName.textContent
  formCaption.value = infoCaption.textContent
}

function closeModal() {
  modal.classList.remove('modal_open')
}

const formName = document.querySelector('#form-name')
const formCaption = document.querySelector('#form-caption')
const infoName = document.querySelector('.info__name')
const infoCaption = document.querySelector('.info__caption')
const submit = document.querySelector('.form')

function setInfo(e) {
  infoName.textContent = formName.value
  infoCaption.textContent = formCaption.value
  closeModal()
  e.preventDefault()
}

editBtn.addEventListener('click', openModal, false)
closeBtn.addEventListener('click', closeModal, false)
submit.addEventListener('submit', setInfo, false)
