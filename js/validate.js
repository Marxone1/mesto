function validate(popupForm){
    const inputs = Array.from(popupForm.querySelectorAll(".popup__container-form-input"));
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

validate(popupForm)
validate(addPlace)