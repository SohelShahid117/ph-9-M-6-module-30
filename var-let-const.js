// var - no reason to use var
// let - reassign
// const - dont allow to reassign

// 30-1 ES6 Intro Difference Between Var, Let And Const
const nmbr = [10,203,30,40,55];
console.log(nmbr);
nmbr.push(5);
console.log(nmbr);
nmbr[1]=2024;
console.log(nmbr);

const mny = 10;
console.log(mny);
taka = mny + 500;
console.log(taka);

const std = {
    name:'sohel',
    age:33
}
console.log(std);

std.name = 'shahid';
console.log(std);

let sum = 0;
for(i=0;i<=5;i++){
    sum = sum+i;
}
console.log(sum);

// 30-2 Function Default Parameter For Not Provided Values

function add(num1=0,num2=0){
    const sum =num1 + num2;
    return sum;
}
const result = add(2,3);
console.log(result);

const result2 = add(2);
console.log(result2);

const result3 = add();
console.log(result3);

function fullName(firstName='',lastName=''){
    const fullName = firstName + " " + lastName;
    return fullName;
}
const name = fullName('sohel');
console.log(name);

const name2 = fullName('sohel','shahid')
console.log(name2);

// for Array default param--->[]
function nmbr2(numb =[]){
    number = numb;
    return number;
}
let numberrr = nmbr2([2,3,4,5]);
console.log(numberrr);
let numberrr2 = nmbr2();
console.log(numberrr2);

function stdInfo(std={}){
    nam = std.name;
    age = std.age;
    console.log(nam)
    console.log(age)
}
stdInfo({
    name: 'aadil',
    age:2
})

// stdInfo({});---->ata teke kibabe o/p pawa jabe

// 30-3 Template String, Multiple Line String, Dynamic String