// Extending 

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface GoodAddress extends BasicAddress {
  unitPlace: string
}

function showAddress(goodAddr: GoodAddress) {
  console.log(goodAddr);
}

showAddress({
  name: "value",
  street: "value",
  city: "value",
  country: "value",
  postalCode: "value",
  unitPlace: "asd"
});


// interface s can also extend from multiple types.
interface Colorful {
  color: string;
}
interface Circle2 {
  radius: number;
}

interface ColorfulCircle extends Circle2, Colorful {
  xPos: number, yPos: number
}



// Intersections

interface Colorful2 {
  color: string;
}
interface Circle2 {
  radius: number;
}

type ColorfulCircle2 = Colorful2 & Circle2;

function draw2(circle: Colorful2 & Circle2) {
  console.log(circle);
}


function draw3(circle: ColorfulCircle2) {
  console.log(circle);
}


// -------------------------------------
// Interfaces vs. Intersections
// ---------------------------------------
// the principle difference difference between the two is how conflicts are handled, and that difference is typically one of the
// main reasons why you'd pick one over the other between an interface and a type alias of an
// intersection type


// ------------------------------------
// Generic Object Types
// ------------------------------------

interface Box0<T> {
  contents: T;
}

let b22: Box0<string> = { contents: "contents" };
let b23: Box0<number> = { contents: 12 };

interface Apple { color: "Green" | "Red" }

type AppleBox = Box0<Apple>;



// ---------------------------------------------------
// The Array Type
// ---------------------------------------------------
const arr: Array<string> = ["asd", "ads3"];
const arr2: string[] = ["asd", "ads3"]; // converted to the Array<string>


// ---------------------------------------------------
// The ReadonlyArray Type
// ---------------------------------------------------
const readOnlyArr1: ReadonlyArray<string> = ["asd", "asd2"];

// readOnlyArr1[1] = "moamen"; // Index signature in type 'readonly string[]' only permits reading
// readOnlyArr1.push("hello!"); // Property 'push' does not exist on type 'readonly string[]


// Just as TypeScript provides a shorthand syntax for Array<Type> with Type[] 
// , it also provides a shorthand syntax for ReadonlyArray<Type> 
// with readonly Type[]
const readOnlyArr2: readonly string[] = ["asd", "asd2"];

function ShowReadOnlyArr(arr: readonly string[]) {
  console.log(arr);
}

// convert from/to array
// ------------------------


const readOnlyArr4: ReadonlyArray<string> = ["asd4", "asd4"];
const arr4: string[] = <string[]>readOnlyArr4;
console.log(arr4);


const arr5: string[] = ["ad", "asd"];
const readOnlyArr5: ReadonlyArray<string> = arr5;
console.log(arr5);




// ---------------------------------------------------
// Tuple Types
// ---------------------------------------------------
// A tuple type is another sort of Array type that knows 
// exactly how many elements it contains, and
// exactly which types it contains at specific positions


type StringNumberPair = [string, number];

let s: StringNumberPair = ["asd", 1];
// let s2:StringNumberPair = ["asd",1,"asd"]; // Error: Source has 3 element(s) but target allows only 2.

// let s3:StringNumberPair = [1,"asd"];
// Error: Type 'string' is not assignable to type 'number'.
// Error: Type 'number' is not assignable to type 'string'



// We can also destructure tuples using JavaScript's array destructuring
// ----------------------------------------------------------------------
const tuple1: [string, string, number] = ["asd", "asd2", 1];
const [str1, str2] = tuple1;//destructuring
console.log(str1, str2);

const [str4, , num1] = tuple1;//destructuring
console.log(str4, num1);


interface StringNumberPair2 {
  length: 3,
  0: string,
  1: string,
  2: number,
  slice(start: number, end: number): Array<string | number>,
}


let d: StringNumberPair2 = ["asd", "asd", 1];
d.slice(1, 1);



// tuples with optional properties
// --------------------------------
type Either2dOr3d = [number, number, number?];
function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord; // z will be null or undefined
  console.log(`Provided coordinates had ${coord.length} dimensions`);
}


// Tuples can also have rest elements, which have to be an array/tuple type.
// --------------------------------------------------------------------------

type StringNumberBooleans = [string, number, ...boolean[]];
type StringNumbersBoolean = [string, ...number[], boolean];

let snb: StringNumberBooleans = ["string", 1, true, false, true, false];
let snb2: StringNumbersBoolean = ["string", 1, 2, 3, 4, 5, 6, 6, false];










