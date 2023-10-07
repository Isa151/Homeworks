
let products = [
    {
        name: "milk",
        type: "milk",
        price: 16000
    },
    {
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {
        name: "champain",
        type: "alcohol",
        price: 100000
    },
]

//  Task 1 and 4

let totalPrice = products.reduce((a, b) => a + b.price, 0)
let average = totalPrice/10
console.log(totalPrice);
console.log(average);


// Task 2 and 3

// Молочные продукты
let milkProducts = [].concat(products.slice(0, 3))
console.log(milkProducts.length);
let totalMilk = milkProducts.reduce((a, b) => a + b.price, 0)
console.log(totalMilk);

//  Мясные продукты
let meatProducts = [].concat(products.slice(3, 6))
console.log(meatProducts.length);
let totalMeat = meatProducts.reduce((a, b) => a + b.price, 0)
console.log(totalMeat);

// Алкоголь
let alcoholPoducts = [].concat(products.slice(7, 10))
console.log(alcoholPoducts.length);
let totalAlcohol = alcoholPoducts.reduce((a, b) => a + b.price, 0)
console.log(totalAlcohol);






// 1. посчитать общую сумму всех товаров
// 2. посчитать общую сумму всех товаров конкретной категории
// 3. посчитать сколько товаров конкретной категории
// 4. найти средний прайс всех товаров