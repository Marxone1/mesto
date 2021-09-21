export class Card{
  constructor({ card, handleCardClick, userData, handleCardLike, handleCardDelete }, cardSelector) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes
    this._counterLikes = card.likes.length;
    this._cardId = card._id;
    this._ownerName = card.owner.name;
    this._ownerId = card.owner._id;
    this._user = userData;
    this._card = card

    this._openPopup = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDelete = handleCardDelete;

    this._cardSelector = cardSelector;
  }
  _getTemplate(){
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement
  }
  createCard(){
    this._template = this._getTemplate();
    const imageElement = this._template.querySelector('.elements__item-image');
    this._template.querySelector('.elements__item-description-title').textContent = this._name;
    imageElement.alt = 'здесь должна быть картинка ' + this._name;
    imageElement.src = this._link;
    this._addEventListeners(imageElement);
    this._likeListener();
    this._deleteListener();
    this._setLikedStatus();
    return this._template
  }
  _likeListener(){
    this._template.querySelector('.elements__item-description-like-button').addEventListener("click", (evt) => {
      this._handleCardLike(evt)
      .then(card => {
        evt.target.classList.toggle('elements__item-description-like-button__active');
        this._setLikes(card);
      })
      .catch(err => console.error(err));
    })
  }
  _setLikes(card){
    console.log(card)
    this._likesCounter.textContent = card.likes.length;
  }
  _setLikedStatus() {
    this._likesCounter = this._template.querySelector('.elements__item-description-like-counter');
    this._likesCounter.textContent = this._counterLikes;
    const isLiked = this._likes.some(likes => likes._id === this._user);
    if (isLiked) {
      this._template.querySelector('.elements__item-description-like-button').classList.add('elements__item-description-like-button__active');
    }
  }
  _deleteListener(){
    this._deleteButton = this._template.querySelector('.elements__item-description-delete-button')
    if (!(this._ownerId === this._user)){
      this._deleteButton.classList.add('removed')
    } else{
      this._deleteButton.addEventListener("click", (evt) => {
        this._handleCardDelete()
      })
    }
  }
  delete(){
    this._template.remove()
  }
  _addEventListeners(imageElement){
    imageElement.addEventListener("click", () => {this._openPopup(this._name, this._link);});
  }

}