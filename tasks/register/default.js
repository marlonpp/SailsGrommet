module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'grommet:dev',
			'images',
			['watch:api', 'watch:assets'],
			cb
		);
	});
};
