angular
	.module('sudoku')
		.controller('sudokuController', [
			'$scope',
			'SudokuRest',
			function ($scope, SudokuRest) {

				$scope.createGame = function () {
					SudokuRest.createGame().then(function (response) {
						$scope.game = response.data;
						$scope.initStateGame = response.data
					});
				};

				$scope.restart = function () {
					$scope.game = $scope.initStateGame
				};
				$scope.createGame();
			}
		]);
