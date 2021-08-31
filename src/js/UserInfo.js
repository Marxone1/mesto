export  class UserInfo {
    constructor(username, profession) {
      this._username = username;
      this._profession = profession;
      this._profileName = document.querySelector(".profile__info-username-section");
      this._profileTitle = document.querySelector(".profile__info-profession");
    }
  
    getUserInfo() {
      this._username = this._profileName.textContent;
      this._profession = this._profileTitle.textContent;
      const data = {
        username: this._username,
        profession: this._profession,
      };
      return data;
    }
  
    setUserInfo(username, profession) {
      this._profileName.textContent = username;
      this._profileTitle.textContent = profession;
    }
  }