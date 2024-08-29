-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 30 Sie 2024, 00:40
-- Wersja serwera: 10.4.14-MariaDB
-- Wersja PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `smartroom`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `distance`
--

CREATE TABLE `distance` (
  `id` int(11) NOT NULL,
  `value` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL,
  `date` date NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `distance`
--

INSERT INTO `distance` (`id`, `value`, `date`, `time`) VALUES
(17, 'Wykryto ruch', '2024-08-29', '19:25:40'),
(18, 'Wykryto ruch', '2024-08-29', '20:12:40');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `humidity`
--

CREATE TABLE `humidity` (
  `id` int(11) NOT NULL,
  `value` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL,
  `date` date NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `locked`
--

CREATE TABLE `locked` (
  `id` int(11) NOT NULL,
  `value` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL,
  `date` date NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `locked`
--

INSERT INTO `locked` (`id`, `value`, `date`, `time`) VALUES
(9, 'Otwarto', '2024-08-29', '18:31:42'),
(10, 'Otwarto', '2024-08-29', '18:32:26'),
(11, 'Otwarto', '2024-08-29', '18:36:05'),
(12, 'Otwarto', '2024-08-29', '18:36:10'),
(13, 'Otwarto', '2024-08-29', '18:38:17');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `loudness`
--

CREATE TABLE `loudness` (
  `id` int(11) NOT NULL,
  `value` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL,
  `date` date NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `moisture`
--

CREATE TABLE `moisture` (
  `id` int(11) NOT NULL,
  `value` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL,
  `date` date NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `moisture`
--

INSERT INTO `moisture` (`id`, `value`, `date`, `time`) VALUES
(1, 'Zbyt sucha gleba', '2024-08-29', '19:06:23');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `temperature`
--

CREATE TABLE `temperature` (
  `id` int(11) NOT NULL,
  `value` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL,
  `date` date NOT NULL,
  `time` varchar(50) COLLATE utf8mb4_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `temperature`
--

INSERT INTO `temperature` (`id`, `value`, `date`, `time`) VALUES
(726, '27.00', '2024-08-30', '00:12:00');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `distance`
--
ALTER TABLE `distance`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `humidity`
--
ALTER TABLE `humidity`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `locked`
--
ALTER TABLE `locked`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `loudness`
--
ALTER TABLE `loudness`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `moisture`
--
ALTER TABLE `moisture`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `temperature`
--
ALTER TABLE `temperature`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `distance`
--
ALTER TABLE `distance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT dla tabeli `humidity`
--
ALTER TABLE `humidity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=725;

--
-- AUTO_INCREMENT dla tabeli `locked`
--
ALTER TABLE `locked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `loudness`
--
ALTER TABLE `loudness`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `moisture`
--
ALTER TABLE `moisture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `temperature`
--
ALTER TABLE `temperature`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=727;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
