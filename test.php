<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// $id =$request->id;
$sql = "SELECT   * FROM `cart`   ";
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);

}
else
{
http_response_code(404);
}

?>