let button = document.querySelector('.sitenav__hamurger-menu');
let siteNav = document.querySelector('.sitenav');
let siteNavBtn = document.querySelector('.sitenav__btn');
button.addEventListener('click', function () {
    if (siteNav.style.display == "none")
        siteNav.style.display = "block";
    else siteNav.style.display = "none";
    if (siteNavBtn.style.display == "none")
        siteNavBtn.style.display = "block";
    else siteNavBtn.style.display = "none";

})


// QUESTIONS 
let questions = document.querySelectorAll('.faqs__how-work-questions');
questions.forEach(function (item) {
    let questionTabs = item.querySelectorAll('button');
    let questionText = item.querySelectorAll('p');
    let counter = 0;
    for (let i = 0; i < 3; i++) {
        questionText.forEach(function (index) {
            index.classList.remove('faqs__text-active');
        })
        questionTabs[i].addEventListener('click', function () {
            questionText[i].classList.toggle('faqs__text-active');
            this.classList.toggle('faqs__btn-active');
        })
    }
})