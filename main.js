let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navegation = document.querySelector('.navegation');
let main = document.querySelector('.main');
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navegation.classList.toggle('active');
    main.classList.toggle('active');
}

// theme swutch toggle
themeSwitch.onclick = function(){
    body.classList.toggle('dark');
}

//
function toggleMenu(){
    let navegation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    navegation.classList.remove('active');
    main.classList.remove('active');
}