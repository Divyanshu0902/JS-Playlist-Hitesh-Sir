// ###. FOR OF loop :--
//      ** In this loop we don't have the burden of specifying initialization,updation and termination condition
//         the for of loop takes care of these internally
//      **It can be applied on Arrays, Strings and Maps (but not Objects).

// Ex 1:--
let arr = [1,2,3,4,5];

for (const i of arr) {
    // console.log(`Value: ${i}`);
}

// Ex 2:--
let str = "Divyanshu Kumar";

for (const j of str) {
    // console.log(j);
}


//________________________________________________________________________________________________________________

// ###. MAPS :--
//      ** maps are like objects but they store only "UNIQUE VALUES" (ie no repetition of key-value pair.)
//      ** and it REMEMBERS the ORDER of key-value pairs.

const map = new Map();

map.set("IN","India");
map.set("UK","United Kingdom");
map.set("FR","France");
map.set("RU","Russia");

// console.log(map);


// ##.for of loop on MAP :--

for (const [i, j] of map) {
    console.log(i, ':-', j);
}

// NOTE :- Objects are not iterable with for of loop like maps!