import {Shape, Point, Size} from './shape';

export interface Speed {
  x: number;
  y: number;
}

export class MovingShape extends Shape {
  constructor(position: Point, size: Size, inintialSpeed: Speed) {
    this.speed = inintialSpeed;
    super(position, size);
  }

  speed: Speed;

  move (): void {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

}
