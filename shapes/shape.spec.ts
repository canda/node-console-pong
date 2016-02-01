var assert = require('assert');
var ctx = require('axel');

// Shape destructuring
import {Shape, Point, Size} from './shape';


describe('Shape', () => {

  beforeEach(() => {
    spyOn(ctx, 'box');
  });
  var shape;
  var position: Point = {
    x: 1,
    y: 2
  };
  var size: Size = {
    x: 3,
    y: 4
  };
  beforeEach(() => {
    shape = new Shape(position, size);
  });

  describe('#draw()', () => {
    it('should call ctx.box to draw the shape', () => {
      shape.draw();
      expect(ctx.box).toHaveBeenCalled();
    });
    it('should call ctx.box to draw with size and position parameters', () => {
      shape.draw();
      expect(ctx.box.calls.argsFor(0)).toEqual([position.x, position.y, size.x, size.y]);
    });
  });
});
