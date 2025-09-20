//~~~type conversion of String containing Numbers only~~~
let score="33"
console.log(typeof score) // console.log(typeof (score)) -this method can also be used.
console.log(score)

let val_in_num = Number(score)
console.log(typeof val_in_num)
console.log(val_in_num)


//--- type conversion of string containing number and alphabet---
let score2 = "33abc"

let val_in_num2 = Number(score2)
console.log(typeof val_in_num2)  
                // this gives 'number' as datatype of 33abc which is confusing.
console.log(val_in_num2) 
                /*this gives 'NaN' as value. 
                This is ambiguity is the result of converting '33abc' which is not a number into a number which leads to datatype of new variable as 'number' but the actual value is not any number but 'NaN' */
