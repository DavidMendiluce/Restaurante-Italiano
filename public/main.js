
$(document).ready(function () {

  $('.slider').slick({
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,

   });

      $('.slider2').slick({
          dots: false,
          infinite: false,
          fade: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,

       });

       $('.slider3').slick({
           dots: false,
           infinite: false,
           fade: false,
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: true,
           autoplay: false,

        });

      $('.siguiente').on('click', () => {
        $('#datosReserva').addClass('hide');
        $('#datosContacto').removeClass('hide');
        $('.siguiente').addClass('hide')
      })

   });
