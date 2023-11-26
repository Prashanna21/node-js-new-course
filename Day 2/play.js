// ******* Arrow Function ********
// const arrowFunction = (a, b) => {
//     return a + b;
// }

// const shortArrowFunc = (a, b) => a + b;

// const evenShArFunc = a => a + 1;

// console.log(arrowFunction(1, 2));
// console.log(shortArrowFunc(1,2));
// console.log(evenShArFunc(1));




// ********************* Objects **************
const person = {
    userName : "Prashanna",
    age : 17,
    greet(){
        console.log("Hello I'm ", this.userName);
    }
}

console.log(person.greet());