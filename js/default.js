let mainAd = document.getElementById('main-ad');
let mainAdClose = document.getElementById('main-ad-close');
let loginForm = document.getElementById('login-form');
let btnTicketing = document.getElementById('btn-ticketing');
let btnAlarm = document.getElementById('btn-alarm');
let btnNav = document.getElementById('btn-nav');
let navForm = document.getElementById('nav-form');
let btnNavClose = document.getElementById('btn-nav-close');
let btnLoginClose = document.getElementById('btn-login-close');
let body = document.querySelector('body');
let btnControl = document.getElementById('btn-control');
let btnMLlogin = document.getElementById('btn-m-login');
let dnbLogin = document.getElementById('dnb-login');
let mainNavLis = document.querySelectorAll('.main-nav>li');
let header = document.querySelector('header');
let mainNavLiAs = document.querySelectorAll('.main-nav>li>a');
let subNavs = document.querySelectorAll('.sub-nav');
// let hiddenData = document.getElementById('store').getAttribute('hidden-data');

// console.log(store.getAttribute('hidden-data'));

mainAdClose.onclick = function(){
  fnClose(mainAd);
}
btnTicketing.onclick = function(event){
  fnLoginOpen(event)
}
btnAlarm.onclick = function(event){
  fnLoginOpen(event);
}
btnNav.onclick=function(event){
  fnOpen(navForm);
  modalOn();
  event.preventDefault();
}
btnNavClose.onclick=function(){
  fnClose(navForm);
  modalOff();
}
btnLoginClose.onclick=function(){
  fnClose(loginForm);
  modalOff();
}
btnControl.onclick = function(){
  fnLoginOpen(loginForm); 
}
btnMLlogin.onclick = function(){
  fnOpen(loginForm);
}
dnbLogin.onclick= function(){
  fnOpen(loginForm);
}

for(let item of mainNavLis){
  item.onmouseenter = function(){        
    let hiddenData = item.getAttribute('hidden-data');
    if(hiddenData == 'true'){
      header.classList.remove('active');
    }else{
      header.classList.add('active');
    }
      
    for(let item of mainNavLis){
      item.classList.remove('active');          
    }
    this.classList.add('active');
  }
}  

header.onmouseleave = function(){
  this.classList.remove('active');
  for(let item of mainNavLiAs){
    item.classList.remove('active');
  }
  for(let item of mainNavLis){
    item.classList.remove('active');
  }
}

for(let item of mainNavLiAs){
  item.onmouseenter = function(){
    for(let item of mainNavLiAs){
      item.classList.remove('active');
    }
    this.classList.add('active');
  }
}
