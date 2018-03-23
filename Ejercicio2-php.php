<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Calcular Peso Fisico Apartir de Una Fuerza</title>
  </head>
  <body>
    <br>
        <label for="peso">Introduzca la fuerza (NEWTONS): </label>
        <input type="text" placeholder="Escriba la fuerza" name="fuerza" class="form-control" id="fuerza">
    <br>
        <?php
        $fuerza = $_POST['fuerza'];
        $gravedad = '9.8';
        $peso = $fuerza/ $gravedad;
        echo "Su peso es de $peso Kg";
         ?>
    <br>
  </body>
</html>
