/*
* 此文件是程序的入口
*/

// 初始化蛇食
const snakeFood = document.getElementById('snake_food');
const container = document.getElementById('container');
changePos (snakeFood,container);

// 获得元素节点
const left = document.getElementById('left');
const right = document.getElementById('right');
const up = document.getElementById('up');
const down = document.getElementById('down');
const fast = document.getElementById('fast');
// 绑定事件，兼容IE
if(document.addEventListener) {
	left.addEventListener('click', eventHandle);
	right.addEventListener('click', eventHandle);
	up.addEventListener('click', eventHandle);
	down.addEventListener('click', eventHandle);
	fast.addEventLinster('mousedown',fastEvent);
} else {
	left.attachEvent('onclick', eventHandle);
	right.attachEvent('onclick', eventHandle);
	up.attachEvent('onclick', eventHandle);
	down.attachEvent('onclick', eventHandle);
	fast.attachEvent('onmousedown',fastEvent);
}


// 控制按钮，防止过快的操作
let press_disable = false;

// 创建一条蛇
const snake = new Snake('#container');

// 存放定时器
let t = null;
timeout(1000);

// 控制蛇头移动方向的事件，不能反方向
document.onkeyup = eventHandle;
