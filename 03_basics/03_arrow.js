const user = {
    userName:"hitesh",
    price:999,
    welcomeMessage: function (){
        //console.log(`${this.userName}, welcome to website`);
        //console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

const chai = ()=> {
    console.log(this);
    
}
//chai ()

// const addTwo = (num1,num2) => (num1 + num2)

// console.log(addTwo(3,4));
 
// const addTwo = (num1 , num2) => {
// return num1+num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => {return num1+num2}
// console.log(addTwo(3,4));

const addTwo = () => ({username : "hitesh"})
console.log(addTwo());
