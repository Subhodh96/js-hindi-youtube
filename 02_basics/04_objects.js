const tinderUser = {}
tinderUser.id = "123@kotak"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "subhodh@123gmail.com",
    fullName:{
        userName:{
            firstName:"hitesh",
            lastName: "choudhary"
        }
    }
}
//console.log(regularUser.fullName.userName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//const obj4 = Object.assign( obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename:"js in hindi",
    courseFee: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
 console.log(instructor);
 