'use strict';

/////////////////////////////////////////////////////////////////////////
//                      PLUGINS & MODULES                              //
/////////////////////////////////////////////////////////////////////////


let gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    babel           = require('gulp-babel'),
    browserify      = require('browserify'),
    concat          = require('gulp-concat'),
    csscomb         = require('gulp-csscomb'),
    csso            = require('gulp-csso'),
    eslint          = require('gulp-eslint'),
    htmlhint        = require('gulp-htmlhint'),
    htmlmin         = require('gulp-htmlmin'),
    imagemin        = require('gulp-imagemin'),
    sass            = require('gulp-sass'),
    source          = require('vinyl-source-stream'),
    stripDebug      = require('gulp-strip-debug'),
    uglify          = require('gulp-uglify'),
    util            = require('gulp-util');


/////////////////////////////////////////////////////////////////////////
//                              PATH                                   //
/////////////////////////////////////////////////////////////////////////


let path = {};

path.dev    = {};
path.public = {};

path.dev.app = "dev/app/";

let assets   = "dev/assets/";
path.dev.fonts = assets + "fonts/";
path.dev.img   = assets + "img/";
path.dev.lib   = assets + "lib/";

let pbl = "dist/";

path.public.css       = pbl + "css/";
path.public.fonts     = pbl + "fonts/";
path.public.img       = pbl + "img/";
path.public.js        = pbl + "js/";
path.public.lib       = pbl + "lib/";
path.public.templates = pbl + "templates/";

let production = util.env.type === 'prod';


/////////////////////////////////////////////////////////////////////////
//                            SOURCE                                   //
/////////////////////////////////////////////////////////////////////////



let appJs       = [ path.dev.app + "**/*.js" ],
    fonts       = [ path.dev.fonts + "*.ttf", path.dev.fonts + "*.woff", 
                    path.dev.fonts + "*.woff2", path.dev.fonts + "*.eot" ],
    vendorCss   = [ path.dev.lib + "**/*.css", path.dev.lib + "**/*.*.css" ],
    sassSrc     = [ path.dev.app + "**/*.scss" ],
    templateSrc = [ path.dev.app + "**/*.html", path.dev.app + "**/*.*.html" ],
    imgSrc      = [ path.dev.img + "*.jpg", path.dev.img + "*.png", path.dev.img + "*.svg" ];


/////////////////////////////////////////////////////////////////////////
//                            JS TASKS                                 //
/////////////////////////////////////////////////////////////////////////


gulp.task ( 'js-lint', () => {
	return gulp.src( appJs )
		.pipe(eslint({
			rules: {
				'strict': 1,
				'comma-dangle': 2,
				'vars-on-top': 1,
				'block-spacing': 1,
				'comma-spacing': 1,
				'array-bracket-spacing': 1,
				'comma-style': 1,
				'space-infix-ops': 1,
				'space-before-func-paren': 1,
				'space-before-blocks': 1
			},
			env: {
				es6: true
			}
		})) 
        .pipe(eslint.format())
        .pipe(babel({presets: [ 'es2015' ] }));
} );

gulp.task ( 'js', [ 'js-lint' ], () => {
	return browserify ('dev/app/app.bootstrap.js')
		.bundle()
		.pipe( source( 'bundle.js' ) )
		.pipe( production ? uglify() : util.noop() )
		.pipe( production ? stripDebug() : util.noop() )
		.pipe( gulp.dest(path.public.js) );
} );


/////////////////////////////////////////////////////////////////////////
//                            CSS TASKS                                //
/////////////////////////////////////////////////////////////////////////



gulp.task ( 'css', () => {
	return gulp.src ( sassSrc )
		.pipe( sass() )
		.pipe( concat('style.css') )
		.pipe( csso (
			{
	            restructure: production,
	            sourceMap: !production,
	            debug: !production
        	}
        ))
		.pipe( production ? util.noop() : csscomb() )
		.pipe( autoprefixer( { browsers: [ "> 0%" ] } ) )
		.pipe( gulp.dest(path.public.css) );
} );

gulp.task ( 'vendor-css', () => {
	return gulp.src ( vendorCss )
		.pipe( concat('vendor.css') )
		.pipe( csso (
			{
	            restructure: production,
	            sourceMap: !production,
	            debug: !production
        	}
        ))
		.pipe( production ? util.noop() : csscomb() )
		.pipe( gulp.dest(path.public.lib) );
} );


/////////////////////////////////////////////////////////////////////////
//                           HTML TASKS                                //
/////////////////////////////////////////////////////////////////////////


gulp.task ( 'templates', () => {
	return gulp.src( templateSrc )
		.pipe( htmlmin( { collapseWhitespace: true } ) )
		.pipe( htmlhint() )
		.pipe( gulp.dest( path.public.templates ) );
} );


/////////////////////////////////////////////////////////////////////////
//                       RESOURCES TASKS                               //
/////////////////////////////////////////////////////////////////////////



gulp.task ( 'img', () => {
	return gulp.src( imgSrc )
		.pipe( imagemin() )
		.pipe( gulp.dest( path.public.img ) );
} );

gulp.task ( 'fonts', () => {
	return gulp.src( fonts )
		.pipe( gulp.dest(path.public.fonts) );
} );



/////////////////////////////////////////////////////////////////////////
//                              WATCH                                  //
/////////////////////////////////////////////////////////////////////////



gulp.task ( 'watch', () => {
	gulp.watch ( appJs, ['js'] );
	gulp.watch ( vendorCss, ['vendor-css'] );
	gulp.watch ( sassSrc, ['css'] );
	gulp.watch ( templateSrc, ['templates'] );
	gulp.watch ( imgSrc, ['img'] );
	gulp.watch ( fonts, ['fonts'] );
} );



/////////////////////////////////////////////////////////////////////////
//                            DEFAULT                                  //
/////////////////////////////////////////////////////////////////////////


gulp.task ( 'default', [ 'js', 'vendor-css', 'css', 
                         'img', 'fonts', 'templates', 'watch' ] );