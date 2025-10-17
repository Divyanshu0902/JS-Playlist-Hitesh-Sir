// ###. Scope of "this" ###:--

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

user.welcomeMessage()   // { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage }
user.username = "sam"
user.welcomeMessage()   // { username: 'sam', price: 999,  welcomeMessage: [Function: welcomeMessage] }

// console.log(this);      // {}  i.e. empty object


//_________________________________________________________________________________________________________________

//###. Using "this" inside a function :-
//      *this can't be used similarly in fn unlike object, it gives errors:

function chai(){
    let username = "hitesh"
    // console.log(this.username);     //O/p: undefined
}

chai()


//_________________________________________________________________________________________________________________

//###. different ways of writing a function:--

//Method 1: 
function function_name(){
    //--inner code--
}

//Method 2:
const variable_Name = function(){
    //--inner code--
}

//Method 3:                         // "ARROW FUNCTION"
const variable_name = () => {
    //--inner code--
}


//_________________________________________________________________________________________________________________

//###. different ways of writing an "arrow function" :

// 1.Explicitly returned method:
const addTwo = (num1,num2) => {
    return num1+num2;
}

// 2.Implicitly returned method:
const addTwo2 = (num1,num2) => num1+num2;
//                 or
const addTwo3 = (num1,num2) => (num1+num2);