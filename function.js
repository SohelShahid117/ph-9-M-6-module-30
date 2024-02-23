// 30-4 Arrow Function, Multiple Parameter, Function Body

function add(a,b){
    // const result = a+ b;
    // return result;
    return (a+b);
}
const sum = add(10,29);
console.log(sum);

const add2 = function(a,b){
    return a+b;
}
let sum2 = add2(2,4);
console.log(sum2);

const add3 =(a,b)=>(a+b);
let sum3 = add3(9,10);
console.log(sum3);

// 30-5 More Arrow Functions And Big Arrow Function
const sub =(x,y)=>x-y;
let diff = sub(12,22);
console.log(diff);

const person = (prsn)=>prsn.age;
const student = {
    name : 'aadil',
    age: 2
}
const age = person(student);
console.log(age);

const getThird = (nmbr) =>nmbr[2];
const number =[10,20,30,40,50];
const third = getThird(number);
console.log(third);

const dblNmbr = (nmbr)=>nmbr*2;
// const dbl = dblNmbr(number);
const dbl = dblNmbr(99);
console.log(dbl);

const getPi=()=>Math.PI;
console.log(getPi());

const multJob=(a,b,c)=>{
    const sum = a+b+c;
    const mul = a*b*c;
    const result = sum + mul;
    return result;
}
console.log(multJob(2,3,4));
