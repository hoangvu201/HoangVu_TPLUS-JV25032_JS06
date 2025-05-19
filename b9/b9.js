let arr = [];
let lengthArr = +prompt("Nhập số phần tử cần nhập vào mảng");
for (let i = 1; i <= lengthArr; i++) {
  let elementArr = +prompt(`Mời bạn nhập giá trị của phần tử thứ ${i} trong mảng`);
  arr.push(elementArr);
}
let n = +prompt("Mời bạn nhập vào số mảng con muốn chia");
let number = Math.ceil(arr.length / n);
let result = [];
for (let j = 0; j < arr.length; j = j + number) { 
  let subArr = [];
  for (let i = j; i < number + j; i = i + 1) {
    if (arr[i]) {
      subArr.push(arr[i]);
    }
  }
  result.push(subArr);
}
console.log(result);