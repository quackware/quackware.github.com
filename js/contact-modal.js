console.log("a");

$("#contactModal").on("show.bs.modal", function (event) {
  console.log("show!");
  var button = $(event.relatedTarget);
  var type = button.data("type");

  var modal = $(this);
  var subject = "";
  var message = "Here's some information about what I'm looking for:\n\n";
  message += "Project Description:\n";
  message += "Budget: \n";
  message += "Additional Notes:\n";
  switch (type) {
    case "web-development":
      subject = "Full Stack Development Services";
      message = "I'm Interested in your Full Stack Development Services! " +
        message;
      break;
  }
  console.log(subject, message);
  modal.find("#message").text(message);
  modal.find("#subject").text(subject);
});