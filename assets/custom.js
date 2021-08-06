$(document).ready(function() {
  var pathname = window.location.pathname;
  if(pathname.includes('pages/nps')) {
    var screen_height = $( window ).height();
    var current_header_footer = $('.nav.clearfix').height() + $('.footer').height();
    var nps_height = $('.container.main.content').height();
    if(screen_height > (current_header_footer + nps_height)) {
      $('.footer').addClass('footer-static');
    }    
  } else {
    if($('.footer').hasClass('footer-static')) {
      $('.footer').removeClass('footer-static');
    }    
  }

  var url = new URL(window.location.href);

  if (url.searchParams.get('msg')) {
    var custom_text = decodeURIComponent(url.searchParams.get('msg'));
    $('.promo_banner__content').html(custom_text);

  }
});
