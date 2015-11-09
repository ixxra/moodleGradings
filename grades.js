var csvjson = require('csvjson');

var table = csvjson.toObject('./2doparcial.csv').output;

grades = {};
table.forEach(function (row){
  grades[row.email] = row.grading;
});

console.log(JSON.stringify(grades));
