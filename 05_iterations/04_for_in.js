// ###. FOR IN loop can be used to iterate OBJECT :--

const myObj = {
    "CR7" : "Christiano Ronaldo",
    "LM10": "Lionel Messi",
    "NJ10": "Neymar Junior"
}


//#. printing keys:
for (const key in myObj) {
    // console.log(key);  
}

//#. printing values:
for (const key in myObj) {
    // console.log(myObj[key]);  
}

//###. printing both key and value:
for (const key in myObj) {
    // console.log(`${key} is the shortname of ${myObj[key]}`);
}


//_____________________________________________________________________________________________


//###. for in loop on ARRAY :--

let programming = ["JS","py","C","Cpp"];

//key
for (const key in programming) {
    // console.log(key);               // O/P:  0  1  2  3
}

//value
for (const key in programming) {
    console.log(programming[key]);     // O/P:  JS  py  C  Cpp
}

//_____________________________________________________________________________________________


//###. Testing for in loop on Maps :--

//     for in loop can't be iterated on Maps. (why???)
