// Your code here

const saturdayFun = (act = "roller-skate") => {
    return `This Saturday, I want to ${act}!`
}
const mondayWork = (act = "go to the office") => {
    return `This Monday, I will ${act}.`
}
const wrapAdjective = (x="*") => {
    return function (str) {
        return `You are ${x}${str}${x}!`
    } 
}
// console.log(wrapAdjective("*")("HI"))

let Calculator = {
    add: function add(x, y) {
        return x + y
    },
    subtract: function subtract(x,y) {
        return x - y
    },
    multiply: function multiply(x, y) {
        return x * y
    },
    divide: function divide(x, y) {
        return x / y
    }
}
// console.log(Calculator.add(1,3))
let actionApplyer = function(a, funcArr) {
    for (let i = 0; i < funcArr.length; i++ ){
      a = funcArr[i](a)
    }
    // funcArr.forEach(i => console.log())
    return a
}
arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
]

// console.log(actionApplyer(13, arrayOfTransforms));
actionApplyer(13, arrayOfTransforms)