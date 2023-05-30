
const body = document.querySelector("body"),
modeToggle = document.body.querySelector(".mode-toggle");

sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");


modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    modeToggle.style.display = modeToggle.style.display === 'none' ? 'block' : 'none';
})

function validarLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "test" && password === "pass") {
        location.href = "index.html";
    }
}
   