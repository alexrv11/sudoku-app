
module.exports = function (game) {

    this.rows = game.length;
    this.cols = game.length;

    this.value = function(row, col) {
        return game[row][col];
    };

    this.put = function(row, col, value) {
        game[row][col] = value;

        return game[row][col] == value;
    };

    this.game = function() {
        return game;
    }
};