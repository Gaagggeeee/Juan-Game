module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: {},
        transcludeMarkdown: true
      }
    }
  ],
  "staticDirs": ['../public'],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": require("svelte-preprocess")()
  }
}