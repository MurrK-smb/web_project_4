
import Popup from "./Popup"

export default class PopupWithDelete extends Popup {
  constructor({ handleFormSubmission }, formSelector) {
    super(formSelector)
    this._handleFormSubmission = handleFormSubmission
  }

  setSubmitAction(action) {
    this._handleFormSubmission = action
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault()
      this._handleFormSubmission()
      this.close()
    })
  }
}