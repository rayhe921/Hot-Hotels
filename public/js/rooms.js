var API = {
  getRooms: function() {
    return $.ajax({
      url: "/dummyRooms",
      type: "GET"
    });
  }
};

var refreshRooms = function() {
  API.getRooms().then(function(data) {
    var $rooms = data.map(function(room) {
      var $a = $("<a>")
        .text(room.id)
        .attr("href", "/room/" + room.roomType);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": room.roomType
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $roomList.empty();
    $roomList.append($rooms);
  });
};

refreshRooms();
