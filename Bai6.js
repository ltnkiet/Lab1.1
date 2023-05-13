var readlineSync = require('readline-sync');

var x = 10 + Math.round(5*Math.random(0,9))

var a = readlineSync.question('Nhap n: ')

if(a==x){
  console.log('Ban da doan dung')
}
else if(a<x){
  console.log('Gia tri cua ban nho hon so bi mat')
}
else console.log('Gia tri cua ban lon hon so bi mat')