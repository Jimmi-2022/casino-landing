let counting = true;

$(window).scroll(function () {
  const scroll = $(window).scrollTop();
  if ((scroll >= 100, counting === true)) {
    if ($(".count").length > 0) {
      (function ($) {
        $.fn.countTo = function (options) {
          options = options || {};

          return $(this).each(function () {
            // set options for current element
            var settings = $.extend(
              {},
              $.fn.countTo.defaults,
              {
                from: $(this).data("from"),
                to: $(this).data("to"),
                speed: $(this).data("speed"),
                refreshInterval: $(this).data("refresh-interval"),
                decimals: $(this).data("decimals"),
              },
              options
            );

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data("countTo") || {};

            $self.data("countTo", data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
              clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
              value += increment;
              loopCount++;

              render(value);

              if (typeof settings.onUpdate == "function") {
                settings.onUpdate.call(self, value);
              }

              if (loopCount >= loops) {
                // remove the interval
                $self.removeData("countTo");
                clearInterval(data.interval);
                value = settings.to;

                if (typeof settings.onComplete == "function") {
                  settings.onComplete.call(self, value);
                }
              }
            }

            function render(value) {
              var formattedValue = settings.formatter.call(
                self,
                value,
                settings
              );
              $self.html(formattedValue);
            }
          });
        };

        $.fn.countTo.defaults = {
          from: 0, // the number the element should start at
          to: 0, // the number the element should end at
          speed: 1, // how long it should take to count between the target numbers
          refreshInterval: 1, // how often the element should be updated
          decimals: 0, // the number of decimal places to show
          formatter: formatter, // handler for formatting the value before rendering
          onUpdate: null, // callback method for every time the element is updated
          onComplete: null, // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
          return value.toFixed(settings.decimals);
        }
      })(jQuery);

      jQuery(function ($) {
        var theLanguage = $("html").attr("lang");
        if (theLanguage === "ru") {
          // custom formatting example
          $(".count").data("countToOptions", {
            formatter: function (value, options) {
              return value
                .toFixed(options.decimals)
                .replace(/\B(?=(?:\d{3})+(?!\d))/g, " ");
            },
          });
        }
        if (theLanguage === "en") {
          // custom formatting example
          $(".count").data("countToOptions", {
            formatter: function (value, options) {
              return value
                .toFixed(options.decimals)
                .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
            },
          });
        }

        counting = false;
        // start all the timers
        $(".count").each(count);

        function count(options) {
          var $this = $(this);
          options = $.extend(
            {},
            options || {},
            $this.data("countToOptions") || {}
          );
          $this.countTo(options);
        }
      });
    }
  }
});

/// целые
$(function () {
  $(".count").each(function () {
    var numberText = parseInt($(this).text())
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    let num = $(this).empty();
    num.append(numberText);
  });
});

/// с плавающей точкой
// $(function () {
//   $(".counted").each(function () {
//     function numberWithSpaces(x) {
//       var parts = x.toString().split(".");
//       parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
//       return parts.join(".");
//     }
//     var numberTextNew = numberWithSpaces(parseFloat($(this).text()));

//     let num = $(this).empty();
//     num.append(numberTextNew);
//   });
// });
