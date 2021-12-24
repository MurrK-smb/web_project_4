
export default class FormValidator {
  constructor(config, formSelector) {
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._formElement = document.querySelector(formSelector)
    this._inputList = [...this._formElement.querySelectorAll(this._inputSelector)]
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector)
  }

  _showError(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`)
    input.classList.add(this._inputErrorClass)
    error.classList.add(this._errorClass)
    error.textContent = input.validationMessage
  }

  _hideError(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`)
    input.classList.remove(this._inputErrorClass)
    error.classList.remove(this._errorClass)
    error.textContent = ''
  }

  _checkValidity(input) {
    if (!input.validity.valid) {
      this._showError(input)
    }
    else {
      this._hideError(input)
    }
  }

  _toggleButton() {
    if (this._inputList.some((input) => !input.validity.valid)) {
      this._submitButton.classList.add(this._inactiveButtonClass)
      this._submitButton.disabled = true
    }
    else {
      this._submitButton.classList.remove(this._inactiveButtonClass)
      this._submitButton.disabled = false
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkValidity(input)
        this._toggleButton()
      })
    })
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault()
    })
  }

  enableValidation() {
    this._setEventListeners()
  }
  
  resetValidation() {
    this._toggleButton()
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    })
  }
}
