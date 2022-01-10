import './index.css'

// import all classes
import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js'
import {config, domElements} from '../utils/constants.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import PopupWithDelete from '../components/PopupWithDelete'
import Popup from '../components/Popup'

// create class instances
const api = new Api(
  {
    baseUrl: 'https://around.nomoreparties.co/v1/group-11',
    headers: {
      authorization: 'b25a31c4-1482-4c51-b23e-11f165e28f8b',
      'Content-Type': 'application/json'
    }
  }
)

const cardSection = new Section(
  {
    renderer: renderCard
  }, '.cards'
)

const userInfoData = new UserInfo(
  {
    nameSelector: '.info__name',
    aboutSelector: '.info__caption',
    avatarSelector: '.avatar'
  }
)

const imagePopup = new PopupWithImage('#img')

const addPopup = new PopupWithForm(
  {
    handleFormSubmission: (data) => {
      api.addCard(data)
        .then(res => {
        cardSection.addItem(renderCard(res))
        })
        .catch(err => console.log(err))
    } 
  }, '#add'
)

const editPopup = new PopupWithForm(
  {
    handleFormSubmission: (data) => {
      api.editProfile(data)
      .then(res => {
          userInfoData.setUserInfo(res)
        })
      .catch(err => console.log(err))
    }
  }, '#edit'
)

const editAvatarPopup = new PopupWithForm(
  {
    handleFormSubmission: (data) => {
      api.editAvatar(data)
        .then(res => {
          userInfoData.setAvatar(res)
        })
        .catch(err => console.log(err))
    }
  }, '#edit-avatar'
)

const deleteCardPopup = new PopupWithDelete('#delete')

const addFormValidator = new FormValidator(
  config,
  '#add-form'
)

const editFormValidator = new FormValidator(
  config,
  '#edit-form'
)

const avatarFormValidator = new FormValidator(
  config,
  '#edit-avatar-form'
)

// functions
function handleImageClick(imageData) {
  imagePopup.open(imageData)
}

function renderCard(data) {
  const cardElement = new Card(
    {
      data, 
      handleImageClick,
      handleDeleteCard: (cardId) => {
        deleteCardPopup.open()
        deleteCardPopup.setSubmitAction(() => {
          api.deleteCard(cardId)
            .then(() => {
              cardElement.deleteCard()
              deleteCardPopup.close()
            })
            .catch(err => console.log(`An error has ocurred when deleting card: ${err}`))
        })
      },
      handleLikeToggle: (userId) => {
        if (cardElement.isLiked()) {
          api.removeLike(userId)
            .then(likes => cardElement.setLikesInfo(likes))
            .catch(err => console.log(err))
        }
        else {
          api.addLike(userId)
            .then(likes => cardElement.setLikesInfo(likes))
            .catch(err => console.log(err))
        }
      }
    }, '#card-template', userInfoData._id
  ).createCard()
  return cardElement
}

// initialize class instances
Promise.all([api.getCardList(), api.getUserInfo()])
  .then(vals => {
    const [cardList, userInfo] = vals
    cardSection.renderItems(cardList)
    userInfoData.setUserInfo(userInfo)
    userInfoData.setAvatar(userInfo.avatar)
  })
  .catch(err => console.log(`An error has occured when rendering: ${err}`))
;

imagePopup.setEventListeners()

addPopup.setEventListeners()

editPopup.setEventListeners()

editAvatarPopup.setEventListeners()

deleteCardPopup.setEventListeners()

addFormValidator.enableValidation()

editFormValidator.enableValidation()

avatarFormValidator.enableValidation()

// EventListeners
domElements.addButton.addEventListener('click', () => {
  addPopup.open()
  addFormValidator.resetValidation()
})

domElements.editButton.addEventListener('click', () => {
  editPopup.open()
  editFormValidator.resetValidation()
  const userData = userInfoData.getUserInfo()
  domElements.formName.value = userData.name
  domElements.formJob.value = userData.about
})

domElements.avatarBtn.addEventListener('click', () => {
  editAvatarPopup.open()
  avatarFormValidator.resetValidation()
})

