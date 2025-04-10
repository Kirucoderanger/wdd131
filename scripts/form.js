const currentYear = document.querySelector("#currentYear");
const thisYear = new Date().getFullYear();
currentYear.innerHTML = thisYear;
const lastModified = document.querySelector("#lastModified");
let alastModif = new Date(document.lastModified);
lastModified.innerHTML = ("Last Updated: " + alastModif);

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//alert("onload the page to see the last modified date");
  // Get the select element by its ID
const selectElement = document.getElementById("product");

// Loop through the products array and create option elements
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id; // Set the product's id as the value of the option
  option.textContent = product.name; // Set the product's name as the text of the option
  selectElement.appendChild(option); // Append the option to the select element
});


