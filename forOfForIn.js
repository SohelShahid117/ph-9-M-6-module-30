// 30-9 For Of, For In, Module Summary And Practice Problems
//for of--->use in Array & String
//for in--->use in Object

const numbers = [1,2,3,44,55,6,77];
for(const num of numbers){
    console.log(num);
}

const nobab = `Siraj Ud Dowla`;
for(const char of nobab){
    console.log(char);
}

const galss = {
    name : 'glass',
    price : 10,
    isCleaned:true,
    source:"BD"
}
for(const ky in galss){
    console.log(ky + ":" + galss[ky]);
}

const keyss = Object.keys(galss);
console.log(keyss);//[ 'name', 'price', 'isCleaned', 'source' ]
for(key of keyss){
    // console.log(key);
    // console.log(galss.key);
    console.log(`${key} : ${galss[key]}`);
}