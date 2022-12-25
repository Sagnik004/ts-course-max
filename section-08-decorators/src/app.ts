function Logger(logString: string) {
  console.log('LOGGER DECORATOR FACTORY');

  return function(constructor: Function) {
    console.log('LOGGER DECORATOR FUNCTION');
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE DECORATOR FACTORY');

  return function(_: Function) {
    console.log('TEMPLATE DECORATOR FUNCTION');
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}

@Logger('LOGGING STEVE')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
  name = 'Steve';

  constructor() {
    console.log('Creating person object...');
  }
}

const somePerson = new Person();

// ------------ Property Decorators ------------ //
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// ------------ Accessor Decorators ------------ //
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('------ Accessor Decorator! ------');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ------------ Method Decorators ------------ //
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('------ Method Decorator! ------');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ------------ Argument/Parameter Decorators ------------ //
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('------ Argument/Paramater Decorator! ------');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price provided!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

