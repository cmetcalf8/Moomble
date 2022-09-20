const userInputEl = document.getElementById("userInput");
const api = userInputEl.value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '803769a760msh0b927317a3037b5p16a8f3jsnaab08108dfb1',
		'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
};

fetch(`https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${api}/0`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));