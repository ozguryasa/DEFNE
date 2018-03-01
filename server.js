var express = require('express');
var app = express();
var PORT = 3000;
var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log("pricate route hit");
        next();

    },
    logger: function(req, res, next) {
        var datetime = new Date();
        console.log(req.method + " " + req.originalUrl, ' ' + datetime);
        next();
    }
}
app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About Us');
});
app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.listen(PORT, function() {
    console.log("Started on port:  " + PORT);
});