var readlineSync = require("readline-sync");

var n = readlineSync.question("Nhập n: ");

if (n % 2 == 0) {
  console.log(n + " là số chẵn");
} else {
  console.log(n + " là số lẻ");
}