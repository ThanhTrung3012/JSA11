//VD : Taoj ra  1 mang va in ra mang do
let fruits = ["Apple", "Cherry", "Banana"]
console.log(fruits);
// truy xuất : 
console.log(fruits[1]);
// Chuyển array sang string
let number = [1,2,3,4]
console.log(number);
console.log(number.toString());
// join() 
console.log(fruits.join('-'));
//shift()
console.log(fruits.shift());
//splice()
console.log(fruits.splice(1,2));
// push() 
let number1 = number.push(5,6)
console.log(number);
//unshift() 
let number2 = number.unshift(-2,-1)
console.log(number);

let all = [1,"a",5,9,0]
// Cập nhật mảng
all[1] = " Giá trị mới"
console.log(all);

// Tim kiếm
console.log(all.indexOf(9));




// Object
//VD : In ra thông tin người dùng
let person = {
    name : "A",
    age : 30,
    job : "Development"
}
console.log(person);
// Truy xuaats 
console.log(person.name);
//thêm thông tin
person.gender = "Male"
console.log(person);
// Xoas
delete person.age
console.log(person);
// Cap nhat
console.log(person.name = "B");
// TImkien
if ( "age" in person) {
    console.log("da ton tai");
}
else {
    console.log("Khong ton tai");
    
}

// Lấy dữ liệu từ id, class, tag, css
const el1 = document.getElementById("title")
console.log(el1);
const el2 = document.getElementsByClassName("name")
console.log(el2);
const el3 = document.getElementsByTagName("h1")
console.log((el3));
const el4 = document.querySelector(".age")
console.log(el4);
const el5 = document.querySelectorAll(".age")
console.log(el5);
// Thay đổi nội dung của HTML Element
el1.innerHTML= "DDO THANH TRUNG"
el1.style.color = "red"
el1.style.backgroundColor = "blue"
// Thay đổi thuộc tính của HTML Element
el1.setAttribute("id","ABC")
// Thay đổi clas của HTML Element 
el1.classList.add("title")

el1.classList.remove("title")

el1.classList.toggle("toggle")
// Thay đổi nội dung text của HTML element 
el1.textContent ="Đã thay lần 2"

// ví dụ về sự kiên
const container = document.getElementById("container")
// them suj kien di chuyen chuot vao container
//  thi se thay doi mau nen
container.addEventListener("mouseover",function(event){
    container.style.backgroundColor = "red"
})
container.addEventListener("mouseout",function(event){
    container.style.backgroundColor = "white"
})
container.addEventListener("click",function(event){
    alert("Clicked")
})