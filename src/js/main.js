// Вызов модального окна с помощью JavaScript

/* var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('.close');

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});
close.addEventListener('click', function(){
  // при нажатии на крестик, модальное окно закрывается
  modal.classList.remove('modal_active');
});
/* button.addEventListener('click', function(){
// при нажатии на кнопку появляется модальное окно
  modal.classList.add('modal_active');
// модальное окно закрывается через 5сек
  window.setTimeout(function(){
    modal.classList.remove('modal_active');
  }, 5000);
});
 */

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
  let backToTop = $('.btn');

  backToTop.on('click', function(){
    $('html').animate({
      scrollTop: 0
    }, 1500);
  });
});

// обработка и отправка формы черех Ajax
$(document).ready(function(){
  $('#offer-form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(data){
        alert('Спасибо за заявку, скоро мы вам перезвоним.');
        $(this).find("input").val(""); //ищем данные из инпутов
        $("#offer-form").trigger("reset"); // сбрасывается форма - в инпутах пусто
      },
      error: function(jqXHR, textStatus) {
        console.log(jqXHR + ':' + textStatus);
      }
    });
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
// подключаем анимацию wow.js
  new WOW().init();

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
})
  $('#headerSliderRight').click(function() {
    headerSlider.trigger('next.owl.carousel');
  })
});