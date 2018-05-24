$('.nav_link').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 700);
  return false;  
});

var navbar = document.querySelector('nav');
var stickys = navbar.offsetTop;

function barscroll() {
  if(window.pageYOffset > stickys) {
    navbar.classList.add('sticky');
  }else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function() {
  barscroll();
};
