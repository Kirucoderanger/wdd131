function runCode() {
    let code = document.getElementById("codeEditor").value;
    try {
        let result = eval(code);
        document.getElementById("output").innerText = result;
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error.message;
    }
}

/*
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling effect
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let target = this.getAttribute("href");
            document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Playground: Run JavaScript Code
    const runButton = document.querySelector("button");
    if (runButton) {
        runButton.addEventListener("click", function() {
            let code = document.getElementById("codeEditor").value;
            let outputDiv = document.getElementById("output");

            try {
                let result = eval(code);
                outputDiv.innerHTML = `<span style="color: #00C9A7;">${result}</span>`;
            } catch (error) {
                outputDiv.innerHTML = `<span style="color: red;">Error: ${error.message}</span>`;
            }

            // Animate output
            outputDiv.style.opacity = 0;
            setTimeout(() => {
                outputDiv.style.opacity = 1;
            }, 200);
        });
    }
});*/
