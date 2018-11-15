$("#contactModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var type = button.data("buttontype");

  var modal = $(this);
  var subject = "";
  var message = "Here's some information about what I'm looking for:\n\n";
  message += "Project Description:\n\n\n";
  message += "Availability:\n\n\n";
  message += "Budget: \n\n\n";
  message += "Additional Notes:";
  switch (type) {
    case "web-development":
      subject = "Custom Software & Web Development";
      message = "I'm interested in your Custom Software & Web Development Services! " +
        message;
      break;
    case "js-consulting":
      subject = "JavaScript Consulting Services";
      message = "I'm interested in your JavaScript Consulting Services! " +
        message;
      break;
    case "enterprise":
      subject = "Enterprise Services";
      message = "I'm interested in your Enterprise Services! " + message;
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