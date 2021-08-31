import {Popup} from './Popup.js'

export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector)
        this._image = this._popup.querySelector('.popup__image')
    }
    
    _open(name, link){
        this._popup.querySelector('.popup__description').textContent = name;
        this._image.src = link
        this._image.alt = name
        super.open();
        }
}