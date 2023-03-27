module.exports = {
	pipeline: {
		build: {
			dependsOn: ['^build'],
			outputs: ['dist'],
		},
		dev: {
			dependsOn: ['^build'],
		},
		test: {
			dependsOn: ['^build'],
		},
	},
}
