# karens-math-problem
Finds solutions to the following math problem:

<code>
  b0 + 13 *  b1 /  b2 + b3 + 12 * b4 - b5 - 11 + b6 * b7 / b8 - 10 = 66
</code>
  
  * Where b0, b1, b2, etc are the numbers 1 through 9 in any order.
  * Numbers can't used multiple times.
  * Ignore the normal order of operations and evalute it left to right.


The program is written in JavaScript. It runs in Windows because it uses Microsoft's WScript object for output. If you 
change the output functions, you could run it somewhere else. For example if you changed WScript.StdOut.Writeline to
console.log you could run it in a browser.

Unfortunately you can't just double-click the .js file because it writes a lot of output to the standard output stream.
It requires a Command Prompt for the output. You have to run it in a Command Prompt like this:

<code>
cscript karens-math-problem.js
</code>

Or you can double-click karens-math-problem.bat, which does the same thing.
