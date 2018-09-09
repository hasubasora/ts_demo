//ts类型

//布尔类型（boolean）
let bool:boolean=true

// 数字类型(number)
let arr: number[] = [1, 2, 3]
let arr1: Array<number> = [1, 2, 3] //Array里面每个值都是number
// 字符串类型(string)
let str:string='哈哈哈'

//元祖类型（tuple） 给数组里面每一个定义不同类型
let arr2: [number, string] = [123, 'this']

//枚举类型（enum）
// enum 枚举名{
//     标识符[=整型常数]
//     标识符[=整型常数]
//     标识符[=整型常数]
// }
enum Flag {success,error,warn=5}
let s:Flag=Flag.success
console.log(s); //没有赋值标示 就输出下标

// 任意类型（any）

// null 和 undefined
// void类型
// never类型


/**
 * function
 */

//指定返回类型
function run(): string {
    return 'run'
}

let fn = function (): number {
    return 1233
}

//定义方法传参
function todo(name: string, age: number): string {
    return `${name}-${age}`
}

let cat = function (name: string, age: number): string {
    return `${name}-${age}`
}

//没有返回值的方法
function dog(): void {
    console.log('没有返回值的方法');
}

//可选参数 年龄可选 可选放在最后面
function todow(name: string, age?: number): string {
    return `${name}-${age}`
}
alert(todow('haha'))

//默认参数
function getTodu(name: string, age: number = 18): string {
    return `${name}-${age}`
}
alert(getTodu('haha'))

//剩余参数 三点运算符
function setTodu(a: string, ...result: number[]): number {
    return result[0]
}
alert(setTodu('1', 2, 3))

//函数重载 同名函数传入不同参数执行不同的结果
function overload(name: string): string;
function overload(age: number): number;
function overload(str: any): any {
    return str
}

function overload1(name: string): string;
function overload1(name: string, age: number): string;
function overload1(name: any, age?: any): any {
    return name
}

