module.exports = function (gulp, plugins) {
	gulp.task('prod', function(cb) {
		plugins.sequence(
			'clean:dev',
			'grommet:dist',
			'images',
			cb
		);
	});
};
