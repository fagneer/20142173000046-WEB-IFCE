
function teste() {

    var valor = document.getElementById("bot").value;

    if(valor < 10){
        document.getElementById("nome").innerHTML = "insuficiente";
    }

    if(valor >= 10 && valor <= 14){
        document.getElementById("nome").innerHTML = "Bom";
    }

    if(valor > 14){
        document.getElementById("nome").innerHTML = "Muito bom";
    }
}