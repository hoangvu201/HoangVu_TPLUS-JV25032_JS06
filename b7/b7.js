function squareAndFilter(arr) {
  let result = [];
  for (let element of arr) {
    element = element ** 2;
    if (element % 2 === 0) {
      result.push(element);
    }
  }
  return result;
}

let result = [];
let lengthArr = +prompt("Nhập số phần tử cần nhập vào mảng");
for (let i = 1; i <= lengthArr; i++) {
  let elementArr = +prompt(`Mời bạn nhập giá trị của phần tử thứ ${i} trong mảng`);
  result.push(elementArr);
}

console.log(squareAndFilter(result));
