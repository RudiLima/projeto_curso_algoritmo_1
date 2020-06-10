
function acaobotao() {
var nome, idade, limite, contador

limite = prompt("Verifique a idade quantas vezes: ")
contador = 0

    while (contador < limite) {
        nome = prompt("Escreva seu nome: ")
        idade = prompt("Digite a idade do " + nome)
            if (idade > 18)
                document.getElementById("paragrafo").innerText = nome + " Você é de maior de idade."
            else
                document.getElementById("paragrafo").innerText = nome + " Você é de menor de idade."
            contador++

     }
}