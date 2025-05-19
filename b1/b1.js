function sumNumber(a, b) {
    if (a % 1 == 0 || b % 1 == 0 || (a != "" || b != "")) {
    return ("Vui lòng nhập đúng số");
}
  return a + b;
}
let number1 = +prompt("Mời bạn nhập vào số thứ nhất");
let number2 = +prompt("Mời bạn nhập vào số thứ hai");

console.log(sumNumber(number1, number2));
    