let, const , var 
- So sánh giữa 3 biến > Cùng được sử dụng để khai báo biến, tuy nhiên sẽ khác về phạm vi hoatj động ( scope )
+ Var : là 1 biến toàn cục ( global ) ,cùng pham vi thì biến sẽ bị ghi đè.

var x = 10 
if ( true ) {
    var x = 20;
    console.log(x); 20
}
console.log(x); 20

+ let : biến cục bộ ( local ) chỉ chạy được trong block, không có khả năng ghi đè

let y = 10 
if ( true ) {
    let y = 20 
    console.log(y) ; 20
}
console.log(y) ; 10

+ const : là 1 biến cục bộ , liên quan đến mảng.

- Toán tử : + - * / % 

- Tìm hiểu về vòng lặp. ( for )
Cú pháp : 
for ( init ; condition ;increment) {
    // code 
}
+ init : khởi tạo giá trị ban đầu. Chỉ thực hiện duy nhất 1 lần đầu tiên
+ condition : Điều kiện để lặp lại
+ increment : tăng/giảm ( thực hiện sau mỗi lân lặp)
