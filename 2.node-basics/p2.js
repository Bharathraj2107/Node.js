///array
let users=['sam','john','raj']
let i=0;
while(i<users.length){
    console.log('users=',users[i])
    i++
};

//object
let course={
    id:1,
    title:"Node js",
    duration:"1.5 month"
}
console.log('object=',course)
console.log('title=',course.title)
console.log('duration=',course["duration"])