/* Generics */
const names: Array<string> = [];
// names[0].split('');

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve(10);
    }
    reject(500);
  }, 2000);
});
promise.then((data) => {
  console.log(data);
});

/* Creating Generic Function: to merge 2 objects and return a new object */
function merge<T extends object, U extends object>(objA: T, objB: U) {
  // return Object.assign(objA, objB);
  return {
    ...objA,
    ...objB
  };
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

/* Another generic function */
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value!';
  const elmLength = element.length;

  if (elmLength === 1) {
    descriptionText = 'Got 1 element.';
  } else if (elmLength > 1) {
    descriptionText = `Got ${elmLength} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('Hello there'));

/* The "keyof" constraint */
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({name: 'Sonu', age: 29}, 'name');

/* Generic Classes */
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<String>();
textStorage.addItem('Gimpy');
textStorage.addItem('Nobita');
textStorage.removeItem('Gimpy');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(45);
numberStorage.addItem(300);
numberStorage.addItem(-4);
numberStorage.removeItem(300);
console.log(numberStorage.getItems());

/* Generic utility types */

// Partials
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function addCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  // ... some business logic, maybe validations

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// Readonly
const items: Readonly<string[]> = ['Ginger', 'Phool'];
// items.push('Garlic'); // Uncomment to see the error
// items.pop(); // Uncomment to see the error
