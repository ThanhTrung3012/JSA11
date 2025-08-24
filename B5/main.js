// Cách khai báo Function declaration
// function sum(a,b) {
//     c = a + b;
//     return c; 
// }

// Cách khai báo Function expession
// const sum = function(a,b) {
//     c = a + b;
//     return c
// }
// const result = sum(1,2)
// console.log(result);

// Viết hàm giải phương trình bậc 
function ptbac2(a,b,c) {
    const delta = b*b + 4*a*c;
    if (delta < 0 ) {
        return "Phuong trinh vo nghiem"
    }
    else if (delta === 0) {
        const x = -b/(2*a);
        return "Phuong trinh co nghiem kep x = " + x;
    }
    else {
        const x1 = (-b + Math.sqrt(delta)) / ( 2*a);
        const x2 = (-b - Math.sqrt(delta)) / ( 2*a);
        return "Phuong trinh co 2 nghiem phan biet x1 = " + x1 + ",x2 = " + x2;
    }
}
const result = ptbac2(1,2,1);
console.log(result);

