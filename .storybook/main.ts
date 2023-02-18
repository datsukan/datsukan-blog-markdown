const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "@storybook/addon-links",
    // "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // "@storybook/preset-create-react-app",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     configureJSX: true,
    //   },
    // },
    "storybook-css-modules-preset",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async baseConfig => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, "../"),
    ]
    baseConfig.resolve.alias = {
      ...(baseConfig.resolve.alias || []),
      "@component": path.resolve(__dirname, "../src/component"),
      "@plugin": path.resolve(__dirname, "../src/plugin"),
    }
    return baseConfig
  },
}
