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
    if($('.footer').hasClass(footer-static)) {
      $('.footer').removeClass('footer-static');
    }    
  }    
});

$(window).on('load', function() {
  $(".isp_product_image_href").each(function() {
    var href_link = $(this).attr("href");
    var href_split_links = href_link.split("/");
    var product_handle = href_split_links[href_split_links.length - 1];
    $(this).attr("href", '/products/'+product_handle);
  });
});