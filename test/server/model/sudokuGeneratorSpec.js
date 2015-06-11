describe("Sudoku Test", function () {
    it("generate sudoku game", function () {
        var sudokuGenerator = require('./../../../src/server/model/sudokuGenerator');
        var numberByFill = 15;
        var game = sudokuGenerator.generateGame(numberByFill).game();
        var counter = 0;
        for(var i = 0; i < game.length; ++i) {
            for(var j = 0; j < game[i].length; ++j) {
                var value = game[i][j];
                if(value !== 0) {
                    counter++;
                }
            }
        }
        expect(counter).toEqual(numberByFill);
    });
});
