//                                               ~~~FUNCTIONS~~~


// // ###. function declaration :--

function addTwoNumbers(number1, number2) {     // number1, number2 :- PARAMETERS ; 
    let sum = number1 + number2;
    // console.log(sum);
}

// // ###. Calling the function :--
addTwoNumbers(4,5)                                        // 4,5 :- ARGUEMENTS;


// ---------------------------------------------------------------------------------------------------------------


// // ###. Returning value from function :

// // Ex 1 :
function addTwoNumbers(number1, number2) {
    return (number1 + number2);
}

const sum = addTwoNumbers(4,5)
// console.log("Reuslt: ", sum);        // O/p: Reuslt:  9

//Ex 2 :
function userLogInMessage(userName) {
    return `${userName} just logged in.`;
}

// console.log(userLogInMessage("Divyanshu"));     // O/p: Divyanshu just logged in.


// ---------------------------------------------------------------------------------------------------------------


// // Adding "DEFAULT ARGUEMENT" in function-Paramaeter :

function userLogInMessage(userName = "unknownUser") {   //   "unknownUser" becomes the default arguement....
    return `${userName} just logged in.`;               //               |
}                                                       //               |
//                                                                       |
// console.log(userLogInMessage());                     //   ...in case no arguement is given in the function-call.

// console.log(userLogInMessage("Rohit"));                 //  but default is overwritten if Arguement is provided in function-call.


// ---------------------------------------------------------------------------------------------------------------


//###. function for unknown number of parameters :--
//      **Ex- in case of a user is shopping, we don't know how many items they purchases but we gotta add price of all the items.
//  in such case we use (...) i.e. the REST OPERATOR (looks similar to Spread Operator).

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(20,50,80));    // O/p:   [ 20, 50, 80 ]


// ---------------------------------------------------------------------------------------------------------------


//###. Object as function-arguement :--

let user = {
    userName: "Divyanshu",
    noOfItems: 3,
    itemsPrice: 500
}

function handleObject(anyUser) {
    // console.log(`Hi ${anyUser.userName}! Thank you for purchasing ${anyUser.noOfItems} items worth $${anyUser.itemsPrice} from us.😊`);
}
    
handleObject(user);     // O/p:  Hi Divyanshu! Thank you for purchasing 3 items worth $500 from us.


// ###. another way to pass object as fn-argumenent is bu directly writing whole obj in arguement :--

handleObject({
    userName: "Rohit",
    noOfItems: 2,
    itemsPrice: 700
})                     // O/p:  Hi Rohit! Thank you for purchasing 2 items worth $700 from us.


// ---------------------------------------------------------------------------------------------------------------

//###. Array as function-arguement :--

let array = [10,20,30];

function returnSecondValue(anyArray){
    return anyArray[1];
}

console.log(returnSecondValue(array));        // O/p: 20
                //or
console.log(returnSecondValue([10,20,30]));   // O/p: 20
 