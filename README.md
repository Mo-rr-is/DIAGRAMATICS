# Diagramatics
- It is a JavaScript library designed to easily create interactive diagrams.
- It provides a high-level API for creating and manipulating diagram elements and interactive controls.
## Importing it in your project
- Best practice to use it in your project is by importing it from a CDN (content delivery network).
```js
import * as dg from 'https://cdn.jsdelivr.net/npm/diagramatics@1.4/dist/diagramatics.min.js'
```
## Example 1
We are going to create a webpage that has an interactive diagram. The diagram is made up of two squares and is made interactive through the use of a slider that changes the position of the smaller square.
- To accomplish this, we need to create two files - a *html file* that creates the webpage and a *javascript file* to create the diagrams.
#### HTML File [index.html](index.html)
```html
<!DOCTYPE html>
<html>
    <head>
        <!-- css for 'Latin Modern Math' font -->
        <link href="https://fonts.cdnfonts.com/css/latin-modern-math" rel="stylesheet">
        <!-- css for interactive controls -->
        <link href="node_modules\diagramatics\css\diagramatics.css">
    </head>
    <body>
        <!-- svg component to draw the diagram -->
        <svg id="mysvg"></svg>

        <!-- div to hold interactive controls -->
        <div id="controldiv"></div>
    </body>
    <script src="index.js" type="module"></script>
</html>
```
- The first line is a declaration that the document is an HTML5 document.
- The we create a root element of the HTML document using ```<html> ... </html>```.
- Next is to create a Head element that containes meta-information about the document such as links to stylesheets.
- The first link given is the CSS for the 'Latin Modern Math' font from an external CDN. It allows the use of this specific font in the webpage.
- The other link includes CSS from a loacl directory. It is used to style interactive controls for the diagrams.
- The body section contains the main content of the HTML document.
- The first thing is to create an empty SVG (Scalable Vector Graphics) element with the ID `mysvg`. This is where the diagram will be drawn.
- Next is an empty Div element with the ID `controldiv` which is a container for the interactive controls that will manipulate the SVG diagram.
- Lastly is to include a JavaScript module from `index.js`. The `type="module"` attribute indicates that the script should be treated as a JavaScript module allowing the use of `import` and `export` statements for the modular code.
#### JavaScript File [index.js](index.js)
```js
// import the necessary functions from the library
import {square, draw_to_svg, diagram_combine, V2, Interactive} from 'https://cdn.jsdelivr.net/npm/diagramatics@1.4/dist/diagramatics.min.js'

// get the svg element
let mysvg = document.getElementById('mysvg');
let controldiv = document.getElementById('controldiv');

// define the `draw` function
let draw = (...diagrams) => {
    draw_to_svg(mysvg, diagram_combine(...diagrams));
};

// create the interactive object
let int = new Interactive(controldiv, mysvg);

// build the diagram objects
int.draw_function = (inp) => {
    let x = inp['x'];
    let big_sq = square(10).fill();
    let small_sq = square(2).fill('red').translate(V2(x,0));

    draw(big_sq, small_sq);
}

int.slider('x',-10,10,0);
int.draw();
```
- We import specific functions and classes from the `diagramatics` library hosted on a CDN.
- We then get references to the HTML elements with IDs `mysvg` and `controldiv`.
- We then create a function that takes any number of diagram objects and combines them using `diagram_combine`, and draws the combined diagram into the SVG element `mysvg` using `draw_to_svg`.
- Next is to create a new interactive object, passing the control div and the SVG element.
- Next is to define a function that will be called whenever the input (controlled by the slider) changes.
  - **inp['x']** gets the current value of the slider named `x`.
- Next is to create a slider control named `x` with a range from -10 to 10 and with an initial value of 0.
- Lastly is to call the draw function initially to render the diagram with the initial slider value.