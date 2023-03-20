// bài 2
// nhâp các canh a b c
let a = parseInt(prompt ("Nhập canh a: "));
let b = parseInt(prompt("Nhập canh b: "));
let c = parseInt (prompt("nhập canh c:  "));
if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Độ dài các cạnh phải là số dương");
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Đây không phải là tam giác");
  } else if (a == b && b == c) {
    console.log("Đây là tam giác đều");
  } else if (a == b || b == c || a == c) {
    console.log("Đây là tam giác cân");
  } else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
    console.log("Đây là tam giác vuông");
  } else {
    console.log("Đây là tam giác thường");
  }
