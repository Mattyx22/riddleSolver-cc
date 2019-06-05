# Simple explanation
Here's a simple example:  
Let's say we've got that array from below:  
<p align="center">
  <img src="./img/1.jpg">
</p>

riddleSolver will find numbers that are repeating at least 3 times vertically or horizontally:  
<p align="center">
  <img src="./img/2.jpg">
</p>

And then changes it to zero (we read it as empty):  
<p align="center">
  <img src="./img/3.jpg">
</p>

After that it will drop all other numbers to the bottom:  
<p align="center">
  <img src="./img/4.jpg" align="center">
</p>


If after that appears to be more numbers that can be deleted, the function will run again.  
If not, the function will return the result.