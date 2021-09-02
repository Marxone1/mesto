export  class UserInfo {
    constructor(username, profession) {
      this._profileName = username
      this._profileTitle = profession
      this._editedProfileName = document.querySelector(".popup__container-form-input_text_username")
      this._editedProfileTitle = document.querySelector(".popup__container-form-input_text_profession")
    }
  
    getUserInfo() {
      const data = {
        username: this._profileName.textContent,
        profession: this._profileTitle.textContent,
      };
      return data;
    }
  
    setUserInfo(data) {
      this._profileName.textContent = data.username;
      this._profileTitle.textContent = data.profession
    }
  }