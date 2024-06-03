let student ={
    name : "vivian bassey",
    level: 400,
    adress:{
        number:10,
        city:"uyo",
        country:"usa"
    }
}

// normal js method
console.log(student.name, student.adress)
console.log(student.adress.number,student.adress.city)


// ES6 Destructuring method of extracting values from objects 
// synatx: let {whatever you want to output} = object_name
//  the name of whatever you want to output must be match the name of the object attributes or properties identically as seen below
let {name,adress,level} = student
console.log(name)
console.log(adress)

let {number,city,country}=adress
console.log(number)
console.log(city)
console.log(country)


let car = {
    brand: "Toyota",
    model: "2008",
    color: "White",
    engine: {
        chasis_number: "52649383",
        engine_number: "gw5563993",
        type: "V6",
        number_plugs: 6
    },
    move: () =>{
        console.log("We are moving");
    },
    speed: function(rate){
        console.log(`we're moving at a speed of ${rate}k|hr`)
    }
}

let {brand, model, color, engine, move,speed} = car;
let {chasis_number, engine_number, type, number_plugs} = engine;

move();
speed(150)//so for a function we dont need to console log it, we only need to add the function name inside the 
// curly braces then just call the function afterwhich

let eraser ={
    color:"blue",
    shape:"recangle",
    height:30,
    width:20,
    erase:function(){
        console.log(`call me to erase`)
    }
}


// Destructing an array, how this work is almost as that of objects works but it uses square brackets not curly braces also you dont need to make the name of 
// in the let inside the square bracket to be identical with the item name of the array

let arrayEg = [1,2,3,"tobi",{name2:"abas",age:19}]
let [n1,n2,n3,name1,identity]= arrayEg
let {name2,age} = identity
//console.log(n1,n2,n3, name1, identity)
console.log(name2,age)
console.log(arrayEg[4].name2) // dot notation
