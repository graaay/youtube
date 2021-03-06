module.exports = grunt => {
    require('time-grunt')(grunt);

    grunt.initConfig({
    	clean: {
    		temp: ['dist/js/vendor.min.js', 'dist/js/scripts.js', 'dist/js/scripts.min.js'],
    		all: ['dist/']
    	},
    	jshint: {
    		files: {
    			src: ['js/**/*.js']
    		}
    	},
    	concat: {
    		scripts: {
    			src: ['js/**/*.js', 'lib/**/*.js'],
    			dest: 'dist/js/scripts.js'
    		},
    		vendor: {
    			src: [
    				'bower_components/angular/angular.min.js', 
    				'bower_components/angular-messages/angular-messages.min.js', 
    				'bower_components/angular-route/angular-route.min.js'
    			],
    			dest: 'dist/js/vendor.min.js'
    		},
    		all: {
    			src: ['dist/js/vendor.min.js', 'dist/js/scripts.min.js'],
    			dest: 'dist/js/all.min.js'
    		}
    	},
    	uglify: {
    		scripts: {
    			src: ['dist/js/scripts.js'],
    			dest: 'dist/js/scripts.min.js'
    		}
    	},
    	cssmin: {
    		all: {
    			src: ['bower_components/bootstrap/dist/css/bootstrap.css', 'css/**/*.css'],
    			dest: 'dist/css/styles.min.css'
    		}
    	},
    	htmlmin: {
    		options: {
		      removeComments: true,
		      collapseWhitespace: true
		    },
    		views: {
    			expand: true,
    			cwd: 'view/',
    			src: ['*.html'],
    			dest: 'dist/view/'
    		}
    	},
    	copy: {
    		all: {
    			src: 'index-prod.html',
    			dest: 'dist/index.html'
    		}
    	}
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('prod', ['clean:all', 'jshint', 'concat:scripts', 'concat:vendor', 'uglify:scripts', 'concat:all', 'cssmin', 'htmlmin', 'copy', 'clean:temp']);
}