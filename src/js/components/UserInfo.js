export  class UserInfo {
    constructor(nameSelector, aboutSelector, avatarSelector) {
      this._profileName = document.querySelector(nameSelector)
      this._profileTitle = document.querySelector(aboutSelector)
      this._profileAvatar = document.querySelector(avatarSelector)

      this._editedProfileName = document.querySelector(".popup__container-form-input_text_username")
      this._editedProfileTitle = document.querySelector(".popup__container-form-input_text_profession")

    }
  
    getUserInfo() {
      const profileData = {
        name: this._profileName.textContent,
        about: this._profileTitle.textContent,
        avatar: this._avatar, 
      };
      return profileData;
    }
  
    setUserInfo(profileData) {
      if (profileData.name && profileData.about){
        this._profileName.textContent = profileData.name;
        this._profileTitle.textContent = profileData.about;
      }else{
        console.log('Ошибка загрузки профиля')
      }
    }
    setUserAvatar(profileData){
      if (profileData.avatar){
        this._profileAvatar.src = profileData.avatar;
      }else{
        console.log('Ошибка загрузки аватара')
      }
    }
    setUserId(profileData, id){
      if (profileData){
        return profileData._id = id
      }else{
        console.log('Ошибка загрузки ID gользователя')
      }
    }
  }