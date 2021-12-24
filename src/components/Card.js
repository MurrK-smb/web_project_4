
class Card {
  constructor({ data, handleImageClick }, selector) {
    this._name = data.name
    this._link = data.link
    this._selector = selector
    this._handleImageClick = handleImageClick
  }

  _deleteCard(e) {
    e.target.closest('.card').remove()
  }

  _toggleLikeButton(e) {
    e.target.classList.toggle('card__like-button_a')
  }

  _setEventListeners() {
    this._cardElement.querySelector('.card__like-button').addEventListener('click', this._toggleLikeButton)
    this._cardElement.querySelector('.card__delete').addEventListener('click', this._deleteCard)
    this._cardImage.addEventListener('click', () => this._handleImageClick({name: this._name, link: this._link}))
  }

  _getCardElement() {
    return document.querySelector(this._selector).content.cloneNode(true)
  }

  createCard() {
    this._cardElement = this._getCardElement()
    this._cardImage = this._cardElement.querySelector('.card__image')
    this._cardElement.querySelector('.card__title').textContent = this._name
    this._cardImage.alt = this._name
    this._cardImage.src = this._link
    this._setEventListeners()
    return this._cardElement
  }
}

export default Card