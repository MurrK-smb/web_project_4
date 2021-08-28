
const editBtn = document.querySelector('.info__edit-button')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close-button')

function toggleModal() {
  modal.classList.toggle('modal_open')
}

editBtn.addEventListener('click', toggleModal, false)
closeBtn.addEventListener('click', toggleModal, false)

const formName = document.querySelector('.form__name')
const formCaption = document.querySelector('.form__caption')
const infoName = document.querySelector('.info__name')
const infoCaption = document.querySelector('.info__caption')

formName.value = infoName.textContent
formCaption.value = infoCaption.textContent

const submit = document.querySelector('.form__submit')

function setInfo() {
  infoName.textContent = formName.value
  infoCaption.textContent = formCaption.value
  toggleModal()
}

submit.addEventListener('click', setInfo, false)

const cards = document.querySelector('.cards')

function like(e) {
  if(e.target.classList.contains('card__like-image')) {
    if(e.target.getAttribute('src') === 'images/heart.svg') {
      e.target.setAttribute('src', 'images/heart_filled.svg')
    }
    else {
      e.target.setAttribute('src', 'images/heart.svg')
    }
  }
}

cards.addEventListener('click', like, false)
