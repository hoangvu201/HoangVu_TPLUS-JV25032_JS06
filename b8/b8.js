function isPrimeNumber (num) {
  if (num < 2) {
    return false
  };
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    };
  }
  return true;
}

let result = [];
let lengthArr = +prompt("Nhập số phần tử cần nhập vào mảng");
for (let i = 1; i <= lengthArr; i++) {
  let elementArr = +prompt(`Mời bạn nhập giá trị của phần tử thứ ${i} trong mảng`);
  result.push(elementArr);
}

function oddPrimeNumber(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && isPrimeNumber(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(`Các số nguyên tố là số lẻ trong mảng là: ${oddPrimeNumber(result)}`)

