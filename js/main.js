$(document).ready(function(){
  var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    }
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    }
  });
  $('.parallax-window').parallax({
    imageSrc: 'img/newsletter-bg.jpg',
    speed: 0.01
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function(){
    document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
  });
      var modalButton = $('[data-toggle="modal"]');
      var closeModalButton = $(".modal__close");
      modalButton.on('click', openModal);
      closeModalButton.on('click', closeModal);
      $(document).on('keydown', function(e) {
        if (e.keyCode == 27){
          var modalOverlay = $(".modal__overlay");
          var modalDialog = $(".modal__dialog");
          modalOverlay.removeClass('modal__overlay--visible');
          modalDialog.removeClass('modal__dialog--visible');
        }
      });

      function openModal (){
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass('modal__overlay--visible');
        modalDialog.addClass('modal__dialog--visible');
      }

      function closeModal (event){
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');
      }
      
});
