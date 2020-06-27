class GameBoard {
  constructor(images) {
    this.images = images;
    this.selected = false;
    this.selectedRow = null;
    this.selectedColl = null;

    this.piecePositions =
    [
    [images[0],images[1],images[2],images[3],images[4],images[2],images[1],images[0]],
    [images[5],images[5],images[5],images[5],images[5],images[5],images[5],images[5]],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [images[11],images[11],images[11],images[11],images[11],images[11],images[11],images[11]],
    [images[6],images[7],images[8],images[9],images[10],images[8],images[7],images[6]]
    ]
  }

//draw the boxes of the chess piece
  displayBoard() {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        strokeWeight(2.5);
        if (j % 2 === 0 && i % 2 == 0) fill(35);
        else if (j % 2 === 1 && i % 2 == 1) fill(35);
        else fill(255);

        rect(
          SQUARE_SIZE + i * SQUARE_SIZE,
          SQUARE_SIZE + j * SQUARE_SIZE,
          SQUARE_SIZE,
          SQUARE_SIZE
        );
      }
    }


    if (this.selected)
    {
      //draw a green box on a box that is selected
      fill(34,139,34)
      rect(
        SQUARE_SIZE + this.selectedCol * SQUARE_SIZE,
        SQUARE_SIZE + this.selectedRow * SQUARE_SIZE,
        SQUARE_SIZE,SQUARE_SIZE);

      let piece = this.piecePositions[this.selectedRow][this.selectedCol]
      let boxes = this.legalMoves(piece)
      for (var i = 0; i < boxes.length; i++)
      {
        //draw a blue box on a box that is a valid movePiece
        fill(100,149,237)
        let aBox = createVector(boxes[i].x, boxes[i].y);
        //capturable pieces are highlighted red
        if(this.spotIsWhite(aBox)|| this.spotIsBlack(aBox)) fill(178,34,34)
        rect(
          SQUARE_SIZE + boxes[i].x * SQUARE_SIZE,
          SQUARE_SIZE + boxes[i].y * SQUARE_SIZE,
          SQUARE_SIZE,SQUARE_SIZE);
      }



    }
  }

//draw the images in the 2d array of piece images
  displayPieces() {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if (this.piecePositions[j][i] != null) {
          image(
            this.piecePositions[j][i],
            8 + SQUARE_SIZE + i * SQUARE_SIZE,
            7 + SQUARE_SIZE + j * SQUARE_SIZE,
            50,
            50
          );
        }
      }
    }

    this.pawnToQueen()
  }

//move piece from selected box to the box passed in by parameters
  movePiece(col, row) {
    var toMove = this.piecePositions[this.selectedRow][this.selectedCol]
    this.piecePositions[row][col] = toMove
    this.piecePositions[this.selectedRow][this.selectedCol] = null

  }


  legalMoves(piece){
    let boxes = []
    let x = this.selectedCol
    let y = this.selectedRow
    let currentPos = createVector(x, y);

//----------------------------------------------------------------
    if (piece == this.images[5]) //black pawn
    {
      let r = createVector(x+1, y+1);
      let l = createVector(x-1, y+1);
      if (this.spotIsWhite(r))  boxes.push(r)
      if(this.spotIsWhite(l))   boxes.push(l)
      let a = createVector(x, y+1);
      if(this.spotIsEmpty(a)) boxes.push(a)
      if (y == 1) {
        let b = createVector(x, y+2);
        if(this.spotIsEmpty(b)) boxes.push(b)
      }
    }
//-----------------------------------------------------------------









//----------------------------------------------------------------
    else if (piece == this.images[11]) //white pawn
    {
      let r = createVector(x+1, y-1);
      let l = createVector(x-1, y-1);
      if (this.spotIsBlack(r))  boxes.push(r)
      if(this.spotIsBlack(l))   boxes.push(l)
      let a = createVector(x, y-1);
      if(this.spotIsEmpty(a))   boxes.push(a)
      if (y == 6){
        let b = createVector(x, y-2);
        if(this.spotIsEmpty(b)) boxes.push(b)
      }
    }
//----------------------------------------------------------------








//----------------------------------------------------------------
    else if (piece == this.images[0]) //black rook
    {
      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8) {//right
          let a = createVector(x+i, y);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y);
          if(this.spotIsWhite(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsBlack(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0) {//left
          let b = createVector(x-i, y);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y);
          if(this.spotIsWhite(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsBlack(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8) {//down
          let c = createVector(x, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x, y+i);
          if(this.spotIsWhite(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsBlack(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y-i >= 0) {//up
          let d = createVector(x, y-i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x, y-i);
          if(this.spotIsWhite(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsBlack(d1)) i = 9;
        }
      }
    }
//----------------------------------------------------------------










//----------------------------------------------------------------
    else if (piece == this.images[6]) //white rook
    {
      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8) {//right
          let a = createVector(x+i, y);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y);
          if(this.spotIsBlack(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsWhite(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0) {//left
          let b = createVector(x-i, y);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y);
          if(this.spotIsBlack(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsWhite(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8) {//down
          let c = createVector(x, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x, y+i);
          if(this.spotIsBlack(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsWhite(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y-i >= 0) {//up
          let d = createVector(x, y-i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x, y-i);
          if(this.spotIsBlack(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsWhite(d1)) i = 9;
        }
      }
    }
//----------------------------------------------------------------










//----------------------------------------------------------------
    else if (piece == this.images[2])//black Bishop
    {
      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8 && y-i >=0) {//up right
          let a = createVector(x+i, y-i);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y-i);
          if(this.spotIsWhite(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsBlack(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0 && y-i >= 0) {//up left
          let b = createVector(x-i, y-i);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y-i);
          if(this.spotIsWhite(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsBlack(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x+i < 8) {//down right
          let c = createVector(x+i, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x+i, y+i);
          if(this.spotIsWhite(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsBlack(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x-i >= 0) {//down left
          let d = createVector(x-i, y+i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x-i, y+i);
          if(this.spotIsWhite(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsBlack(d1)) i = 9;
        }
      }
    }
//----------------------------------------------------------------








//----------------------------------------------------------------
    else if (piece == this.images[8])//white Bishop
    {
      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8 && y-i >=0) {//up right
          let a = createVector(x+i, y-i);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y-i);
          if(this.spotIsBlack(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsWhite(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0 && y-i >= 0) {//up left
          let b = createVector(x-i, y-i);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y-i);
          if(this.spotIsBlack(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsWhite(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x+i < 8) {//down right
          let c = createVector(x+i, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x+i, y+i);
          if(this.spotIsBlack(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsWhite(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x-i >= 0) {//down left
          let d = createVector(x-i, y+i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x-i, y+i);
          if(this.spotIsBlack(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsWhite(d1)) i = 9;
        }
      }
    }
//-------------------------------------------------------------










//-------------------------------------------------------------
    else if (piece == this.images[4])//black queen
    {
      //DIAGONALS
      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8 && y-i >=0) {//up right
          let a = createVector(x+i, y-i);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y-i);
          if(this.spotIsWhite(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsBlack(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0 && y-i >= 0) {//up left
          let b = createVector(x-i, y-i);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y-i);
          if(this.spotIsWhite(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsBlack(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x+i < 8) {//down right
          let c = createVector(x+i, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x+i, y+i);
          if(this.spotIsWhite(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsBlack(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x-i >= 0) {//down left
          let d = createVector(x-i, y+i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x-i, y+i);
          if(this.spotIsWhite(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsBlack(d1)) i = 9;
        }
      }

      //Straights
      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8) {//right
          let a = createVector(x+i, y);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y);
          if(this.spotIsWhite(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsBlack(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0) {//left
          let b = createVector(x-i, y);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y);
          if(this.spotIsWhite(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsBlack(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8) {//down
          let c = createVector(x, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x, y+i);
          if(this.spotIsWhite(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsBlack(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y-i >= 0) {//up
          let d = createVector(x, y-i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x, y-i);
          if(this.spotIsWhite(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsBlack(d1)) i = 9;
        }
      }
    }
//-------------------------------------------------------------










//-------------------------------------------------------------
    else if (piece == this.images[10])//white queen
    {
      //DIAGONALS
      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8 && y-i >=0) {//up right
          let a = createVector(x+i, y-i);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y-i);
          if(this.spotIsBlack(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsWhite(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0 && y-i >= 0) {//up left
          let b = createVector(x-i, y-i);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y-i);
          if(this.spotIsBlack(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsWhite(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x+i < 8) {//down right
          let c = createVector(x+i, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x+i, y+i);
          if(this.spotIsBlack(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsWhite(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8 && x-i >= 0) {//down left
          let d = createVector(x-i, y+i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x-i, y+i);
          if(this.spotIsBlack(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsWhite(d1)) i = 9;
        }
      }

      for (var i = 1; i < 8; i++)
      {
        if (x+i < 8) {//right
          let a = createVector(x+i, y);
          if(this.spotIsEmpty(a)) boxes.push(a)
          let a1 = createVector(x+i, y);
          if(this.spotIsBlack(a1))
          {
            boxes.push(a1)
            break
          }
          if(this.spotIsWhite(a1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (x-i >= 0) {//left
          let b = createVector(x-i, y);
          if(this.spotIsEmpty(b)) boxes.push(b)
          let b1 = createVector(x-i, y);
          if(this.spotIsBlack(b1))
          {
            boxes.push(b1)
            break
          }
          if(this.spotIsWhite(b1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y+i < 8) {//down
          let c = createVector(x, y+i);
          if(this.spotIsEmpty(c)) boxes.push(c)
          let c1 = createVector(x, y+i);
          if(this.spotIsBlack(c1))
          {
            boxes.push(c1)
            break
          }
          if(this.spotIsWhite(c1)) i = 9;
        }
      }
      for (var i = 1; i < 8; i++)
      {
        if (y-i >= 0) {//up
          let d = createVector(x, y-i);
          if(this.spotIsEmpty(d)) boxes.push(d)
          let d1 = createVector(x, y-i);
          if(this.spotIsBlack(d1))
          {
            boxes.push(d1)
            break
          }
          if(this.spotIsWhite(d1)) i = 9;
        }
      }
    }
    //----------------------------------------------------------------------





  //----------------------------------------------------------------------------
    else if (piece == this.images[1])//black knight
    {

    }
    else if (piece == this.images[5])
    {

    }
    else if (piece == this.images[5])
    {

    }
    return boxes
  }



  spotIsEmpty(pos){
    //check if the box is within board
    if (pos.x < 0 || pos.x > 7 ||pos.y < 0 || pos.y > 7 ) return false
    //check if spot is empty
    if(this.piecePositions[pos.y][pos.x] == null) return true
  }

  spotIsBlack(pos){
    //check if the box is within board
    if (pos.x < 0 || pos.x > 7 ||pos.y < 0 || pos.y > 7 ) return false
    let img = this.piecePositions[pos.y][pos.x]
    //check if its a black piece
    for (var i = 0; i < 6; i++) {
      if(images[i] == img) return true
    }
    return false
  }

  spotIsWhite(pos){
    //check if the box is within board
    if (pos.x < 0 || pos.x > 7 ||pos.y < 0 || pos.y > 7 ) return false
    let img = this.piecePositions[pos.y][pos.x]
    //check if its a white piece
    for (var i = 6; i < 12; i++) {
      if(images[i] == img) return true
    }
    return false
  }



    pawnToQueen(){
      for (var i = 0; i < 8; i++) {
        if(this.piecePositions[0][i] == this.images[11]) this.piecePositions[0][i] = this.images[10]
        if(this.piecePositions[7][i] == this.images[5]) this.piecePositions[7][i] = this.images[4]
      }
    }



  blackPawnCanCapture(pos){
    if (pos.x < 0 || pos.x > 7 ||pos.y < 0 || pos.y > 7 ) return false

    return false//change to true
  }

  whitePawnCanCapture(pos){
    if (pos.x < 0 || pos.x > 7 ||pos.y < 0 || pos.y > 7 ) return false

    return false//change to true
  }








}
