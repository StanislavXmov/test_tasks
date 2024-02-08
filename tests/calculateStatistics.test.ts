import { calculateStatistics, filmsData } from '../src/task/calculateStatistics';

const result = {
  moviesByGenre: {
    Action: 3,
    Drama: 2,
    Mystery: 1,
    Animation: 1,
    Horror: 1,
    Comedy: 1,
    Romance: 1,
    'Sci-Fi': 1,
    Crime: 1
  },
  longestMovie: {
    movie: 'Avengers: Endgame',
    duration: '3 hours 1 minute',
    genre: 'Action'
  },
  averageDurationByGenre: {
    Action: 155.7,
    Drama: 132,
    Mystery: 131,
    Animation: 118,
    Horror: 97,
    Comedy: 99,
    Romance: 128,
    'Sci-Fi': 148,
    Crime: 154
  },
  totalSeats: 1350,
  movieWithMostSeats: { movie: 'Avengers: Endgame', availableSeats: 150, genre: 'Action' },
  filteredMoviesByDuration: [
    {
      hall: 2,
      movie: 'The Lion King',
      genre: 'Animation',
      startTime: '10:00',
      duration: '1 hour 58 minutes',
      availableSeats: 100,
      soldSeats: 70,
      ticketPrice: 9
    },
    {
      hall: 2,
      movie: 'A Quiet Place Part II',
      genre: 'Horror',
      startTime: '16:00',
      duration: '1 hour 37 minutes',
      availableSeats: 100,
      soldSeats: 50,
      ticketPrice: 10
    },
    {
      hall: 3,
      movie: 'The Grand Budapest Hotel',
      genre: 'Comedy',
      startTime: '11:00',
      duration: '1 hour 39 minutes',
      availableSeats: 120,
      soldSeats: 100,
      ticketPrice: 8
    }
  ],
  sortedMoviesByDuration: [
    {
      hall: 1,
      movie: 'Avengers: Endgame',
      genre: 'Action',
      startTime: '09:00',
      duration: '3 hours 1 minute',
      availableSeats: 150,
      soldSeats: 120,
      ticketPrice: 10
    },
    {
      hall: 4,
      movie: 'Pulp Fiction',
      genre: 'Crime',
      startTime: '14:30',
      duration: '2 hours 34 minutes',
      availableSeats: 80,
      soldSeats: 40,
      ticketPrice: 8
    },
    {
      hall: 4,
      movie: 'The Dark Knight',
      genre: 'Action',
      startTime: '11:30',
      duration: '2 hours 32 minutes',
      availableSeats: 80,
      soldSeats: 70,
      ticketPrice: 9
    },
    {
      hall: 3,
      movie: 'Inception',
      genre: 'Sci-Fi',
      startTime: '17:00',
      duration: '2 hours 28 minutes',
      availableSeats: 120,
      soldSeats: 110,
      ticketPrice: 11
    },
    {
      hall: 4,
      movie: 'The Shawshank Redemption',
      genre: 'Drama',
      startTime: '17:30',
      duration: '2 hours 22 minutes',
      availableSeats: 80,
      soldSeats: 60,
      ticketPrice: 12
    },
    {
      hall: 2,
      movie: 'Black Widow',
      genre: 'Action',
      startTime: '13:00',
      duration: '2 hours 14 minutes',
      availableSeats: 100,
      soldSeats: 90,
      ticketPrice: 11
    },
    {
      hall: 1,
      movie: 'Knives Out',
      genre: 'Mystery',
      startTime: '15:00',
      duration: '2 hours 11 minutes',
      availableSeats: 150,
      soldSeats: 80,
      ticketPrice: 12
    },
    {
      hall: 3,
      movie: 'La La Land',
      genre: 'Romance',
      startTime: '14:00',
      duration: '2 hours 8 minutes',
      availableSeats: 120,
      soldSeats: 60,
      ticketPrice: 10
    },
    {
      hall: 1,
      movie: 'Joker',
      genre: 'Drama',
      startTime: '12:00',
      duration: '2 hours 2 minutes',
      availableSeats: 150,
      soldSeats: 100,
      ticketPrice: 8
    },
    {
      hall: 2,
      movie: 'The Lion King',
      genre: 'Animation',
      startTime: '10:00',
      duration: '1 hour 58 minutes',
      availableSeats: 100,
      soldSeats: 70,
      ticketPrice: 9
    },
    {
      hall: 3,
      movie: 'The Grand Budapest Hotel',
      genre: 'Comedy',
      startTime: '11:00',
      duration: '1 hour 39 minutes',
      availableSeats: 120,
      soldSeats: 100,
      ticketPrice: 8
    },
    {
      hall: 2,
      movie: 'A Quiet Place Part II',
      genre: 'Horror',
      startTime: '16:00',
      duration: '1 hour 37 minutes',
      availableSeats: 100,
      soldSeats: 50,
      ticketPrice: 10
    }
  ]
};

test('romanToInt', () => {
  expect(calculateStatistics(filmsData)).toStrictEqual(result);
});