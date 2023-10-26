//question 1
function calculataArea(width, length){
    const calculataArea = length * width;
    console.log (calculataArea);
    return(calculataArea);
}
calculataArea(3,4);

//question 2
const a = 3
function test(){
    const b = 2
    console.log(a,b);
}
test();
//console.log(a,b);

//question 3
function counter(){
    let count = 0;
   function  increament(){
        count++;
        console.log(count);

    }
  return increament;  
}
let incrementCounter = counter();
incrementCounter();//1
incrementCounter();//2

//question 4
function calculate(num1, num2){
    const calculateSum = (num1+num2);
    const calculateProduct = (num1 * num2);
    const calculateDifference = (num1 -num2);
    const calculateQuotient = (num1/num2);
   console.log(calculateSum);
   console.log(calculateDifference);

   console.log(calculateProduct);
   console.log(calculateQuotient);
    
}
calculate(6,3);

//question 5
function performOPeration(a, b){
console.log(a + b);
console.log(b - a);
console.log(a * b);
}
performOPeration(5, 10);
