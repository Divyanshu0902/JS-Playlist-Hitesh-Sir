// ###. Combining two Arrays ###:--

/*      Using "push()" method is not recommendable 
                    (coz it will push the entirity of the second array as one element within the first array.)

        Better option is "concat()" method
        Best option is  "spread operator"
*/

// Example:--

// let footballers = ["Ronaldo", "Messi", "Neymar"];
// let cricketers  = ["Tendulkar", "Dhoni","Kohli"];

// // push() :
// footballers.push(cricketers);
// console.log(footballers);   // [ 'Ronaldo', 'Messi', 'Neymar', [ 'Tendulkar', 'Dhoni', 'Kohli' ] ]

// // concat() :
// let allPlayers  = footballers.concat(cricketers);
// console.log(allPlayers);    // [ 'Ronaldo', 'Messi', 'Neymar', 'Tendulkar', 'Dhoni', 'Kohli' ]

// spread operator  :
// allPlayers = [...footballers, ...cricketers];
// console.log(allPlayers);       // [ 'Ronaldo', 'Messi', 'Neymar', 'Tendulkar', 'Dhoni', 'Kohli' ]


/* ###. Advantage of Spread Operator over concat() method :---
            Spread Operator can join multiple arrays just by seperating them with commas (,)
            but concat() method can join only 2 arrays.
*/

//___________________________________________________________________________________________________________________


// ###. flat() Method :--
//     It Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// let nestedArray = [1,2,3, [4,5], 6,7,8, [9,10, [11,12], 13,14], 15];

// let flatArray1   = nestedArray.flat(1);
// console.log(flatArray1);                // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [ 11, 12 ], 13, 14, 15 ]

// let flatArray2   = nestedArray.flat(2);
// console.log(flatArray2);                // [ 1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12,13, 14, 15]

// let flatArrayI = nestedArray.flat(Infinity);
// console.log(flatArrayI);                // [ 1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12,13, 14, 15]


//______________________________________________________________________________________________________________


//###. (Any-dataType --> Array) conversion:--

// Array.from() method :
// console.log(Array.from("Divyanshu"));        //   ['D', 'i', 'v','y', 'a', 'n','s', 'h', 'u]

// "Array.of()" method : 
// let score1=100, score2=200, score3 =300;
// console.log(Array.of(score1,score2,score3));    //   [ 100, 200, 300 ]


//______________________________________________________________________________________________________________

// "Array.isArray()" :
console.log(Array.isArray("Rohit"));                    // false
console.log(Array.isArray(["R","o","h","i","t"]));      // true





//                                ~~~~~~~~~~~ + ~~~~~~~~~~~~ + ~~~~~~~~~~~~ 