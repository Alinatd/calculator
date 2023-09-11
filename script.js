let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')


 const PLUS =() =>{
   let res = parseInt(num1.value)+parseInt(num2.value)
document.getElementById('result').innerHTML = res

 } 
    
 const MINUS =() =>{
    let res = parseInt(num1.value)-parseInt(num2.value)
    document.getElementById('result').innerHTML = res
 }
 const MULTIPLY =() =>{
    let res = parseInt(num1.value)*parseInt(num2.value)
    document.getElementById('result').innerHTML = res
 }
const DIVIDE = () =>{
    let res = parseInt(num1.value)/parseInt(num2.value)
    document.getElementById('result').innerHTML = res
}
const PERCENT = () =>{
    let res = parseInt(num1.value)%parseInt(num2.value)
    document.getElementById('result').innerHTML = res
}