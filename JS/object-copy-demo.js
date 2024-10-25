let nameData = {firstName : "Sai", lastName: "Venkat"};
let personalData = {age:20, gender:"Male"};

// in ES5
let combinedData1 = Object.assign(nameData, personalData);
console.log(combinedData1)

// in ES6
//spread operator
let combinedData2 = {...nameData, ...personalData} ;
console.log(combinedData2);

let oddNums=[3,5,7,9,11];
let copyNums=[...oddNums];
console.log(copyNums);

let evenNums=[2,4,6,8,10];
let allNums=[...oddNums,...evenNums];
console.log(allNums);