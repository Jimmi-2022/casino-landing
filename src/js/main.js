jQuery(document).ready(function ($) {
  //action hover
  $(".main__actionsItemsItemButton button:nth-child(2)").hover(
    function () {
      // $(".main__actionsItemsAbsoluteImg").addClass("hover");
      $(this).parent().next().addClass("hover");
    },
    function () {
      $(this).parent().next().removeClass("hover");
    }
  );

  $(".main__conditionBonusItemsItemTextButton button:nth-child(1)").hover(
    function () {
      // $(".main__actionsItemsAbsoluteImg").addClass("hover");
      $(this).parent().parent().next().addClass("hover");
    },
    function () {
      $(this).parent().parent().next().removeClass("hover");
    }
  );

  /// menu company
  $(".header__innerSearchBoxRight").on("click", function () {
    $(".company").removeClass("dn");
  });
  $(".company__innerItem").on("click", function () {
    $(".company").addClass("dn");
  });
  ///

  $(".header__innerCabinetImg").on("click", function () {
    $(".time p").html('<span class="seconds dn">1</span>');
    //
    function sayHi() {
      let progressElm = document.getElementsByClassName("progress")[0];
      let circumference = 2 * Math.PI * progressElm.getAttribute("r");

      progressElm.style.strokeDasharray = circumference;
      progressElm.style.strokeDashoffset = circumference * 0;

      let max = parseInt(
        document.getElementsByClassName("seconds")[0].textContent
      );
      let seconds = max;

      let secondsElm = document.getElementsByClassName("seconds")[0];

      let timerId = setInterval(() => {
        seconds = seconds + 20;
        if (seconds >= 60) clearInterval(timerId);

        percentage = (seconds / max) * 1;
        progressElm.style.strokeDashoffset =
          circumference - (percentage / 100) * circumference;

        secondsElm.textContent = seconds.toString().padStart(2, "0");
      }, 1000);
      console.log(seconds);
    }

    setTimeout(sayHi, 500);
  });
  $(".circleButton").on("click", function () {
    $(".main__sidebarRmenuLevel").fadeIn();
    $(".time p").html('<span class="seconds dn">1</span>');
    //
    function sayHi() {
      let progressElm = document.getElementsByClassName("progress")[0];
      let circumference = 2 * Math.PI * progressElm.getAttribute("r");

      progressElm.style.strokeDasharray = circumference;
      progressElm.style.strokeDashoffset = circumference * 0;

      let max = parseInt(
        document.getElementsByClassName("seconds")[0].textContent
      );
      let seconds = max;

      let secondsElm = document.getElementsByClassName("seconds")[0];

      let timerId = setInterval(() => {
        seconds = seconds + 20;
        if (seconds >= 60) clearInterval(timerId);

        percentage = (seconds / max) * 1;
        progressElm.style.strokeDashoffset =
          circumference - (percentage / 100) * circumference;

        secondsElm.textContent = seconds.toString().padStart(2, "0");
      }, 1000);
      console.log(seconds);
    }

    setTimeout(sayHi, 500);
  });

  ////Timer 1
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    if (
      $("#days").text().length > 0 &&
      $("#hours").text().length > 0 &&
      $("#minutes").text().length > 0 &&
      $("#seconds").text().length > 0
    ) {
      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "Время вышло!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0);
    }
  })();
  ////Timer 2
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
        if (
          $("#days1").text().length > 0 &&
          $("#hours1").text().length > 0 &&
          $("#minutes1").text().length > 0 &&
          $("#seconds1").text().length > 0
        ) {
          (document.getElementById("days1").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours1").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes1").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds1").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            // document.getElementById("headline1").innerText = "Время вышло!";
            document.getElementById("countdown1").style.display = "none";
            // document.getElementById("content1").style.display = "block";
            clearInterval(x);
          }
        }
        //seconds
      }, 0);
  })();
  ////Timer 3
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
        if (
          $("#days2").text().length > 0 &&
          $("#hours2").text().length > 0 &&
          $("#minutes2").text().length > 0 &&
          $("#seconds2").text().length > 0
        ) {
          (document.getElementById("days2").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours2").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes2").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds2").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline2").innerText = "Время вышло!";
            document.getElementById("countdown2").style.display = "none";
            document.getElementById("content2").style.display = "block";
            clearInterval(x);
          }
        }
        //seconds
      }, 0);
  })();
  ////Timer 4
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "01/30/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
        if (
          $("#days3").text().length > 0 &&
          $("#hours3").text().length > 0 &&
          $("#minutes3").text().length > 0 &&
          $("#seconds3").text().length > 0
        ) {
          (document.getElementById("days3").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours3").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes3").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds3").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline3").innerText = "Время вышло!";
            document.getElementById("countdown3").style.display = "none";
            document.getElementById("content3").style.display = "block";
            clearInterval(x);
          }
        }
        //seconds
      }, 0);
  })();
  ////Timer 4
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/19/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
        if (
          $("#days4").text().length > 0 &&
          $("#hours4").text().length > 0 &&
          $("#minutes4").text().length > 0 &&
          $("#seconds4").text().length > 0
        ) {
          (document.getElementById("days4").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours4").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes4").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds4").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline4").innerText = "Время вышло!";
            document.getElementById("countdown4").style.display = "none";
            document.getElementById("content4").style.display = "block";
            clearInterval(x);
          }
        }
        //seconds
      }, 0);
  })();
  ////Timer
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/19/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
        if (
          $("#days5").text().length > 0 &&
          $("#hours5").text().length > 0 &&
          $("#minutes5").text().length > 0 &&
          $("#seconds5").text().length > 0
        ) {
          (document.getElementById("days5").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours5").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes5").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds5").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline5").innerText = "Время вышло!";
            document.getElementById("countdown5").style.display = "none";
            document.getElementById("content5").style.display = "block";
            clearInterval(x);
          }
        }
        //seconds
      }, 0);
  })();

  ///////game close
  // $(".main__sidebarRmenuOpenButton").on("click", function () {
  //   $(".main__sidebarRmenuLevel").fadeIn();
  // });
  $(".main__sidebarRmenuOpenButton.little").on("click", function () {
    if ($(".main__sidebarRmenuLevel").css("display") === "block") {
      $(".main__sidebarRmenuLevel").removeAttr("style").hide();
    } else {
    }
  });
  ///
  ///////Numbers increase
  // if ($(window).innerWidth() >= 1100) {
  //   Number.prototype.format = function (n) {
  //     var r = new RegExp("\\d(?=(\\d{3})+" + (n > 0 ? "\\." : "$") + ")", "g");
  //     return this.toFixed(Math.max(0, Math.floor(n))).replace(r, "$& ");
  //   };

  //   (function () {
  //     var baseEasings = {};
  //     $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (i, name) {
  //       baseEasings[name] = function (p) {
  //         return Math.pow(p, i + 2);
  //       };
  //     });
  //     $.extend(baseEasings, {
  //       Sine: function (p) {
  //         return 1 - Math.cos((p * Math.PI) / 2);
  //       },
  //       Circ: function (p) {
  //         return 1 - Math.sqrt(1 - p * p);
  //       },
  //       Elastic: function (p) {
  //         return p === 0 || p === 1
  //           ? p
  //           : -Math.pow(2, 8 * (p - 1)) *
  //               Math.sin((((p - 1) * 80 - 7.5) * Math.PI) / 15);
  //       },
  //       Back: function (p) {
  //         return p * p * (3 * p - 2);
  //       },
  //       Bounce: function (p) {
  //         var pow2,
  //           bounce = 4;
  //         while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
  //         return (
  //           1 / Math.pow(4, 3 - bounce) -
  //           7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2)
  //         );
  //       },
  //     });
  //     $.each(baseEasings, function (name, easeIn) {
  //       $.easing["easeIn" + name] = easeIn;
  //       $.easing["easeOut" + name] = function (p) {
  //         return 1 - easeIn(1 - p);
  //       };
  //       $.easing["easeInOut" + name] = function (p) {
  //         return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
  //       };
  //     });
  //   })();

  //   $(".count").each(function () {
  //     $(this)
  //       .prop("counter", 0)
  //       .animate(
  //         {
  //           counter: $(this).text(),
  //         },
  //         {
  //           duration: 10000,
  //           easing: "easeOutExpo",
  //           step: function (step) {
  //             $(this).text("" + step.format());
  //           },
  //         }
  //       );
  //   });
  // }

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
  //menu open
  $(".header__innerCabinetImg").on("click", function () {
    $(".header__innerCabinetMenu").removeClass("dn");
  });

  $(".header__innerCabinetMenuAvatar").on("click", function () {
    $(".header__innerCabinetMenu").addClass("dn");
  });

  //close passport
  $(".popup_containDocumentBgClose").on("click", function () {
    $(".popup_containDocument").addClass("dn");
  });
  //popups new
  $(".btnDisplayNew-2").on("click", function () {
    $(".displayNew-1").addClass("dn");
    $(".displayNew-2").removeClass("dn");
    $(".displayNew-3").addClass("dn");
  });
  $(".btnDisplayNew-3").on("click", function () {
    $(".displayNew-1").addClass("dn");
    $(".displayNew-2").addClass("dn");
    $(".displayNew-3").removeClass("dn");
    $(".popup_containBg.new").addClass("active");
    $(".popup_contain.pay").addClass("active");
    ///
    $(".popup_contain-1").addClass("dn");
    $(".popup_contain-2").removeClass("dn");
  });
  //popups
  $(".btnDisplay-2").on("click", function () {
    $(".display-1").addClass("dn");
    $(".display-2").removeClass("dn");
    $(".display-3").addClass("dn");
    $(".display-4").addClass("dn");
    $(".display-5").addClass("dn");
  });
  $(".btnDisplay-3").on("click", function () {
    $(".display-1").addClass("dn");
    $(".display-3").removeClass("dn");
    $(".display-2").addClass("dn");
    $(".display-4").addClass("dn");
    $(".display-5").addClass("dn");
    $(".display-5").addClass("dn");
  });
  $(".btnDisplay-4").on("click", function () {
    $(".display-1").addClass("dn");
    $(".display-4").removeClass("dn");
    $(".display-2").addClass("dn");
    $(".display-3").addClass("dn");
    $(".display-5").addClass("dn");
    $(".popup_containBg").addClass("active-2");
    $(".popup_containBg").removeClass("active-3");
  });
  $(".btnDisplay-5").on("click", function () {
    $(".display-1").addClass("dn");
    $(".display-5").removeClass("dn");
    $(".display-2").addClass("dn");
    $(".display-3").addClass("dn");
    $(".display-4").addClass("dn");
    $(".popup_containBg").removeClass("active-2");
    $(".popup_containBg").addClass("active-3");
  });
  $(".display-5").on("click", function () {
    $(".display-1").addClass("dn");
    $(".display-6").removeClass("dn");
    $(".display-2").addClass("dn");
    $(".display-3").addClass("dn");
    $(".display-4").addClass("dn");
    $(".display-5").addClass("dn");
    $(".popup_containBg").removeClass("active-2");
    $(".popup_containBg").removeClass("active-3");
  });
  //bonus tabs
  $(".n1").on("click", function () {
    $(".m1").addClass("active");
    $(".m2").removeClass("active");
    $(".m3").removeClass("active");
    $(".n1").addClass("active");
    $(".n2").removeClass("active");
    $(".n2").removeClass("active");
  });
  $(".n2").on("click", function () {
    $(".m2").addClass("active");
    $(".m1").removeClass("active");
    $(".m3").removeClass("active");
    $(".n2").addClass("active");
    $(".n1").removeClass("active");
    $(".n3").removeClass("active");
  });
  $(".n3").on("click", function () {
    $(".m3").addClass("active");
    $(".m2").removeClass("active");
    $(".m1").removeClass("active");
    $(".n3").addClass("active");
    $(".n2").removeClass("active");
    $(".n1").removeClass("active");
  });

  //burger
  $(".toggle-btn").on("click", function () {
    $(".main__menu").toggleClass("active");
  });

  //language
  $(".header__innerLang").on("click", function () {
    $(".header__innerLangActive").toggleClass("open");
    $(".header__innerLang > .header__innerLangWidth").toggleClass("open");
    $(".header__innerLangActive > div:not(:last-child)").toggleClass("num");
    $(".header__innerLangActive > div:last-child").toggleClass("last");
  });
});

///password
jQuery(document).ready(function () {
  jQuery(".main__conditionPromoInputIn input").focus(function () {
    jQuery(this).parent().parent().parent().addClass("white");
  });
  jQuery(".main__conditionPromoInputIn input").blur(function () {
    jQuery(this).parent().parent().parent().removeClass("white");
  });
});

///actions
jQuery(document).ready(function () {
  jQuery(".click1").click(function () {
    jQuery(this).parent().parent().parent().toggleClass("inactive2 active");

    jQuery(this).text(
      jQuery(this).text() == "Подробнее" ? "Скрыть" : "Подробнее"
    );
  });
});
jQuery(document).ready(function () {
  jQuery(".click2").click(function () {
    jQuery(this).parent().parent().parent().toggleClass("inactive2 active");

    jQuery(this).text(
      jQuery(this).text() == "Узнать больше" ? "Скрыть" : "Узнать больше"
    );
  });
});

///active payment
jQuery(document).ready(function () {
  jQuery(".popup_containMethodsItem").click(function () {
    jQuery(this).addClass("active");
    $(".popup_containMethodsItem").not(this).removeClass("active");
  });
});

///tab
jQuery(document).ready(function () {
  jQuery(".titleWrapper").click(function () {
    var toggle = jQuery(this).next("div#descwrapper");
    jQuery(toggle).slideToggle("slow");
  });
  jQuery(".inactive").click(function () {
    jQuery(this).toggleClass("inactive active");
  });
});

///slider banner
var swiper3 = new Swiper(".swiper-container3", {
  speed: 1000,
  direction: "horizontal",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4500,
  },
  loop: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    390: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    720: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    1300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

///
var swiper2 = new Swiper(".swiper-container2", {
  speed: 1000,
  direction: "horizontal",
  grabCursor: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 2500,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    340: {
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    590: {
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    720: {
      slidesPerView: 5,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 6,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 28,
    },
  },
});

///mew game
var swiper1 = new Swiper(".swiper-container1", {
  // speed: 1000,
  direction: "horizontal",
  grabCursor: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    340: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    590: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
  },
});

///mew game 4
var swiper4 = new Swiper(".swiper-container4", {
  speed: 1000,
  direction: "horizontal",
  grabCursor: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // autoplay: {
  //   delay: 5500,
  //   disableOnInteraction: false,
  // },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    340: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    590: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
  },
});

///top company
var swiper5 = new Swiper(".swiper-container5", {
  speed: 1000,
  direction: "horizontal",
  grabCursor: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 9,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    340: {
      slidesPerView: 9,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    590: {
      slidesPerView: 9,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    720: {
      slidesPerView: 6,
      spaceBetween: 20,
      autoplay: {
        delay: 35000000000,
      },
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 6,
      spaceBetween: 50,
      autoplay: {
        delay: 35000000000,
      },
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
    1320: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
    1321: {
      slidesPerView: 9,
      spaceBetween: 10,
    },
  },
});

/// popup
$(".open_popup").click(function () {
  $(this)
    .parent(".popup_main")
    .children(".popup_body")
    .addClass("popup_body_show");
});
$(".popup_close").click(function () {
  $(".popup_body").removeClass("popup_body_show");
});
$(".popup_back").click(function () {
  $(".popup_body").removeClass("popup_body_show");
});

//footer popup
$(".open_popup-1").click(function () {
  $(".popup_body-1").addClass("popup_body_show");
  $(".popup_main-1").addClass("popup_body_show");
});

$(".popup_close").click(function () {
  $(".popup_body-1").removeClass("popup_body_show");
});
$(".popup_back").click(function () {
  $(".popup_body-1").removeClass("popup_body_show");
});

//hide password
$(".toggle-password").click(function () {
  $(this).toggleClass("field-icon-close");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
$(".toggle-password2").click(function () {
  $(this).toggleClass("field-icon-close");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

///select
$(".select").each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("select-hidden");
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next("div.select-styled");
  $styledSelect.text($this.children("option").eq(0).text());

  var $list = $("<ul />", {
    class: "select-options",
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
    //if ($this.children('option').eq(i).is(':selected')){
    //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
    //}
  }

  var $listItems = $list.children("li");

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.select-styled.active")
      .not(this)
      .each(function () {
        $(this).removeClass("active").next("ul.select-options").hide();
      });
    $(this).toggleClass("active").next("ul.select-options").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });
});

//lang
//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$(".vodiapicker option").each(function () {
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item =
    '<li><img src="' +
    img +
    '" alt="" value="' +
    value +
    '"/><span>' +
    text +
    "</span></li>";
  langArray.push(item);
});

$("#a").html(langArray);

//Set the button value to the first el of the array
$(".btn-select").html(langArray[0]);
$(".btn-select").attr("value", "en");

//change button stuff on click
$("#a li").click(function () {
  var img = $(this).find("img").attr("src");
  var value = $(this).find("img").attr("value");
  var text = this.innerText;
  var item =
    '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
  $(".btn-select").html(item);
  $(".btn-select").attr("value", value);
  $(".b").toggle();
  /// lang menu

  $(".btn-select").toggleClass("active");
  //console.log(value);
});

$(".btn-select").click(function () {
  $(".b").toggle();
  /// lang menu

  $(".btn-select").toggleClass("active");
});

//check local storage for the lang
var sessionLang = localStorage.getItem("lang");
if (sessionLang) {
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $(".btn-select").html(langArray[langIndex]);
  $(".btn-select").attr("value", sessionLang);
} else {
  var langIndex = langArray.indexOf("ch");
  console.log(langIndex);
  $(".btn-select").html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}

///AOS
AOS.init({
  easing: "ease-in-out-sine",
});

$(document).ready(function () {
  if ($(".filter-input-search input").length > 0) {
    $(".filter-input-search input").on("input", function (e) {
      alert("Changed!");
    });
  }
});
// get the number remove spaces from string get by class

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

/////////////////////
var runAlready;
var counting;

function startCounter(a) {
  runAlready = true;
  counting = true;
  $(".count").each(function () {
    var $this = $(this);
    $this.text(a);
    countTo = $this.attr("data-count");

    $({
      countNum: $this.text(),
    }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          console.log("counting", $this.text(a));
          counting = false;
        },
      }
    );
  });
}

///
// if (countNum.value.length % 3 == 0) {
//   input.value += " ";
// }
///

$(window).scroll(function () {
  var oTop = $(".main__get-moneyItems").offset().top;
  var a = 0;
  if (
    (!runAlready && $(window).scrollTop() > oTop) ||
    (!counting && $(window).scrollTop() < oTop)
  ) {
    startCounter(a);
  }
});

$(".footer__innerCreated").click(function () {
  $(".footer__innerCreated").toggleClass("menu-active");
});
