-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: database:3306
-- Generation Time: Feb 21, 2022 at 03:39 AM
-- Server version: 8.0.28
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `docker`
--

-- --------------------------------------------------------

--
-- Table structure for table `Feedback`
--

CREATE TABLE `Feedback` (
  `id` int NOT NULL,
  `authorId` int NOT NULL,
  `sessionId` int NOT NULL,
  `rating` int NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Feedback`
--

INSERT INTO `Feedback` (`id`, `authorId`, `sessionId`, `rating`, `content`, `createdAt`) VALUES
(1, 1, 1, 5, 'Est aliqua. Veniam duis qui. Labore duis laborum occaecat.', '2022-02-04 12:10:03.581'),
(2, 1, 2, 4, 'Aliquip tempor esse magna Lorem ut ullamco eu Lorem amet excepteur consequat aliquip elit. Nostrud sint veniam mollit aliquip amet enim officia sint reprehenderit et et officia.', '2022-02-18 07:58:08.062'),
(3, 1, 3, 5, 'Lorem tempor ex magna dolore nostrud dolore incididunt nulla aliquip irure nisi in consectetur.', '2022-02-19 20:11:21.022'),
(4, 1, 4, 5, 'Laboris commodo cillum nostrud minim. Qui consectetur laboris elit irure quis et velit deserunt incididunt et aute non veniam. Commodo consequat tempor ex eiusmod veniam minim voluptate aliqua anim id est esse anim est do. Ullamco do ullamco eiusmod aliquip eu cupidatat sunt consectetur dolor exercitation ex.', '2022-02-14 10:39:38.220'),
(5, 1, 5, 4, 'Consectetur eiusmod sint pariatur. Sunt irure magna nostrud pariatur culpa nulla culpa cupidatat ipsum. Consequat adipisicing exercitation ea voluptate nostrud.', '2022-02-11 23:03:42.904'),
(6, 2, 1, 5, 'In cillum magna sit eu ad consectetur exercitation eu sint consectetur occaecat. Incididunt voluptate qui quis ut. Sunt mollit pariatur quis nisi magna amet aliquip do in mollit occaecat veniam ex excepteur.', '2022-02-16 04:31:49.787'),
(7, 2, 3, 4, 'Est dolore pariatur aute officia culpa adipisicing sint pariatur deserunt fugiat. Pariatur amet reprehenderit tempor enim.', '2022-02-17 11:14:47.354'),
(8, 2, 5, 3, 'Dolore cupidatat nostrud ad nisi pariatur consectetur labore minim consequat.', '2022-02-12 05:06:14.348'),
(9, 2, 7, 2, 'Sit eu cupidatat aute do et consectetur incididunt ea sint id id cupidatat commodo. Id ad sit mollit est laborum velit tempor excepteur culpa est ullamco. Culpa officia. Incididunt nostrud nisi deserunt occaecat.', '2022-02-01 02:04:09.144'),
(10, 2, 9, 1, 'Lorem incididunt. Labore pariatur enim fugiat excepteur ipsum id. Incididunt amet esse id eu sit.', '2022-02-12 03:49:14.443'),
(11, 3, 2, 5, 'Amet tempor excepteur dolor ullamco et officia exercitation occaecat. Occaecat esse officia eu consectetur quis ut proident minim aliqua officia adipisicing in labore. Aute officia tempor aliqua consectetur consectetur.', '2022-02-13 19:57:37.723'),
(12, 3, 4, 4, 'Elit eu est anim et ipsum mollit voluptate exercitation enim aliquip. Aute labore.', '2022-02-03 10:15:39.101'),
(13, 3, 6, 3, 'Minim enim quis enim est officia deserunt nulla cupidatat qui adipisicing in cillum duis laborum consectetur.', '2022-02-01 20:58:05.154'),
(14, 3, 8, 2, 'Fugiat non tempor veniam aute amet ea fugiat nostrud sunt elit aute velit. Voluptate anim amet eiusmod ut dolor amet. Irure laborum elit in. Ex cupidatat mollit minim do pariatur proident ut anim fugiat elit ipsum dolor non incididunt.', '2022-02-07 17:18:46.130'),
(15, 3, 10, 1, 'Minim proident reprehenderit minim. Sunt pariatur dolore aliquip elit id amet consectetur aute cillum quis nulla. Fugiat ullamco consectetur.', '2022-02-19 14:36:02.756'),
(16, 4, 1, 1, 'Laboris enim duis tempor aliquip magna culpa incididunt. Lorem nisi officia labore enim proident cupidatat irure minim. Incididunt tempor incididunt quis tempor Lorem pariatur reprehenderit eu ad eiusmod.', '2022-02-01 00:12:35.521'),
(17, 4, 5, 3, 'Tempor laborum mollit aliqua Lorem nulla enim esse ex cupidatat.', '2022-02-06 22:48:00.687'),
(18, 4, 7, 4, 'Elit nostrud Lorem occaecat aliqua eiusmod quis ut consectetur cillum proident tempor occaecat. Occaecat culpa. Excepteur aute aliquip. Tempor cupidatat consequat nulla Lorem cillum ut do incididunt pariatur aliqua aliqua commodo consectetur.', '2022-02-02 18:15:16.268'),
(19, 4, 9, 5, 'Cupidatat aliqua ut laboris pariatur dolore. Nisi ipsum incididunt dolor veniam cupidatat ex eiusmod voluptate incididunt sint anim. Incididunt consectetur proident qui duis excepteur exercitation irure dolor enim sunt nulla deserunt tempor incididunt. Adipisicing magna consequat culpa dolore dolore dolore sunt ut nulla excepteur eu. Commodo veniam amet aliquip adipisicing.', '2022-02-08 01:07:51.625'),
(20, 5, 2, 5, 'Veniam elit consequat ad est. Nostrud id et occaecat adipisicing consectetur pariatur non dolore cupidatat commodo. Ullamco sint mollit occaecat consequat et.', '2022-02-17 23:22:43.130'),
(21, 5, 6, 3, 'Do officia Lorem Lorem occaecat qui cupidatat veniam esse culpa fugiat.', '2022-02-17 18:21:43.886'),
(22, 5, 8, 2, 'Fugiat do velit velit laborum esse reprehenderit laborum labore ea ad laboris. Voluptate ex sit ullamco in qui veniam aliquip magna Lorem consectetur voluptate labore. Eiusmod veniam tempor reprehenderit consectetur reprehenderit nulla in esse ut aute exercitation eiusmod dolore. Velit pariatur mollit commodo adipisicing dolor laborum consectetur aute.', '2022-02-18 20:20:10.496'),
(23, 5, 10, 1, 'Esse cupidatat proident qui ullamco. Fugiat consectetur dolore reprehenderit eiusmod. In nulla eiusmod velit duis pariatur laborum aliqua magna Lorem ea.', '2022-02-02 15:03:26.452'),
(24, 6, 3, 5, 'Enim duis aliqua ad labore duis laboris officia in fugiat. Elit ad excepteur dolor qui nulla nostrud esse amet excepteur cillum dolor reprehenderit id exercitation. Laborum sit consequat ea proident pariatur.', '2022-02-12 21:16:21.032'),
(25, 1, 6, 3, 'it\'s ok not bad', '2022-02-20 21:40:01.589'),
(32, 1, 7, 5, 'cillum nulla', '2022-02-21 01:18:44.987'),
(33, 1, 8, 5, 'elit esse', '2022-02-21 01:19:28.822');

-- --------------------------------------------------------

--
-- Table structure for table `Game`
--

CREATE TABLE `Game` (
  `id` int NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Game`
--

INSERT INTO `Game` (`id`, `name`) VALUES
(1, 'Arctico'),
(3, 'OlliOlli World'),
(2, 'PowerSlave Exhumed'),
(4, 'Rogue Tower'),
(5, 'Wanderer');

-- --------------------------------------------------------

--
-- Table structure for table `Session`
--

CREATE TABLE `Session` (
  `id` int NOT NULL,
  `gameId` int NOT NULL,
  `startedAt` datetime(3) NOT NULL,
  `duration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Session`
--

INSERT INTO `Session` (`id`, `gameId`, `startedAt`, `duration`) VALUES
(1, 1, '2022-02-19 21:14:23.344', 77),
(2, 1, '2022-02-16 08:11:51.774', 89),
(3, 2, '2022-02-09 10:48:53.129', 56),
(4, 2, '2022-02-12 21:31:48.697', 101),
(5, 3, '2022-02-03 21:47:17.338', 84),
(6, 3, '2022-02-13 02:29:38.666', 41),
(7, 4, '2022-02-17 18:37:10.309', 28),
(8, 4, '2022-02-06 17:38:16.878', 30),
(9, 5, '2022-02-02 15:38:58.262', 54),
(10, 5, '2022-02-03 09:51:18.493', 64);

-- --------------------------------------------------------

--
-- Table structure for table `SessionsOnUsers`
--

CREATE TABLE `SessionsOnUsers` (
  `userId` int NOT NULL,
  `sessionId` int NOT NULL,
  `assignedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `SessionsOnUsers`
--

INSERT INTO `SessionsOnUsers` (`userId`, `sessionId`, `assignedAt`) VALUES
(1, 1, '2022-02-20 21:20:50.024'),
(1, 2, '2022-02-20 21:20:50.024'),
(1, 3, '2022-02-20 21:20:50.024'),
(1, 4, '2022-02-20 21:20:50.024'),
(1, 5, '2022-02-20 21:20:50.024'),
(1, 6, '2022-02-20 21:20:50.024'),
(1, 7, '2022-02-20 21:20:50.024'),
(1, 8, '2022-02-20 21:20:50.024'),
(1, 9, '2022-02-20 21:20:50.024'),
(1, 10, '2022-02-20 21:20:50.024'),
(2, 1, '2022-02-20 21:20:50.032'),
(2, 3, '2022-02-20 21:20:50.032'),
(2, 5, '2022-02-20 21:20:50.032'),
(2, 7, '2022-02-20 21:20:50.032'),
(2, 9, '2022-02-20 21:20:50.032'),
(2, 10, '2022-02-20 21:20:50.032'),
(3, 2, '2022-02-20 21:20:50.037'),
(3, 4, '2022-02-20 21:20:50.037'),
(3, 6, '2022-02-20 21:20:50.037'),
(3, 7, '2022-02-20 21:20:50.037'),
(3, 8, '2022-02-20 21:20:50.037'),
(3, 10, '2022-02-20 21:20:50.037'),
(4, 1, '2022-02-20 21:20:50.047'),
(4, 3, '2022-02-20 21:20:50.047'),
(4, 5, '2022-02-20 21:20:50.047'),
(4, 7, '2022-02-20 21:20:50.047'),
(4, 8, '2022-02-20 21:20:50.047'),
(4, 9, '2022-02-20 21:20:50.047'),
(5, 1, '2022-02-20 21:20:50.053'),
(5, 2, '2022-02-20 21:20:50.053'),
(5, 4, '2022-02-20 21:20:50.053'),
(5, 6, '2022-02-20 21:20:50.053'),
(5, 8, '2022-02-20 21:20:50.053'),
(5, 10, '2022-02-20 21:20:50.053'),
(6, 1, '2022-02-20 21:20:50.057'),
(6, 3, '2022-02-20 21:20:50.057');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `email`, `name`) VALUES
(1, 'lian.longfeng@unity3d.com', 'Lian Longfeng'),
(2, 'Marina.Gottlieb27@gmail.com', 'Marina Gottlieb'),
(3, 'Raleigh.Wilkinson18@yahoo.com', 'Raleigh Wilkinson'),
(4, 'Carmen.Schmeler97@yahoo.com', 'Carmen Schmeler'),
(5, 'Rex.Runolfsson48@hotmail.com', 'Rex Runolfsson'),
(6, 'Drew_Boehm23@hotmail.com', 'Drew Boehm'),
(7, 'Rodolfo54@gmail.com', 'Rodolfo Goodwin');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('72164e12-8f1c-498f-9b27-02ef271ee57b', '179f72898f2f9902ca5409c544ee5da2e2d0919e036a0c08bf317ef6365408ac', '2022-02-20 21:20:46.573', '20220220185049_init', NULL, NULL, '2022-02-20 21:20:46.184', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Feedback`
--
ALTER TABLE `Feedback`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Feedback_authorId_sessionId_key` (`authorId`,`sessionId`),
  ADD KEY `Feedback_sessionId_fkey` (`sessionId`);

--
-- Indexes for table `Game`
--
ALTER TABLE `Game`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Game_name_key` (`name`);

--
-- Indexes for table `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Session_gameId_fkey` (`gameId`);

--
-- Indexes for table `SessionsOnUsers`
--
ALTER TABLE `SessionsOnUsers`
  ADD PRIMARY KEY (`userId`,`sessionId`),
  ADD KEY `SessionsOnUsers_sessionId_fkey` (`sessionId`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Feedback`
--
ALTER TABLE `Feedback`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `Game`
--
ALTER TABLE `Game`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Session`
--
ALTER TABLE `Session`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Feedback`
--
ALTER TABLE `Feedback`
  ADD CONSTRAINT `Feedback_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `Feedback_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Session`
--
ALTER TABLE `Session`
  ADD CONSTRAINT `Session_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `SessionsOnUsers`
--
ALTER TABLE `SessionsOnUsers`
  ADD CONSTRAINT `SessionsOnUsers_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `SessionsOnUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
