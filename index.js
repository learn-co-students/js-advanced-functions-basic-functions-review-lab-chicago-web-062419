// Your code here
const mondayWork = (activity = "go to the office")=>{
    return `This Monday, I will ${activity}.`
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const wrapAdjective = (string = "*") => {
    return function(inner = "special"){
        return `You are ${string}${inner}${string}!`
    }
}

let Calculator = {
    add: function(num1, num2){return num1 + num2},
    subtract: function(num1, num2){return num1 - num2},
    multiply: function(num1, num2){return num1 * num2},
    divide: function(num1, num2){return num1 / num2}
}

const actionApplyer = (int, array) => {
    let start = int
    for(let i = 0; i < array.length; i++){
        start = array[i](start)
    }
    return start
}