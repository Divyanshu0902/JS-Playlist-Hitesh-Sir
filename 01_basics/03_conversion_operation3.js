// --- conversion into Boolean---

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

let isLoggedIn2 = 0
let boolIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(boolIsLoggedIn2)

let isLoggedIn3 = ""
let boolIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(boolIsLoggedIn3)

let isLoggedIn4 = "0"
let boolIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(boolIsLoggedIn4)

let isLoggedIn5 = "1"
let boolIsLoggedIn5 = Boolean(isLoggedIn5)
console.log(boolIsLoggedIn5)

let isLoggedIn6 = "abc"
let boolIsLoggedIn6 = Boolean(isLoggedIn6)
console.log(boolIsLoggedIn6)

let isLoggedIn7 = null
let boolIsLoggedIn7 = Boolean(isLoggedIn7)
console.log(boolIsLoggedIn7)

let isLoggedIn8 = undefined
let boolIsLoggedIn8 = Boolean(isLoggedIn8)
console.log(boolIsLoggedIn8)

/* conclusion---
    --when ( 0/""/null/undefined ) are converted into Boolean, the value is 'false'
    --when ( 1/"0"/"1"/"anyOtherNonEmptyValue" ) converted to boolean, it becomes'true'
*/