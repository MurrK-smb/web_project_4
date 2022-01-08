
export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error: ${res.status}`)
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {headers: this._headers}).then(res => this._checkResponse(res))
  }

  addCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(card)
    })
      .then(res => this._checkResponse(res))
      .catch(err => console.log(err))
  }

  addLike(userId) {
    return fetch(`${this._baseUrl}/cards/likes/${userId}`, {
      method: 'PUT',
      headers: this._headers
    }).then(res => this._checkResponse(res))
  }

  removeLike(userId) {
    return fetch(`${this._baseUrl}/cards/likes${userId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => this._checkResponse(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: 'b25a31c4-1482-4c51-b23e-11f165e28f8b',
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkResponse(res))
      .catch(err => console.log(err))
  }

  editProfile(profileData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(profileData)
    }).then(res => this._checkResponse(res))
  }

  editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatar)
    }).then(res => this._checkResponse(res))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {headers: this._headers}).then(res => this._checkResponse(res))
  }
}