module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: __dirname + '/build/',
        filename: 'shaka.js',
        library: 'shaka',
        libraryTarget: 'window',
    },
};
