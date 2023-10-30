<?php
//Сбор данных из полей формы. 
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$email = $_POST['mail']; // Берём данные из input c атрибутом name="phone"
$text = $_POST['text']; // Берём данные из input c атрибутом name="mail"

$token = "6705771698:AAEHLKRRoIsC3D0tZlGSvHvzRl-FUWtDkHk"; // Тут пишем токен
$chat_id = "-4096442212"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = ""; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Почта:' => $email,
  'Смс: ' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>