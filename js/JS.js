"use strict";
$(document).ready(function () {
  $("nav").highlightMenu();

  var searchTerm;
  $("#btnSearch").click(function () {
    // Set the search term
    searchTerm = "";
    if ($("#search").val() == "") {
      alert("You must enter one or more tags!");
    } else {
      searchTerm = $("#search").val();
      // Build the URL based on the search term
      var url =
        "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "format=json&jsoncallback=?&tags=" +
        searchTerm +
        "&tagmode=all";

      $.getJSON(url, function (data) {
        var html = "";
        $.each(data.items, function (i, item) {
          html += "<h2>" + item.title + "</h2>";
          html += "<div class=" + "content" + ">";
          html += "<img src=" + item.media.m + ">";
          html += "<p><b>Tags: </b>" + item.tags + "</p></div>";
        });
        $("#photos").html(html);
      });
    }
  });
}); // end ready
