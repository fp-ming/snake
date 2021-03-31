/**
 * 创建蛇身的类
 * 以第一个单元为蛇头
 */
class SnakeBody {	
	constructor(container) {
		this.container = container;
		this.body;		// 本对象对应的此单元
		this.posX;		// 此单元初始位置的X坐标
		this.posY;		// 此单元初始位置的Y坐标
		this.nextX;		// 此单元移动后位置的X坐标
		this.nextY;		// 此单元移动后位置的Y坐标
		this.createBody();
	}

	init () {
		this.setPos();
	}

	setPos () {
		this.body.style.left = this.posX + 'px';
		this.body.style.top  = this.posY + 'px';
	}

	move () {
		this.posX = this.nextX;
		this.posY = this.nextY;
		this.setPos()
	}

	createBody () { // 创建蛇身的一个单元
		this.body = document.createElement('div');
		this.body.style.position = 'absolute';
		this.body.style.width = '10px';
		this.body.style.height = '10px';
		this.body.style.left = '0px';
		this.body.style.top = '0px';
		this.body.style.backgroundColor = '#000'
		this.body.style.borderRadius = '50%'
		document.querySelector(this.container).appendChild(this.body);
	}
	
}
