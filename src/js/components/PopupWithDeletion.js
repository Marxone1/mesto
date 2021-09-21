import {Popup} from './Popup.js';

export class PopupWithDeletion extends Popup {
  constructor({ popupSelector, formSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__container-form');
    this._button = this._popup.querySelector('.popup__container-form-save-button');
    this._formSubmit = formSubmit;
  }

  open(card) {
    super.open();
    this._button.textContent = 'Да';
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this.deletion();
      this._formSubmit(this._card);
    });
  }

  deletion(){
    this._button.textContent = 'Удаление...';
  }
}