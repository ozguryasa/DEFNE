var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log("pricate route hit sdfsd");
        next();

    },
    logger: function(req, res, next) {
        var datetime = new Date();
        console.log(req.method + " " + req.originalUrl, ' ' + datetime);
        next();
    }
}
module.exports = middleware;