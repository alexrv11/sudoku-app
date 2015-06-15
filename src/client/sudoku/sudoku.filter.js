angular.module('sudoku')
    .filter('showNumber', function () {
        return function (number) {
            console.log('number: ', number);
            return number == 0 ? '':number;
        };
    });
