class SnakeFood {
			constructor (container) {
				this.container = container;// 容器
				this.food;			// 代表蛇食的元素
				this.posX;			// 蛇食的X坐标
				this.posY;			// 蛇食的Y坐标
				this.init();
			}

			init () {
				this.createFood ();
				this.initFoodPos();
			}

			initFoodPos () { // 随机生成蛇食的位置
				let _x = parseInt(Math.random()*500);
				let _y = parseInt(Math.random()*500);
				this.posX = _x;
				this.posY = _y;
				this.setPos();
			}

			setPos () {
				this.food.style.left = this.posX + 'px';
				this.food.style.top  = this.posY + 'px';
			}

			createFood () {
				this.food = document.createElement('div');
				this.food.style.position = 'absolute';
				this.food.style.width = '10px';
				this.food.style.height = '10px';
				this.food.style.left = '0px';
				this.food.style.top = '0px';
				this.food.style.backgroundColor = '#f00';
				this.food.style.borderRadius = '50%';
				document.querySelector(this.container).appendChild(this.food);
			}
		}
