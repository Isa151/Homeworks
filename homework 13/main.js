

let carPrices = [30000, 2000, 11000, 33000, 2000, 100000, 57000, 14000, 18000, 8000];
let budget = Math.floor(Math.random() * (120000 - 2000 + 1) + 2000);

let filtered = carPrices.filter(price => price <= budget);
if (filtered.length === 0) {
  alert(`К сожалению, для бюджета ${budget} нет доступных машин.`);
} else {
  let carList = "Для бюджета " + budget + " доступны машины со следующими ценами:\n";
  filtered.forEach(price => {
    carList += "- " + price + "\n";
  });
  alert(carList);
}





let names = ['baxtzod', 'xamza', 'islom', 'abdumanon', 'xojik', 'aziz'];

 longestName = names.filter(name => name.length === names.reduce((acc, curr) => acc > curr.length ? acc : curr.length, 0))[0];

console.log(`Самое длинное имя в массиве: ${longestName}`);