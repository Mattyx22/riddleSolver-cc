function riddleSolver(board){
  let matching = []; 
  
  let startBoard = JSON.parse(JSON.stringify(board));
  console.log(startBoard);

  function isItemInArray(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] == item[0] && array[i][1] == item[1]) {
        return true;
      }
    }
    return false;
  }

  function searching() {
    for (let i = 0; i < board.length; i++) {
      let horizontal = board[i][0];
      let howMany = 1;

      for (let j = 1; j < board[i].length; j++) {
        if (horizontal === board[i][j]) {
          howMany += 1;
          horizontal = board[i][j];
          if (howMany >= 3) {
            for (let d = j; d > j - howMany; d--) {
              if (!isItemInArray(matching, [i, d])) {
                matching.push([i, d]);
              }
            }
          }
        } else {
          horizontal = board[i][j];
          howMany = 1;
        }
      }
    }

    for (let v = 0; v < board[0].length; v++) {
      let vertical = board[0][v];
      let howMany = 1;
      for (let x = 1; x < board.length; x++) {
        if (vertical === board[x][v]) {
          howMany++;
          vertical = board[x][v];
          if (howMany >= 3) {
            for (let d = x; d > x - howMany; d--) {
              if (!isItemInArray(matching, [d, v])) {
                matching.push([d, v]);
              }
            }
          }
        } else {
          vertical = board[x][v];
          howMany = 1;
        }
      }
    }

    for (let del = 0; del < matching.length; del++) {
      let tempData0 = matching[del][0];
      let tempData1 = matching[del][1];

      board[tempData0][tempData1] = 0;
    }

    matching = [];
  }

  function setToBottom() {
    for (let p = 0; p < board[0].length; p++) {
      for (let r = 0; r < board.length - 1; r++) {
        for (let i = 0; i < board.length - 1; i++) {
          if (board[i][p] != 0 && board[i + 1][p] === 0) {
            board[i + 1][p] = board[i][p];
            board[i][p] = 0;
          }
        }
      }
    }
  }

  function isEqual(one, two) {
    for (let i = 0; i < one.length; i++) {
      for (let j = 0; j < one[i].length; j++) {
        if (one[i][j] != two[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  do {
    startBoard = JSON.parse(JSON.stringify(board));
    searching();
    setToBottom();
  } while (!isEqual(startBoard, board));
  console.log(board);
  return board;
};

export {riddleSolver};
