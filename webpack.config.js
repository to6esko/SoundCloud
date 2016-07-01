module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publickPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot:true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader:'react-hot!babel'
            }
        ]
    },
    resolve: {
        extensions:['','.js','.jsx']
    }
};