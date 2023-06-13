<?php
$db = new PDO('sqlite:items.db');

$db->exec('CREATE TABLE IF NOT EXISTS items (name TEXT, quantity INTEGER)');

function saveItem($name, $quantity) {
    global $db;
    $statement = $db->prepare('INSERT INTO items (name, quantity) VALUES (:name, :quantity)');
    $statement->bindValue(':name', $name);
    $statement->bindValue(':quantity', $quantity, PDO::PARAM_INT);
    $statement->execute();
}

function loadItems() {
    global $db;
    $statement = $db->query('SELECT * FROM items');
    return $statement->fetchAll(PDO::FETCH_ASSOC);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $itemName = $_POST['item-name'] ?? '';
    $itemQuantity = $_POST['item-quantity'] ?? '';

    if (!empty($itemName) && is_numeric($itemQuantity)) {
        saveItem($itemName, $itemQuantity);
    }
}

$items = loadItems();
echo json_encode($items);
?>
