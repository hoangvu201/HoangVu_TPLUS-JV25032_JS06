function checkNumber (num) {
    if (Number.isNaN(num) || !Number.isInteger(num) || num < 2) {
        return "Dữ liệu không hợp lệ";
    } else {
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        return `${num} là số nguyên tố`
    } else {
       return `${num} không phải là số nguyên tố`;
    }
}
}

let number = +prompt("Mời bạn nhập vào 1 số");
console.log(checkNumber(number));
