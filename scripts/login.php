<?php
$servername = "localhost";
$username = "";
$password = "";

// CRIAR CONEXAO
$conn = new Sqlite3 ($servername, $username, $password);
// VERIFICAR CONEXAO
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (nome, senha)
VALUES ('paulo', '1234')";

if ($conn->query($sql) === TRUE) {
    echo "Dados inseridos com sucesso!";
} else {
    echo "Erro ao inserir dados: " . $conn->error;
}
// DATABASE
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

$conn->close();
?> 