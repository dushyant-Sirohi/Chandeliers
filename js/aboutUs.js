$(document).ready(function () {
  // FAQs
  $("#faqs h2").click(function () {
    // Check if there are any open slides
    var $openSlides = $("#faqs h2.minus");
    if ($openSlides.length > 0) {
      // Close the open slides
      $openSlides.next().slideUp(1000);
      $openSlides.removeClass("minus");
    }

    // Toggle the clicked slide
    if (!$(this).next().is(":visible")) {
      $(this).toggleClass("minus");
      $(this).next().slideDown(1000);
    }
  });
});
