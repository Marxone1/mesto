export class FormValidator{
  constructor(settings, form){
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(settings.inputSelector));
    this._submitButton = this._form.querySelector(settings.submitButtonSelector);
  }
  enableValidation (){
    this._form.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }
  clearForm(){
      this._form.reset()
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      })
  }
  _setEventListeners(){
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this.toggleButtonState();
      });
    });
  }
  toggleButtonState(){
    if (this._hasInvalidInput(this._inputList)) {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', 'true')
  } else {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled')
  }
}
  _hasInvalidInput(){
    return this._inputList.some((inputElement) => !inputElement.validity.valid)
  }
  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _showInputError(inputElement, errorMessage){
    const errorElement = inputElement.parentNode.querySelector(`.${this._errorClass}`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError(inputElement){
    const errorElement = inputElement.parentNode.querySelector(`.${this._errorClass}`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }
}