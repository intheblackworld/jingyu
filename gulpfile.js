const gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var sass = require('gulp-sass')

// ***** Move JS Files to src/js ******
gulp.task('js', function() {
  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js',
      'node_modules/owl.carousel2/dist/owl.carousel.min.js',
      'node_modules/wowjs/dist/wow.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
      'node_modules/jarallax/dist/jarallax.min.js',
      'node_modules/jarallax/dist/jarallax-video.min.js',
      'node_modules/counterup/jquery.counterup.min.js',
      'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
      'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
      'node_modules/jquery-animated-headlines/dist/js/jquery.animatedheadline.min.js',
      'node_modules/jquery-waypoints/waypoints.min.js',
      'node_modules/jquery.nicescroll/dist/jquery.nicescroll.min.js',
      'node_modules/jquery.easing/jquery.easing.min.js'
    ])
    .pipe(gulp.dest("src/js"))
});

// ****** Combine All js files into one ******
gulp.task('scripts', function() {
  return gulp.src([
    './src/js/default-assets/avoid.console.error.js',
    './src/js/default-assets/classynav.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'node_modules/wowjs/dist/wow.min.js',
    'node_modules/jquery-waypoints/waypoints.min.js',
    'node_modules/counterup/jquery.counterup.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
    'node_modules/jarallax/dist/jarallax.min.js',
    'node_modules/jarallax/dist/jarallax-video.min.js',
    'node_modules/jquery-animated-headlines/dist/js/jquery.animatedheadline.min.js',
    'node_modules/jquery.nicescroll/dist/jquery.nicescroll.min.js',
    './src/js/default-assets/jquery.scrollup.min.js',
    'node_modules/jquery.easing/jquery.easing.min.js',
    './src/js/default-assets/jquery.one-page-nav.js',
    './src/js/default-assets/ajax-content.js'
  ])
    .pipe(concat('reen.bundle.js'))
    .pipe(gulp.dest('./src/js/'))
});

// ****** Move Font Awesome Fonts to src/fonts ******
gulp.task('fafonts', function() {
  return gulp.src([
      'node_modules/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('src/fonts'))
})

// ****** Move Elegant Icons Fonts to src/css ******
gulp.task('elefonts', function() {
  return gulp.src([
      'node_modules/elegant-icons/fonts/*'
    ])
    .pipe(gulp.dest('src/css/fonts'))
})

// ****** Move CSS to src/css ******
gulp.task('css', function() {
  return gulp.src([
      // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
      // 'node_modules/font-awesome/css/font-awesome.min.css',
      // 'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
      // 'node_modules/elegant-icons/style.css',
      // 'node_modules/wowjs/css/libs/animate.css',
      // 'node_modules/magnific-popup/dist/magnific-popup.css',
      // 'node_modules/jquery-animated-headlines/dist/css/jquery.animatedheadline.css',
      'src/scss/style.scss',
    ])
    .pipe(sass())
    .pipe(gulp.dest('src'))
    .pipe(connect.reload())
})
 
gulp.task('server', function() {
  connect.server({
    livereload: true,
  });
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['js', 'scripts', 'css', 'fafonts', 'elefonts', 'server', 'watch']);
