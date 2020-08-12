'use strict'
module.exports = () => ({
	parser: false,
	plugins: {
		'postcss-easy-import': {},
		'postcss-mixins': {},
		'postcss-conditionals': {},
		'postcss-simple-vars': {},
		'postcss-nested': {},
		autoprefixer: {}
	}
})
