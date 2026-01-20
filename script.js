// var div =document.getElementById("content");
// console.log(div);
// div.innerText="content rendered dynamically";
// console.log(div)

// // document.getElementById("userinput").addEventListener("input",function (){
// //      document.getElementById("output").innerText="your name is" + this.value;

    
// // });

// const input=document.getElementById("userinput")
// const para=document.getElementById("output")

// input.addEventListener("input",function(){
//     para.innerText="your name is " +this.value
// });

// const button=document.getElementById("click")
// const param=document.getElementById("clicking")

// button.addEventListener("click",function(){
//     param.innerText="button clicked"+this.value;
// });
const input = document.getElementById("userinput");
const para = document.getElementById("output");
const btn = document.getElementById("btn");

input.addEventListener("input", function () {
  para.innerText = "Your name is: " + input.value;
});

btn.addEventListener("click", async function () {
  const data = await fetch("http://localhost:3000");
  console.log(data);
});