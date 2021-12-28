"use strict";
// Function Type Expressions
// --------------------------------------------------
function printToConsole(s) {
    console.log(s);
}
function printErrorToConsole(s) {
    console.error(s);
}
function greeter(fn) {
    fn("hello World");
}
greeter(printToConsole);
greeter(printErrorToConsole);
function greeterWithTypeAlias(func) {
    func("hello World with type alias");
}
greeterWithTypeAlias(printToConsole);
greeterWithTypeAlias(printErrorToConsole);
function doSomething2(fn) {
    console.log("function: " + fn.description + " returns " + fn("Moamen"));
}
// Construct Signatures
// --------------------------------------------------
// not implemented
// Generic Functions
// --------------------------------------------------
function GetFistElement(list) {
    return list[0];
}
// We can use multiple type parameters as well. For example, a standalone version of map would look
// like this:
function map(list, mapfunc) {
    return list.map(mapfunc);
}
var parsedNumbers = map(["1", "2", "3", "4"], function (str) { return Number(str); });
console.log("parsedNumbers: ", parsedNumbers);
console.log("sum:", parsedNumbers.reduce(function (acc, value) { return acc + value; }, 0));
// Constraints
// ---------------------------------------------------
function longest(first, second) {
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
function combine(first, second) {
    return first.concat(second);
}
console.log(combine([1, 2, 3], [4, 5, 6]));
console.log(combine([1, 2, 3], ["4", "5", "6"]));
// optional parameters:
// --------------------------------------------------------
function myForEach(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        callback(arr[index], index);
    }
}
myForEach([1, 2, 3, 4], function (obj, i) { return console.log(obj, i); });
myForEach([1, 2, 3, 4], function (obj) { return console.log(obj); });
// bad
function myForEach2(arr, callback) {
    for (var index = 0; index < arr.length; index++) {
        callback(arr[index]);
    }
}
//myForEach2([1, 2, 3, 4], (obj, i) => console.log(obj, i.toFixed())); // error
myForEach2([1, 2, 3, 4], function (obj) { return console.log(obj); });
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
function substring(text, start, count) {
    if (count == null)
        return text.substring(start);
    return text.substring(start, start + count + 1);
}
console.log(substring("123456789", 3));
console.log(substring("123456789", 3, 3));
function len(x) {
    return x.length;
}
console.log(len("asd"));
console.log(len([1, 2, 3, 4, 5]));
// Declaring this in a Function
// -----------------------------------------------------------
var user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
var fnvoid1 = function () { return true; };
var fnvoid2 = function () { return false; };
var fnvoid3 = function () { return false; };
var v = fnvoid1();
