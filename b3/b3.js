let result = [];
let lengthArr = +prompt("Nhập số phần tử cần nhập vào mảng");
for (let i = 1; i <= lengthArr; i++) {
  let elementArr = +prompt(`Mời bạn nhập giá trị của phần tử thứ ${i} trong mảng`);
  result.push(elementArr);
}

function checkMaxNumber (num) {
    let maxNumber = num[0];
    for (let element of num) {
        if (element > maxNumber) {
            maxNumber = element;
        }
    }
    return maxNumber;
}
console.log((checkMaxNumber(result)))