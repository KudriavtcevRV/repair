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


