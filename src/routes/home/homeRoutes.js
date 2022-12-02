const express = require('express');
const routers = express.Router();

const homeController = require('../../app/controllers/HomeController');

routers.get('/', homeController.show)

module.exports = routers;