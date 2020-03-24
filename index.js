const express = require('express');
const path = require('path');

const app = express();

app.get(['/', '/index'], function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/map', function(req, res) {
	res.sendFile(path.join(__dirname, 'map.html'));
});

const server = app.listen(80, '127.0.0.1');
