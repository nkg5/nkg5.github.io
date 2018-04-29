module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            main: ['build/']
        },
        jade: {
            main: { files: { 'build/index.html' : 'src/index.jade' } }
        },
        sass: {
            main: { files: { 'build/style.css' : 'src/sass/00_main.sass'} }
        },
        autoprefixer: {
            options: { browsers: ['last 2 versions', 'ie 8', 'ie 9'] },
            main: { files: { 'build/style.css' : 'build/style.css' } }
        },
        cssmin: {
            main: { files: { 'build/style.min.css' : 'build/style.css' } }
        },
        uglify: {
            main: {
                src: 'src/javascript/**/*.js',
                dest: 'build/app.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'build',
                src: '**',
                dest: ''
            }

        },
        connect: {
            main: {
                options: {
                    port: 8080,
                    base: '.',
                    keepalive: true
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('compile', ['jade', 'css', 'uglify']);
    grunt.registerTask('default', ['clean', 'build', 'copy']);
};
