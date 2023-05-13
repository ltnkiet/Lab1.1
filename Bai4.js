var readlineSync = require('readline-sync');

function checkNum(n) {
  if (typeof n == 'number') {
    return true
  }
  if (typeof n == "string") {
    return !isNaN(n) && !isNaN(parseFloat(n))
  }
}
var n = readlineSync.question("Nhap n: ");
console.log(checkNum(n))