var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }
})

ymaps.ready(init);
function init(){
        
 var myMap = new ymaps.Map("map", {
            
  center: [7.8381095967729015,98.29892085940638],
            
            
  zoom: 17
});
var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point", 
        coordinates: [7.83810825941045,98.29888599068919] 
              }
        });

// Размещение геообъекта на карте.
myMap.geoObjects.add(myGeoObject); 
    }