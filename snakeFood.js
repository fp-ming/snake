/**
*	此文件用以初始化和实时改变蛇食的位置
*/

function changePos (snakeFood,screen) {
	let _x = Math.ceil(Math.random()*(elAttr(screen).width - elAttr(snakeFood).width) - 5) + 5;
	let _y = Math.ceil(Math.random()*(elAttr(screen).height - elAttr(snakeFood).height) - 5)+ 5;
	snakeFood.style.left = _x + 'px';
	snakeFood.style.top = _y + 'px';
	if(snake.bodys.some(el => collision(el,snakeFood)) {
		changePos (snakeFood,screen);
	}
}
