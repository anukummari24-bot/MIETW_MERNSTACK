// console.log("hello");
//print square of numbers fron 1 to 9
// const nums=[1,2,3,4,5,6,7,8,9]
// nums.map((num)=>{
//     console.log(num*num)
// })
// const data={
//     name:"anu",
//     email:"anu@mail",
//     phone:[1234, 6788],
//     address:{
//         city:"hyd",
//         state:"ts",
//     },
// };
// console.log(data)
// console.log(data.name)
// console.log(data.address.city)

//spread operator
// const addr=data.address;
// const {name:username,email,phone,address}=data
// console.log(addr);
// console.log(username);
// console.log(phone)
// console.log(email);
// console.log(address);
// const {city,state}=data.address
// console.log(city)
// console.log(state)
// const employee={
//     name:"anu",
//     id:123,
//     salary:100000,
//     address:{
//         city:"hyd",
//         state:"ts",
//     }

// }
// console.log(employee)
// const{name:username,id,salary,address}=employee
// console.log(username)
// console.log(salary);
const data=[{
    name:"anu",
    email:"anu@mail",
    phone:[1234, 6788],
    address:{
        city:"hyd",
        state:"ts",
    },
},
{
    name:"anuk",
    email:"anuka@mail",
    phone:[1235, 6789],
    address:{
        city:"bngr",
        state:"KA",
    },
},]
console.log(data)
data.map((item)=>{
    console.log(item.address.city)
    console.log(item.name)
})