// --------------------------------------------------------------------
// Creating Types from Types
// --------------------------------------------------------------------
// --------------------------------------------------------------------

// generic types;
// -----------------------------------------------------------
function identity<Type>(arg: Type): Type {
  return arg;
}

const identityfunc: <T>(arg: T) => T = identity;
console.log(identityfunc("asd"));


// ------------------------------------------------------------
// write the generic type as a call signature of an object literal type
// ------------------------------------------------------------
let myIdentity: { <Type>(arg: Type): Type } = identity;
const stringIdentity: { (arg: string): string } = identity;
console.log(myIdentity("asd2"));
console.log(stringIdentity("asdd3"));


// generic interface
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity2<T>(str: T) { return str; }

let myIdentity2: GenericIdentityFn = identity2;

console.log(myIdentity2("hello identity 2"));


// more better example
// -----------------------------
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
  // coco: string,
  // Go(str: string): void 
  // in generic interface with that signature you can't add any other member
}

function identity3<T>(str: T) { return str; }

let myIdentity3: GenericIdentityFn2<number> = identity2;

console.log(myIdentity3(2));
//console.log(myIdentity3("2")); // Error



// constrained type parameter
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg;
}


loggingIdentity({ length: 1 });
loggingIdentity({ length: 2 });


// Generic class
// ---------------------------------------------------
class GenericNumber<NumType> {

  constructor(zeroValue: NumType, addFunc: (x: NumType, y: NumType) => NumType) {
    this.zeroValue = zeroValue;
    this.add = addFunc;
  }
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(1, 2));



// Using Type Parameters in Generic Constraints
// -----------------------------------------------------------


function GetPropertyValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const myobj = { a: 1, b: 2, c: 3 };
console.log(GetPropertyValue(myobj, "a"));
//console.log(GetPropertyValue(myobj, "d")); // d is not a key at the object



// Using Class Types in Generics
// -------------------------------------------------------

function create<T>(c: { new(): T }): T {
  return new c();
}


function createWithArgs<T>(c: { new(args1: string, args2: string): T }, ...args: string[]): T {
  const [args1, args2] = args;
  return new c(args1, args2);
}

// like c# is not valid here in ts:
// -------------------------------------------------------
// function createType<T extends {new ():T}>(): T {
//   return new T();
// }

class TestCreate1 {
  constructor() {
  }
}

class TestCreate2 {
  constructor(arg: string, arg2: string) {
  }
}

const p2 = create(TestCreate1);

const p3 = createWithArgs(TestCreate2);




// Factory function
// -------------------------------------------
class BeeKeeper {
  hasMask: boolean = true;
}
class ZooKeeper {
  nametag: string = "Mikle";
}
class Animal {
  numLegs: number = 4;
}
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;


// keyof operator
type Point3 = { x: number; y: number };
type keys = keyof Point3;


type Point4 = { x: number; y: string };
type keys4 = keyof Point4;

const k: keys4 = "x";
const k2: keys4 = "y";
//const k3:keys4 = "z"; // Type '"z"' is not assignable to type 'keyof Point4'.

console.log();

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
const a3: A = 10; // type of key of the number indexer is number
// const a4: A = "10"; // type of key of the number indexer can't be string



type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

const m1: M = "x"; // type is string | number
const m2: M = "y";// type is string | number
const m3: M = 10;// type is string | number



// Typeof Type Operator
// -------------------------------------------------------
function name2(params: number): string {
  return "asd";
}
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;


// function f1() {
//   return { x: 10, y: 3 };
// }
// type P1 = ReturnType<f1>; // 'f1' refers to a value, but is being used as a type here. Did you mean 'typeof f1'?

// solution is to create a type from the typeof f1
function f2() {
  return { x: 10, y: 3 };
}
type Typeoff3 = typeof f2;
type P = ReturnType<Typeoff3>;

// or you can compact the past 2 statements in one: 
type P2 = ReturnType<typeof f2>;



// Indexed Access Types
// ---------------------------------------------

// We can use an indexed access type to look up a specific property on another type:
type Person4 = { age: number; name: string; alive: boolean };
type N = Person4['age']; // type of age is number
type N2 = Person4['alive']; // type of age is number

const n1: N = 1; // type of age is number
//const n12: N = "1"; // type of age is number

const n2: N2 = true; // type of age is number
//const n22: N2 = 1; // type of age is number


type StrOrNum = Person4["age" | "name"];

const sn1: StrOrNum = "asd";
const sn2: StrOrNum = 120;

// using keyof to get all the types of the keys
type StrOrNumOrBoolean = Person4[keyof Person4];

const sn3: StrOrNumOrBoolean = "asd";
const sn4: StrOrNumOrBoolean = 120;
const sn5: StrOrNumOrBoolean = 120;



const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38, lname: "soroor" },
];

type Arr1 = typeof MyArray; // array of name age object
type Arr2 = typeof MyArray[1]; // name age object
type Arr3 = typeof MyArray[2]; // name age object
type Arr4 = typeof MyArray[3]; // name age object

type Arr5 = typeof MyArray[number]; // name age object

type Age = typeof MyArray[number]["age"]; // name age object

type StringOrUndefined = typeof MyArray[number]["lname"];

type ArrSignature = typeof MyArray[number];
type LiteralTypeOfArrSignature = keyof ArrSignature;
type keysOfArrSignature = ArrSignature[keyof ArrSignature];



type key = "age";
type Age1 = Person4[key];





// TODO conditional type
// conditional type

// TODO mapped type
// mapped type

// TODO Template Literal Type
// template literal type



