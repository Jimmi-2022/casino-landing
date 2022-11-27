jQuery(document).ready(function ($) {
  //created
  $(".footer__innerCreated").click(function () {
    $(".footer__innerCreated").toggleClass("menu-active");
  });

  // Хедер sticky
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("header").addClass("active");
      $(".main__sidebarFixed").addClass("active");
      $(".main__menuFixed").addClass("active");
    } else {
      $("header").removeClass("active");
      $(".main__sidebarFixed").removeClass("active");
      $(".main__menuFixed").removeClass("active");
    }
    if ($(this).scrollTop() > 10) {
      $("header").addClass("bg");
    } else {
      $("header").removeClass("bg");
    }
  });
});

if ($(window).width() > 1100) {
  AOS.init({
    delay: 400, // values from 0 to 3000, with step 50ms
  });
}
