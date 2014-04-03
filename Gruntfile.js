/**
 * Created by wqh on 14-1-20.
 */
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            options: {
                separator: ";"
            },
            dist: {   }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm--dd') %> */\n"
            },
            dist: {
                files: {
                    'js/webimOfSide.min.js': 'js/webimOfSide.js',
                    'js/jquery.jalert.min.js': 'js/jquery.jalert.js',
                    'js/jquery.sortable.min.js': 'js/jquery.sortable.js',
                    'js/messages_zh.min.js': 'js/messages_zh.js',
                    'js/templDetailPages.min.js': 'js/templDetailPages.js'
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css', '!*.*.css'],
                dest: 'css/',
                ext: ".min.css"
            },
            theme: {
                expand: true,
                cwd: 'theme/',
                src: ['*/css/*.css', '*/css/!*.min.css'],
                dest: 'theme/',
                ext: ".min.css"
            },
            theme_profile: {
                expand: true,
                cwd: 'theme-profile/default/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'theme-profile/default/css/',
                ext: ".min.css"
            },
            theme_series: {
                expand: true,
                cwd: 'theme-series/default/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'theme-series/default/css/',
                ext: ".min.css"
            }
        },
        qunit: {
            files: '*.html'
        },
        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("test", ["jshint", "qunit"]);
    grunt.registerTask("default", ["jshint", "qunit", "uglify", "cssmin"]);
};