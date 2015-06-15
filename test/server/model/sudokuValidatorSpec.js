describe("RowValidator Test", function() {
    var Sudoku = require('../../../src/server/model/sudoku');
    var sudokuValidator = require('../../../src/server/model/sudokuValidator');

    it("the 5 number does not exist in the sudoku", function() {
        var game = [
            [1, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 0]
        ];
        var sudoku = new Sudoku(game);
        var row = 5;
        var value = 5;
        var result = sudokuValidator.existRow(sudoku, row, value);
        expect(result).toBeFalsy();
    });

    it("the 8 number exist in the sudoku", function() {
        var game = [
            [1, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 0]
        ];
        var sudoku = new Sudoku(game);
        var row = 5;
        var value = 8;
        var result = sudokuValidator.existRow(sudoku, row, value);
        expect(result).toBeTruthy();
    });

});

describe("ColumnValidator Test", function() {
    var Sudoku = require('../../../src/server/model/sudoku');
    var sudokuValidator = require('../../../src/server/model/sudokuValidator');

    it("the 5 number does not exist in the sudoku", function() {
        var game = [
            [1, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 9, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 0]
        ];
        var sudoku = new Sudoku(game);
        var col = 5;
        var value = 5;
        var result = sudokuValidator.existColumn(sudoku, col, value);
        expect(result).toBeFalsy();
    });

    it("the 9 number exist in the sudoku", function() {
        var game = [
            [1, 0, 0, 0, 0, 3, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 9, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 0]
        ];
        var sudoku = new Sudoku(game);
        var col = 5;
        var value = 9;
        var result = sudokuValidator.existColumn(sudoku, col, value);
        expect(result).toBeTruthy();
    });

});

describe("SquareValidator Test", function() {
    var Sudoku = require('../../../src/server/model/sudoku');
    var sudokuValidator = require('../../../src/server/model/sudokuValidator');

    it("the 5 number does not exist in first square", function() {
        var game = [
            [1, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 9, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 0]
        ];
        var sudoku = new Sudoku(game);
        var col = 1;
        var row = 1;
        var value = 5;
        var result = sudokuValidator.existSquare(sudoku, row, col, value);
        expect(result).toBeDefined();
        expect(result).toBeFalsy();
    });

    it("the 5 number exist in nine square", function() {
        var game = [
            [1, 0, 0, 0, 0, 3, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 9, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 0]
        ];

        var sudoku = new Sudoku(game);
        var col = 6;
        var row = 6;
        var value = 5;
        var result = sudokuValidator.existSquare(sudoku, row, col, value);
        expect(result).toBeDefined();
        expect(result).toBeTruthy();
    });

    it("the 8 number exist in six square", function() {
        var game = [
            [1, 0, 0, 0, 0, 3, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 9, 0, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 0]
        ];

        var sudoku = new Sudoku(game);
        var col = 8;
        var row = 5;
        var value = 8;
        var result = sudokuValidator.existSquare(sudoku, row, col, value);
        expect(result).toBeDefined();
        expect(result).toBeTruthy();
    });
});

