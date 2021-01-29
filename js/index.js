const btnStart = document.getElementById('mainStart');
//responsive button 'Zacznij', shows in mobile version
const btnStartHiden = document.getElementById('hidenBtnStart');
var scrollToTryDomify = document.getElementById("tryDomify");
var scrollToBenefits = document.getElementById("speed");


//handle contact btn in navbar
const contact = document.getElementById('kontakt');
//element near button 'Kontakt'
const scrollToContact = document.querySelector("#h3-proposal")
const scrollToMap = document.querySelector('.warszawa')
//button 'Korzyści'
const btnBenefits = document.querySelector('#benefits');
//button 'Obszar działania
const btnOperationScope = document.querySelector('#scope')
//button 'Kontakt' in middle section
const btnContactMiddle = document.querySelector('#contact-middle')


//scrool to start btn
function handleButtonClick() {
    scrollToTryDomify.scrollIntoView({block: "center", behavior: "smooth"});
}

//scroll to contact form
function handleContactBtn(){
    scrollToContact.scrollIntoView({block: "center", behavior: "smooth"});
}

//scroll to map function
function handleScopeBtn(){
    scrollToMap.scrollIntoView({block: "center", behavior: "smooth"})
}


function handleBenefitsBtn(){
    scrollToBenefits.scrollIntoView({block: "center", behavior: "smooth"})
}


//listener to scroll to start btn
btnStart.addEventListener('click', handleButtonClick);
btnStartHiden.addEventListener('click', handleButtonClick);
//listener for scroll to contact
contact.addEventListener('click', handleButtonClick);
btnContactMiddle.addEventListener('click', handleButtonClick)
//listener to scroll for map
btnOperationScope.addEventListener('click', handleScopeBtn);
btnBenefits.addEventListener('click', handleBenefitsBtn);

