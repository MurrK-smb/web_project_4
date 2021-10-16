
class Card {
  constructor(cardData, cardTemplate) {
    this._name = cardData.name
    this._link = cardData.link
    this._cardTemplate = cardTemplate
  }

  _closePopupImg(imgModal) {
    imgModal.classList.add('fade-out')
    setTimeout(() => {
      imgModal.classList.remove('modal_open')
      imgModal.classList.remove('fade-out')
    }, 250)
  }

  _closeByEscape(e) {
    if (e.key === 'Escape') {
      this._closePopupImg(document.querySelector('.modal_open'))
    }
  }

  _openPopupImg(imgModal) {
    const imgModalContent = imgModal.querySelector('.modal__img-content')
    imgModal.classList.add('modal_open')
    imgModalContent.setAttribute('src', this._link)
    imgModalContent.setAttribute('alt', this._name)
    imgModal.querySelector('.modal__img-caption').textContent = this._name
    document.addEventListener('keydown', (e) => {
      this._closeByEscape(e)
    })
  }

  _setEventListeners(card, cardImage) {
    const imgModal = document.querySelector('#img')
    card.querySelector('.card__like-button').addEventListener('click', (e) => {
      e.target.classList.toggle('card__like-button_a')
    })
    card.querySelector('.card__delete').addEventListener('click', (e) => {
      e.target.closest('.card').remove()
    })
    cardImage.addEventListener('click', () => {
      this._openPopupImg(imgModal)
    })
    imgModal.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        this._closePopupImg(imgModal)
      }
    })
  }

  _populateCard() {
    const card = this._cardTemplate.querySelector('.card').cloneNode(true)
    const cardImage = card.querySelector('.card__image')
    cardImage.setAttribute('alt', this._name)
    cardImage.setAttribute('src', this._link)
    card.querySelector('.card__title').textContent = this._name
    this._setEventListeners(card, cardImage)
    return card
  }

  createCard() {
    return this._populateCard()
  }
}

export default Card