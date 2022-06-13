//Operadores de Atribuição

// = atribui um valor
// + atribui uma concatenação
// - atribui uma subtração
// / atribui uma divisão
// * atribui uma multiplicação
// ++ atribuição de incremento
// -- atribuição de decremento

var x = 1;
var y = 2;

//soma
console.log((x = x + y)); //completa
console.log((x += y)); // simplificada

let dado = "1" + "1";
console.log(dado);

console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

/*  variavel = valor

while(condição){
    tarefa
    iteração
} */

let count = 30;

while (15 <= count) {
  console.log(count);
  count--;
}

/* (variavel contador;  condição; iteração){
    (tarefa);
} */

for (let count = 2; count <= 25; count += 3) {
  console.log(count);
}

/* for (let count = 10; sem condição bixo ; count++){
    console.log(count) loop infinito
} */
