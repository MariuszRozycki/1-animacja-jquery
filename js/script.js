$(document).ready(function () {

  const square = $('.square');

  $('.click').click(function () {
    square.animate({ marginLeft: '300px', width: '100px', height: '100px' }, 3000,
      function () {
        $(this).addClass('blue');
        square.animate({ marginLeft: '300px', width: '100px', height: '100px' }, 4000, function () {
          $(this).prepend('<h2>Animacja zakonczona!</h2>');
        });
      });
  });
});
