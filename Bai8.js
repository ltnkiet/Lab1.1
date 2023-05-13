var readlineSync = require('readline-sync');

var a = readlineSync.question("Nhap a: ");
var b = readlineSync.question("Nhap b: ");

if(isNaN(a) || isNaN(b)){
  console.log('a hoac b khong phai la so') 
}
else {
  console.log('a + b = ' +(a+b))
  console.log('a - b = ' +(a-b))
  console.log('a * b = ' +(a*b))
  console.log('a / b = ' +(a/b))
}