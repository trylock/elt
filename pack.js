const concat = require('concat');
const minify = require('minify');
const fs = require('fs');

const sources = [
    'node_modules/@babel/polyfill/dist/polyfill.min.js',
    'build/pdfkit.standalone.js',
    'build/source.js',
    'build/io.js',
    //'build/io.standalone.js',
    'build/form.js'
];

const outputSource = 'build/bundle.js';

// create a single source file
concat(sources, outputSource);
