$( document ).ready(function() {
  var squareArr = [];
  var circleArr = [];
  var shapeArr = [];
  var party = false;
  var partyMode;

  function randomColor() {
    var color = "#";
    var letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randomWidth() {
    var canvasX = $('#canvas').width()
    var x = Math.floor(Math.random() * canvasX);
    return x;
  }

  function randomHeight() {
    var canvasY = $('#canvas').width()
    var y = Math.floor(Math.random() * canvasY);
    return y;
  }

  function randomSize() {
    return [Math.floor(Math.random() * 100)];
  }

  function randomShape() {
    var num = [Math.floor(Math.random() * 2)];
    if (num < 1) {
      return "circle"
    }
    else {
      return "square"
    }
  }

  $('#canvas').on('click', function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var size = $('#size').val();
    var color = $('#color').val();
    var shape = $('#shape').val();
    if (shape === 'circle') {
      var circle = new Circle(x,y,size,color);
      circleArr.push(circle);
      shapeArr.push(circle);
      circle.draw();
    }
    else {
      var square = new Square(x,y,size,color);
      squareArr.push(square);
      shapeArr.push(square);
      square.draw();
    }
  });
  $('#paintAll').on('click', function (e) {
    var color = $('#color').val();
    shapeArr.map(function (e) {
      e.paintAll(color);
    })
  })
  $('#paintAllSquares').on('click', function (e) {
    var color = $('#color').val();
    squareArr.map(function (e) {
      e.paintAll(color);
    })
  })
  $('#paintAllCircles').on('click', function (e) {
    var color = $('#color').val();
    circleArr.map(function (e) {
      e.paintAll(color);
    })
  })
  $('#eraseAll').on('click', function (e) {
    ctx.clearRect(0, 0, $('#canvas').width(), $('#canvas').height());
    squareArr = [];
    circleArr = [];
  })
  $('#eraseCircles').on('click', function (e) {
    ctx.clearRect(0, 0, $('#canvas').width(), $('#canvas').height());
    squareArr.map(function (e) {
      e.draw();
    })
    circleArr = [];
  })
  $('#eraseSquares').on('click', function (e) {
    ctx.clearRect(0, 0, $('#canvas').width(), $('#canvas').height());
    circleArr.map(function (e) {
      e.draw();
    })
    squareArr = [];
  })
  $('#randomColor').on('click', function (e) {
    ctx.clearRect(0, 0, $('#canvas').width(), $('#canvas').height());
    shapeArr.map(function (e) {
      var color = randomColor();
      e.paintAll(color);
    })
  })
  $('#party').on('click', function (e) {
    if (party) {
      party = false;
      clearInterval(partyMode);
    }
    else {
      party = true;
      partyMode = setInterval(function () {
        ctx.clearRect(0, 0, $('#canvas').width(), $('#canvas').height());
        shapeArr.map(function (e) {
          var color = randomColor();
          e.paintAll(color);
        })
      }, 500)
    }
  })
  $('#randomFill').on('click', function (e) {
    for (var i = 0; i < 10; i++) {
      var color = randomColor();
      var x = randomWidth();
      var y = randomHeight();
      var size = randomSize();
      var shape = randomShape();
      if (shape === 'circle') {
        var circle = new Circle(x,y,size,color);
        circleArr.push(circle);
        shapeArr.push(circle);
        circle.draw();
      }
      else {
        var square = new Square(x,y,size,color);
        squareArr.push(square);
        shapeArr.push(square);
        square.draw();
      }
    }
  })

});
