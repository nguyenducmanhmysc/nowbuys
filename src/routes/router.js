
const homeRouters = require('./home/homeRoutes');
const phoneProductsRouters = require('./phoneProductsRouters/phoneProductsRouters');
const laptopProductsRouters = require('./laptopProductsRouters/laptopProductsRouters');
const errorsRouters = require('./error/errorsRouters');

function router(app) {
    app.use('/', homeRouters);
    app.use('/phone-products', phoneProductsRouters);
    app.use('/laptop-products', laptopProductsRouters);
    app.use('/:slug', errorsRouters);
    
};

module.exports = router;