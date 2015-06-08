
/**
 * configuration the server express application and load rest api
 *
 * @param <App.express> app
 * @return <function>
 */
module.exports = function(app) {


    //load api URI's
    var path = require('path');
    var fs = require('fs');
    var util = require('util');
    var routePath = 'access-layer/rest-apis';
    var routesPath = path.join(__dirname, routePath);
    var dirs = fs.readdirSync(routesPath);
    for (var i = dirs.length - 1; i >= 0; i--) {
        var dirName = dirs[i];
        var moduleName = util.format('./%s/%s', routePath, dirName);
        var apiRoute = util.format('/rest-api/%s', dirName);
        var api = require(moduleName)(app);
        app.use(apiRoute, api);
    }
};