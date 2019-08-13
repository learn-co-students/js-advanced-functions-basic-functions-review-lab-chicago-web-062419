// Your code here
function saturdayFun(param = "roller-skate") {
  return `This Saturday, I want to ${param}!`
}

function mondayWork (param="go to the office") {
return `This Monday, I will ${param}.`
}

function wrapAdjective(style= '*') {
  return function (param = 'special') {
    return `You are ${style}${param}${style}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}
