// Function Type Expressions
// --------------------------------------------------

function printToConsole(s: string) {
  console.log(s);
}


function printErrorToConsole(s: string) {
  console.error(s);
}

function greeter(fn: (s: string) => void) {
  fn("hello World");
}
greeter(printToConsole);
greeter(printErrorToConsole);


// Of course, we can use a type alias to name a function type:
type PrinterFunction = (value: string) => void

function greeterWithTypeAlias(func: PrinterFunction) {
  func("hello World with type alias");
}

greeterWithTypeAlias(printToConsole);
greeterWithTypeAlias(printErrorToConsole);


// Call Signature
// --------------------------------------------------
type DescribableFunction = {
  description: string,
  (str: string): string,
};

function doSomething2(fn: DescribableFunction) {
  console.log(`function: ${fn.description} returns ${fn("Moamen")}`);
}


// Construct Signatures
// --------------------------------------------------
// not implemented


// Generic Functions
// --------------------------------------------------

function GetFistElement<T>(list: T[]): T {
  return list[0];
}


// We can use multiple type parameters as well. For example, a standalone version of map would look
// like this:

function map<Tin, Tout>(list: Tin[], mapfunc: (input: Tin) => Tout) {
  return list.map(mapfunc);
}


const parsedNumbers = map(["1", "2", "3", "4"], (str) => Number(str));
console.log("parsedNumbers: ", parsedNumbers);
console.log("sum:", parsedNumbers.reduce((acc, value) => acc + value, 0));


// Constraints
// ---------------------------------------------------

function longest<T extends { length: number }>(first: T, second: T) {
  return first.length > second.length ? first : second;
}

console.log(longest([1, 2, 3], [1, 2, 3, 4]));
console.log(longest("1111", "11111111"));

// function longest2<T extends { length: number }>(...values: T[]) {
//   if (values.length == 0) return null;
//   let max = Math.max(...(values.map(v => length)));
//   let maxValue = values.filter(v => v.length === max)[0];
//   return maxValue;
// }

// console.log(longest2([1, 2, 3], [1, 2, 3, 4]));
// console.log(longest2("1111", "11111111"));

function combine<T>(first: T[], second: T[]): T[] {
  return first.concat(second);
}

console.log(combine([1, 2, 3], [4, 5, 6]));

console.log(combine<number | string>([1, 2, 3], ["4", "5", "6"]));

// optional parameters:
// --------------------------------------------------------
function myForEach(arr: any[], callback: (obj: any, index?: number) => void) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index);
  }
}

myForEach([1, 2, 3, 4], (obj, i) => console.log(obj, i));
myForEach([1, 2, 3, 4], (obj) => console.log(obj));


// bad
function myForEach2(arr: any[], callback: (obj: any, index?: number) => void) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index]);
  }
}

//myForEach2([1, 2, 3, 4], (obj, i) => console.log(obj, i.toFixed())); // error
myForEach2([1, 2, 3, 4], (obj) => console.log(obj));

// Overload Signatures and the Implementation Signature
// -----------------------------------------------------------

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // error


function substring(text: string, start: number): string
function substring(text: string, start: number, count: number): string
function substring(text: string, start: number, count?: number): string {
  if (count == null)
    return text.substring(start);
  return text.substring(start, start + count + 1);
}

console.log(substring("123456789", 3));
console.log(substring("123456789", 3, 3));


function len(s: string): number;
function len<T>(arr: T[]): number;
function len<T>(x: string | T[]) {
  return x.length;
}

console.log(len("asd"));
console.log(len([1, 2, 3, 4, 5]));













// Declaring this in a Function
// -----------------------------------------------------------
const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};








// Assignability of Functions


type voidFunc = () => void;

const fnvoid1: voidFunc = () => true;
const fnvoid2: voidFunc = () => { return false; }
const fnvoid3: voidFunc = function () { return false; }

let v = fnvoid1();
