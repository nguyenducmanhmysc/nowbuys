
const express = require('express');
const routers = express.Router();

const PhoneProductsController = require('../../app/controllers/phoneProductsController/PhoneProductsController')

routers.get('/:select', PhoneProductsController.show);

module.exports = routers;
