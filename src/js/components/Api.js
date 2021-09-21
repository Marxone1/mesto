export class Api {
  constructor(settings) {
    this._url = settings.url;
    this._authorization = settings.authorization;
    this._contentTip = settings.contentTip;
  }
  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getCards(cardList) {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip,
      }
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.some(card => card._id) && (this._id)){
        cardList.renderItems(res.reverse())
      }else{
        console.log("Ошибка: проблема с принадлежностью карточек")
      }
      this._getResponseData
    })
  }

  getProfile(profileData, userInfo) {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip,
      }
    })
     .then((res) => res.json())
     .then((res) => {
        this._id = res._id;
        profileData._id = this._id
        userInfo.setUserInfo(res);
        userInfo.setUserAvatar(res);
        this._getResponseData
    })
  }
  editProfileInfo(profileData) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip
      },
      body: JSON.stringify({
        name: profileData.name,
        about: profileData.about
      })
    })
    .then(this._getResponseData);
  }
  editProfileAvatar(profileData) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip
      },
      body: JSON.stringify({
        avatar: profileData.avatar
      })
    })
    .then(this._getResponseData);
  }
  addCard(cardInfo) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip
      },
      body: JSON.stringify({
        link: cardInfo.link,
        name: cardInfo.name
      })
    })
    .then(this._getResponseData);
  }
  deleteCard(card) {
    return fetch(`${this._url}cards/${card._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip,
      }
    })
    .then(this._getResponseData);
  }
  setLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip,
      }
    })
    .then(this._getResponseData);
  }
  deleteLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
        'Content-Type': this._contentTip,
      }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}