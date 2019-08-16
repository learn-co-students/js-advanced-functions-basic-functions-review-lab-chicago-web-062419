// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(proclamation = "*") {
    return function(string = "special") {
        return `You are ${proclamation}${string}${proclamation}!`
    }

}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2},
    subtract: function(num1, num2) {
        return num1 - num2},
    multiply: function(num1, num2) {
        return num1 * num2},
    divide: function(num1, num2) {
        return num1 / num2}
}

