
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

    app.post('/sudoku-api/solve', function (req, res) {
        var game = req.body.game;
        var solver = model.getModel('sudokuBackTrakingSolver');
        var Sudoku = model.getModel('sudoku');
        var sudoku = new Sudoku(game);
        var status = solver.solve(sudoku);
        var result = {status: status, game: sudoku.game()};
        res.send(result);
    });
};