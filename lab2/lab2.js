
// //bài 1

// //nhap gia tri a , b , c  tu ban phim
// let a = parseInt(prompt("Nhap a: "));
// let b = parseInt(prompt("Nhap b: "));
// let c = parseInt(prompt("Nhap c: "));
// //dental
// let delta = b * b - 4 * a * c;
// if (delta < 0){
//     console.log("Phuong trinh vo nghiem " );
// }else if(delta == 0){
//     let x= -b /(2*a);
//     console.log("Phuong trinh co nghiem x=",x);
// } else{
//     let x1=(-b+Math.sqrt(delta))/(2*a);
//     let x2=(-b-Math.sqrt(delta))/(2*a);
//     console.log("Phuong trinh co 2 nghiem phan bien la x1=",x1,"x2=",x2 );
// }

// bài 2
//nhâp các canh a b c
// let a = parseInt(prompt ("Nhập canh a: "));
// let b = parseInt(prompt("Nhập canh b: "));
// let c = parseInt (prompt("nhập canh c:  "));
// if (a <= 0 || b <= 0 || c <= 0) {
//     console.log("Độ dài các cạnh phải là số dương");
//   } else if (a + b <= c || a + c <= b || b + c <= a) {
//     console.log("Đây không phải là tam giác");
//   } else if (a == b && b == c) {
//     console.log("Đây là tam giác đều");
//   } else if (a == b || b == c || a == c) {
//     console.log("Đây là tam giác cân");
//   } else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
//     console.log("Đây là tam giác vuông");
//   } else {
//     console.log("Đây là tam giác thường");
//   }


//bài 3 

//  Nhập vào họ và tên.
let fullName = prompt("Nhập họ và tên đầy đủ: ");
let gender = prompt("Nhập giới tính (Nam hoặc Nữ): ");

let nameArray = fullName.split(" ");
let lastName = nameArray[nameArray.length - 1];
let firstName = nameArray[0];
let middleName = "";
for (let i = 1; i < nameArray.length - 1; i++) {
  middleName += nameArray[i] + " ";
}
middleName = middleName.trim();

if (gender == "Nam") {
  middleName = "Văn";
} else if (gender == "Nữ") {
  middleName = "Vẽ";
}

console.log("Họ: " + firstName);
console.log("Tên đệm: " + middleName);
console.log("Tên riêng: " + lastName);
console.log("Tên mới: " + firstName + " " + middleName + " " + lastName);