export function filterMovies(movies, request, short) {
  return movies.filter((movie) => {
    const movieRU = String(movie.nameRU).toLowerCase().trim();
    const movieEN = String(movie.nameEN).toLowerCase().trim();
    const userQuery = request.toLowerCase().trim();

    const matchesQuery = movieRU.includes(userQuery) || movieEN.includes(userQuery);
    const matchesDuration = !short || movie.duration <= 40;

    return matchesQuery && matchesDuration;
  });
}