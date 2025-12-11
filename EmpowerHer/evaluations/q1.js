console.log("----------------------------------------- q1");
let arr1=[10,20,30];
let arr2=[40,50];
let combined=[...arr1,...arr2];
console.log(combined);

console.log("----------------------------------------- q2");

let person={ name: "Venu",age:25};
let extra={ city: "Bengaluru"};
let profile={...person,...extra};
console.log(profile);
console.log("----------------------------------------- q3");

function sumAll(...numbers){
    let sum=0;
    for(let num of numbers){
        sum=sum+num;
    }
   return(sum)
}
console.log(sumAll(1,2,3,4));
console.log("----------------------------------------- q4");

const numbers=[10,20,30,40,50];
const [a,...remaining]=numbers;
console.log(a);
console.log(remaining);
function Destructuring(a,...numbers){
    for(let num of numbers){
        console.log(num);
    }
}
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

Destructuring(10,20,30,40,50)
console.log("----------------------------------------- q5");
const {
    address:{
        city,geo:{lat,lng}
    }
}= user;
console.log(city);
console.log(lat);
console.log(lng);



console.log("----------------------------------------- q6");
const multiply=(a,b)=>{
    return a*b
}
console.log("multiplication is ",multiply(2,3))
console.log("----------------------------------------- q7");
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log("role is :",emp.details.profile.role);

console.log("----------------------------------------------------------------------------------------------------")
