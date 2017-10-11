;(function($){
	
	$.fn.validasenha= function(){
		$(this).append('<input type="password" class="caixasenha"/>')
		.append('<div class="mensagem"></div>');
	};
})(jQuery);