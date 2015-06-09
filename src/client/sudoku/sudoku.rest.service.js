angular.module('sudoku')
    .factory('SudokuRest', [
        'Restangular',
        function(Restangular) {
            return {
                createGame: function () {
                    Restangular.all('generate').getList()  // GET: /users
                        .then(function(game) {
                            console.log('Game: ', game);
                            return game[0];
                        })
                }
            };
        }
    ]);