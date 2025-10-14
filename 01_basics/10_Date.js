 //                                         ~~~ DATE ~~~


// 1st Jan 1970  was taken as a reference to create Timestamps in milliseconds 
// dataType of Date is :- OBJECT

const myDate = new Date();

//-----------------------------------------------------------------------------------------------------------

// date .toString Methods :-
// console.log(myDate);                        //  2025-10-13T14:47:33.183Z

// console.log(myDate.toString());             //  Mon Oct 13 2025 20:17:33 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());         //  Mon Oct 13 2025
// console.log(myDate.toTimeString());                          // 20:17:33 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString());       //  13/10/2025, 8:17:33 pm 
// console.log(myDate.toLocaleDateString());   //  13/10/2025
// console.log(myDate.toLocaleTimeString());               //  8:17:33 pm

// console.log(myDate.toUTCString());           //  Mon, 13 Oct 2025 15:14:30 GM


//-----------------------------------------------------------------------------------------------------------

// console.log(myDate);               //  2025-10-13T14:47:33.183Z
// console.log(myDate.toISOString()); //  2025-10-13T14:47:33.183Z
// console.log(myDate.toJSON());      //  2025-10-13T14:47:33.183Z


//-----------------------------------------------------------------------------------------------------------

//###.creating Date:- 

/*
    **Two formats-  (a) YYYY/MM/DD  and  (b)  MM/DD/YYYY
    **and Three ways to seperate Y,M and D -   (a) /    (b) -    (c) (WhiteSpace)

    So different Date formats are :---
        (a) MM/DD/YYYY      (b) YYYY/MM/DD
        (c) MM-DD-YYYY      (d) YYYY-MM-DD
        (e) MM DD YYYY      (f) YYYY MM DD
*/


// let myCreatedDate = new Date(2023,0,13);        
//                         // (Year,Mth,Date) | Note: Month Index starts from 0 | So, 0=Jan and 11=Dec and it repeats again from 12=Jan
// console.log(myCreatedDate.toDateString()); // =(Wed Apr 13 2033)


// let myCreatedDate = new Date("2023-1-02");
//                          // (Year-Mth-Date)  | Here Moth Index starts from 01 or 1 |
// console.log(myCreatedDate.toDateString());   //= (Mon Jan 02 2023)


// let myCreatedDate = new Date("01-02-2023");
//                          // (Mth-Date-Year)
// console.log(myCreatedDate.toDateString());     //= (Mon Jan 02 2023)


//-----------------------------------------------------------------------------------------------------------


//                                         ~~~ TIMESTAMP ~~~

// let myTimestamp = Date.now();
// console.log(myTimestamp);     // 1760372973249

// // or directly :-
// console.log(Date.now());     // 1760372973255
// // it's the no. of milliseconds passed since  "Jan 01, 1970, 12:00:00"  till "right now".

//***.To get seconds:- 
// console.log(Math.floor(Date.now()/1000));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ###.to convert a date into timestamp:-
// let myCreatedDate = new Date("2023,01,02, 2:30:45 am");
// console.log(myCreatedDate.getTime());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ### .get and .set Methods on Date:--

// let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getSeconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ###. imp things about .toLocalestring  :--

// in this method we define Date as an Object
// thus we can define many parameters in this method 
// (these are mainly used to CUSTOMIZE THE FORMAT of Date Output)

let newDate = new Date();

newDate.toLocaleString('Default',{
    weekday: "long"
})

console.log(newDate.toString());


