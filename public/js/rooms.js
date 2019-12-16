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

        var roomDivCardImage = $("<div class ='card-image'>");

        var image = $("<img class ='activator'>");
        image.attr({
          src: imgURL
        });

        image.css({
          width: "100%",
          height: "auto"
        });

        var roomCardContent = $("<div class ='card-content'>");

        var pRoomType = $("<p id = 'pRoomType'></div>").text(
          "Room Type: " + data[i].roomType
        );

        pRoomType.css({
          float: "left",
          "font-weight": "600",
          "margin-top": "-10px"
        });

        var button = $("<button>");
        button.text("Book This Room");
        button.addClass("btn");

        button.css({
          float: "right",
          "font-weight": "700",
          "margin-top": "-18px"
        });

        var iCardTag = $(" <i class='material-icons right'>");

        var roomCardContentSpan = $(
          "<span class ='card-title activator grey-text text-darken-4'>Card Title</span>"
        );

        var roomCardContenti = $("<i class ='material-icons right'>");

        var roomCardRevealDiv = $("<div class ='card-reveal'>");

        var roomCardRevealSpan = $(
          "<span class = 'card-title grey-text text-darken-4'>Card Title</span>",
          {
            class: "card-title activator grey-text text-darken-4"
          }
        );

        roomCardContentSpan.text(data[i].roomType);

        roomCardRevealSpan.text(data[i].description);

        var imgURL = data[i].imgUrl;

        // Appending the image

        roomDivCard.append(roomDivCardImage);
        roomDivCardImage.append(image);
        roomDivCard.append(roomCardContent);
        roomCardContent.append(roomCardContentSpan);
        button.appendTo(roomCardContent);
        roomCardContent.append(button);
        roomCardContent.append(pRoomType);
        button.append(iCardTag);
        roomCardContenti.append(roomCardContentSpan);
        roomDivCard.append(roomCardRevealDiv);
        roomCardRevealDiv.append(roomCardRevealSpan);

        // Putting the entire topic above the previous topics
        $("#RoomsAval").append(roomDivCard);
      }
    });
  }
});
