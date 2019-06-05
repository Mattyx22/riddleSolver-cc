# riddleSolver-cc
riddleSolver is a function that works like jewel games. It takes number values from user and gives solved output.

# DOCS
https://mattyx22.github.io/riddleSolver-cc/

# Explaination
Here's a simple example:  
Let's say we've got that array from below:  
<p align="center">
  <img src="https://mattyx22.github.io/riddleSolver-cc/img/1.jpg">
</p>

riddleSolver will find numbers that are repeating at least 3 times vertically or horizontally:  
<p align="center">
  <img src="https://mattyx22.github.io/riddleSolver-cc/img/2.jpg">
</p>

And then change it to zero (we read it as empty):  
<p align="center">
  <img src="https://mattyx22.github.io/riddleSolver-cc/img/3.jpg">
</p>

After that it will drop all other numbers to the bottom:  
<p align="center">
  <img src="https://mattyx22.github.io/riddleSolver-cc/img/4.jpg">
</p>


If after that appears to be more numbers that can be deleted, the function will run again.  
If not, the function will return the result.

# Usage
```javascript
riddleSolver(board);
```

```javascript
riddleSolver([
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 3, 3],
        [1, 4, 5, 6, 7]
   ]);
```
