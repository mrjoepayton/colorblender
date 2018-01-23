module.exports = function (grunt) {
	
	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		modernizr: {
			dist: {
				"crawl": false,
				"customTests": [],
				"dest" : "assets/js/libs/modernizr-custom.js",
				"tests": [
					"svg",
					"touchevents",
					"flexbox",
					"mediaqueries",
					"rgba",
					"inlinesvg"
				],
				"options": [
					"html5shiv",
				    "setClasses"
				],
				"uglify": true
			}
		},
		
		copy: {
			main: {
				src: 'node_modules/webfontloader/webfontloader.js',
				dest: 'assets/js/libs/webfontloader.js',
			},
		},

		sass: {
			dist: {
				
				options: {
				sourceMap: false,
				},

				files: {
				'assets/css/style.css': 'assets/sass/compile.scss'
				}
			}
		},

		concat: {
			options: {
				stripBanners:true
			},
			dist: {
				src: [
					'node_modules/jquery/dist/jquery.js',
					'node_modules/js-cookie/src/js.cookie.js',
					'node_modules/history.js/history.js'
				],
				dest:'assets/js/plugins.js',
			}
		},
		
		uglify: {
			js: {
				files: {
					'assets/js/plugins.min.js': ['assets/js/plugins.js'],
					'assets/js/scripts.min.js': ['assets/js/scripts.js']
				}
			}
		},
		
		cssmin: {
			options: {
				specialComments:0
			},
			target: {
				files: [{
					expand: true,
					cwd: 'assets/css',
					src: ['*.css', '!*.min.css'],
					dest: 'assets/css',
					ext: '.min.css'
				}]
			}
		},
		
		watch: {
			sass: {
				files: ['assets/**/*.scss'],
				tasks: ['slimcss'],
			},
			js: {
				files: ['assets/**/*.js', '!assets/**/*.min.js'],
				tasks: [ 'slimjs'],
			}
			
		},
		
		notify: {
			buildcss: {
				options: {
					message: 'CSS is ready!'
				}
			},
			buildjs: {
				options: {
					message: 'JAVASCRIPT is ready!'
				}
			}
		},
		
		
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');

	// Register tasks
	grunt.registerTask('default', ['copy', 'modernizr', 'buildcss', 'buildjs']);

	grunt.registerTask('buildcss', ['sass', 'cssmin']);
	grunt.registerTask('slimcss', ['sass', 'notify:buildcss']);

	grunt.registerTask('buildjs', ['concat', 'uglify']);
	grunt.registerTask('slimjs', ['uglify', 'notify:buildjs']);

};