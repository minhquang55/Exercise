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

//Bai 7 : object 
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]

const student = [...studentNames];

const mergeStudents = (studentNames,studentScores) => {
  const findStudentScore = id => {
    for (let i = 0; i < studentScores.length; i++) {
      if (studentScores[i].id === id)return studentScores[i].score;
    }
    return 0;
  }
  studentNames.forEach(studentName => {
    studentName.score = findStudentScore(studentName.id);
  })
  return studentNames;
}

//Bai 8 : 
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const getStudentRanking = (students) => {
  let maxScore = 0;
  let minScore = 10; 

  const theBest = [];
  const theBad = [];
  students.forEach(student => {
    if(student.score > maxScore) maxScore = student.score ;
    if(student.score < minScore) minScore = student.score ; 
  })

  students.forEach(student => {
    if(student.score === maxScore) {
      theBest.push(student);
    }
    if(student.score === minScore) {
      theBad.push(student);
    }
  })

  return {
    theBest,
    theBad
  };
}
