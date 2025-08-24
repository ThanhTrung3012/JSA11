// setItem(key,value) : thêm lên local storage
// key : tên của dữ liệu
// value : giá trị của dữ liệu, phải là kiểu string
localStorage.setItem('name', 'Trung');

// getItem(key) : lấy dữ liệu từ local storage
// key : tên của dữ liệu
const name = localStorage.getItem('name');
console.log(name); 

// removeItem(key) : xóa dữ liệu khỏi local storage
// key : tên của dữ liệu
localStorage.removeItem('name');

// clear() : xóa toàn bộ dữ liệu trong local storage
localStorage.clear();


// Ví dụ : 

// lưu
localStorage.setItem('name', 'Trung');
localStorage.setItem('age', 25);
localStorage.setItem('isMale', true);
localStorage.setItem("hobbies",JSON.stringify(["reading","coding"]))
localStorage.setItem("address", JSON.stringify({
    street: "123 Main St",
    city: "Hanoi",
    country: "Vietnam"
}))

// Lấy
localStorage.getItem('name'); 
localStorage.getItem('age'); 
localStorage.getItem('isMale'); 
const hobbies = JSON.parse(localStorage.getItem("hobbies"));
const address = JSON.parse(localStorage.getItem("address"));
console.log(hobbies); // ["reading", "coding"]
console.log(address); // { street: "123 Main St", city: "Hanoi",