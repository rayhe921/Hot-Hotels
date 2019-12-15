// //document wrapper
// $(document).ready(function() {
//   //start by making sure topics-view div is empty
//   var API = {
//     getRooms: function() {
//       return $.ajax({
//         url: "/rooms",
//         type: "GET"
//       }).then(function(response) {
//         var rooms = response;

//         $("#RoomsAval").empty();
//         for (var i = 0; i < rooms.length; i++) {
//           // function initializeRooms() {
//           //   roomContainer.empty();
//           //   var roomsToDisplay = [];
//           //   for (var i = 0; i < rooms.length; i++) {
//           //     roomsToDisplay.push(createNewRow(rooms[i]));
//           //   }
//           //   roomContainer.append(roomsToDisplay);
//           // }

//           var roomDiv = $("<div class='roomType'>");

//           var roomType = rooms[i].roomType;

//           var description = rooms[i].description;

//           // Creating an element to have the roomType displayed
//           var pRoomType = $("<p id ='pRoomType'></div>").text(
//             "Room Type: " + roomType
//           );

//           //creating an element to have the title displayed
//           var pRoomDescription = $("<p id = 'pDescription'></div>").text(
//             "Description: " + description
//           );

//           // Displaying the rating in HTML
//           roomDiv.append(pRoomType);
//           // Displaying the title in HTML
//           roomDiv.append(pRoomDescription);

//           // Retrieving the URL for the image
//           var imgURL = rooms[i].imgUrl;

//           // Creating an element to hold the image
//           var image = $("<img>");
//           image.attr({
//             src: imgURL
//           });

//           // Appending the image
//           roomDiv.append(image);

//           // Putting the entire topic above the previous topics
//           $("#RoomsAval").append(roomDiv);
//         }
//       });
//     }
//   };
// });

$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body

  // var roomContainer = $(".room-container");
  // var roomList = $("tbody");
  // // Adding event listeners to the form to create a new object, and the button to delete
  // // an Author
  // // Getting the initial list of Authors
  getRooms();

  // // Function for creating a new list row for authors
  // function createRoomRow(roomData) {
  //   var newTr = $("<tr>");
  //   newTr.data("room", roomData);
  //   newTr.append("<td>" + roomData.roomType + "</td>");
  //   newTr.append(
  //     "<td><a href='/blog?room_id=" + roomData.id + "'>Go to Rooms</a></td>"
  //   );
  //   return newTr;
  // }

  // Function for retrieving authors and getting them ready to be rendered to the page
  // function getRooms() {
  //   $.get("/api/rooms", function(data) {
  //     var rowsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       rowsToAdd.push(data[i]);
  //     }
  //     renderRoomList(rowsToAdd);
  //     console.log(rowsToAdd);
  //   });
  // }

  function getRooms() {
    $.get("/api/rooms", function(data) {
      console.log("rooms", data);

      for (var i = 0; i < data.length; i++) {
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

// });
//  }

// A function for rendering the list of authors to the page
//   function renderRoomList(rows) {
//     roomList
//       .children()
//       .not(":last")
//       .remove();
//     roomContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       roomList.prepend(rows);
//     } else {
//       renderEmpty();
//     }
//   }
//   // });

//   function renderRoomList(data) {
//     for (var i = 0; i < data.length; i++) {
//       // Creating a div to hold the topic
//       var roomDiv = $("<div class='room'>");

//       // Storing the rating data
//       var roomType = data[i].roomType;

//       //storing the GIF title
//       var description = data[i].description;

//       // Creating an element to have the rating displayed
//       var pRoomType = $("<p id ='pRating'></div>").text("Rating: " + roomType);

//       //creating an element to have the title displayed
//       var pDescription = $("<p id = 'pTitle'></div>").text(
//         "Title: " + description
//       );

//       // Displaying the rating in HTML
//       roomDiv.append(pRoomType);
//       // Displaying the title in HTML
//       roomDiv.append(pDescription);

//       // Retrieving the URL for the image
//       var imgURL = data[i].imgUrl;

//       // Creating an element to hold the image
//       var image = $("<img>");
//       image.attr({
//         src: imgURL
//       });

//       // Appending the image
//       roomDiv.append(image);

//       // Putting the entire topic above the previous topics
//       $("#rooms-view").prepend(roomDiv);
//     }
//   }
// });
