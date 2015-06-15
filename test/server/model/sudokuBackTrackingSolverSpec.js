
describe("SudokuBackTrakingSolver Test", function() {
    var Sudoku = require('../../../src/server/model/sudoku');
    var sudokuSolver = require('../../../src/server/model/sudokuBackTrakingSolver');
    it("The sudoku is Filled", function() {

        var isSudokuFill = function (game) {
            for (var i = 0; i < game.length; ++i) {
                for (var j = 0; j < game.length; ++j) {
                    if ( game[i][j] === 0) {
                        return false;
                    }
                }
            }

            return true;
        };

        var game = [
            [0, 7, 0, 4, 6, 0, 0, 0, 0],
            [0, 0, 6, 0, 7, 0, 3, 8, 9],
            [0, 0, 2, 8, 5, 9, 0, 0, 6],
            [0, 5, 9, 0, 4, 0, 6, 0, 0],
            [0, 0, 0, 0, 3, 5, 0, 9, 0],
            [0, 2, 4, 9, 1, 8, 0, 0, 3],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 8, 1, 9, 0, 0]
        ];
        expect(isSudokuFill(game)).toBeFalsy();
        var sudoku = new Sudoku(game);
        var result = sudokuSolver.solve(sudoku);

        expect(result).toBeDefined();
        expect(result).toBeTruthy();
        expect(isSudokuFill(game)).toBeTruthy();
    });

    it("The start values do not changes", function() {

        var notChangesTheStartValues = function (startGame, solvedGame) {
            for(var i = 0; i < startGame.length; ++i) {
                for(var j = 0; j < startGame.length; ++j) {
                    if(startGame[i][j] !== 0) {
                        if( startGame[i][j] !== solvedGame[i][j]) {
                            return false;
                        }
                    }
                }
            }

            return true;
        };

        var startGame = [
            [0, 7, 0, 4, 6, 0, 0, 0, 0],
            [0, 0, 6, 0, 7, 0, 3, 8, 9],
            [0, 0, 2, 8, 5, 9, 0, 0, 6],
            [0, 5, 9, 0, 4, 0, 6, 0, 0],
            [0, 0, 0, 0, 3, 5, 0, 9, 0],
            [0, 2, 4, 9, 1, 8, 0, 0, 3],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 8, 1, 9, 0, 0]
        ];

        var game = [
            [0, 7, 0, 4, 6, 0, 0, 0, 0],
            [0, 0, 6, 0, 7, 0, 3, 8, 9],
            [0, 0, 2, 8, 5, 9, 0, 0, 6],
            [0, 5, 9, 0, 4, 0, 6, 0, 0],
            [0, 0, 0, 0, 3, 5, 0, 9, 0],
            [0, 2, 4, 9, 1, 8, 0, 0, 3],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 8, 1, 9, 0, 0]
        ];
        expect(notChangesTheStartValues(startGame, game)).toBeTruthy();
        var sudoku = new Sudoku(game);
        var result = sudokuSolver.solve(sudoku);

        expect(result).toBeDefined();
        expect(result).toBeTruthy();
        expect(notChangesTheStartValues(startGame, game)).toBeTruthy();
    });

    it("the numbers do not repeat in the same row", function() {
        var numberCounterMap = {};
        var numberCounter = function (game, map) {
            for(var i = 0; i < game.length; ++i) {
                for(var j = 0; j < game.length; ++j) {
                    if(game[i][j] === 0) {
                        continue;
                    }

                    var key = i + '-' + game[i][j];
                    if(map.hasOwnProperty(key)) {
                        console.log('key repeat: ' + key);
                        return false;
                    }

                    map[key] = 1;
                }
            }

            return true;
        };

        var game = [
            [0, 7, 0, 4, 6, 0, 0, 0, 0],
            [0, 0, 6, 0, 7, 0, 3, 8, 9],
            [0, 0, 2, 8, 5, 9, 0, 0, 6],
            [0, 5, 9, 0, 4, 0, 6, 0, 0],
            [0, 0, 0, 0, 3, 5, 0, 9, 0],
            [0, 2, 4, 9, 1, 8, 0, 0, 3],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 8, 1, 9, 0, 0]
        ];


        expect(numberCounter(game, numberCounterMap)).toBeTruthy();
        var sudoku = new Sudoku(game);
        var result = sudokuSolver.solve(sudoku);

        numberCounterMap = {};
        expect(result).toBeDefined();
        expect(result).toBeTruthy();
        expect(numberCounter(game, numberCounterMap)).toBeTruthy();
    });

    it("the numbers do not repeat in the same column", function() {
        var numberCounterMap = {};
        var numberCounterByColumn = function (game, map) {
            for(var i = 0; i < game.length; ++i) {
                for(var j = 0; j < game.length; ++j) {
                    if(game[i][j] === 0) {
                        continue;
                    }

                    var key = j + '-' + game[i][j];
                    if(map.hasOwnProperty(key)) {
                        console.log('key repeat: ' + key);
                        return false;
                    }

                    map[key] = 1;
                }
            }

            return true;
        };

        var game = [
            [0, 7, 0, 4, 6, 0, 0, 0, 0],
            [0, 0, 6, 0, 7, 0, 3, 8, 9],
            [0, 0, 2, 8, 5, 9, 0, 0, 6],
            [0, 5, 9, 0, 4, 0, 6, 0, 0],
            [0, 0, 0, 0, 3, 5, 0, 9, 0],
            [0, 2, 4, 9, 1, 8, 0, 0, 3],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 8, 1, 9, 0, 0]
        ];

        expect(numberCounterByColumn(game, numberCounterMap)).toBeTruthy();
        var sudoku = new Sudoku(game);
        var result = sudokuSolver.solve(sudoku);



        numberCounterMap = {};
        expect(result).toBeDefined();
        expect(result).toBeTruthy();
        expect(numberCounterByColumn(game, numberCounterMap)).toBeTruthy();

    });

    it("the numbers do not repeat in the same square", function() {

        var existSameNumberInTheSameSquare = function (game) {
            var squareMap = {};

            var numberSquare = function(row, col) {
                if(row < 3 && col < 3) {
                    return 1;
                }

                if(row < 3 && col >= 3 && col < 6) {
                    return 2;
                }

                if(row < 3 && col >= 6 && col < 9) {
                    return 3;
                }

                if(row >= 3 && row < 6 && col < 3) {
                    return 4;
                }

                if(row >= 3 && row < 6 && col >= 3 && col < 6) {
                    return 5;
                }

                if(row >= 3 && row < 6 && col >= 6 && col < 9) {
                    return 6;
                }

                if(row >= 6 && row < 9 && col < 3) {
                    return 7;
                }

                if(row >= 6 && row < 9 && col >= 3 && col < 6) {
                    return 8;
                }

                if(row >= 6 && row < 9 && col >= 6 && col < 9) {
                    return 9;
                }
            };

            for(var i = 0; i < game.length; ++i) {
                for(var j = 0; j < game.length; ++j) {
                    var value = game[i][j];

                    if(value === 0) {
                        continue;
                    }

                    var square = numberSquare(i, j);

                    var key = square + '-' + value;
                    if(squareMap.hasOwnProperty(key)) {
                        return true;
                    }

                    squareMap[key] = value;
                }
            }

            return false;
        };

        var game = [
            [0, 7, 0, 4, 6, 0, 0, 0, 0],
            [0, 0, 6, 0, 7, 0, 3, 8, 9],
            [0, 0, 2, 8, 5, 9, 0, 0, 6],
            [0, 5, 9, 0, 4, 0, 6, 0, 0],
            [0, 0, 0, 0, 3, 5, 0, 9, 0],
            [0, 2, 4, 9, 1, 8, 0, 0, 3],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 0, 8, 1, 9, 0, 0]
        ];

        var exist = existSameNumberInTheSameSquare(game);
        expect(exist).toBeDefined();
        expect(exist).toBeFalsy();

        var sudoku = new Sudoku(game);
        var result = sudokuSolver.solve(sudoku);

        exist = existSameNumberInTheSameSquare(game);
        expect(result).toBeDefined();
        expect(result).toBeTruthy();
        expect(exist).toBeDefined();
        expect(exist).toBeFalsy();

    });
});

