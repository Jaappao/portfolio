module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/portfolio",
  assetPrefix: process.env.GITHUB_ACTIONS && "/portfolio",
    webpack: function (config) {
        config.module.rules.push(
          {
            test: /\.ya?ml$/,
            use: 'js-yaml-loader',
          },
        )
        return config
      }
}