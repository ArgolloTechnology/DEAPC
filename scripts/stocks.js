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

    for (var i = 0; i < items.length; i++) {
        if (items[i].name === itemName) item[i].quantity = itemQuantity;
    }

    // Adiciona o item ao array de itens
    items.push(item);

    // Limpa os campos do formul�rio
    itemNameInput.value = '';
    itemQuantityInput.value = '';

    // Atualiza a tabela
    renderTable();
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
    actionsHeader.textContent = 'Admin';
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
        var editButton = document.createElement('button');
        editButton.textContent = 'Remover';
        editButton.dataset.index = i;
        editButton.addEventListener('click', editItem);
        actionsCell.appendChild(editButton);
        row.appendChild(actionsCell);

        table.appendChild(row);
    }
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

    // Atualiza a tabela
    renderTable();
}

// Event listener para o evento de submit do formul�rio
form.addEventListener('submit', addItem);

// Renderiza a tabela inicialmente
renderTable();