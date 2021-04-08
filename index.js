var snake = new Snake('#screen');
		var food = new SnakeFood('#screen');

		// 控制蛇头移动方向的事件，不能反方向
		document.onkeyup = function eventHandle (e) {
			var e = e || window.event;
			var dir = snake.direction;
			switch (e.keyCode) {
				// 向左
				case 37: snake.changeDirection('left');break;
				// 向上
				case 38: snake.changeDirection('up');break;
				// 向右
				case 39: snake.changeDirection('right');break;
				// 向下
				case 40: snake.changeDirection('down');break;
			}
		}

		// 测试碰撞
		function checkCollision (el1,el2) {
			let w = el1.style.width.substring(0,2)*1/2;
			// el1 的中心坐标
			let x1 = el1.offsetLeft + w;
			let y1 = el1.offsetTop + w;
			// el2 的中心坐标
			let x2 = el2.offsetLeft + w;
			let y2 = el2.offsetTop + w;
			if (Math.abs(x1 - x2) < w * 2 && 
					Math.abs(y1 - y2) < w * 2) {
				return true;
			}
			return false;
		}

		var t = setInterval(function () {
			for (let i = 2;i < snake.bodys.length - 1;i++) {
				if(checkCollision(snake.bodys[0].body,snake.bodys[i].body)) {
					clearInterval(t);
					alert('游戏结束！');
					return;
				}
			}
			snake.move();
			if(checkCollision(snake.bodys[0].body,food.food)) {
				snake.growth();
				food.initFoodPos();
			}
		},100)
