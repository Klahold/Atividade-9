console.log("Hello, world!")
let numero = parseInt(prompt("digite um numero: "));
function verificarPar(numero){
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é impar");
    }
}
verificarPar(numero);

let n1 = parseInt(prompt("digite um numero"));
let n2 = parseInt(prompt("digite um numero"));
function calcular(n1,n2) {

    const soma = (n1+n2);
    const sub = (n1-n2);
    const mult = (n1*n2);
    const div = (n1/n2);

    console.log("o resultado da soma " + soma);
    console.log("o resultado da subtração " + sub);
    console.log("o resultado da multiplicação " + mult);
    console.log("o resultado da divisão " + div);
}
calcular(n1,n2)

let n = 11;
let x = 0;

while (n > 1) {
  n--;
  x -= n;
  console.log(n);
}

let str = prompt("digite um texto?")
function inverterTexto(str) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log (joinArray);
}
inverterTexto(str)