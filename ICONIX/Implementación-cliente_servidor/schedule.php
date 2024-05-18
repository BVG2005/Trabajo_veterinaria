// Verifica si se recibieron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $especie = $_POST["especie"];
    $raza = $_POST["raza"];
    $fecha = $_POST["fecha"];
    $motivo = $_POST["motivo"];
    $sexo = $_POST["sexo"];
    $nombre_dueño = $_POST["nombre_dueño"];
    $telefono_dueño = $_POST["telefono"];
    $email_dueño = $_POST["email"];

    
    
    // Aquí podrías guardar los datos en una base de datos o hacer algún otro cálculo o acción
    // En este ejemplo, simplemente mostramos los datos recibidos
    echo "Nombre: $nombre <br>";
    echo "Especie: $especie <br>";
    echo "Raza: $raza <br>";
    echo "Fecha de la consulta: $fecha <br>";
    echo "Motivo de la consulta: $motivo <br>";
    echo "Sexo: $sexo <br>";
    
    echo "Nombre del dueño: $nombre_dueño <br>";
    echo "Telefono del dueño: $telefono_dueño <br>";
    echo "Email: $email_dueño <br>";

    
    
} else {
    // Si no se recibieron los datos por POST, redirigir al formulario
    header("Location: index.html");
    exit();
}
?>
