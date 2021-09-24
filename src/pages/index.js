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
  popupSelectors,
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
      userData: profileData,
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
        popupDelete.button.addEventListener('click', () => {newCardElement.delete()})
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

const cardList = new Section({
  items: cards,
  renderer: (item) =>{
    createNewCard(item)
    },
  },
  containerSelector
);

const cardsGetting = api.getCards()
const profileGetting = api.getProfile()

Promise.all([cardsGetting, profileGetting])
.then(([cards, profile]) => {
  userInfo.setUserInfo(profile);
  userInfo.setUserAvatar(profile);
  userInfo.setUserId(profileData, profile)
  userInfo.getUserInfo(profileData)
  cards.reverse().forEach(item => {
    createNewCard(item)
  });
})
.catch(err => console.log(err));


const popupWithImage = new PopupWithImage(popupSelectors.imagePopup)
popupWithImage.setEventListeners()

const popupEditProfile = new PopupWithForm(popupSelectors.profilePopup,
  (data) =>{
    api.editProfileInfo(data)
      .then(()=> {
        userInfo.setUserInfo(data)
        popupEditProfile.resetSubmitButton()
        popupEditProfile.close()
      })
      .catch(err => console.error(err))
  })
popupEditProfile.setEventListeners()

const popupEditAvatar = new PopupWithForm(popupSelectors.avatarPopup,
  (data) =>{
    api.editProfileAvatar(data)
      .then(()=> {
        userInfo.setUserAvatar(data)
        popupEditAvatar.close()
        avatarPopupFormValidator.toggleButtonState()
        popupEditAvatar.resetSubmitButton()
      })
      .catch(err => console.error(err))
  }
)
popupEditAvatar.setEventListeners()

const popupImageAdd = new PopupWithForm(popupSelectors.addPlacePopup,
  (data) => {
    data.likes = []
    data.likes.length = 0;
    data.likes._id = userInfo.getUserId();
    data.owner = {
      name: "",
      _id: ""
    }
    data.owner.name = profileData.name
    data.owner._id = userInfo.getUserId()
    api.addCard(data)
      .then((res) => {
        data._id = res._id
        createNewCard(data)
        popupImageAdd.resetSubmitButton()
        popupImageAdd.close()
      })
      .catch(err => console.error(err))    
  }
)
popupImageAdd.setEventListeners()

const popupDelete = new PopupWithDeletion({
  popupSelector: popupSelectors.deletePopup,
  formSubmit: (card) =>{
    api.deleteCard(card)
      .then(() => {
        popupDelete.close();
    })
      .catch(err => console.error(err))
  }
})
popupDelete.setEventListeners()

editButton.addEventListener("click", () => {
  profilePopupFormValidator.clearForm()
  const data = userInfo.getUserInfo(profileData);
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