// $(document).ready(function() {
//   // blogContainer holds all of our posts
//   var roomContainer = $("#RoomsAval");
//   var roomCategorySelect = $("#category");
//   // Click events for the edit and delete buttons
//   $(document).on("click", "button.edit", handleRoomEdit);
//   roomCategorySelect.on("change", handleCategoryChange);
//   var rooms;

//   // This function grabs posts from the database and updates the view
//   function getRooms(category) {
//     var categoryString = category || "";
//     if (categoryString) {
//       categoryString = "/category/" + categoryString;
//     }
//     $.get("/api/dummyRooms" + categoryString, function(data) {
//       console.log("dummyRooms", data);
//       rooms = data;
//       if (!rooms || !rooms.length) {
//         displayEmpty();
//       } else {
//         initializeRows();
//       }
//     });
//   }
//   // Getting the initial list of posts
//   getRooms();
//   // InitializeRows handles appending all of our constructed post HTML inside
//   // blogContainer
//   function initializeRows() {
//     roomContainer.empty();
//     var roomsToAdd = [];
//     for (var i = 0; i < rooms.length; i++) {
//       roomsToAdd.push(createNewRow(rooms[i]));
//     }
//     roomContainer.append(roomsToAdd);
//   }

//   // This function constructs a post's HTML
//   function createNewRow(room) {
//     var newRoomCard = $("<div>");
//     newRoomCard.addClass("room");
//     var newRoomCardHeading = $("<div>");
//     newRoomCardHeading.addClass("card-header");
//     var editBtn = $("<button>");
//     editBtn.text("EDIT");
//     editBtn.addClass("edit btn btn-default");
//     var newRoomTitle = $("<h2>");
//     var newRoomCategory = $("<h5>");
//     newRoomCategory.text(room.category);
//     newRoomCategory.css({
//       float: "right",
//       "font-weight": "700",
//       "margin-top": "-15px"
//     });
//     var newRoomCardBody = $("<div>");
//     newRoomCardBody.addClass("card-body");
//     var newRoomBody = $("<p>");
//     newRoomTitle.text(room.title + " ");
//     newRoomBody.text(room.body);
//     newRoomCardHeading.append(editBtn);
//     newRoomCardHeading.append(newRoomTitle);
//     newRoomCardHeading.append(newRoomCategory);
//     newRoomCardBody.append(newRoomBody);
//     newRoomCard.append(newRoomCardHeading);
//     newRoomCard.append(newRoomCardBody);
//     newRoomCard.data("room", room);
//     return newRoomCard;
//   }

//   function handleRoomEdit() {
//     var currentPost = $(this)
//       .parent()
//       .parent()
//       .data("post");
//     window.location.href = "/dummyRooms?room_id=" + currentPost.id;
//   }

//   // This function figures out which post we want to edit and takes it to the
//   // Appropriate url

//   // This function displays a message when there are no posts

//   // This function handles reloading new posts when the category changes
//   function handleCategoryChange() {
//     var newRoomCategory = $(this).val();
//     getRooms(newRoomCategory);
//   }
// });
