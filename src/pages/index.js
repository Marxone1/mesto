import '../pages/index.css'

import {Card} from '../js/components/card.js';
import {FormValidator} from '../js/components/FormValidator.js';

import {Section} from '../js/components/Section.js';
import {PopupWithImage} from '../js/components/PopupWithImage.js';
import {PopupWithForm} from '../js/components/PopupWithForm.js';
import {UserInfo} from '../js/components/UserInfo.js';
import {Api} from '../js/components/Api.js';
import { PopupWithDeletion } from '../js/components/PopupWithDeletion';

import { 
  settings,
  cards,
  placeAddForm,
  popupForm,
  containerSelector,
  templateSelector,
  nameSelector,
  aboutSelector,
  editButton,
  editedProfession,
  editedUsername,
  avatarContainer,
  avatarSelector,
  profileData,
  avatarForm,
  userId
} from '../js/utils/constants.js';

function createNewCard(item){
  addNewCard(createCard(item))
}

function createCard(item){
  const newCardElement = new Card(
    {
      card: item,
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      },
      userData: api._id,
      handleCardLike: (evt)=>{
        if (!evt.target.classList.contains('elements__item-description-like-button__active')){
          return api.setLike(item._id)
           .catch(err => console.error(err))
          
        }else{
          return api.deleteLike(item._id)
           .catch(err => console.error(err))
        }
      },
      handleCardDelete: () => {
        popupDelete.open(item);
        popupDelete._button.addEventListener('click', () => {newCardElement.delete()})
      }
      },
      templateSelector
    );
    return newCardElement
}
function addNewCard(newCardElement){
  const cardElement = newCardElement.createCard();
  cardList.addItem(cardElement);
}


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

const userInfo = new UserInfo(nameSelector, aboutSelector, avatarSelector)
api.getProfile(profileData, userInfo)
  .catch(err => console.error(err))

const cardList = new Section({
  items: cards,
  renderer: (item) =>{
    createNewCard(item)
    },
  },
  containerSelector
);
api.getCards(cardList)
  .catch(err => console.error(err))

const popupWithImage = new PopupWithImage('.image-popup')
popupWithImage.setEventListeners()

const popupEditProfile = new PopupWithForm('.profile-popup',
  (data) =>{
    api.editProfileInfo(data)
      .catch(err => console.error(err))
      .then(()=> {
        userInfo.setUserInfo(data)
        popupEditProfile._button.textContent = popupEditProfile._textContainer
        popupEditProfile.close()
      })
  })
popupEditProfile.setEventListeners()

const popupEditAvatar = new PopupWithForm('.avatar',
  (data) =>{
    api.editProfileAvatar(data)
      .catch(err => console.error(err))
      .then(()=> {
        userInfo.setUserAvatar(data)
        popupEditAvatar.close()
        popupEditAvatar._button.classList.add('popup__container-form-save-button_disabled')
        popupEditAvatar._button.textContent = popupEditAvatar._textContainer
      })
  }
)
popupEditAvatar.setEventListeners()

const popupImageAdd = new PopupWithForm('.add-place',
  (data) => {
    data.likes = []
    data.likes.length = 0;
    data.likes._id = userId;
    data.owner = {
      name: "",
      _id: ""
    }
    data.owner.name = profileData.name
    data.owner._id = profileData._id
    api.addCard(data)
      .catch(err => console.error(err))
      .then((res) => {
        console.log(res)
        data._id = res._id
        createNewCard(data)
        popupImageAdd._button.textContent = popupImageAdd._textContainer
        popupImageAdd.close()
      })
    
  }
)
popupImageAdd.setEventListeners()

const popupDelete = new PopupWithDeletion({
  popupSelector: '.delete-popup',
  formSubmit: (card) =>{
    api.deleteCard(card)
      .catch(err => console.error(err))
      .then(() => {
        popupDelete._button.textContent = popupDelete._textContainer
        popupDelete.close();
    });
  }
})
popupDelete.setEventListeners()

editButton.addEventListener("click", () => {
  profilePopupFormValidator.clearForm()
  const data = userInfo.getUserInfo();
  editedUsername.value = data.name;
  editedProfession.value = data.about;
  profilePopupFormValidator.toggleButtonState();
  popupEditProfile.open();
});

const addButton = document.querySelector('.profile__add-button')
  addButton.addEventListener("click", () => {
    placeAddFormValidator.clearForm()
    placeAddFormValidator.toggleButtonState()
  popupImageAdd.open();
});

avatarContainer.addEventListener("click", () =>{
  avatarPopupFormValidator.clearForm()
  avatarPopupFormValidator.toggleButtonState()
  popupEditAvatar.open()
})