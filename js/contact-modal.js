$("#contactModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var type = button.data("buttontype");

  var modal = $(this);
  var subject = "";
  var message = "Here's some information about what I'm looking for:\n\n";
  message += "Project Description:\n";
  message += "Budget: \n";
  message += "Additional Notes:\n";
  switch (type) {
    case "web-development":
      subject = "Full Stack Development Services";
      message = "I'm interested in your Full Stack Development Services! " +
        message;
      break;
    case "js-consulting":
      subject = "JavaScript Consulting Services";
      message = "I'm interested in your JavaScript Consulting Services! " +
        message;
      break;
    case "android":
      subject = "Android Services";
      message = "I'm interested in your Android Services! " + message;
      break;
    case "consulting":
      subject = "General Consulting Services";
      message = "I'm interested in your General Consulting Services! " +
        message;
      break;
  }
  modal.find("#message").text(message);
  modal.find("#subject").text(subject);
});