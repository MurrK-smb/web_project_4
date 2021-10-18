
import FormValidator from './FormValidator.js'
import Card from './Card.js'
import {cards} from './cards.js'
import {openModal, closeModal, closeByEscape, setCloseByClickListener} from './utils.js'

const editBtn = document.querySelector('.info__edit-button')
const addBtn = document.querySelector('.add-button')
const closeBtns = Array.from(document.querySelectorAll('.modal__close-button'))
const editModal = document.querySelector('#edit')
const addModal = document.querySelector('#add')
const infoName = document.querySelector('.info__name')
const infoCaption = document.querySelector('.info__caption')
const formName = document.querySelector('#form-name')
const formCaption = document.querySelector('#form-caption')
const formTitle = document.querySelector('#form-title')
const formLink = document.querySelector('#form-link')

const forms = [...document.querySelectorAll('.form')]
const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error'
}
forms.forEach((form) => {
  new FormValidator(config, form).enableValidation()
})

const cardContainer = document.querySelector('.cards')
cards.forEach((cardData) => {
  cardContainer.append(new Card(cardData, '#card-template').createCard())
})

function setInitialState(modal) {
  const errorList = [...modal.querySelectorAll('.form__validation')]
  const inputList = [...modal.querySelectorAll('.form__input')]
  const submit = modal.querySelector('.form__submit')
  errorList.forEach((error) => {
    error.classList.remove('form__input-error')
    error.textContent = ''
  })
  inputList.forEach((input) => {
    input.classList.remove('form__input_error')
  })
  if (modal === addModal) {
    submit.classList.add('form__submit_disabled')
    submit.disabled = true
  } else {
    submit.classList.remove('form__submit_disabled')
  }
}

editBtn.addEventListener('click', () => {
  openModal(editModal)
  setCloseByClickListener(editModal)
  formName.value = infoName.textContent
  formCaption.value = infoCaption.textContent
  setInitialState(editModal)
})

addBtn.addEventListener('click', () => {
  openModal(addModal)
  setCloseByClickListener(addModal)
  setInitialState(addModal)
})

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    closeModal(closeBtn.closest('.modal'))
  })
})

editModal.querySelector('.form').addEventListener('submit', () => {
  infoName.textContent = formName.value
  infoCaption.textContent = formCaption.value
  closeModal(editModal)
})

const addForm = addModal.querySelector('.form')

addForm.addEventListener('submit', () => {
  const newCard = {name: formTitle.value, link: formLink.value}
  cardContainer.prepend(new Card(newCard, '#card-template').createCard())
  addForm.reset()
  closeModal(addModal)
})

