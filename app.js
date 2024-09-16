// ternary operatator

// let number=3
// let result=number==1?"telugu":number==2?"hindi":number==3?"tamil":number==4?"english":"marati"
// console.log(result)


// if, if-else,if-else if-else

// let number=4
// if(number==1){
//     console.log('telugu')
// }
// else if(number==2){
//     console.log('hindi')
// }else if(number==3){
//     console.log('tamil')
// }else if(number==4){
//     console.log('malayalam')
// }
// else{
//     console.log('english')
// }



// function declaration ,function definition


// function juise(x,y){
//     console.log('grind is srted....' + x+y)
// }
// juise('tomoto',",banana")

// -------------additions------------

// function add(num1,num2){
//   let result =num1+num2
// console.log(result)
// }
// add(3,5)

//---------- importent concept------------

// function add(num1,num2){
//   let result =num1+num2
//   return result
// }
// let addition=add(0,7)
// console.log(addition)

// function cube(x) {
//   let salary = document.getElementById("salary").value;
//   console.log(salary);
//   let fullAmount=document.getElementById("fullSalary")
//   let finalSalary=document.getElementById("finalSalary")
//   fullAmount.innerHTML=salary
//   finalSalary.innerHTML=result
//   let result = x * 0.1;
//   console.log(result)
// }

function cube() {
  let fullSalary = document.getElementById("salary").value;
  let totalSalary = document.getElementById("fullSalary");
  let taxAmount = document.getElementById("taxDetected");
  let finalSalary = document.getElementById("finalSalary");
  let result = fullSalary * 0.1;
  let handSalary = fullSalary - result;

  totalSalary.innerHTML = "Total Salary:" + fullSalary;
  taxAmount.innerHTML = "5% of Tax:" + result;
  finalSalary.innerHTML = "Final Salary:" + handSalary;
}
