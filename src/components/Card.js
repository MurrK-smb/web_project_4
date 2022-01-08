import { data } from "autoprefixer"

class Card {
  constructor({ data, handleImageClick, handleDeleteCard, handleLikeToggle }, selector) {
    this._name = data.name
    this._link = data.link
    this._likes = data.likes
    this._id = data._id
    this._selector = selector
    this._handleImageClick = handleImageClick
    this._handleDeleteCard = handleDeleteCard
    this._toggleLike = handleLikeToggle
  }

  _toggleLikeButton(e) {
    e.target.classList.toggle('card__like-button_a')
  }

  _setEventListeners() {
    this._cardElement.querySelector('.card__like-button').addEventListener('click', () => {
      this._toggleLike(this), this._likes
    })
    this._cardElement.querySelector('.card__delete').addEventListener('click', () => this._handleDeleteCard(this._id))
    this._cardImage.addEventListener('click', () => this._handleImageClick({name: this._name, link: this._link}))
  }

  _updateLikes() {
    this._cardLikes.textContent = this._likes.length
  }

  _getCardElement() {
    return document.querySelector(this._selector).content.querySelector('.card').cloneNode(true)
  }

  getCardId() {
    return this._id
  }

  setLikesInfo(data) {
    this._cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_a')
    this._likes = data.likes
    this._updateLikes()
  }


  createCard() {
    this._cardElement = this._getCardElement()
    this._cardElement.id = this._id
    this._cardImage = this._cardElement.querySelector('.card__image')
    this._cardLikes = this._cardElement.querySelector('.card__like-count')
    this._cardElement.querySelector('.card__title').textContent = this._name
    this._cardImage.alt = this._name
    this._cardImage.src = this._link
    this._cardLikes.textContent = this._likes.length
    this._setEventListeners()
    return this._cardElement
  }

  deleteCard() {
    this._cardElement.remove()
  }
}

export default Card