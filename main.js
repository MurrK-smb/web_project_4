!function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function n(t,r){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=document.querySelector(r),this._inputList=function(t){if(Array.isArray(t))return e(t)}(o=this._formElement.querySelectorAll(this._inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var r,o;return r=n,(o=[{key:"_showError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_toggleButton",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._toggleButton()}))})),this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&t(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.data,o=t.handleImageClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._selector=n,this._handleImageClick=o}var t,n;return t=e,(n=[{key:"_deleteCard",value:function(e){e.target.closest(".card").remove()}},{key:"_toggleLikeButton",value:function(e){e.target.classList.toggle("card__like-button_a")}},{key:"_setEventListeners",value:function(){var e=this;this._cardElement.querySelector(".card__like-button").addEventListener("click",this._toggleLikeButton),this._cardElement.querySelector(".card__delete").addEventListener("click",this._deleteCard),this._cardImage.addEventListener("click",(function(){return e._handleImageClick({name:e._name,link:e._link})}))}},{key:"_getCardElement",value:function(){return document.querySelector(this._selector).content.cloneNode(!0)}},{key:"createCard",value:function(){return this._cardElement=this._getCardElement(),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardElement.querySelector(".card__title").textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._setEventListeners(),this._cardElement}}])&&r(t.prototype,n),e}(),i=o,a={inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_disabled",inputErrorClass:"form__input_error",errorClass:"form__input-error"},u={addButton:document.querySelector(".add-button"),editButton:document.querySelector(".info__edit-button"),formName:document.querySelector("#form-name"),formJob:document.querySelector("#form-caption")};function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}}])&&c(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r="_escCloseFunc",o=this._handleEscClose.bind(this),r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("modal_open"),document.addEventListener("keydown",this._escCloseFunc)}},{key:"close",value:function(){var e=this;this._popup.classList.add("fade-out"),setTimeout((function(){e._popup.classList.remove("modal_open"),e._popup.classList.remove("fade-out")}),250),document.removeEventListener("keydown",this._escCloseFunc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()})),this._popup.querySelector(".modal__close-button").addEventListener("click",(function(){e.close()}))}}])&&l(t.prototype,n),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},m(e,t,n||e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function h(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageElement=t._popup.querySelector(".modal__img-content"),t._imageCaption=t._popup.querySelector(".modal__img-caption"),t}return t=a,(n=[{key:"open",value:function(e){m(_(a.prototype),"open",this).call(this),this._imageElement.src=e.link,this._imageElement.alt=e.name,this._imageCaption.textContent=e.name}}])&&d(t.prototype,n),a}(f);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},S(e,t,n||e)}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function k(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t){var n,r,o=e.handleFormSubmission;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmission=o,n._form=n._popup.querySelector(".form"),n._inputList=function(e){if(Array.isArray(e))return g(e)}(r=n._popup.querySelectorAll(".form__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"close",value:function(){this._form.reset(),S(C(a.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;S(C(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault,e._handleFormSubmission(e._getInputValues()),e.close()}))}}])&&E(t.prototype,n),a}(f);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.job}}])&&L(t.prototype,n),e}();function B(e){R.open(e)}function I(e){return new i({data:e,handleImageClick:B},"#card-template").createCard()}var q=new s({renderer:I},".cards"),P=new O({nameSelector:".info__name",jobSelector:".info__caption"}),R=new v("#img"),A=new j({handleFormSubmission:function(e){var t=I(e);q.addItem(t)}},"#add"),T=new j({handleFormSubmission:function(e){P.setUserInfo({name:e.name,job:e.job})}},"#edit"),x=new n(a,"#add-form"),V=new n(a,"#edit-form");R.setEventListeners(),A.setEventListeners(),T.setEventListeners(),x.enableValidation(),V.enableValidation(),u.addButton.addEventListener("click",(function(){A.open(),x.resetValidation()})),u.editButton.addEventListener("click",(function(){T.open(),V.resetValidation();var e=P.getUserInfo();u.formName.value=e.name,u.formJob.value=e.job}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXRFLEtBQU1ILEVBQUtHLEtBQ1gwRCxJQUFLN0QsRUFBSzZELFFBSWYsU0FHQ2EsRUFBbUIsSUFBSXRILEVBQzNCQyxFQUNBLGFBR0lzSCxFQUFvQixJQUFJdkgsRUFDNUJDLEVBQ0EsY0FNRjJHLEVBQVdZLG9CQUVYTixFQUFTTSxvQkFFVEosRUFBVUksb0JBRVZGLEVBQWlCRyxtQkFFakJGLEVBQWtCRSxtQkFHbEJ6RCxFQUFZQyxVQUFVOUIsaUJBQWlCLFNBQVMsV0FDOUMrRSxFQUFTTCxPQUNUUyxFQUFpQkkscUJBR25CMUQsRUFBWUUsV0FBVy9CLGlCQUFpQixTQUFTLFdBQy9DaUYsRUFBVVAsT0FDVlUsRUFBa0JHLGtCQUNsQixJQUFNaEIsRUFBV08sRUFBYVUsY0FDOUIzRCxFQUFZRyxTQUFTZ0MsTUFBUU8sRUFBUzNELEtBQ3RDaUIsRUFBWUksUUFBUStCLE1BQVFPLEVBQVNELE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3NcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1TZWxlY3RvcilcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBbLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKV1cbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKVxuICB9XG5cbiAgX3Nob3dFcnJvcihpbnB1dCkge1xuICAgIGNvbnN0IGVycm9yID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYClcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcylcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZVxuICB9XG5cbiAgX2hpZGVFcnJvcihpbnB1dCkge1xuICAgIGNvbnN0IGVycm9yID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYClcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcylcbiAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSAnJ1xuICB9XG5cbiAgX2NoZWNrVmFsaWRpdHkoaW5wdXQpIHtcbiAgICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93RXJyb3IoaW5wdXQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0KVxuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVCdXR0b24oKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dCkgPT4gIWlucHV0LnZhbGlkaXR5LnZhbGlkKSkge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcylcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tWYWxpZGl0eShpbnB1dClcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uKClcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSlcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKVxuICB9XG4gIFxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uKClcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlRXJyb3IoaW5wdXRFbGVtZW50KVxuICAgIH0pXG4gIH1cbn1cbiIsIlxuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgaGFuZGxlSW1hZ2VDbGljayB9LCBzZWxlY3Rvcikge1xuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWVcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBoYW5kbGVJbWFnZUNsaWNrXG4gIH1cblxuICBfZGVsZXRlQ2FyZChlKSB7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnLmNhcmQnKS5yZW1vdmUoKVxuICB9XG5cbiAgX3RvZ2dsZUxpa2VCdXR0b24oZSkge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRfX2xpa2UtYnV0dG9uX2EnKVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19saWtlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fdG9nZ2xlTGlrZUJ1dHRvbilcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZGVsZXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9kZWxldGVDYXJkKVxuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUltYWdlQ2xpY2soe25hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmt9KSlcbiAgfVxuXG4gIF9nZXRDYXJkRWxlbWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZWxlY3RvcikuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgfVxuXG4gIGNyZWF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0aGlzLl9nZXRDYXJkRWxlbWVudCgpXG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltYWdlJylcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fdGl0bGUnKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWVcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWx0ID0gdGhpcy5fbmFtZVxuICAgIHRoaXMuX2NhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKVxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQiLCJcbmNvbnN0IGNhcmRzID0gW1xuICB7bmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIiwgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIn0sXG4gIHtuYW1lOiBcIkxha2UgTG91c2llXCIsIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCJ9LFxuICB7bmFtZTogXCJCYWxkIE1vdW50YWluc1wiLCBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wifSxcbiAge25hbWU6IFwiTGF0ZW1hclwiLCBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCJ9LFxuICB7bmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIiwgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wifSxcbiAge25hbWU6IFwiTGFnbyBkaSBCcmFpc2VcIiwgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wifVxuXVxuXG5jb25zdCBjb25maWcgPSB7XG4gIGlucHV0U2VsZWN0b3I6ICcuZm9ybV9faW5wdXQnLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5mb3JtX19zdWJtaXQnLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAnZm9ybV9fc3VibWl0X2Rpc2FibGVkJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAnZm9ybV9faW5wdXRfZXJyb3InLFxuICBlcnJvckNsYXNzOiAnZm9ybV9faW5wdXQtZXJyb3InXG59XG5cbmNvbnN0IGRvbUVsZW1lbnRzID0ge1xuICBhZGRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJyksXG4gIGVkaXRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX19lZGl0LWJ1dHRvbicpLFxuICBmb3JtTmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tbmFtZScpLFxuICBmb3JtSm9iOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1jYXB0aW9uJylcbn1cblxuY29uc3QgdG9rZW4gPSAnYjI1YTMxYzQtMTQ4Mi00YzUxLWIyM2UtMTFmMTY1ZTI4ZjhiJ1xuXG5jb25zdCBncm91cElkID0gJ2dyb3VwLTExJ1xuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cC0xMS9jYXJkcydcblxuZXhwb3J0IHtjYXJkcywgY29uZmlnLCBkb21FbGVtZW50cywgdG9rZW4sIGdyb3VwSWQsIHVybH1cbiIsIlxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIHNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcixcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudClcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgcmVuZGVyZWRJdGVtID0gdGhpcy5fcmVuZGVyZXIoaXRlbSlcbiAgICAgIHRoaXMuYWRkSXRlbShyZW5kZXJlZEl0ZW0pXG4gICAgfSlcbiAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgnbW9kYWxfb3BlbicpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2VzY0Nsb3NlRnVuYylcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0JylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX29wZW4nKVxuICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKVxuICAgIH0sIDI1MClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fZXNjQ2xvc2VGdW5jKVxuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICBfZXNjQ2xvc2VGdW5jID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKVxuXG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfSlcbiAgfVxufVxuIiwiXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKVxuICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1nLWNvbnRlbnQnKVxuICAgIHRoaXMuX2ltYWdlQ2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1nLWNhcHRpb24nKVxuICB9XG5cbiAgb3BlbihkYXRhKSB7XG4gICAgc3VwZXIub3BlbigpXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGlua1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSBkYXRhLm5hbWVcbiAgICB0aGlzLl9pbWFnZUNhcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLm5hbWVcbiAgfVxufSIsIlxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgaGFuZGxlRm9ybVN1Ym1pc3Npb24gfSwgZm9ybVNlbGVjdG9yKSB7XG4gICAgc3VwZXIoZm9ybVNlbGVjdG9yKVxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXNzaW9uID0gaGFuZGxlRm9ybVN1Ym1pc3Npb25cbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLmZvcm0nKVxuICAgIHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9faW5wdXQnKV1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKVxuICAgIHN1cGVyLmNsb3NlKClcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlXG4gICAgfSlcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXNcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdFxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pc3Npb24odGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSlcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH0pXG4gIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3RvcilcbiAgICB0aGlzLl9qb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYlNlbGVjdG9yKVxuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUudGV4dENvbnRlbnQsXG4gICAgICBqb2I6IHRoaXMuX2pvYi50ZXh0Q29udGVudFxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJJbmZvKHVzZXJEYXRhKSB7XG4gICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IHVzZXJEYXRhLm5hbWVcbiAgICB0aGlzLl9qb2IudGV4dENvbnRlbnQgPSB1c2VyRGF0YS5qb2JcbiAgfVxufSIsImltcG9ydCAnLi9pbmRleC5jc3MnXG5cbi8vIGltcG9ydCBhbGwgY2xhc3Nlc1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJ1xuaW1wb3J0IHsgY2FyZHMsIGNvbmZpZywgZG9tRWxlbWVudHMsIHRva2VuLCBncm91cElkLCB1cmwgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcydcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcydcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJ1xuXG4vLyBiYWNrZW5kIHN0dWZmXG4vLyBmZXRjaCgnaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cC0xMS9jYXJkcycsIHtcbi8vICAgaGVhZGVyczoge1xuLy8gICAgIGF1dGhvcml6YXRpb246ICdiMjVhMzFjNC0xNDgyLTRjNTEtYjIzZS0xMWYxNjVlMjhmOGInXG4vLyAgIH1cbi8vIH0pXG4vLyAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuLy8gICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXG5cbmZ1bmN0aW9uIGdldENhcmREYXRhKCkge1xuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtMTEvY2FyZHMnLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogJ2IyNWEzMWM0LTE0ODItNGM1MS1iMjNlLTExZjE2NWUyOGY4YidcbiAgICB9XG4gIH0pXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBjYXJkU2VjdGlvbi5yZW5kZXJJdGVtcyhkYXRhKSlcbn1cblxuLy8gZnVuY3Rpb25zXG5mdW5jdGlvbiBoYW5kbGVJbWFnZUNsaWNrKGltYWdlRGF0YSkge1xuICBpbWFnZVBvcHVwLm9wZW4oaW1hZ2VEYXRhKVxufVxuXG5mdW5jdGlvbiBjYXJkUmVuZGVyZXIoZGF0YSkge1xuICBjb25zdCBjYXJkRWxlbWVudCA9IG5ldyBDYXJkKFxuICAgIHtcbiAgICAgIGRhdGEsIFxuICAgICAgaGFuZGxlSW1hZ2VDbGlja1xuICAgIH0sICcjY2FyZC10ZW1wbGF0ZSdcbiAgKS5jcmVhdGVDYXJkKClcbiAgcmV0dXJuIGNhcmRFbGVtZW50XG59XG5cbi8vIGNyZWF0ZSBjbGFzcyBpbnN0YW5jZXNcbmNvbnN0IGNhcmRTZWN0aW9uID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogY2FyZFJlbmRlcmVyXG4gIH0sICcuY2FyZHMnXG4pXG5cbmNvbnN0IHVzZXJJbmZvRGF0YSA9IG5ldyBVc2VySW5mbyhcbiAge1xuICAgIG5hbWVTZWxlY3RvcjogJy5pbmZvX19uYW1lJyxcbiAgICBqb2JTZWxlY3RvcjogJy5pbmZvX19jYXB0aW9uJ1xuICB9XG4pXG5cbmNvbnN0IGltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJyNpbWcnKVxuXG5jb25zdCBhZGRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICB7XG4gICAgaGFuZGxlRm9ybVN1Ym1pc3Npb246IChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBhZGRlZENhcmQgPSBjYXJkUmVuZGVyZXIoZGF0YSlcbiAgICAgIGNhcmRTZWN0aW9uLmFkZEl0ZW0oYWRkZWRDYXJkKVxuICAgIH0gXG4gIH0sICcjYWRkJ1xuKVxuXG5jb25zdCBlZGl0UG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcbiAge1xuICAgIGhhbmRsZUZvcm1TdWJtaXNzaW9uOiAoZGF0YSkgPT4ge1xuICAgICAgdXNlckluZm9EYXRhLnNldFVzZXJJbmZvKFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGpvYjogZGF0YS5qb2JcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfSwgJyNlZGl0J1xuKVxuXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIGNvbmZpZyxcbiAgJyNhZGQtZm9ybSdcbilcblxuY29uc3QgZWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihcbiAgY29uZmlnLFxuICAnI2VkaXQtZm9ybSdcbilcblxuLy8gaW5pdGlhbGl6ZSBjbGFzcyBpbnN0YW5jZXNcbi8vIGNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGdldENhcmREYXRhKCkpXG5cbmltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKVxuXG5hZGRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpXG5cbmVkaXRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpXG5cbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpXG5cbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKVxuXG4vLyBFdmVyeXRoaW5nIGVsc2VcbmRvbUVsZW1lbnRzLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWRkUG9wdXAub3BlbigpXG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKClcbn0pXG5cbmRvbUVsZW1lbnRzLmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGVkaXRQb3B1cC5vcGVuKClcbiAgZWRpdEZvcm1WYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKClcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VySW5mb0RhdGEuZ2V0VXNlckluZm8oKVxuICBkb21FbGVtZW50cy5mb3JtTmFtZS52YWx1ZSA9IHVzZXJEYXRhLm5hbWVcbiAgZG9tRWxlbWVudHMuZm9ybUpvYi52YWx1ZSA9IHVzZXJEYXRhLmpvYlxufSlcblxuIl0sIm5hbWVzIjpbIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtU2VsZWN0b3IiLCJ0aGlzIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX2lucHV0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwiaW5wdXQiLCJlcnJvciIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInJlbW92ZSIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUVycm9yIiwiX3Nob3dFcnJvciIsInNvbWUiLCJkaXNhYmxlZCIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwiX2NoZWNrVmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiaW5wdXRFbGVtZW50IiwiQ2FyZCIsInNlbGVjdG9yIiwiZGF0YSIsImhhbmRsZUltYWdlQ2xpY2siLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfc2VsZWN0b3IiLCJfaGFuZGxlSW1hZ2VDbGljayIsInRhcmdldCIsImNsb3Nlc3QiLCJ0b2dnbGUiLCJfY2FyZEVsZW1lbnQiLCJfdG9nZ2xlTGlrZUJ1dHRvbiIsIl9kZWxldGVDYXJkIiwiX2NhcmRJbWFnZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZ2V0Q2FyZEVsZW1lbnQiLCJhbHQiLCJzcmMiLCJkb21FbGVtZW50cyIsImFkZEJ1dHRvbiIsImVkaXRCdXR0b24iLCJmb3JtTmFtZSIsImZvcm1Kb2IiLCJTZWN0aW9uIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtcyIsIml0ZW0iLCJyZW5kZXJlZEl0ZW0iLCJhZGRJdGVtIiwiUG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiX3BvcHVwIiwiX2VzY0Nsb3NlRnVuYyIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5IiwiY2xvc2UiLCJjdXJyZW50VGFyZ2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJwb3B1cFNlbGVjdG9yIiwiX2ltYWdlRWxlbWVudCIsIl9pbWFnZUNhcHRpb24iLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pc3Npb24iLCJfaGFuZGxlRm9ybVN1Ym1pc3Npb24iLCJfZm9ybSIsInJlc2V0IiwiaW5wdXRWYWx1ZXMiLCJ2YWx1ZSIsIl9nZXRJbnB1dFZhbHVlcyIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwiam9iU2VsZWN0b3IiLCJfam9iIiwiam9iIiwidXNlckRhdGEiLCJpbWFnZURhdGEiLCJpbWFnZVBvcHVwIiwib3BlbiIsImNhcmRSZW5kZXJlciIsImNyZWF0ZUNhcmQiLCJjYXJkU2VjdGlvbiIsInVzZXJJbmZvRGF0YSIsImFkZFBvcHVwIiwiYWRkZWRDYXJkIiwiZWRpdFBvcHVwIiwic2V0VXNlckluZm8iLCJhZGRGb3JtVmFsaWRhdG9yIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJzZXRFdmVudExpc3RlbmVycyIsImVuYWJsZVZhbGlkYXRpb24iLCJyZXNldFZhbGlkYXRpb24iLCJnZXRVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=