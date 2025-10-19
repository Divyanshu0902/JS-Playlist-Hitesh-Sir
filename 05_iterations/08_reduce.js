
// 1 + 2 + 3 + 4
let myNum = [1,2,3,4];

let initialVal = 0;
let myTotalNums = myNum.reduce( (accumulator,item) => accumulator+item,initialVal);

console.log(myTotalNums);   // 10

