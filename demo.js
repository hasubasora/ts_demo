"use strict";
//ts类型
//布尔类型（boolean）
var bool = true;
// 数字类型(number)
var arr = [1, 2, 3];
var arr1 = [1, 2, 3]; //Array里面每个值都是number
// 字符串类型(string)
var str = '哈哈哈';
//元祖类型（tuple） 给数组里面每一个定义不同类型
var arr2 = [123, 'this'];
//枚举类型（enum）
// enum 枚举名{
//     标识符[=整型常数]
//     标识符[=整型常数]
//     标识符[=整型常数]
// }
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
    Flag[Flag["warn"] = 5] = "warn";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s); //没有赋值标示 就输出下标
// 任意类型（any）
// null 和 undefined
// void类型
// never类型
/**
 * function
 */
//指定返回类型
function run() {
    return 'run';
}
var fn = function () {
    return 1233;
};
//定义方法传参
function todo(name, age) {
    return name + "-" + age;
}
var cat = function (name, age) {
    return name + "-" + age;
};
//没有返回值的方法
function dog() {
    console.log('没有返回值的方法');
}
//可选参数 年龄可选 可选放在最后面
function todow(name, age) {
    return name + "-" + age;
}
alert(todow('haha'));
//默认参数
function getTodu(name, age) {
    if (age === void 0) { age = 18; }
    return name + "-" + age;
}
alert(getTodu('haha'));
//剩余参数 三点运算符
function setTodu(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    return result[0];
}
alert(setTodu('1', 2, 3));
function overload(str) {
    return str;
}
function overload1(name, age) {
    return name;
}
