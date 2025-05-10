import { defineConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    globals: true,
    pool: 'threads',
    environment: 'jsdom',
    setupFiles: 'vitest.setup',
    include: ['src/**/*.(spec|test).ts?(x)'],
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src'],
      exclude: ['src/**/!(*.spec|*.test).ts?(x)'],
    },
  },
});
