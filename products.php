<?php
include_once("corsHeaders.php");
file_get_contents("php://input");


include_once("database.php");

$whatToDo = "GET_ALL";
if (isset($_GET["action"])) {
    $whatToDo = $_GET["action"];
}


if ($whatToDo == "GET_ALL") {
    $sql = "SELECT * FROM product";
    $result = $mysqli->query($sql);
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($rows, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    return;
} else if ($whatToDo === "GET_DETAILS") {
    $productId = $_GET["id"];
    $sql = "SELECT * FROM product WHERE id = $productId";
    $result = $mysqli->query($sql);
    $rows = mysqli_fetch_assoc($result);
    echo json_encode($rows, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}
