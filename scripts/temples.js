/*Purpose to Get the-date and display it in various formats*/
//alert(document.lastModified);
const currentYear = document.querySelector("#currentYear");
const thisYear = new Date().getFullYear();
currentYear.innerHTML = thisYear;
const lastModified = document.querySelector("#lastModified");
let alastModif = new Date(document.lastModified);
lastModified.innerHTML = ("Last Updated: " + alastModif);




const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



