import '../pages/index.css'

import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';

import {Section} from './Section.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';

import { settings } from './constants.js';
import { initialCards } from './constants.js';

import { placeAddForm } from './constants.js';
import { popupForm } from './constants.js';
import { containerSelector } from './constants.js';
import { templateSelector } from './constants.js';
import { username } from './constants.js';
import { profession } from './constants.js';
import { editButton } from './constants.js';
import { editedProfession } from './constants.js';
import { editedUsername } from './constants.js';

const placeAddFormValidator = new FormValidator(settings, placeAddForm)
placeAddFormValidator.enableValidation()
const profilePopupFormValidator = new FormValidator(settings, popupForm)
profilePopupFormValidator.enableValidation()

const cardList = new Section({
  items: initialCards,
  renderer: (item) =>{
    createCard(item)
    },
  },
  containerSelector
);
cardList.renderItems();


function createCard(item){
  const newCardElement = new Card(
    {
      card: item,
        handleCardClick: (name, link) => {
          popupWithImage.open(name, link);
        },
      },
      templateSelector
    );
    const cardElement = newCardElement.createCard();
    cardList.addItem(cardElement);
}

const popupWithImage = new PopupWithImage('.image-popup')
popupWithImage.setEventListeners()


const userInfo = new UserInfo(username, profession)

const popupEditProfile = new PopupWithForm('.profile-popup',
  (data) =>{
    userInfo.setUserInfo(data)
    popupEditProfile.close()
  })
  popupEditProfile.setEventListeners()

const popupImageAdd = new PopupWithForm('.add-place',
  (data) => {
    createCard(data)
    popupImageAdd.close()
  }
)
popupImageAdd.setEventListeners()


editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  editedUsername.value = data.username;
  editedProfession.value = data.profession;
  profilePopupFormValidator.toggleButtonState();
  popupEditProfile.open();
});

const addButton = document.querySelector('.profile__add-button')
addButton.addEventListener("click", () => {
  popupImageAdd.open();
});

