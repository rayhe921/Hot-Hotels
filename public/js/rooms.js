$(document).ready(function() {
  getRooms();

  function getRooms() {
    $.get("/api/rooms", function(data) {
      console.log("rooms", data);

      var roomsArray = [];
      for (var i = 0; i < data.length; i++) {
        roomsArray.push(data[i]);
        // Creating a div to hold the topic
        var roomDiv = $("<div class='room'>");

        // Storing the rating data
        var roomType = data[i].roomType;

        //storing the GIF title
        var description = data[i].description;

        // Creating an element to have the rating displayed
        var pRoomType = $("<p id ='pRating'></div>").text(
          "Rating: " + roomType
        );

        //creating an element to have the title displayed
        var pDescription = $("<p id = 'pTitle'></div>").text(
          "Title: " + description
        );

        // Displaying the rating in HTML
        roomDiv.append(pRoomType);
        // Displaying the title in HTML
        roomDiv.append(pDescription);

        // Retrieving the URL for the image
        var imgURL = data[i].imgUrl;

        // Creating an element to hold the image
        var image = $("<img>");
        image.attr({
          src: imgURL
        });

        // Appending the image
        roomDiv.append(image);

        // Putting the entire topic above the previous topics
        $("#rooms-view").append(roomDiv);
      }
    });
  }
});
