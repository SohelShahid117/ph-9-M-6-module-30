// 30-6 Spread Operator, Array Max, Copy Arrays:
const student = {
    name : "sohel",
    age:33,
    dept : 'EEE'
}
// const nam = student.name;
// const boyos = student.age;
// const dept = student.dept;
const {name,age,dept,versity}=student;
console.log(name);
console.log(name);
console.log(name);
console.log(age);
console.log(dept);
console.log(versity);

const numbersss = [10,12];
const [x,y] = numbersss;
console.log(x);

function dblValue(a,b){
    return [a*2,b*3]
}

const [x1,y1] = dblValue(10,20)
console.log(x1,y1);