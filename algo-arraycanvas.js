// floodFill(canvas, x, y, target)
// canvas is an array of array of numbers representing
// colored pixels (think MSPaint)
// x, y is your start point, target is your new "color"
// change the value at x, y on the canvas to
// the target value, then all points on the canvas
// that were the original color and contiguous with the
// point at x, y (no diagonals!) to the target color.
// example
// canvas is:
// [[3, 2, 4, 4, 4],
//  [4, 4, 4, 3, 3],
//  [4, 1, 1, 4, 4]]
// x, y is 2, 1 and target is 0
// canvas[y][x]
// canvas becomes:
// [[3, 2, 0, 0, 0],
//  [0, 0, 0, 3, 3],
//  [0, 1, 1, 4, 4]]
// another example, if canvas is:
// [[1, 0, 2, 0, 1],
//  [1, 0, 1, 1, 0],
//  [1, 0, 1, 0, 0],
//  [2, 0, 0, 2, 1]]
// x, y is 1, 2 and target is 9
// canvas[2][1]
// canvas becomes:
// [[1, 9, 2, 0, 1],
//  [1, 9, 1, 1, 0],
//  [1, 9, 1, 0, 0],
//  [2, 9, 9, 2, 1]]
// if x, y was intead 2, 1 and target was 9
// canvas would become:
// [[1, 0, 2, 0, 1],
//  [1, 0, 9, 9, 0],
//  [1, 0, 9, 0, 0],
//  [2, 0, 0, 2, 1]]
// you don't need to return anything,
// but if you feel the need to, use null or undefined
// make sure you don't go outside your canvas area
// each function call will recurse 0 to 4 times
// we may need something like an if statement

// OUR PSEUDO CODE

// Parameters are the canvas, x axis, y axis, target to change.

// Change x, y to target "color"

// if ((x - 1) == x) change it to target

// if ((x + 1) == x) change it to target

// if ((y - 1) == y) change it to target

// if ((y + 1) == y) change it to target

// OUR ATTEMPT AT ACTUAL SCRIPT

// function floodFill(canvas, x, y, target) {
//     var c = canvas[x][y];
//     canvas[x][y] = target;
//     if (canvas[x - 1][y] == c){
//         floodFill(canvas,(x - 1),y,target)
//     }

// }

// test case:
// var canvas=[[3, 2, 4, 4, 4],
//             [4, 4, 4, 3, 3],
//             [4, 1, 1, 4, 4]]
// floodFill(canvas, 2, 1, 0)


// USING THE INTERNET TO HELP

function floodFill(canvas, x, y, newValue) {
    var target = canvas[y][x];

    function sweepAround(x,y) {
        if (x >= 0 && x < canvas.length && y >= 0 && y < canvas[x].length) {
            if (canvas[x][y] === target) {
                canvas[x][y] = newValue;
                sweepAround(x-1, y);
                sweepAround(x+1, y);
                sweepAround(x, y-1);
                sweepAround(x, y+1);
            }
        }
    }

    sweepAround(x,y);
}

var canvas = [[3, 2, 4, 4, 4],
                [4, 4, 4, 3, 3],
                [4, 1, 1, 4, 4]]
floodFill(canvas, 2, 1, 0);


console.log(canvas)
// should print:
// [[3, 2, 0, 0, 0], [0, 0, 0, 3, 3], [0, 1, 1, 4, 4]]
