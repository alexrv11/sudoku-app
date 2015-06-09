angular
	.module('sudoku')
		.controller('sudokuController',[
			'$scope',
			'SudokuRest',
			'data',
			function ($scope, SudokuRest, data) {
				$scope.rows = angular.copy(data);

				$scope.createGame = function () {
					console.log('creating new game');
					var result = SudokuRest.createGame();
					console.log(result);
					return result;
				}
			}
		]);
