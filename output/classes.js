"use strict";
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
