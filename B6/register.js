document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Lấy dữ liệu từ ô input trong register
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Kiểm tra định dạng mail
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(username)) {
        alert("Email không hợp lệ");
        return;
      }

      // Kiểm tra mật khẩu và xác nhận xem có khớp không
      if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp");
        return;
      }

      // Kiểm tra độ dài mật khẩu
      if (password.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự");
        return;
      }

      // Kiểm tra mật khẩu có chứa ít nhất 1 chữ hoa không
      if (!/[A-Z]/.test(password)) {
        alert("Mật khẩu phải chứa ít nhất một chữ cái viết hoa");
        return;
      }

      // Kiểm tra mật khẩu có chứa ít nhất 1 chữ số không
      if (!/[0-9]/.test(password)) {
        alert("Mật khẩu phải chứa ít nhất một chữ số");
        return;
      }

      // Kiểm tra xem tài khoản đã tồn tại chưa
      const stroredEmail = localStorage.getItem("username");
      if (stroredEmail === username) {
        alert("Tài khoản đã tồn tại");
        return;
      }
      let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      accounts.push({username,password});
      // Lưu thông tin đăng ký vào localStorage
      localStorage.setItem("accounts", JSON.stringify(accounts));
      alert("Đăng ký thành công");
      window.location = "login.html";
    });
  }
});
