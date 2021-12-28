
// Type and Type Inference

let mystr = "hello world"   // type inference to string
let mynum = 200;            // type inference to number
let mybool = true;          // type inference to bool

// note the type of the previous variables has been infered by type script
// if you try to modify any of them with another type error will be thrown

// in the next line : Error: Type 'string' is not assignable to type 'boolean'.ts(2322)
//mybool = "hello world";


// you can define types explicitly
let explicitMystr: string = "hello world"   // string
let explicitMynum: number = 200;            // number
let explicitMybool: boolean = true;          // bool

// functions:
// -------------------------------------------
function myfunc(value: string, index: number): void { // returns void (has no return type)
  // todo
  // do something with parameters
}


function myData(value: string) { // returns void (has no return type)
  // todo
  // do something with parameters
  return "this the first parameter " + value;
}
// note that return type of the myData function is not explicity defined
// so type inference is done by the caller of the function
let result = myData("hello world");


// Arrays 
// ---------------------------------------------------------------

// define array of something
const arrString: string[] = ["hello", "world"];
const arrNumbers: number[] = [1, 2, 3.2];
const arrBoolean: boolean[] = [true, false];

console.log(arrString, arrNumbers, arrBoolean);


const arrString2: Array<string> = ["hello", "world"];
const arrNumbers2: Array<number> = [1, 2, 3.2];
const arrBoolean2: Array<boolean> = [true, false];

console.log(arrString, arrNumbers, arrBoolean);


// any
// --------------------------------------------------------------
// TypeScript also has a special type, any , that you can use whenever you don't want a particular
// value to cause typechecking errors.

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
try {
  obj.foo();
  obj();
  obj.bar = 100;
  obj = "hello";
  const n: number = obj;
} catch (error) {
  console.error(error);
}



// Object Types
// -------------------------------------------------------------
// define object of type {id:number, name:string} 
// You can use , or ; to separate the properties 
// {id:number; name:string} or {id:number, name:string}
// , and the last separator is optional either way.

let person0: { id: number; name: string };
let person1: { id: number, name: string };

// assign object of type {id:number, name:string}
person1 = { id: 1, name: "mohammed" };

// define object parameter of a function
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 10, y: 20 });


// Optional Properties
// ---------------------------------
// In JavaScript, if you access a property that doesn't exist, you'll get the value undefined 
// rather than a runtime error. Because of this, when you read from an optional property, you'll
// have to check for undefined before using it.

function printPerson(person: { id: number, name: string, city?: string }) {
  console.log(`Person: id: ${person.id}, name: ${person.name}`);
  if (person.city !== undefined) console.log("has city: " + person.city);
}

printPerson({ id: 1, name: "ahmed" });

printPerson({ id: 1, name: "mohammed", city: "cairo" });






// Union Types
// you can use directly the members that is shared between 
// the union members, and if you try to use function for example
// from one type that doesn't exist in the other members 
// compilation error will be thrown

function printId(id: number | string) {
  console.log(id);
  //console.log(id.toUpperCase()); // error
}

printId(1);
printId("xyz");
//printId({data:xyz}); // error thrown

// narrowing the union to use specific members of one of union members
// ---------------------------
// The solution is to narrow the union with code, the same as you would in JavaScript without type
// annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based
// on the structure of the code.

function printId2(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function printStrings(str: string | string[]) {
  if (Array.isArray(str))
    console.log("i am array of string: ", str);
  else {
    console.log("i am just a string");
  }
}


// Type Aliases
// --------------------------------------------\
// type aliases is the same as making object types 
// definition like coord:{x:number , y:number } in the 
// parameters of the previous functions
// 
type Coord0 = {
  x: number, y: number
};

type Coord = {
  x: number;
  y: number;
};

// function printCoord2(coord: { x: number, y: number }) {
//   console.log(coord.x, coord.y);
// }

function printCoord2(coord: Coord) {
  console.log(coord.x, coord.y);
}

printCoord2({ x: 1, y: 2 });

// type aliases with union
// ----------------------------------------
type ID = number | string;

function printId3(id: ID) {
  console.log(id);
}

printId3(3);
printId3("3xy");

let myId: ID = "hello";

// todo: note 
// aliases doesn't make new types , it is just a replacement 
// of writing the main type.

type UserInputSanitizedString = string;
function sanitizeInput(str: string): UserInputSanitizedString {
  return str
}
// Create a sanitized input
let userInput = sanitizeInput("my input ");
// Can still be re-assigned with a string though
userInput = "new input";



// Interfaces
// ===============================================================
// An interface declaration is another way to name an object type:

interface Point {
  x: number;
  y: number;
}
function printCoord4(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord4({ x: 100, y: 100 });





// Diff between Interfaces and Types
// ===============================================================
// Almost all features of an interface are available in type , the key 
// distinction is that a type cannot be re-opened to add new properties 
// vs an interface which is always extendable.


interface Parent {
  id: number,
  name: string
};

interface Parent {
  id: number,
  salary: number
};
// now you has two Parent interfaces each one has properties
// to create object from that type it must include all the properties 
// defined in that interface 
const myparent: Parent = { id: 1, name: "mohammed", salary: 232323.12 };

// but Type aliases can't

type MyParent = { id: number, name: string };

//type MyParent= {id:number, salary:number};
//Duplicate identifier 'MyParent'



interface MyName {
  name: string
}

function getName() {
  const myname: MyName = { name: "moamen soroor" };
  let d = typeof myname;
  console.log(d);
  return myname;
}

// more in differences 
// ---------------------------------
// - Prior to TypeScript version 4.2, type alias names may appear in error messages, sometimes in
//    place of the equivalent anonymous type (which may or may not be desirable). Interfaces will
//    always be named in error messages.

//  - Type aliases may not participate in declaration merging, but interfaces can
//  - Interfaces may only be used to declare the shapes of object, not re-name primitives.
//  - Interface names will always appear in their original form in error messages, but only when they
//    are used by name



//NOTE: use interface until you need to use features from type .


// Type Assertions
//================================

// the type returned will be HTMLElement | null
const canvas = document.getElementById('#mycanvas');

// you can be more specific by using Type Assertion
// now type will be HTMLCanvasElement
const mycanvas = document.getElementById("#mycanvas") as HTMLCanvasElement;

// You can also use the angle-bracket syntax 
// (except if the code is in a .tsx file), which is equivalent:
const mycanvas2 = <HTMLCanvasElement>document.getElementById('#mycanvas');


// Reminder: Because type assertions are removed at compile-time, there is no 
// runtime checking associated with a type assertion. There won't be an exception 
// or null generated if the type assertion is wrong


// Sometimes this rule can be too conservative and will disallow more complex coercions that might
// be valid. If this happens, you can use two assertions, first to any (or unknown , which we'll
// introduce later), then to the desired type:
// const a = (expr as any) as T;




// Literal Types
// ------------------------------------

let mylit: "Hello" = "Hello";
//  now mylit is of type literal "Hello" not string

// more useful senario is by using the union of type literals
let direction: "left" | "right" | "top" | "bottom" = "left";

// you can assign any value of the unioned type literals
direction = "right";
direction = "left";
direction = "top";
direction = "bottom";

// error: Type '"center"' is not assignable to type 
//    '"left" | "right" | "top" | "bottom"'.ts(2322)
// direction = "center";


// another example
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

// now alignment argument  will be checked againest type "left" | "right" | "center"
// if it doesn't match the type , typescript will throw error
//printText("asd","top");
printText("asd", "left");
printText("asd", "right");

// another example:
// ===========================
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}



// combine literal type  with non-literal types 

interface Options { width: number, height: number }

function configure(options: Options | "auto" | "inherited") {
  // check options
}

configure({ width: 2, height: 12 });
configure("auto");
configure("inherited");

//configure({x:1, y:3}); // invalid

//configure("hello") // invalid

const req = { url: "https://example.com", method: "GET" };

function handleRequest(url: string, method: "GET" | "POST" | "PUT") {
  // do something
}

// 
// handleRequest(req.url, req.method);
// error second argument is not "GET" literal type
// but it is string type has value "GET"
// ERROR: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST" | "PUT"'


// solution 1
// Change 1: convert the method property from string to literal type "GET"
const req2 = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req2.url, req2.method);

// solution 2
// Change 2: convert the argument passed to the handleRequest() to literal type "GET"
const req3 = { url: "https://example.com", method: "GET" };
handleRequest(req3.url, req3.method as "GET");

// solution 3
// Change 3: convert the whole object to literal type
const req4 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req4.url, req4.method);

// The as const suffix acts like const but for the type system, ensuring that all properties are
// assigned the literal type instead of a more general version like string or number .
// so the previous req4 will be : 
// -------
// const req4: {
//   readonly url: "https://example.com";
//   readonly method: "GET";
// }
// -------

//#region null and undefined

// null and undefined
// ==================================================
// JavaScript has two primitive values used to signal absent or uninitialized value: null and
// undefined .
// TypeScript has two corresponding types by the same names.
// How these types behave depends on
// whether you have the strictNullChecks option on.

// strictNullChecks off
// --------------------
// With strictNullChecks off, values that might be null or undefined can 
// still be accessed normally, and the values null and undefined can be 
// assigned to a property of any type. 

// we always recommend people turn
// strictNullChecks on if it's practical to do so in their codebase.

// strictNullChecks On
// -------------------
// With strictNullChecks on, when a value is null or undefined , you will need to test for those
// values before using methods or properties on that value. Just like checking for undefined before
// using an optional property, we can use narrowing to check for values that might be null :


function doSomething(x: string | null) {
  // narrowing
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}




// Non-null Assertion Operator (Postfix ! )
// ------------------------------------------
// TypeScript also has a special syntax for removing null and undefined from a type without
// doing any explicit checking.
// Writing ! after any expression is effectively a type assertion that the
// value isn't null or undefined
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

// NOTE: that non-null assertion operator doesn't affect runtime
// only check compile time
//#endregion


// Less Common Primitives
// bigint
// but target must be ES2020 to be able to use BigInt
// Creating a bigint via the BigInt function
// const oneHundred: bigint = BigInt(100);
// Creating a BigInt via the literal syntax
// const anotherHundred: bigint = 100n;








//#region typeof type guards
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"

// when typeof used in comparison, 
// TypeScript can understand it to narrow types in different branches
// so you can use the specific type on that branch 
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    // narrowing to number: you can use any memebers of number here
    return new Array(padding + 1).join(" ") + input;
  }
  // narrowing to string: you can use any member of string type here
  return padding + input;
}
console.log(padLeft(10, "moamen"));
console.log(padLeft("hello world ", "moamen"));



// the problem that typeof null is "object" & typeof Array is "object"
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//       for (const s of strs) { // error here: Object is possibly 'null'.
//           console.log(s);
//       }
//   } else if (typeof strs === "string") {
//       console.log(strs);
//   } else {
//   // do nothing
//   }
// }
//printAll(["a","b"]);


//#endregion




// diff between interface and type aliases

interface Animal { Name: string; }
interface Bear extends Animal { IsBear: true; }

const bear: Bear = { Name: "B", IsBear: true }

console.log(bear);


type Person = { Name: string; }
type Student = Person & { Age: number }

const std: Student = { Name: "student", Age: 33 };

console.log(std);


// A type cannot be changed after being created
// ------------
type Windows = {
  title: string
}

// if you uncomment the next code, you will face error: Duplicate identifier 'Windows'.
// type Windows = {
//   ts: TypeScriptAPI
// }

// on the other hand: interfaces
// ------------
// Adding new fields to an existing interface 

interface Window {
  title: string
}


interface Window {
  dummyLocation: { X: number, Y: number }
}

console.log(window.title);
console.log(window.dummyLocation);

// type assertion
const canvasElement = <HTMLCanvasElement>document.getElementById("canvasId");
console.log(canvasElement.width);


const canvasElement2 = document.getElementById("canvasId") as HTMLCanvasElement;
console.log(canvasElement2.width);



// narrowing with in operator:
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void, fly?: () => void };
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal
  } else {
    animal
  }
} type Fish2 = { swim: () => void };
type Bird2 = { fly: () => void };
type Human2 = { swim?: () => void, fly?: () => void };
function move2(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal
  } else {
    animal
  }
}

// narrowing with discriminator
type Circle = {
  shapeType: "circle",
  raduis: number
}

type Square = {
  shapeType: "square",
  edgeLength: number
}

type Rectangle = {
  shapeType: "rectangle",
  width: number,
  height: number
}

type Shape = Circle | Square //| Rectangle
// if you uncomment Rectangle, exaustiveCheck at the getAreaWithNever function will throw compile error 

function getArea(shape: Shape): number {
  if (shape.shapeType === "square")
    return shape.edgeLength ** 2;
  else if (shape.shapeType === "circle")
    return shape.raduis * shape.raduis * Math.PI;
  else
    return NaN;
}

function getAreaWithSwitch(shape: Shape): number {
  switch (shape.shapeType) {
    case "circle":
      return shape.raduis * shape.raduis * Math.PI;
    case "square":
      return shape.edgeLength ** 2;
    default:
      return NaN;
  }
}

console.log(getArea({ shapeType: "circle", raduis: 20.25 }));

// Exhaustiveness checking and Never type
// ------------------------------------------

function GetAreaWithNever(shape: Shape) {
  switch (shape.shapeType) {
    case "circle":
      return shape.raduis * shape.raduis * Math.PI;
    case "square":
      return shape.edgeLength ** 2;
    // case "rectangle":
    //   return shape.width * shape.height;
    default:
      const exaustiveCheck: never = shape;
      // ts compile time error, as Rectagnle not exists in the switch
      return exaustiveCheck;
  }
}

// Unkown
// -------------------------
// [..] unknown which is the type-safe counterpart of any. Anything is
// assignable to unknown, but unknown isn't assignable to anything but
// itself and any without a type assertion or a control flow based
// narrowing. Likewise, no operations are permitted on an unknown without
// first asserting or narrowing to a more specific type.


let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown = 10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
//let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
//vUnknown.method(); // Not ok; we don't know anything about this variable


