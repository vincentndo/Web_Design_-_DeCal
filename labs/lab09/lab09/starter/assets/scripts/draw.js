//
// A couple of useful functions to clear the canvas, and to draw some circles
//

/**
 * Clears the canvas
 */
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Fills a circle at the given location
 *
 * fillCircle(50, 40) draws a solid circle at (50, 40) with a (default) radius 20
 * fillCircle(20, 50, 10) draws a solid circle at (20, 50) with a radius 10
 *
 * @param {number} x
 * @param {number} y
 * @param {number?} radius
 */
function fillCircle(x, y, radius = 20) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
}

/**
 * Outlines a circle at the given location
 *
 * strokeCircle(50, 40) outlines a circle at (50, 40) with a (default) radius 20
 * strokeCircle(20, 50, 10) outlines a circle at (20, 50) with a radius 10
 *
 * @param {number} x
 * @param {number} y
 * @param {number?} radius
 */
function strokeCircle(x, y, radius = 20) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
}
