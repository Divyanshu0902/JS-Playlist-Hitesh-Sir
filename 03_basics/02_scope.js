/* Block-Scope vs Global scope :--
        
        ** Global scope variables can be used and modified/updated anywhere in the whole program file.
              *They are defined outside any block.

        ** Block-scope variables are defined within a block i.e--  { }
              *They can be if-else block, for/while loop block or a function-block.
              *Once defined within a specific block it can only be used inside of that block.

        ** "var" always behaves as global scope, meaning a variable defined using var can be changed anywhere
            and thus it can cause bugs. So it is not recommended to use var to define a variable.
*/      


// ###. Scope in Nested-functions :--

function one(){
    let userName = "Divyanshu";

    function two(){
        let email = "thakurdivyanshu.004@gmail.com";

        console.log(userName);  // calling "userName" here inside function two is valid because it's within scope.
    }
    // console.log(email);      // here, we're calling "email" outside of its scope. So it gives ERROR.
    
    two();
}
one();


//_______________________________________________________________________________________________________________


// ###. imp concept regarding HOISTING ### :--

// There are 2 ways of defining a function :

// **first method--
// function addOne(num){
//     return num+1;
// }

// **second method--
// const addTwo = function(num){
//     return num+2;
// }

//--------------------------------------------------------------------------------------------------------------

// ** everything also works similarly if we call the functions after their definition like :--

// function addOne(num){
//     return num+1;
// }
// console.log(addOne(5));         // works fine  (O/p: 6)


// const addTwo = function(num){
//     return num+2;
// }
// console.log(addTwo(5));         // works fine  (O/p: 7)



// **but "when fn-call is done above the fn-defn", 2nd method gives error while 1st method still works normally:

console.log(addOne(5));            // works fine  (O/p: 6)
function addOne(num){
    return num+1;
}                                  

console.log(addTwo(5));            // ReferenceError: Cannot access 'addTwo' before initialization.
const addTwo = function(num){
    return num+2;
}