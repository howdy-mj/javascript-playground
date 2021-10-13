const arr = [1, 2, 3];
const obj = {};

// console.log(arr.constructor === Array); // true
// console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// console.dir(arr);
// console.dir(obj);

// 객체와 배열의 가장 큰 차이점: length 프로퍼티
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// 선형 검색
const linearSearch = (array, target) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
// console.log(linearSearch([1, 2, 3], 4));
// console.log(linearSearch([1, 2, 3, 4, 5], 5));

// 배열의 프로퍼티 디스크립터 객체
// console.log(Object.getOwnPropertyDescriptors(arr));

// 성능 차이
const arrPer = [];
console.time('Array');
for (let i = 0; i < 10000000; i++) {
  arrPer[i] = i;
}
console.timeEnd('Array'); // 약 95ms

const objPer = {};
console.time('Object');
for (let i = 0; i < 10000000; i++) {
  objPer[i] = i;
}
console.timeEnd('Object'); // 약 257ms

// length
const arrLength = [1];
arrLength.length = 3;
// console.log(arrLength.length);
// console.log(arrLength);
// console.log(Object.getOwnPropertyDescriptors(arrLength)); // empty는 출력하지도 않음

// 생성자 함수
const newArr = new Array();
const justArr = Array();
Object.getOwnPropertyDescriptors(newArr);
Object.getOwnPropertyDescriptors(justArr);
