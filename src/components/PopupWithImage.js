
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._imageElement = this._popup.querySelector('.modal__img-content')
    this._imageCaption = this._popup.querySelector('.modal__img-caption')
  }

  open(data) {
    super.open()
    this._imageElement.src = data.link
    this._imageElement.alt = data.text
    this._imageCaption.textContent = data.text
  }
}