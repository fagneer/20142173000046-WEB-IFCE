function teste() {

    var texto1;
    var texto2;

    texto1 = document.getElementById("texto1");
    texto2 = document.getElementById("texto2")

    if(texto1.value == true){
        texto1.style.color = "green";
    }else{
        texto1.style.color = "red";
    }

    if(texto2.value == true){
        texto2.style.color = "green";
    }else{
        texto2.style.color = "red";
    }

    if(texto1.value == true && texto2.value == true){
        document.getElementById("t").innerHTML = "Enviado com sucesso"
    }else{
		document.getElementById("t").innerHTML = "Preencha o campo"
	}
}