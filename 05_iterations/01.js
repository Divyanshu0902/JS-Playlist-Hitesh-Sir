//###. for loop ### :--

// #.Printing table of 2 to 10 using nested loop;-

// for (let i = 2; i <= 10; i ++) {
//     console.log(`***Table of ${i} :`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}*${j} = ${i*j}`);
//     } 
// }


// #.Printing elements of Array :--

// let myArray = ["Ronaldo","Messi","Neymar"];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(`${myArray[i]} is GOAT!!!`);
// }


//----------------------------------------------------------------------------------------------------------------

//###. break and continue :--

// BREAK :--
for (let i = 0; i < 5; i++) {
    if(i==2){
        console.log(`2 Detected!`);
        break;
    } 
    console.log(`Value of i: ${i}`);
}

// O/p:--
// Value of i: 0
// Value of i: 1
// 2 Detected!


// CONTINUE :--
for (let i = 0; i < 5; i++) {
    if(i==2){
        console.log(`2 Detected!`);
        continue;
    } 
    console.log(`Value of i: ${i}`);
}

//----------------------------------------------------------------------------------------------------------------


