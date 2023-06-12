<?php
// Conectar ao banco de dados SQLite
$db = new PDO('sqlite:items.db');

// Verificar se a tabela de itens existe, caso contrário, criar a tabela
$db->exec('CREATE TABLE IF NOT EXISTS items (name TEXT, quantity INTEGER)');

// Função para salvar um item
function saveItem($name, $quantity) {
    global $db;
    $statement = $db->prepare('INSERT INTO items (name, quantity) VALUES (:name, :quantity)');
    $statement->bindValue(':name', $name);
    $statement->bindValue(':quantity', $quantity, PDO::PARAM_INT);
    $statement->execute();
}

// Função para carregar os itens
function loadItems() {
    global $db;
    $statement = $db->query('SELECT * FROM items');
    return $statement->fetchAll(PDO::FETCH_ASSOC);
}

// Verificar se foi feita uma requisição POST para salvar um item
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $itemName = $_POST['item-name'] ?? '';
    $itemQuantity = $_POST['item-quantity'] ?? '';

    if (!empty($itemName) && is_numeric($itemQuantity)) {
        saveItem($itemName, $itemQuantity);
    }
}

// Carregar os itens e retornar como JSON
$items = loadItems();
echo json_encode($items);
?>
