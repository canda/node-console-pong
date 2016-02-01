var ctx = require('axel');
import {MovingShape} from './moving_shape';

export const enum Edge {
  Left,
  Right
}

const edgePositions = {};
edgePositions[Edge.Left] = 1;
edgePositions[Edge.Right] = ctx.cols;


export class Bar extends MovingShape {
  constructor(height: number, edge: Edge, public maxSpeed: number) {
    super({
      x: edgePositions[edge],
      y: (ctx.rows - height) / 2
    }, {
      x: 1,
      y: height
    }, {
      x: 0,
      y: 0
    });
  }
};
