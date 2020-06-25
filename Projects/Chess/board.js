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

    if (this.selected) {
      fill(0, 220, 0, 140);
      rect(
        SQUARE_SIZE + this.selectedCol * SQUARE_SIZE,
        SQUARE_SIZE + this.selectedRow * SQUARE_SIZE,
        SQUARE_SIZE,
        SQUARE_SIZE
      );
    }
  }

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
  }

  movePiece(col, row) {

    
  }





}
