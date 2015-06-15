module.exports = {
    getModel: function (modelName) {
        return require('./' + modelName)
    }
};