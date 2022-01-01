"use strict";
// Type and Type Inference
var mystr = "hello world"; // type inference to string
var mynum = 200; // type inference to number
var mybool = true; // type inference to bool
// note the type of the previous variables has been infered by type script
// if you try to modify any of them with another type error will be thrown
// in the next line : Error: Type 'string' is not assignable to type 'boolean'.ts(2322)
//mybool = "hello world";
// you can define types explicitly
var explicitMystr = "hello world"; // string
var explicitMynum = 200; // number
var explicitMybool = true; // bool
// functions:
// -------------------------------------------
function myfunc(value, index) {
    // todo
    // do something with parameters
}
function myData(value) {
    // todo
    // do something with parameters
    return "this the first parameter " + value;
}
// note that return type of the myData function is not explicity defined
// so type inference is done by the caller of the function
var result = myData("hello world");
// Arrays 
// ---------------------------------------------------------------
// define array of something
var arrString = ["hello", "world"];
var arrNumbers = [1, 2, 3.2];
var arrBoolean = [true, false];
console.log(arrString, arrNumbers, arrBoolean);
var arrString2 = ["hello", "world"];
var arrNumbers2 = [1, 2, 3.2];
var arrBoolean2 = [true, false];
console.log(arrString, arrNumbers, arrBoolean);
// any
// --------------------------------------------------------------
// TypeScript also has a special type, any , that you can use whenever you don't want a particular
// value to cause typechecking errors.
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
try {
    obj.foo();
    obj();
    obj.bar = 100;
    obj = "hello";
    var n = obj;
}
catch (error) {
    console.error(error);
}
// Object Types
// -------------------------------------------------------------
// define object of type {id:number, name:string} 
// You can use , or ; to separate the properties 
// {id:number; name:string} or {id:number, name:string}
// , and the last separator is optional either way.
var person0;
var person1;
// assign object of type {id:number, name:string}
person1 = { id: 1, name: "mohammed" };
// define object parameter of a function
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 10, y: 20 });
// Optional Properties
// ---------------------------------
// In JavaScript, if you access a property that doesn't exist, you'll get the value undefined 
// rather than a runtime error. Because of this, when you read from an optional property, you'll
// have to check for undefined before using it.
function printPerson(person) {
    console.log("Person: id: " + person.id + ", name: " + person.name);
    if (person.city !== undefined)
        console.log("has city: " + person.city);
}
printPerson({ id: 1, name: "ahmed" });
printPerson({ id: 1, name: "mohammed", city: "cairo" });
// Union Types
// you can use directly the members that is shared between 
// the union members, and if you try to use function for example
// from one type that doesn't exist in the other members 
// compilation error will be thrown
function printId(id) {
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
function printId2(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
function printStrings(str) {
    if (Array.isArray(str))
        console.log("i am array of string: ", str);
    else {
        console.log("i am just a string");
    }
}
// function printCoord2(coord: { x: number, y: number }) {
//   console.log(coord.x, coord.y);
// }
function printCoord2(coord) {
    console.log(coord.x, coord.y);
}
printCoord2({ x: 1, y: 2 });
function printId3(id) {
    console.log(id);
}
printId3(3);
printId3("3xy");
var myId = "hello";
function sanitizeInput(str) {
    return str;
}
// Create a sanitized input
var userInput = sanitizeInput("my input ");
// Can still be re-assigned with a string though
userInput = "new input";
function printCoord4(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord4({ x: 100, y: 100 });
;
;
// now you has two Parent interfaces each one has properties
// to create object from that type it must include all the properties 
// defined in that interface 
var myparent = { id: 1, name: "mohammed", salary: 232323.12 };
function getName() {
    var myname = { name: "moamen soroor" };
    var d = typeof myname;
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
var canvas = document.getElementById('#mycanvas');
// you can be more specific by using Type Assertion
// now type will be HTMLCanvasElement
var mycanvas = document.getElementById("#mycanvas");
// You can also use the angle-bracket syntax 
// (except if the code is in a .tsx file), which is equivalent:
var mycanvas2 = document.getElementById('#mycanvas');
// Reminder: Because type assertions are removed at compile-time, there is no 
// runtime checking associated with a type assertion. There won't be an exception 
// or null generated if the type assertion is wrong
// Sometimes this rule can be too conservative and will disallow more complex coercions that might
// be valid. If this happens, you can use two assertions, first to any (or unknown , which we'll
// introduce later), then to the desired type:
// const a = (expr as any) as T;
// Literal Types
// ------------------------------------
var mylit = "Hello";
//  now mylit is of type literal "Hello" not string
// more useful senario is by using the union of type literals
var direction = "left";
// you can assign any value of the unioned type literals
direction = "right";
direction = "left";
direction = "top";
direction = "bottom";
// error: Type '"center"' is not assignable to type 
//    '"left" | "right" | "top" | "bottom"'.ts(2322)
// direction = "center";
// another example
function printText(s, alignment) {
    // ...
}
// now alignment argument  will be checked againest type "left" | "right" | "center"
// if it doesn't match the type , typescript will throw error
//printText("asd","top");
printText("asd", "left");
printText("asd", "right");
// another example:
// ===========================
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(options) {
    // check options
}
configure({ width: 2, height: 12 });
configure("auto");
configure("inherited");
//configure({x:1, y:3}); // invalid
//configure("hello") // invalid
var req = { url: "https://example.com", method: "GET" };
function handleRequest(url, method) {
    // do something
}
// 
// handleRequest(req.url, req.method);
// error second argument is not "GET" literal type
// but it is string type has value "GET"
// ERROR: Argument of type 'string' is not assignable to parameter of type '"GET" | "POST" | "PUT"'
// solution 1
// Change 1: convert the method property from string to literal type "GET"
var req2 = { url: "https://example.com", method: "GET" };
handleRequest(req2.url, req2.method);
// solution 2
// Change 2: convert the argument passed to the handleRequest() to literal type "GET"
var req3 = { url: "https://example.com", method: "GET" };
handleRequest(req3.url, req3.method);
// solution 3
// Change 3: convert the whole object to literal type
var req4 = { url: "https://example.com", method: "GET" };
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
function doSomething(x) {
    // narrowing
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
// Non-null Assertion Operator (Postfix ! )
// ------------------------------------------
// TypeScript also has a special syntax for removing null and undefined from a type without
// doing any explicit checking.
// Writing ! after any expression is effectively a type assertion that the
// value isn't null or undefined
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
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
"string";
"number";
"bigint";
"boolean";
"symbol";
"undefined";
"object";
"function";
// when typeof used in comparison, 
// TypeScript can understand it to narrow types in different branches
// so you can use the specific type on that branch 
function padLeft(padding, input) {
    if (typeof padding === "number") {
        // narrowing to number: you can use any memebers of number here
        return new Array(padding + 1).join(" ") + input;
    }
    // narrowing to string: you can use any member of string type here
    return padding + input;
}
console.log(padLeft(10, "moamen"));
console.log(padLeft("hello world ", "moamen"));
var bear11 = { Name: "B", IsBear: true };
console.log(bear11);
var std = { Name: "student", Age: 33 };
console.log(std);
console.log(window.title);
console.log(window.dummyLocation);
// type assertion
var canvasElement = document.getElementById("canvasId");
console.log(canvasElement.width);
var canvasElement2 = document.getElementById("canvasId");
console.log(canvasElement2.width);
function move(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
function move2(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
// if you uncomment Rectangle, exaustiveCheck at the getAreaWithNever function will throw compile error 
function getArea(shape) {
    if (shape.shapeType === "square")
        return Math.pow(shape.edgeLength, 2);
    else if (shape.shapeType === "circle")
        return shape.raduis * shape.raduis * Math.PI;
    else
        return NaN;
}
function getAreaWithSwitch(shape) {
    switch (shape.shapeType) {
        case "circle":
            return shape.raduis * shape.raduis * Math.PI;
        case "square":
            return Math.pow(shape.edgeLength, 2);
        default:
            return NaN;
    }
}
console.log(getArea({ shapeType: "circle", raduis: 20.25 }));
// Exhaustiveness checking and Never type
// ------------------------------------------
function GetAreaWithNever(shape) {
    switch (shape.shapeType) {
        case "circle":
            return shape.raduis * shape.raduis * Math.PI;
        case "square":
            return Math.pow(shape.edgeLength, 2);
        // case "rectangle":
        //   return shape.width * shape.height;
        default:
            var exaustiveCheck = shape;
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
var vAny = 10; // We can assign anything to any
var vUnknown = 10; // We can assign anything to unknown just like any 
var s1 = vAny; // Any is assignable to anything 
//let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
vAny.method(); // Ok; anything goes with any
//vUnknown.method(); // Not ok; we don't know anything about this variable
//# sourceMappingURL=types.js.map