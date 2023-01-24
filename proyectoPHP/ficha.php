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
       if(!isset($_SESSION["user"])){
        header("Location: login.php");
       }
        else{
            if (!isset($_POST['dni'])){
                $nombre="";
                $dni="";
                $poblacion="";
                $direccion="";
                $idA=0;
                if(isset($_GET['id'])){
                    $id=$_GET['id'];
                        $conec =new mysqli("127.0.0.1","root","","proyectopau");
                        if($conec->connect_errno==0){
                            $sql="SELECT * from alumnos where alu_id=$id";
                            $result=$conec->query($sql);
                            $fila=$result->fetch_assoc();
                                $idA=$fila['alu_id'];
                                $nombre=$fila['alu_nombre'];
                                $dni=$fila['alu_dni'];
                                $poblacion=$fila['alu_poblacion'];
                                $direccion=$fila['alu_direccion'];
                            $conec->close();
                    }
                }
                    echo "<table style='border:1px solid;'>";
                    echo "<form action='ficha.php' method='POST'>
                        <input type='hidden' name='idNuevo' value='".$idA."'> 
                        <tr  style='border:1px solid;'>
                            <td style='border:1px solid;'>Nombre:</td>
                            <td style='border:1px solid;'><input type='text' placeholder='Nombre' value='".$nombre."' name='nombre'></td>
                        </tr>
                        <tr style='border:1px solid;'>
                            <td style='border:1px solid;'>DNI:</td>
                            <td style='border:1px solid;'><input type='text' placeholder='DNI' value='".$dni."' name='dni'/></td>
                        </tr>
                        <tr style='border:1px solid;'>
                            <td style='border:1px solid;'>Poblacion:</td>
                            <td style='border:1px solid;'><input type='text' placeholder='Poblacion' value='".$poblacion."' name='poblacion'/></td>
                        </tr>
                        <tr style='border:1px solid;'>
                            <td style='border:1px solid;'>Direccion:</td>
                            <td style='border:1px solid;'><input type='text' placeholder='Direccion' value='".$direccion."' name='direccion'/></td>
                        </tr>";
                    if($idA==0){
                    echo "<tr style='border:1px solid'>
                            <td><input value='Añadir' type='submit' name='añadir'/></td>
                         </tr>";
                    }
                    else{
                        echo "<tr style='border:1px solid'>
                                <td><input value='Guardar' type='submit' name='guardar'/></td>
                                <td><input value='Borrar' type='submit' name='borrar'/></td>
                             </tr>";
                    }
                    echo "</form>
                        </table>";
            }
            else{
                if($_POST['idNuevo']==0){
                    if(isset($_POST['añadir'])){
                        $conec =new mysqli("127.0.0.1","root","","proyectopau");
                        if($conec->connect_errno==0){
                            $fecha=date('Y-m-d');
                            $sql="INSERT INTO alumnos (`alu_dni`,`alu_nombre`,`alu_poblacion`,`alu_direccion`,`alu_created_by`,`alu_created_date`) VALUES (?,?,?,?,?,?)";
                            $sentencia=$conec->prepare($sql);
                            $sentencia->bind_param("ssssss",$_POST['dni'],$_POST['nombre'],$_POST['poblacion'],$_POST['direccion'],$_SESSION['user'],$fecha);
                            $sentencia->execute();
                            $conec->close();
                            $_POST['id2']=1;
                            header("Location: listado.php");
                        }
                    }
                }
                else{
                    if(isset($_POST['guardar'])){
                        $conec =new mysqli("127.0.0.1","root","","proyectopau");
                        if($conec->connect_errno==0){
                            $fecha=date('Y-m-d');
                            $sql="UPDATE alumnos SET alu_nombre=?,alu_dni=?,alu_poblacion=?,alu_direccion=? WHERE alu_id=".$_POST['idNuevo']; 
                            $sentencia=$conec->prepare($sql);
                            $sentencia->bind_param("ssss",$_POST['nombre'],$_POST['dni'],$_POST['poblacion'],$_POST['direccion']);
                            $sentencia->execute();
                            $conec->close();
                            header("Location: listado.php");
                        }
                    }
                    if(isset($_POST['borrar'])){
                        $conec =new mysqli("127.0.0.1","root","","proyectopau");
                        if($conec->connect_errno==0){
                            $fecha=date('Y-m-d');
                            $sql="DELETE from alumnos WHERE alu_id=".$_POST['idNuevo']; 
                            $sentencia=$conec->query($sql);
                            $conec->close();
                            header("Location: listado.php");
                        }
                    }
                }
            }
        }
     
    ?>
</body>
</html>