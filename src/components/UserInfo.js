
export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector)
    this._about = document.querySelector(aboutSelector)
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
      _id: this._id
    }
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name
    this._about.textContent = userData.about
    this._id = userData._id
  }

  setAvatar(link) {
    this._avatar.src = link
  }
}