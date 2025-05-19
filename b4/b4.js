let result = [];
let lengthArr = +prompt("Nhập số phần tử cần nhập vào mảng");
for (let i = 1; i <= lengthArr; i++) {
  let elementArr = +prompt(`Mời bạn nhập giá trị của phần tử thứ ${i} trong mảng`);
  result.push(elementArr);
}

function checkNumber (num) {
    let count = 0;
    for (let element of num) {
        if (Number.isInteger(element) && element > 0) {
            count = count + 1;  
        } 
    }
    if (count === 0) {
        return "Không có số nguyên dương trong mảng";
    } else {
        return `Có ${count} số nguyên dương trong mảng`;
    }
}
console.log(checkNumber(result));