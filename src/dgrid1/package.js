// jshint unused: false
var profile = (function () {
	var copyOnlyMids = {
		'dgrid1/Gruntfile': 1,
		'dgrid1/package': 1
	};
	var miniExcludeMids = {
		'dgrid1/CHANGES.md': 1,
		'dgrid1/LICENSE': 1,
		'dgrid1/README.md': 1,
		'dgrid1/Gruntfile': 1,
		'dgrid1/package': 1
	};
	var amdRegex = /\.js$/;
	var isDemoRegex = /\/demos\//;
	var isStylusRegex = /\.styl$/;
	var isTestRegex = /\/test\//;

	return {
		resourceTags: {
			copyOnly: function (filename, mid) {
				return (mid in copyOnlyMids) || isDemoRegex.test(filename) || isTestRegex.test(filename);
			},

			test: function (filename) {
				return isTestRegex.test(filename);
			},

			miniExclude: function (filename, mid) {
				return isDemoRegex.test(filename) ||
					isStylusRegex.test(filename) ||
					isTestRegex.test(filename) ||
					mid in miniExcludeMids;
			},

			amd: function (filename) {
				return amdRegex.test(filename);
			}
		},

		trees: [
			[ '.', '.', /(?:\/\.)|(?:~$)|(?:(?:html-report|node_modules|nib|nodes)\/)/ ]
		]
	};
})();
