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
  // Функция ymaps.ready() будет вызвана, когда
      // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
      ymaps.ready(init);
      function init(){
          // Создание карты.
          var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              center: [7.8381095967729015,98.29892085940638],
              
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 17
          });
          var myGeoObject = new ymaps.GeoObject({
      geometry: {
          type: "Point", // тип геометрии - точка
          coordinates: [7.83810825941045,98.29888599068919] // координаты точки
                }
          });
  
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject); 
      }
      var modalButton = $('[data-toggle="modal"]');
      var closeModalButton = $(".modal__close");
      modalButton.on('click', openModal);
      closeModalButton.on('click', closeModal);

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
