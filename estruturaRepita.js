/*
var
   sairLoop: caracter
   v1, v2: real

inicio
   repita
         escreva("Digite o 1º valor: ")
         leia(v1)
         escreva("Digite o 2º valor: ")
         leia(v2)
         escreval("Resultado: ", v1 + v2)
         escreval("Deseja sair ? S/N")
         leia(sairLoop)
   ate sairLoop <> "n"
*/

function acaobotao(){
    var v1, v2, sairLoop

    do{
        v1 = prompt("Digite o 1º valor: ")
        v2 = prompt("Digite o 2º valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(v1) + parseInt(v2))
        sairLoop = prompt("Deseja sair ? S/N")
    }while(sairLoop == "N")

}