$(window).load(function() {
	if ($(window).width() > 755){
		$('.page-titulo').css({ 'height': $('#home-page-link').height() + 'px' });
		$('.page-titulo-descricao').css({ 'height': $('#home-page-link').height() + 'px' });
		$('.subtitulo-menor').css({ 'width': $('#page-titulo').width() + 'px' });


		$('.page-titulo-descricao').css({ 'height': $('#home-page-link').height() + 'px' });
		$('.page-titulo-descricao-conteudo').css({ 'width': $('.page-titulo-descricao').width() + 'px' });


		$('.subtitulo-pagina').css({ 'height':$('.page-titulo-descricao-conteudo').outerHeight()+'px' });
		$('.subtitulo-seta-contact').css({ 'bottom': $('.subtitulo-pagina').outerHeight()*0.70 + 'px' });
	} else {
		$('.page-titulo').css({ 'height': 'auto' });
		$('.subtitulo-menor').css({ 'width': $('#page-titulo').width() + 'px' });


		$('.page-titulo-descricao').css({ 'height': 'auto' });
		$('.page-titulo-descricao-conteudo').css({ 'width': $('.page-titulo-descricao').width() + 'px' });


		$('.subtitulo-pagina').css({ 'height':'auto' });
	}

	$(window).resize(function(){
		if ($(window).width() > 755){
			$('.page-titulo').css({ 'height': $('#home-page-link').height() + 'px' });
			$('.page-titulo-descricao').css({ 'height': $('#home-page-link').height() + 'px' });
			$('.subtitulo-menor').css({ 'width': $('#page-titulo').width() + 'px' });


			$('.page-titulo-descricao').css({ 'height': $('#home-page-link').height() + 'px' });
			$('.page-titulo-descricao-conteudo').css({ 'width': $('.page-titulo-descricao').width() + 'px' });


			$('.subtitulo-pagina').css({ 'height':$('.page-titulo-descricao-conteudo').outerHeight()+'px' });
			$('.subtitulo-seta-contact').css({ 'bottom': $('.subtitulo-pagina').outerHeight()*0.70 + 'px' });
		} else {
			$('.page-titulo').css({ 'height': 'auto' });
			$('.subtitulo-menor').css({ 'width': $('#page-titulo').width() + 'px' });


			$('.page-titulo-descricao').css({ 'height': 'auto' });
			$('.page-titulo-descricao-conteudo').css({ 'width': $('.page-titulo-descricao').width() + 'px' });


			$('.subtitulo-pagina').css({ 'height':'auto' });
		}
	});
});