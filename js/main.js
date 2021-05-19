let button = document.querySelector('.sitenav__hamurger-menu');
let siteNav = document.querySelector('.sitenav');
let siteNavBtn = document.querySelector('.sitenav__btn');
button.addEventListener('click', function() {
    if (siteNav.style.display == "none")
        siteNav.style.display = "block";
    else siteNav.style.display = "none";
    if (siteNavBtn.style.display == "none")
        siteNavBtn.style.display = "block";
    else siteNavBtn.style.display = "none";

})