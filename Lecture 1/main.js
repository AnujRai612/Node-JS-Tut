// var a=5,b=6;
// var ans=a+b;
// console.log(a+b);
// console.log("I am Anuj and my age is :" + (a+b))


//variables
// var -> variable declaration , supports hoisting , function scoped 
//let -> variable declaration , do not support hoisting in temporal dead zone , block scoped 
// const -> constant declaration whose value will not change once declared and value is assigned.
// var age=11;
// let b=5;
// if(age > 10){
//     var islegal=true;
//     //let isallowed=true;
// }
// else{
//     var islegal=false;
//    // let isallowed=false;
// }
// let isallowed=false;
// const country="INDIA";
// // country="PAKISTAN";
// console.log("He is " + islegal+ "age and allowed is " + isallowed + "in country" + country);


//Array
// var variable=5;
// const cars=["XUV", "Scorpio" , 32, variable];
// console.log(cars);
// cars.push("Tesla");
// console.log(cars);
// console.log(cars[3]);


//For Loop
// var count=10;
// for(var i=0;i<=count;i++){
//     console.log(i);
// }


//Objects
// const person={
//     name:"Anuj",
//     age:23,
//     isStudent:false,
//     hobbies:["driving","cricket","badminton"]
// }
// console.log(person)
// console.log(person.age);


//Functions
// const age=[23,12,33,54,9,11];
// const result=age.filter(checkAge);

// function checkAge(age){
//     return age>=18;
// }
// console.log(result);


//Input->prompt
// var prompt = require('prompt-sync')();
// const age=prompt("Enter your age");
// if(age>=18)
//     console.log("You ar eligible to drive");
// else
// console.log("You are not eligible");


//Q1
// var prompt = require('prompt-sync')();
// const age=prompt("Please enter your age");
// if(age<18)
//     console.log("You get a 20% discount");
// else if(age>=18 && age<=65)
//     console.log("Normal ticket pricer applies");
// else
// console.log(" You get a 30% senior discount");


//Q2
// var prompt = require('prompt-sync')();
// var length=prompt("Enter length of rectangle");
// const width=prompt("Enter width of rectangel");
// console.log(length*width);

//Q3
// const product ={
//     name:["pen","pencil","eraser"],
//     price:10,
//     instock:true
// }
// console.log(product.name);

