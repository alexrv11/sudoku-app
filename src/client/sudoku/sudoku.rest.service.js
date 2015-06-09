angular.module('sudoku')
    .factory('SudokuRest', [
        '$http',
        function($http) {
            return {
                createGame: function () {
                    $http.get('sudoku-api/generate').success(function(data, status, headers, config) {
                        console.log('data: ', data);
                    }).error(function(data, status, headers, config) {
                            console.log('errr: ', data);
                    });
                }
            };
        }
    ]);