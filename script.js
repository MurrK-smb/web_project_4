
const editBtn = document.querySelector('.info__edit-button')
const addBtn = document.querySelector('.add-button')
const closeBtns = Array.from(document.querySelectorAll('.modal__close-button'))
const editModal = document.querySelector('#edit')
const addModal = document.querySelector('#add')
const imgModal = document.querySelector('#img')
const infoName = document.querySelector('.info__name')
const infoCaption = document.querySelector('.info__caption')
const formName = document.querySelector('#form-name')
const formCaption = document.querySelector('#form-caption')
const formTitle = document.querySelector('#form-title')
const formLink = document.querySelector('#form-link')
const cardTemplate = document.querySelector('#card-template').content
const cards = [
  {name: "Yosemite Valley", link: "images/card-image1.png"},
  {name: "Lake Lousie", link: "images/card-image2.png"},
  {name: "Bald Mountains", link: "images/card-image3.png"},
  {name: "Latemar", link: "images/card-image4.png"},
  {name: "Vanoise National Park", link: "images/card-image5.png"},
  {name: "Lago di Braise", link: "images/card-image6.png"}
]
const cardColl = document.querySelector('.cards')

function openModal(modal) {
  modal.classList.remove('modal_closed')
}

function closeModal(e) {
  const modal = e.target.closest('.modal')
  modal.classList.add('fade-out')
  setTimeout(function() {
    modal.classList.add('modal_closed')
    modal.classList.remove('fade-out')
  }, 250)
}

function createCard(cardData) {
  const card = cardTemplate.querySelector('.card').cloneNode(true)
  card.querySelector('.card__image').setAttribute('src', cardData.link)
  card.querySelector('.card__title').textContent = cardData.name
  
  card.querySelector('.card__like-button').addEventListener('click', function(e) {e.target.classList.toggle('card__like-button_a')})
  card.querySelector('.card__delete').addEventListener('click', function(e) {e.target.closest('.card').remove()})
  card.querySelector('.card__image').addEventListener('click', function() {
    openModal(imgModal)
    imgModal.querySelector('.modal__img-content').setAttribute('src', cardData.link)
    imgModal.querySelector('.modal__img-content').setAttribute('alt', cardData.link)
    imgModal.querySelector('.modal__img-caption').textContent = cardData.name
  })
  return card
}

cards.forEach(function(cardData) {
  cardColl.append(createCard(cardData))
})

formName.value = infoName.textContent
formCaption.value = infoCaption.textContent

editBtn.addEventListener('click', function() {openModal(editModal)})
addBtn.addEventListener('click', function() {openModal(addModal)})
closeBtns.forEach(function(closeBtn) {
  closeBtn.addEventListener('click', closeModal)
})
editModal.querySelector('.form').addEventListener('submit', function(e) {
  e.preventDefault()
  infoName.textContent = formName.value
  infoCaption.textContent = formCaption.value
  closeModal(e)
})
addModal.querySelector('.form').addEventListener('submit', function(e) {
  e.preventDefault()
  const newCard = {name: formTitle.value, link: formLink.value}
  cards.push(newCard)
  cardColl.prepend(createCard(newCard))
  closeModal(e)
})