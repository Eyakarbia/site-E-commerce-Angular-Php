<?php
include_once("database.php");
$postdata = file_get_contents("php://input");


$sql = "SELECT * FROM product";
$result = $mysqli->query($sql);
$rows = $result->fetch_assoc();
// if ($mysqli->query($sql) === TRUE) {
echo json_encode($rows);
// }
?>

