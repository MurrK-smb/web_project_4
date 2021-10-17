
import FormValidator from './FormValidator.js'
import Card from './Card.js'
import {cards} from './cards.js'
import {openModal, closeModal, closeByEscape, closeByClick} from './utils.js'

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

//To my reviewer.
//The setInitialState() function is for clearing all error messages.
//It's called as an event handler when opening form popups.
//Since this handler is attached to the edit and add buttons to make sure the forms are clear when the user opens them,
//how do I make this function a part of the FormValidator class?
//(Or what is an alternative way of making sure the forms are clear of error messages when the user opens them?)
//Sorry to ask this way
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
  closeByClick(editModal)
  formName.value = infoName.textContent
  formCaption.value = infoCaption.textContent
  setInitialState(editModal)
})

addBtn.addEventListener('click', () => {
  openModal(addModal)
  closeByClick(addModal)
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

addModal.querySelector('.form').addEventListener('submit', () => {
  const newCard = {name: formTitle.value, link: formLink.value}
  cardContainer.prepend(new Card(newCard, '#card-template').createCard())
  addForm.reset()
  closeModal(addModal)
})

