const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.join(__dirname, "./src/index.jsx"),
	output: {
		path: path.join(__dirname, "./dist/index.js"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "/src/index.html"),
    filename: "./index.html",
  })],
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devServer: {
		port: 3001,
	},
};
