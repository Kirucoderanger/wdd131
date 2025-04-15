
// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

//  Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. 
// If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. 

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits+1;
} else {
	visitsDisplay.textContent = `This is the first review.`;
}

//  increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// A client can view the localStorage data using the Applications panel in the browsers's DevTools - 
// check it out on any major site.
const message = `Thank you for the feedback, This is the ${numVisits}th feedback.`;
console.log(message);
alert(message);
// The message is also displayed in the console for debugging purposes.