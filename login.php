<?php
session_start();
include_once("corsHeaders.php");
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$sql = "SELECT DISTINCT  * FROM `users` WHERE `email` = '$request->nom' AND `password` = '$request->pass'";
$result = mysqli_query($mysqli, $sql);
$row = mysqli_fetch_assoc($result) or die("Something is wrong");
echo json_encode($row);
?>