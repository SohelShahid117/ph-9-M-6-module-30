// 30-8 Keys, Values, Entries, Delete, Seal, Freeze

const glass = {
    name:'mog',
    price : 12,
    color:'white',
    isCleaned : true
}
console.log(glass);
console.log(glass.name);

const keysss = Object.keys(glass);
console.log(keysss);
// all keys : [ 'name', 'price', 'color', 'isCleaned' ]

const valuesss = Object.values(glass);
console.log(valuesss);
// all values : [ 'mog', 12, 'white', true ]

const pairssss = Object.entries(glass);
console.log(pairssss);
/* 2D array or array of array
    [
        [ 'name', 'mog' ],
        [ 'price', 12 ],
        [ 'color', 'white' ],
        [ 'isCleaned', true ]
    ]
*/

console.log(glass);
delete glass.color;
console.log(glass);

const {isCleaned,...gls} = glass;
console.log(gls);
console.log(glass);

//freeze;
glass.source = 'bangladesh';
console.log(glass);

// Object.freeze(glass);//freeze property add korle objet er key:value pair change/add hobena
glass.quality = 'good';
delete glass.price;
console.log(glass);

console.log(`-----------------------------`);
Object.seal(glass);  //noton key:value pair add hobena but internal key:value pair update/change hobe 
glass.demand='heavy';
glass.source = 'china'
console.log(glass)

