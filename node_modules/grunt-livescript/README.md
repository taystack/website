grunt-livescript
========================

Livescript Grunt Contrib task


Usage
----

In a gruntfile, use similar to grunt-contrib-coffee

```js
grunt.loadNpmTasks('grunt-livescript');

// snip

livescript: {
    src: {
      files: {
        'path/to/result.js': 'path/to/source.ls', // 1:1 compile
       'path/to/another.js': ['path/to/sources/*.ls', 'path/to/more/*.ls'] // compile and concat into single file
      }
    }
  }
```
