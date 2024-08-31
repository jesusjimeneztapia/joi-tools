import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    globals: true,
    alias: {
      '@messages/': new URL('./src/messages/', import.meta.url).pathname,
      '@translations/': new URL('./src/translations/', import.meta.url).pathname,
      '@lang/': new URL('./src/lang/', import.meta.url).pathname,
    },
  },
})
