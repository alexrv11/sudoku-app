
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            allFiles: [
                'src/index.js',
                'src/client/**/*.js',
                '!src/client/assets/**/*.js',
                'src/server/**/*.js',
                'test/**/*.js',
                'support/karma/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    //Client and Server dependencies
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', [
        'jshint'
    ]);

    grunt.registerTask('test', [
        'jshint'
    ]);
};
