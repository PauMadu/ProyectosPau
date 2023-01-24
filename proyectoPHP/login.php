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
    <?php
        if($_POST){
            $_SESSION = array();
            $correo=$_POST['correo'];
            $contraseña=$_POST['contraseña'];
            $conec =new mysqli("127.0.0.1","root","","proyectopau");
            if($conec->connect_errno==0){
                $sql="SELECT * from usuario where usu_correo=? and usu_contraseña=?";
                $sentencia=$conec->prepare($sql);
                $sentencia->bind_param("ss",$correo,$contraseña);
                $sentencia->execute();
                $result=$sentencia->get_result();
                while($fila=$result->fetch_assoc()){
                    $_SESSION["user"]=$fila["usu_nombre"];
                    header("Location: listado.php");
                }
                $conec->close();
            }
        }


    ?>
    <form action="<?php echo $_SERVER['PHP_SELF']?>" method="POST"> <!--Para que te redirija a la misma pagina.-->
        <input type='text' placeholder="Correo" name='correo'/>
        <input type='text' placeholder="Contraseña" name='contraseña'/>
        <input type='submit'/>
    </form>
</body>
</html>