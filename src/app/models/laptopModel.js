const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laptopData = new Schema({
    name: { type: 'string' },
    link_img: { type: 'string' },
    desc: { type: 'string' },
    price: { type: 'number' },
    discount_percentage: { type: 'number' },
    show_home: { type: 'boolean' },
    brand: { type: 'String' }
});

module.exports = mongoose.model('laptopData', laptopData);