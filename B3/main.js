// toán tử : + - * / %
let x = 6
let y = 3
console.log(x+y);//9
console.log(x-y);//3
console.log(x*y);//18
console.log(x/y);//2
console.log(x%y); //0
// Toán tử so sánh : 
let a = 10 
let b = 15
console.log(a>b ); // false
console.log(a<b );
console.log(a!=b ); 
console.log(a ==b );
// Toán tử logic : and ( & ), or ( || ), khác ( ! )
let a1 = true;
let b1 = false ;
console.log(a1 && b1);
console.log(a1 || b1);
console.log(!a1);
console.log(!b1);

// Câu điều kiện : 
// cú pháp : if ( điều kiện đúng ) {} else {} : 1 điều kiện
// if ( điều kiện đúng ) {} else if ( điều kiện đúng 2) {} .... else {}
let nhietdo = 30
if ( nhietdo > 25 ) {
    console.log("Nong");
}
else {
    console.log("Lanh");
}



let DTB = 7.9
if ( DTB >= 8.0) {
    console.log("GIoi");
}
else if ( DTB >= 6.5) {
    console.log("Kha");
}
else if ( DTB >= 5.0) {
    console.log("TB");
}
else {
    console.log("Yeu");
    
}
// BT : 
// 1. Kiểm tra xem 1 số có phải số dương không
let number = -3
if ( number > 0) {
    console.log("La so duong");   
}
else {
    console.log("La so am");
    
}
// 2. Kiểm tra xem 1 số xem n là số âm hay dương
let number1 = 0 
if ( number1 > 0) {
    console.log("La so  duong");
}
else if ( number1 < 0 ) {
    console.log("So am");  
}
else {
    console.log("la so 0"); 
}
// 3. Kiểm tra 1 số phải là số chẵn và lớn hơn 10 không
let number2 = 20 ;
if ( number2 % 2 == 0 && number2 > 10 ) {
    console.log("So chan va lon hon 10");
}
else {
    console.log("Sai");
}

// Ví dụ : In ra màn hình từ số 1 đến số 50 
for (let i = 1;i <= 50;i++) {
    console.log(i);
}
// Vis duj 2 : In ra bang cuu chuong 5
for ( let i = 1 ; i <= 10; i++) {
    console.log(" 5 x " + i + "=" + ( 5*i ));
}
// VD3 : In ra cac so chan tu 1-20
for (let i = 2; i <= 20; i+=2) {
    console.log(i);
    
}