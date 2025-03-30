// E:/code/zy-utils/src/index.js
import { formatDate } from './date.ts'

// 定义一个方法
function add(a: number, b:number) {
    return a + b;
}

// 定义另一个方法
function subtract(a: number, b: number) {
    return a - b;
}

// 实现一个数组去重方法
function uniqueArray(arr: Array<any>) {
    return [...new Set(arr)];
}

// 导出方法
export { add, subtract, formatDate, uniqueArray }