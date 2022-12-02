
class ErrorsController {
    // GET /
    show(req, res, next) {
        res.render('error/errorPage', {layout: 'notHeaderFooter.handlebars'});
    }
}

module.exports = new ErrorsController;