const express = require('express');
const routers = express.Router();

const errorsController = require('../../app/controllers/error/ErrorsController');

routers.get('/', errorsController.show)

module.exports = routers;