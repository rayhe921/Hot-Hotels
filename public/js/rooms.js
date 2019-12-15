$(document).ready(function() {
  getRooms();

  function getRooms() {
    $.get("/api/rooms", function(data) {
      console.log("rooms", data);

      var roomsArray = [];
      for (var i = 0; i < data.length; i++) {
        roomsArray.push(data[i]);
        // Creating a div to hold the topic
        var roomDivCard = $("<div class='card'>");

        var roomDivCardImage = $(
          "<div class ='card-image waves-effect waves-block waves-light'>"
        );

        var image = $("<img class ='activator'>");
        image.attr({
          src: imgURL
        });

        var roomCardContent = $("<div class ='card-content'>");

        var roomCardContentSpan = $(
          "<span class ='card-title activator grey-text text-darken-4'>Card Title</span>",
          {
            i: "material-icons right"
          }
        );

        var roomCardRevealDiv = $("<div class ='card-reveal'>");

        roomCardContentSpan.text(data[i].roomType);

        var roomCardRevealSpan = $(
          "<span class = 'card-title grey-text text-darken-4'>Card Title</span>",
          {
            class: "card-title activator grey-text text-darken-4",
            i: "material-icons right"
          }
        );

        roomCardRevealSpan.text(data[i].description);

        // Storing the rating data
        // var roomType = data[i].roomType;

        // //storing the GIF title
        // var description = data[i].description;

        // // Creating an element to have the rating displayed
        // var pRoomType = $("<p id ='pRating'></div>").text(
        //   "Rating: " + roomType
        // );

        // //creating an element to have the title displayed
        // var pDescription = $("<p id = 'pTitle'></div>").text(
        //   "Title: " + description
        // );

        // // Displaying the rating in HTML
        // roomDiv.append(pRoomType);
        // // Displaying the title in HTML
        // roomDiv.append(pDescription);

        // Retrieving the URL for the image
        var imgURL = data[i].imgUrl;

        // // Creating an element to hold the image
        // var image = $("<img>");
        // image.attr({
        //   src: imgURL
        // });

        // Appending the image
        roomDivCard.append(roomDivCardImage);
        roomDivCardImage.append(image);
        roomDivCard.append(roomCardContent);
        roomCardContent.append(roomCardContentSpan);
        roomDivCard.append(roomCardRevealDiv);
        roomCardRevealDiv.append(roomCardRevealSpan);

        // Putting the entire topic above the previous topics
        $("#RoomsAval").append(roomDivCard);
      }
    });
  }
});
