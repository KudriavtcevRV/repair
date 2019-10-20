// Вызов модального окна на jQuery
$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('.close');

  button.on('click', function(){
    modal.addClass('modal_active');
  });
  close.on('click', function(){
    modal.removeClass('modal_active');
  });
});

// кнопка возвращающая на верх страницы
$(document).ready(function(){
  var backToTop = $('.btn');

  backToTop.on('click', function(){
    $('html').animate({
      scrollTop: 0
    }, 1500);
  });
});


/* 
//  Подключаем слайдер Slick 

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ('.arrows__left'),
    nextArrow: ('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
 */


//  Слайдер portfolio на Owl-carusel
$(document).ready(function(){
// Маска для телефона
$(".phone").mask("+3 8(999) 999-99-99");
  // Валидация формы
  $( "#modal-form" ).validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Внесено меньше 2 символом"),
        maxlength: jQuery.validator.format("Внесено больше 15 символов"),
      },
      phone: {
        required: "Поле телефон введён не верно"
      }
    },
    submitHandler: function(form) {
      event.preventDefault();
      $.ajax({
        url: './mail.php',
        type: 'POST',
        data: $("#modal-form").serialize(),
        success: function(data){
          alert('Спасибо за заявку, скоро мы вам перезвоним.');
          $("#modal-form").find("input").val(""); //ищем данные из инпутов и очищаем
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR + ':' + textStatus);
        }
      });
    }
  });
  $( "#offer-form" ).validate({
    errorElement: "div",
    errorClass: "error",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Внесено меньше 2 символом"),
        maxlength: jQuery.validator.format("Внесено больше 16 символов"),
      },
      phone: {
        required: "Поле телефон введён не верно"
      }
    },
    submitHandler: function(form) {
      event.preventDefault();
      $.ajax({
        url: './mail.php',
        type: 'POST',
        data: $("#offer-form").serialize(),
        success: function(data){
          alert('Спасибо за заявку, скоро мы вам перезвоним.');
          $("#offer-form").find("input").val(""); //ищем данные из инпутов и очищаем
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR + ':' + textStatus);
        }
      });
    }
  });
  $( "#brif-form" ).validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Внесено меньше 2 символом"),
        maxlength: jQuery.validator.format("Внесено больше 15 символов"),
      },
      phone: {
        required: "Поле телефон введён не верно"
      },
      email: {
        required: "Поле email введено не верно",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      event.preventDefault();
      $.ajax({
        url: './mail.php',
        type: 'POST',
        data: $("#brif-form" ).serialize(),
        success: function(data){
          alert('Спасибо за заявку, скоро мы вам перезвоним.');
          $("#brif-form" ).find("input").val(""); //ищем данные из инпутов и очищаем
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR + ':' + textStatus);
        }
      });
    }
  });

// подключаем анимацию wow.js
  new WOW().init();
  
// подключаем слайды owl-carusel
  var headerSlider = $(".owl-carousel");
    headerSlider.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      responsiveClass:true,
      responsive : {
        0 : {
          items: 1,
          margin: 0
        },
        768: {
          items: 2,
          margin: 20
        },
        1200 : {
          items: 3,
          margin: 30
        }
    }
    });

  $('#headerSliderLeft').click(function() {
    headerSlider.trigger('prev.owl.carousel');
});
  $('#headerSliderRight').click(function() {
    headerSlider.trigger('next.owl.carousel');
  });
});

$(document).ready(function(){
  // Карта появляется после того как до неё докрутили
  var brif = $('.brif');
  var brifTop = brif.offset().top;
    $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if(windowTop > brifTop) {
      /* Функция ymaps.ready() будет вызвана, когда
 загрузятся все компоненты API, а также когда будет готово DOM-дерево. */
ymaps.ready(init);
  function init() {
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
      $(window).unbind('scroll');
    }
  });
});
/* $(document).ready(function () {
  // скрипт слайдера
  let el = $('.step__image');
  console.log(el);
  $(window).scroll(function () {
    if ($(this).scrollTop() > el.offset().top - 900) {
      el.addClass('step__image-animation');
    }
  });
}); */