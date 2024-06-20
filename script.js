var pes = document.querySelector("#peso");
var alt = document.querySelector("#altura");

function imc(){
    var resultado = pes.value / (alt.value * alt.value)
    resultadoFinal = resultado.toFixed(2)
    resultadoFinal = parseFloat(resultadoFinal)
    document.querySelector("#resultado").innerHTML = ("Seu IMC é: ") + resultadoFinal
}

