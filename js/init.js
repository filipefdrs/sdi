(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({hover: false});
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
    setInterval(function() {$('.carousel').carousel('next');}, 3000);
    $('.collapsible').collapsible();
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space 


        