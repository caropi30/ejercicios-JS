/*CONSIGNA
## Ejercicio 2
Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos, 
pero qué cada elemento sea el tipo de dato del array original. 

Ejemplo:
console.log(transformarATipos([1,"casa", {}])); // imprime ["number", "string", "object"]
console.log(transformarATipos([function(){}, true]); // imprime ["function", "boolean"]*/


let arr = [1,'hola', true,456, 'esta es una vuelta', false];

let typesOfItems = '';

function dataTypes (arr) {
  for (let i = 0; i < arr.length; i++){
  //console.log(i , typeof(arr[i]))
  console.log(typesOfItems += typeof(arr[i]) + ',')
  }
}

dataTypes(arr);


let typesToArray = typesOfItems.split(',');
typesToArray;

