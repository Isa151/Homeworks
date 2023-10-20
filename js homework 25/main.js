

//  Task 1
let num1 = 0
let num2 = 1
let storage

let question = prompt("Which number do u want to choose?")

function FibonacciNum(stopNum) {
    while (num1 <= parseInt(question)) {
        console.log(num1);
        storage = num1 + num2
        num1 = num2
        num2 = storage
    }
    
}

FibonacciNum(question)

//  Task 2
function bubbleSort(arr) {
    let sorted = false;
    
    while (!sorted) {
      sorted = true;
      
      for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        
        if (current > next) {
          [arr[i], arr[i + 1]] = [next, current];
          sorted = false;
        }
      }
    }
    
    return arr;
  }
  
  let array = [5, 3, 8, 2, 1];
  let sortedArray = bubbleSort(array);
  console.log(sortedArray);