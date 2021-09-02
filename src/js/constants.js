export const settings = {
    formSelector: '.popup__container-form',
    inputSelector: '.popup__container-form-input',
    submitButtonSelector: '.popup__container-form-save-button',
    inactiveButtonClass: 'popup__container-form-save-button_disabled',
    inputErrorClass: 'popup__container-form-input_error',
    errorClass: 'error'
  };
  export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
const placeAdd = document.querySelector(".add-place");
export const placeAddForm = placeAdd.querySelector(".popup__container-form");
const profilePopup = document.querySelector(".profile-popup");
export const popupForm = profilePopup.querySelector(".popup__container-form");
export const templateSelector = '#card'
export const containerSelector = '.elements'
export const username = document.querySelector('.profile__info-username')
export const profession = document.querySelector('.profile__info-profession')
export const editedUsername = document.querySelector('.popup__container-form-input_text_username')
export const editedProfession = document.querySelector('.popup__container-form-input_text_profession')
export const editButton = document.querySelector(".profile__info-edit-button")


