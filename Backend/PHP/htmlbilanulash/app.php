<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ism = $_POST['name'];
    $familiya = $_POST['surname'];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>
        <h1>Jo'natilgan ism: <?= $ism ?? '' ?></h1>
        <h1>Jo'natilgan Familiya: <?= $familiya ?? '' ?></h1>
    </div>
</body>

</html>