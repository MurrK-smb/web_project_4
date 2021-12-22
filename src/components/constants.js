
const cards = [
  {name: "Yosemite Valley", link: "./images/card-image1.png"},
  {name: "Lake Lousie", link: "images/card-image2.png"},
  {name: "Bald Mountains", link: "images/card-image3.png"},
  {name: "Latemar", link: "images/card-image4.png"},
  {name: "Vanoise National Park", link: "images/card-image5.png"},
  {name: "Lago di Braise", link: "images/card-image6.png"}
// {name: "Yosemite Valley", link: "<%=require('images/card-image1.png')%>"},
// {name: "Lake Lousie", link: "<%=require('./images/card-image2.png')%>"},
// {name: "Bald Mountains", link: "<%=require('./images/card-image3.png')%>"},
// {name: "Latemar", link: "<%=require('./images/card-image4.png')%>"},
// {name: "Vanoise National Park", link: "<%=require('./images/card-image5.png')%>"},
// {name: "Lago di Braise", link: "<%=require('./images/card-image6.png')%>"}
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
