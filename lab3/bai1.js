// Hàm kiểm tra điểm hợp lệ
function isValidGrade(grade) {
    return grade >= 0 && grade <= 10;
  }
  
  // Hàm tính điểm trung bình và xếp loại
  function calculateGradeAverage() {
    // Nhập điểm Toán, Lý, Hóa, Sinh từ người dùng
    let mathGrade = parseFloat(prompt("Nhập điểm môn Toán:"));
    let physicsGrade = parseFloat(prompt("Nhập điểm môn Lý:"));
    let chemistryGrade = parseFloat(prompt("Nhập điểm môn Hóa:"));
    let biologyGrade = parseFloat(prompt("Nhập điểm môn Sinh:"));
  
    // Kiểm tra điểm hợp lệ
    if (!isValidGrade(mathGrade) || !isValidGrade(physicsGrade) ||
        !isValidGrade(chemistryGrade) || !isValidGrade(biologyGrade)) {
      alert("Điểm nhập vào không hợp lệ. Vui lòng nhập lại.");
      return;
    }
  
    // Tính điểm trung bình
    let averageGrade = (mathGrade + physicsGrade + chemistryGrade + biologyGrade) / 4;
  
    // Xác định xếp loại
    let gradeType;
    if (averageGrade >= 9 && averageGrade <= 10) {
      gradeType = "Giỏi";
    } else if (averageGrade >= 7 && averageGrade < 9) {
      gradeType = "Khá";
    } else if (averageGrade >= 5 && averageGrade < 7) {
      gradeType = "Trung Bình";
    } else {
      gradeType = "Yếu";
    }
  
    // Xuất kết quả
    alert(`Điểm trung bình của bạn là ${averageGrade.toFixed(1)}. Xếp loại: ${gradeType}.`);
  }
  
  // Hàm chạy chương trình
  function runProgram() {
    let choice;
    do {
      choice = parseInt(prompt("Chọn chức năng:\n1. Tính điểm trung bình (switch case)\n2. Tính điểm trung bình (if else)\n0. Thoát"));
      switch (choice) {
        case 1:
          calculateGradeAverage();
          break;
        case 2:
          calculateGradeAverage();
          break;
        case 0:
          break;
        default:
          alert("Chức năng không hợp lệ. Vui lòng chọn lại.");
      }
    } while (choice !== 0);
  }
  
  // Chạy chương trình
  runProgram();
  