
const cards = [
  {name: "Yosemite Valley", link: "https://code.s3.yandex.net/web-code/yosemite.jpg"},
  {name: "Lake Lousie", link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"},
  {name: "Bald Mountains", link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"},
  {name: "Latemar", link: "https://code.s3.yandex.net/web-code/latemar.jpg"},
  {name: "Vanoise National Park", link: "https://code.s3.yandex.net/web-code/vanoise.jpg"},
  {name: "Lago di Braise", link: "https://code.s3.yandex.net/web-code/lago.jpg"}
]

const config = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error'
}

const domElements = {
  addButton: document.querySelector('.add-button'),
  editButton: document.querySelector('.info__edit-button'),
  formName: document.querySelector('#form-name'),
  formJob: document.querySelector('#form-caption'),
  profileName: document.querySelector('.info__name'),
  profileAbout: document.querySelector('.info__caption'),
  avatar: document.querySelector('.avatar'),
  avatarBtn: document.querySelector('.avatar-edit')
}

const token = 'b25a31c4-1482-4c51-b23e-11f165e28f8b'

const groupId = 'group-11'

const url = 'https://around.nomoreparties.co/v1/group-11/cards'

export {cards, config, domElements, token, groupId, url}
