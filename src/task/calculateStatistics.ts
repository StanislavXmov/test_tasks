export const filmsData = [
  {
    hall: 1,
    movie: "Avengers: Endgame",
    genre: "Action",
    startTime: "09:00",
    duration: "3 hours 1 minute",
    availableSeats: 150,
    soldSeats: 120,
    ticketPrice: 10
  },
  {
    hall: 1,
    movie: "Joker",
    genre: "Drama",
    startTime: "12:00",
    duration: "2 hours 2 minutes",
    availableSeats: 150,
    soldSeats: 100,
    ticketPrice: 8
  },
  {
    hall: 1,
    movie: "Knives Out",
    genre: "Mystery",
    startTime: "15:00",
    duration: "2 hours 11 minutes",
    availableSeats: 150,
    soldSeats: 80,
    ticketPrice: 12
  },
  {
    hall: 2,
    movie: "The Lion King",
    genre: "Animation",
    startTime: "10:00",
    duration: "1 hour 58 minutes",
    availableSeats: 100,
    soldSeats: 70,
    ticketPrice: 9
  },
  {
    hall: 2,
    movie: "Black Widow",
    genre: "Action",
    startTime: "13:00",
    duration: "2 hours 14 minutes",
    availableSeats: 100,
    soldSeats: 90,
    ticketPrice: 11
  },
  {
    hall: 2,
    movie: "A Quiet Place Part II",
    genre: "Horror",
    startTime: "16:00",
    duration: "1 hour 37 minutes",
    availableSeats: 100,
    soldSeats: 50,
    ticketPrice: 10
  },
  {
    hall: 3,
    movie: "The Grand Budapest Hotel",
    genre: "Comedy",
    startTime: "11:00",
    duration: "1 hour 39 minutes",
    availableSeats: 120,
    soldSeats: 100,
    ticketPrice: 8
  },
  {
    hall: 3,
    movie: "La La Land",
    genre: "Romance",
    startTime: "14:00",
    duration: "2 hours 8 minutes",
    availableSeats: 120,
    soldSeats: 60,
    ticketPrice: 10
  },
  {
    hall: 3,
    movie: "Inception",
    genre: "Sci-Fi",
    startTime: "17:00",
    duration: "2 hours 28 minutes",
    availableSeats: 120,
    soldSeats: 110,
    ticketPrice: 11
  },
  {
    hall: 4,
    movie: "The Dark Knight",
    genre: "Action",
    startTime: "11:30",
    duration: "2 hours 32 minutes",
    availableSeats: 80,
    soldSeats: 70,
    ticketPrice: 9
  },
  {
    hall: 4,
    movie: "Pulp Fiction",
    genre: "Crime",
    startTime: "14:30",
    duration: "2 hours 34 minutes",
    availableSeats: 80,
    soldSeats: 40,
    ticketPrice: 8
  },
  {
    hall: 4,
    movie: "The Shawshank Redemption",
    genre: "Drama",
    startTime: "17:30",
    duration: "2 hours 22 minutes",
    availableSeats: 80,
    soldSeats: 60,
    ticketPrice: 12
  }
];

const getMinutes = (time: string) => {
  return Number(time.split(' ')[0]) * 60 + Number(time.split(' ')[2]);
}

type FilmData = typeof filmsData;

export const calculateStatistics = (data: FilmData) => {
  const countMoviesByGenre = (data: FilmData): Record<string, number> => {
    const genres: Record<string, number> = {};
    data.forEach(f => {
      if (genres[f.genre]) {
        genres[f.genre] += 1;
      } else {
        genres[f.genre] = 1;
      }
    });

    return genres;
  }

  const findLongestMovie = (data: FilmData) => {
    const movies = [...data];
    const [ movie ] = movies.sort((f1, f2) => getMinutes(f2.duration) - getMinutes(f1.duration));
    return {
      movie: movie.movie,
      duration: movie.duration,
      genre: movie.genre,
    }
  }

  const calculateAverageDurationByGenre = (data: FilmData) => {
    const genresDuration: Record<string, number> = {};
    const genres = countMoviesByGenre(data);
    data.forEach(f => {
      if (genresDuration[f.genre]) {
        genresDuration[f.genre] += getMinutes(f.duration);
      } else {
        genresDuration[f.genre] = getMinutes(f.duration);
      }
    });
    for (const genre in genres) {
      genresDuration[genre] = Number((genresDuration[genre] / genres[genre]).toFixed(1));
    }
    return genresDuration;
  }

  const calculateTotalSeats = (data: FilmData) => {
    return data.reduce((acc, f) => {
      return acc + f.availableSeats;
    }, 0);
  }

  const findMovieWithMostSeats = function (data: FilmData) {
    const movies = [...data];
    const [ movie ] = movies.sort((f1, f2) => f2.availableSeats - f1.availableSeats);
    return {
      movie: movie.movie,
      availableSeats: movie.availableSeats,
      genre: movie.genre,
    }
  }

  const filterMoviesByDuration = function (data: FilmData, duration: number = 120) {
    const movies = [...data];
    return movies.filter(f => getMinutes(f.duration) <= duration);
  }

  const sortMoviesByDuration = function (data: FilmData) {
    const movies = [...data];
    return movies.sort((f1, f2) => getMinutes(f2.duration) - getMinutes(f1.duration));
  }

  return {
    moviesByGenre: countMoviesByGenre(data),
    longestMovie: findLongestMovie(data),
    averageDurationByGenre: calculateAverageDurationByGenre(data),
    totalSeats: calculateTotalSeats(data),
    movieWithMostSeats: findMovieWithMostSeats(data),
    filteredMoviesByDuration: filterMoviesByDuration(data),
    sortedMoviesByDuration: sortMoviesByDuration(data),
  }
};