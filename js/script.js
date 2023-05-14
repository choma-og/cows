// ===== burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", e => {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}

// ===== swiper hero
var swiperHero = new Swiper(".hero__swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// ===== swiper news
var swiperNews = new Swiper(".news__swiper", {
  spaceBetween: 50,
  grabCursor: true,
  centerSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

// ===== map
let center = [52.402894959960115, 83.52543784659326];
function init() {
  var myMap = new ymaps.Map('map', {
    center: center,
    zoom: 6,
  });
  let placemark = new ymaps.Placemark([51.611472689894796, 81.22235304014207],{}, {
    iconLayout: 'default#image',
    iconImageHref: 'mapinit.svg',
    iconImageSize: [40, 60],
    iconImageOffset: [-22,-56]
  });
  let placemark2 = new ymaps.Placemark([52.59243355807564, 85.23236280576704],{}, {
    iconLayout: 'default#image',
    iconImageHref: 'mapinit.svg',
    iconImageSize: [40, 60],
    iconImageOffset: [-22, -56]
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  myMap.geoObjects.add(placemark)
  myMap.geoObjects.add(placemark2)
}

ymaps.ready(init);