angular
	.module('sudoku')
		.controller('sudokuController', [
			'$scope',
			'SudokuRest',
			function ($scope, SudokuRest) {
				var initGame = function () {
					var result = [
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0,0,0]];
					return result;
				};
				$scope.createGame = function () {
					$scope.rows = SudokuRest.createGame();
				};
				$scope.rows = initGame();
				console.log('rows: ', $scope.rows);
			}
		]);
