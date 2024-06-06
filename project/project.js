// import the necessary functions from the library
import { annotation } from 'https://cdn.jsdelivr.net/npm/diagramatics@1.4/dist/diagramatics.min.js';
import * as dg from 'https://cdn.jsdelivr.net/npm/diagramatics@1.4/dist/diagramatics.min.js'

// get the svg element
let mysvg = document.getElementById('mysvg');

// define the `draw` function
let draw = (...diagrams) => {
    dg.draw_to_svg(mysvg, dg.diagram_combine(...diagrams));
};

// ------------------------------FIGURE------------------------------
let corner1 = dg.V2(0,0);
let corner2 = dg.V2(60,60);
let corner3 = dg.V2(0,60);
let corner4 = dg.V2(60,0);
let fig = dg.rectangle_corner(corner1,corner2).fill('lightgreen').stroke('green').strokewidth(4);
let annot1 = annotation.length(corner1,corner3,'60 um',-4,4).stroke('red');
let annot2 = annotation.length(corner1,corner4,'60 um',4,4).stroke('red');

// ------------------------------FILAMENT------------------------------
let bead1_pos = dg.V2(5,0);
let bead2_pos = dg.V2(0,0);
let bead_size = 0.7;
let rod_size = 2.5;
let rod1 = dg.line(bead1_pos,bead2_pos).stroke('black').strokewidth(rod_size);
let bead1 = dg.circle(bead_size).position(bead1_pos).fill('black').stroke('black');
let bead2 = dg.circle(bead_size).position(bead2_pos).fill('black').stroke('black');

// Draw the objects
draw(fig,annot1,annot2,bead1,bead2,rod1);