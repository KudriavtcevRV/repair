(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");

  ym(55735495, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true,
       trackHash:true
  });
/* Функция ymaps.ready() будет вызвана, когда
 загрузятся все компоненты API, а также когда будет готово DOM-дерево. */
/* ymaps.ready(init);
function init(){
  // Создание карты
  var map = new ymaps.Map("map", {
     // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.62,37.15],
     // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13,
    // отключили элементы управления
    controls: ['zoomControl'],
    // отключаем скрол карты [], drag - перемещение карты левой кнопкой мыши
    behaviors: ['drag']
  });
  // указываем координаты где будет находится маркер
  var placemark = new ymaps.Placemark([55.61,37.20],{
    // всплывающая подсказка при наведении на метку
    hintContent: 'Ремонт квартир',
    // всплывающее окно после нажатия на метку
    balloonContentHeader: 'г. Москва ул. Ленинга, д. 10, корпус 2, оф. 308',
    balloonContentBody: 'Режим работы: с 9:00 до 18:00',
    balloonContentFooter: 'Телефон: + 7 (495) 42-251-31'
  },
  {
    preset: 'islands#blueHomeIcon',
    iconColor: '#ffc000'
  });
  // Добавляем геообъект(маркер)
  map.geoObjects.add(placemark); 
}
 */