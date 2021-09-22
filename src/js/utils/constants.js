export const settings = {
    formSelector: '.popup__container-form',
    inputSelector: '.popup__container-form-input',
    submitButtonSelector: '.popup__container-form-save-button',
    inactiveButtonClass: 'popup__container-form-save-button_disabled',
    inputErrorClass: 'popup__container-form-input_error',
    errorClass: 'error'
  };
export const cards = [];
export const popupSelectors = {
  imagePopup: '.image-popup',
  profilePopup: '.profile-popup',
  avatarPopup: '.avatar',
  addPlacePopup: '.add-place',
  deletePopup: '.delete-popup'
}
const placeAdd = document.querySelector(".add-place");
export const placeAddForm = placeAdd.querySelector(".popup__container-form");
const profilePopup = document.querySelector(".profile-popup");
export const popupForm = profilePopup.querySelector(".popup__container-form");
const avatarEditPopup = document.querySelector(".avatar");
export const avatarForm = avatarEditPopup.querySelector(".popup__container-form");
export const templateSelector = '#card'
export const containerSelector = '.elements'
export const nameSelector = '.profile__info-username'
export const aboutSelector = '.profile__info-profession'
export const editedUsername = document.querySelector('.popup__container-form-input_text_username')
export const editedProfession = document.querySelector('.popup__container-form-input_text_profession')
export const editButton = document.querySelector(".profile__info-edit-button")
export const avatarContainer = document.querySelector(".profile__avatar-container")
export const avatarSelector = '.profile__avatar'
export const profileData = {
  about: "",
  avatar: "",
  cohort: "cohort-27",
  name: "",
  _id: "3fe0c274-9eb1-4b1e-a5bb-2bea77a9fe15"
};
export const userId = 'fbb15bf9e92462388044ef4e'
