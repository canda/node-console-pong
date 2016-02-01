var ctx = require('axel');
import {Point, Size} from './shape';
import {MovingShape, Speed} from './moving_shape';

const top = 0;
const bottom = ctx.rows;
const left = 0;
const right = ctx.cols;

export class Ball extends MovingShape {
  constructor(position: Point, size: Size, inintialSpeed: Speed) {
    super(position, size, inintialSpeed);
  }

  move (): void {
    super.move();

    // TODO: refactor to a single function
    if (this.position.y < top) {
      this.position.y = this.position.y * (-1);
      this.speed.y = this.speed.y * (-1);
    }

    if (this.position.y + this.size.y > bottom) {
      // Do your maths ;)
      this.position.y = 2 * bottom - 2 * this.size.y - this.position.y;
      this.speed.y = this.speed.y * (-1);
    }

    if (this.position.x < left) {
      this.position.x = this.position.x * (-1);
      this.speed.x = this.speed.x * (-1);
    }

    if (this.position.x + this.size.x > right) {
      // Do your maths ;)
      this.position.x = 2 * right - 2 * this.size.x - this.position.x;
      this.speed.x = this.speed.x * (-1);
    }
  };
}
