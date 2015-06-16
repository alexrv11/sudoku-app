
describe('Sudoku Test', function() {
	var Sudoku = require('../../../src/server/model/sudoku');
    it('the Sudoku is created', function() {
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
		expect(sudoku).toBeDefined();
    });

	it('get value of the sudoku', function() {
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
		var result = sudoku.value(1, 7);
		expect(result).toEqual(1);
	});

	it('change value of the sudoku', function() {
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
		var row = 1;
		var col = 7;
		var newValue = 8;
		var result = sudoku.put(row, col, newValue);
		var value = sudoku.value(row, col);
		expect(result).toEqual(true);
		expect(value).toEqual(newValue);
	});

	it('get game of the sudoku', function() {
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
		var result = sudoku.game();
		expect(result).toBeDefined();
		expect(result[1][7]).toEqual(1);
	});
});