export class Popup {
	constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)

	}
    open(){
        this._popup.classList.add("opened")
        document.addEventListener('keydown', this._handleEscClose)
        this.setEventListeners()
    }
    close(){
        this._popup.classList.remove("opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt){
        if (evt.key === "Escape") {
            this.close();
        }
    }
	setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if ((this._popup.classList.contains('opened')) && (evt.target === this._popup.querySelector('.popup__container-close-button')) || (evt.target === this._popup)){
                this.close()
            }
        })
        }
}