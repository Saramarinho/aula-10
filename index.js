/*sara this is a js file
Sara Marinho
/*A) Exercício de interpretação de código;
1. let array
console.log('a. ', array); // undefined.

array = null
console.log('b. ', array); // null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array length); // 11.

let i = 0
console.log('d. ', array[i]); // 3.

array[i+1] = 19
console.log('e. ', array); // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13].
//this is a js file


function imprimirOlaMundo(){console.log("Olá mundo!");}

imprimirOlaMundo();

function escreveNome(nome){console.log(nome);}

let meuNome = "Sara";
escreveNome(meuNome);

 const a = 1

 function imprimeVariavel () {
const b = 2
console.log('Variavel a', a)
console.log('Variavel b', b)
}

imprimeVariavel()

 console.log('Variavel a', a)
 console.log('Variavel b', b)
 
 function calculaArea(altura, largura) {
    const area = altura * largura;
    return area;
 }

 const areaCalculada = calculaArea(5, 8);

 console.log("Variável areaCalculada: "+ areaCalculada);
 console.log("Chamada da função crua: " + calculaArea(5, 3));
 

 function numbers(comprimento, altura) {
    const soma = comprimento + altura;
    return soma;}
    const total= numbers(20, 2);
    console.log("Variável total: "+ total);
    console.log("chamada da função crua: " + numbers(2, 2));
*/
function divideArray(meuArray){
    let b = [(meuArray[0] /2),
     (meuArray[meuArray.length-1] /2)];
    return b;
}
let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const resultado = divideArray(a)
console.log(resultado);



