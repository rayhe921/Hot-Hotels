-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: hoteldb
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'John','Smith','john.smith@gmail.com'),(2,'Christina','Tang','tang.xtina@gmail.com'),(3,'Noelle','Everage','noelle.everage@gmail.com'),(4,'Ray','He','ray.he@gmail.com'),(5,'Josh','Cosson','josh.cosson@gmail.com'),(7,'sadfasdf','sdgsdg','sdfg@gmail.com'),(8,'dfgsdg','sfgsd','gfsd@ray.com'),(9,'sdgdfg','dfhgdfh','egtdgs@sdfgd.com'),(10,'DFGGFD','dfgdsgg','sdfsd@sdfs.com'),(11,'sdgsfg','asdfad','dsfgds@sdfgdsf.com');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `occupancies`
--

DROP TABLE IF EXISTS `occupancies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `occupancies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `occupied` tinyint(1) DEFAULT '0',
  `ClientId` int(11) DEFAULT '0',
  `RoomId` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `ClientId` (`ClientId`),
  KEY `RoomId` (`RoomId`)
  -- CONSTRAINT `occupancies_ibfk_1` FOREIGN KEY (`ClientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  -- CONSTRAINT `occupancies_ibfk_2` FOREIGN KEY (`RoomId`) REFERENCES `rooms` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `occupancies`
--

LOCK TABLES `occupancies` WRITE;
/*!40000 ALTER TABLE `occupancies` DISABLE KEYS */;
INSERT INTO `occupancies` VALUES (4,'2019-12-13',1,1,4),(5,'2019-12-14',0,3,2);
/*!40000 ALTER TABLE `occupancies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `checkIn` datetime NOT NULL,
  `checkOut` datetime NOT NULL,
  `totalCost` int(11) NOT NULL,
  `RoomId` int(11) DEFAULT '0',
  `ClientId` int(11) DEFAULT '0',
  `OccupancyId` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `RoomId2` (`RoomId`),
  KEY `ClientId2` (`ClientId`),
  KEY `OccupancyId1` (`OccupancyId`)
  -- CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`RoomId`) REFERENCES `rooms` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  -- CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`ClientId`) REFERENCES `clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  -- CONSTRAINT `reservations_ibfk_3` FOREIGN KEY (`OccupancyId`) REFERENCES `occupancies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomType` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imgUrl` varchar(255) NOT NULL,
  `roomCost` int(11) NOT NULL,
  `ClientId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ClientId3` (`ClientId`)
  -- CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`ClientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,'Standard','WONDERFUL KING GUEST ROOM, 1 KING','https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg',100,NULL),(2,'Standard','SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*',139,NULL),(3,'Double','FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*',200,NULL),(4,'Deluxe','EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL','http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w',300,NULL),(5,'Standard','WONDERFUL KING GUEST ROOM, 1 KING','https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg',100,NULL),(6,'Standard','SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*',139,NULL),(7,'Double','FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*',200,NULL),(8,'Deluxe','EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL','http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w',300,NULL),(9,'Standard','WONDERFUL KING GUEST ROOM, 1 KING','https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg',100,NULL),(10,'Standard','SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*',139,NULL),(11,'Double','FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*',200,NULL),(12,'Deluxe','EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL','http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w',300,NULL),(13,'Standard','WONDERFUL KING GUEST ROOM, 1 KING','https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg',100,NULL),(14,'Standard','SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*',139,NULL),(15,'Double','FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*',200,NULL),(16,'Deluxe','EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL','http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w',300,NULL),(17,'Standard','WONDERFUL KING GUEST ROOM, 1 KING','https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg',100,NULL),(18,'Standard','SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*',139,NULL),(19,'Double','FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*',200,NULL),(20,'Deluxe','EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL','http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w',300,NULL),(21,'Standard','WONDERFUL KING GUEST ROOM, 1 KING','https://i.pointhacks.com/2019/04/23202609/03-W-Hotel-Singapore.jpg',100,NULL),(22,'Standard','SPECTACULAR KING GUEST ROOM, 1 KING, HARBOR VIEW','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-marvelous-suite-6144-hor-feat.jpg?downsize=1024px:*',139,NULL),(23,'Double','FABULOUS TWIN GUEST ROOM, 2 DOUBLE, POOL VIEW, BALCONY','https://cache.marriott.com/marriottassets/marriott/SINWH/sinwh-fabulous-6686-hor-feat.jpg?download=2880px:*',200,NULL),(24,'Deluxe','EXTREME WOW SUITE KING 1 BEDROOM PRESIDENTIAL SUITE, 1 KING, BALCONY, PLUNGE POOL','http://static1.squarespace.com/static/52ccee75e4b00bc0dba03f46/52cd02c4e4b0ee5551498c4e/5b21c06f1ae6cf0f3f85737c/1528939481275/pf_act_hotel_whotel1.jpg?format=1500w',300,NULL);
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-17 19:37:28
