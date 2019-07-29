import './a.css'; // 语法是webpack提供的
import './b.less';
// require('./a.css') 等价于import './a.css'
const a = 1;
const get = r => r + a;
get(3);

const p = new Promise((resolve) => {
  resolve(1);
});

p.then(data => data);
