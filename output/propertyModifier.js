"use strict";
// Property Modifiers
function paintShape(opts) {
    console.log(opts);
}
paintShape({ shape: {} });
paintShape({ shape: {}, xPos: 10, yPos: 20 });
paintShape({ shape: {}, xPos: 10 });
// setting defaults of absent  pattern in ts
function paintShape2(opts) {
    var x = opts.xPos === undefined ? 0 : opts.xPos;
    var y = opts.yPos === undefined ? 0 : opts.yPos;
    console.log(x, y);
}
//  a destructuring pattern
// ---------------------------------------
function paintShape3(_a) {
    var sh = _a.shape, x = _a.xPos, y = _a.yPos;
    console.log(x, y);
}
// a destructuring pattern with defaults
function paintShape4(_a) {
    var sh = _a.shape, _b = _a.xPos, x = _b === void 0 ? 0 : _b, _c = _a.yPos, y = _c === void 0 ? 0 : _c;
    console.log(x, y);
}
function MyTryToReadAndWrite(x) {
    console.log(x.data);
    //x.data = "hello world"; // error can't write to property
}
function MyTryToReadAndWriteNestedProp(x) {
    console.log(x.home);
    // x.home = { name="asdf" }; // can't assign read only property
    x.home.name = "asdf"; // nested properties can be changed 
}
function PrintNewPerson(person) {
    var value = person["name"];
    for (var key in person) {
        var value_1 = person[key];
        console.log(value_1);
    }
}
function PrintNewPerson2(person) {
    for (var key in person) {
        switch (key) {
            case "name":
                var value1 = person[key];
                console.log(value1);
                break;
            case "petName":
                var value2 = person[key];
                break;
            case "workName":
                var value3 = person[key];
                break;
            case "age":
                var value4 = person[key];
                break;
            case "isAdult":
                var value5 = person[key];
                break;
        }
    }
}
//# sourceMappingURL=propertyModifier.js.map