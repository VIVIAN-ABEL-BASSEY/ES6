// // ES6 Arrow function declearation shorthand for functions that will contain on a single instructions
// let sum = (n,m)=>(n+m)
// let addition = sum(3,4);
// console.log(addition)


// // ES6 Arrow function declearation for instructions more than one line
// let sub = (n,m)=>{
//     let result = n-m;
//     // return result
//     console.log(result)
// }
// // let subtraction = sub(3,4)
// // console.log(subtraction)
// sub(6,4)  //do this if you console log your result inside the function,the if you return your result inside the function you perform the 2 lines of code above


// let sayhello = (name)=>{
//     console.log(`hello ${name} are you there`)
// } 
// let saybye = ()=>{
//     console.log("good bye")
// }
// sayhello("vv")
// saybye()

// let dosomething =(callme)=>{
//     if(typeof(callme)=="function")
//         callme()
//     else
//         console.log("not a function")
// }
// dosomething(sayhello("vivian"))
// item=["name","with",80] // n|b this wont work because "name is not a function"
// console.log(item.find("name"))  // the .find method take in a function as an argument

const people = [
    { name: 'Max', age: 10, level: 200 }, 
    { name: 'Jack', age: 6, level: 400 }, 
    { name: 'Mary', age: 8, level: 300 }
]

//Normal JavaScript method
// function findPerson(name) {
//     for (let i = 0; i < people.length; i++) {
//         let person = people[i]
//         if (person.name === name) {
//             return person
//         }
//     }
// }
// finame = findPerson("Mary")
// console.log(finame)

// ES6 .find method
// this method takes it an arrow function as an argument,here you skip the varieble declearartion part
// the arrow function part will start from the RHS i.e from the parameter to the instruction

// function findPerson(age) {
//     return people.find((i) => i.age == age)
// }

// let i= findPerson(10);
// if(i)
//     console.log('Person found : ', i)
// else
//     console.log('Person not found')

// Normal JavaScript
// function showEachOne() {
//     for (let i = 0; i < people.length; i++) {
//         console.log(people[i].name, people[i].age,people[i].level)
//     }
// }
// showEachOne()


// ES6 .showEach method
// this method takes in an arrow function as an argument,here you skip the varieble declearartion part
// the arrow function part will start from the RHS i.e from the parameter to the instruction

// const showEachOne = () => {
//     people.forEach((i) => {
//          i.level = 100
//         // console.log(i.name, i.age)
//     })
// };

// console.log('People before change', people)

// showEachOne();

// console.log('People after change', people)

const products = [
    {name:"Milk", price:15}, 
    {name:"Water", price:9}, 
    {name:"Bread", price:5},
    {name:"Butter", price:25},
    {name:"Garri", price:11}
];

//Normal JavaScript
// function filterProductsByPrice(price) {
//     let filteredProducts = [];
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price >= price) {
//             filteredProducts.push(products[i]);
//         }
//     }
//     return filteredProducts;
// }
// let p = filterProductsByPrice(12)
// console.log(p)

// ES6 .filter method
// this return an array of data that meets the condition or requirements that are set by the function passed as argument to the .filtered method
// const filterProductsByPrice = (price) => {//method 1
//     const f = (product) => product.price >= price
//     let result = products.filter(f);
//     return result;
// } 
// console.log(filterProductsByPrice(15));

// const filterProductsByPrice = (price) => {              //method 2 simplified
//     let result = products.filter(product => product.price >= price);
//     return result;
//     // return products.filter(product => product.price >= price);  // this also will work
// }
// console.log(filterProductsByPrice(11));


// the .map method
// this work exactly like the .forEach method,it execute the instruction found in a function passed
// as an argument to it on all the data contained in an array but this only work on the copy of the array thereby keeping the original data of the array untouched

// let changeProducts = ()=>{
//     return products.map(products=>({
//         ...products,
//         price:products.price+2,
//         sku:10
//     }));
  
// };


// let newproducts = changeProducts()
// console.log(newproducts)
// console.log(products)

// .reduce method
// This perform a function on an array thereby reducing the values found on the array to a single value
let data = [5,10,15,20,25]
let sum =(total,currentValue) => {
    return total + currentValue
}
let reducedArray = data.reduce(sum)
console.log(reducedArray)


// shorthand method for the .reduce method
// const sumshorthand = (total, currentValue) => total + currentValue
// const resduceData = data.reduce((total, currentValue) => total + currentValue)
