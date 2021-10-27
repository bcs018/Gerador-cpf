<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador aleatório de CPFs</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/footer.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#ff99ee;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">Marca escondida</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(Página atual)</span></a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Desativado</a>
                </li> -->
            </ul>
            
        </div>
    </nav>
    <div style="padding: 2%;"></div>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Gere ilimitados números de CPFs válidos aleatórios</h2>
                <div style="padding: 2%;"></div>

                <div class="form-group">
                    <label for="exampleInputEmail1"><b>Informe a quantidade de CPFs a ser gerado</b></label>
                    <input type="number" name="qtd" class="form-control">
                </div>
               
                <button id="enviar"class="btn btn-success">Gerar</button>

                <div id="message"></div>
                <div id="loading"></div>

                
            </div>
        </div>
        <br><br><br>
        <div class="row justify-content-md-center">
            <div class="col-md-5">
                <div id="result"></div>
            </div>
        </div>
    </div>

    <!-- <footer class="footer">
        Footer
    </footer> -->
    <!-- <blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote> -->

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script> 
</body>
</html>
