const express = require('express');
const mustache = require('mustache');

let app = express();

app.use(express.static("template"));

app.listen(80, "localhost", function() {
    console.log('Server listening on port 80...'); //lance un serveur web sur le port 80
});