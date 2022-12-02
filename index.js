const express = require('express');
const app = express();

// For local dev
// const port = 3000
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });

// For Heroku.com 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

const morgan = require('morgan');
app.use(morgan('combined'));

// Set path for src css, js for frontend
const path = require('path');
app.use(express.static(path.join(__dirname, 'src', 'public')));


// Handlebars
const handlebars = require('express-handlebars');
const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resources/views');


// Helper function of handlebars
const helperHandlebar = handlebars.create({});
helperHandlebar.handlebars.registerHelper('currencyFormat', function (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
})
helperHandlebar.handlebars.registerHelper('priceDiscounted', function (price, discount) {
    return (price - price/100 * discount);
})
helperHandlebar.handlebars.registerHelper('comparisonStringToChecked', function (s1, s2) {
    if (s1 == s2) 
        return 'checked';
    return '';
})
helperHandlebar.handlebars.registerHelper('shuffle', function (arr) {
    return arr.sort(() => Math.random() - 0.5);
})


// Connect to database
const DB = require('./src/config/Database');
DB.connect();


const routers = require('./src/routes/router');
routers(app);
