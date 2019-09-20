<?php
  $to = "yourmail@gmail.com"; // емайл получателя данных из формы
  $tema = "Форма обратной связи на PHP"; // тема полученного емайла
  $message = "Ваше имя: ".$_POST['user-name']."<br>";//присвоить переменной значение, полученное из формы name=name
  $message .= "E-mail: ".$_POST['user-email']."<br>"; //полученное из формы name=email
  $message .= "Сообщение: ".$_POST['user-message']."<br>"; //полученное из формы name=message
  $headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
  mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных

  if($_POST) {
    $to_Email = "example@mail.ru";
    $subject = 'Запрос'.$_POST["polz_email"];

    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
      $otvet_serv = json_encode(array('text' => 'Возникла ошибка при отправке данных'));
      die($otvet_serv);
    } 

    if(!isset($_POST["polz_email"]) || !isset($_POST["polz_message"])) {
      $otvet_serv = json_encode(array('type'=>'error', 'text' => 'Заполните форму'));
      die($otvet_serv);
    }
    $user_email = filter_var($_POST["polz_email"], FILTER_SANITIZE_STRING);
    $user_message = filter_var($_POST["polz_message"], FILTER_SANITIZE_STRING);

    if(strlen($user_email)<3) {
      $otvet_serv = json_encode(array('text' => 'Введите email'));
      die($otvet_serv);
    }

    $to_Email = "example@mail.ru";
    $subject = 'Запрос обратного звонка '.$_POST["polz_email"];
    $message = "Имя: ".$user_email.". Телефон: ".$user_message;
    if(!mail($to_Email, $subject, $message, "From: example2@mail.ru \r\n")) {
      $otvet_serv = json_encode(array('text' => 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.'));
      die($otvet_serv);
    }else {
    $otvet_serv = json_encode(array('text' => 'Спасибо! '.$user_email .', ваше сообщение отправлено.'));
    die($otvet_serv);
    }
  }
?>