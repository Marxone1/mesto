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
const addPlace = document.querySelector(".add-place");
const addPlaceForm = addPlace.querySelector(".popup__container-form");
const openAddPlaceButton = document.querySelector(".profile__add-button");
const closeAddPlaceButton = addPlace.querySelector(".popup__container-close-button");
const elements = document.querySelector('.elements');
const popup = document.querySelector(".profile-popup");
const popupForm = popup;
const openPopupButton = document.querySelector(".profile__info-edit-button");
const closePopupButton = popup.querySelector(".popup__container-close-button");
const userName = document.querySelector(".profile__info-username");
const profession = document.querySelector(".profile__info-profession");
const inputUsername = popup.querySelector(".popup__container-form-input_text_username");
const inputProfession = popup.querySelector(".popup__container-form-input_text_profession");
const imagePopup = document.querySelector(".image-popup");
const imageCloseButton = imagePopup.querySelector('.popup__container-close-button');
const popups = document.querySelector(".popup");

function addCard( elements, cardElement){
    elements.prepend(cardElement);
}
function createCard(name, link){
  const cardTemplate = card.content.cloneNode(true);
  const likeElement = cardTemplate.querySelector('.elements__item-description-like-button');
  const deleteElement = cardTemplate.querySelector('.elements__item-description-delete-button');
  const imageElement = cardTemplate.querySelector('.elements__item-image')
  const image = imagePopup.querySelector('.popup__image')
  imageElement.addEventListener("click", () => {
    imagePopup.querySelector('.popup__description').textContent = name;
    image.alt = 'здесь должна быть картинка';
    image.src = link;
    openPopup(imagePopup);
  })
  deleteElement.addEventListener("click", deleteListener);
  likeElement.addEventListener("click", likeListener);
  cardTemplate.querySelector('.elements__item-description-title').textContent = name;
  imageElement.alt = 'здесь должна быть картинка';
  imageElement.src = link;
  return cardTemplate;
}

function submitAddPlace (event){
  event.preventDefault();
  const name = addPlaceForm.querySelector('.popup__container-form-input_add-place_name').value;
  const link = addPlaceForm.querySelector('.popup__container-form-input_add-place_link').value;
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
function closePopup(popup){
  if (!(popup.classList === 'popup__container')){
  popup.classList.remove("opened");
  }  
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

popups.addEventListener("click", (evt) => {
  if (evt.target === popup){
    closePopup(popups)
  }
})

popups.addEventListener("keydown", function(evt) { 
  if (evt.keyCode === 27) {
    closePopup(popups)
  } 
})