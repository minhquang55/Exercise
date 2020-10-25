// Bai 1: tinh thue va luong rong
const getSalery = (luong) => {
    if(luong >= 15000000){
        console.log("Thuế thu nhập = ",luong*30/100);
        console.log("Lương ròng = ",luong*70/100);
    }
    else if (luong < 15000000 && luong > 7000000) {
        console.log("Thuế thu nhập = ",luong*20/100);
        console.log("Lương ròng = ",luong*80/100);
    }
    else if (luong < 7000000 && luong > 0) {
        console.log("Thuế thu nhập = ",luong*10/100);
        console.log("Lương ròng = ",luong*90/100);
    }
}
// Bai 2: Xet xem hoc sinh du tuoi vao 10 chua
const highSchool = (age) => {
    if(age >= 16 ) console.log ('Hoc sinh du dieu kien vao lop 10');
    else console.log('Hoc sinh khong du dieu kien vao lop 10');
}
// Bai 3: So sanh voi 100
const numCompare = (num) => {
    if(num > 100) console.log ('So lon hon 100')
    else if(num < 100)console.log ('So nho hon 100')
    else console.log ('So bang 100')
}
// Bai 4: Tim so lon nhat trong 3 so
const maxNum = (a,b,c) => {
    var max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    console.log(max);
} 
// Bai 5: Xep loai hoc sinh
const rank = (point) => {
    if(typeof(point)!='number'&&point < 0)console.log('Khong hop le')
    else if(point>=9)console.log('Hang A')
    else if(point>=7&&point<9)console.log('Hang B')
    else if(point>=5&&point<7)console.log('Hang C')
    else console.log('Hang F')
}
// Bai 6: tinh phuong trinh bac 2
const equation = (a,b,c) => {
    const delta = b*b - 4*a*c
    if (a===0 && b===0) console.log('PT vo nghiem')
    else if (a===0 && b != 0) console.log ('PT co 1 nghiem la: ',-c/b)
    else if(delta < 0)console.log ('PT vo nghiem')
    else if(delta == 0)console.log ('PT co nghiem kep la: ',-b/2*a)
    else console.log('PT co 2 nghiem la: ',(-b+Math.sqrt(delta))/(2*a),'va ',(-b-Math.sqrt(delta))/(2*a))
}
// Bai 7: Hoa hong
const poundage = (money) => {
    if(money <= 100000000) console.log('Tien hoa hong = ',money*5/100)
    else if (money <= 300000000 && money >100000000) console.log('Tien hoa hong = ',money*10/100)
    else console.log('Tien hoa hong = ',money*20/100)
}
// Bai 8: cuoc dien thoai
const phoneCharges = (time) => {
    let money = 25000;
    if(time<=50){
        money = money + time*600
    }
    else if (time > 50 && time < 200) {
        money = money + 50*600 + (time-50)*400
    }
    else money = money + 50*600 + 150*400 + (time-200)*200
    console.log('Cuoc dien thoai la: ',money)
}
