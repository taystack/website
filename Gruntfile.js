module.exports = function(grunt) {

  _ = grunt.util._
  path = require('path')

  baseDirectory = '.'

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      bower: ['temp/bower_components'],
      images: ['temp/images'],
      all: ['build', 'temp']
    },
    haml: {
      options: {
        language: 'coffee',
        placement: 'amd',
        uglify: true
      },
      compile: {
        files: [
          {
            expand: true,
            filter: 'isFile',
            cwd: "" + baseDirectory + "/src/templates",
            dest: "" + baseDirectory + "/temp/scripts/templates",
            src: '**/*.haml',
            ext: '.html'
          }
        ],
        options: {
          target: 'html'
        }
      },
      index: {
        dest: "" + baseDirectory + "/temp/index.html",
        src: "" + baseDirectory + "/src/templates/index.haml"
      }
    },
    sass: {
      compile: {
        dest: "" + baseDirectory + "/temp/styles/main.css",
        src: "" + baseDirectory + "/src/styles/main.scss",
        options: {
          loadPath: path.join(path.resolve('.'), baseDirectory, 'temp')
        }
      }
    },
    livescript: {
      compile: {
        files: [{
          expand: true,
          filter: 'isFile',
          cwd: 'src/scripts',
          dest: 'temp/scripts',
          src: '**/*.ls',
          ext: '.js'
        }],
        options: {
          bare: true
        }
      }
    },
    symlink: {
      bower: {
        src: 'bower_components',
        dest: 'temp/bower_components'
      },
      images: {
        src: 'src/images',
        dest: 'temp/images'
      }
    },
    watch: {
      haml: {
        files: 'src/templates/**/*.haml',
        tasks: 'haml:compile',
        options: {
          interrupt: true
        }
      },
      compass: {
        files: 'src/styles/**/*.scss',
        tasks: 'sass:compile',
        options: {
          interrupt: true
        }
      },
      livescript: {
        files: ['src/**/*.coffee'],
        tasks: ['livescript:compile']
      },
      bower: {
        files: ['bower_components/**/*'],
        tasks: ['symlink:bower']
      },
      images: {
        files: ['images/**/*'],
        tasks: ['symlink:images']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-livescript');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask(
    'default',
    [
      'clean:all',
      'symlink:bower',
      'symlink:images',
      'livescript',
      'haml',
      'sass',
      'watch'
    ]
  );

  grunt.registerTask('scss', ['sass']);

};