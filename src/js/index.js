import '../pages/index.css'

import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';

import {Section} from './Section.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';
import {Api} from './Api.js';
import { PopupWithDeletion } from './PopupWithDeletion';

import { settings } from './constants.js';
import { cards } from './constants.js';

import { placeAddForm } from './constants.js';
import { popupForm } from './constants.js';
import { containerSelector } from './constants.js';
import { templateSelector } from './constants.js';
import { name } from './constants.js';
import { about } from './constants.js';
import { editButton } from './constants.js';
import { editedProfession } from './constants.js';
import { editedUsername } from './constants.js';
import { avatarContainer } from './constants.js';
import { avatar } from './constants.js';
import { profileData } from './constants.js';
import { avatarForm } from './constants.js';

function createCard(item){
  const newCardElement = new Card(
    {
      card: item,
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      },
      userData: userInfo.getUserInfo(),
      handleCardLike: (status)=>{
        return status ? api.setLike(item._id) : api.deleteLike(item._id);
      },
      handleCardDelete: () => {
        popupDelete.open(item._id)
      }
      },
      templateSelector
    );
    const cardElement = newCardElement.createCard();
    cardList.addItem(cardElement);
}

fetch('https://mesto.nomoreparties.co/v1/cohort-27/users/me',
{
  headers: {
    authorization:"3fe0c274-9eb1-4b1e-a5bb-2bea77a9fe15",
  }
})
  .then((res) => res.json())
  .then((res) => {
    profileData = res;
    userInfo.setUserInfo(profileData);
    userInfo.setUserAvatar(profileData);
  });
fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards',
{
  headers: {
    authorization:"3fe0c274-9eb1-4b1e-a5bb-2bea77a9fe15",
  }
})
  .then((res) => res.json())
  .then((res) => {
    cards = res.reverse();
    cards.forEach((card) => {createCard(card)})
  });

const placeAddFormValidator = new FormValidator(settings, placeAddForm)
placeAddFormValidator.enableValidation()
const profilePopupFormValidator = new FormValidator(settings, popupForm)
profilePopupFormValidator.enableValidation()
const avatarPopupFormValidator = new FormValidator(settings, avatarForm)
avatarPopupFormValidator.enableValidation()


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-27/',
  authorization: '3fe0c274-9eb1-4b1e-a5bb-2bea77a9fe15',
  contentTip: 'application/json',
})
const userInfo = new UserInfo(name, about, avatar, profileData)

const cardList = new Section({
  items: cards,
  renderer: (item) =>{
    createCard(item)
    },
  },
  containerSelector
);
cardList.renderItems();

const popupWithImage = new PopupWithImage('.image-popup')
popupWithImage.setEventListeners()

const popupEditProfile = new PopupWithForm('.profile-popup',
  (data) =>{
    api.editProfileInfo(data)
      .then(()=> {
        userInfo.setUserInfo(data)
        popupEditProfile.close()
      })
  })
popupEditProfile.setEventListeners()

const popupEditAvatar = new PopupWithForm('.avatar',
  (data) =>{
    api.editProfileAvatar(data)
      .then(()=> {
        userInfo.setUserAvatar(data)
        popupEditAvatar._button.textContent = popupEditAvatar._textContaine
        popupEditAvatar.close()
        fetch('https://mesto.nomoreparties.co/v1/cohort-27/users/me',
        {
          headers: {
            authorization:"3fe0c274-9eb1-4b1e-a5bb-2bea77a9fe15",
          }
        })
          .then((res) => res.json())
          .then((res) => {
            profileData = res;
            userInfo.setUserInfo(profileData);
          });
      })
  }
)
popupEditAvatar.setEventListeners()

const popupImageAdd = new PopupWithForm('.add-place',
  (data) => {
    data.likes = []
    data.likes.length = 0;
    data._id = profileData._id;
    data.owner = {
      name: "",
      _id: ""
    }
    data.owner.name = profileData.name
    data.owner._id = profileData._id
    createCard(data)
    api.addCard(data)
      .then(() => popupImageAdd._button.textContent = popupImageAdd._textContainer)
    popupImageAdd.close()
  }
)
popupImageAdd.setEventListeners()

const popupDelete = new PopupWithDeletion({
  popupSelector: '.delete-popup',
  formSubmit: (card, cardId) =>{
    api.deleteCard(cardId)
      .then(() => {
        location.reload();
        popupDelete._button.textContent = popupDelete._textContainer
        card.remove()
        popupDelete.close();
    });
  }
})
popupDelete.setEventListeners()

editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  editedUsername.value = data.name;
  editedProfession.value = data.about;
  profilePopupFormValidator.toggleButtonState();
  popupEditProfile.open();
});

const addButton = document.querySelector('.profile__add-button')
  addButton.addEventListener("click", () => {
  popupImageAdd.open();
});

avatarContainer.addEventListener("click", () =>{
  profilePopupFormValidator.toggleButtonState()
  popupEditAvatar.open()
})