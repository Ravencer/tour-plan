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
      $('.form').each(function(){
        $(this).validate({
          errorClass: "invalid",
          messages: {
            name: {
              required: "Please specify your name",
              minlength: "The name must be at least 2 letters"
            },
            email: {
              required: "Please fill this form with your Email",
              email: ""
            },
            phone: {
              required: "Phone is required",
            },
          },
        });
      })
      $('.modal__input--tel').mask('+7 (ZZZ) ZZZ-ZZ-ZZ',{
        translation: {
          'Z': {
            pattern: /[0-9]/, optional: true
          }
        }
      });
      $('.footer__input--tel').mask('+7 (ZZZ) ZZZ-ZZ-ZZ',{
        translation: {
          'Z': {
            pattern: /[0-9]/, optional: true
          }
        }
      });
});

      

