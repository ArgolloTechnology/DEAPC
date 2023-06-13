<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8" />
    <meta http-equip="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="login.css" />
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
    <title> Login </title>

    <script src="scripts\script.js"></script>
</head>
    <body>
        <section> 
            <div class="caixa">
                <div class="valor">
                    <form method="POST" action="login.php">
                        <h2>Login</h2>
                        <div class="input-caixa">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" name="usuario" class="form-control">
                            <label for="nome_usuario">Nome de Usuário</label>
                        </div>
                        <div class="input-caixa">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" name="senha" class="form-control">
                            <label for="senha">Password</label>
                        </div>
                        <div class="forget">
                            <label for=""><input type="checkbox">Lembrar-me <a href="#">Esqueceu-se da Palavra passe?</a></label>
                        </div>
                        <button type="submit" class="btn btn-primary">Log In</button>
                        <div class="registar">
                            <p>Não tem uma Conta? <a href="#">Registar</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <script  type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"> </script> 
        <script nomodule src="https://unpkg .com/ionicons@7.1.0/dist/ionicons/ionicons.js" > </script>
    </body>
</html>
