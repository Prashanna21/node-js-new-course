//Spread Operator
//If You Want To Copy array or object into another
let names = ["Ram", "Shyam", "Hira"];

const copiedArray1 = names.slice()
const copiedArray2 = [...names];

console.log(copiedArray1)
console.log(copiedArray2)


const person = {
    name: "Ram"
}

const copiedPerson = {...person}


//Rest Operator
//If you want to accept unlimited number of inputs in function which puts the value in array
const sum = (...num) => {
    let sum = 0;
    for(numb of num){
        sum += numb;
    }
    return sum;
}

console.log(sum(2,3,6,10))