// export let a = 1
// export let b =2
const a = 1;
const b = 2;
const c = 'hello world';
export { a, b, c as default };
// c as default = export default c
// 默认导出
// export 不能导出具体的值 可以导出对象或者函数 接口(定义叫做接口)
// export deafault 可以导出具体的值
