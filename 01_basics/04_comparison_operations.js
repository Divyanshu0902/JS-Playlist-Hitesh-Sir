//--- simple comparison operations---
// Ex- >,<,==,>=,<=,!=
// Oputput is in true/false

// console.log(1>2)
// console.log(3!=4);


//***--- comparison b/w diff datatypes---
// console.log("02"==2)    //true
// console.log("02"=="2")  //false
// console.log("2">1)      //true
// console.log("2">"1")    //true

// console.log(null>0)     //false
// console.log(null==0)    //false
// console.log(null>=0)    //true -->ambiguous result!!!

// console.log(undefined==0);  //false
// console.log(undefined>0);   //false
// console.log(undefined<0);   //false


// ***STRICT CHECK:-  ===
//it checks both the value and datatypes.
console.log("2"===2)    //false --both datatype and value checked.
console.log("2"==2)     //true  --data type not checked, only value checked

// ***NOTE:
// These kind of comparisons are confusing so they must be avoided
//only compare between same datatypes.