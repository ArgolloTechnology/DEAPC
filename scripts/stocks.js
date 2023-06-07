// Array para armazenar os itens
var items = [];

// Referências aos elementos do formulário e da tabela
var form = document.getElementById('item-form');
var itemNameInput = document.getElementById('item-name');
var itemQuantityInput = document.getElementById('item-quantity');
var table = document.getElementById('item-table');

// Função para adicionar um item
function addItem(event) {
    event.preventDefault(); 
    var itemName = itemNameInput.value;
    var itemQuantity = itemQuantityInput.value;
    var item = {
        name: itemName,
        quantity: itemQuantity
    };

    var isNew = true;

    for (var i = 0; i < items.length; i++) {
        if (items[i].name === item.name) {
            items[i] = item;
            isNew = false;
        }
    }

    if(isNew)items.push(item);

    itemNameInput.value = '';
    itemQuantityInput.value = '';

    saveItems();

    renderTable();

    hideWindow();
}

// Função para editar um item
function editItem(event) {
    var index = event.target.dataset.index;

    var item = items[index];

    itemNameInput.value = item.name;
    itemQuantityInput.value = item.quantity;

    items.splice(index, 1);

    saveItems();

    renderTable();
}

// Função para excluir um item
function deleteItem(event) {
    var index = event.target.dataset.index;

    items.splice(index, 1);

    saveItems();

    renderTable();
}

// Função para atualizar a quantidade de um item
function updateQuantity(event) {
    var index = event.target.dataset.index;
    var newQuantity = prompt('Digite a nova quantidade:');

    if (newQuantity !== null) {
        items[index].quantity = newQuantity;
    }

    saveItems();

    // Atualiza a tabela
    renderTable();
}

function rename(event) {
    var index = event.target.dataset.index;
    var newName = prompt('novo nome:');

    if (newName !== null) {
        items[index].name = newName;
    }

    renderTable();
}

// Função para salvar os itens no localStorage
function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

// Função para carregar os itens do localStorage
function loadItems() {
    var storedItems = localStorage.getItem('items');
    if (storedItems) {
        items = JSON.parse(storedItems);
    }
}

function renderTable() {
    table.innerHTML = '';

    var headerRow = document.createElement('tr');
    var nameHeader = document.createElement('th');
    nameHeader.textContent = 'Nome do Item';
    headerRow.appendChild(nameHeader);
    var quantityHeader = document.createElement('th');
    quantityHeader.textContent = 'Quantidade';
    headerRow.appendChild(quantityHeader);
    var actionsHeader = document.createElement('th');
    actionsHeader.textContent = 'Acoes';
    headerRow.appendChild(actionsHeader);
    table.appendChild(headerRow);

    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        var row = document.createElement('tr');

        var nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        var quantityCell = document.createElement('td');

        var quantityContainer = document.createElement('div');
        quantityContainer.className = 'quantityContainer';

        var decreaseButton = document.createElement('button');
        decreaseButton.className = 'button';
        decreaseButton.textContent = '-';
        decreaseButton.dataset.index = i;
        decreaseButton.addEventListener('click', decreaseQuantity);
        quantityContainer.appendChild(decreaseButton);

        var quantityValue = document.createElement('span');
        quantityValue.textContent = item.quantity;
        quantityContainer.appendChild(quantityValue);

        var increaseButton = document.createElement('button');
        increaseButton.className = 'button';
        increaseButton.textContent = '+';
        increaseButton.dataset.index = i;
        increaseButton.addEventListener('click', increaseQuantity);
        quantityContainer.appendChild(increaseButton);

        quantityCell.appendChild(quantityContainer);
        row.appendChild(quantityCell);

        var actionsCell = document.createElement('td');

        var divButtons = document.createElement('div');

        var renameButton = document.createElement('button');
        renameButton.className = 'button';
        renameButton.textContent = 'Renomear';
        renameButton.dataset.index = i;
        renameButton.addEventListener('click', rename);
        divButtons.appendChild(renameButton);

        var updateButton = document.createElement('button');
        updateButton.className = 'button';
        updateButton.textContent = 'Digitar Quantidade';
        updateButton.dataset.index = i;
        updateButton.addEventListener('click', updateQuantity);
        divButtons.appendChild(updateButton);

        var deleteButton = document.createElement('button');
        deleteButton.className = 'button';
        deleteButton.style.backgroundColor = 'red';

        var deleteIcon = document.createElement('span');
        deleteIcon.className = 'material-symbols-outlined';
        deleteIcon.textContent = 'delete_forever';
        deleteButton.appendChild(deleteIcon);

        deleteButton.dataset.index = i;
        deleteButton.addEventListener('click', deleteItem);
        divButtons.appendChild(deleteButton);

        actionsCell.appendChild(divButtons);

        divButtons.className = 'buttonsDiv';

        row.appendChild(actionsCell);

        table.appendChild(row);
    }
}

function increaseQuantity(event) {
    var index = event.target.dataset.index;
    var item = items[index];
    var newQuantity = parseInt(item.quantity) + 1;
    item.quantity = newQuantity;
    saveItems();
    renderTable();
}

function decreaseQuantity(event) {
    var index = event.target.dataset.index;
    var item = items[index];
    var newQuantity = parseInt(item.quantity) - 1;
    if (newQuantity < 0) newQuantity = 0;
    item.quantity = newQuantity;
    saveItems();
    renderTable();
}

function showWindow() {
    var window = document.getElementById('item-form');
    window.style.display = 'flex';
    saveItems();
    renderTable();
}

function hideWindow() {
    var window = document.getElementById('item-form');
    window.style.display = 'none';
    saveItems();
    renderTable();
}

form.addEventListener('submit', addItem);

loadItems();

renderTable();

function peekCat() {
    var cat = document.getElementById("cat");
    cat.style.top = "20%";
    setTimeout(hideCat, 10000);
}

function hideCat() {
    var cat = document.getElementById("cat");
    cat.style.top = "200px";
    setTimeout(peekCat, 100000);
}

setTimeout(peekCat, 1000);