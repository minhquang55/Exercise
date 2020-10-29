//Bai 1:
//cach 1:
const repeatWordC1 = (word, loop) => {
    const arrayWord = [];
    for (let i = 0; i < loop; i++) { 
      arrayWord.push(word);
    }
    return arrayWord;
  }
  
  //cach 2:
  const repeatWordC2 = (word,loop) => {
    const arrayWord = [];
    for (let i = 0; i < loop; i++) { 
      arrayWord[i] = word;
    }
    return arrayWord;
  }
  
  //Bai 2:
  const reverseArray = (array) => {
    const arrayReversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayReversed.push(array[i]);
    }
    return arrayReversed;
  }
  
  //Bai 3:
  const deleteFalseValue = (array) => {
    const trueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) trueArray.push(array[i]);
    }
    return trueArray;
  }
  
  //Bai 4:
  const arrayToObject = (array) => {
    const object = {};
    array.forEach(param => {
      object[param[0]] = param[1];
    });
    return object;
  }
  
  //Bai 5: sort
  const sortArray = (array) => {
    return array.sort();
  }
  
  //Bai 6: 
  const checkTypeObject = (inputDate) => {
    if (inputDate instanceof Object) {
      if (inputDate instanceof Array) return false;
      return true;
    }
    return false;
  }
  
  //Bai 7:
  const obj = { a: 1, b: 2, c: 3, d: 4 }
  const exceptProps = (key1,key2) => {
    delete obj[key1];
    delete obj[key2];
    return obj;
  }
  
  //Bai 8:
  const deleteParams = (array) => {
    array.splice(2, 2);
    return array;
  }
  
  //Bai 9:
  const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
  ]
  
  const filterScore = (array) => {
    const newArray = [];
    array.forEach(element => {
      if (element.score > 5) {
        let nameArray = element.name.split(' ');
        if (nameArray[nameArray.length-2] != 'Duy') newArray.push('Pass');
        else newArray.push('Fail');
      }
      else newArray.push('Fail');
    });
    return newArray;
  }
  
  //Bai 10:
  const filterFunction = (object) => {
    let newScore = object.score * 10;
    let sumNumber = 0;
    while (newScore >= 1) {
      sumNumber = sumNumber + newScore % 10;
      newScore = Math.floor(newScore / 10);
    }
    return sumNumber % 10 > 5;
  }
  
  const findScore = (array) => {
    const newArray = array.filter(filterFunction);
    return newArray;
  }
  