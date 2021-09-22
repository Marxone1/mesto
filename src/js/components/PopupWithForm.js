import {Popup} from './Popup.js'

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitCallback){
        super(popupSelector)
        this._submitCallback = submitCallback
        this._button = this._popup.querySelector('.popup__container-form-save-button')
        this._textContainer = this._button.textContent//используется для хранения изначальной надписи, используется после сохранения
        this._form = this._popup.querySelector('.popup__container-form')
    }
    _getInputValues(){
        const inputList = Array.from(this._popup.getElementsByTagName('input'))
        const inputValues = {};
        inputList.forEach((input) => {
            inputValues[input.getAttribute('Name')] = input.value;
         });
        return inputValues;
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.querySelector('.popup__container-form-save-button')
            .addEventListener('click', () => {
                this._renderLoading();
                this._submitCallback(this._getInputValues())
        })
    }
    close(){
        super.close();
        this._form.reset();
    }
    _renderLoading(){
        this._button.textContent = 'Сохранение...';
    }
    resetSubmitButton(){
        this._button.textContent = this._textContainer
    }
}