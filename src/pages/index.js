import './index.css'

// import all classes
import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js'
import { cards, config, domElements } from '../utils/constants.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

// functions
function handleImageClick(imageData) {
  imagePopup.open(imageData)
}

function cardRenderer(data) {
  const cardElement = new Card(
    {
      data, 
      handleImageClick
    }, '#card-template'
  ).createCard()
  return cardElement
}

// create class instances
const cardSection = new Section(
  {
    items: cards,
    renderer: cardRenderer
  }, '.cards'
)

const userInfoData = new UserInfo(
  {
    nameSelector: '.info__name',
    jobSelector: '.info__caption'
  }
)

const imagePopup = new PopupWithImage('#img')

const addPopup = new PopupWithForm(
  {
    handleFormSubmission: (data) => {
      const addedCard = cardRenderer(data)
      cardSection.addItem(addedCard)
    } 
  }, '#add'
)

const editPopup = new PopupWithForm(
  {
    handleFormSubmission: (data) => {
      userInfoData.setUserInfo(
        {
          name: data.name,
          job: data.job
        }
      )
    }
  }, '#edit'
)

const addFormValidator = new FormValidator(
  config,
  '#add-form'
)

const editFormValidator = new FormValidator(
  config,
  '#edit-form'
)

// initialize class instances
cardSection.renderItems(cards)

imagePopup.setEventListeners()

addPopup.setEventListeners()

editPopup.setEventListeners()

addFormValidator.enableValidation()

editFormValidator.enableValidation()

// Everything else
domElements.addButton.addEventListener('click', () => {
  addPopup.open()
  addFormValidator.resetValidation()
})

domElements.editButton.addEventListener('click', () => {
  editPopup.open()
  editFormValidator.resetValidation()
  const userData = userInfoData.getUserInfo()
  domElements.formName.value = userData.name
  domElements.formJob.value = userData.job
})

