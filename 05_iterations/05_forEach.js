// ###. for each ### :--
//    **forEach calls the callbackfn function one time for each element in the array.
//    **Performs the specified action for each element in an array.


programming = ["C", "C++", "Java", "Python"];

programming.forEach( function (lang){
    // console.log(lang);                  // O/p:  C   C++   Java   Python
} )


// #. writing for each using ARROW fn :--
programming.forEach( (lang) => {
    // console.log(lang);                    // O/p:  C   C++   Java   Python
} )


// #. referencing EXTERNAL FN. in for each :--
function printMe(item){
    console.log(item);
}

// programming.forEach(printMe);                // O/p:  C   C++   Java   Python
    //Note: No need to put () in front of printMe here. ,just referencing is enough.


//###. for each not only has access to item but also index and whole array:
programming.forEach( (i,j,k) => {    // i->item, j->index, k->array;
    // console.log(i,j,k);             
} )                                  // O/p:   C 0 [ 'C', 'C++', 'Java', 'Python' ]
                                     //        C++ 1 [ 'C', 'C++', 'Java', 'Python' ]
                                     //        Java 2 [ 'C', 'C++', 'Java', 'Python' ]
                                     //        Python 3 [ 'C', 'C++', 'Java', 'Python' ]


//_____________________________________________________________________________________________


//###. imp usage of for each (in Array of Objects) :--

const mycoding =[
    {
        languageName: "JavaScript",
        languageExtension: ".js"
    },
    {
        languageName: "Python",
        languageExtension: ".py"
    },
    {
        languageName: "Java",
        languageExtension: ".java"
    }
]

mycoding.forEach( (item) => {
    // console.log(item.languageName);  // O/p:   JavaScript
} )                                     //        Python
                                        //        Java

//_____________________________________________________________________________________________

//###. NOTE : forEach doesn't return any value i.e its call back function doesn't return anything (even if you specify return instruction in the body.)

