const enableValidation = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-form-input',
  submitButtonSelector: '.popup__container-form-save-button',
  inactiveButtonClass: '.popup__container-form-save-button_disabled',
  inputErrorClass: '.popup__container-form-input_error',
  errorClass: '.error'
}; 

function validate(popupForm){
    const inputs = Array.from(popupForm.querySelectorAll(enableValidation.inputSelector));
    const saveButton = popupForm.querySelector(enableValidation.submitButtonSelector)
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
      input.classList.add(enableValidation.inputErrorClass)
    }else{
      hideErrorMessage(popupForm, input)
      input.classList.remove(enableValidation.inputErrorClass)
    }
}
function checkButton(button, inputs){
    if (hasInvalidInputs(inputs)){
      button.classList.add(enableValidation.inactiveButtonClass)
    }else{
      button.classList.remove(enableValidation.inactiveButtonClass)
    }
}
function hasInvalidInputs(inputs){
    return inputs.some((input) => {return !input.validity.valid})
}
function showErrorMessage(popupForm, input, errorMessage){
    const errorElement = input.parentNode.querySelector(enableValidation.errorClass)
    errorElement.textContent = errorMessage
}
function hideErrorMessage(popupForm, input){
    const errorElement = input.parentNode.querySelector(enableValidation.errorClass)
    errorElement.textContent = ""
}

validate(popupForm)
validate(addPlace)