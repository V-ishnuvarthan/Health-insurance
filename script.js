function showChildMenu(X) {
    const ele = X.querySelector(".header__nav-submenu");
    ele.classList.add("showChildMenu");
}

function hideChildMenu(X) {
    const ele = X.querySelector(".header__nav-submenu");
    ele.classList.remove("showChildMenu");
}

console.log(document.querySelector('.signupBtn'));
document.querySelector('.signupBtn').onclick = function() {
    document.querySelector('.signupModal').style.display = "block";
}

document.querySelector('.close').onclick = function() {
    document.querySelector('.signupModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.querySelector('.signupModal')) {
        document.querySelector('.signupModal').style.display = "none";
    }
}