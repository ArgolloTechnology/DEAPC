<?php
session_start();
if(empty($_SESSION)){
    print"<script>location.href='index.php';</script>";
}
?>

<!DOCTYPE html>
<html lang=”pt”>
<head>
    <meta charset="UTF-8" />
    <meta http-equip="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="styles/style.css"/>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
    <title> Painel </title>
</head>
<body>
    <nav>
        <div class="logo-nome">
            <div class="imagem-logo">
                <img src="logo2.png" alt="">
            </div>
            <span class="logo_nome">DEAPC</span>
        </div>
       
        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="#">
                    <i class="uil uil-estate"></i>
                    <span class="link-nome">Menu Inicial</span>
                    </a></li>
                    <li><a href="stocks.html">
                        <i class="uil uil-archive"></i>
                        <span class="link-nome">Inventario</span>
                        </a></li>
                        <li><a href="encomendas.html">
                            <i class="uil uil-coins"></i>
                            <span class="link-nome">Encomendas</span>
                            </a></li>
                            <li><a href="estatistica.html">
                                <i class="uil uil-chart-bar"></i>
                                <span class="link-nome">Estatistica</span>
                                </a></li>
                            </ul>
                        <ul class="logout-modo">
                            <li><a href="#">
                                <i class="uil uil-sign-out-alt"></i>
                                <span class="link-nome">LogOut</span>
                            </a></li>
                            <li class="mode">
                                <a href="#">
                                    <i class="uil uil-moon"></i>
                                <span class="link-nome">DarkMode</span>
                                </a>
                            
                                <div class="mode-toggle">
                                <span class="switch"></span>
                            </div>
                        </li>
                        </ul>    
        </div>
         
    </nav>
    <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>

            <div class="search-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Pesquisar">

            </div>

            <img src="perfil.png" alt="">
        </div>
        <div class="conteudo">
            <div class="overview">
                <div class="titulo">
                <i class="uil uil-suitcase"></i>
                <span class="texto">Início</span>
            </div>
            </div>        
        <div class="caixas">
                <div class="caixa caixa1">
                    <i class="uil uil-apps"></i>
                    <span class="texto">Stock</span>
                    <span class="numero" id="totalItens">10,970</span>
                </div>
                <div class="caixa caixa2">
                    <i class="uil uil-comment-chart-line"></i>
                    <span class="texto">Encomendas</span>
                    <span class="numero" id="totalencomenda">0</span>
                </div>
                <div class="caixa caixa3">
                    <i class="uil uil-graph-bar"></i>
                    <span class="texto">Estado</span>
                    <span class="numero">positivo</span>
                </div>
            </div>
    </div>
    <div class="boas">
            <?php
                print "Bem Vindo, " . $_SESSION["nome"];
            ?>
        </div>
    </section>
<script src="scripts/script.js"> </script>

</body>
</html>
