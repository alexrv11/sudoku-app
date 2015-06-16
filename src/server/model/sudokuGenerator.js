var initGame = function () {
    var result = [];
    for (var i = 0; i < 9; ++i) {
        var newRow = [];
        for (var j = 0; j < 9; ++j) {
            newRow.push(0);
        }
        result.push(newRow);
    }
    return result;
};

module.exports = {
    generateGame: function (number) {
        var sudokuValidator = require('./sudokuValidator');
        var Sudoku = require('./sudoku');
        var game = initGame();
        var sudoku = new Sudoku(game);
        while (number > 0) {
            var row = Math.round(Math.random() * 8);
            var col = Math.round(Math.random() * 8);
            var value = Math.round(Math.random() * 8);
            if (sudoku.value(row, col) === 0) {
                if (!sudokuValidator.existRow(sudoku, row, value)) {
                    if (!sudokuValidator.existColumn(sudoku, col, value)) {
                        if (!sudokuValidator.existSquare(sudoku, row, col, value)) {
                            sudoku.put(row, col, value);
                            number--;
                        }
                    }
                }
            }
        }

        return sudoku;
    }
};