		class Snake {

			constructor (container) {
				this.container = container;	// 存放蛇所在的容器ID
				this.bodys = [];			// 存放蛇身所有单元的数组
				this.firstX = 100;			// 蛇头初始位置的X坐标
				this.firstY = 300;			// 蛇头初始位置的Y坐标
				this.direction = 'up';		// 蛇头移动的方向
				this.firstSize = 5;			// 蛇身的初始大小
				this.size;					// 蛇身长度
				this.bodyWidth;				// 蛇身每个单元的宽度
				this.init();				// 运行初始化方法
			}

			init () {
				this.craeteSnake();
				for (let i = 0;i < this.bodys.length;i++) {
					this.bodys[i].init();
				}
			}

			growth () {	// 蛇每次碰撞食物都会变长
				let _x = this.bodys[0].body.offsetLeft;
				let _y = this.bodys[0].body.offsetTop;
				switch (this.direction) {
					case 'top': _y -= this.bodyWidth; break;
					case 'down': _y += this.bodyWidth; break;
					case 'left': _x  -= this.bodyWidth; break;
					case 'right': _x += this.bodyWidth; break;
				}
				let sb = new SnakeBody(this.container);
				sb.posX = _x;
				sb.posY = _y;
				switch (this.direction) {
					case 'top': _y -= this.bodyWidth; break;
					case 'down': _y += this.bodyWidth; break;
					case 'left': _x  -= this.bodyWidth; break;
					case 'right': _x += this.bodyWidth; break;
				}
				sb.nextX = _x;
				sb.nextY = _y;
				sb.setPos();
				this.bodys.unshift(sb);
				this.updateSnake();
			}

			changeDirection (dir) {	// 改变蛇头的移动方向
				if(this.direction == dir) return;
				if(this.direction == 'left' && dir == 'right') return;
				if(this.direction == 'right' && dir == 'left') return;
				if(this.direction == 'up' && dir == 'down') return;
				if(this.direction == 'down' && dir == 'up') return;
				this.direction = dir;
			}

			updateSnake () {
				for (let i = this.bodys.length - 1; i > 0;i--) {
					this.bodys[i].nextX = this.bodys[i - 1].posX;
					this.bodys[i].nextY = this.bodys[i - 1].posY;
				}
			}

			craeteSnake () {	// 创建一条小蛇
				
				for (let i = 0;i < this.firstSize;i++) {
					this.bodys.push(new SnakeBody(this.container));
				}

				this.bodyWidth = this.bodys[0].body.style.width.substring(0,2)*1;

				// 设置蛇的初始位置
				this.bodys[0].posX  = this.firstX;
				this.bodys[0].posY  = this.firstY;
				this.bodys[0].nextX = this.firstX;
				this.bodys[0].nextY = this.firstY + this.bodyWidth
				for (let i = 1;i < this.bodys.length;i++ ) {
					this.bodys[i].posX = this.bodys[i - 1].posX;
					this.bodys[i].posY = this.bodys[i - 1].posY + this.bodyWidth;
				}
				this.updateSnake();
			}

			move () {
				switch (this.direction) {	// 控制蛇头移动方向
					case 'up'   : this.bodys[0].nextY = this.bodys[0].posY - this.bodyWidth;break;
					case 'down' : this.bodys[0].nextY = this.bodys[0].posY + this.bodyWidth;break;
					case 'left' : this.bodys[0].nextX = this.bodys[0].posX - this.bodyWidth;break;
					case 'right': this.bodys[0].nextX = this.bodys[0].posX +this.bodyWidth;break;
				}
				// 蛇身的其余单元紧跟着其前面的一个单元
				for (let i = this.bodys.length - 1; i > 0;i--) {
					this.bodys[i].nextX = this.bodys[i - 1].posX;
					this.bodys[i].nextY = this.bodys[i - 1].posY;
				}
				for (let i =0;i < this.bodys.length;i++) {
					this.bodys[i].move();
				}
			}
		}
