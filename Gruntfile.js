/* jshint node: true */
'use strict';

let babel = require('rollup-plugin-babel'),
    commonjs = require('rollup-plugin-commonjs'),
    includePaths = require('rollup-plugin-includepaths'),
    jsSrc = [
        'js/*.js',
        'js/**/*.js',
        '!js/build/*.js'
    ],
    jsMain = [
        // Main application files
        'js/**/main.js',
        '!js/build/*.js'
    ],
    jsLibs = [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/babel-polyfill/dist/polyfill.js',
        'node_modules/js-cookie/src/js.cookie.js',
        'js/build/main.js'
    ],
    sassIncludes = [];

module.exports = (grunt) => {
    grunt.initConfig({
        clean: {
            js: 'js/build/*',
            all: [
                'js/build/*',
                'css/main.css',
                'css/main.css.map',
            ]
        },
        jshint: {
            options: {
                esversion: 6
            },
            all: {
                src: jsSrc
            }
        },
        concat: {
            js: {
                src: jsMain,
                dest: 'js/build/temp.js'
            },
            all: {
                src: jsLibs,
                dest: 'js/build/main.js'
            }
        },
        rollup: {
            dev: {
                options: {
                    format: 'es',
                    plugins: function() {
                        return [
                            includePaths({
                                paths: jsMain
                            })
                        ];
                    }
                },
                files: [{
                    src: 'js/build/temp.js',  // May only contain 1 src.
                    dest: 'js/build/main.js',
                }]
            },
            build: {
                options: {
                    format: 'es',
                    sourceMap: true,
                    plugins: function() {
                        return [
                            includePaths({
                                paths: jsMain
                            }),
                            babel({ compact: false })
                        ];
                    }
                },
                files: [{
                    src: 'js/build/temp.js',  // May only contain 1 src.
                    dest: 'js/build/main.js',
                }]
            }

        },
        sass: {
            dev: {
                options: {
                    outputStyle: 'nested',
                    sourceMap: false,
                    includePaths: sassIncludes
                },
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            },
            prod: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true,
                    includePaths: sassIncludes
                },
                files: {
                    'css/main.css': 'sass/main.sass'
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'js/build/main.js',
                    'css/**/*.css',
                    '*.html'
                ]
            },
            js: {
                tasks: ['dev'],
                files: jsSrc
            },
            sass: {
                tasks: ['sass:dev'],
                files: [
                    'sass/*'
                ]
            }
        },
        uglify: {
            options: {
                // Causes errors when "true"
                mangle: false
            },
            app: {
                files: {
                    'js/build/app.min.js': 'js/build/main.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-rollup');
    grunt.loadNpmTasks('grunt-newer');
    grunt.registerTask('dev',
        "Join and rollup all the ES6, but don't transpile.",
        ['jshint:all', 'clean:js', 'concat:js', 'rollup:dev', 'concat:all']
    );
    grunt.registerTask('build',
        "Join, rollup, transpile, and uglify static JavaScript assets",
        ['jshint:all', 'clean:all', 'concat:js', 'rollup:build',  'concat:all',
         'uglify:app', 'sass:prod']
    );
    grunt.registerTask('code', ['dev', 'sass:dev', 'watch']);
};
