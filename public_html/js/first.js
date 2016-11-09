function ordering() {

	var name = $('input[name=Name]').val();
        if (name == 0) {
            $('input[name=Name]').css('border', '2px solid #FF0026');
            
            
           
        }

        var email = $('input[name=Email]').val();
        if (email == 0) {
            $('input[name=Email]').css('border', '2px solid #FF0026');
           
            
        }
        var phone = $('input[name=Phone]').val();
        if (phone == 0) {
            $('input[name=Phone]').css('border', '2px solid #FF0026');
          
            
        }

 if(name != 0 && email !=0 && phone !=0 && isValidEmailAddress(email) == true){


	var msg=$('#myform').serialize();
       	
	$.ajax({
		type:'POST',
                /* адрес php файла, обрабатывающего форму */
		url:"http://smi-vebinar.millioner-investor.com/js/ml.php",
		data:msg+"&action=sendform",
		cache:false,
		success:function(data){
			var error=data;
			if(error == "error") {
			$('#note').html('<p>Согласитесь с обработкой своих персональных даных</p>');
			} else  {
			$('input[name=Name]').val('');
                	$('input[name=Phone]').val('');
                	$('input[name=Email]').val('');
                	$('#note').html('<p>'+data+'</p>');
			}
                	var instnote = jQuery('[data-remodal-id=note]').remodal();
                	  	instnote.open();
		}
	});

}

}

function ordering2() {

    var name = $('input[name=Name2]').val();
        if (name == 0) {
            $('input[name=Name2]').css('border', '2px solid #FF0026');
            
            
           
        }

        var email = $('input[name=Email2]').val();
        if (email == 0) {
            $('input[name=Email2]').css('border', '2px solid #FF0026');
           
            
        }
        var phone = $('input[name=Phone2]').val();
        if (phone == 0) {
            $('input[name=Phone2]').css('border', '2px solid #FF0026');
          
            
        }

 if(name != 0 && email !=0 && phone !=0 && isValidEmailAddress(email) == true){


    var msg=$('#myform2').serialize();
        
    $.ajax({
        type:'POST',
                /* адрес php файла, обрабатывающего форму */
        url:"http://smi-vebinar.millioner-investor.com/js/ml2.php",
        data:msg+"&action=sendform2",
        cache:false,
        success:function(data){
            var error=data;
            if(error == "error") {
            $('#note').html('<p>Согласитесь с обработкой своих персональных даных</p>');
            } else  {
            $('input[name=Name2]').val('');
                    $('input[name=Phone2]').val('');
                    $('input[name=Email2]').val('');
                    $('#note').html('<p>'+data+'</p>');
            }
                    var instnote = jQuery('[data-remodal-id=note]').remodal();
                        instnote.open();
        }
    });

}

}
$(document).ready(function () {
        $("#Email").keyup(function () {

            var email2 = $("#Email").val();

            if (email2 != 0) {
                if (isValidEmailAddress(email2)) {
                    $('input[name=Email]').css('border', '1px solid #0a8db4');
                  
                } else {
                    $('input[name=Email]').css('border', '2px solid #FF0026');
                    
                }
            } else {
                $('input[name=Email]').css('border', '1px solid #0a8db4');
                
            }

        });

    });
$(document).ready(function () {
        $("#Email2").keyup(function () {

            var email2 = $("#Email2").val();

            if (email2 != 0) {
                if (isValidEmailAddress(email2)) {
                    $('input[name=Email2]').css('border', '1px solid #0a8db4');
                  
                } else {
                    $('input[name=Email2]').css('border', '2px solid #FF0026');
                    
                }
            } else {
                $('input[name=Email2]').css('border', '1px solid #0a8db4');
                
            }

        });

    });

    $(document).ready(function () {

        $('input[name=Phone]').keyup(function () {

            var Phone = $('input[name=Phone]').val();
            if (Phone != 0) {
                $('input[name=Phone]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=Phone]').css('border', '2px solid #FF0026');
                

            }
        });
    });
    $(document).ready(function () {

        $('input[name=Phone2]').keyup(function () {

            var Phone = $('input[name=Phone2]').val();
            if (Phone != 0) {
                $('input[name=Phone2]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=Phone2]').css('border', '2px solid #FF0026');
                

            }
        });
    });

    $(document).ready(function () {

        $('input[name=Name]').keyup(function () {

            var event = $('input[name=Name]').val();
            if (event != 0) {
                $('input[name=Name]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=Name]').css('border', '2px solid #FF0026');
               

            }
        });
    });
    $(document).ready(function () {

        $('input[name=Name2]').keyup(function () {

            var event = $('input[name=Name2]').val();
            if (event != 0) {
                $('input[name=Name2]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=Name2]').css('border', '2px solid #FF0026');
               

            }
        });
    });


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function buttonHeader() {

	var name = $('input[name=headerName]').val();
        if (name == 0) {
            $('input[name=headerName]').css('border', '2px solid #FF0026');
            
            
           
        }

        var email = $('input[name=headerEmail]').val();
        if (email == 0) {
            $('input[name=headerEmail]').css('border', '2px solid #FF0026');
           
            
        }
        var phone = $('input[name=headerPhone]').val();
        if (phone == 0) {
            $('input[name=headerPhone]').css('border', '2px solid #FF0026');
          
            
        }

 if(name != 0 && email !=0 && phone !=0  && isValidEmailAddress(email) == true){



	var msg=$('#submitFormHeader').serialize();
       	
	$.ajax({
		type:'POST',
                /* адрес php файла, обрабатывающего форму */
		url:"http://smi-vebinar.millioner-investor.com/js/two.php",
		data:msg+"&action=sendform",
		cache:false,
		success:function(data){
			               	
                	var error=data;
			if(error === "error") $('#note').html('<p>'+data+'</p>');
			$('input[name=headerName]').val('');
                	$('input[name=headerPhone]').val('');
                	$('input[name=headerEmail]').val('');
			var inst = jQuery('[data-remodal-id=consultation]').remodal();
                	inst.close();
                	var instnote = jQuery('[data-remodal-id=note]').remodal();
                	$('#note').html('<p>'+data+'</p>');
                	instnote.open();
			
		}
	});

}

}

$(document).ready(function () {
        $("#headerEmail").keyup(function () {

            var email2 = $("#headerEmail").val();

            if (email2 != 0) {
                if (isValidEmailAddress(email2)) {
                    $('input[name=headerEmail]').css('border', '1px solid #0a8db4');
                  
                } else {
                    $('input[name=headerEmail]').css('border', '2px solid #FF0026');
                    
                }
            } else {
                $('input[name=headerEmail]').css('border', '1px solid #0a8db4');
                
            }

        });

    });

    $(document).ready(function () {

        $('input[name=headerPhone]').keyup(function () {

            var Phone = $('input[name=headerPhone]').val();
            if (Phone != 0) {
                $('input[name=headerPhone]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=headerPhone]').css('border', '2px solid #FF0026');
                

            }
        });
    });

    $(document).ready(function () {

        $('input[name=headerName]').keyup(function () {

            var event = $('input[name=headerName]').val();
            if (event != 0) {
                $('input[name=headerName]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=headerName]').css('border', '2px solid #FF0026');
               

            }
        });
    });
    
    function ClearHeader(){

                $('input[name=headerName]').val('');
                $('input[name=headerPhone]').val('');
                $('input[name=headerEmail]').val('');
               
}

function buttonHeader2() {



	var name = $('input[name=headerName2]').val();
        if (name == 0) {
            $('input[name=headerName2]').css('border', '2px solid #FF0026');
            
            
           
        }

        var email = $('input[name=headerEmail2]').val();
        if (email == 0) {
            $('input[name=headerEmail2]').css('border', '2px solid #FF0026');
           
            
        }
        var phone = $('input[name=headerPhone2]').val();
        if (phone == 0) {
            $('input[name=headerPhone2]').css('border', '2px solid #FF0026');
          
            
        }

 if(name != 0 && email !=0 && phone !=0 && isValidEmailAddress(email) == true){


	var msg=$('#submitFormHeader2').serialize();
       	
	$.ajax({
		type:'POST',
                /* адрес php файла, обрабатывающего форму */
		url:"http://smi-vebinar.millioner-investor.com/js/three.php",
		data:msg+"&action=sendform",
		cache:false,
		success:function(data){
			var error=data;
			if(error === "error") $('#note').html('<p>'+data+'</p>');
			$('input[name=headerName2]').val('');
                	$('input[name=headerPhone2]').val('');
                	$('input[name=headerEmail2]').val('');
			var inst = jQuery('[data-remodal-id=consultation2]').remodal();
                	inst.close();
                	var instnote = jQuery('[data-remodal-id=note]').remodal();
                	$('#note').html('<p>'+data+'</p>');
                	instnote.open();
		}
	});

}

}

$(document).ready(function () {
        $("#headerEmail2").keyup(function () {

            var email3 = $("#headerEmail2").val();

            if (email3 != 0) {
                if (isValidEmailAddress(email3)) {
                    $('input[name=headerEmail2]').css('border', '1px solid #0a8db4');
                  
                } else {
                    $('input[name=headerEmail2]').css('border', '2px solid #FF0026');
                    
                }
            } else {
                $('input[name=headerEmail2]').css('border', '1px solid #0a8db4');
                
            }

        });

    });

    $(document).ready(function () {

        $('input[name=headerPhone2]').keyup(function () {

            var Phone = $('input[name=headerPhone2]').val();
            if (Phone != 0) {
                $('input[name=headerPhone2]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=headerPhone2]').css('border', '2px solid #FF0026');
                

            }
        });
    });

    $(document).ready(function () {

        $('input[name=headerName2]').keyup(function () {

            var event = $('input[name=headerName2]').val();
            if (event != 0) {
                $('input[name=headerName2]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=headerName2]').css('border', '2px solid #FF0026');
               

            }
        });
    });
    
    function ClearHeader2(){

                $('input[name=headerName2]').val('');
                $('input[name=headerPhone2]').val('');
                $('input[name=headerEmail2]').val('');
               
}

function buttonHeader3() {



	var name = $('input[name=headerName3]').val();
        if (name == 0) {
            $('input[name=headerName3]').css('border', '2px solid #FF0026');
            
            
           
        }

        var email = $('input[name=headerEmail3]').val();
        if (email == 0) {
            $('input[name=headerEmail3]').css('border', '2px solid #FF0026');
           
            
        }
        var phone = $('input[name=headerPhone3]').val();
        if (phone == 0) {
            $('input[name=headerPhone3]').css('border', '2px solid #FF0026');
          
            
        }

 if(name != 0 && email !=0 && phone !=0 && isValidEmailAddress(email) == true){


	var msg=$('#submitFormHeader3').serialize();
       	
	$.ajax({
		type:'POST',
                /* адрес php файла, обрабатывающего форму */
		url:"http://smi-vebinar.millioner-investor.com/js/four.php",
		data:msg+"&action=sendform",
		cache:false,
		success:function(data){
			var error=data;
			if(error === "error") $('#note').html('<p>'+data+'</p>');
			$('input[name=headerName3]').val('');
                	$('input[name=headerPhone3]').val('');
                	$('input[name=headerEmail3]').val('');
			var inst = jQuery('[data-remodal-id=consultation3]').remodal();
                	inst.close();
                	var instnote = jQuery('[data-remodal-id=note]').remodal();
                	$('#note').html('<p>'+data+'</p>');
                	instnote.open();
		}
	});

}

}

$(document).ready(function () {
        $("#headerEmail3").keyup(function () {

            var email4 = $("#headerEmail3").val();

            if (email4 != 0) {
                if (isValidEmailAddress(email4)) {
                    $('input[name=headerEmail3]').css('border', '1px solid #0a8db4');
                  
                } else {
                    $('input[name=headerEmail3]').css('border', '2px solid #FF0026');
                    
                }
            } else {
                $('input[name=headerEmail3]').css('border', '1px solid #0a8db4');
                
            }

        });

    });

    $(document).ready(function () {

        $('input[name=headerPhone3]').keyup(function () {

            var Phone = $('input[name=headerPhone3]').val();
            if (Phone != 0) {
                $('input[name=headerPhone3]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=headerPhone3]').css('border', '2px solid #FF0026');
                

            }
        });
    });

    $(document).ready(function () {

        $('input[name=headerName3]').keyup(function () {

            var event = $('input[name=headerName3]').val();
            if (event != 0) {
                $('input[name=headerName3]').css('border', '1px solid #0a8db4');
                
            } else {
                $('input[name=headerName3]').css('border', '2px solid #FF0026');
               

            }
        });
    });
    
    function ClearHeader3(){

                $('input[name=headerName3]').val('');
                $('input[name=headerPhone3]').val('');
                $('input[name=headerEmail3]').val('');
               
}

