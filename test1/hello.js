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
