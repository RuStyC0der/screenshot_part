$(document).ready(function(){
$('.slider__items').slick({
    slidesToShow: 5,
    slidesToScroll:2,
    infinite: true,
    prevArrow: ".slider__arrow_left",
    nextArrow: ".slider__arrow_right",
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
});
});

