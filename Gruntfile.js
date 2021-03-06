module.exports = function(grunt) {

//    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        karma: {
            unit: {
                options: {
                    frameworks: [
                        "jasmine",
                        "requirejs"
                    ],
                    plugins: [
                        'karma-junit-reporter',
                        'karma-phantomjs-launcher',
                        'karma-jasmine',
                        'karma-requirejs'
                    ],
                    files: [
                        {pattern: "src/*.js", included: false},
                        {pattern: "test/**/*.test.js", included: false},
                        {pattern: "test/**/worker.*.js", included: false},
                        'test/config.main.js'
                    ],
                    browsers: ['PhantomJS'],
                    logLevel: 'INFO', //DEBUG
                    background: false
                }
            }
        },
        // maybe instead, use https://github.com/dcodeIO/grunt-closurecompiler
        uglify: {
            my_target: {
                options: {
                    compress: true,
                    mangle: {
                        except: ['notify', 'complete', '_transferable_']
                    },
                    preserveComments: "some"
                },
                files: {
                    'src/ng-webworker.min.js': ['src/ng-webworker.js'],
                    'src/worker_wrapper.min.js': ['src/worker_wrapper.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
