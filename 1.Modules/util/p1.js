//utility =>templates(sms,email,ad)replace %s and %d
const util=require('util')
const myTemplate=`Hi %s, welcome to the %s and duration is %d months`;
let res1=util.format(myTemplate,"Tom","React js",1.4); 
let res2=util.format(myTemplate,"John","Node js",2.1);
console.log(`res1=`,res1)
console.log(`res2=`,res2)