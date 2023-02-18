import "../src/style/globals.css"
import "../src/style/article-markdown.css"
import "../src/style/comment-markdown.css"
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
