/*
JS has got all dataTypes classified under 2 big categories-

 (A). PRIMITIVE dataTypes :
         1.Number 2.String 3.Boolean 4.bigInt 5.null 6.Undefined 7.Symbol

 (B). NON-PRIMITIVE dataTypes : 
         1.Arrays 2.Objects 3.Functions
*/



//NUMBERS :
const num1 = 10;
console.log(num1);

const num2 = 10.3;
console.log(num2);


//bigInt :
const num3 = 10n;
console.log(num3);
console.log(typeof num3);


//STRING:
const str1 = 'Divyanshu';
console.log(str1);

const str2 = 'Divyanshu';
console.log(str2);


//BOOLEAN : 
const darkMode = true;
console.log(darkMode);
console.log(typeof (darkMode));


//NULL :
const x = null;
console.log(x);
console.log(typeof x); //-> Object

//UNDEFINED : 
// const c; // This will create error because const must be initialized.
let c;      // This will show no error.
console.log(c);
console.log(typeof c);

//SYMBOL :
let id = Symbol('123');
let id2 = Symbol('123');
console.log(id==id2);       // -> false   , because Symbol makes every input unique even if value is same as some other previous entry


//-----------------------------------------------------------------------------------------------------


//ARRAY : 
let arr = [1,2,3];
console.log(typeof arr);    //object
console.log(arr);

let arr2 = [1,1.5,10n,true,"Divyanshu",null,undefined];
console.log(typeof arr2);    // object
console.log(arr2);


//OBJECT :
let obj = {
    name: "Divyanshu",
    nickName: "Rohit",
    rollNo: 2454006,
    isVegetarian: true,
};

console.log(typeof obj);
console.log(obj);
console.log( obj.isVegetarian);


//FUNCTIONS : 
function myFunction() {
    console.log('Hello Divyanshu!')
}
