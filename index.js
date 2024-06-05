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