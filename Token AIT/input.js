const form = document.getElementById('newsletterForm');
const resultMessage = document.getElementById('resultMessage');

form.addEventListener('sumbit',function(event){
    event.preventDefault();
    
    const email = form.email.value;
    const phone = form.phone.value;
    
    //kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    resultMessage.innerText = 'Please enter a valid email address.';
    return;
}// Kiểm tra định dạng số điện thoại
const phoneRegex = /^\d{10}$/;
if (!phoneRegex.test(phone)) {
  resultMessage.innerText = 'Please enter a valid phone number.';
  return;
}

// Nếu thông tin hợp lệ, gửi thông tin đến máy chủ hoặc thực hiện các xử lý khác
resultMessage.innerText = 'Thank you for subscribing!';
});