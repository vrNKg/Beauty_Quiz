const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|ico)$/,
                use: ['file-loader']
            }
        ]
    }
    // resolve: {
    //     fallback: { 'path': require.resolve('path-browserify') },
    // },
};