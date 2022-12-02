
const phoneData = require('../models/phoneModel')
const laptopData = require('../models/laptopModel')
const smartWatchData = require('../models/smartWatchModel')

class phoneDataController {
    // GET /
    async show(req, res, next) {
        const promise1 = phoneData.find({show_home: true}).lean().exec()
        const promise2 = laptopData.find({show_home: true}).lean().exec()
        const promise3 = smartWatchData.find({show_home: true}).lean().exec()
        Promise.all([promise1, promise2, promise3])
            .then(([phoneDatas, laptopDatas, smartWatchDatas]) => {
                res.render('home', { 
                    layout: 'main.handlebars',
                    title: 'Nowbuys',
                    phoneAPI: phoneDatas, 
                    laptopAPI: laptopDatas,
                    smartWatchAPI: smartWatchDatas
                });
            })
            .catch(() => {
                return res.status(400).json({
                    error: 'Erorr en STATUS2'
                })
            })
    }
}

module.exports = new phoneDataController();