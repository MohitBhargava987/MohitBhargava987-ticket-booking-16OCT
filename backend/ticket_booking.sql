-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2025 at 06:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticket_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `show_id` int(11) DEFAULT NULL,
  `seat_id` int(11) DEFAULT NULL,
  `booking_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `user_name`, `show_id`, `seat_id`, `booking_date`) VALUES
(1, 'Mohit', 2, 7, '2025-10-15 21:12:57'),
(2, 'Mohit', 1, 1, '2025-10-15 21:47:39');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `genre`, `duration`) VALUES
(1, 'Inception', 'Sci-Fi', 148),
(2, 'Avengers: Endgame', 'Action', 181),
(3, 'The Dark Knight', 'Action', 152),
(4, 'Interstellar', 'Sci-Fi', 169),
(5, 'Joker', 'Drama', 122),
(6, 'Jurassic World', 'Adventure', 124),
(7, 'Frozen II', 'Animation', 103),
(8, 'Top Gun: Maverick', 'Action', 130),
(9, 'Oppenheimer', 'Biography', 180),
(10, 'Spider-Man: No Way Home', 'Superhero', 148),
(11, 'Inception2.0', 'Sci-Fi', 148),
(12, 'Inception2.0', 'Sci-Fi', 148),
(13, 'Inception2.2', 'Sci-Fi', 148);

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `id` int(11) NOT NULL,
  `show_id` int(11) DEFAULT NULL,
  `seat_number` varchar(10) DEFAULT NULL,
  `status` enum('available','booked') DEFAULT 'available'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `show_id`, `seat_number`, `status`) VALUES
(1, 1, 'A1', 'booked'),
(2, 1, 'A2', 'available'),
(3, 1, 'A3', 'available'),
(4, 1, 'A4', 'available'),
(5, 1, 'A5', 'booked'),
(6, 1, 'B1', 'booked'),
(7, 1, 'B2', 'booked'),
(8, 1, 'B3', 'available'),
(9, 1, 'B4', 'available'),
(10, 1, 'B5', 'available'),
(11, 2, 'A1', 'available'),
(12, 2, 'A2', 'available'),
(13, 2, 'A3', 'available'),
(14, 2, 'A4', 'available'),
(15, 2, 'A5', 'available'),
(16, 2, 'B1', 'available'),
(17, 2, 'B2', 'available'),
(18, 2, 'B3', 'available'),
(19, 2, 'B4', 'available'),
(20, 2, 'B5', 'available'),
(21, 3, 'A1', 'available'),
(22, 3, 'A2', 'available'),
(23, 3, 'A3', 'available'),
(24, 3, 'A4', 'available'),
(25, 3, 'A5', 'available'),
(26, 3, 'B1', 'available'),
(27, 3, 'B2', 'available'),
(28, 3, 'B3', 'available'),
(29, 3, 'B4', 'available'),
(30, 3, 'B5', 'available');

-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

CREATE TABLE `shows` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `show_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shows`
--

INSERT INTO `shows` (`id`, `movie_id`, `show_time`) VALUES
(1, 1, '2025-10-16 10:00:00'),
(2, 1, '2025-10-16 18:30:00'),
(3, 2, '2025-10-16 13:00:00'),
(4, 2, '2025-10-16 20:00:00'),
(5, 3, '2025-10-16 11:30:00'),
(6, 3, '2025-10-16 21:15:00'),
(7, 4, '2025-10-16 09:00:00'),
(8, 4, '2025-10-16 19:00:00'),
(9, 5, '2025-10-16 15:30:00'),
(10, 6, '2025-10-16 17:00:00'),
(11, 7, '2025-10-16 10:30:00'),
(12, 8, '2025-10-16 12:00:00'),
(13, 8, '2025-10-16 22:00:00'),
(14, 9, '2025-10-16 14:00:00'),
(15, 10, '2025-10-16 16:00:00'),
(16, 10, '2025-10-16 20:30:00'),
(17, 1, '2025-10-16 18:30:00'),
(18, 2, '2025-10-16 18:30:00'),
(19, 2, '2025-10-16 18:30:00'),
(20, 2, '2025-10-16 19:30:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `show_id` (`show_id`),
  ADD KEY `seat_id` (`seat_id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `show_id` (`show_id`);

--
-- Indexes for table `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `shows`
--
ALTER TABLE `shows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`id`);

--
-- Constraints for table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`show_id`) REFERENCES `shows` (`id`);

--
-- Constraints for table `shows`
--
ALTER TABLE `shows`
  ADD CONSTRAINT `shows_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
