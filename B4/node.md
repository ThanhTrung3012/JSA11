- Array ( mảng ) : Là 1 cấu trúc dữ liệu cho phép người dùng lưu trữ nhiều giá trị
name = trung
name = a
name  = b
=> Name = ["Trung","a","b"]
=> Number = [1,2,4,5,6]
=> Empty = []
- Cấu tạo : 
+ index : chỉ số của phẩn tử , bắt đầu 0
+ Element : phần tử , bắt đầu từ 1.
- Các phương thức cơ bản của array thường dùng :
+ Truy xuất mảng : độ dài của mảng, lấy phần tử theo index
Cú pháp : console.log(<array>.[index])
+ Chuyển Array -> String
Cú pháp : array.toString()
+ join() : Ngăn cách kết quả bằng 1 dấu , kí tự bất kì
Cú pháp : array.join('')
+ Shift() : Xoá phần tử đầu mảng và trả về phần tử đã xoá
Cú pháp : array.shift()
+ splice() : Xoá phần tử từ vị trí con trỏ x,y là phần kết thúc
Cú pháp : array.splice(1,2)
+ push() : Thêm 1 hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới của mảng
Cú pháp : array.push(4,5)
+ unshift() ; Thêm vào đầu mảng


- Object ( ddoois tuongwj ) : là kiểu dữ liệu cơ bản dùng để lưu trữ tập hợp các cặp key-value. Quan trọng thường dùng để mô tả thông tin cấu trúcduwx liệu, hoặc làm việc với JSON
+ Cú pháp : 
let <ọbj> = {
    key1 : value1,
    key2 : value2,
    ...
}

3. DOM HTML : mô hình được xây dựng dựa trên trình duyệt trả ra
- Dom : gồm 3 thành phần : Element ( các thẻ tag ), attribute ( thuộc tính , class, id, src, href ), text.
- Dom ( document object model ) : là kiểu dạng mô hình đối tượng để truy xuất và thao tác các phần tử HTML trong 1 trang html. Nói rõ hơn là DOM được sử dụng để có thể thay đổi cấu trúc về trang html
- Các phương thức thao tác với DOM trong JS
1. Lấy ra HTML element có id là " id_of_element" 
const element = document.getElementById("id_of_element")
console.log(element) // nó trả ra thẻ chứa id đó.

2. Lấy ra tất cả các HTML Element có class là " class_of_element" 
const element = document.getElementsByClassName("class_of_element")
console.log(element) // Trả ra các thẻ có chứa class trên.

3. Lấy ra tất cả các HTML Element có tag là " tag_of_element" 
const element = document.getElementsByTagName("tag_of_element")
console.log(element) // Trả ra các thẻ có chứa tag trên.

4. Lấy ra HTML Element theo CSS selector
const element = document.querySelector("css_selector")
console.log(element) // Trả ra các thẻ có chứa css_selector trên.

5. Lấy ra tất cả HTML Element theo CSS Selector
const element = document.querySelectorAll("css_selector")
console.log(element) // Trả ra các thẻ có chứa css_selector trên.

Phân biệt innerHTML và textContent
- Xử lí event ( sự kiện )
+ Để xử lí sự kiệnm t sẽ dụng phương thức addEventListener của HTML Element . Phương thức này nhận vào 2 tham số : tên sự kiện và hàm xử lý
+ Cú pháp : element.addEventListener("event_name",function(event) {
    code xử lí sự kiện
} )