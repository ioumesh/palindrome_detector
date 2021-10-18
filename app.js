const data = document.getElementById("btn");
const reset = document.getElementById("btn1");
let str = document.getElementById("input1");
let err = document.getElementById("error");
let result = document.getElementById("para");
data.addEventListener("click", () => {
  checker();
});
reset.addEventListener("click", (e) => {
  str.value = "";
  result.style.display = "none";
  err.style.display = "none";
});
const checker = () => {
  let text = str.value;
  if (text === "") {
    err.textContent = "enter a valid value";
    err.style.display = "block";
  } else if (text.length === 1) {
    err.textContent = "enter atleast two values to compare";
    err.style.display = "block";
  } else if (text.length >= 2) {
    err.style.display = "none";
    isPalindrome(text);
  }
};

// const isPalindrome = (text) => {
//   let newText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   let len = newText.length;
//   let halfLen = Math.floor(len / 2);
//   let result = document.getElementById("para");

//   for (let i = 0; i < halfLen; i++) {
//     if (newText[i] !== newText[len - 1 - i]) {
//       result.textContent = "it is not palindrome";
//       return;
//     }
//     result.textContent = "it is palindrome";
//   }
// };

const isPalindrome = (newtext) => {
  const myRevStr = newtext
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .toString()
    .split("")
    .reverse()
    .join("");
  const myStr = newtext.toString();

  if (myRevStr == myStr) {
    result.textContent = "It is palindrome";
    str.style.color = "green";
    result.style.display = "block";
    result.style.color = "green";
  } else {
    result.textContent = "It is not palindrome";
    str.style.color = "red";
    result.style.display = "block";
    result.style.color = "red";
  }
};
