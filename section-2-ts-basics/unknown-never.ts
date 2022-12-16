// Unknown Type
let userInput: unknown;
let userName: string;

userInput = 'Hello';
userInput = 5;

if (typeof userInput === 'string') {
  userName = userInput;
}

// Never type
function generateError(message: string, errCode: number): never {
  throw {
    message: message,
    errorCode: errCode,
  };
}

const errOutput = generateError('Test error ocurred!', 500);
console.log('Error output here: ', errOutput);
