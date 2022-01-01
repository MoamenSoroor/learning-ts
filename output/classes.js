"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    Customer.prototype.GetInfo = function () {
        return "Customer : " + this.id + " ,  " + this.name;
    };
    return Customer;
}());
var customer = new Customer(1, "moamen soroor");
var info = customer.GetInfo();
console.log(info);
// index signature
// -----------------------------------
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.check = function (s) {
        return this[s];
    };
    return MyClass;
}());
var Box2 = /** @class */ (function () {
    function Box2() {
        this.content = "";
    }
    Box2.prototype.sameAs = function (other) {
        return other.content === this.content;
    };
    return Box2;
}());
var DerivedBox2 = /** @class */ (function (_super) {
    __extends(DerivedBox2, _super);
    function DerivedBox2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherContent = "?2";
        return _this;
    }
    return DerivedBox2;
}(Box2));
var DerivedBox3 = /** @class */ (function (_super) {
    __extends(DerivedBox3, _super);
    function DerivedBox3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherContent = "?3";
        return _this;
    }
    return DerivedBox3;
}(DerivedBox2));
var DerivedBox4 = /** @class */ (function (_super) {
    __extends(DerivedBox4, _super);
    function DerivedBox4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherContent = "?4";
        return _this;
    }
    return DerivedBox4;
}(DerivedBox2));
var Other = /** @class */ (function () {
    function Other() {
        this.content = "";
    }
    return Other;
}());
var base = new Box2();
var derived = new DerivedBox2();
var other = new Other();
var drived1 = new DerivedBox3();
var drived2 = new DerivedBox4();
// derived.sameAs(base); // error
// derived.sameAs(other); // error
derived.sameAs(drived1);
derived.sameAs(drived2);
drived1.sameAs(derived);
drived2.sameAs(derived);
// this -based type guards
// -----------------------------------------------------
var FileSystemObject = /** @class */ (function () {
    function FileSystemObject(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    FileSystemObject.prototype.isFile = function () {
        return this instanceof FileRep;
    };
    FileSystemObject.prototype.isDirectory = function () {
        return this instanceof Directory;
    };
    FileSystemObject.prototype.isNetworked = function () {
        return this.networked;
    };
    return FileSystemObject;
}());
var FileRep = /** @class */ (function (_super) {
    __extends(FileRep, _super);
    function FileRep(path, content) {
        var _this = _super.call(this, path, false) || this;
        _this.content = content;
        return _this;
    }
    return FileRep;
}(FileSystemObject));
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    return Directory;
}(FileSystemObject));
var fso = new FileRep("foo/bar.txt", "foo");
if (fso.isFile()) {
    fso.content;
}
else if (fso.isDirectory()) {
    fso.children;
}
else if (fso.isNetworked()) {
    fso.host;
}
// a common use is lazy validation
var Box12 = /** @class */ (function () {
    function Box12() {
    }
    Box12.prototype.hasValue = function () {
        return this.value != undefined;
    };
    return Box12;
}());
var box = new Box12();
box.value = "Gameboy";
box.value;
if (box.hasValue()) {
    box.value;
}
//# sourceMappingURL=classes.js.map