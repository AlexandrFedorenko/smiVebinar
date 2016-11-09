<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$your_name = htmlspecialchars($_POST["Name2"]);
$email = htmlspecialchars($_POST["Email2"]);

/* Устанавливаем e-mail адресата */
$myemail = "investvebinar@gmail.com";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$your_name = check_input($_POST["Name2"], "Введите ваше имя!");

$email = check_input($_POST["Email2"], "Введите ваш e-mail!");

/* Проверяем правильно ли записан e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте!Ваше сообщение отправлено! Проверте свою почту. Спасибо!";
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $yourname <$email> \r\n Reply-To: $email \r\n"; 
mail($myemail, $tema, $message_to_myemail, $from);
?>
<p>Ваше сообщение было успешно отправлено!</p>
<p>На <a href="http://smi-vebinar.millioner-investor.com/index.html">Главную >>></a></p>
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Пожалуйста исправьте следующую ошибку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>