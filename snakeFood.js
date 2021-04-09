/**
*	此文件用以初始化和实时改变蛇食的位置
*/
const snakeFood = document.getElementById('snake_food');
const screen = document.getElementById('screen');

// 获取元素属性
function elAttr (el) {
	const element = {
		width: 	el.clientWidth, 
		height: el.clientHeight,
		posX: 	el.offsetLeft,
		posY: 	el.offsetTop
	}

	return element;
}

function changePos (snakeFood,screen) {
	let _x = Math.ceil(Math.random()*(elAttr(screen).width - elAttr(snakeFood).width));
	let _y = Math.ceil(Math.random()*(elAttr(screen).height - elAttr(snakeFood).height));
	snakeFood.style.left = _x + 'px';
	snakeFood.style.top = _y + 'px';
}

changePos (snakeFood,screen)
