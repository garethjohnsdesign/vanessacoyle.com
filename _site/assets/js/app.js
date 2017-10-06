$(document).foundation();

$('body').removeClass('fade-out');

// 1. Loading
// --------------------

$(function() {
if (sessionStorage.getItem('set') === 'set') {
  $('.loader').hide();
} else {
  $('.loader').show();
  setTimeout(function(){
        $('.loader').addClass('loaded');
    }, 1500);  
  sessionStorage.setItem('set', 'set');
}
});


// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   offset: 120
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});

// 3. Light Gallery
// --------------------

$('.lightgallery').lightGallery({
  selector: ".projects"
}); 
