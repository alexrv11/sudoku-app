
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
        },
        wiredep: {
            app: {
                src: ['src/client/index.html']
            }
        }
    });

    //Client and Server dependencies
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('build', [
        //'jshint'
        'wiredep'
    ]);

    grunt.registerTask('test', [
        //'jshint'
    ]);
};
