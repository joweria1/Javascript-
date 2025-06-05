window.onload = function () {
  // Parse URL parameters
  let params = new URLSearchParams(window.location.search);
  let selectedLanguage = params.get("language");
  let selectedGenre = params.get("genre");

  // Movie data URL
  let url =
    "https://storage.googleapis.com/kagglesdsdata/datasets/2481753/4209735/top_rated_movies.json?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20241206%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241206T193011Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=992da6f4c35e5770e645fb46147ada3ebc530b4e4d90e24bff7a3bbe41182bd4282e686150cfba09aa09ecc28a25fcc8b1635d19f04b466e315282a90f74428bf29d91234c27b3ea61fb971dfc9d461d067c285b72bcd02da898fc9225f276c2dc29ae682e5cb603a96d68d7a97a2ff9998a1b26475ce1896db57928b82c1e14e67800d6afe33d63b9279033bbd535865a9a9db817577763b1bfcff8e78a377ab7d027d7f56f0f5bd550e0e079dafc3441e9143532a6223ba19adba6b96a3126707693f479d538f3914aff37f6c27973090b8a6c8e6b832b8d66073a1d8fc0c83e661606c7a6566f728b6ee4df06ce597e13ff63f995bf32698c5e9ab12812ad";

  // Fetch and filter movies
  $.getJSON(url, function (result) {
    let movies = result.results;
    let filteredMovies = movies.filter(
      (movie) =>
        movie.original_language === selectedLanguage &&
        movie.genre_ids.includes(parseInt(selectedGenre))
    );

    // Display filtered results
    let output = document.getElementById("output");
    let noMatch = document.getElementById("noMatch");
    if (filteredMovies.length > 0) {
      filteredMovies.forEach((movie) => {
        output.innerHTML += `
                    <div class="movieDesc">
                        <img src="${
                          "https://image.tmdb.org/t/p/original" +
                          movie.poster_path
                        }" alt="${
          movie.original_title
        }" style="width:300px;" id="image">
                        <br><h1 id="movieTitle">${movie.original_title}</h1>
                        <br><p id="rating"><strong>Rating:</strong> ${
                          movie.vote_average
                        }</p>
                        <br><p id="overview"><strong>Overview:</strong><br> ${
                          movie.overview
                        } </p>
                    </div>
                `;
      });
    } else {
      noMatch.innerHTML = "No movies found matching your criteria.";
    }
  });
};
