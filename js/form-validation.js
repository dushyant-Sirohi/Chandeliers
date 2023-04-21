$(document).ready(function () {
  // validation code for form page
  $("#myForm").submit(function (event) {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var phone = $("#phone").val();
    var message = $("#message").val();
    var errorCount = 0;

    // Validate name
    if (name.length == 0) {
      $("#nameError").text("Name is required");
      errorCount++;
    } else {
      $("#nameError").text("");
    }

    // Validate email
    if (email.length == 0) {
      $("#emailError").text("Email is required");
      errorCount++;
    } else if (!isValidEmail(email)) {
      $("#emailError").text("Invalid email address");
      errorCount++;
    } else {
      $("#emailError").text("");
    }

    // Validate password
    if (password.length == 0) {
      $("#passwordError").text("Password is required");
      errorCount++;
    } else {
      $("#passwordError").text("");
    }

    // Validate phone
    if (phone.length == 0) {
      $("#phoneError").text("Phone is required");
      errorCount++;
    } else if (!isValidPhone(phone)) {
      $("#phoneError").text("Invalid phone number");
      errorCount++;
    } else {
      $("#phoneError").text("");
    }

    // Validate message
    if (message.length == 0) {
      $("#messageError").text("Message is required");
      errorCount++;
    } else {
      $("#messageError").text("");
    }

    if (errorCount > 0) {
      event.preventDefault();
    } else {
      alert("Form Submitted");
    }
  });

  // function to check valid email
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // function to check valid email
  function isValidPhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
});
