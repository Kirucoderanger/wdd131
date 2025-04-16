
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
