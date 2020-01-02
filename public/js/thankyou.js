//POST RESERVATION Once Navigated to Thank you page
$(document).ready(function() {
  var storage = window.sessionStorage;
  postReservation();

  function postReservation() {
    var API = {
      saveReservation: function(bookedReservation) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "/reservation",
          data: JSON.stringify(bookedReservation)
        });
      }
    };

    var newReservation = JSON.parse(storage.getItem("clientReservation"));

    console.log(newReservation);
    var newClientReservationTotalCost = JSON.parse(
      storage.getItem("clientReservationTotalCost")
    );

    console.log(newClientReservationTotalCost);

    var checkIn = newReservation.BeginningDate;
    var checkOut = newReservation.EndingDate;
    console.log(checkIn);
    console.log(checkOut);
    var totalCost = newClientReservationTotalCost.totalCost;
    var roomId = newClientReservationTotalCost.roomId;

    var bookedReservation = {
      checkIn: checkIn,
      checkOut: checkOut,
      totalCost: totalCost,
      roomId: roomId
    };

    API.saveReservation(bookedReservation);
  }
});
