angular.module('sudoku')
    .factory('SudokuRest', [
        '$http',
        function($http) {
            return {
                createGame: function () {
                    return $http.get('sudoku-api/generate').then(function (data) {
                            return data;
                    });
                }
            };
        }
    ]);