// Sovled by Bill Chatfield
// 5/24/2015

// Finds solutions to the following equation:
// b0 + 13 *  b1 /  b2 + b3 + 12 * b4 - b5 - 11 + b6 * b7 / b8 - 10 = 66
//
// On Windows, run at a Command Prompt with this command: 
//
// cscript karens-math-problem.js
//
// TODO: Rename the variables so that they represent what they are.

/**
 * Set of all possible input values. Ordering is irrelevant.
 */
var a = [1,2,3,4,5,6,7,8,9];

/**
 * Stores all the inputs for each individual solution attempt.
 * The ordering corresponds to the order of order of variables
 * in the problem statement.
 */
var b = [0,0,0,0,0,0,0,0,0];

/**
 * Keeps track of the iteration number or the number of attempts.
 */
var iter = 0;

/**
 * Keeps track of the number of solutions found.
 */
var solutionCount = 0;

/**
 * A platform-independent method of writing a line of text to standard output.
 * 
 * @param {String} message  What you want to write to standard output.
 */
function writeln(message) {
    if (typeof print == 'function') {
        // On Linux, gjs and rhino have the 'print' function.
        print(message);
    }
    else if (typeof console === 'object') {
        // Web browsers and Node.js have 'console.log' function.
        console.log(message);
    }
    else {
        // On Windows, cscript does not have a 'print' function,
        // It uses WScript.Stdout.WriteLine instead but only if
        // run from cscript. The wscript command does not have
        // the Stdout object, only WScript.Echo which displays
        // a window for each message that you have to click.
        try {
            WScript.Stdout.WriteLine(message);
        }
        catch (e) {
            WScript.Echo("This program only runs with cscript in a Command Prompt. Try running 'cscript <program-name>.js in a Command Prompt.");
            WScript.Quit(0);
        }
    }
}

/**
 * Rotates all the values of an array from left to right, wrapping
 * the last element back to the beginning. This is needed so that
 * all initial orderings of the input values can be tried.
 */
function rotate(x) {
	var first = x[0];
	for (var i = 0; i < x.length-1; i++) {
		x[i] = x[i + 1];
	}
	x[x.length-1] = first;
	return x;
}

/**
 * A recursive function that solves for all the b0, b1, etc input values
 * which give a result of 66. I thought this up buy I'm having a hard time
 * explaining what it does. It iterates through all possible values of 
 * the first element of the array a. And passes all the remaining elements
 * of the array a to itself to do the same thing. When an instance of this
 * function gets an array a, of length 1, it runs the calculation because
 * at that point it has all the values of the array b decided on. If the
 * result is 66, it is a successful attempt and it outputs the values of
 * array b that made for a successful iteration.
 *
 * @param {Integer} p The position in array b for which this iteration
 *                    should provide a value
 * @param {Array}   a The array of remaining values we have left to choose
 *                    from all possible inputs 1 - 9. This array decrease
 *                    in size by 1 element with each recursive call.
 */
function calc(p, a) {
	
	if (a.length == 1) {
		// We have all the necessary values in the array b, so do the
		// calculation to see if we have a set of inputs that give a
		// result of 66.

		b[p] = a[0];

		// Variable r is the "result".
		var r = 0;
		r += b[0]
		r += 13
		r *= b[1];
		r /= b[2];
		r += b[3];
		r += 12;
		r *= b[4];
		r -= b[5];
		r -= 11;
		r += b[6];
		r *= b[7];
		r /= b[8];
		r -= 10;
	
		iter++;
		if (r == 66) {
			solutionCount++;
			writeln("solution=" + solutionCount + " iteration=" + iter + " values=" + b.toString() + " result=" + r);
		}
	}
	else {
		for (var i = 0; i < a.length; i++) {
			b[p] = a[0];
			calc(p+1, a.slice(1));
			rotate(a);
		}
	}
}

// This is the beginning of everything. It starts the calculation with a 
// position of 0 in the array b and a full array a, of possible input
// values.
calc(0, a);
