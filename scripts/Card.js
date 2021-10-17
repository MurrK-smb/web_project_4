
import {openModal, closeModal, closeByEscape, closeByClick} from './utils.js'

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name
    this._link = cardData.link
    this._cardSelector = cardSelector
  }

  _setEventListeners() {
    const imgModal = document.querySelector('#img')
    const imgModalContent = imgModal.querySelector('.modal__img-content')
    this._cardElement.querySelector('.card__like-button').addEventListener('click', (e) => {
      e.target.classList.toggle('card__like-button_a')
    })
    this._cardElement.querySelector('.card__delete').addEventListener('click', (e) => {
      e.target.closest('.card').remove()
    })
    this._cardImage.addEventListener('click', () => {
      openModal(imgModal)
      imgModalContent.setAttribute('src', this._link)
      imgModalContent.setAttribute('alt', this._name)
      imgModal.querySelector('.modal__img-caption').textContent = this._name
    })
    closeByClick(imgModal)
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