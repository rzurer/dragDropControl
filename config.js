'use strict';
exports.configure = function (app, express, browserify) {
    app.configure(function () {
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.set('view cache');
        app.use(express.bodyParser());
        app.use(express.static(__dirname + '/public'));
        app.use(express.logger());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(function (req, res, next) {
            res.header('Cache-Control', "max-age=31557600000, public");
            next();
        });
    });
    app.use('/js', browserify('./client'));
    app.configure('development', function () {
        app.use(express.errorHandler({dumpExceptions: true}));
    });
};