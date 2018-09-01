$(document).ready(function(){
	$(".cor").mouseover(function(evento) {
		var cor = $(evento.target).attr("id")

		if(cor == "vermelho") {
			trocaCor("#eb5757")
		} else if(cor == "azul") {
			trocaCor("#2f80ed")
		} else if(cor == "verde") {	
			trocaCor("#219653")
		} else if(cor == "roxo") {
			trocaCor("#9b51e0")
		}
	});

	$(".rodape-mensagem").mouseover(function() {
		document
		.documentElement
		.style
		.setProperty("--corDeFundo", "#f2994a")
	});

	$("#enviar").click(function() {
		var nome = $("#nome").val()
		var email = $("#email").val()
		var empresa = $("#empresa").val()
		var motivo = $("#motivo").val()

		$.ajax({
			url: "https://simple-form.com/figueiredo_igor@id.uff.br?json",
			method: "POST",
			data: {
				nome: nome,
				email: email,
				empresa: empresa,
				motivo: motivo
			}
		});
	});
});

function trocaCor(cor){
	document
		.documentElement
		.style
		.setProperty("--corDeFundo", cor)
};