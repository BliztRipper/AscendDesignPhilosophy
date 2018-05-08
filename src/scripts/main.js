//@prepros-prepend ../../node_modules/aos/dist/aos.js
//@prepros-prepend ../../node_modules/jquery/dist/jquery.min.js


AOS.init();

$('#viewmore-home').click(function () {
  $('html,body').animate({
      scrollTop: $('.card.h-screen.bg-grey-light').offset().top
    },
    'slow');
});

var acc = document.getElementsByClassName("accordion");
var i;
 
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}