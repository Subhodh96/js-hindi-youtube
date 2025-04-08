function sayMyName (){
    console.log("s");
    console.log("u");
    console.log("b");
    console.log("o");
    console.log("d");
    console.log("h");
}
//sayMyName()

function addTwoNumbers (number1, number2){
    return number1 + number2
}
const result = addTwoNumbers(3,4)

function userLogged(username){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(userLogged("subhodh"));
function calculateCartPrice (...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,299,999));


const user = {
    username:"hitesh",
    price:100
}
function handleUser (anyobject){
    console.log(`username is ${anyobject.username} , price is ${anyobject.price}`);
    
}

//handleUser(user)
handleUser({
    username:"sukesh",
    price:999
})

const myNewArray = [200,300,600,800]

function returnSecondValue (getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,700,500]));
 