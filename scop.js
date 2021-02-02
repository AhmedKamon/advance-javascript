// if scoop is not inside a function it can accessed anywhere cause its a global scoop
// global scoop ==
// var is deferent, if i use var for scooping i can use it out side if any function or loop
let kamon = 25 ;

function student(ages1, age2){
    let old  = ages1 + age2 + kamon;
    return old;
}
const total = student(10, 15);
console.log(total);
//global scoop




// function sum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// const total = sum(10, 15);
// console.log(result);
// console.log(total);