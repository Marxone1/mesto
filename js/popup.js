function contentListener (){
    let inputs = form.querySelectorAll("input");
    let userName = document.getElementsByClassName("profile__info-username")[0].textContent;
    let proffesion = document.getElementsByClassName("profile__info-proffesion")[0].textContent;
    inputs[0].value = userName;
    inputs[1].value = proffesion;
}

function submitListener (event){
    event.preventDefault()
    let inputs = form.querySelectorAll("input");
    let userName = inputs[0].value;
    let proffesion = inputs[1].value;
    document.getElementsByClassName("profile__info-username")[0].textContent = userName;
    document.getElementsByClassName("profile__info-proffesion")[0].textContent = proffesion;
    popup.style.display = "none"
}

let popup = document.getElementsByClassName("popup")[0];
let closeButton = popup.querySelector("button");
closeButton.onclick = ()=>{
    popup.style.display = "none"
}
let editButton = document.getElementsByClassName("profile__info-edit-button")[0];
editButton.onclick = ()=>{
    popup.style.display = "flex"
}

document.addEventListener("DOMContentLoaded", contentListener)

let form = document.getElementsByClassName("popup__container-form")[0];
form.addEventListener("submit", submitListener)
