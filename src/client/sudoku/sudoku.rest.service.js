angular.module('sudoku')
    .factory('SudokuRest', [
        '$http',
        function($http) {
            return {
                createGame: function () {
                    return $http.get('sudoku-api/generate').then(function (data) {
                            return data;
                    });
                },
                solve: function (game) {
                    return $http.post('sudoku-api/solve', {game: game}).then(function (data) {
                        return data;
                    });
                }
            };
        }
    ]);