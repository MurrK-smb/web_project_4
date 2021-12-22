
import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ handleFormSubmission }, formSelector) {
    super(formSelector)
    this._handleFormSubmission = handleFormSubmission
  }

  close() {
    this._popup.querySelector('.form').reset()
    super.close()
  }

  _getInputValues() {
    const inputValues = {}
    const inputList = [...this._popup.querySelectorAll('.form__input')]
    inputList.forEach((input) => {
      inputValues[input.name] = input.value
    })
    return inputValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault
      this._handleFormSubmission(this._getInputValues())
      this.close()
    })
  }
}
