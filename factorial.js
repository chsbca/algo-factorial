function factorial(num) {
  let answer = 1
  
  while (num > 0) {
    answer *= num
    num -= 1
  }

  return answer
}

module.exports = factorial;

// node factorialSpec.js - put this in terminal
// git push main 