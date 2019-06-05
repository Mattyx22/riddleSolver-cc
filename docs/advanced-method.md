# Advanced explanation
At first, we've got a function
```javascript
function riddleSolver(board)
```
that takes one parameter called <strong>board</strong> which takes <strong>array</strong> input.

In the beginning, the function creates an empty array variable <strong>matching</strong> that will store "coordinates" of variables that will be replaced by value 0.

Then it makes a copy of the <strong>board</strong>.
```javascript
let startBoard = JSON.parse(JSON.stringify(board));
```

## What's inside function?
riddleSolver function contains another three functions and at the end do...while

```javascript
do {
    startBoard = JSON.parse(JSON.stringify(board));
    searching();
    setToBottom();
  } while (!isEqual(startBoard, board));
```

which at the beginning sets <strong>startBoard</strong> variable to be the clone of the current <strong>board</strong> array.
Then starts functions: <strong>serching</strong> and <strong>setToBottom</strong>.
The do...while loop will be repeating until <strong>startBoard</strong> variable will be the same as <strong>board</strong>.  
<strong>isEqual</strong> function makes sure of that.  
This is how the <strong>riddleSolver</strong> knows how many times do all the things to return finished array.

### isItemInArray

This function is used by another function called <strong>searching</strong>.  
<strong>isItemInArray</strong> takes two parameters: <strong>array</strong> and <strong>item</strong>.
The first one is always relating to <strong>matching</strong> variable.
The second one is taking "coordinates" of value that will be replaced by value 0.

```javascript
function isItemInArray(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] == item[0] && array[i][1] == item[1]) {
        return true;
      }
    }
    return false;
  }
```

If it finds matching value it returns <strong>true</strong>.
If not it returns <strong>false</strong>.

### searching
This function is split into three for loops.

The first loop is looking for matching values horizontally:
```javascript
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
```

<hr>

The second loop is looking for matching values vertically:
```javascript
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
```

After finding matching values their positions in <strong>board</strong> array are saved in <strong>matching</strong> array.

Then using <strong>matching</strong> array - another loop is replacing values by 0 in <strong>board</strong>.
```javascript
for (let del = 0; del < matching.length; del++) {
    let tempData0 = matching[del][0];
    let tempData1 = matching[del][1];

    board[tempData0][tempData1] = 0;
}
```

At the end of <strong>searching()</strong> function, after replacing matching values by 0 - the <strong>matching</strong> array is set to be empty.
```javascript
matching = [];
```

### setToBottom
Second function is <strong>setToBottom</strong>.
It finds 0 values under any other number and switches their places.
```javascript
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
```

### isEqual
<strong>isEqual</strong> is the third function that takes two parameters:
<strong>one</strong> and <strong>two</strong>.
<strong>one</strong> is taking the <strong>startBoard</strong> variable.
<strong>two</strong> is taking the <strong>board</strong> variable.

If <strong>startBoard</strong> is equal to <strong>board</strong> it returns <strong>true</strong>. If not - returns <strong>false</strong>.

```javascript
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
```

<hr>

When the function by <strong>do...while</strong> loop detects there's nothing more to do with the <strong>board</strong> array it will return it.
```javascript
return board;
```