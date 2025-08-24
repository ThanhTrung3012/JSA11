document.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.getElementById("form-login")

    if (loginForm){
        loginForm.addEventListener("submit",function(event){
            event.preventDefault();

            // Lấy giá trị từ ô input :
            const username = document.getElementById("username").value ;
            const password = document.getElementById("password").value;

            // Lấy danh sách tài khoản từ localStorage
            let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
            // Kiểm tra tài khoản có tồn tại không
            const found = accounts.find(acc => acc.username === username && acc.password === password);
            if (!found) {
                alert("Sai tài khoản hoặc mật khẩu!");
                return;
            }

            // Nếu đúng
            localStorage.setItem("isLoggedIn", "true");
            alert("Đăng nhập thành công")
            window.location.href = "index.html"
        })
    }
})