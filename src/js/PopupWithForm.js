import {Popup} from './Popup.js'

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitCallback){
        super(popupSelector)
        this._submitCallback = submitCallback
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
        this._popup.querySelector('.popup__container-form-save-button')
            .addEventListener('click', () => {
                this._submitCallback(this._getInputValues())
        })
    }
    close(){
        super.close();
        this._popup.querySelector('.popup__container-form').reset();
    }
}