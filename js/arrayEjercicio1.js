/*CONSIGNA
Ejercicio 1
Hacer una función que reciba un array de strings y retorne una string igual a la concatenación de todos sus elementos. 

Ejemplo:
console.log(concatenar(["s","a","r","a","s","a"])); // imprime "sarasa"
console.log(concatenar(["h","o","l","a"])); // imprime "hola"*/

let arr = ['c','a','l','a','b','a','z','a']

function arrayToString (arr) {    
  console.log(arr.join(''));
}

arrayToString(arr)
