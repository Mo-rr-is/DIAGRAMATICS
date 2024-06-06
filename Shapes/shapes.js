// import the necessary functions from the library
import * as dg from 'https://cdn.jsdelivr.net/npm/diagramatics@1.4/dist/diagramatics.min.js'

// get the svg element
let mysvg = document.getElementById('mysvg');

// define the `draw` function
let draw = (...diagrams) => {
    dg.draw_to_svg(mysvg, dg.diagram_combine(...diagrams));
};

// build the diagram objects
// ------------------------------1. POLYGON------------------------------
let poly = dg.polygon([dg.V2(0,0), dg.V2(0,10), dg.V2(10,10)]);

// ------------------------------2. CURVE------------------------------
let curv = dg.curve([dg.V2(0,0), dg.V2(0,10), dg.V2(10,10)]);

// ------------------------------3. TEXT------------------------------
let sq = dg.square(20);
let tx = dg.text('Maurice');

// ------------------------------4. IMAGE------------------------------
let src = "https://photon-ray.xyz/img/rlogo.jpg";
let img = dg.image(src,10,10);

// ------------------------------5. LINE------------------------------
let ln = dg.line(dg.V2(1,0), dg.V2(2,0));

// ------------------------------6. RECTANGLE------------------------------
let p1 = dg.V2(0,0);
let p2 = dg.V2(10,10);
let rect = dg.rectangle_corner(p1,p2);

// Draw the objects
draw(rect);