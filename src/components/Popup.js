
export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector)
  }

  open() {
    this._popup.classList.add('modal_open')
    document.addEventListener('keydown', this._escCloseFunc)
  }

  close() {
    this._popup.classList.add('fade-out')
    setTimeout(() => {
      this._popup.classList.remove('modal_open')
      this._popup.classList.remove('fade-out')
    }, 250)
    document.removeEventListener('keydown', this._escCloseFunc)
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  _escCloseFunc = this._handleEscClose.bind(this)


  setEventListeners() {
    this._popup.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        this.close()
      }
    })
    this._popup.querySelector('.modal__close-button').addEventListener('click', () => {
      this.close()
    })
  }
}
