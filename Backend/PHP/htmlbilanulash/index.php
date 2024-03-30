<!-- <?php
        $car = "Malibu";
        $foods = ['norin', 'Xonim', 'Manti'];
        ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>salom</h1>
    <p>Mening Yoqtirgan mashinam bu - <?php echo $car; ?></p>
    <h3>Taomlar</h3>
    <ul>
        <?php
        for ($i = 0; $i < count($foods); $i++) {
        ?>
            <li><?= $foods[$i]; ?></li>
        <?php
        }
        ?> -->
<!-- <?php foreach ($foods as $food) : ?>
            <li><?= $food; ?></li>
        <?php
        endforeach;
        ?> -->
<!-- </ul>
</body>

</html> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>
    <form method="POST" action="app.php" autocomplete="off">
        <h4>To'ldiring</h4>
        <label>Ismingiz</label>
        <input type="text" name="name">
        <br>
        <br>
        <label>Familiyangiz</label>
        <input type="text" name="surname">
        <br><br>
        <button type="submit">Jo'natish</button>
    </form>
</body>

</html>