var readlineSync = require('readline-sync');

var a = readlineSync.question("a: ");
var b = readlineSync.question("b: ");
var c = readlineSync.question("c: ");

var delta = b * b - 4 * a * c

function result(delta){
  if(delta < 0)
    console.log('Phuong trinh vo nghiem') 
  else if (delta == 0)
    console.log('Phuong trinh co nghiem kep' + (-b / (2 * a))) 
  else
    var x1 = (-b + Math.sqrt(delta)) / (2*a)
    var x2 = (-b - Math.sqrt(delta)) / (2*a)
    console.log('Phuong trinh co 2 nghiem: x1= ' + x1 +' và x2= '+x2)
}
console.log(result(delta))