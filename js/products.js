$(document).ready(function () {
  $.getJSON("../products.json", function (data) {
    $.each(data, function () {
      $.each(this, function (key, value) {
        $("#team").append(
          "<tr><td>" +
            value.name +
            "</td><td>" +
            value.stock +
            "</td><td>" +
            value.quantity +
            "</td><td>" +
            value.size +
            "</td><td>" +
            value.colour +
            "</td></tr>"
        );
      });
    });
  });
});
