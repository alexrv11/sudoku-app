angular.module('sudoku')
    .filter('showNumber', function () {
        return function (number) {
            return number === 0 ? '':number;
        };
    });
