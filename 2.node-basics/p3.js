//functions

//function definition (local function)
function product(a,b){
    return a*b
}

//function expression -arrow function
const sum=(a,b)=>{
    console.log('sum=',a+b)
}
//function expression -const local function
const diff =function(a,b){
    console.log('diff=',a-b)
}
// let out1=product(12,2)
// console.log('product=',out1)
// sum(10,24)
// diff(21,5)

//method export or constant
module.exports={ product,sum,diff}