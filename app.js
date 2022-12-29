const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list')

hamburger.addEventListener('click', function() {
   this.classList.toggle('active')
   menu.classList.toggle('nav-list-menu');
})
