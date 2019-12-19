USE hoteldb;
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Standard", "WONDERFUL KING GUEST ROOM, 1 KING", "https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg", 100);
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Standard", "SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW", "https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*", 139);
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Double", "FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY", "https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*", 200);
INSERT INTO Rooms (roomType, description, imgUrl, roomCost) VALUES ("Deluxe", "EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL","http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w", 300);

INSERT INTO Occupancy (date, occupied) VALUES ("12/12/19", true);
INSERT INTO Occupancy (date, occupied) VALUES ("12/13/19", false);
INSERT INTO Occupancy (date, occupied) VALUES ("12/14/19", false);
INSERT INTO Occupancy (date, occupied) VALUES ("12/15/19", true);
INSERT INTO Occupancy (date, occupied) VALUES ("12/15/19", false);
INSERT INTO Occupancy (date, occupied) VALUES ("12/16/19", false);
INSERT INTO Occupancy (date, occupied) VALUES ("12/19/19", false);


INSERT INTO Clients (firstName, lastName, email) VALUES ("Christina", "Tang", "tang.xtina@gmail.com");
INSERT INTO Clients (firstName, lastName, email) VALUES ("Noelle", "Everage", "noelle.everage@gmail.com");
INSERT INTO Clients (firstName, lastName, email) VALUES ("Ray", "He", "ray.he@gmail.com");
INSERT INTO Clients (firstName, lastName, email) VALUES ("Josh", "Cosson", "josh.cosson@gmail.com");


INSERT INTO Reservations (checkIn, checkOut, totalCost) VALUES ("12/12/19", "12/16/19", 1500);
INSERT INTO Reservations (checkIn, checkOut, totalCost) VALUES ("12/12/19", "12/15/19", 1200);
INSERT INTO Reservations (checkIn, checkOut, totalCost) VALUES ("12/12/19", "12/15/19", 1200);
INSERT INTO Reservations (checkIn, checkOut, totalCost) VALUES ("12/12/19", "12/15/19", 556);
INSERT INTO Reservations (checkIn, checkOut, totalCost) VALUES ("12/14/19", "12/15/19", 200);
INSERT INTO Reservations (checkIn, checkOut, totalCost) VALUES ("12/12/19", "12/15/19", 400);