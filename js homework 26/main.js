

let names = ['Messi', 'Cristiano', 'Islom', 'Firdavs', 'Baxtzod '];

const getLongestName = (isMax, ...names) => {
  let longestName = '';
  
  for (let name of names) {
    if (name.length > longestName.length || longestName === '') {
      longestName = name;
    }
  }
  
  let shortestName = '';
  
  for (let name of names) {
    if (name.length < shortestName.length || shortestName === '') {
      shortestName = name;
    }
  }
  
  if (isMax) {
    return longestName;
  } else {
    return shortestName;
  }
}

console.log(getLongestName(true, ...names)); 
console.log(getLongestName(false, ...names));