
const checkValidity = (form, input, settings) => {
  const error = form.querySelector(`#${input.id}-error`)
  if (!input.validity.valid) {
    input.classList.add(settings.inputErrorClass)
    error.classList.add(settings.errorClass)
    error.textContent = input.validationMessage
  }
  else {
    input.classList.remove(settings.inputErrorClass)
    error.classList.remove(settings.errorClass)
    error.textContent = ''
  }
}

const toggleButton = (inputList, submit, settings) => {
  if (inputList.some((input) => !input.validity.valid)) {
    submit.classList.add(settings.inactiveButtonClass)
    submit.disabled = true
  }
  else {
    submit.classList.remove(settings.inactiveButtonClass)
    submit.disabled = false
  }
}

const setEventListeners = (form, settings) => {
  const inputList = [...form.querySelectorAll(settings.inputSelector)]
  const submit = form.querySelector(settings.submitButtonSelector)
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkValidity(form, input, settings)
      toggleButton(inputList, submit, settings)
    })
  })
}

const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(settings.formSelector)]
  formList.forEach((form) => {
    setEventListeners(form, settings)
  })
}

const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_error',
  errorClass: 'form__input-error'
}

enableValidation(settings)
