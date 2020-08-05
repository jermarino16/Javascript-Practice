const startAddMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const deleteMovieModal = document.getElementById("delete-modal");

const toggleMovieModal = () => {
  addMovieModal.classList.add("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
