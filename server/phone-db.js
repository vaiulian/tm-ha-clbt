var Phone = /** @class */ (function () {
    function Phone(index, phoneType, serial, color, hashData) {
        this.id = index;
        this.type = phoneType;
        this.serial = serial;
        this.color = color;
        this.data = hashData;
    }
    return Phone;
}());
var PhoneDB = /** @class */ (function () {
    function PhoneDB() {
        this.db = new Map();
        var phone = new Phone("1", "iPhone13", "serial12345567890", "Silver", "trhvukiyg54vc3xtcrx3wcy64vy54v");
        this.db.set("1", phone);
        phone = new Phone("2", "iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v");
        this.db.set("2", phone);
        phone = new Phone("3", "iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v");
        this.db.set("3", phone);
        phone = new Phone("4", "iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v");
        this.db.set("4", phone);
        phone = new Phone("5", "iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v");
        this.db.set("5", phone);
        this.index = 5;
    }
    PhoneDB.prototype.getAllPhones = function () {
        var phones = Array.from(this.db.values());
        return phones;
    };
    PhoneDB.prototype.getPhone = function (index) {
        var phone = this.db.get(index);
        console.log(phone);
        return phone;
    };
    PhoneDB.prototype.updatePhone = function (phone) {
        var existingPhone = this.db.get(phone.id);
        if (existingPhone !== undefined) {
            this.db.set(phone.id, phone);
            return true;
        }
        else {
            console.log("phone object not found:" + JSON.stringify(phone));
            return false;
        }
    };
    PhoneDB.prototype.addPhone = function (phone) {
        this.index++;
        phone.id = this.index.toString(10);
        var result = this.db.set(phone.id, phone);
        if (result !== undefined) {
            return phone.id;
        }
    };
    PhoneDB.prototype.deletePhone = function (index) {
        var result = this.db["delete"](index);
        console.log("deleted index? " + index + " " + result);
        return result;
    };
    return PhoneDB;
}());
function start() {
    var db = new PhoneDB();
    return db;
}
module.exports = {
    start: start
};
