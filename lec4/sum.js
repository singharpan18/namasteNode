//modules protect their variables and functions from leaking for using it in other module export it and then import
console.log("namste node sum module executed");

export var x = "Hello World";

export function calculateSum(a, b){
    const sum = a + b;
    console.log(sum);
}

//module.exports = calculateSum;

// module.exports = {
//     x: x,
//     calculateSum: calculateSum,
// };

//module.exports =  {x, calculateSum};