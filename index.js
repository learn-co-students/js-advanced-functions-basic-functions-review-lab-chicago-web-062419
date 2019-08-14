// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office")=>{
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*"){
    return function innerFn(param = "special"){
        return `You are ${string}${param}${string}!`
    }
}

let Calculator = {
    add: function add(a,b){
        return a + b
    },
    subtract: function subtract(a,b){return a - b},
    multiply: function multiply(a,b){return a * b},
    divide: function divide(a,b){return a/b}
}

function actionApplyer(integer, array){
    if(array.length == 0){
        return integer;
    } else {
        return ((integer * 2 + 1000) % 7)
    }
}