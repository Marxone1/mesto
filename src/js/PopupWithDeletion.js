import {Popup} from './Popup.js';

export class PopupWithDeletion extends Popup {
  constructor({ popupSelector, formSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__container-form');
    this._button = this._popup.querySelector('.popup__container-form-save-button');
    this._formSubmit = formSubmit;
  }

  open(cardId) {
    super.open();
    this._button.textContent = 'Да';
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._button.textContent = 'Удаление...';
      this._formSubmit(this._card, this._cardId);
    });
  }
}