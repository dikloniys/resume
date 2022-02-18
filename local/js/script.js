$(document).ready(function() {

  const mobile = $(window).width() < 768;

  const checkListStatus = (button) => {
    if (!button.data('status')) {
      button.data('status', true).html('Скрыть');
    } else {
      button.data('status', false).html('Показать полностью...');
    }
  }
  

  const swiper = new Swiper('.js-portfolio-slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.portfolio-button-next',
      prevEl: '.portfolio-button-prev',
    },
  });

  $(".js-button-like").click(function() {
    $(".js-button-like").toggleClass("button-like-active");
  });

  
  $(".js-history-hide").click(function() {
    $(".js-history-button").toggleClass("history-button-active");
    $(".js-history-hidden").slideToggle();
  });

  $(".js-button-button").click(function() {
      $(this).parents(".form-wrap").find(".js-button-check").toggleClass("active")
      $(this).parents(".form-wrap").find(".js-form-menu").slideToggle()
  });

  $('.js-show').click(function() {
      $(this).toggleClass('active');
      const parent = $(this).parents('.js-experience-list')
      parent.toggleClass('opened');
      checkListStatus($(this))
  });

});