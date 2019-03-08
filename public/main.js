
$(document).ready(function () {

      $('#container9').hide()

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

      $('.sliderImage').on('mouseover', () => {
        $('div .sliderImage').find('div').show();
      });

      $('.sliderImage').on('mouseleave', () => {
        $('div .sliderImage').find('div').hide()
      });

      $('.siguiente').on('click', () => {
        $('#datosReserva').hide()
        $('#datosContacto').show()
        $('.siguiente').hide()
        $('#wordcount').hide()
      });

      $('.atras').on('click', () => {
        $('#datosReserva').show()
        $('#datosContacto').hide()
        $('.siguiente').show()
      });

      $('#entrantes').on('click', () => {
        $('#container4').hide()
        $('#container3').hide()
        $('#container2').fadeIn(1000)
        $('#container5').hide()
        $('#container6').hide()
        $('#container7').hide()
        $('.slider1').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });

      $('#pizzas').on('click', () => {
        $('#container4').hide()
        $('#container3').fadeIn(1000)
        $('#container2').hide()
        $('#container5').hide()
        $('#container6').hide()
        $('#container7').hide()
        $('.slider1').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });

      $('#pastas').on('click', () => {
        $('#container4').fadeIn(1000)
        $('#container3').hide()
        $('#container2').hide()
        $('#container5').hide()
        $('#container6').hide()
        $('#container7').hide()
        $('.slider4').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });

      $('#lasañas').on('click', () => {
        $('#container4').hide()
        $('#container3').hide()
        $('#container2').hide()
        $('#container5').fadeIn(1000)
        $('#container6').hide()
        $('#container7').hide()
        $('.slider5').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });

      $('#carnes').on('click', () => {
        $('#container4').hide()
        $('#container3').hide()
        $('#container2').hide()
        $('#container5').hide()
        $('#container6').fadeIn(1000)
        $('#container7').hide()
        $('.slider6').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });

      $('#postres').on('click', () => {
        $('#container4').hide()
        $('#container3').hide()
        $('#container2').hide()
        $('#container5').hide()
        $('#container6').hide()
        $('#container7').fadeIn(1000)
        $('.slider7').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });

      $('#tintos').on('click', () => {
        $('#container9').hide()
        $('#container8').fadeIn(1000)
        $('.slider2').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });

      $('#blancos').on('click', () => {
        $('#container8').hide()
        $('#container9').fadeIn(1000)
        $('.slider8').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

         });

      });


      $('#reservar').on('click', () => {
        $('html, body').animate({
          scrollTop: 4750,
          scrollLeft: 0
      }, 1000);

      })

      $('#carta2').on('click', () => {
        $('html, body').animate({
          scrollTop: 1110,
          scrollLeft: 0
      }, 1000);

      })

      $('#vino').on('click', () => {
        $('html, body').animate({
          scrollTop: 2050,
          scrollLeft: 0
      }, 1000);

      })

      $('#restaurante').on('click', () => {
        $('html, body').animate({
          scrollTop: 3810,
          scrollLeft: 0
      }, 1000);

      })

      $('#nosotros').on('click', () => {
        $('html, body').animate({
          scrollTop: 2775,
          scrollLeft: 0
      }, 1000);

      })

      $('#contactos').on('click', () => {
        $('html, body').animate({
          scrollTop: 5750,
          scrollLeft: 0
      }, 1000);

      })

      $('.placeHolder').on('keyup', (event) => {
       $('.placeHolder').focus();
        var post = $(event.currentTarget).val();
        var remaining = 100 - post.length
       $('.characters').html(remaining);
       });


       $('.placeHolder2').on('keyup', (event) => {
        $('.placeHolder2').focus();
        var post = $(event.currentTarget).val();
        var remaining = 300 - post.length
        $('.characters').html(remaining);
       });


});
