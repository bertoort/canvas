var ctx = document.querySelector('#canvas').getContext("2d");

function Shape(x,y,size,color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
}

Shape.prototype.paintAll = function (color) {
  this.color = color;
  this.draw();
}

function Circle(x, y, size, color) {
  Shape.call(this, x, y, size, color);
}

Circle.prototype = new Shape();

Circle.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

function Square(x,y,size,color) {
  Shape.call(this,x,y,size,color);
}

Square.prototype = new Shape();

Square.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
}
