var assert = require('assert');
var ctx = require('axel');

import {Point, Size} from './shape';
import {Speed} from './moving_shape';
import {Ball} from './ball';


describe('MovingShape', function() {

  beforeEach(() => {
    spyOn(ctx, 'box');
  });
  var ball;
  var position: Point = {
    x: 1,
    y: 2
  };
  var size: Size = {
    x: 3,
    y: 4
  };
  var speed: Speed = {
    x: 5,
    y: -5
  };
  beforeEach(() => {
    ball = new Ball(position, size, speed);
  });

  describe('#move()', () => {
    it('bounces on top edge', function() {
      position.y = 2;
      speed.y = -5;
      ball.move();
      expect(ball.position.y).toBe(3);
      expect(ball.speed.y).toBe(5);
    });

    it('bounces on bottom edge', function() {
      position.y = ctx.rows - 3;
      size.y = 2;
      speed.y = 5;
      ball.move();
      expect(ball.position.y).toBe(ctx.rows - 6);
      expect(ball.speed.y).toBe(-5);
    });

    it('bounces on left edge', function() {
      position.x = 2;
      speed.x = -5;
      ball.move();
      expect(ball.position.x).toBe(3);
      expect(ball.speed.x).toBe(5);
    });

    it('bounces on right edge', function() {
      position.x = ctx.cols - 3;
      size.x = 2;
      speed.x = 5;
      ball.move();
      expect(ball.position.x).toBe(ctx.cols - 6);
      expect(ball.speed.x).toBe(-5);
    });
  });
});
