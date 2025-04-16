if (window.location.pathname === '/spadeJS/index.html') {
    // Manipulate index page
        
    
    const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
    
            themeToggle.addEventListener('click', () => {
                if (body.classList.contains('light-mode')) {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                    themeToggle.textContent = 'Light Mode';
                } else {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                    themeToggle.textContent = 'Dark Mode';
                }
            });
            // Set dark mode as the default theme
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Light Mode';
            
            const hamButton = document.querySelector('#menu');
            const navigation = document.querySelector('.navigation');
            
            hamButton.addEventListener('click', () => {
                navigation.classList.toggle('open');
                hamButton.classList.toggle('open');
            });

    const temples = [
        
        {
            templeName: "coding logo",
            
            imageUrl:
            "/spadeJS/images/code.png"
          },
        {
          templeName: "Learn Interactive JavaScript",
          location: "Dive into hands-on JavaScript coding",
          dedicated: "Exercise and master the DOM",
          area: "",
          
        },
        
        {
          templeName: "Why Choose SpadeJS?",
          location: "Discover what makes our platform ideal for learning interactive JavaScript",
          dedicated: "",
          area: "",
                  },
        {
            templeName: "Interactive JavaScript Playground",
            location: "Practice with real-time coding challenges and gain instant feedback",
            dedicated: "",
            area: "",
                      },
          {
            templeName: "Track Your Progress",
            location: "Monitor your learning journey and celebrate your achievements",
            
            dedicated: "",
            area: "",
                     },
            {
            templeName: "Track Your Progress",
            location: "Monitor your learning journey and celebrate your achievements",
            
            dedicated: "",
            area: "",
                        }
        
        // Add more temple objects here...
    
      ];
    

    function displayTemples() {
        const templeContainer = document.querySelector("#templeContainer");
        
        

        
       
        

        let cards = 1;
        temples.forEach(temple => {
          const card = document.createElement("div");
            card.id = "card" + cards;
            card.className = "card" + cards;
            
            cards++; 
          card.classList.add("temple-card");
          card.style.borderRadius = "8px";
            card.style.width = "auto";
            card.style.height = "auto";
            
            card.style.border = "1px solid #ccc";
            card.style.borderRadius = "8px";
            card.style.overflow = "hidden";
            card.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            card.style.margin = "20px";
           
            card.style.verticalAlign = "top";
            card.style.textAlign = "center";
            
            card.style.padding = "0px";
            card.style.boxSizing = "border-box";
            card.style.transition = "transform 0.2s, box-shadow 0.2s";
            card.style.cursor = "pointer";
            card.style.position = "relative";
            card.style.textDecoration = "none";
            
            card.style.fontFamily = "Arial, sans-serif";
            card.style.fontSize = "24px";
            card.style.lineHeight = "1.5";
            
           
        if (temple.imageUrl) {
    
          const img = document.createElement("img");
          img.src = temple.imageUrl;
          img.alt = temple.templeName;
          img.loading = "lazy";
        
        
    
         
          
    
          card.appendChild(img);
         
          
    
          templeContainer.appendChild(card);
        }
        else{
            const name = document.createElement("h1");
          name.textContent = temple.templeName;
    
          const location = document.createElement("p");
          location.textContent = ` ${temple.location}`;
    
          const dedicated = document.createElement("p");
          dedicated.textContent = ` ${temple.dedicated}`;
    
          const area = document.createElement("p");
          area.textContent = ` ${temple.area.toLocaleString()} `;
    
          //card.appendChild(img);
          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedicated);
          card.appendChild(area);
    
          templeContainer.appendChild(card);

        }
        });
        

    }

    
      displayTemples();

    // Manipulate index page
  } 


  
  
  
  else if (window.location.pathname === '/spadeJS/tutorials.html') {
    function runCode() {
        let code = document.getElementById("codeEditor").value;
        try {
            let result = eval(code);
            document.getElementById("output").innerText = result;
        } catch (error) {
            document.getElementById("output").innerText = "Error: " + error.message;
        }
    }
    
    const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
    
            themeToggle.addEventListener('click', () => {
                if (body.classList.contains('light-mode')) {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                    themeToggle.textContent = 'Light Mode';
                } else {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                    themeToggle.textContent = 'Dark Mode';
                }
            });
            // Set dark mode as the default theme
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Light Mode';
            
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
    // Manipulate about page
}

else if (window.location.pathname === '/spadeJS/playground.html') {
    function runCode() {
        let code = document.getElementById("codeEditor").value;
        try {
            let result = eval(code);
            document.getElementById("output").innerText = result;
        } catch (error) {
            document.getElementById("output").innerText = "Error: " + error.message;
        }
    }
    
    const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
    
            themeToggle.addEventListener('click', () => {
                if (body.classList.contains('light-mode')) {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                    themeToggle.textContent = 'Light Mode';
                } else {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                    themeToggle.textContent = 'Dark Mode';
                }
            });
            // Set dark mode as the default theme
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Light Mode';
            
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
    // Manipulate about page
}

else if (window.location.pathname === '/spadeJS/forum.html') {
    function runCode() {
        let code = document.getElementById("codeEditor").value;
        try {
            let result = eval(code);
            document.getElementById("output").innerText = result;
        } catch (error) {
            document.getElementById("output").innerText = "Error: " + error.message;
        }
    }
    
    const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
    
            themeToggle.addEventListener('click', () => {
                if (body.classList.contains('light-mode')) {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                    themeToggle.textContent = 'Light Mode';
                } else {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                    themeToggle.textContent = 'Dark Mode';
                }
            });
            // Set dark mode as the default theme
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Light Mode';
            
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    const products = [
        {
          id: "Home-Page",
          name: "home page",
          
          averagerating: 4.5
        },
        {
          id: "Tutorials-Page",
          name: "tutorials page",
          
          averagerating: 4.7
        },
        {
          id: "Playground-Page",
          name: "playground page",
          
          averagerating: 3.5
        },
        {
          id: "Challenge-Page",
          name: "challenge page",
          
          averagerating: 3.9
        },
        {
          id: "Forum-Page",
          name: "forum page",
          
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
    
}

else if (window.location.pathname === '/spadeJS/challenges.html') {
    function runCode() {
        let code = document.getElementById("codeEditor").value;
        try {
            let result = eval(code);
            document.getElementById("output").innerText = result;
        } catch (error) {
            document.getElementById("output").innerText = "Error: " + error.message;
        }
    }
    
    const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
    
            themeToggle.addEventListener('click', () => {
                if (body.classList.contains('light-mode')) {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                    themeToggle.textContent = 'Light Mode';
                } else {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                    themeToggle.textContent = 'Dark Mode';
                }
            });
            // Set dark mode as the default theme
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Light Mode';
            
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });


   
    
    
}
