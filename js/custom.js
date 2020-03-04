$('.top_to').click(function(){
    $('html,body').animate({
        scrollTop: 0
        
    },1000);
});

$navOffset=$('.navigation').offset().top;
$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navOffset){
       $('.navigation').addClass('menufixed');
       }
    else{
        $('.navigation').removeClass('menufixed');
    }
    if($scrolling > 500){
       $('.top_to').fadeIn(500);
    }
    else{
      $('.top_to').fadeOut(500);  
    }
});



$('.banner_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    dots: true,
});
//...........banner slide ends................
$(document).ready(function(){
    $('.venobox').venobox(); 
});
//...............venubox ends.....................
$('.team-slide').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    speed: 1000,
    dots: false,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
//....................team slide ends.........................
$('.text_slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    dots: true,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//...........................text slide ends.........................

$('.counter').counterUp({
    delay: 5,
    time: 2000
});
//.....................counter part ends..........................
$('.partners_slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    speed: 1000,
    dots: false,
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//*****.......................partners slide ends...........................****//