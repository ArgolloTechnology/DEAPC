// Array para armazenar os itens
var items = [];

// Refer�ncias aos elementos do formul�rio e da tabela
var form = document.getElementById('item-form');
var itemNameInput = document.getElementById('item-name');
var itemQuantityInput = document.getElementById('item-quantity');
var table = document.getElementById('item-table');

// Fun��o para adicionar um item
function addItem(event) {
    event.preventDefault(); // Evita que o formul�rio seja enviado

    // Obt�m os valores do formul�rio
    var itemName = itemNameInput.value;
    var itemQuantity = itemQuantityInput.value;

    // Cria um objeto item
    var item = {
        name: itemName,
        quantity: itemQuantity
    };

    // Adiciona o item ao array de itens
    items.push(item);

    // Limpa os campos do formul�rio
    itemNameInput.value = '';
    itemQuantityInput.value = '';

    // Salva os itens no localStorage
    saveItems();

    // Atualiza a tabela
    renderTable();
}

// Fun��o para editar um item
function editItem(event) {
    var index = event.target.dataset.index;

    // Obt�m o item do array
    var item = items[index];

    // Preenche os campos do formul�rio com os valores do item
    itemNameInput.value = item.name;
    itemQuantityInput.value = item.quantity;

    // Remove o item do array
    items.splice(index, 1);

    // Salva os itens no localStorage
    saveItems();

    // Atualiza a tabela
    renderTable();
}

// Fun��o para excluir um item
function deleteItem(event) {
    var index = event.target.dataset.index;

    // Remove o item do array
    items.splice(index, 1);

    // Salva os itens no localStorage
    saveItems();

    // Atualiza a tabela
    renderTable();
}

// Fun��o para atualizar a quantidade de um item
function updateQuantity(event) {
    var index = event.target.dataset.index;
    var newQuantity = prompt('Digite a nova quantidade:');

    // Atualiza a quantidade do item no array
    if (newQuantity !== null) {
        items[index].quantity = newQuantity;
    }

    // Salva os itens no localStorage
    saveItems();

    // Atualiza a tabela
    renderTable();
}

function rename(event) {
    var index = event.target.dataset.index;
    var newName = prompt('novo nome:');

    // Atualiza a quantidade do item no array
    if (newName !== null) {
        items[index].name = newName;
    }

    // Atualiza a tabela
    renderTable();
}

// Fun��o para salvar os itens no localStorage
function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

// Fun��o para carregar os itens do localStorage
function loadItems() {
    var storedItems = localStorage.getItem('items');
    if (storedItems) {
        items = JSON.parse(storedItems);
    }
}

// Fun��o para renderizar a tabela
function renderTable() {
    // Limpa o conte�do da tabela
    table.innerHTML = '';

    // Cabe�alho da tabela
    var headerRow = document.createElement('tr');
    var nameHeader = document.createElement('th');
    nameHeader.textContent = 'Nome do Item';
    headerRow.appendChild(nameHeader);
    var quantityHeader = document.createElement('th');
    quantityHeader.textContent = 'Quantidade';
    headerRow.appendChild(quantityHeader);
    var actionsHeader = document.createElement('th');
    actionsHeader.textContent = 'A��es';
    headerRow.appendChild(actionsHeader);
    table.appendChild(headerRow);

    // Linhas da tabela
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        var row = document.createElement('tr');

        var nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        var quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        var actionsCell = document.createElement('td');
        var updateButton = document.createElement('button');
        updateButton.textContent = 'Renomear';
        updateButton.dataset.index = i;
        updateButton.addEventListener('click', rename);
        actionsCell.appendChild(updateButton);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.dataset.index = i;
        deleteButton.addEventListener('click', deleteItem);
        actionsCell.appendChild(deleteButton);

        var updateButton = document.createElement('button');
        updateButton.textContent = 'Atualizar Quantidade';
        updateButton.dataset.index = i;
        updateButton.addEventListener('click', updateQuantity);
        actionsCell.appendChild(updateButton);

        row.appendChild(actionsCell);

        table.appendChild(row);
    }
}

// Event listener para o evento de submit do formul�rio
form.addEventListener('submit', addItem);

// Carrega os itens do localStorage
loadItems();

// Renderiza a tabela inicialmente
renderTable();