//var n1, n2, res, op // Variaveis fora são globais

function acaobotao() {
    var n1, n2, res, op // Variaveis dentro são somente usadas dentro da funções    

    n1 = prompt("Digite o 1º numero: ")
    op = prompt("Digite a operação: Ex +, -, *, / !")
    n2 = prompt("Digite o 2º numero: ")
    
    if (op == "+"){
        res = parseInt(n1) + parseInt(n2)
    }else if(op == "-"){
        res = parseInt(n1) - parseInt(n2)
    }else if(op == "*"){
        res = parseInt(n1) * parseInt(n2)
    }else if(op == "/"){
        res = parseInt(n1) / parseInt(n2)
    }
    //document.getElementById("paragrafo").innerText = res  //FUCIONANDO
    document.getElementById("paragrafo").innerText = "Os numeros " + n1 + op + n2 + " é igual a " + res
}


    