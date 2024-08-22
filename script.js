function showChildMenu(X) {
    const ele = X.querySelector(".header__nav-submenu");
    ele.classList.add("showChildMenu");
}

function hideChildMenu(X) {
    const ele = X.querySelector(".header__nav-submenu");
    ele.classList.remove("showChildMenu");
}

document.addEventListener("DOMContentLoaded", function (event) {
    var ele = document.querySelectorAll(
      ".header__nav-container-bottomMegamenu__link"
    );
    ele.forEach(function (item, index) {
      item.addEventListener("click", function (e) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
        } else {
          var elems = document.querySelector(".active");
          if (elems !== null) {
            elems.classList.remove("active");
          }
          this.classList.add("active");
        }
      });
    });

    var hamButton = document.querySelector(".hamburger-menu-icon");

    hamButton.addEventListener("click", function () {
      var ele = document.querySelector(".ham");
      if (ele.classList.contains("hamburger__icon--open")) {
        ele.classList.remove("hamburger__icon--open");
        document.querySelector(
          ".header__nav-container-bottom"
        ).style.display = "none";
      } else {
        ele.classList.add("hamburger__icon--open");
        document.querySelector(
          ".header__nav-container-bottom"
        ).style.display = "block";
      }
    });
  });

// Get the modal
var modal = document.querySelector('.modal');
var btn = document.querySelector('.signupBtn');
var span = document.querySelector('.modal__close');
btn.onclick = function() {
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

var signupModal = document.querySelector('.modal--signup');
var regBtn = document.querySelector('.modal__register-link');
var regClose = document.querySelector('.form__close');
var loginRedirect = document.querySelector('.form__login-link');
regBtn.onclick = function() {
    modal.style.display = 'none';
    signupModal.style.display = 'flex';
}
regClose.onclick = function() {
    signupModal.style.display = 'none';
}
loginRedirect.onclick = function() {
    signupModal.style.display = 'none';
    modal.style.display = 'block';
}
window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
}

var forgotPassModal = document.querySelector('.modal__forgotPassword');
var forgotBtn = document.querySelector('.modal__input-forgotPassword');
var forgotModalClose = document.querySelector('.forgot__modal--close');
var loginPage = document.querySelector('.forgot__login-link');
forgotBtn.onclick = function() {
    modal.style.display = 'none';
    forgotPassModal.style.display = 'block';
}
forgotModalClose.onclick = function() {
    forgotPassModal.style.display = 'none';
}
loginPage.onclick = function() {
    modal.style.display = 'block';
    forgotPassModal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == forgotPassModal) {
        forgotPassModal.style.display = 'none';
    }
}