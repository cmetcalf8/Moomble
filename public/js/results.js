const userInputEl = document.querySelector(".form-input");

let search = document.querySelector(".search-form");

const results = (event) => {
	event.preventDefault();
	zipCode = userInputEl.value;
	fetch(`/api/results/${zipCode}`)
	document.location.replace(`/api/results/${zipCode}`)
}

search.addEventListener('submit', results);