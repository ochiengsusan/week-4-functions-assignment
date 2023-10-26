//local scope
//can be acceed outside the function- global scope
//global scope
//var globalVar:number = 100
//function addition(){

//}

//function closure
//2 functions one is inside the other
function counter(){
    var count ; number = 0;
    function increament(); {
        count++;
        console.log(count);

    }
return increament;
}
var incrementCounter = counter();
incrementCounter()