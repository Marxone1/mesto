import {Popup} from './Popup.js';

export class PopupWithDeletion extends Popup {
  constructor({ popupSelector, formSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__container-form');
    this.button = this._popup.querySelector('.popup__container-form-save-button');
    this._formSubmit = formSubmit;
  }

  open(card) {
    super.open();
    this.button.textContent = 'Да';
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._renderLoading();
      this._formSubmit(this._card);
    });
  }

  _renderLoading(){
    this.button.textContent = 'Удаление...';
  }
}