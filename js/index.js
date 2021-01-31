const initialCards = [
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
const addPlace = document.getElementById("addPlace");
const addPlaceForm = addPlace.querySelector(".add-place__container-form");
const openAddPlaceButton = document.querySelector(".profile__add-button");
const closeAddPlaceButton = addPlace.querySelector(".add-place__container-close-button");
const elements = document.querySelector('.elements');
const popup = document.getElementById("popup");
const popupForm = popup;
const openPopupButton = document.querySelector(".profile__info-edit-button");
const closePopupButton = popup.querySelector(".popup__container-close-button");
const userName = document.querySelector(".profile__info-username");
const profession = document.querySelector(".profile__info-profession");
const inputUsername = popup.querySelector(".popup__container-form-input_text_username");
const inputProfession = popup.querySelector(".popup__container-form-input_text_profession");
const imageCloseButton = document.querySelector('.image-popup__close-button');
const imagePopup = document.getElementById("imagePopup");

function addCard( elements, cardElement){
    elements.prepend(cardElement);
}
function createCard(name, link){
  const cardTemplate = card.content.cloneNode(true);
  const likeElement = cardTemplate.querySelector('.elements__item-description-like-button');
  const deleteElement = cardTemplate.querySelector('.elements__item-description-delete-button');
  const imageElement = cardTemplate.querySelector('.elements__item-image')
  imageElement.addEventListener("click", () => {
    imagePopup.querySelector('.image-popup__description').textContent = name;
    imagePopup.querySelector('.image-popup__image').alt = 'здесь должна быть картинка';
    imagePopup.querySelector('.image-popup__image').src = link;
    openPopup(imagePopup);
  })
  deleteElement.addEventListener("click", deleteListener);
  likeElement.addEventListener("click", likeListener);
  cardTemplate.querySelector('.elements__item-description-title').textContent = name;
  cardTemplate.querySelector('.elements__item-image').alt = 'здесь должна быть картинка';
  cardTemplate.querySelector('.elements__item-image').src = link;
  return cardTemplate;
}

function submitAddPlace (event){
  event.preventDefault();
  const name = addPlaceForm.querySelector('.add-place__container-form-input_text_name').value;
  const link = addPlaceForm.querySelector('.add-place__container-form-input_text_link').value;
  addCard(elements, createCard(name, link));
  closePopup(addPlace);
  event.target.reset();
}
function likeListener(event){
  event.target.classList.toggle('elements__item-description-like-button__active')

}
function deleteListener(event){
  event.target.closest('.card').remove();
}

function submitProfilePopup (event){
  event.preventDefault();
  userName.textContent = inputUsername.value;
  profession.textContent = inputProfession.value;
  closePopup(popup);
}

function openPopup(popup){
  popup.classList.add("opened")
}
//подскажите пожалуйста, как избавиться от появления попапов при загрузке
function closePopup(popup){
  popup.classList.remove("opened");  
}

initialCards.forEach(element => addCard(elements, createCard(element.name, element.link)))

addPlaceForm.addEventListener('submit', submitAddPlace);

popupForm.addEventListener("submit", submitProfilePopup)

openAddPlaceButton.addEventListener("click", () => openPopup(addPlace));
openPopupButton.addEventListener("click", () => {
  inputUsername.value = userName.textContent;
  inputProfession.value = profession.textContent;
  openPopup(popup);
});

imageCloseButton.addEventListener("click", () => closePopup(imagePopup))
closeAddPlaceButton.addEventListener("click", () => closePopup(addPlace));
closePopupButton.addEventListener("click", () => closePopup(popup));