var readlineSync = require('readline-sync');

var dai = readlineSync.question('Chiều dài: ')
var rong = readlineSync.question('Chiều rộng: ')

console.log('Chu vi: ' + (dai+rong)*2)
console.log('Diện tích: ' + dai*rong)
