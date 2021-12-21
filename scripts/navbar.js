
const btn = document.querySelector('.nav-btn');

btn.addEventListener('click', function(e) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.nav-btn');
  
  
    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');
    e.preventDefualt();
  
})


// var rect = $('#moveit')[0].getBoundingClientRect();
// var mouse = {x: 0, y: 0, moved: false};

// $("#moveit").mousemove(function(e) {
//   mouse.moved = true;
//   mouse.x = e.clientX - rect.left;
//   mouse.y = e.clientY - rect.top;
// });
 
// // Ticker event will be called on every frame
// TweenLite.ticker.addEventListener('tick', function(){
//   if (mouse.moved){    
//     parallaxIt(".slide", -100);
//     parallaxIt("img", -30);
//   }
//   mouse.moved = false;
// });

// function parallaxIt(target, movement) {
//   TweenMax.to(target, 0.5, {
//     x: (mouse.x - rect.width / 2) / rect.width * movement,
//     y: (mouse.y - rect.height / 2) / rect.height * movement
//   });
// }

// $(window).on('resize scroll', function(){
//   rect = $('#container')[0].getBoundingClientRect();
// })

// contact page

const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});