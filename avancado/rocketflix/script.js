document.addEventListener("DOMContentLoaded", function () {

    const apiKey = "974c297c605892db3f21dfe27d7e74a5" ;

    const findMovieButton = document.getElementById("find-movie-btn");
    const movieInfo = document.getElementById("movie-info");
    const movieImage = document.getElementById("movie-img");
    const movieTitle = document.getElementById("movie-title");
    const movieDescription = document.getElementById("movie-description");

    findMovieButton.addEventListener("click", async function () {

        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
            const data = await response.json();
            const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];

            movieImage.src = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
            movieTitle.textContent = randomMovie.title;
            movieDescription.textContent = randomMovie.overview;

            movieInfo.style.display = "flex";
            movieInfo.style.alignItems = "flex-start";
            movieInfo.style.justifyContent = "center";
            movieInfo.style.gap = "2em";

        } catch (error) {
            console.error('Not Found', error);
        }
    });
});
