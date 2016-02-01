// Uses AXEL's node module 
var ctx = require('axel');
import {Ball} from './shapes/ball';
import {EnemyBar} from './shapes/enemy_bar';

var ball = new Ball({
  x: ctx.cols / 2,
  y: ctx.rows / 2
}, {
  x: 2,
  y: 1
}, {
  x: 0.9,
  y: 0.3
});

var bar = new EnemyBar(5, 0.1);

var drawBall = (): void => {
  // Clear the terminal/screen/console 
  ctx.clear();

  // Green box 
  ctx.bg(0, 255, 0);
  ball.move();
  ball.draw();

  // Red bar
  ctx.bg(255, 0, 0);
  bar.follow(ball.position);
  bar.move();
  bar.draw();

  ctx.bg(0, 0, 0);
};

setInterval(drawBall, 10);

