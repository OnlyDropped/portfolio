$('.slider-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/next.png" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prev.png" alt=""></button>',
    responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 376,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.header-top__btn').click(function(){
  $(this).toggleClass('open');
  $('.header-nav').toggleClass('active');
});