// Your code here
// Implement a function called `saturdayFun`. It should return a `String` like
// `"This Saturday, I want to ....!"` Fill in the `...` with the activity that's
// passed in as the first parameter. If nothing is passed in, default to
// `"roller-skate"`. Use the `learn` program to verify you've gotten a working
// implementation.

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }


const Calculator = {
    add: function() {
        return 1 + 3;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
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
  