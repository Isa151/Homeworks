

let arr1 = [{ a: { price: 20 } }, { a: { price: 35 } }, { a: { price: 44 } }];
let total = 0;
for (let i = 0; i < arr1.length; i++) {
  total += arr1[i].a.price;
}
console.log(total);



let arr2 = [4, 16, 19, 22, 11, 144, 967, 19124]

let callBack = (arr2) => arr2 % 2 === 0

let callBack2 = (arr2) => arr2 % 2 !== 0

let odd = arr2.filter(callBack2)

let even = arr2.filter(callBack)

console.log(even);
console.log(odd);



