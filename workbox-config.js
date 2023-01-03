module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,png,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};