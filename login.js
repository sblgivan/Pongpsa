document.getElementById("loginButton").addEventListener("click", function() {
    // Simple login logic (can be enhanced)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        document.getElementById("disclaimer").style.display = "block";
    } else {
        alert("Please enter valid credentials");
    }
});

document.getElementById("proceedButton").addEventListener("click", function() {
    window.location.href = "index.html";  // Redirect to the game
});
