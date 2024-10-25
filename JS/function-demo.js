//1st way
function sum1(a,b){
    return (a+b);
}
console.log("sum(4,5):" +sum1(4,5));

//2nd way
let sum2=function(x,y){
    return (x+y);
}
console.log("sum(10,20):"+sum2(10,20));

//3rd way
let sum3 = (x,y)=>(x+y);
console.log("sum(100,250)"+sum3(100,250));


