let user={
    name:"john",
    email:"john@example.com",
    age:22,
    city:"bengaluru",
    getUser:function(){
        console.log(`name= ${this.name}`);
    }
}
//default export
module.exports=user