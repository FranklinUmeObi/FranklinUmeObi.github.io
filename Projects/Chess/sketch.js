let board;
let images;
let bR, bN, bB, bK, bQ;
let wR, wN, wB, wK, wQ;

function preload() {
  bR = loadImage("Images/bR.png");
  bN = loadImage("Images/bN.png");
  bB = loadImage("Images/bB.png");
  bK = loadImage("Images/bK.png");
  bQ = loadImage("Images/bQ.png");
  bP = loadImage("Images/bP.png");

  wR = loadImage("Images/wR.png");
  wN = loadImage("Images/wN.png");
  wB = loadImage("Images/wB.png");
  wK = loadImage("Images/wK.png");
  wQ = loadImage("Images/wQ.png");
  wP = loadImage("Images/wP.png");
}

function setup() {
  canvas = createCanvas(SQUARE_SIZE * 10, SQUARE_SIZE * 10);
  images = [bR, bN, bB, bK, bQ, bP, wR, wN, wB, wK, wQ, wP];
  board = new GameBoard(images);
}

function draw() {
  background(55);
  board.displayBoard();
  board.displayPieces();
}

function mousePressed() {

  //check if a piece is selected
  let x = roundnum(mouseX) / SQUARE_SIZE - 1;
  let y = roundnum(mouseY) / SQUARE_SIZE - 1;
  let isPiece = false;
  if (board.piecePositions[y][x] != null) isPiece = true;

  //logic to see if a box is selected
  if (
    board.selected == false &&
    mouseX > SQUARE_SIZE &&
    mouseX < SQUARE_SIZE * 9 &&
    mouseY > SQUARE_SIZE &&
    mouseY < SQUARE_SIZE * 9 &&
    isPiece
  ) {
    board.selected = true;
    board.selectedCol = x;
    board.selectedRow = y;
  }
  //code to deselect a piece
  else if(x == board.selectedCol && y == board.selectedRow){
    board.selected = false;
  }
// code to move a piece
  else {
    let piece = board.piecePositions[board.selectedRow][board.selectedCol]
    let boxes = board.legalMoves(piece)
    let canMove = false
    for (var i = 0; i < boxes.length; i++) if(x == boxes[i].x && y == boxes[i].y) canMove = true;

    if(canMove)
    {
      board.movePiece(x,y);
      board.selected = false;
    }

  }
}


//round mouse position to nearest boxindex
function roundnum(num) {
  return Math.floor(num / SQUARE_SIZE) * SQUARE_SIZE;
}
