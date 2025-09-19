//type conversion of 'null'---
let score = null
console.log(typeof score) // VVVI- type of null is- 'object'
console.log(score)

let val_in_num = Number(score)
console.log(typeof val_in_num) // output- 'number'
console.log(val_in_num) // output- '0'



// type conversion of 'undefined'---
let score2= undefined
console.log(typeof score2) // VVVI- type of undefined is- 'undefined'
console.log(score2)

let val_in_num2 = Number(score)
console.log(typeof val_in_num2) // output- 'number'
console.log(val_in_num) // output- '0'


//conclusion= null ya undefined ko jab number me convert karke doosre variable me coverted value store kiya jaayega tab, naye variable ka value '0' rahega //

/* conversion of booleans into number--
    if 'true' is converted to number , value will be '1'  and in case of 'fale' it's '0'
*/

/*if a total alphabet string is converteN into number, the value will be NaN */
