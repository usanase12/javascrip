//arrays
// numeric array
let numbers = [1,2,3,4,5];
//String array
let fruits = ["apple","banana","orange"]
//let mixed datatypes
let mixedArray = [10,"hello",true, [1, 2, 3]];
// ACCESSING Data FROM ARRAY
let firstFruit = fruits[0];//apple
console.log(firstFruit)
let secondNumber = numbers[1];
console.log(secondNumber);
//displaying Data from Array using loop
//1.For loop
for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
//2. forEach loop
fruits.forEach(function(fruit){
    console.log(fruit);
});
//measuring the size of Array
let sizeOfNumber = numbers.length;//5
let sizaOfFruits = fruits.length;//3
console.log(sizeOfNumber);
console.log(sizaOfFruits);


//function

function greet(name){
    console.log("Hello, " + name + "!");
}
//calling the function
greet("sando");
//here are the difference ways to define and call functions

//1.function Expression
let greett = function(name){
console.log("Hello, " +name+ "!");
};
//call
greett("usanase");

//Arrow Fuction

let greety = (name) => {
    console.log("Hello, " + name + "!");
};
//call
greety("confy");

//Parameters and arguments

/* parameters: there are variables listed in function Definition
   Arguments: are values passed to the function when is to be called
*/

function add(x, y){
    return x + y;
}//x and y are parameters
let result = add(3, 5); //3 and 5 are arguments
console.log(result);

//performing operation on array using function

//summing array elements

function sumArray(array){
    let sum = 0;
    for (let i = 0; i <array.length; i++){
        sum+=array[i];
    }
    return sum;
}
let total = sumArray(numbers)
console.log(total)

// Modifying Array Elements
// function doubleArray(array){
//     for (let i=0; i < array.length; i++){
//         array[i] *=2;
//     }
// }

// doubleArray(numbers);





