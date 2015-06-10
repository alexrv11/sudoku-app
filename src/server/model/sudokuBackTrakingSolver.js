var sudokuValidator = require('./sudokuValidator');

var solveSudoku = function(sudoku, row, col, value) {

    if( value > 9) {
        return false;
    }

    if(row >= 9) {
        return true;
    }

    if(col >= 9) {
        row = row + 1;
        return solveSudoku(sudoku, row, 0, value);
    }

    if(sudoku.value(row, col) !== 0) {
        col = col + 1;
        return solveSudoku(sudoku, row, col, value);
    }

    if(sudokuValidator.existRow(sudoku, row, value) ||
        sudokuValidator.existColumn(sudoku, col, value) ||
        sudokuValidator.existSquare(sudoku, row, col, value)) {

        var newValue = value + 1;
        return solveSudoku(sudoku, row, col, newValue);
    }

    sudoku.put(row, col, value);
    var nextCol = col + 1;

    if(solveSudoku(sudoku, row, nextCol, 1)) {
        return true;
    }

    var newValue = value + 1;
    sudoku.put(row, col, 0);

    return solveSudoku(sudoku, row, col, newValue);
};

module.exports = {
    solve: function(sudoku) {
        return solveSudoku(sudoku, 0, 0, 1);
    }
};