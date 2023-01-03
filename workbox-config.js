module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,png,html,json,css}'
	],
	swDest: 'script/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	exclude: 'serviceworker.js'
};