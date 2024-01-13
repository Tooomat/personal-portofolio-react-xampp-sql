<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
// var_dump($conn);

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO users(id, name, email_address, mobile_phone, message, create_at) VALUES(null, :name, :email_address, :mobile_phone, :message, :create_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email_address', $user->email_address);
        $stmt->bindParam(':mobile_phone', $user->mobile_phone);
        $stmt->bindParam(':message', $user->message);
        $stmt->bindParam(':create_at', $created_at);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to created record'];
        }
        echo json_encode($response);
        break;
}
