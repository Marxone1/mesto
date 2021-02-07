const settings = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-form-input',
  submitButtonSelector: '.popup__container-form-save-button',
  inactiveButtonClass: 'popup__container-form-save-button_disabled',
  inputErrorClass: 'popup__container-form-input_error',
  errorClass: 'error'
};

const enableValidation = ({formSelector, ...rest}) => {
  const getFormList = Array.from(document.querySelectorAll(settings.formSelector));
  getFormList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  })
};
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};
const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};
const showInputError = (inputElement, errorMessage) => {
  const errorElement = inputElement.parentNode.querySelector(`.${settings.errorClass}`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};
const hideInputError = (inputElement) => {
  const errorElement = inputElement.parentNode.querySelector(`.${settings.errorClass}`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
};
const toggleButtonState = (inputList, buttonElement) =>{
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(settings.inactiveButtonClass);
} else {
  buttonElement.classList.remove(settings.inactiveButtonClass);
}
}
const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}

enableValidation(settings)

/*function enableValidation(popupForm){
  const inputs = Array.from(document.querySelectorAll(".popup__container-form"));
  const saveButton = popupForm.querySelector('.popup__container-form-save-button')
  checkButton(saveButton, inputs)
  inputs.forEach((input) => {
    input.addEventListener('input', function(evt){
      validateInput(input)
      checkButton(saveButton, inputs)
    })
  })
}
function validateInput(input){
  if (!input.validity.valid){
    const errorMessage = input.validationMessage
    showErrorMessage(popupForm, input, errorMessage)
    input.classList.add('popup__container-form-input_error')
  }else{
    hideErrorMessage(popupForm, input)
    input.classList.remove('popup__container-form-input_error')
  }
}
function checkButton(button, inputs){
  if (hasInvalidInputs(inputs)){
    button.classList.add('popup__container-form-save-button_disabled')
  }else{
    button.classList.remove('popup__container-form-save-button_disabled')
  }
}
function hasInvalidInputs(inputs){
  return inputs.some((input) => {return !input.validity.valid})
}
function showErrorMessage(popupForm, input, errorMessage){
  const errorElement = input.parentNode.querySelector('.error')
  errorElement.textContent = errorMessage
}
function hideErrorMessage(popupForm, input){
  const errorElement = input.parentNode.querySelector('.error')
  errorElement.textContent = ""
}

enableValidation(popupForm)
enableValidation(addPlace) 
*/
/*function validate(popupForm){
    const inputs = Array.from(popupForm.querySelectorAll(settings.inputSelector));
    const saveButton = popupForm.querySelector(settings.submitButtonSelector)
    checkButton(saveButton, inputs)
    inputs.forEach((input) => {
      input.addEventListener('input', function(evt){
        validateInput(input)
        checkButton(saveButton, inputs)
      })
    })
}
function validateInput(input){
    if (!input.validity.valid){
      const errorMessage = input.validationMessage
      showErrorMessage(popupForm, input, errorMessage)
      input.classList.add(settings.inputErrorClass)
    }else{
      hideErrorMessage(popupForm, input)
      input.classList.remove(settings.inputErrorClass)
    }
}
function checkButton(button, inputs){
    if (hasInvalidInputs(inputs)){
      button.classList.add(settings.inactiveButtonClass)
    }else{
      button.classList.remove(settings.inactiveButtonClass)
    }
}
function hasInvalidInputs(inputs){
    return inputs.some((input) => {return !input.validity.valid})
}
function showErrorMessage(popupForm, input, errorMessage){
    const errorElement = input.parentNode.querySelector(settings.errorClass)
    errorElement.textContent = errorMessage
}
function hideErrorMessage(popupForm, input){
    const errorElement = input.parentNode.querySelector(settings.errorClass)
    errorElement.textContent = ""
}

validate(popupForm)
validate(addPlace)
*/