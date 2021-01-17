let initialCards = [
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
let addPlace = document.querySelector(".add-place");
let addPlaceForm = addPlace.querySelector(".add-place__container-form");
let openAddPlaceButton = document.querySelector(".profile__add-button");
let closeAddPlaceButton = addPlace.querySelector(".add-place__container-close-button");
let elements = document.querySelector('.elements');


function addCard(name, link){
    let cardTemplate = card.content.cloneNode(true);
    let likeElement = cardTemplate.querySelector('.elements__item-description-like');
    let deleteElement = cardTemplate.querySelector('.elements__item-description-delete-button');
    let imageElement = cardTemplate.querySelector('.elements__item-image')
    let imageCloseButton = cardTemplate.querySelector('.image-popup__close-button')
    imageElement.addEventListener("click", openImage)
    imageCloseButton.addEventListener("click", closeImage)
    deleteElement.addEventListener("click", deleteListener);
    likeElement.addEventListener("click", likeListener);
    cardTemplate.querySelector('.elements__item-description-title').textContent = name;
    cardTemplate.querySelector('.image-popup__description').textContent = name;
    cardTemplate.querySelector('.elements__item-image').src = link;
    cardTemplate.querySelector('.image-popup__image').src = link;
    elements.append(cardTemplate);
}
function openAddPlace (){
    addPlace.classList.add("add-place__opened");
}
function closeAddPlace (){
    addPlace.classList.add("close")
  setTimeout(() => {
    addPlace.classList.remove("add-place__opened")
    addPlace.classList.remove("close")
  }, 428)
}
function submitAddPlace (event){
  event.preventDefault();
  let name = addPlaceForm.querySelector('.add-place__container-form-input_text_name').value;
  let link = addPlaceForm.querySelector('.add-place__container-form-input_text_link').value;
  addCard(name, link);
  closeAddPlace();
}
function likeListener(event){
  let like = event.target;
  if (like.style.backgroundImage === 'url("../../../../images/like-active.svg")'){
    like.style.backgroundImage = "";
    like.style.backgroundRepeat = "";
}else {
    like.style.backgroundImage = 'url("../../../../images/like-active.svg")';
    like.style.backgroundRepeat = "no-repeat";
}
}
function deleteListener(event){
  let deleteElement = event.target.parentNode.parentNode.parentNode;
  elements.removeChild(deleteElement);
}
function openImage(event){
  event.target.parentNode.parentNode.querySelector('.image-popup').classList.add("image-popup__opened")
}
function closeImage(event){
  event.target.parentNode.parentNode.classList.add("close")
  setTimeout(() => {
    event.target.parentNode.parentNode.classList.remove("image-popup__opened")
    event.target.parentNode.parentNode.classList.remove("close")
  }, 428)
}

initialCards.forEach(element => addCard(element.name, element.link))
openAddPlaceButton.addEventListener("click", openAddPlace);
addPlaceForm.addEventListener('submit', submitAddPlace);
closeAddPlaceButton.addEventListener("click", closeAddPlace);