<?php

setcookie('test', "HELLO");
$soz = $_COOKIE['test'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1><?= $soz ?></h1>

</body>
</html>