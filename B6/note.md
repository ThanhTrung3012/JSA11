- Local Storage : là cơ chế lưu trữ dữ liệu trên trình duyệt. Nó cho phép lưu dưới key-value. dữ liệu này sẽ được lưu trữ mãu trên trình duyệt ngay cả khi tắt trình duyệt.
- Các kiểu dữ liệu được lưu trữ : string, number, boolean, object, array.
- Tuy nhiên , khi lưu trữ các dữ liệu này, chúng ta đều phải chuyển đổi thành kiểu string trươc khi lưu trữ. 
- Và khi lấy từ local storage ra , chúng ta sẽ là kiểu string và cần được chuyển đổi về kiểu dữ liệu ban đầu để dễ dàng thao tác.

- Các phương thức của local storage 
+ setItem(key,value)
+ getItem(key,value)
+ removeItem(key)
+ clear()