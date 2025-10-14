//                                              ~~~ ARRAY ~~~

/* JS Arrays are - (a) Resizeable
                   (b) can contain multiple data types
                   (c) 0 indexed
*/

// ###. defining Arrays ###:--

// let myArr = [0, 1, 2, 3, 4, 5]; 

// let strArr = ["Rohit", "Divyanshu", "Sunny"];

// let myArr2 = new Array(10, 20, 30, 40, 50);

//--------------------------------------------------------------------------------------------------------------

// #####. Accessing an element of an Array :--
// console.log(strArr[1]);

//______________________________________________________________________________________________________________

// ###. array METHODS ###:--

// myArr.push(9);               // inserts element at the end.
// myArr.push(9,11,13,15,17);   // can push multiple elements too
// myArr.pop();                 // removes last element.

// myArr.shift();               // deletes first element and shift all others to one position left.
// myArr.unshift(22)            // adds element at first position by shifting all next elements to right.
// myArr.unshift(22,23,34)      // can unshift multiple elements too.

// console.log(myArr);


//----------------------------------------------------------------------------------------------------------------

//###. array QUESTIONAIRE Methods ###:--

// let qArray = ["Rohit","Mohit","Divyanshu","Priyanshu"];

// console.log(qArray.includes("Rohit"));         // true
// console.log(qArray.indexOf("Divyanshu"))       // 2
// console.log(qArray.indexOf("Prashant"));       //-1  ; index of any element not in Array will always be -1.

//----------------------------------------------------------------------------------------------------------------

// let qArray2 = qArray.join();    // Array--> String

// console.log(qArray);            // [ 'Rohit', 'Mohit', 'Divyanshu', 'Priyanshu' ]
// console.log(qArray2);           // Rohit,Mohit,Divyanshu,Priyanshu

//----------------------------------------------------------------------------------------------------------------

// ###. slice and splice Methods ###:--

/*      SLICE  --> COPIES and outputs a section of  the whole array ; doesn't affect the originalarray
        SPLICE --> CUTS and displays a section of  the whole array ; AFFECTS the originalarray
                   after splice operation OG Arr only has the remaining part.
*/

// let myA = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log("Original myA :     "  +  myA);                  // 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

// let myA1 = myA.slice(3,6)   //VVVI:-- starts from 3rd element and includes till 5th element excluding 6th

// console.log("sliced myA1 :      " + myA1);                   // 3,4,5
// console.log("myA after slice :  " + myA);                    // 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

// let myA2 = myA.splice(3,6)  //VVI:-- starts from 3rd element and picks up 6 elements starting from there 
// //                                         [i.e. 3rd to 8th elements]

// console.log("spliced myA2 :     " + myA2);                   // 3,4,5,6,7,8
// console.log("myA after splice : " + myA);                    // 0,1,2,9,10,11,12,13,14,15


//______________________________________________________________________________________________________________