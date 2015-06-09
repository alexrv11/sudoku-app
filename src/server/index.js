
/**
 * configuration the server express application and load rest api
 *
 * @param <App.express> app
 * @return <function>
 */
module.exports = function(app) {


    app.get('/sudoku-api/generate', function (req, res) {
        res.send(['1', '5']);
    });
};