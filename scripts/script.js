
var dark = JSON.parse(localStorage.getItem('dark'));; 


const body = document.querySelector("body"),
modeToggle = document.body.querySelector(".mode-toggle");

sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

if (dark && body.className != "dark") {
    body.classList.toggle("dark");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (dark) {
        dark = false;
    } else {
        dark = true;
    }
    localStorage.setItem('dark', JSON.stringify(dark));
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    modeToggle.style.display = modeToggle.style.display === 'none' ? 'block' : 'none';
})

// função para validar o login
//TODO: diferentes logins
function validarLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "test" && password === "pass") {
        location.href = "index.html";
    }
}

function calcularTotalItens() {
    var total = 0;

    // Carrega os itens do localStorage
    var storedItems = JSON.parse(localStorage.getItem('items'));

    if (storedItems) {
        for (var i = 0; i < storedItems.length; i++) {
            var item = storedItems[i];
            total += parseInt(item.quantity);
        }
    }

    // Atualiza o conteúdo da div com o total de itens
    var totalItensElement = document.getElementById('totalItens');
    totalItensElement.textContent = total;

    return total;
}

// Exemplo de uso
var totalItens = calcularTotalItens();
console.log("Total de Itens:", totalItens);

   