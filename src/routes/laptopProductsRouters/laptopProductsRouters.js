
const express = require('express');
const routers = express.Router();

const LaptopProductsController = require('../../app/controllers/laptopProductsController/laptopProductsController');

routers.get('/:select', LaptopProductsController.show);

module.exports = routers;