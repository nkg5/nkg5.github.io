module.exports = function(grunt) {

    grunt.initConfig({
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '..\\index.html': "index.html"
                }
            }
        },
        sass:{
            dist: {
                options: {
                    style: 'compressed',
                    sourceMap: false
                },
                files: [{
                        src: 'sass/main.scss',
                        dest: '../style.css'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    '..\\app.js': ['javascript\\**\\*.js']
                }
            }
        },

        watch: {
            html: {
                files: ['index.html'],
                tasks: ['htmlmin']
            },
            sass: {
                files: ['sass\\**\\*.sass'],
                tasks: ['sass']
            },
            js: {
                files: ['javascript\\**\\*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['htmlmin', 'sass', 'uglify', 'watch']);
}
