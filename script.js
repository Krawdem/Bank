/*message*/
$(function(){
	$('contact').submit(function(){
	  var errors = false;
	  $(this).find('span').empty();
	  $(this).find('input, textarea').each(function(){
		if( $.trim( $(this).val() ) == '' ) {
		  errors = true;
		  $(this).next().text( 'Не заполнено поле ' + $(this).prev().text() );
		}
	  });
	  if( !errors ){
		var data = $('contact').serialize();
		$.ajax({
		  url: 'letter.php',
		  type: 'POST',
		  data: data,
		  beforeSend: function(){
			$('#submit').next().text('Отправляю...');
		  },
		  success: function(res){
			if( res == 1 ){
			  $('contact').find('input:not(#submit), textarea').val('');
			  $('submit').next().empty();
			  alert('Письмо отправлено');
			}else{
			  $('submit').next().empty();
			  alert('Ошибка отправки');
			}
		  },
		  error: function(){
			alert('Ошибка!');
		  }
		});
	  }
	  return false;
	});
  });