function capitalize(str) {
  str = str.toLowerCase();
  let words = str.split(" ");
  for (let i = 0; i < words.length; i = i + 1) {
    let letters = words[i].split("");
    letters[0] = letters[0].toUpperCase();
    words[i] = letters.join("");
  }
  let result = words.join(" ");
  return result;
}
let input = prompt("Mời bạn nhập vào chuỗi ký tự bất kỳ");
console.log(capitalize(input));
