<?php
session_start();
include_once("corsHeaders.php");
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$whatToDo = "GET_USER_CART";
if (isset($_GET["action"])) {
    $whatToDo = $_GET["action"];
}
$userId = 0;
if (isset($_GET['userId'])) {
    $userId = $_GET['userId'];
}

if ($whatToDo === "GET_USER_CART") {
    $sql = "SELECT * FROM cart LEFT JOIN product ON product.id = cart.item_id WHERE user_id = $userId";
    $result = $mysqli->query($sql);
    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($rows, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    return;
} else if ($whatToDo === "ADD_TO_CART") {
    $productId = $request->productId;
    $userId = $request->userId;
    $sql = "INSERT INTO cart (user_id, item_id) VALUES ($userId, $productId)";
    $result = $mysqli->query($sql) or die($mysqli->error);
    echo json_encode($result, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    return;
} else if ($whatToDo === "REMOVE_FROM_CART") {
    $cartId = $_GET["id"];
    $sql = "DELETE FROM cart WHERE cart_id = $cartId";
    $result = $mysqli->query($sql) or die($mysqli->error);
    echo json_encode($result, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    return;
} else if ($whatToDo === "UPDATE_QUANTITY") {
    $cartId = (int)$_GET["cartId"];
    $qty = (int)$_GET["qty"];
    $sql = "UPDATE cart SET quantity = $qty WHERE cart_id = $cartId";
    $result = $mysqli->query($sql) or die($mysqli->error);
    echo json_encode($result, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}
