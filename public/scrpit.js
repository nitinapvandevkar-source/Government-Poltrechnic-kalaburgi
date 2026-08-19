const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const username = document
        .getElementById("username")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value
        .trim();

    try {

        const response = await fetch("/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (data.success) {

            loginMessage.textContent =
                "Login successful!";

            loginMessage.style.color = "green";

            // Save student information
            localStorage.setItem("studentName", data.name);
            localStorage.setItem("studentUsername", data.username);

            // Open student dashboard in a new tab
            window.open("dashboard.html", "_blank");

        } else {

            loginMessage.textContent =
                "Invalid username or password.";

            loginMessage.style.color = "red";
        }

    } catch (error) {

        console.error(error);

        loginMessage.textContent =
            "Cannot connect to server.";

        loginMessage.style.color = "red";
    }
});