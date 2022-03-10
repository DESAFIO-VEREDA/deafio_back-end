const express = require('express');
const studentsController = require('./students/router');

const root = express.Router({ mergeParams: true });

root.use('/students', studentsController);

module.exports = root;