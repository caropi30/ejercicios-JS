/*CONSIGNA
Ejercicio 2
Hacer una función que reciba una string y retorne la misma string pero agregando después de cada caracter su índice correspondiente. 
Es decir, que retorne la misma string transformada de la siguiente forma:

console.log(agregarIndice("kawabonga")); // imprime "k0w1a2b3o4n5g6a7"
console.log(agregarIndice("casa")); // imprime "c0a1s2a3"
*/

let str = 'Ignacia';
str;


let strLength = str.length;
strLength;

let strJoin = '';

for (let i = 0; i < strLength; i++) {
    //console.log(`${str[i]}${i}`);
    strJoin += str[i] + i  
}  



