// E:/code/zy-utils/src/index.js
import { formatDate } from './date'

// 定义一个方法
function add(a: number, b:number) {
    return a + b;
}

// 定义另一个方法
function subtract(a: number, b: number) {
    return a - b;
}

// 导出方法
module.exports = {
    add,
    subtract,
    formatDate
};