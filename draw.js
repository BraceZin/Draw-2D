window.addEventListener('load',() => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  var canvasOffset = $('#canvas').offset();
  let range = document.querySelector("#thickness");
  let number = document.querySelector("#number")
  let red = document.querySelector('#red');
  let black = document.querySelector('#black');
  let blue = document.querySelector('#blue');
  let purple = document.querySelector('#purple');
  let pink = document.querySelector('#pink');
  let yellow = document.querySelector('#yellow');
  let orange = document.querySelector('#orange');
  let green = document.querySelector('#green');
  let brown = document.querySelector('#brown');
  let eraser = document.querySelector('#eraser');
  let clear = document.querySelector('#clear');
  var link = document.querySelector('#link');
  var mouseX;
  var mouseY;
  var hex = document.querySelector("#text-hex")
  var submit = document.querySelector('#submit-hex')
  var offsetX = canvasOffset.left;
  var offsetY = canvasOffset.top;
  var lastX;
  var lastY;
  var points = [];
  var brushSize = 10;
  let brushType = 'round'
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let painting = false;
  let color = "black";
  black.style.opacity = "0.5";
  function redBrush() {
    color = "red";
    red.style.opacity = "0.5"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    brown.style.opacity = "100"
    orange.style.opacity = "100"
    green.style.opacity = "100"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
  }

  function blackBrush() {
    color = "black";
    red.style.opacity = "100"
    black.style.opacity = "0.5"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    orange.style.opacity = "100"
    brown.style.opacity = "100"
    green.style.opacity = "100"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
  }

  function blueBrush() {
    color = "blue";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "0.5"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    orange.style.opacity = "100"
    brown.style.opacity = "100"
    green.style.opacity = "100"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
  }

  function purpleBrush() {
    color = "purple";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "0.5"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    brown.style.opacity = "100"
    orange.style.opacity = "100"
    green.style.opacity = "100"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
  }

  function pinkBrush() {
    color = "pink";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "0.5"
    yellow.style.opacity = "100"
    orange.style.opacity = "100"
    green.style.opacity = "100"
    brown.style.opacity = "100"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
  }

  function yellowBrush() {
    color = "yellow";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "0.5"
    orange.style.opacity = "100"
    green.style.opacity = "100"
    eraser.style.opacity = "100"
    brown.style.opacity = "100"
    clear.style.opacity = "100"
  }
  function orangeBrush() {
    color = "orange";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    orange.style.opacity = "0.5"
    green.style.opacity = "100"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
    brown.style.opacity = "100"
  }

  function greenBrush() {
    color = "green";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    orange.style.opacity = "100"
    green.style.opacity = "0.5"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
    brown.style.opacity = "100"
  }
  function brownBrush() {
    color = "brown";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    orange.style.opacity = "100"
    green.style.opacity = "100"
    brown.style.opacity = "0.5"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
  }
  function eraseBrush() {
    color = "#f3f3f3";
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    orange.style.opacity = "100"
    green.style.opacity = "100"
    eraser.style.opacity = "0.5"
    clear.style.opacity = "100"
    brown.style.opacity = "100"
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function startPosition() {
    painting = true;
    draw();
    points.push({ x: mouseX, y: mouseY, size: brushSize, color: color, mode: "begin" });
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
    points.push({ x: mouseX, y: mouseY, size: brushSize, color: color, mode: "end" });
  }

  function draw(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    if (!painting) return;
    ctx.lineWidth = range.value;
    ctx.lineCap = brushType
    ctx.lineJoin = "round"
    ctx.strokeStyle = color;
    lastX = mouseX;
    lastY = mouseY;
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY)
  }
  range.oninput = function () {
    ctx.lineWidth = brushSize;
  }
  function syncCharacterAmount(e) {
    const value = e.target.value
    range.value = value
    number.value = value
    brushSize = range.value
  }
  function changeColorFromHex(e) {
    e.preventDefault();
    color = hex.value;
    red.style.opacity = "100"
    black.style.opacity = "100"
    blue.style.opacity = "100"
    purple.style.opacity = "100"
    pink.style.opacity = "100"
    yellow.style.opacity = "100"
    orange.style.opacity = "100"
    green.style.opacity = "100"
    eraser.style.opacity = "100"
    clear.style.opacity = "100"
    brown.style.opacity = "100"
    alert("The hex value is registered and now the value is your brush color!");
    hex.value = " ";
    hex.placeholder = "Search For A City..."
  }
  link.addEventListener('click', function (ev) {
    link.href = canvas.toDataURL();
    link.download = "awesomePaintingByAnAwesomePainter.png";
  }, false);
   
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);
  range.addEventListener('input', syncCharacterAmount);
  number.addEventListener('input', syncCharacterAmount);
  red.addEventListener('click', redBrush);
  black.addEventListener('click', blackBrush);
  blue.addEventListener('click', blueBrush);
  purple.addEventListener('click', purpleBrush);
  pink.addEventListener('click', pinkBrush);
  yellow.addEventListener('click', yellowBrush);
  orange.addEventListener('click', orangeBrush);
  green.addEventListener('click', greenBrush);
  brown.addEventListener('click', brownBrush);
  eraser.addEventListener('click', eraseBrush);
  submit.addEventListener('click', changeColorFromHex)
  clear.addEventListener('click', clearCanvas);
  canvas.addEventListener('resize',resizeWindow)
   function resizeWindow(){
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  }
  
resizeWindow();
});
