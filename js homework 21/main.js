

let pwd

let chances = 0

let maxChances = 3

do {
    pwd = +prompt("Password?")
    chances++
} while (pwd !== 228 && chances < maxChances);

if (pwd !== 228 && chances === maxChances) {
    alert("You blown it!")
}