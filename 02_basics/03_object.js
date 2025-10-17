
//                                          ~~~ OBJECT ~~~


/* Two ways of making Objects:-  (a). from Litterals   ( objectName = {} ) --> no Singeleton
                                 (b). from Constructor ( Object.create   ) --> Singeleton forms.
*/


//-----------------------------------------------------------------------------------------------------------------


// ###. Object Litterals Method :--

User1 = {
    name         : "Divyanshu",
    age          : 18,
    location     : "Muzaffarpur",
    email        : "divyanshukr.jeema@gmail.com",
    isLoggedIn   : true,
    lastLoggedIn : ["Monday", "Saturday"],
}

// ###. another way to declare an object:--

// user2 = {};
// user2.name = "Rohit";
// user2.id = "2454006"
// user2.age = 21;

// console.log(user2);     // O/p:- { name: 'Rohit', id: '2454006', age: 21 }


//-----------------------------------------------------------------------------------------------------------------

//###. 2 ways to access elements from object using key-

// console.log(User1.name);       // Divyanshu
// console.log(User1["name"]);    // Divyanshu


/* **Note: -- 

2nd method( obj["key"] )- becomes crucial when "Symbol" or (string with whitespace) is used as key-name.

for symbols, the ( obj.key ) method prints output but it changes key's datatype as string
only when we use 2nd method the datatype remains as Symbol.

for (strings with whitespace) there's no way to write that whitespaced string as (one word) in 
the ( obj.key ) method. Only ( obj["ke y"] ) method allows access to such key name coz of the " ".

In objects, the key name is always stored as a string. e.g. the key name is stored as "name".
*/


//###. Changing values in Object :--

// User1.email = "thakurdivyanshu.004@gmail.com"
//                or
// User1["email"] = "thakurdivyanshu.004@gmail.com"
// console.log(User1);     // email: 'thakurdivyanshu.004@gmail.com',


//-----------------------------------------------------------------------------------------------------------------


//###. FREEZING the Object :--

// Object.freeze(User1);

// User1["email"] = "rkmvhs1306@gmail.com";
// console.log(User1);                      // no change in email


//-----------------------------------------------------------------------------------------------------------------

//###. We can also add a function() within an object :-

// Ex 1 :
// User1.greeting = function(){
//     console.log("Hello User1! Good to have you here.");
// }                                 // now:-   greeting : [Function (anonymus)]   field will be added inside the Object.

// console.log(User1.greeting());    // O/p:-   Hello User1! Good to have you here.


// Ex 2 (with string Interpolation) :
// User1.greeting2 = function(){
//     console.log(`Hello ${this.name}! Good to have you here.`);
// }

// console.log(User1.greeting2());     // O/p:-    Hello Divyanshu! Good to have you here.

        
//-----------------------------------------------------------------------------------------------------------------


