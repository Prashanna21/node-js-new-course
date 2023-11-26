//Object Destructuring

const person1 = {
    userName : "Ram",
    age : 20,
    gender: "male"
};

//Without destructuring
const displayName = (user) => {
    console.log(user.userName);
}

displayName(person1);

//Using destructring
const displayNameAndAge = ({userName, age}) => 
{
    console.log(`${userName} ${age}`);
}
displayNameAndAge(person1)

//We can Stroe in Varibles too
const {userName, age} = person1
console.log(userName + " " + age)

//Destructuring Arrays
const fruits = ["Strawberry", "Apple", "Banana"];
const [fruit1, fruit2] = fruits
console.log(fruit1, fruit2)