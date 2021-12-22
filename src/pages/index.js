import './index.css'

// import all classes
import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js'
import { cards, config } from '../components/constants.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

// functions
function handleImageClick(imageData) {
  ImagePopup.open(imageData)
}

function cardRenderer(data) {
  const CardElement = new Card(
    {
      data, 
      handleImageClick
    }, '#card-template'
  ).createCard()
  return CardElement
}

// create class instances
const CardSection = new Section(
  {
    items: cards,
    renderer: cardRenderer
  }, '.cards'
)

const UserInfoData = new UserInfo(
  {
    nameSelector: '.info__name',
    jobSelector: '.info__caption'
  }
)
const ImagePopup = new PopupWithImage('#img')

const AddPopup = new PopupWithForm(
  {
    handleFormSubmission: (data) => {
      const AddedCard = new Card(
        {
          data,
          handleImageClick
        }, '#card-template'
      ).createCard()
      CardSection.addItem(AddedCard)
    } 
  }, '#add'
)

const EditPopup = new PopupWithForm(
  {
    handleFormSubmission: (data) => {
      UserInfoData.setUserInfo(
        {
          name: data.name,
          job: data.job
        }
      )
    }
  }, '#edit'
)

const AddFormValidator = new FormValidator(
  config,
  '#add-form'
)

const EditFormValidator = new FormValidator(
  config,
  '#edit-form'
)

// initialize class instances
CardSection.renderItems(cards)

ImagePopup.setEventListeners()

AddPopup.setEventListeners()

EditPopup.setEventListeners()

AddFormValidator.enableValidation()

EditFormValidator.enableValidation()

// Everything else
document.querySelector('.add-button').addEventListener('click', () => {
  AddPopup.open()
})

document.querySelector('.info__edit-button').addEventListener('click', () => {
  EditPopup.open()
  const userData = UserInfoData.getUserInfo()
  document.querySelector('#form-name').value = userData.name
  document.querySelector('#form-caption').value = userData.job
})

