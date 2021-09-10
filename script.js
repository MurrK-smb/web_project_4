
const editBtn = document.querySelector('.info__edit-button')
const addBtn = document.querySelector('.add-button')
const infoName = document.querySelector('.info__name')
const infoCaption = document.querySelector('.info__caption')
const imgTemplate = document.querySelector('#img-template').content
const cardTemplate = document.querySelector('#card-template').content
const modalTemplate = document.querySelector('#modal-template').content
const cards = [
  {name: "Yosemite Valley", link: "images/card-image1.png"},
  {name: "Lake Lousie", link: "images/card-image2.png"},
  {name: "Bald Mountains", link: "images/card-image3.png"},
  {name: "Latemar", link: "images/card-image4.png"},
  {name: "Vanoise National Park", link: "images/card-image5.png"},
  {name: "Lago di Braise", link: "images/card-image6.png"}
]

function fadeOut(t) {
  t.classList.add('fade-out')
  setTimeout(function() {t.remove()}, 250)
}

function createCard(c) {
  const card = cardTemplate.querySelector('.card').cloneNode(true)
  card.querySelector('.card__image').setAttribute('src', c.link)
  card.querySelector('.card__title').textContent = c.name
  card.querySelector('.card__like-button').addEventListener('click', function(e) {
    e.target.classList.toggle('card__like-button_a')
  })
  card.querySelector('.card__delete').addEventListener('click', function(e) {
    e.target.closest('.card').remove()
  })
  card.querySelector('.card__image').addEventListener('click', function(e) {
    const imgPopup = imgTemplate.querySelector('.img-popup').cloneNode(true)
    imgPopup.querySelector('.img-popup__content').src = e.target.getAttribute('src')
    imgPopup.querySelector('.img-popup__title').textContent = card.querySelector('.card__title').textContent
    card.append(imgPopup)
    imgPopup.querySelector('.img-popup__close').addEventListener('click', function(e) {
      fadeOut(e.target.closest('.img-popup'))
    })
  })
  document.querySelector('.cards').append(card)
}

function openModal(title, btn, input) {
  const modal = modalTemplate.querySelector('.modal').cloneNode(true)
  const formName = modal.querySelector('#form-name')
  const closeBtn = modal.querySelector('.modal__close-button')
  const formCaption = modal.querySelector('#form-caption')
  const form = modal.querySelector('.form')
  modal.querySelector('.modal__title').textContent = title
  modal.querySelector('.form__submit').textContent = btn
  closeBtn.addEventListener('click', function() {
    fadeOut(modal)
  })
  if(input) {
    formName.value = infoName.textContent
    formCaption.value = infoCaption.textContent
    form.addEventListener('submit', function(e) {
      e.preventDefault()
      infoName.textContent = formName.value
      infoCaption.textContent = formCaption.value
      fadeOut(modal)
    })
  }
  else {
    formName.setAttribute('placeholder', 'Title')
    formCaption.setAttribute('placeholder', 'Image link')
    form.addEventListener('submit', function(e) {
      e.preventDefault()
      cards.push({name: formName.value, link: formCaption.value})
      createCard(cards[cards.length - 1])
      fadeOut(modal)
    })
  }
  document.querySelector('.page').append(modal)
}

cards.forEach(function(x) {
  createCard(x)
})

editBtn.addEventListener('click', function() {openModal('Edit profile', 'Save', true)}, false)
addBtn.addEventListener('click', function() {openModal('New place', 'Create', false)}, false)
