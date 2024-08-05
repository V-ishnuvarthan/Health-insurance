function showChildMenu(X) {
    const ele = X.querySelector(".header__nav-submenu");
    ele.classList.add("showChildMenu");
}

function hideChildMenu(X) {
    const ele = X.querySelector(".header__nav-submenu");
    ele.classList.remove("showChildMenu");
}

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
    if (event.target == modal) {
        signupModal.style.display = 'none';
    }
}