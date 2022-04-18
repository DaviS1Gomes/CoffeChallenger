const buttonMobile = document.getElementById('btn-mobile');

function toggleMenu (){
   const nav = document.getElementById('nav-Header');
   nav.classList.toggle('active')
}

buttonMobile.addEventListener('click', toggleMenu)

