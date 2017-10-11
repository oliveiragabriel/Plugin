;(function($){
	function isNumber(digito){
			if(digito.charCodeAt(0) >= 48 && digito.charCodeAt(0) <=57){
				return true;
			}
			else{
				return false;
			}
		}
		function isLetra(digito){
		if(digito.charCodeAt(0) >= 65 && digito.charCodeAt(0) <=97 || digito.charCodeAt(0) >= 97 && digito.charCodeAt(0) <=122){
				return true;
			}
			else{
				return false;
			}
		}
		function isEspecial(digito){
						if(digito.charCodeAt(0) >= 33 && digito.charCodeAt(0) <=47){
				return true;
			}
			else{
				return false;
			}
		}	
	
	$.fn.validasenha= function(){
		$(this).append('<input type="password" class="caixasenha"/>')
		.append('<div class="mensagem"></div>');
		$(this).on("keyup", ".caixasenha", function(){
				var senha = $(".caixasenha").val();

				var letras = false;
				var numeros = false;
				var especiais = false;

				for(var i=0; i<senha.length; i++){
					console.log(senha.charAt(i));
					if(isNumber(senha.charAt(i))){
						numeros = true;
					}
					if(isLetra(senha.charAt(i))){
						letras = true;
					}
					if(isEspecial(senha.charAt(i))){
						especiais = true;
					}
				}
				var msg = null;

				if(senha.length>=8){
					if(numeros && letras && especiais ){
						msg = "Forte";
						classe = "Forte";
					}
					if(numeros && letras && !especiais || numeros && !letras && especiais || !numeros && letras && especiais ){
						msg = "Moderada";
						classe = "Moderada";
					}
					if(numeros && !letras && !especiais || !numeros && letras && !especiais || !numeros && !letras && especiais ){
						msg = "Fraca";
						classe = "Fraca";
					}
				}
				else{
					if(numeros && letras && especiais ){
						msg = "Moderada";
						classe = "Moderada";
					}
					if(numeros && !letras && !especiais || !numeros && letras && !especiais || !numeros && !letras && especiais ){
							msg = "Muito-Fraca";
							classe = "Muito-Fraca";
						}					
						if(numeros && letras && !especiais || numeros && !letras && especiais || !numeros && letras && especiais ){
							msg = "Fraca";
							classe = "Fraca";
						}

					}

					$(".mensagem").text(msg);
					$(".mensagem").attr("id", classe);
			});

	};
})(jQuery);