var assert = require('assert');
var ctx = require('axel');
var bar_1 = require('./bar');
describe('Bar', function () {
    describe('constructor', function () {
        it('sets correct size', function () {
            var bar = new bar_1.Bar(7, 0 /* Left */, 1);
            expect(bar.size.x).toBe(1);
            expect(bar.size.y).toBe(7);
        });
        it('sets correct position for left edge', function () {
            var bar = new bar_1.Bar(8, 0 /* Left */, 1);
            expect(bar.position.x).toBe(1);
            expect(bar.position.y).toBe((ctx.rows - 8) / 2);
        });
        it('sets correct position for right edge', function () {
            var bar = new bar_1.Bar(8, 1 /* Right */, 1);
            expect(bar.position.x).toBe(ctx.cols);
            expect(bar.position.y).toBe((ctx.rows - 8) / 2);
        });
    });
});
