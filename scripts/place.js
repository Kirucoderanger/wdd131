/*Purpose to Get the-date and display it in various formats*/
//alert(document.lastModified);
const currentYear = document.querySelector("#currentYear");
const thisYear = new Date().getFullYear();
currentYear.innerHTML = thisYear;
const lastModified = document.querySelector("#lastModified");
let alastModif = new Date(document.lastModified);
lastModified.innerHTML = ("Last Updated: " + alastModif);



/*
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
*/


// Define static temperature and wind speed (in Fahrenheit and mph)
const temperature = 40; // Example: 40°F
const windSpeed = 5; // Example: 5 mph

// Function to calculate wind chill factor
function calculateWindChill(temp, wind) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(wind, 0.16) +
    0.4275 * temp * Math.pow(wind, 0.16)
  ).toFixed(1); // Returns a rounded result to 1 decimal place
}
//use this for Celsius
/*
const temperature = 8; // Example: 8°C
const windSpeed = 6; // Example: 6 km/h

function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  ).toFixed(1); // Celsius formula
}

if (temperature <= 10 && windSpeed > 4.8) { ... } // Adjust condition

*/

// Function to update the weather section
function displayWindChill() {
  const windChillElement = document.getElementById("windchill"); // Ensure an element with id "windchill" exists

  if (temperature <= 50 && windSpeed > 3) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
  } else {
    windChillElement.textContent = "N/A"; // Not applicable if conditions are not met
  }
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", displayWindChill);
