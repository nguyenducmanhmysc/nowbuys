
const laptopData = require('../../models/laptopModel');

class LaptopProductsController {

    // [GET] ../laptop-products/:select
    async show(req, res, next) {
        var productInf = {}, sort = {};
        if (req.params.select != 'all') {
            productInf = {
                brand: req.params.select
            };
        }
        if (req.query.sort == 'discount') {
            sort = {
                discount_percentage: 'descending'
            };
        } else {
            sort = {
                price: req.query.sort
            };
        }
        
        var title = (req.params.select == 'all')?'Tất cả': req.params.select;

        laptopData.find(productInf).sort(sort).lean()
            .then((laptopDatas) => {
                res.render('laptopProductsPage/laptopProductsPage', {
                    productInf: req.params.select,
                    sortInf: req.query.sort,
                    title: 'Laptop - ' + title,
                    laptopAPI: laptopDatas
                });
            })
            .catch(() => {
                return res.status(400).json({
                    error: 'Erorr en STATUS2'
                })
            });
    }
}

module.exports = new LaptopProductsController;