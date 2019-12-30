var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $email = $("#email");

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

  // Create Client object and submit data to db
  var client = {
    firstName: $firstName.val().trim(),
    lastName: $lastName.val().trim(),
    email: $email.val().trim()
  };

  API.saveClient(client);

  $firstName.val("");
  $lastName.val("");
  $email.val("");

  window.location = "payment";

  // Create reservation object and submit data to db

  // var reservation = {
  //   BeginDate: $BeginDate.val().trim(),
  //   EndDate: $EndDate.val().trim(),
  //   // NumberofAdults: $NumberofAdults.val().trim(),
  //   totalCost: $totalCost.val().trim(),
  //   roomID: $roomID.val().trim()
  // };

  // API.saveReservation(reservation);

  // $BeginDate.val("");
  // $EndDate.val("");
  // $totalCost.val("");
  // $roomID.val("");
});
