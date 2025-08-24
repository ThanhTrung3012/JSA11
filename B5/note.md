Hàm ( function ) : Là 1 khối lệnh thực hiện 1 chức năng nhất định , có thể tái sử dụng, dễ bảo trì
- Cách 1. : Function declaration
- Cú pháp : function <name> (<param1>,<param2>,...) {
    // code thực thi
    // return < value>
}
- Trong đó : 
+ function : là từ để khai báo hàm
+ name : tên của hàm
+ param : tham số đầu vào của hàm.
+ code thực thi : phần code sẽ run trong hàm
+ return : trả về giá trị mong muốn

- Cách 2.  Function Expression
- Cú pháp : const <name> = function (<param1>,<param2>,....) {
    // code thực thi
    // return <value>
}

- Cách gọi hàm : <tên hàm>(<arg1>,<arg2>,...)