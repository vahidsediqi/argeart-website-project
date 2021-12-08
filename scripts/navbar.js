
const btn = document.querySelector('.nav-btn');

btn.addEventListener('click', function(e) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.nav-btn');
  
  
    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');
    e.preventDefualt();
  
})

