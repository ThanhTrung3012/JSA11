const userAccount = {
  username: "admin",
  password: "123456",
};

function handleLogin() {
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  if (
    usernameInput === userAccount.username &&
    passwordInput === userAccount.password
  ) {
    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng.");
  }
}
