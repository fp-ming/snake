/*
* 此文件存放运行时所需的函数
*/

// 测试碰撞
function collision (el1,el2) {
	const w1 = el1.clientWidth / 2;
	const w2 = el2.clientWidth / 2;
	// el1 的中心坐标
	const x1 = el1.offsetLeft + w1;
	const y1 = el1.offsetTop + w1;
	// el2 的中心坐标
	const x2 = el2.offsetLeft + w2;
	const y2 = el2.offsetTop + w2;
	if (Math.abs(x1 - x2) < (w1 + w2) && 
			Math.abs(y1 - y2) < (w1 + w2)) {
		return true;
	}
	return false;
}

// 获取元素属性
function elAttr (element) {
	const el = {
		width: 	element.clientWidth, 
		height: element.clientHeight,
		left: 	element.offsetLeft,
		top: 	element.offsetTop
	}

	return el;
}

// 检测蛇头是否碰到边界
function checkSide (container,element) {
	const wra = elAttr(container);
	const el  = elAttr(element);
	if (el.left < 0) return true;
	if (el.top < 0) return true;
	if ((el.left + el.width) > wra.width) {
		return true
	}
	if ((el.top + el.height) > wra.height) {
		return true
	}
	return false;
}

// 控制游戏的定时器
function timeout (delay) {
	t = setInterval(function () {
		snake.move();
		if(checkSide(container,snake.bodys[0].body)) {
			gameOver();
			return;
		}
		for (let i = 2;i < snake.bodys.length - 1;i++) {
			if(collision(snake.bodys[0].body,snake.bodys[i].body)) {
				gameOver();
				return;
			}
		}
		press_disable = false;
		if(collision(snake.bodys[0].body,snakeFood)) {
			snake.growth();
			changePos (snakeFood,container);
		}
	},delay)
};

// 暂停游戏
function pause () {

	press_disable = false;
	if (!t) {
		timeout(1000);
	} else {
		clearTimeout(t);
		t = null;
	}
}

// 结束游戏
function gameOver () {
	clearInterval(t);
	alert('游戏结束！');
	return;
}

// 控制蛇头方向事件的函数
function eventHandle (event) {
	// 考虑兼容性
	const e = event || window.event;
	const key = e.keyCode || e.target.getAttribute('dir') || e.srcElement.getAttribute('dir');
	changeDirection(key*1);

}

// 控制蛇头移动方向的函数，不能反方向
function changeDirection (keyCode) {
	if (press_disable) return;
	const dir = snake.direction
	press_disable = true;
	switch (keyCode) {
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

// 加快速度
function fastEvent (e) {
	clearInterval(t);
	t = null;
	if(e.type == 'mousedown'){
		timeout(500);
	} else {
		timeout(1000);
	}
}
