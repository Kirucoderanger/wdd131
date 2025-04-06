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



const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area:  116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Billings Montana",
      location: "Billings, Montana, United States",
      dedicated: "1999, November, 21",
      area:  10000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/10-Billings-Montana-Temple-1566343.jpg"
    },
    {
      templeName: "Brigham City Utah",
      location: "Brigham City, Utah, United States",
      dedicated: "2012, May, 6",
      area:  10000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brigham-city-utah/400x250/brigham-city-temple-lds-1027480-wallpaper.jpg"
    },
    {
      templeName: "Tucson Arizona",
      location: "Tucson, Arizona, United States",
      dedicated: "2017, December, 10",
      area:  10000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-exterior-1929273-wallpaper.jpg"
    },
    {
      templeName: "Hamilton New Zealand",
      location: "Hamilton, New Zealand",
      dedicated: "1958, April,20",
      area: 45251,
      imageUrl : 
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/400x250/hamilton_new_zealand_temple_detail_942155_2400x1200.jpg"
      
    },
    {
      templeName: "Salt Lake City Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253016,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
    },
    {
      templeName: "Palmyra New York",
      location: "Palmyra, New York, United States",
      dedicated: "2000, April, 6",
      area: 10000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-temple-lds-830813-wallpaper.jpg"
    },
    {
      templeName: "Bountiful Utah",
      location: "Bountiful, Utah, United States",
      dedicated: "1995, June, 6",
      area: 10000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766347-wallpaper.jpg"
    }
    // Add more temple objects here...

  ];

  function displayTemples() {
    const templeContainer = document.querySelector("#templeContainer");

    temples.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy";

      const name = document.createElement("h2");
      name.textContent = temple.templeName;

      const location = document.createElement("p");
      location.textContent = `Location: ${temple.location}`;

      const dedicated = document.createElement("p");
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;

      const area = document.createElement("p");
      area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);

      templeContainer.appendChild(card);
    });

    const filterButtons = document.querySelectorAll("a");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        templeContainer.innerHTML = ""; // Clear the current display

        let filteredTemples = temples;

        if (filter === "old") {
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (filter === "new") {
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        } else if (filter === "large") {
          filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filter === "small") {
          filteredTemples = temples.filter(temple => temple.area < 10000);
        }

        filteredTemples.forEach(temple => {
          const card = document.createElement("div");
          card.classList.add("temple-card");

          const img = document.createElement("img");
          img.src = temple.imageUrl;
          img.alt = temple.templeName;
          img.loading = "lazy";

          const name = document.createElement("h2");
          name.textContent = temple.templeName;

          const location = document.createElement("p");
          location.textContent = `Location: ${temple.location}`;

          const dedicated = document.createElement("p");
          dedicated.textContent = `Dedicated: ${temple.dedicated}`;

          const area = document.createElement("p");
          area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedicated);
          card.appendChild(area);

          templeContainer.appendChild(card);
        });
      });
    });
  }

  // Call the function
  displayTemples();