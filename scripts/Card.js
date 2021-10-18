
import {openModal, closeModal, closeByEscape, setCloseByClickListener} from './utils.js'

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name
    this._link = cardData.link
    this._cardSelector = cardSelector
  }

  _setModalData(imgModal, imgModalContent) {
    imgModalContent.setAttribute('src', this._link)
    imgModalContent.setAttribute('alt', this._name)
    imgModal.querySelector('.modal__img-caption').textContent = this._name
  }

  _deleteCard(e) {
    e.target.closest('.card').remove()
  }

  _toggleLikeButton(e) {
    e.target.classList.toggle('card__like-button_a')
  }

  _setEventListeners() {
    const imgModal = document.querySelector('#img')
    const imgModalContent = imgModal.querySelector('.modal__img-content')
    this._cardElement.querySelector('.card__like-button').addEventListener('click', this._toggleLikeButton)
    this._cardElement.querySelector('.card__delete').addEventListener('click', this._deleteCard)
    this._cardImage.addEventListener('click', () => {
      openModal(imgModal)
      this._setModalData(imgModal, imgModalContent)
    })
    setCloseByClickListener(imgModal)
  }

  _getCardElement() {
    return document.querySelector(this._cardSelector).content.cloneNode(true)
  }

  createCard() {
    this._cardElement = this._getCardElement()
    this._cardImage = this._cardElement.querySelector('.card__image')
    this._cardElement.querySelector('.card__title').textContent = this._name
    this._cardImage.setAttribute('alt', this._name)
    this._cardImage.setAttribute('src', this._link)
    this._setEventListeners()
    return this._cardElement
  }
}

export default Card