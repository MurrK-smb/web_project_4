
const cards = [
  // {name: "Yosemite Valley", link: "./images/card-image1.png"},
  // {name: "Lake Lousie", link: "images/card-image2.png"},
  // {name: "Bald Mountains", link: "images/card-image3.png"},
  // {name: "Latemar", link: "images/card-image4.png"},
  // {name: "Vanoise National Park", link: "images/card-image5.png"},
  // {name: "Lago di Braise", link: "images/card-image6.png"}
  {name: "Yosemite Valley", link: "https://code.s3.yandex.net/web-code/yosemite.jpg"},
  {name: "Lake Lousie", link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"},
  {name: "Bald Mountains", link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"},
  {name: "Latemar", link: "https://code.s3.yandex.net/web-code/latemar.jpg"},
  {name: "Vanoise National Park", link: "https://code.s3.yandex.net/web-code/vanoise.jpg"},
  {name: "Lago di Braise", link: "https://code.s3.yandex.net/web-code/lago.jpg"}
]

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error'
}

export {cards, config}
