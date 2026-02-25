// @ts-check
import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // Your custom configs here
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
    },
  },
  {
    // Ignore License.js (it's a text file, not JavaScript)
    ignores: ['License.js'],
  },
).overrideRules({
  'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
})
