
angular
    .module('sudoku')
    .config([
        'RestangularProvider',
        function(RestangularProvider){

            RestangularProvider.setBaseUrl('http://localhost:3010/sudoku-api/');
            RestangularProvider.setDefaultHttpFields({cache: false});
        }
    ]);