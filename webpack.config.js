var webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),

	],

	output: {
		"filename": "[name].min.js"
	},


	stats: {
		colors: true,
		reasons: true
	},

//	devtool: 'source-map',
	devtool: 'nosources-source-map',

	module: {
		rules: [
			{
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"babel-preset-env",
							"babel-preset-react"
						]
					}
				},
				exclude: [
					/node_modules/,
				],
				test: /\.js$/
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},
	
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	
	entry: {
		index: [
			"./src/scss/styles"
		],
		script:     "./src/js/index",
	},

	mode: 'production',
	
//	watch: true,

};


