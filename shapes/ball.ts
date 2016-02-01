var ctx = require('axel');
import {Point, Size} from './shape';
import {MovingShape, Speed} from './moving_shape';

const edges = {
  x: {
    min: 0,
    max: ctx.cols
  },
  y: {
    min: 0,
    max: ctx.rows
  }
};



export class Ball extends MovingShape {
  constructor(position: Point, size: Size, initialSpeed: Speed) {
    super(position, size, initialSpeed);
  }

  private bounce (axis: string): void {
    // TODO: refactor to a single function if possible
    if (this.position[axis] < edges[axis].min) {
      this.position[axis] = this.position[axis] * (-1);
      this.speed[axis] = this.speed[axis] * (-1);
    }

    if (this.position[axis] + this.size[axis] > edges[axis].max) {
      // Do your maths ;)
      this.position[axis] = 2 * edges[axis].max - 2 * this.size[axis] - this.position[axis];
      this.speed[axis] = this.speed[axis] * (-1);
    }
  }

  move (): void {
    super.move();

    this.bounce('x');
    this.bounce('y');
  };
}
