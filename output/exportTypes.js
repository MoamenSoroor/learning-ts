"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
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
exports.Customer = Customer;
