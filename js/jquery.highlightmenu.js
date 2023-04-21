"use strict";
(function ($) {
  $.fn.highlightMenu = function (options) {
    var defaults = $.extend(
      {
        bgColor: "unset",
        color: "#efefef",
        hoverBgColor: "#cccccc",
        hoverColor: "#000000",
      },
      options
    );
    return this.each(function () {
      var items = $(".nav-links a");
      var o = defaults;
      items.css("background-color", o.bgColor).css("width", o.linkWidth);
      items.mouseover(function () {
        $(this)
          .css("background-color", o.hoverBgColor)
          .css("color", o.hoverColor);
      });
      items.mouseout(function () {
        $(this).css("background-color", o.bgColor).css("color", o.color);
      });
    });
  };
})(jQuery);
