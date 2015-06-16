angular
	.module('sudoku')
		.controller('sudokuController', [
			'$scope',
			'$timeout',
			'SudokuRest',
			function ($scope, $timeout, SudokuRest) {

				$scope.createGame = function () {
					SudokuRest.createGame().then(function (response) {
						$scope.game = angular.copy(response.data);
						$scope.initStateGame = angular.copy(response.data);
					});
				};

				$scope.solve = function () {
					SudokuRest.solve($scope.initStateGame).then(function (response) {
						if (response.data.status === true) {
							$scope.game = response.data.game;
						} else {
							$scope.status = 'The game has not a solution';
						}
					});
				};
				$scope.createGame();
			}
		]);
