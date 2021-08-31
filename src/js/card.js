export class Card{
  constructor({ card, handleCardClick }, cardSelector) {
    this._name = card.name;
    this._link = card.link;
    this._openPopup = handleCardClick;
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
    return this._template
  }
  _likeListener(){
    this._template.querySelector('.elements__item-description-like-button').addEventListener("click", (evt) => {
      evt.target.classList.toggle('elements__item-description-like-button__active')
    })
  }
  _deleteListener(){
    this._template.querySelector('.elements__item-description-delete-button').addEventListener("click", (evt) => {
      this._template.remove()
    })
  }
  _addEventListeners(imageElement){
    imageElement.addEventListener("click", () => {this._openPopup(this._name, this._link);});
  }
}