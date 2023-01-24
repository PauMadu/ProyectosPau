<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="ficha.php" method="POST"> <!--Para que te redirija a la misma pagina.-->
        <input value='Nuevo' type='submit' />
    </form>
    <?php
        if(isset($_SESSION["user"])){
            $conec =new mysqli("127.0.0.1","root","","proyectopau");
            if($conec->connect_errno==0){
                $sql="SELECT alu_dni, alu_nombre, alu_id from alumnos";
                $sentencia=$conec->query($sql);
                echo "<table border=1>
                        <tr>
                            <th>DNI</th><th>Nombre</th><th>Link</th>
                        </tr>";
                while($fila=$sentencia->fetch_assoc()){ // fetch_assoc manda al siguiente resultado hasta que da NULL
                    echo "<tr>
                        <td>".$fila['alu_dni']."</td>".
                        "<td>".$fila['alu_nombre']."</td>".
                        "<td><a href="."ficha.php?id=".$fila['alu_id'].">Ficha</a></td>
                        </tr>";
                }
                echo '</table>';
                $conec->close();
            }




        }
        else{
            header("Location: login.php");
        }
    ?>

</body>
</html>