var stripe = Stripe("pk_test_8vZwzFImJVjcBJsi995sIvQN00YLWz7ctd");

// Create an instance of Elements
var elements = stripe.elements();
console.log("TEST");
// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: "#32325d",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

var card = elements.create("card", { style: style });

card.mount("#card-element");

card.addEventListener("change", function(event) {
  var displayError = document.getElementById("card-errors");
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = "";
  }
});

// Handle form submission
var form = document.getElementById("payment-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById("card-errors");
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById("payment-form");
  var hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", "stripeToken");
  hiddenInput.setAttribute("value", token.id);
  form.appendChild(hiddenInput);
  // Submit the form
  form.submit();
  window.location = "thankyou";
}

$(document).ready(function() {
  // var newReservation = JSON.parse(sessionStorage.getItem("clientReservation"));
  // var numOfNights = newReservation.diffDays;
  // console.log(numOfNights);
  // var date1 = newReservation.dateOne;
  // console.log(date1);
  // var date2 = newReservation.dateTwo;
  // console.log(date2);
  // var newReservationTotalCost = JSON.parse(
  //   sessionStorage.getItem("clientReservationTotalCost")
  // );
  // finalTotalCost = newReservationTotalCost.totalCost;
  // console.log(finalTotalCost);
});
