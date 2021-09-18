import {Popup} from './Popup.js'

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitCallback){
        super(popupSelector)
        this._submitCallback = submitCallback
        this._button = this._popup.querySelector('.popup__container-form-save-button')
    }
    _getInputValues(){
        const inputList = Array.from(this._popup.getElementsByTagName('input'))
        const data = {};
        inputList.forEach((input) => {
            data[input.getAttribute('Name')] = input.value;
         });
        return data;
    }
    setEventListeners(){
        super.setEventListeners();
        this._textContainer = this._button.textContent
        this._popup.querySelector('.popup__container-form-save-button')
            .addEventListener('click', () => {
                this._button.textContent = 'Сохранение...';
                this._submitCallback(this._getInputValues())
        })
    }
    close(){
        super.close();
        this._popup.querySelector('.popup__container-form').reset();
    }
}