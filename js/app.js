
$(document).ready(function(){


$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
});


// progress bars

var waypoint = new Waypoint({
  element: document.getElementById('skills'),
  handler: function() {

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:75%;transition:1s all;");
    p[1].setAttribute("style", "width:70%;transition:1.5s all;");
    p[2].setAttribute("style", "width:60%;transition:1.7s all;");
    p[3].setAttribute("style", "width:80%;transition:2s all;");
    p[4].setAttribute("style", "width:90%;transition:2.3s all;");
    p[5].setAttribute("style", "width:5%;transition:2.5s all;");
    p[6].setAttribute("style", "width:5%;transition:2.8s all;");


  },
   offset: '90%'
});

// adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,   // since one item ou can remove it
    nav:false,
    // dots:true,
    autoplay:true,
    autoplayTimeout:6000,
    items:1,
    // animateOut : "fadeOut",
    animateIn : "fadeInRight"

});


var filterizd = $('.filter-container').filterizr({
   animationDuration: .5,

});

// $('.img-loaded').imagesLoaded()
//   .done( function( instance ) {
//     var filterizd = $('.filter-container').filterizr({
//        animationDuration: .5,
//
//     });
//   });


  var typed = new Typed(".element", {
  strings: ["Jeffrey Galvez", "a Web Developer","an Educator"],
  smartBackspace: true,
   typeSpeed: 80,
   backSpeed: 50,
   loop: true,
  loopCount: Infinity,
  startDelay: 800
});


$('a').smoothScroll({

  speed:1000,
});

});
