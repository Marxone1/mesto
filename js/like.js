let likes = document.getElementsByClassName("elements__item-description-like");
for (let like of likes){
like.onclick = () =>{
    if (like.style.backgroundImage === 'url("../../../../images/like-active.svg")'){
        like.style.backgroundImage = "";
        like.style.backgroundRepeat = "";
    }else {
        like.style.backgroundImage = 'url("../../../../images/like-active.svg")';
        like.style.backgroundRepeat = "no-repeat";
    }
}
}