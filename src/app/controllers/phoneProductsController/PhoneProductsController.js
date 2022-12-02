
const phoneData = require('../../models/phoneModel')

class PhoneProductsController {

    // [GET] ./phone-products/:select
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

        phoneData.find(productInf).sort(sort).lean()
            .then((phoneDatas) => {
                res.render('phoneProductsPage/phoneProductsPage', {
                    productInf: req.params.select,
                    sortInf: req.query.sort,
                    title: 'Điện thoại - ' + title,
                    phoneAPI: phoneDatas
                });
            })
            .catch(() => {
                return res.status(400).json({
                    error: 'Erorr en STATUS2'
                })
            });
    }
};

module.exports = new PhoneProductsController;