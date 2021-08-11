var openBtn = document.querySelector(".open");
var popUp = document.querySelector(".modal-container");
var closeBtn = document.querySelector(".close");
var navbar = document.querySelector("nav");
var contactBtn = document.querySelector(".contact-btn");
var landingButtons = document.querySelector(".get-started");


window.addEventListener("scroll", fixNav);

function fixNav() {
    var topOfPage = window.scrollY;

    if(topOfPage >= 50) {
        navbar.classList.add("fix-nav");
    }

    else {
        navbar.classList.remove("fix-nav");
    }
}




openBtn.addEventListener("click", function(){
    popUp.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    popUp.classList.remove("active");
});

contactBtn.addEventListener("click", function(){
    popUp.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    popUp.classList.remove("active");
});


landingButtons.addEventListener("click", function(){
    popUp.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    popUp.classList.remove("active");
});





