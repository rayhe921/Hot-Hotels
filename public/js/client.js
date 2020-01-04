var firstName;
var lastName;
var email;

var API = {
  saveClient: function(client) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/client",
      data: JSON.stringify(client)
    });
  }
};

// Handle form submission
var form = document.getElementById("client-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var storage = window.sessionStorage;
  firstName = document.getElementById("firstName").value;
  storage.setItem("firstName", firstName);

  lastName = document.getElementById("lastName").value;
  storage.setItem("lastName", lastName);

  email = document.getElementById("email").value;
  storage.setItem("email", email);

  // Create Client object and submit data to db
  var client = {
    firstName: $("#lastName")
      .val()
      .trim(),
    lastName: $("#firstName")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim()
  };

  API.saveClient(client);

  // firstName.val("");
  // lastName.val("");
  // email.val("");

  window.location = "payment";
});
