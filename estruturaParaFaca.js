
function acaobotao(){
    var numero, fatirial, contador

    numero = prompt("Digite um nº para calcular o fatorial: ")
    fatorial = 1
    for(contador = 1; contador <= numero; contador ++){
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}
