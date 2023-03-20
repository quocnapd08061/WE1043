


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