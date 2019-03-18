function sayhello(person:string){
    return "hello"+person
}
let user="tom"
console.log(sayhello(user))
let isDone:boolean=false;
let createdByBoolean: boolean = Boolean(1);
console.log(createdByBoolean,'createdByBoolean')

let mm:void=null
let nn:void=undefined
let aa:string='sss'
 aa='7'
 let sx:any='ss'
 sx=7
 let hh:string|number;
 hh='22'
 hh=22;

 interface Man{
     name:string,
     age?:number,
     [propName:string]:any
 }

 let ll:Man={
     name:'ss',
 }
 interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};


function sum(x:number,y:number):string{
    return x+y+'';
}

let mySum:(x:number,y:number)=>number=function(x:number,y:number):number{
    return x+y
}

interface SearchFuc{
    (source:string,substring:string):boolean
}

let mySearch:SearchFuc
mySearch=function(source:string,substring:string){
    return source.indexOf(substring)!=-1
}

function push(array,...items){
    items.forEach(function(item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

declare var jQuery: (selector: string) => any;
jQuery('#foo');
let aaa:string;

declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
    addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
let sss:string;
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'mousemove'); // 报错，event 不能为 'dbclick'

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

const enum Dir {
    Up,
    Down,
    Left,
    Right
}

let dir = [Dir.Up, Dir.Down, Dir.Left, Dir.Right];

class Animal {
    private name: any;
    public constructor(name) {
        this.name = name;
    }
}

let asx = new Animal('Jack');
// console.log(asx.name); // Jack
// asx.name = 'Tom'



interface Alarm {
    alert();
}

interface Light {
    lightOn();
    lightOff();
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};



interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

