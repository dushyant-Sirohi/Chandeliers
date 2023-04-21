$(document).ready(function () {
  function animateHeading() {
    $("#fheading")
      .animate(
        {
          color: "#f8d166",
          backgroundColor: "rgb(68 66 66)",
        },
        100
      )
      .animate(
        {
          color: "rgb(68 66 66)",
          backgroundColor: "#f8d166",
        },
        100
      )
      .queue(function () {
        animateHeading();
        $(this).dequeue();
      });
  }
  animateHeading();
});
