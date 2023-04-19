// Thời gian đích đến 
var countDownDate = new Date("2023-04-30T00:00:00").getTime();

// Cập nhật thời gian mỗi giây
var x = setInterval(function() {

  // Lấy thời gian hiện tại
  var now = new Date().getTime();

  // Tính khoảng cách giữa thời gian hiện tại và thời gian đích đến
  var distance = countDownDate - now;

  // Tính toán các phần tử đếm ngược
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị thời gian đếm ngược trong phần tử HTML
  document.getElementById("coundownt").innerHTML =
    "<div>" + days + "</div><span>d</span>" +
    "<div>" + hours + "</div><span>h</span>" +
    "<div>" + minutes + "</div><span>m</span>" +
    "<div>" + seconds + "</div><span>s</span>";

  // Nếu đếm ngược kết thúc, hiển thị thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("coundownt").innerHTML = "Đếm ngược đã kết thúc";
  }
}, 1000);
