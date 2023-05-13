var readlineSync = require("readline-sync");

function checkNum(n){
  var flag = 1;
  if (Math.ceil(n) != Math.floor(n)) flag = 0;
}

var n = readlineSync.question("Nhap so n: ");

var check = checkNum(n);

if( check == 1 ) {
  console.log(n + " la so nguyen");
  if(n % 2 == 0)
    console.log(n + " la so nguyen chan");
  else console.log(n + " la so nguyen le");
}
else 
  console.log(n + " khong phai la so nguyen");
  
console.log(check);