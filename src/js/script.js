$(document).ready(function(){
    $('.carousel__inner').slick({
        /* dots: true,  точки под картинкой*/
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
 
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
            }
        ]



        /* arrows: false, выключение стрелок */ 

        /* autoplay: true,
        autoplaySpeed: 2000  автоскроллинг*/

        /* fade: true,   
        cssEase: 'linear'  */ /* проявление картинки */
      });
  });