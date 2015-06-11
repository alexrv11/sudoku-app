
/**
 * configuration the server express application and load rest api
 *
 * @param <App.express> app
 * @return <function>
 */
module.exports = function(app) {
    var model = require('./model');
    app.get('/sudoku-api/generate', function (req, res) {
        var generator = model.getModel('sudokuGenerator');
        var sudoku = generator.generateGame(20);
        res.send(sudoku.game());
    });
};