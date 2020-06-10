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

var nome, nota1, nota2, media;

nome = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a Nota 1: ");
nota2 = prompt("Digite a Nota 2: ");


media = (parseInt(nota1) + parseInt(nota2)) / 2;

//Bloco condicional
if(media >= 5){
    alert("Aprovado ! " + nome)
}
else
    alert("Reprovado ! " + nome)
