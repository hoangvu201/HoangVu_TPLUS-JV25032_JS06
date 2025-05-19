let input = prompt("Mời bạn nhập vào chuỗi ký tự bất kỳ");

function isPalindrome(check) {
  let flag = true;
  let arr = check.toLowerCase().split("");
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return `${check} là chuỗi đối xứng`;
  }
  else {
    return `${check} không phải chuỗi đối xứng`
  }
}
console.log(isPalindrome(input));