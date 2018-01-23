
module.exports = function (grunt) {
  grunt.initConfig({

    less: {
      desktop: {
        options: {
          cleancss: true,
          strictImports: true,
          compress: true,
          yuicompress: true,
          sourceMap: true,
          sourceMapRootpath: '.',
          optimization: 2
        },
        files: {
          'client/dist/TinyMCE_ss4/skin.min.css': 'client/src/TinyMCE_ss4/less/desktop/Skin.less'
        }
      },
      mobile: {
        options: {
          plugins : [ new (require('less-plugin-autoprefix'))({ browsers : [ 'last 2 versions', /* for phantom */'safari >= 4' ] }) ],
          compress: true,
          yuicompress: true,
          sourceMap: true,
          sourceMapRootpath: '.',
          optimization: 2
        },
        files: {
          'client/dist/TinyMCE_ss4/skin.mobile.min.css': 'client/src/TinyMCE_ss4/less/mobile/app/mobile-less.less'
        }
      },
      'content-mobile': {
        options: {
          cleancss: true,
          strictImports: true,
          compress: true
        },
        files: {
          'client/dist/TinyMCE_ss4/content.mobile.min.css': 'client/src/TinyMCE_ss4/less/mobile/content.less'
        }
      },
      content: {
        options: {
          cleancss: true,
          strictImports: true,
          compress: true
        },
        files: {
          'client/dist/TinyMCE_ss4/content.min.css': 'client/src/TinyMCE_ss4/less/desktop/Content.less'
        }
      },
      'content-inline': {
        options: {
          cleancss: true,
          strictImports: true,
          compress: true
        },
        files: {
          'client/dist/TinyMCE_ss4/content.inline.min.css': 'client/src/TinyMCE_ss4/less/desktop/Content.Inline.less'
        }
      }
    },


    copy: {
      skins: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'client/src/TinyMCE_ss4/fonts',
            src: [
              '**',
              '!*.json',
              '!*.md'
            ],
            dest: 'client/dist/TinyMCE_ss4/fonts'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'client/src/TinyMCE_ss4/img',
            src: '**',
            dest: 'client/dist/TinyMCE_ss4/img'
          }
        ]
      },
    },


    clean: {
      dist: ['client/dist']
    },


    watch: {
      skins: {
        files: ['client/src/TinyMCE_ss4/less/**/*'],
        tasks: ['less', 'copy:skins'],
        options: {
          spawn: false
        }
      }
    }
  });


  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', [
    'clean',
    'less',
    'copy',
  ]);

  grunt.registerTask('default', ['build']);
};
