// var does not have blocked scope, let and const has blocked scope
function test1(){
    var y1=50;
    if(true){
        var y1=70;
    }
    console.log("value of y1:" + y1);
}
function test2(){
    let y2=50;
    if(true){
        let y2=70;
    }
    console.log("value of y2:" + y2);
}

// we can redeclare var variables, but we cannot redeclare let and const variables
var x3=50;
var x3='he'
console.log(x3);

let y3 = 70;
//let y3 = 10; // not possible

// const is very similar to let i.e it is function scoped and blocked scope,
        // but it behaves as a constant, we cannot change its value

const PI = 3.14;
console.log(PI);
//PI = 3.15; // not possible

