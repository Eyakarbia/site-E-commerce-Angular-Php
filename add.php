<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$id = $_POST['id'];
$nom = $_POST['nom'];
$prenom = $_POST["prenom"];
$adresse = $_POST['adresse'];
$codeposte = $_POST['codeposte'];
$ville = $_POST['ville'];

$sql = "INSERT INTO `formulaire` (`id`, `nom`, `prenom`, `adresse`, `codeposte`,`ville`) VALUES ('$id', '$nom', '$prenom', '$adresse', '$codeposte','$ville')";
if ($mysqli->query($sql) === TRUE) {
   $authdata = [
      'pwd' => '',
      'email' => $from,
      'code' => $to,
      'role' => $type
   ];
   echo json_encode($authdata);
}
