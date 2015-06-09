angular
	.module('sudoku')
		.controller('sudokuController', [
			'$scope',
			'SudokuRest',
			'data',
			function ($scope, SudokuRest, data) {
				$scope.rows = angular.copy(data);

				$scope.createGame = function () {
					var result = SudokuRest.createGame();
					return result;
				}
			}
		]);
