// let n =5;

// for(let i=0; i<n; i++){
//     console.log("Hello, Anant" , i);
// }

// console.log("Bey .....");

// console.log(process.argv);

let arg = process.argv;
for(let i=2; i<arg.length; i++){
    console.log("Hello to ", arg[i]);
}