const path = require("path")

module.exports = config => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@component": path.resolve(__dirname, "./src/component/"),
      "@plugin": path.resolve(__dirname, "./src/plugin/"),
    },
  }

  return config
}
