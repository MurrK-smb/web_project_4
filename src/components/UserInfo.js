
export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = document.querySelector(nameSelector)
    this._job = document.querySelector(jobSelector)
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name
    this._job.textContent = userData.job
  }
}