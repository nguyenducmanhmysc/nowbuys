const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const smartWatchData = new Schema({
    name: { type: 'string' },
    link_img: { type: 'string' },
    desc: { type: 'string' },
    price: { type: 'string', default: 'abc' },
    discount_percentage: { type: 'string' },
    show_home: { type: 'boolean' },
    brand: { type: 'String' }
});

module.exports = mongoose.model('smartWatchData', smartWatchData);