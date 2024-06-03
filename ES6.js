// console.log(`<h1> hello ${name}, you're currently ${age}</h1>
//             ccvccv I am rooting for you!!!!!!
//             <p>my word for you is to keep going 
//             i have no doubt that you will be great very soon
//             I am your biggest fan</p>`


const people = [
    { name: 'Max', age: 10 }, 
    { name: 'Jack', age: 6 }, 
    { name: 'Mary', age: 8 }
]

// JavaScript
// function findPerson(name) {
//     for (let i = 0; i < people.length; i++) {
//         let person = people[i]
//         if (person.name === name) {
//             return person
//         }
//     }
// }
// n =findPerson("Jack")
// console.log(n)


// ES6
// // .find method in ES6
// function findPerson(age) {
//     return people.find((person) =>{
//         return person.age == age }
//     )
// }

// let person1 = findPerson(8);
// if(person1)
//     console.log('Person found : ', person1)
// else
//     console.log('Person not found')



// me trying .find method below
// function age(age1){
//     //age1 = prompt("enter your age")
//     return age1
// }
// let r_age = people.find(age)
// console.log(r_age)
// let r = age(8)
// let ra = people.find(r)
// console.log(ra)

 // me trying a second approach

 
//  function firstFunction(i){
//     return i.age == age
//  }

//  function mainCombo(n){
//     return people.find(firstFunction)
//  }
// let a = mainCombo(8)
// console.log(a)
