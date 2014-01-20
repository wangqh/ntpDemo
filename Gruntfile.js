/**
 * Created by wqh on 14-1-20.
 */
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        concat: {
            option: {
                separator: ";"
            },
            dist: {   }
        },
        uglify: {
            option: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm--dd') %> */\n"
            },
            dist: {
                files: {
                    'dist/js/webimOfSide.min.js': 'js/webimOfSide.js',
                    'dist/js/jquery.jalert.min.js': 'js/jquery.jalert.js',
                    'dist/js/jquery.sortable.min.js': 'js/jquery.sortable.js',
                    'dist/js/message_zh.min.js': 'js/message_zh.js',
                    'dist/js/templDetailPages.min.js': 'js/templDetailPages.js'
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: ['css/', 'theme/css/', 'theme-profile/css/', 'theme-series/css/'],
                src: ['*.css', '!*.min.css'],
                dest: ['css/', 'theme/css/', 'theme-profile/css/', 'theme-series/css/'],
                ext: ".min.css"
            }
        },
        qunit: {
            files: '*.html'
        },
        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
            option: {
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
}