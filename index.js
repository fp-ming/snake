/*
* 此文件是程序的入口
*/

// 初始化蛇食
const snakeFood = document.getElementById('snake_food');
const container = document.getElementById('container');
changePos (snakeFood,container);

// 控制按钮，防止过快的操作
let press_disable = false;

// 创建一条蛇
const snake = new Snake('#container');

// 存放定时器
let t = null;
timeout(1000);

// 控制蛇头移动方向的事件，不能反方向
document.onkeyup = function eventHandle (event) {
	if (press_disable) return;
	const e = event || window.event;
	const dir = snake.direction;
	press_disable = true;
	switch (e.keyCode) {
		// 向左
		case 37: 
			if(dir == 'right') return;
			snake.changeDirection('left');break;

		// 向上
		case 38: 
			if(dir == 'down') return;
			snake.changeDirection('up');break;

		// 向右
		case 39: 
			if(dir == 'left') return;
			snake.changeDirection('right');break;
		
		// 向下
		case 40: 
			if(dir == 'up') return;
			snake.changeDirection('down');break;

		// 暂停
		case 80: pause();break;

		// 结束游戏
		case 81: gameOver();break;
	}
}
