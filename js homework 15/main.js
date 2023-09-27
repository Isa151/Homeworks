


let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let str = 0
let nums = 0
let others = 0

let stingFiltred = arr.filter(item => typeof(item) === 'string');
console.log(stingFiltred);

let numsFiltred = arr.filter(num => typeof(num) === 'number' )
console.log(numsFiltred);

let othersFiltred = arr.filter(other => typeof(other) !== 'string' && typeof(other) !== 'number')
console.log(othersFiltred);