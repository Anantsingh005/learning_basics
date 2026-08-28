// let n =5;

// for(let i=0; i<n; i++){
//     console.log("Hello, Anant" , i);
// }

// console.log("Bey .....");

// console.log(process.argv);

// let arg = process.argv;
// for(let i=2; i<arg.length; i++){
//     console.log("Hello to ", arg[i]);
// }

// const math = require('./math');
// console.log(math.G);
// console.log(math.sum(5, 6));

// const info = require("./fruits");
// console.log(info);

import{ mul, PI}from './math.js';
import randomWord from 'random-word';
randomWord();
randomWord();
console.log(mul(5, 6));
console.log(PI);