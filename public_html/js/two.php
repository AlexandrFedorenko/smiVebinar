<?php
if(isset($_POST["action"])):
	if($_POST["action"]=="sendform"):
		$e1=null;
		$name=trim($_POST["headerName"]);
		$name=strip_tags($name);
		if(mb_strlen($name,"utf-8")<=0):
			$e1.="1";
                        # это сообщение будет выведено в блоке div с id="error"
			print "Заполните поле 'Ваше имя' ";
		endif;
		
		$email=trim($_POST["headerEmail"]);
		$email=strip_tags($email);
		if(!filter_var($email,FILTER_VALIDATE_EMAIL)):
			$e1.="1";
                        # это сообщение будет выведено в блоке div с id="error"
			# print "<li>Неверно заполнено поле 'Ваш email'</li>";
			print "Неверно заполнено поле 'Ваш email' ";
		endif;
		
		$mess=trim($_POST["headerPhone"]);
		$mess=strip_tags($mess);
		if(mb_strlen($mess,"utf-8")<=0):
			$e1.="1";
                        # это сообщение будет выведено в блоке div с id="error"
			print "Заполните поле 'Ваш телефон ";
		endif;
		
				
		if($e1==null):
		
			$title2="Успешная регистрация на Бесплатный вебинар";
			$message2="<html><head></head><body><b>Дорогой друг</b> $name !<br>";
			$message2.="Вы успешно зарегистрированы на вебинар. Поздравляем!</br> А вот и ваш подарок: 3 урока курса 'Ваши первые 5000$ в инвестироватии'";
			$message2.='<a href="https://www.youtube.com/watch?v=WdDVS9_7brc"> Урок 1 </a></br><a href="https://www.youtube.com/watch?v=pkw14NNFbUo" > Урок 2 </a></br><a href="https://www.youtube.com/watch?v=r2zDjACDv5E" > Урок 3 </a></br>';
			$message2.="За пару часов до начала вебинара мы вам пришлем ссылку для входа.   Хорошего дня и до скорых встречь - $name ! :)</body></html>";
			$message2=iconv("utf-8","windows-1251",$message2);
			$message2=convert_cyr_string($message2, "w", "k");
			$headers2="MIME-Version: 1.0\r\n";
			$headers2.="Content-Type: text/html; charset=koi8-r\r\n";
			$headers2.="From: investvebinar@gmail.com\r\n"; // откуда письмо
			
			mail($email, $title2, $message2, $headers2);
			// здесь мы делаем с данными, то что нам нужно
			// записываем в базу или файл
			// или отправляем их на почту
			$mail2="investvebinar@gmail.com"; // e-mail куда уйдет письмо
			
			$mail="natalia.shulhaa@gmail.com";
			$title="Отправка формы с сайта Бесплатный вебинар"; // заголовок(тема) письма
			//конвертируем 
			//$title=iconv("utf-8","windows-1251",$title);
			//$title=convert_cyr_string($title, "w", "k");
		
			$message="<html><head></head><body><b>Имя:</b> $name<br>";
			$message.="<b>Телефон:</b> $mess<br>";
			// ссылка на e-mail
			$message.="<b>E-Mail:</b> <a href='mailto:$email'>$email</a>"; 
			$message.="</body></html>"; 
			//конвертируем 
			$message=iconv("utf-8","windows-1251",$message);
			$message=convert_cyr_string($message, "w", "k");
			
			$headers="MIME-Version: 1.0\r\n";
			$headers.="Content-Type: text/html; charset=koi8-r\r\n";
			$headers.="From: $email\r\n"; // откуда письмо
			mail($mail2, $title, $message, $headers);
			mail($mail, $title, $message, $headers); // отправляем
			/*
                          далее с помощью javascript мы выводим простое alert
                          уведомление
                        
                        /*?>
			<script language="JavaScript" type="text/javascript">
			$('#myform').trigger('reset'); 
			alert("Ваше сообщение отправлено! Спасибо!");
			</script>
			<?php
			*/
			print "Ваше сообщение отправлено! Проверте свою почту. Спасибо!";
		endif;
	else:
		die;
	endif;
else:
	die;
endif;
?>