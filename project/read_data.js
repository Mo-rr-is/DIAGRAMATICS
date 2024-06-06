import parse from "https://cdn.jsdelivr.net/npm/csv-parse@5.5.6/+esm";
import fs from "https://cdn.jsdelivr.net/npm/fs-js@1.0.6/index.min.js";

const path = "./coordinates.csv";

fs.createReadStream(path)
    .pipe(parse({ delimiter:",", from_line: 1}))
    .on("data", function (row) {
        console.log(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        console.log('CSV file successfully processed.');
    });