import "~/style/global.css"
import "~/style/storybook.css"
import "highlight.js/styles/atom-one-dark.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}