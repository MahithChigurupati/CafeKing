$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });

  $(".myreviews").carousel({
    numVisible: 7,
    shift: 55,
    padding: 55,
  });

  $(".modal").modal();
  $(".parallax").parallax();

  $(".carousel.carousel-slider.myslider").carousel({
    fullWidth: true,
    indicators: true,
  });

      /* Navigation scroll */
      $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));

  instance.open();
}

function toggleModal1() {
  var instance = M.Modal.getInstance($("#modal4"));

  instance.open();
}