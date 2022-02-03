// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let movieDirectors = movies.map((movie) => movie.director);
  return movieDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const filterFunc = (movie) => {
  return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
};

function howManyMovies(movies) {
  return movies.filter(filterFunc).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const result = arr.reduce(function (accumulator, movie) {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);
  return +(result / arr.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const dramaMovies = arr.filter(
    (movie) => movie.score && movie.genre.includes('Drama')
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const result = dramaMovies.reduce(function (accumulator, movie) {
    return accumulator + movie.score;
  }, 0);
  return +(result / dramaMovies.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let output = array.sort(function (a, b) {
    if (a.year - b.year !== 0) {
      console.log(a.year - b.year);
      return a.year - b.year;
    } else {
      return a.title > b.title ? 1 : -1;
    }
  });

  return [...sortedArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
