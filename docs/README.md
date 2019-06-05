# riddleSolver-cc
riddleSolver is a function that works like jewel games. It takes number values from user and gives solved output.

# What does it do?
It finds number values repeating in array for at least 3 times next to each other vertically or horizontally and replaces it by 0 value.
Then it drops all other numbers to the bottom.
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

