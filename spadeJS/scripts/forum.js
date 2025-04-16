
  
    
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
    
