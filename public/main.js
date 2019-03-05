
 $(document).ready(function () {
   $('#entrantes').click(function () {
     $('.slide').slick({
         dots: true,
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: false,

      });
    });
  });
