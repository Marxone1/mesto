let popup = document.querySelector(".popup");
let openPopupButton = document.querySelector(".profile__info-edit-button");
let closePopupButton = popup.querySelector(".popup__container-close-button");
let popupSubmitButton = popup.querySelector(".popup__container-form-save-button");
let userName = document.querySelector(".profile__info-username");
let profession = document.querySelector(".profile__info-profession");
let inputUsername = popup.querySelector("[name = 'username']");
let inputProfession = popup.querySelector("[name = 'profession']")
function openPopup (){
    inputUsername.value = userName.textContent;
    inputProfession.value = profession.textContent;
    popup.classList.add("popup__opened");
}
function closePopup (){
    popup.classList.remove("popup__opened");
}
function submitPopup (event){
    event.preventDefault()
    userName.textContent = inputUsername.value;
    profession.textContent = inputProfession.value;
    closePopup()
}
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
popupSubmitButton.addEventListener("click", submitPopup)