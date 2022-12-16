function add(n1, n2, printResult) {
    var sum = n1 + n2;
    if (printResult) {
        console.log('Result is: ', sum);
        return;
    }
    return n1 + n2;
}
var num1 = 4;
var num2 = 9.33;
var printResult = false;
var result = add(num1, num2, printResult);
console.log('Result is: ', result);
