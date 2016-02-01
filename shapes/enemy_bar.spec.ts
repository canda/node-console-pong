var assert = require('assert');
var ctx = require('axel');

import {Point} from './shape';
import {EnemyBar} from './enemy_bar';


describe('Bar', () => {

  describe('constructor', () => {
    it('moves towards ball up', () => {
      var bar = new EnemyBar(4, 2);
      bar.position.y = 5;
      bar.follow({
        x: 1,
        y: 0
      });
      expect(bar.speed.x).toBe(0);
      expect(bar.speed.y).toBe(-2);

      bar.position.y = 5;
      bar.follow({
        x: 1,
        y: 6
      });
      expect(bar.speed.x).toBe(0);
      expect(bar.speed.y).toBe(-2);
    });

    it('moves towards ball down', () => {
      var bar = new EnemyBar(4, 2);
      bar.position.y = 5;
      bar.follow({
        x: 1,
        y: 10
      });
      expect(bar.speed.x).toBe(0);
      expect(bar.speed.y).toBe(2);

      bar.position.y = 5;
      bar.follow({
        x: 1,
        y: 8
      });
      expect(bar.speed.x).toBe(0);
      expect(bar.speed.y).toBe(2);
    });
  });
});
