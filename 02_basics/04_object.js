
// let User = new Object()    // Singeleton Object
// let User = {}              // Non-Singeleton Object


// ###. Nested Objects :--

let realUser = {
    id : "abc@1234",
    email : "user1234@gmail.com",
    name : {
        nickname : "Paglu",
        officialName : {
            firstName : "Mohit",
            lastName : "Kumar",
        }
    }
}


// // ###.accessing elements in nested Object :--

// console.log(realUser.name)           // O/p:-- {
                                        //           nickname: 'Paglu',
                                        //           officialName: { firstName: 'Mohit', lastName: 'Kumar' }
                                        //        }

// console.log(realUser.name.officialName);    // O/p:   { firstName: 'Mohit', lastName: 'Kumar' }


//_______________________________________________________________________________________________________________


// // ###. Combining Objects ###:--

// let obj1 = {1:"a" , 2:"b"};
// let obj2 = {3:"c" , 4:"d"};

// Object.assign(obj1,obj2);    //  It copies elements onj2 into obj1 | obj1-DESTINATION, obj2- SOURCE, 

// console.log(obj1);           //  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//---------------------------------------------------------------------------------------------------------------

// // Combining more than 2 objects :--
// let obj3 = { 5 : "e" , 6 : "f"};
// let obj4 = { 7 : "g" , 8 : "h"};

// let combinedObj1 = Object.assign({},obj1,obj2,obj3,obj4);     // DESTINATION-{}, SOURCE- obj1,obj2,obj3,obj4

// console.log(combinedObj1);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' ,'5': 'e', '6': 'f','7': 'g','8': 'h' }


//---------------------------------------------------------------------------------------------------------------

//###. But the BEST METHOD for this is - SPREAD OPERATOR :--

// let combinedObj = {...obj1,...obj2,...obj3,...obj4};

// console.log(combinedObj);   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' ,'5': 'e', '6': 'f','7': 'g','8': 'h' }


//_______________________________________________________________________________________________________________


// ###. imp operations on Objects :--
//          (to get an array of all keys/values/ key-value pair)

let tikTokUser ={ 
    name : "Paglu" , 
    id : "Gadha@000" , 
    IQ : "-50" ,
    isInsane : true
}

// // to get Array of all Keys of an Object :
// console.log(Object.keys(tikTokUser));   //  O/p: [ 'name', 'id', 'IQ', 'isInsane' ]

// // to get Array of all Values of an Object :
// console.log(Object.values(tikTokUser));  //  O/p: [ 'Paglu', 'Gadha@000', '-50', true ]

// // to get Array of all Key-Value Pairs of an Object :
// console.log(Object.entries(tikTokUser));  
// // o/p:  [ [ 'name', 'Paglu' ], [ 'id', 'Gadha@000' ],[ 'IQ', '-50' ], [ 'isInsane', true ]


//_______________________________________________________________________________________________________________



//###. Object Destructuring ### :--
//         ** It's used to give small convenient nickname to an object'e element to reference it easily later

let course = {
    courseName : "JS Hindi Course",
    courseInstructor : "Hitesh Chaudhary",
    coursePrice : "999"
}

const {courseInstructor : instructor} = course;

console.log(instructor);     //  Hitesh Chaudhary


//_______________________________________________________________________________________________________________


//###. APIs and JSON ###. :--

// 
