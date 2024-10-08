const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", function () {
	const inputKeyword = document.querySelector(".input-keyword");
	fetch("http://www.omdbapi.com/?apikey=c7a6010f&s=" + inputKeyword.value)
		.then((respons) => respons.json())
		.then((respons) => {
			const movies = respons.Search;
			let cards = "";
			movies.forEach((m) => {
				cards += showCard(m);
			});

			const movieContainer = document.querySelector(".movie-container");
			movieContainer.innerHTML = cards;

			const modalDetailButton = document.querySelectorAll(".modal-detail-button");
			modalDetailButton.forEach((btn) => {
				btn.addEventListener("click", function () {
					const imdbid = this.dataset.imdbid;
					fetch("http://www.omdbapi.com/?apikey=c7a6010f&i=" + imdbid)
						.then((respons) => respons.json())
						.then((m) => {
							const movieDetails = showMovieDetail(m);
							const modalBody = document.querySelector(".modal-body");
							modalBody.innerHTML = movieDetails;
						});
				});
			});
		});
});

function showCard(m) {
	return /*html*/ `<div class="col-md-3 my-3">
					<div class="card">
						<img src="${m.Poster}" class="card-img-top" />
						<div class="card-body">
							<h5 class="card-title">${m.Title}</h5>
					    <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
							<a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
			        data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">show Details</a>
						</div>
					</div>
				</div>`;
}

function showMovieDetail(m) {
	return /*html*/ `<div class="container-fluid">
                    <div class="row">
                      <div class="col-md-2">
                        <img src="${m.Poster}" class="img-fluid" />
                      </div>
                      <div class="col-md">
                        <ul class="list-group">
                          <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                          <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                          <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                          <li class="list-group-item"><strong>Writers : </strong> ${m.Writer}</li>
                          <li class="list-group-item">
                            <strong>Plot : </strong> <br />
                            ${m.Plot}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>`;
}
