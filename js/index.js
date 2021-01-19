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
const addPlaceForm = addPlace.querySelector(".add-place__container-form");
const openAddPlaceButton = document.querySelector(".profile__add-button");
const closeAddPlaceButton = addPlace.querySelector(".add-place__container-close-button");
const elements = document.querySelector('.elements');
const popup = document.querySelector(".popup");
const popupForm = popup.querySelector(".popup__container-form");
const openPopupButton = document.querySelector(".profile__info-edit-button");
const closePopupButton = popup.querySelector(".popup__container-close-button");
const userName = document.querySelector(".profile__info-username");
const profession = document.querySelector(".profile__info-profession");
const inputUsername = popup.querySelector(".popup__container-form-input_text_username");
const inputProfession = popup.querySelector(".popup__container-form-input_text_profession");
const imageCloseButton = document.querySelector('.image-popup__close-button');
const imagePopup = document.querySelector('.image-popup');

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
    imagePopup.querySelector('.image-popup__image').src = link;
    open(imagePopup);
  })
  deleteElement.addEventListener("click", deleteListener);
  likeElement.addEventListener("click", likeListener);
  cardTemplate.querySelector('.elements__item-description-title').textContent = name;
  cardTemplate.querySelector('.elements__item-image').src = link;
  return cardTemplate;
}

function submitAddPlace (event){
  event.preventDefault();
  const name = addPlaceForm.querySelector('.add-place__container-form-input_text_name').value;
  const link = addPlaceForm.querySelector('.add-place__container-form-input_text_link').value;
  addCard(elements, createCard(name, link));
  close(addPlace);
  event.target.reset();
}
function likeListener(event){
  event.target.classList.toggle('elements__item-description-like-button__active')

}
function deleteListener(event){
  event.target.closest('.card').remove();
}

function submitPopup (event){
  event.preventDefault();
  userName.textContent = inputUsername.value;
  profession.textContent = inputProfession.value;
  close(popup);
}

function open(popup){
  popup.classList.add("opened")
}
function close(popup){
  popup.classList.add("close");
  popup.classList.remove("opened");
  setTimeout(() => popup.classList.remove("close"), 500)/**извините, не нашел других способов сделать это*/       
}

initialCards.forEach(element => addCard(elements, createCard(element.name, element.link)))

addPlaceForm.addEventListener('submit', submitAddPlace);

popupForm.addEventListener("submit", submitPopup)

openAddPlaceButton.addEventListener("click", () => open(addPlace));
openPopupButton.addEventListener("click", () => {
  inputUsername.value = userName.textContent;
  inputProfession.value = profession.textContent;
  open(popup);
});

imageCloseButton.addEventListener("click", () => close(imagePopup))
closeAddPlaceButton.addEventListener("click", () => close(addPlace));
closePopupButton.addEventListener("click", () => close(popup));