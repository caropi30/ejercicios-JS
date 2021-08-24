/*Hacer una función que reciba un objeto y retorne un array con todos los valores de sus propiedades cómo elementos. 
Ejemplo:

console.log(aArrayDeValores({ a: 1, b: "z", c: 3})); // imprime [1, "z",3]
console.log(aArrayDeValores({ a: "f", b: true})); // imprime ["f", true]
*/ 

let valueArr = {
    a: 1,
    b: 'z',
    c: 3
};

console.log(typeof(valueArr));

function objToArr(){
    return Object.values(valueArr);
}

objToArr([valueArr]);