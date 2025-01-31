"use strict";
function abc() {
    return "hi";
}
//function type 
//it is use in callback function 
function okay(name, func) {
    func("whats");
}
okay("gill", (arg) => {
    console.log("okay");
});
//rest/spread operator
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7);
