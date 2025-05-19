import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  docs: {
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  // staticDirs: ['../public'],
};

export default config;
