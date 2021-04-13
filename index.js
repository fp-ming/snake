/*
* 此文件是程序的入口
*/

// 初始化蛇食
const snakeFood = document.getElementById('snake_food');
const container = document.getElementById('container');
changePos (snakeFood,container);

// 点击事件
const left = document.getElementById('left');
const right = document.getElementById('right');
const up = document.getElementById('up');
const down = document.getElementById('down');
if(document.addEventListener) {
	left.addEventListener('click', eventHandle);
	right.addEventListener('click', eventHandle);
	up.addEventListener('click', eventHandle);
	down.addEventListener('click', eventHandle);
} else {
	left.attachEvent('click', eventHandle);
	right.attachEvent('click', eventHandle);
	up.attachEvent('click', eventHandle);
	down.attachEvent('click', eventHandle);
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
