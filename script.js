const loader = document.querySelector('.preloader');
const forOpenBtn = document.querySelector('#form-open'),
homeContainer = document.querySelector('.home_container'),
formContainer = document.querySelector('.form_container'),
formCloseBtn = document.querySelector('.form_close'),
loginBtn = document.querySelector('')
//preload page
window.addEventListener("load", function(){
    this.setTimeout(function(){
        loader.style.display = "none";
        window.location.href = "login.html";
    }, 5000);  
});