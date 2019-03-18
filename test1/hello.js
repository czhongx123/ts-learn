function sayhello(person) {
    return "hello" + person;
}
var user = "tom";
console.log(sayhello(user));
var isDone = false;
var createdByBoolean = Boolean(1);
console.log(createdByBoolean, 'createdByBoolean');
var mm = null;
var nn = undefined;
var aa = 'sss';
aa = '7';
var sx = 'ss';
sx = 7;
var hh;
hh = '22';
hh = 22;
var ll = {
    name: 'ss'
};
var tom = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
function sum(x, y) {
    return x + y + '';
}
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, substring) {
    return source.indexOf(substring) != -1;
};
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
jQuery('#foo');
var aaa;
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
var sss;
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'mousemove'); // 报错，event 不能为 'dbclick'
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
var dir = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var asx = new Animal('Jack');
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    Car.prototype.lightOn = function () {
        console.log('Car light on');
    };
    Car.prototype.lightOff = function () {
        console.log('Car light off');
    };
    return Car;
}());
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
