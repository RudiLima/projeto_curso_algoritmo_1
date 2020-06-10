/*
var
   nota1, nota2, media: real
   nome: caractere
inicio
// Seção de Comandos

//Nome aluno
escreval("Digite o nome do aluno: ")
leia(nome)

//Notas aluno
escreval("Digite a Nota 1 do aluno: ")
leia(nota1)
escreval("Digite a Nota 2 do aluno: ")
leia(nota2)

//Condição
media := (nota1 + nota2) /2

// Resultado condição
se media >= 5 entao
   escreval("Aprovado! ", nome)
senao
     escreval("Reprovado! ", nome)
fimse
*/

var nome, n1, n2, passou;

passou = false;

nome = alert("Digite o nome do aluno:")
n1 = alert("Digite a nota 1 do aluno:")
n2 = alert("Digite a nota 2 do aluno")

media = (parseInt(n1) + parseInt(n2)) /2;

if (media >= 5)
    passou = true;

if(passou)  //1º Forma
//if(!passou) //Negação
//if(passou && media >=7) //Conjunção
//if(passou || media >=7) //Disjunçao
//if(passou && (media >=7 && media <=9))
else
    alert("Reprovado ! " + nome)