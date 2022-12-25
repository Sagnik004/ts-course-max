function add(n1: number, n2: number, printResult: boolean) {
  const sum = n1 + n2;
  if (printResult) {
    console.log('Result is: ', sum);
    return;
  }
  return n1 + n2;
}

let num1 = 4;
let num2 = 9.33;
const printResult = false;
const result = add(num1, num2, printResult);

console.log('Result is: ', result);
