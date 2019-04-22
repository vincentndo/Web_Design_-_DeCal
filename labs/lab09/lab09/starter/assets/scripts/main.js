
// Usually we wouldn't do this, but making the canvas & context globally available here's easier for making this hands-on
let canvas, context, hueSlider;

// Step 3 Part 1/3
// Let's make a counter and initialize its value to 0





/**
 * A handler function that should run after the page successfully loads
 * We only want to use document.getElementById() after the browser finishes reading the source code of the page
 */
function pageLoaded() {

    // Get the canvas and a 2d drawing context
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    // Get the hue slider element
    hueSlider = document.getElementById("hue-slider");

    //
    // When the mouse moves...
    //

    /**
     * @param {MouseEvent} event
     */
    function mouseMoved(event) {
        // Step 3 Part 2/3
        // Every time the mouse moves, we increase the value of the counter by one





        // Step 1
        // Let's draw a circle with fillCircle() or strokeCircle() at the position of the mouse cursor!
        // When the user moves the mouse over the canvas, the browser runs this function
        // with a mouse event that contains information about the mouse position.

        // You can get the positions of the mouse from event.clientX and event.clientY -- these are X, Y
        // coordinate numbers that correspond to the position of the mouse on screen.

        // Perhaps first try to console.log() those 2 values and observe where the (0,0) position is on the page?
        // Since this function runs every time you move your mouse over the page, console.log() in this function will run multiple times too
        fillCircle(event.clientX, event.clientY);




        // For Step 3 Part 3/3, you'll modify the code written for Step 1
        // Once you've done Step 3 part 1 & 2, check out the radiusFunction?() above!
        // Rather than drawing circles at a uniform radius, we can make its radius vary by position & time





    }

    // Let the browser run mouseMoved() when the mouse moves on the canvas
    canvas.onmousemove = mouseMoved;

    //
    // When the user interacts with the slider...
    //

    /**
     * Handler function that runs when the hue slider is changed
     */
    function hueChanged() {
        // Step 2 Part 1/3
        // In index.html, the hue slider's value ranges from 0 to 359
        // Let's store the hue slider's value in a variable, perhaps named "hue"





        // Step 2 Part 2/3
        // Since setting the value of CSS properties in JavaScript follows the same format,
        // Let's look up the hsl(hue, saturation, lightness) color format at https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
        // And then set the context.fillStyle and context.strokeStyle with the color correctly formatted, hsl(hue, 100%, 50%) so it has 100% saturation and 50% lightness (feel free to change it up)

        // It might look like this, if hue is equal to 100.
        // (How can we make this work for any value of the hue variable?)

        // context.fillStyle = 'hsl(300, 100%, 50%)';




    }

    // Step 2 Part 3/3
    // Set a property on hueSlider so that the browser runs hueChanged() for us when the slider is changed
    // For this, you'll need to set the onchanged property of the hueSlider to the hueChanged function (just like how we
    // set a function to be run onclick in lecture)





    //
    // When the window resizes...
    //

    /**
     * Handler function that runs every time the window is resized
     */
    function windowResized() {
        // While setting the canvas width/height, the drawing is cleared
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // We manually trigger a hue change because the fill/stroke color is cleared too
        hueChanged();
    }

    // We let the browser run windowResized() for us when the window size changes
    window.onresize = windowResized;
    // We manually trigger the window resize on page load
    windowResized();

}

// We let the browser run pageLoaded() for us when the page is loaded
window.onload = pageLoaded;

//
// A couple of functions that returns some funky radius, given the positions "x", "y" and "t" (time)
//

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction1(x, y, t) {
    return 20 * Math.abs(Math.sin(t / 100 * Math.PI));
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction2(x, y, t) {
    return 20 * Math.random();
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction3(x, y, t) {
    return t % 50;
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction4(x, y, t) {
    return 20 * Math.abs(Math.sin(x / 100 * Math.PI) * Math.sin(y / 100 * Math.PI));
}
