// ###. Immediately Invoked Function Expressions (IIFE) ### :--
//      *It's used for - It's executed Immediately
//                       It prevents pollution from global variables
// 

// "NAMED IIFE" ; with name --> chai
(function chai(){                           
    console.log(`RANDOM MESSAGE!`);                     // O/p : RANDOM MESSAGE!
})();                                                   // this ";" is VVI for next IIFE to run without error.


// Simple/Unnaned IIFE :
( () => {                           
    console.log(`RANDOM MESSAGE!`);                     // O/p : RANDOM MESSAGE!
})();


// ###.Note :--
// To write multiple IIFEs, we need to close the previously invoked IIFEs using ";"
// that's coz once invoked,an IIFE doesn't know when to end the context so we need to give ; to end the previous IIFE
// else the next IIFE won't run.


//----------------------------------------------------------------------------------------------------------------


//###. giving parameters in  IIFEs:--

// "NAMED IIFE" ; with name --> chai
(function coffee(name){                           
    console.log(`${name},RANDOM MESSAGE!`);            // Divyanshu,RANDOM MESSAGE!
})("Divyanshu");                                                   


// Simple/Unnaned IIFE :
( (name) => {                           
    console.log(`${name}, RANDOM MESSAGE!`);          // Divyanshu,RANDOM MESSAGE!
})("Divyanshu")


//