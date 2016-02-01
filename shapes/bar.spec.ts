var assert = require('assert');
var ctx = require('axel');

import {Point, Size} from './shape';
import {Speed} from './moving_shape';
import {Bar, Edge} from './bar';


describe('Bar', () => {

  describe('constructor', () => {
    it('sets correct size', () => {
      var bar = new Bar(7, Edge.Left, 1);
      expect(bar.size.x).toBe(1);
      expect(bar.size.y).toBe(7);
    });

    it('sets correct position for left edge', () => {
      var bar = new Bar(8, Edge.Left, 1);
      expect(bar.position.x).toBe(1);
      expect(bar.position.y).toBe((ctx.rows - 8) / 2);
    });

    it('sets correct position for right edge', () => {
      var bar = new Bar(8, Edge.Right, 1);
      expect(bar.position.x).toBe(ctx.cols);
      expect(bar.position.y).toBe((ctx.rows - 8) / 2);
    });
  });
});
