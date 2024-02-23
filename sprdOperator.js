// 30-6 Spread Operator, Array Max, Copy Arrays:
const max = Math.max(11,2,33,44,21,13,3);
console.log(max);
const min = Math.min(11,2,33,44,21,13,3);
console.log(min);

const nmbr = [5,6,7,1,2,77,88,99,11,222,44,54];
const arrMax = Math.max(nmbr);
console.log(typeof arrMax,arrMax);

const arrMax2 = Math.max(...nmbr);
console.log(typeof arrMax2,arrMax2);

const frnd = [19,2,23,45,6];
const dost = frnd;
frnd.push(69);
console.log(`frnd = `,frnd)
console.log(`bondhu = `,dost);

console.log(`--------------`);
const bondhu = [...frnd];
frnd.push(99);
console.log(`frnd = `,frnd);
console.log(`bondhu = `,bondhu);

const sonka = [...frnd,77,87,97];
console.log(sonka);

const allNmbr = [1,2,3,...sonka,65,95,85,75];
console.log(allNmbr);
