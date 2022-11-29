
module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-custom-media': {},
        'postcss-css-variables': {},
        'postcss-nested': {},
        'postcss-discard-comments': { removeAll: true },
        autoprefixer: {},
        'postcss-preset-env': {},
        'postcss-flexbugs-fixes': {},
        cssnano: {
            preset: 'default',
        }
    },
};