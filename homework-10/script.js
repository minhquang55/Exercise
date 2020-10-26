//Bai 1 : In bang nhan
const displayMul = n => {
    console.log('In bang nhan:')
    for (let i = 1; i <= 10; i++) {
        console.log(n + ' x ' + i + ' = ' + (n*i));
    }
}

//Bai 2 : In cac so chan
const evenNum = n => {
    for (let i = 2; i <= n; i+=2) {
        console.log(i)
    }
} 

//Bai 3 : Tong tu 1 den n
const sumN = n => (n+1)*n/2;

//Bai 4 : In ra giai thua cua n
const giaiThua = n => {
    let gt = 1;
    for (let i=2; i<=n; i++) {
        gt = gt * i;
    }
    return gt;
}

//Bai 5 : Dem so chan trong mang
const countEvenNum = param => {
    let count=0;
    param.forEach (item => {
        if (item%2 == 0) count++;
    });
    return count;
}

//Bai 6 : Xoa cac phan tu trung lap 
const filterParam = param => {
    const setParam = new Set(param);
    const newParam = [...setParam];
    return newParam;
} 
