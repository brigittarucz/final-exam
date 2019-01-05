function burgerMenu() {
    var navDoc = document.getElementById("navigation");
    var overlay = document.getElementById("overlay");
    navDoc.style.display = "block";
    overlay.style.display = "block";
}

function closeBurgerMenu() {
    var navDoc = document.getElementById("navigation");
    var overlay = document.getElementById("overlay");
    navDoc.style.display = "none";
    overlay.style.display = "none";
}

function redirect1() {
    window.open("portfolioWork/work1.html");
}

function redirect2() {
    window.open("portfolioWork/work2.html");
}

function redirect3() {
    window.open("portfolioWork/work3.html");
}

function redirect4() {
    window.open("http://ingeniousneuron.com/animationHalloween/");
}

function redirect5() {
    window.open("portfolioWork/work5.html");
}

function redirect6() {
    window.open("http://ingeniousneuron.com/");
}

function redirect7() {
    window.open("portfolioWork/work7.html");
}


function redirect8() {
    window.open("portfolioWork/work8.html");
}

function redirectFc() {
    window.location = "https://drive.google.com/open?id=1kh9G-nWJehKOfS5KaSNEGzgGVYZYxObZ";
}

window.addEventListener("scroll", showPortfolio);

function showPortfolio() {
    var invPortfolio = document.getElementById("invisiblePortfolio");
    invPortfolio.classList.add("slideUp");
    console.log("hey");

    if (window.pageYOffset < 60) {
        invPortfolio.classList.remove("slideUp");
    }

}


