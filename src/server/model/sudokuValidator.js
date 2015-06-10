var exist = function (sudoku, value, rowStart, rowEnd, colStart, colEnd) {
    var game = sudoku.game();

    for(var i = rowStart; i < rowEnd; ++i) {
        for(var j = colStart; j < colEnd; ++j) {

            var item = game[i][j];
            if(item === value) {
                return true;
            }
        }
    }

    return false;
};

module.exports = {
    existColumn: function(sudoku, col, value) {

        return exist(sudoku, value, 0, sudoku.rows, col, col + 1);
    },
    existRow: function(sudoku, row, value) {

        return exist(sudoku, value, row, row + 1, 0, sudoku.cols);
    },
    existSquare: function(sudoku, row, col, value) {
        var rowStartLimit = parseInt(row / 3) * 3;
        var colStartLimit = parseInt(col / 3) * 3;
        var rowEndLimit = rowStartLimit + 3;
        var colEndLimit = colStartLimit + 3;

        return exist(sudoku, value, rowStartLimit, rowEndLimit, colStartLimit, colEndLimit);
    }
};