var readlineSync = require('readline-sync');

var name = readlineSync.question("Ho va ten: ");
var score = readlineSync.question("Diem: ");

function rank(score){
  if(score >=8)
    console.log('Xep loai xuat sac')
  else if(score >= 7 && score <=8)
    console.log('Xep loai Kha')
  else if(score >= 3.5 && score <= 6.5)
    console.log('Xep loai Trung binh')
  else console.log('Khong dat')
}

console.log(name.toUpperCase())
console.log(rank(score))