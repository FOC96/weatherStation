<?php
//CONEXIÓN
    $con = mysqli_connect('189.166.63.3', 'Remote', 'maplew', 'weatherstation');
    if (!$con) {
      echo "No se pudo llevar a cabo la conexión.";
    }

    $query = "SELECT * FROM envdata ORDER BY id DESC LIMIT 1;";
    $resultado = mysqli_query($con, $query);

    
    while ($r = mysqli_fetch_array($resultado)) {
        $tempC = $r['temperatura'];
        $tempF = $tempC*(9/5)+32;
        
?>

        <h1 id="tempC"><?php echo $r['temperatura']; ?>ºC</h1>
        <h3 id="tempF"><?php echo $tempF; ?>ºF</h3>
<!--        <h3 id="thermalSen">Sensación de bochorno: 28ºC</h3>-->
        <h3 id="humidity">Humedad: <?php echo $r['humedad']; ?></h3>
        <h3 id="lumin">Luminosidad: <?php echo $r['luminosidad']; ?></h3>
        
<?php        
    }
?>