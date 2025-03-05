//virtual memory during the run time it changes the value
let vm=require('vm')
let user={
    name:"john",
    age:22,
    city:"bengaluru"
}
console.log(`before=`,user)
vm.createContext(user);//create virtual copy of object
vm.runInContext(`name="sam";age+=4;`,user);
console.log(`after=`,user)