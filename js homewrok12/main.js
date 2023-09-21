

let arr = ['islom', 'muhammadali', 'baxtzod', 'usmon', 'xayot', 'artyom']

let name = prompt("Which student do want to remove?")
arr.splice(arr.indexOf(name), 1)

console.log(arr);