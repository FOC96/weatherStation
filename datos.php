<?php
//CONEXIÓN
    $con = mysqli_connect('localhost','root','','DL');

    $query = "SELECT * FROM envdata ORDER BY id DESC;";

    $resultado = mysqli_query($con, $query);

    while($r = mysqli_fetch_array($resultado[0])){
        ?>
            <h1 id="tempC"><?php echo $r['temperatura']; ?>ºC</h1>
            <h3 id="thermalSen">Sensación de bochorno: 28ºC</h3>
            <h3 id="humidity">Humedad: <?php echo ['humedad']; ?></h3>
            <h3 id="lumin">Luminosidad: <?php echo ['luminosidad']; ?></h3>
        <?php
    }

?>