const path = require("path");
const entryPath = path.resolve(__dirname, "src", "index.jsx");
const outputPath = path.resolve(__dirname, "dist");
const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: entryPath,
    mode: mode,
    output: {
        filename: "bundle.[hash].js",
        path: outputPath,
        publicPath: "/",
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port: 6677,
        proxy: {
            "/api": {
                target: "http://localhost:5000",
            },
        },
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    },
                },
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|otf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html",
        }),
        new CopyWebpackPlugin([
            {
                from: "./public/img",
                to: "./img",
            },
        ]),
    ],
};
