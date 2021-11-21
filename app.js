const burgerMenu = document.getElementsByClassName('icon-burger')[0];
const navlink = document.getElementsByClassName('nav-ul')[0];
burgerMenu.addEventListener('click', ()=>{
  navlink.classList.toggle('active');
});
