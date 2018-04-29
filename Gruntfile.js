module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            main: ['_dist/']
        },
        jade: {
            main: { files: { '_dist/index.html' : 'src/index.jade' } }
        },
        sass: {
            main: { files: { '_dist/style.css' : 'src/sass/00_main.sass'} }
        },
        autoprefixer: {
            options: { browsers: ['last 2 versions', 'ie 8', 'ie 9'] },
            main: { files: { '_dist/style.css' : '_dist/style.css' } }
        },
        cssmin: {
            main: { files: { '_dist/style.min.css' : '_dist/style.css' } }
        },
        uglify: {
            main: {
                src: 'src/javascript/**/*.js',
                dest: '_dist/app.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: '_dist',
                src: '**',
                dest: ''
            }

        },
        connect: {
            main: {
                options: {
                    port: 8080,
                    livereload: true,
                    base: '_dist'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/javascript/**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['src/jade/**/*.jade'],
                tasks: ['jade'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/sass/**/*.sass'],
                tasks: ['css'],
                options: {
                    spawn: false
                }
            }
        },
        symlink: {
            res: {
                src: 'res',
                dest: '_dist/res'
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-symlink');

    grunt.registerTask('init', ['clean', 'symlink']);
    grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('compile', ['jade', 'css', 'uglify']);
    grunt.registerTask('build', ['init', 'compile', 'copy:main']);
    grunt.registerTask('default', ['init', 'compile', 'connect', 'watch']);
};
