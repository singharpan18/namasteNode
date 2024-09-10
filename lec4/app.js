//require("./xyz.js");//one module into other

//const calculateSum = require("./sum.js");
//const obj = require("./sum.js");
//const {x, calculateSum} = require("./sum.js");

import {x, calculateSum } from "./sum.js";

var name = "Namaste Node";

var a = 10;
var b = 20;

//calculateSum(a,b);

// obj.calculateSum(a, b);
// console.log(obj.x);

calculateSum(a, b);
console.log(x);

console.log(globalThis === global);