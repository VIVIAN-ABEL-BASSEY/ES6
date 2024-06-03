
export function sqr(x){
    return x**2;
}

export let sum =(x,y)=>{
    return x+y
}

export default function test(){
    console.log("just a test")
}



















nums = [10,20,30,40,50,60,70,80,90,100]
function sum(n1,n2){
    return n1 + n2
}
let result = nums.reduce(sum)
console.log(result)

let mapping = nums.map(sum)
console.log(mapping)

function multi(n){
    return n*=2
}
multiplicaton = nums.filter(multi)
console.log(multiplicaton)

for_each = nums.forEach(multi)
console.log(for_each)