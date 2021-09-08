!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.card,o=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._openPopup=o,this._cardSelector=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"createCard",value:function(){this._template=this._getTemplate();var e=this._template.querySelector(".elements__item-image");return this._template.querySelector(".elements__item-description-title").textContent=this._name,e.alt="здесь должна быть картинка "+this._name,e.src=this._link,this._addEventListeners(e),this._likeListener(),this._deleteListener(),this._template}},{key:"_likeListener",value:function(){this._template.querySelector(".elements__item-description-like-button").addEventListener("click",(function(e){e.target.classList.toggle("elements__item-description-like-button__active")}))}},{key:"_deleteListener",value:function(){var e=this;this._template.querySelector(".elements__item-description-delete-button").addEventListener("click",(function(t){e._template.remove()}))}},{key:"_addEventListeners",value:function(e){var t=this;e.addEventListener("click",(function(){t._openPopup(t._name,t._link)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._submitButton=this._form.querySelector(t.submitButtonSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}},{key:"clearForm",value:function(){var e=this;this._form.reset(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled","true")):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=e.parentNode.querySelector(".".concat(this._errorClass));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=e.parentNode.querySelector(".".concat(this._errorClass));e.classList.remove(this._inputErrorClass),t.textContent=""}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(e._popup.classList.contains("opened")&&t.target===e._popup.querySelector(".popup__container-close-button")||t.target===e._popup)&&e.close()}))}}])&&u(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popup.querySelector(".popup__description").textContent=e,this._image.src=t,this._image.alt=e,l(d(u.prototype),"open",this).call(this)}}])&&c(t.prototype,n),u}(a);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitCallback=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=Array.from(this._popup.getElementsByTagName("input")),t={};return e.forEach((function(e){t[e.getAttribute("Name")]=e.value})),t}},{key:"setEventListeners",value:function(){var e=this;v(k(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__container-form-save-button").addEventListener("click",(function(){e._submitCallback(e._getInputValues())}))}},{key:"close",value:function(){v(k(u.prototype),"close",this).call(this),this._popup.querySelector(".popup__container-form").reset()}}])&&h(t.prototype,n),u}(a);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=t,this._profileTitle=n,this._editedProfileName=document.querySelector(".popup__container-form-input_text_username"),this._editedProfileTitle=document.querySelector(".popup__container-form-input_text_profession")}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._profileName.textContent,profession:this._profileTitle.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.username,this._profileTitle.textContent=e.profession}}])&&E(t.prototype,n),e}(),w={formSelector:".popup__container-form",inputSelector:".popup__container-form-input",submitButtonSelector:".popup__container-form-save-button",inactiveButtonClass:"popup__container-form-save-button_disabled",inputErrorClass:"popup__container-form-input_error",errorClass:"error"},C=document.querySelector(".add-place").querySelector(".popup__container-form"),L=document.querySelector(".profile-popup").querySelector(".popup__container-form"),O=document.querySelector(".profile__info-username"),j=document.querySelector(".profile__info-profession"),q=document.querySelector(".popup__container-form-input_text_username"),P=document.querySelector(".popup__container-form-input_text_profession"),I=document.querySelector(".profile__info-edit-button");new r(w,C).enableValidation();var x=new r(w,L);x.enableValidation();var B=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){T(e)}},".elements");function T(e){var n=new t({card:e,handleCardClick:function(e,t){R.open(e,t)}},"#card").createCard();B.addItem(n)}B.renderItems();var R=new _(".image-popup");R.setEventListeners();var N=new S(O,j),V=new g(".profile-popup",(function(e){N.setUserInfo(e),V.close()}));V.setEventListeners();var A=new g(".add-place",(function(e){T(e),A.close()}));A.setEventListeners(),I.addEventListener("click",(function(){var e=N.getUserInfo();q.value=e.username,P.value=e.profession,x.toggleButtonState(),V.open()})),document.querySelector(".profile__add-button").addEventListener("click",(function(){A.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkUsS0FBTSw2RkFFUixDQUNFRixLQUFNLFVBQ05FLEtBQU0sa0ZBRVIsQ0FDRUYsS0FBTSxXQUNORSxLQUFNLG9GQUVSLENBQ0VGLEtBQU0scUJBQ05FLEtBQU0sNkZBRVIsQ0FDRUYsS0FBTSxTQUNORSxLQUFNLGtGQ0RWOEQsU0FBVSxTQUFDUSxHQUNUc0MsRUFBV3RDLEtEUWtCLGFDQWpDLFNBQVNzQyxFQUFXdEMsR0FDbEIsSUFTUXVDLEVBVGUsSUFBSXJILEVBQ3pCLENBQ0VFLEtBQU00RSxFQUNKM0UsZ0JBQWlCLFNBQUNHLEVBQU1FLEdBQ3RCOEcsRUFBZUMsS0FBS2pILEVBQU1FLEtETkosU0NXTzRHLGFBQ25DRCxFQUFTSyxRQUFRSCxHQWRyQkYsRUFBU00sY0FpQlQsSUFBTUgsRUFBaUIsSUFBSTlCLEVBQWUsZ0JBQzFDOEIsRUFBZUksb0JBR2YsSUFBTUMsRUFBVyxJQUFJdkIsRUFBU0MsRUFBVUMsR0FFbENzQixFQUFtQixJQUFJbEMsRUFBYyxrQkFDekMsU0FBQ0ssR0FDQzRCLEVBQVNFLFlBQVk5QixHQUNyQjZCLEVBQWlCdEMsV0FFbkJzQyxFQUFpQkYsb0JBRW5CLElBQU1JLEVBQWdCLElBQUlwQyxFQUFjLGNBQ3RDLFNBQUNLLEdBQ0NxQixFQUFXckIsR0FDWCtCLEVBQWN4QyxXQUdsQndDLEVBQWNKLG9CQUdkVixFQUFXeEYsaUJBQWlCLFNBQVMsV0FDbkMsSUFBTXVFLEVBQU80QixFQUFTSSxjQUN0QmpCLEVBQWVaLE1BQVFILEVBQUtNLFNBQzVCVSxFQUFpQmIsTUFBUUgsRUFBS08sV0FDOUJZLEVBQTBCN0Qsb0JBQzFCdUUsRUFBaUJMLFVBR0Q1RyxTQUFTQyxjQUFjLHdCQUMvQlksaUJBQWlCLFNBQVMsV0FDbENzRyxFQUFjUCxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvanMvY2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9qcy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2pzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvanMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvanMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvanMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9qcy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9qcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhcmR7XHJcbiAgY29uc3RydWN0b3IoeyBjYXJkLCBoYW5kbGVDYXJkQ2xpY2sgfSwgY2FyZFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gY2FyZC5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGNhcmQubGluaztcclxuICAgIHRoaXMuX29wZW5Qb3B1cCA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcclxuICB9XHJcbiAgX2dldFRlbXBsYXRlKCl7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJykuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50XHJcbiAgfVxyXG4gIGNyZWF0ZUNhcmQoKXtcclxuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IHRoaXMuX3RlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faXRlbS1pbWFnZScpO1xyXG4gICAgdGhpcy5fdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmVsZW1lbnRzX19pdGVtLWRlc2NyaXB0aW9uLXRpdGxlJykudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9ICfQt9C00LXRgdGMINC00L7Qu9C20L3QsCDQsdGL0YLRjCDQutCw0YDRgtC40L3QutCwICcgKyB0aGlzLl9uYW1lO1xyXG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycyhpbWFnZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5fbGlrZUxpc3RlbmVyKCk7XHJcbiAgICB0aGlzLl9kZWxldGVMaXN0ZW5lcigpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlXHJcbiAgfVxyXG4gIF9saWtlTGlzdGVuZXIoKXtcclxuICAgIHRoaXMuX3RlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faXRlbS1kZXNjcmlwdGlvbi1saWtlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZWxlbWVudHNfX2l0ZW0tZGVzY3JpcHRpb24tbGlrZS1idXR0b25fX2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gIH1cclxuICBfZGVsZXRlTGlzdGVuZXIoKXtcclxuICAgIHRoaXMuX3RlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50c19faXRlbS1kZXNjcmlwdGlvbi1kZWxldGUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgdGhpcy5fdGVtcGxhdGUucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgfVxyXG4gIF9hZGRFdmVudExpc3RlbmVycyhpbWFnZUVsZW1lbnQpe1xyXG4gICAgaW1hZ2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7dGhpcy5fb3BlblBvcHVwKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO30pO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9ye1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtKXtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtID0gZm9ybTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmlucHV0U2VsZWN0b3IpKTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgfVxyXG4gIGVuYWJsZVZhbGlkYXRpb24gKCl7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IGV2dC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIGNsZWFyRm9ybSgpe1xyXG4gICAgICB0aGlzLl9mb3JtLnJlc2V0KClcclxuICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudClcclxuICAgICAgfSlcclxuICB9XHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KVxyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgdG9nZ2xlQnV0dG9uU3RhdGUoKXtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJylcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXHJcbiAgfVxyXG59XHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpXHJcbiAgfVxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KXtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSl7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBpbnB1dEVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9lcnJvckNsYXNzfWApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KXtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGlucHV0RWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuX2Vycm9yQ2xhc3N9YCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcyA9IGl0ZW1zO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIH1cclxuICBcclxuICAgIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGNsZWFyKCl7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcbiAgICB9XHJcbiAgICByZW5kZXJJdGVtcygpIHtcclxuICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0iLCJleHBvcnQgY2xhc3MgUG9wdXAge1xyXG5cdGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKVxyXG5cclxuXHR9XHJcbiAgICBvcGVuKCl7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSlcclxuICAgIH1cclxuICAgIGNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgfVxyXG4gICAgX2hhbmRsZUVzY0Nsb3NlKGV2dCl7XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLl9wb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpKSAmJiAoZXZ0LnRhcmdldCA9PT0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250YWluZXItY2xvc2UtYnV0dG9uJykpIHx8IChldnQudGFyZ2V0ID09PSB0aGlzLl9wb3B1cCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH1cclxufSIsImltcG9ydCB7UG9wdXB9IGZyb20gJy4vUG9wdXAuanMnXHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3Ipe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgb3BlbihuYW1lLCBsaW5rKXtcclxuICAgICAgICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Rlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlLnNyYyA9IGxpbmtcclxuICAgICAgICB0aGlzLl9pbWFnZS5hbHQgPSBuYW1lXHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgICAgIH1cclxufSIsImltcG9ydCB7UG9wdXB9IGZyb20gJy4vUG9wdXAuanMnXHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwe1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwgc3VibWl0Q2FsbGJhY2spe1xyXG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5fc3VibWl0Q2FsbGJhY2sgPSBzdWJtaXRDYWxsYmFja1xyXG4gICAgfVxyXG4gICAgX2dldElucHV0VmFsdWVzKCl7XHJcbiAgICAgICAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9wb3B1cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSlcclxuICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGFbaW5wdXQuZ2V0QXR0cmlidXRlKCdOYW1lJyldID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGFpbmVyLWZvcm0tc2F2ZS1idXR0b24nKVxyXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJtaXRDYWxsYmFjayh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjbG9zZSgpe1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250YWluZXItZm9ybScpLnJlc2V0KCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgIGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBwcm9mZXNzaW9uKSB7XHJcbiAgICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gdXNlcm5hbWVcclxuICAgICAgdGhpcy5fcHJvZmlsZVRpdGxlID0gcHJvZmVzc2lvblxyXG4gICAgICB0aGlzLl9lZGl0ZWRQcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NvbnRhaW5lci1mb3JtLWlucHV0X3RleHRfdXNlcm5hbWVcIilcclxuICAgICAgdGhpcy5fZWRpdGVkUHJvZmlsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY29udGFpbmVyLWZvcm0taW5wdXRfdGV4dF9wcm9mZXNzaW9uXCIpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgICAgcHJvZmVzc2lvbjogdGhpcy5fcHJvZmlsZVRpdGxlLnRleHRDb250ZW50LFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICBcclxuICAgIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBkYXRhLnVzZXJuYW1lO1xyXG4gICAgICB0aGlzLl9wcm9maWxlVGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLnByb2Zlc3Npb25cclxuICAgIH1cclxuICB9IiwiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19jb250YWluZXItZm9ybScsXHJcbiAgICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19jb250YWluZXItZm9ybS1pbnB1dCcsXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fY29udGFpbmVyLWZvcm0tc2F2ZS1idXR0b24nLFxyXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19jb250YWluZXItZm9ybS1zYXZlLWJ1dHRvbl9kaXNhYmxlZCcsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9fY29udGFpbmVyLWZvcm0taW5wdXRfZXJyb3InLFxyXG4gICAgZXJyb3JDbGFzczogJ2Vycm9yJ1xyXG4gIH07XHJcbiAgZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ9CQ0YDRhdGL0LcnLFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2Fya2h5ei5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICfQmNCy0LDQvdC+0LLQvicsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvaXZhbm92by5qcGcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAn0JrQsNC80YfQsNGC0LrQsCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2FtY2hhdGthLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICfQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvScsXHJcbiAgICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICfQkdCw0LnQutCw0LsnLFxyXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2JhaWthbC5qcGcnXHJcbiAgICB9XHJcbiAgXTtcclxuY29uc3QgcGxhY2VBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wbGFjZVwiKTtcclxuZXhwb3J0IGNvbnN0IHBsYWNlQWRkRm9ybSA9IHBsYWNlQWRkLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NvbnRhaW5lci1mb3JtXCIpO1xyXG5jb25zdCBwcm9maWxlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGUtcG9wdXBcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEZvcm0gPSBwcm9maWxlUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY29udGFpbmVyLWZvcm1cIik7XHJcbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZVNlbGVjdG9yID0gJyNjYXJkJ1xyXG5leHBvcnQgY29uc3QgY29udGFpbmVyU2VsZWN0b3IgPSAnLmVsZW1lbnRzJ1xyXG5leHBvcnQgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9faW5mby11c2VybmFtZScpXHJcbmV4cG9ydCBjb25zdCBwcm9mZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2luZm8tcHJvZmVzc2lvbicpXHJcbmV4cG9ydCBjb25zdCBlZGl0ZWRVc2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGFpbmVyLWZvcm0taW5wdXRfdGV4dF91c2VybmFtZScpXHJcbmV4cG9ydCBjb25zdCBlZGl0ZWRQcm9mZXNzaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250YWluZXItZm9ybS1pbnB1dF90ZXh0X3Byb2Zlc3Npb24nKVxyXG5leHBvcnQgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faW5mby1lZGl0LWJ1dHRvblwiKVxyXG5cclxuXHJcbiIsImltcG9ydCAnLi4vcGFnZXMvaW5kZXguY3NzJ1xyXG5cclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQuanMnO1xyXG5pbXBvcnQge0Zvcm1WYWxpZGF0b3J9IGZyb20gJy4vRm9ybVZhbGlkYXRvci5qcyc7XHJcblxyXG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4vU2VjdGlvbi5qcyc7XHJcbmltcG9ydCB7UG9wdXBXaXRoSW1hZ2V9IGZyb20gJy4vUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQge1BvcHVwV2l0aEZvcm19IGZyb20gJy4vUG9wdXBXaXRoRm9ybS5qcyc7XHJcbmltcG9ydCB7VXNlckluZm99IGZyb20gJy4vVXNlckluZm8uanMnO1xyXG5cclxuaW1wb3J0IHsgc2V0dGluZ3MgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGluaXRpYWxDYXJkcyB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCB7IHBsYWNlQWRkRm9ybSB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuaW1wb3J0IHsgcG9wdXBGb3JtIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgeyBjb250YWluZXJTZWxlY3RvciB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuaW1wb3J0IHsgdGVtcGxhdGVTZWxlY3RvciB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuaW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IHByb2Zlc3Npb24gfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGVkaXRCdXR0b24gfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGVkaXRlZFByb2Zlc3Npb24gfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGVkaXRlZFVzZXJuYW1lIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5cclxuY29uc3QgcGxhY2VBZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIHBsYWNlQWRkRm9ybSlcclxucGxhY2VBZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKVxyXG5jb25zdCBwcm9maWxlUG9wdXBGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIHBvcHVwRm9ybSlcclxucHJvZmlsZVBvcHVwRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKClcclxuXHJcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oe1xyXG4gIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgcmVuZGVyZXI6IChpdGVtKSA9PntcclxuICAgIGNyZWF0ZUNhcmQoaXRlbSlcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXJTZWxlY3RvclxyXG4pO1xyXG5jYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoaXRlbSl7XHJcbiAgY29uc3QgbmV3Q2FyZEVsZW1lbnQgPSBuZXcgQ2FyZChcclxuICAgIHtcclxuICAgICAgY2FyZDogaXRlbSxcclxuICAgICAgICBoYW5kbGVDYXJkQ2xpY2s6IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICAgICAgICBwb3B1cFdpdGhJbWFnZS5vcGVuKG5hbWUsIGxpbmspO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbXBsYXRlU2VsZWN0b3JcclxuICAgICk7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmRFbGVtZW50LmNyZWF0ZUNhcmQoKTtcclxuICAgIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xyXG59XHJcblxyXG5jb25zdCBwb3B1cFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnLmltYWdlLXBvcHVwJylcclxucG9wdXBXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHVzZXJuYW1lLCBwcm9mZXNzaW9uKVxyXG5cclxuY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKCcucHJvZmlsZS1wb3B1cCcsXHJcbiAgKGRhdGEpID0+e1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YSlcclxuICAgIHBvcHVwRWRpdFByb2ZpbGUuY2xvc2UoKVxyXG4gIH0pXHJcbiAgcG9wdXBFZGl0UHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpXHJcblxyXG5jb25zdCBwb3B1cEltYWdlQWRkID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5hZGQtcGxhY2UnLFxyXG4gIChkYXRhKSA9PiB7XHJcbiAgICBjcmVhdGVDYXJkKGRhdGEpXHJcbiAgICBwb3B1cEltYWdlQWRkLmNsb3NlKClcclxuICB9XHJcbilcclxucG9wdXBJbWFnZUFkZC5zZXRFdmVudExpc3RlbmVycygpXHJcblxyXG5cclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIGVkaXRlZFVzZXJuYW1lLnZhbHVlID0gZGF0YS51c2VybmFtZTtcclxuICBlZGl0ZWRQcm9mZXNzaW9uLnZhbHVlID0gZGF0YS5wcm9mZXNzaW9uO1xyXG4gIHByb2ZpbGVQb3B1cEZvcm1WYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICBwb3B1cEVkaXRQcm9maWxlLm9wZW4oKTtcclxufSk7XHJcblxyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkLWJ1dHRvbicpXHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwSW1hZ2VBZGQub3BlbigpO1xyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiY2FyZCIsImhhbmRsZUNhcmRDbGljayIsInRoaXMiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfb3BlblBvcHVwIiwiX2NhcmRTZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfdGVtcGxhdGUiLCJfZ2V0VGVtcGxhdGUiLCJpbWFnZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFsdCIsInNyYyIsIl9hZGRFdmVudExpc3RlbmVycyIsIl9saWtlTGlzdGVuZXIiLCJfZGVsZXRlTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybSIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsInByZXZlbnREZWZhdWx0IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicmVzZXQiLCJmb3JFYWNoIiwiaW5wdXRFbGVtZW50IiwiX2hpZGVJbnB1dEVycm9yIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX2hhc0ludmFsaWRJbnB1dCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNvbWUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJwYXJlbnROb2RlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaW5uZXJIVE1MIiwiY2xlYXIiLCJpdGVtIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjbG9zZSIsImNvbnRhaW5zIiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJQb3B1cFdpdGhGb3JtIiwic3VibWl0Q2FsbGJhY2siLCJfc3VibWl0Q2FsbGJhY2siLCJpbnB1dExpc3QiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRhdGEiLCJpbnB1dCIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwiVXNlckluZm8iLCJ1c2VybmFtZSIsInByb2Zlc3Npb24iLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZVRpdGxlIiwiX2VkaXRlZFByb2ZpbGVOYW1lIiwiX2VkaXRlZFByb2ZpbGVUaXRsZSIsImZvcm1TZWxlY3RvciIsInBsYWNlQWRkRm9ybSIsInBvcHVwRm9ybSIsImVkaXRlZFVzZXJuYW1lIiwiZWRpdGVkUHJvZmVzc2lvbiIsImVkaXRCdXR0b24iLCJlbmFibGVWYWxpZGF0aW9uIiwicHJvZmlsZVBvcHVwRm9ybVZhbGlkYXRvciIsImNhcmRMaXN0IiwiY3JlYXRlQ2FyZCIsImNhcmRFbGVtZW50IiwicG9wdXBXaXRoSW1hZ2UiLCJvcGVuIiwiYWRkSXRlbSIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ1c2VySW5mbyIsInBvcHVwRWRpdFByb2ZpbGUiLCJzZXRVc2VySW5mbyIsInBvcHVwSW1hZ2VBZGQiLCJnZXRVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=