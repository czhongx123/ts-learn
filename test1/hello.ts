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