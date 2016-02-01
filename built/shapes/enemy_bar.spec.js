var assert = require('assert');
var ctx = require('axel');
var enemy_bar_1 = require('./enemy_bar');
describe('Bar', function () {
    describe('constructor', function () {
        it('moves towards ball up', function () {
            var bar = new enemy_bar_1.EnemyBar(4, 2);
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
        it('moves towards ball down', function () {
            var bar = new enemy_bar_1.EnemyBar(4, 2);
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
