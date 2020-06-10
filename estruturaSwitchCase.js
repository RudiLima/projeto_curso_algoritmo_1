function acaobotao() {
    var n1, n2, res, op // Variaveis dentro são somente usadas dentro da funções    

    n1 = prompt("Digite o 1º numero: ")
    op = prompt("Digite a operação: Ex +, -, *, /")
    n2 = prompt("Digite o 2º numero: ")
    
    switch (op){
        case "+":
            res = parseInt(n1) + parseInt(n2)
            break;
        case "-":
            res = parseInt(n1) - parseInt(n2)
            break;
        case "*":
            res = parseInt(n1) * parseInt(n2)
            break;
        case "/":
            res = parseInt(n1) / parseInt(n2)
            break;
    }
    //document.getElementById("paragrafo").innerText = res  //FUCIONANDO
    document.getElementById("paragrafo").innerText = "Os numeros " + n1 + op + n2 + " é igual a " + res + "!"
}