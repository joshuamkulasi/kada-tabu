import { defineConfig } from 'eslint-config-next';

export default defineConfig({
  extends: 'next/core-web-vitals',
  rules: {
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
  },
});
