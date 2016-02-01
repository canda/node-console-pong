var assert = require("assert");
var ctx = require('axel');

import {Point, Size} from './shape'
import {MovingShape, Speed} from './moving_shape';


describe("MovingShape", function() {

  beforeEach(() => {
    spyOn(ctx, 'box');
  });
  var movingShape;
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
    movingShape = new MovingShape(position, size, speed);
  });

  describe("#move()", () => {
    it("moves the right amount of x and y position", function() {
      movingShape.move();
      expect(movingShape.position.x).toBe(6);
      expect(movingShape.position.y).toBe(-3);
    });
  });
});
