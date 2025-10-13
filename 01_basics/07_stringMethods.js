// //old way of writing strings :-
// console.log("Hello " + "World!");
// console.log('Hello ' + 'World!');

// //new way of writing strings :- (Template Literals)
// console.log(`Hello World!`);  
// console.log(`Hello 
// World!`);  //multiline string

// const name = 'Divyanshu';
// const age = 21;
// console.log("Hello " + name + " !");

// console.log(`Hello! I am ${name}. I am ${age} years old.`);


//-----------------------------------------------------------------------------------------------------

//String Methods :
const str1 = 'Divyanshu';
console.log(str1);
console.log(typeof str1);
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.slice(0,4));
console.log(str1.slice(0,7));
console.log(str1.replace('Divyanshu','Rohit'));
console.log(str1.replace('vyan','ro'));  //only first matching substring will be replaced
console.log(str1.concat(' is a good boy'));
console.log(str1.concat(' is a good boy and he is', age, ' years old'));
console.log(str1.charAt(4));
console.log(str1.indexOf('y')); //index of first occurrence of 'y'
console.log(str1.indexOf('z')); //-1 because 'z' is not present in str1
console.log(str1.includes('shan')); //true
console.log(str1.includes('xyz')); //false
console.log(str1.startsWith('Div')); //true
console.log(str1.startsWith('div')); //false
console.log(str1.endsWith('shu')); //true
console.log(str1.endsWith('Shu')); //false      
console.log(str1.split('')); //splits at every character and returns array of characters
console.log(str1.split('y')); //splits at every 'y' and returns array of substrings
console.log(str1.split('sh')); //splits at every 'sh' and returns array of substrings


 

