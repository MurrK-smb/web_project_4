
export default class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._formElement = document.querySelector(formSelector)
  }

  _checkValidity(input) {
    const error = this._formElement.querySelector(`#${input.id}-error`)
    if (!input.validity.valid) {
      input.classList.add(this._inputErrorClass)
      error.classList.add(this._errorClass)
      error.textContent = input.validationMessage
    }
    else {
      input.classList.remove(this._inputErrorClass)
      error.classList.remove(this._errorClass)
      error.textContent = ''
    }
  }

  _toggleButton(inputList, submit) {
    if (inputList.some((input) => !input.validity.valid)) {
      submit.classList.add(this._inactiveButtonClass)
      submit.disabled = true
    }
    else {
      submit.classList.remove(this._inactiveButtonClass)
      submit.disabled = false
    }
  }

  _setEventListeners() {
    const inputList = [...this._formElement.querySelectorAll(this._inputSelector)]
    const submit = this._formElement.querySelector(this._submitButtonSelector)
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkValidity(input)
        this._toggleButton(inputList, submit)
      })
    })
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault()
    })
  }

  enableValidation() {
    this._setEventListeners()
  }
}
