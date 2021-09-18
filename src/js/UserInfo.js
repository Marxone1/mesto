export  class UserInfo {
    constructor(name, about, avatar, profileData) {
      this._profileName = name
      this._profileTitle = about
      this._profileAvatar = avatar

      this._about = profileData.about;
      this._avatar = profileData.avatar;
      this._cohort = profileData.cohort;
      this._name = profileData.name;
      this._id = profileData._id;

      this._editedProfileName = document.querySelector(".popup__container-form-input_text_username")
      this._editedProfileTitle = document.querySelector(".popup__container-form-input_text_profession")

    }
  
    getUserInfo() {
      const profileData = {
        name: this._profileName.textContent,
        about: this._profileTitle.textContent,
        cohort: this._cohort,
        avatar: this._avatar, 
        _id: this._id
      };
      return profileData;
    }
  
    setUserInfo(profileData) {
      this._profileName.textContent = profileData.name;
      this._profileTitle.textContent = profileData.about;
      this._about = profileData.about;
      this._cohort = profileData.cohort;
      this._name = profileData.name;
      this._id = profileData._id;
    }
    setUserAvatar(profileData){
      this._avatar = profileData.avatar
      this._profileAvatar.src = profileData.avatar;
    }
  }