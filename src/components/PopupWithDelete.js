
import Popup from "./Popup"

export default class PopupWithDelete extends Popup {
  constructor(formSelector) {
    super(formSelector)
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