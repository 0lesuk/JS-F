let a = 1;
let b = 2;
let c = 9;

if (a<b && b<c) {
    console.log('Statement a<b<c is true')
} else {
    console.log('Statement a<b<c is false')
}

// 2
let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log(res1, typeof res1);
let res2 = !!x + String(y);
console.log(res2, typeof res2);
let res3 = !!(y - 1);
console.log(res3, typeof res3);
let res4 = parseInt('') + x * y;
console.log(res4, typeof res4);

// 3
let isAdult = prompt('How old are you?');
if (isAdult >= 18) {
    alert('Congratulations, you are old enough!')
} else {
    alert ('You are too young :(')
}

// 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let counts = {};
let maxCount = 0;
let data;

arr.map(num => {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    data = num;
  }
});
arr.filter(num => num !== data);

console.log(counts)
console.log(arr);
console.log(data);

// 5
let sideA = +prompt("Введіть довжину першої сторони");
let sideB = +prompt("Введіть довжину другої сторони");
let sideC = +prompt("Введіть довжину третьої сторони");


if (sideA <= 0 || sideB <= 0 || sideC <= 0 || sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
  console.log("Incorrect data");
} else {

  let semiperimeter = (sideA + sideB + sideC) / 2;
  let triangleArea = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC)); // площа трикутника
  console.log("Площа трикутника: " + triangleArea.toFixed(3));

  if (sideA * sideA + sideB * sideB === sideC * sideC || sideA * sideA + sideC * sideC === sideB * sideB || sideB * sideB + sideC * sideC === sideA * sideA) {
      console.log("Цей трикутник є прямокутним");
  } else {
      console.log("Цей трикутник не є прямокутним");
  }
}

// 6
let currentData = new Date();
let currentTime = currentData.getHours();
//if
  if (currentTime>=23 || currentTime<5) {
    console.log("Доброї ночі");
  }else if (currentTime>=5 && currentTime<11){
    console.log("Доброго ранку");
  }else if (currentData>=11 && currentTime<17){
    console.log("Доброго дня");
  }else {
    console.log("Доброго вечора");
  }
// switch
  switch(true){
    case (currentTime >= 23 || currentTime < 5):
      console.log("Доброї ночі");
      break;
    case (currentTime >= 5 && currentTime < 11):
      console.log("Доброго ранку");
      break;
    case (currentTime >= 11 && currentTime < 17):
      console.log("Доброго дня");
      break;
    default:
      console.log("Доброго вечора");
      break;
  }









