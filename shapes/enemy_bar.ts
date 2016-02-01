var ctx = require('axel');
import {Bar, Edge} from './bar';
import {Point} from './Point';

const edgePositions = {};
edgePositions[Edge.Left] = 1;
edgePositions[Edge.Right] = ctx.cols;


export class EnemyBar extends Bar {
  constructor(height: number, maxSpeed: number) {
    super(height, Edge.Right, maxSpeed);
  }

  follow(ballPosition: Point): void {
    this.speed.x = 0;
    this.speed.y = 0;

    if (ballPosition.y < this.position.y + (this.size.y / 2)) {
      this.speed.y = this.maxSpeed * (-1);
    }

    if (ballPosition.y > this.position.y + (this.size.y / 2)) {
      this.speed.y = this.maxSpeed;
    }


  }
};
